import {stArrayClass, STClass, stIntegerClass, STMethod} from "./ast-objects";
import llvm, {AllocaInst} from "llvm-bindings";
import {CodeGenerator} from "./code-generator";
import _ from "lodash";

export interface ISTNode {
    isEmpty: boolean;
    getClassName: string;
    varName?: string;
}

export class STNode implements ISTNode {
    public isEmpty = false;
    public getClassName = 'Node';
    public varName?: string;
}

export class STEmptyNode extends STNode {
    public isEmpty = true;
    public getClassName = 'EmptyNode';
}

export class STObjectNode extends STNode {
    obj?: STClass;
    public getClassName = 'Value';
}

export class STScript extends STNode {
    startingSequence?: STSequence;

    public getClassName = 'Script';
}

export class STBlock extends STObjectNode {
    blockParamList?: STBlockParams;

    // Calling method on block calls it on last statement or answer result
    sequence?: STSequence;

    public getClassName = 'Block';

    public codegen(generator: CodeGenerator, varName?: string) {
        this.blockParamList?.codegen(generator);

        const paramNames = this?.blockParamList?.identifiers;

        let func: llvm.Function | undefined | null;
        if (varName) {
            func = generator.rootModule?.getFunction(varName)!;
        } else {
            const paramTypes = paramNames?.map(param => {
                const paramVar = generator.symbols.get(param);

                if (!paramVar) {
                    throw new Error(`Variable ${varName} not defined`);
                }

                return getVariableType(paramVar);
            }) ?? [];

            const blockRetType = getMessageType(
                _.last(this.sequence?.statements?.expressions)! as STMessage,
                generator.symbols
            );

            let retType: llvm.Type;
            if (blockRetType === 'Nil') {
                retType = generator.builder.getVoidTy();
            } else if (blockRetType === 'Boolean') {
                retType = generator.builder.getInt1Ty();
            } else if (blockRetType === 'Integer') {
                retType = generator.builder.getInt32Ty();
            }

            const funcParamTypes = paramTypes.map(tp => {
                if (tp === 'Nil') {
                    // return generator.builder.getVoidTy();
                    return generator.builder.getInt32Ty();
                }
                if (tp === 'Boolean') {
                    return generator.builder.getInt1Ty();
                }
                if (tp === 'Integer') {
                    return generator.builder.getInt32Ty();
                }
                return generator.builder.getVoidTy();
            });

            const blockFnType = funcParamTypes.length === 0
                ? llvm.FunctionType.get(retType!, false)
                : llvm.FunctionType.get(retType!, funcParamTypes, false);
            func = llvm.Function.Create(
                blockFnType,
                llvm.Function.LinkageTypes.ExternalLinkage,
                'anonFn',
                generator.rootModule,
            );

            paramNames?.forEach((paramName, i) => {
                const arg = func!.getArg(i);
                arg.setName(paramName);
            });
        }

        const prevFunc = generator.currentFn;
        generator.currentFn = func;
        const fnBB = llvm.BasicBlock.Create(generator.rootContext, varName ?? 'anon_fn', func!);
        generator.BBStack.push(fnBB);
        generator.builder.SetInsertPoint(fnBB);

        for (let i = 0; i < func.arg_size(); i++) {
            const arg = func.getArg(i);
            generator.builder.CreateStore(arg, generator.variables.get(paramNames![i])!);
        }

        const retVal = generator.genSequence(this.sequence!);

        if (retVal) {
            generator.builder.CreateRet(retVal);
        } else {
            generator.builder.CreateRetVoid();
        }
        generator.BBStack.pop();
        generator.builder.SetInsertPoint(generator.BBStack[generator.BBStack.length - 1]);
        generator.currentFn = prevFunc;

        if (llvm.verifyFunction(func)) {
            console.error(`Verifying function ${varName ?? 'anon_fn'} failed`);
        }

        return func;
    }
}

export class STSequence extends STObjectNode {
    temps?: STTemps;
    statements?: STStatements;

    public getClassName = 'Sequence';

    codegen(generator: CodeGenerator) {
        this.temps?.codegen(generator);

        if (!this.statements?.expressions) {
            return;
        }

        let retVal;
        for (const expr of this.statements.expressions) {
            retVal = generator.genExpression(expr as STMessage);
        }

        return retVal;
    }
}

export class STTemps extends STNode {
    identifiers?: string[];

    public getClassName = 'Temps';

    codegen(generator: CodeGenerator) {
        if (!this.identifiers) {
            throw new Error('Identifiers are missing');
        }

        for (const ident of this.identifiers) {
            const variable = generator.symbols.get(ident);

            if (!variable) {
                throw new Error(`Variable ${ident} not defined`);
            }

            const varType = getVariableType(variable);

            if (varType === 'Integer') {
                const varValue = new llvm.GlobalVariable(
                    generator.rootModule!,
                    generator.builder.getInt32Ty(),
                    false,
                    llvm.GlobalVariable.LinkageTypes.ExternalLinkage,
                    generator.builder.getInt32(0),
                    ident
                );

                generator.variables.set(ident, varValue);
            }

            if (varType === 'Boolean') {
                const varValue = new llvm.GlobalVariable(
                    generator.rootModule!,
                    generator.builder.getInt1Ty(),
                    false,
                    llvm.GlobalVariable.LinkageTypes.ExternalLinkage,
                    generator.builder.getInt1(false),
                    ident
                );
                generator.variables.set(ident, varValue);
            }

            if (varType.includes('Array')) {
                // array of pointers
                // TODO: extend to all types
                const typeParts = varType.split(' ');
                const arrType = llvm.ArrayType.get(generator.builder.getInt32Ty(), Number(typeParts[1]));

                const varValue = new llvm.GlobalVariable(
                    generator.rootModule!,
                    llvm.PointerType.getUnqual(arrType),
                    false,
                    llvm.GlobalVariable.LinkageTypes.ExternalLinkage,
                    llvm.ConstantPointerNull.get(llvm.PointerType.getUnqual(arrType)),
                    ident
                );

                generator.variables.set(ident, varValue);
            }

            if (varType.includes('Function')) {
                const paramNames = ((variable.ref as STMessage).receiver as STBlock)?.blockParamList?.identifiers;

                const paramTypes = paramNames?.map(param => {
                    const paramVar = generator.symbols.get(param);

                    if (!paramVar) {
                        throw new Error(`Variable ${ident} not defined`);
                    }

                    return getVariableType(paramVar);
                }) ?? [];

                const blockRetType = varType.replace('Function ', '');
                // console.log(blockRetType);

                let retType: llvm.Type;
                if (blockRetType === 'Nil') {
                    retType = generator.builder.getVoidTy();
                } else if (blockRetType === 'Boolean') {
                    retType = generator.builder.getInt1Ty();
                } else if (blockRetType === 'Integer') {
                    retType = generator.builder.getInt32Ty();
                }

                const funcParamTypes = paramTypes.map(tp => {
                    if (tp === 'Nil') {
                        // return generator.builder.getVoidTy();
                        return generator.builder.getInt32Ty();
                    }
                    if (tp === 'Boolean') {
                        return generator.builder.getInt1Ty();
                    }
                    if (tp === 'Integer') {
                        return generator.builder.getInt32Ty();
                    }
                    return generator.builder.getVoidTy();
                });

                const blockFnType = funcParamTypes.length === 0
                    ? llvm.FunctionType.get(retType!, false)
                    : llvm.FunctionType.get(retType!, funcParamTypes, false);
                const blockFn = llvm.Function.Create(
                    blockFnType,
                    llvm.Function.LinkageTypes.ExternalLinkage,
                    ident,
                    generator.rootModule,
                );

                paramNames?.forEach((paramName, i) => {
                    const arg = blockFn.getArg(i);
                    arg.setName(paramName);
                });
            }

            if (varType === 'Nil') {
                const varValue = new llvm.GlobalVariable(
                    generator.rootModule!,
                    generator.builder.getInt32Ty(),
                    false,
                    llvm.GlobalVariable.LinkageTypes.ExternalLinkage,
                    generator.builder.getInt32(0),
                    ident
                );

                generator.variables.set(ident, varValue);
            }
        }
    }
}

export class STBlockParams extends STTemps {
    public getClassName = 'BlockParams';
}

export class STStatements extends STObjectNode {
    answer?: never;
    expressions?: STMessage[];

    public getClassName = 'Statements';
}

export class STExpression extends STObjectNode {
    message?: STMessage;

    public getClassName = 'Expression';
}

export class STVariable extends STObjectNode {
    varName = '';
    ref: STObjectNode = new STEmptyNode();

    public getClassName = 'Variable';

    constructor(name?: string) {
        super();

        this.varName = name ?? '';
    }

    codegen(generator: CodeGenerator) {
        let receiverVar = generator.variables.get(this.varName)!;
        // console.log(this.varName, receiverVar);

        if (!receiverVar) {
            // receiverVar = this.builder.CreateAlloca(this.builder.getInt32Ty(), null, receiver.varName!);
            // this.variables.set(receiver.varName!, receiverVar);
        }

        if (receiverVar instanceof llvm.GlobalVariable) {
            return generator.builder.CreateLoad(receiverVar.getType().getPointerElementType(), receiverVar);
        }

        return receiverVar;
    }
}

export class STMessage extends STObjectNode {
    receiver?: STMessage;
    message?: STMethod;
    chainedMessage?: STMessage;

    public getClassName = 'Message';

    codegen(generator: CodeGenerator, receiver?: llvm.Value): llvm.Value {
        if (!receiver) {
            if (this.receiver?.getClassName === 'Block') {
                receiver = generator.genReceiver(this.receiver!, this.varName);
            } else {
                receiver = generator.genReceiver(this.receiver!);
            }
        }

        if (this.message) {
            let messageFn;

            if (this.message.name === 'size' && this.message.codegen) {
                const array = (receiver as AllocaInst);

                messageFn = this.message.codegen(generator, array);
            }

            if (this.message.name === 'printfInt' && this.message.codegen) {
                const num = (receiver as AllocaInst);

                messageFn = this.message.codegen(generator, num);
            }

            if (this.message.name === 'whileTrue' && this.message.codegen) {
                const blockFn = (receiver as llvm.Function);

                return this.message.codegen(generator, blockFn);
            }

            if (!messageFn) {
                throw new Error(`Method ${this.message.name} not found`);
            }

            return generator.builder.CreateCall(messageFn, [receiver]);
        }

        if (this.chainedMessage) {
            return generator.genMessage(this.chainedMessage, receiver);
        }

        return receiver;
    }
}

export class STBinaryMessage extends STMessage {
    operation?: string;
    secondOperand?: STMessage;

    public getClassName = 'BinaryMessage';

    public codegen(generator: CodeGenerator, receiver?: llvm.Value) {

        if (!receiver) {
            if (this.receiver?.getClassName === 'Block') {
                receiver = generator.genReceiver(this.receiver, this.varName);
            } else {
                receiver = generator.genReceiver(this.receiver!);
            }
        }

        const secOperand = generator.genMessage(this.secondOperand!);

        let opRes;
        if (this.operation === '+') {
            opRes = generator.builder.CreateAdd(receiver, secOperand);
        }

        if (this.operation === '-') {
            opRes = generator.builder.CreateSub(receiver, secOperand);
        }

        if (this.operation === '*') {
            opRes = generator.builder.CreateMul(receiver, secOperand);
        }

        if (this.operation === '>') {
            opRes = generator.builder.CreateICmpSGT(receiver, secOperand);
        }

        if (this.operation === '<') {
            opRes = generator.builder.CreateICmpSLT(receiver, secOperand);
        }

        if (this.operation === '=') {
            opRes = generator.builder.CreateICmpEQ(receiver, secOperand);
        }

        if (this.chainedMessage) {
            return generator.genMessage(this.chainedMessage, opRes);
        }

        return (opRes as llvm.Value)!;
    }
}

export class STKeywordMessage extends STMessage {
    arguments: STMessage[] = [];

    public getClassName = 'KeywordMessage';

    public codegen(generator: CodeGenerator, receiver?: llvm.Value) {
        if (!receiver) {
            if (this.receiver?.getClassName === 'Block') {
                receiver = generator.genReceiver(this.receiver!, this.varName);
            } else {
                receiver = generator.genReceiver(this.receiver!);
            }
        }

        if (this.message) {
            let messageFn;

            if (this.message.name === 'at:' && this.message.codegen) {
                const array = (receiver as AllocaInst);

                messageFn = this.message.codegen(generator, array) as llvm.Function;

                const args = this.arguments.map(arg => generator.genMessage(arg));

                return generator.builder.CreateCall(messageFn, [array, ...args]);
            }

            if (this.message.name === 'at:put:' && this.message.codegen) {
                const array = (receiver as AllocaInst);

                messageFn = this.message.codegen(generator, array) as llvm.Function;

                const args = this.arguments.map(arg => generator.genMessage(arg));

                return generator.builder.CreateCall(messageFn, [receiver, ...args]);
            }

            if (this.message.name === 'to:do:' && this.message.codegen) {
                const firstVal = (receiver as llvm.ConstantInt);

                const args = this.arguments.map(arg => generator.genMessage(arg));
                const [ secondVal, blockFn ] = args;

                return this.message.codegen(generator, firstVal, secondVal, blockFn);
            }

            if (this.message.name === 'ifTrue:' && this.message.codegen) {
                const cond = (receiver as llvm.Value);

                const [blockFn] = this.arguments.map(arg => generator.genMessage(arg));

                return this.message.codegen(generator, cond, blockFn);
            }

            if (this.message.name === 'value:value:' && this.message.codegen) {
                const blockFn = receiver;

                const args = this.arguments.map(arg => generator.genMessage(arg));

                return this.message.codegen(generator, blockFn as llvm.Function, args[0], args[1]);
            }

            if (!messageFn) {
                throw new Error(`Method ${this.message.name} not found`);
            }

            return generator.builder.CreateCall(messageFn, [receiver]);
        }

        if (this.chainedMessage) {
            return generator.genMessage(this.chainedMessage, receiver);
        }

        return receiver;
    }
}

export class STLiteralArray extends STObjectNode {
    elements?: STNode[];
    obj = stArrayClass;

    public getClassName = 'LiteralArray';

    public codegen(generator: CodeGenerator, varName?: string) {

        const varType = getLiteralArrayType(this);
        const typeParts = varType.split(' ');
        const arrType = llvm.ArrayType.get(generator.builder.getInt32Ty(), Number(typeParts[1]));

        const arr = generator.builder.CreateAlloca(arrType, null, 'lit_arr');

        if (!this.elements) {
            return arr;
        }

        for (let i = 0; i < this.elements.length; i++) {
            const ptrCast = generator.builder.CreatePointerCast(arr, llvm.PointerType.getUnqual(arrType.getElementType()));
            const gep = generator.builder.CreateGEP(
                generator.builder.getInt32Ty(),
                ptrCast,
                generator.builder.getInt32(i),
                `lit_arr_gep` + i,
            );

            generator.builder.CreateStore(
                generator.builder.getInt32((this.elements[i] as STInteger).value ?? 0),
                gep
            );
        }

        if (varName) {
            const arrVar = generator.variables.get(varName)!;
            generator.builder.CreateStore(arr, generator.variables.get(varName)!);
            return arrVar;
        }

        return arr;
    }
}

export class STInteger extends STObjectNode {
    obj = stIntegerClass;
    value?: number;

    public getClassName = 'Integer';

    codegen(generator: CodeGenerator) {
        return generator.builder.getInt32(this.value ?? 0);
    }
}

function getVariableType(variable: STVariable, symbols?: Map<string, STVariable>) {
    if (variable.varName === 'true' || variable.varName === 'false') {
        return 'Boolean';
    }

    const symVariable = symbols?.get(variable.varName) ?? variable;
    const refMessage = symVariable.ref;

    if (refMessage.getClassName === 'BinaryMessage') {
        const msg = refMessage as STBinaryMessage;
        const receiverType = getMessageType(msg.receiver!, symbols)
        if (receiverType === 'Nil') {
            return getMessageType(msg.secondOperand!, symbols);
        }
        return receiverType;
    }

    if (refMessage.getClassName === 'Message') {
        return getMessageType(refMessage as STMessage, symbols);
    }

    return 'Nil';
}

function getMessageType(message: STMessage, symbols?: Map<string, STVariable>): string {
    if (message.getClassName === 'BinaryMessage') {
        const binaryMessage = message as STBinaryMessage;

        if (binaryMessage.operation === '>' || binaryMessage.operation === '<' || binaryMessage.operation === '=') {
            return 'Boolean';
        }

        if (binaryMessage.operation === '-' || binaryMessage.operation === '+' || binaryMessage.operation === '*') {
            // TODO: Parse args to distinct int and float
            return 'Integer';
        }

        return 'Nil';
    }

    if (!message.message && !message.chainedMessage) {
        if (!message.receiver) {
            return 'Nil';
        }

        if (message.receiver.getClassName === 'Variable') {
            return getVariableType(message.receiver as STVariable, symbols);
        }

        if (message.receiver.getClassName === 'Block') {
            return getBlockType(message.receiver as STBlock, symbols);
        }

        // TODO: extend
        if (message.receiver.getClassName === 'Integer') {
            return 'Integer';
        }

        if (message.receiver.getClassName === 'LiteralArray') {
            return getLiteralArrayType(message.receiver as STLiteralArray, symbols);
        }

        return 'Nil';
    }

    if (!message.chainedMessage) {
        if (message.receiver?.getClassName === 'LiteralArray') {
            return getLiteralArrayType(message.receiver as STLiteralArray, symbols);
        }

        return message.message?.retType?.className || 'Nil';
    }

    return getMessageType(message.chainedMessage);
}

function getBlockType(block: STBlock, symbols?: Map<string, STVariable>) {
    let resType = 'Function'

    if (!block.sequence || !block.sequence.statements) {
        return `${resType} Nil`;
    }

    const lastStatement = _.last(block.sequence.statements.expressions) as STMessage | STEmptyNode;

    if (!lastStatement || lastStatement.getClassName === 'EmptyNode') {
        return `${resType} Nil`;
    }

    const lastMessage = lastStatement as STMessage;

    return `${resType} ${getMessageType(lastMessage, symbols)}`;
}

function getLiteralArrayType(arr: STLiteralArray, symbols?: Map<string, STVariable>) {
    const nElems = arr.elements?.length ?? 0;

    return `Array ${nElems}`;
}
