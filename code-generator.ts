import {
    STBinaryMessage,
    STBlock,
    STExpression,
    STInteger,
    STKeywordMessage,
    STLiteralArray,
    STMessage,
    STObjectNode,
    STScript,
    STSequence,
    STVariable
} from "./ast-nodes";
import llvm from "llvm-bindings";

export class CodeGenerator {
    public rootContext = new llvm.LLVMContext();
    public rootModule?: llvm.Module;
    public builder = new llvm.IRBuilder(this.rootContext);
    public BBStack: llvm.BasicBlock[] = [];
    public currentFn?: llvm.Function;

    public symbols = new Map<string, STVariable>();
    public variables = new Map<string, llvm.Value>();

    public printConstant?: llvm.GlobalObject;

    generate(rootNode: STScript) {
        this.rootModule = new llvm.Module('cw-root', this.rootContext);

        const mainFnType = llvm.FunctionType.get(this.builder.getInt32Ty(), false);
        const mainFn = llvm.Function.Create(
            mainFnType,
            llvm.Function.LinkageTypes.ExternalLinkage,
            'main',
            this.rootModule
        );

        this.currentFn = mainFn;
        const block = llvm.BasicBlock.Create(this.rootContext, 'main_bb', this.currentFn);
        this.BBStack.push(block);
        this.builder.SetInsertPoint(block);

        this.genPseudoVariables();

        this.printConstant = this.builder.CreateGlobalString('%d\n', 'print_format');

        this.genSequence(rootNode.startingSequence!);



        this.builder.CreateRet(this.builder.getInt32(0));

        if (llvm.verifyFunction(mainFn)) {
            console.error(`Verifying function 'main' failed`);
            // return;
        }

        if (llvm.verifyModule(this.rootModule)) {
            console.error('Verifying module failed');
            return;
        }

        return this.rootModule.print();
    }

    genPseudoVariables() {
        for (const ident of this.symbols.entries()) {
            if (ident[0] === 'true') {
                const trueVar = new llvm.GlobalVariable(
                    this.rootModule!,
                    this.builder.getInt1Ty(),
                    false,
                    llvm.GlobalVariable.LinkageTypes.ExternalLinkage,
                    this.builder.getInt1(true),
                    'true'
                );

                this.variables.set('true', trueVar);
            }

            if (ident[0] === 'false') {
                const falseVar = new llvm.GlobalVariable(
                    this.rootModule!,
                    this.builder.getInt1Ty(),
                    false,
                    llvm.GlobalVariable.LinkageTypes.ExternalLinkage,
                    this.builder.getInt1(false),
                    'false'
                );

                this.variables.set('false', falseVar);
            }
        }
    }

    genSequence(seq: STSequence) {
        return seq.codegen(this);
    }

    genExpression(expr: STMessage) {
        const varName = expr.varName!;

        const resultValue = this.genMessage(expr);

        if (varName) {
            let variable = this.variables.get(varName);

            if (!variable) {
                if (resultValue instanceof llvm.Function) {
                    variable = this.rootModule?.getFunction(varName)!;

                    this.variables.set(varName, variable);

                    return variable;
                } else {
                    variable = new llvm.GlobalVariable(
                        this.rootModule!,
                        resultValue.getType(),
                        false,
                        llvm.GlobalVariable.LinkageTypes.ExternalLinkage,
                        this.builder.getInt32(0),
                        varName,
                    );
                }

                this.variables.set(varName, variable);
            }

            this.builder.CreateStore(resultValue, variable);
        }

        return resultValue;
    }

    genMessage(msg: STMessage, receiver?: llvm.Value): llvm.Value {
        if (!msg.message && !msg.receiver && msg.chainedMessage) {
            return this.genMessage(msg.chainedMessage, receiver);
        }

        if (msg.getClassName === 'KeywordMessage') {
            return (msg as STKeywordMessage).codegen(this, receiver);
        }

        if (msg.getClassName === 'BinaryMessage') {
            const binMessage = msg as STBinaryMessage;

            return binMessage.codegen(this, receiver);
        }

        return msg.codegen(this, receiver);
    }

    genReceiver(receiver: STObjectNode, varName?: string) {
        if (receiver.getClassName === 'LiteralArray') {
            return (receiver as STLiteralArray).codegen(this, varName);
        }

        if (receiver.getClassName === 'Block') {
            return (receiver as STBlock).codegen(this, varName);
        }

        if (receiver.getClassName === 'Variable') {
            return (receiver as STVariable).codegen(this);
        }

        if (receiver.getClassName === 'Integer') {
            return (receiver as STInteger).codegen(this);
        }

        return this.genMessage(receiver as STMessage);
    }

    genCallPrintf(val: llvm.Value) {
        const printf = this.rootModule!.getOrInsertFunction("printf",
            llvm.FunctionType.get(
                llvm.IntegerType.getInt32Ty(this.rootContext),
                [llvm.PointerType.get(this.printConstant!.getType().getPointerElementType(), 0)],
                true /* this is var arg func type*/
            )
        );

        // @ts-ignore
        return this.builder.CreateCall(printf, [this.printConstant, val], 'printf_call');
    }
}
