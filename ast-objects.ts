import {CodeGenerator} from "./code-generator";
import llvm, {AllocaInst} from "llvm-bindings";

export class STObject {
    oClass?: STClass;
}

export class STClass extends STObject {
    instanceVariableNames?: never;
    classVariableNames?: never;
    poolDictionaries?: never;
    category?: never;

    instanceMethods?: string[];
    classMethods?: string[];

    base?: STClass;

    oClass = stClassClass;

    className: string;

    constructor(name: string, base?: STClass) {
        super();

        this.className = name;
        this.base = base;
    }
}

export class STMethod extends STObject {
    name?: string;
    retType?: STClass;

    constructor(name?: string, retClass?: STClass) {
        super();

        this.name = name;
        this.retType = retClass;
    }

    codegen?: Function;
}

/*
---------------------- CLASS DEFINITIONS -------------------
 */

export function extendClass(base: STClass, name: string) {
    return new STClass(name, base);
}

export const stObjectClass = new STClass('Object');
export const stClassClass = extendClass(stObjectClass, 'Class');
export const stArrayClass = extendClass(stObjectClass, 'Array');
export const stIntegerClass = extendClass(stObjectClass, 'Integer');
export const stBooleanClass = extendClass(stObjectClass, 'Boolean');
export const stBlockClass = extendClass(stObjectClass, 'Block');


export const stMethodNew = new STMethod('new', stObjectClass);
export const stMethodWhileTrue = new STMethod('whileTrue');
export const stMethodValue = new STMethod('value:', stObjectClass);
export const stMethodValueValue = new STMethod('value:value:', stObjectClass);

export const stMethodAt = new STMethod('at:');
export const stMethodCopy = new STMethod('copy', stArrayClass);
export const stMethodPut = new STMethod('put:');
export const stMethodAtPut = new STMethod('at:put:', stIntegerClass);
export const stMethodSize = new STMethod('size', stIntegerClass);
export const stMethodDo = new STMethod('do:');

export const stMethodTo = new STMethod('to:', stArrayClass);
export const stMethodToDo = new STMethod('to:do:');

export const stMethodIfTrue = new STMethod('ifTrue:');

export const stMethodPrintfInt = new STMethod('printfInt', stIntegerClass);


stObjectClass.classMethods = [stMethodNew.name!];

stClassClass.classMethods = [];
stClassClass.instanceMethods = [/* stMethodSubclass */];

stArrayClass.classMethods = [];
stArrayClass.instanceMethods = [stMethodAt.name!, stMethodCopy.name!, stMethodPut.name!, stMethodSize.name!, stMethodDo.name!];

stIntegerClass.classMethods = [];
stIntegerClass.instanceMethods = [stMethodTo.name!, stMethodPrintfInt.name!];

stBooleanClass.classMethods = [];
stIntegerClass.instanceMethods = [stMethodIfTrue.name!];

stBlockClass.classMethods = [];
stBlockClass.instanceMethods = [stMethodValue.name!, stMethodWhileTrue.name!];


export const stMessages = [
    stMethodCopy,
    stMethodAt,
    stMethodNew,
    stMethodPut,
    stMethodAtPut,
    stMethodSize,
    stMethodTo,
    stMethodDo,
    stMethodToDo,
    stMethodWhileTrue,
    stMethodIfTrue,
    stMethodValue,
    stMethodValueValue,
    stMethodPrintfInt,
];

stMethodAt.codegen = ((generator: CodeGenerator, array: llvm.Value) => {
    const arrayType = (array as AllocaInst).getType().getPointerElementType() as llvm.ArrayType;

    const fnName = `at_${arrayType.getElementType().getTypeID()}_${arrayType.getNumElements()}`;

    if (generator.rootModule?.getFunction(fnName)) {
        return generator.rootModule?.getFunction(fnName)!;
    }

    const funcType = llvm.FunctionType.get(
        generator.builder.getInt32Ty(),
        [llvm.PointerType.getUnqual(arrayType), generator.builder.getInt32Ty()],
        false
    );

    const func = llvm.Function.Create(
        funcType,
        llvm.Function.LinkageTypes.ExternalLinkage,
        fnName,
        generator.rootModule
    );
    func.getArg(0).setName('arr');

    const fnBB = llvm.BasicBlock.Create(generator.rootContext, `${fnName}_fn`, func!);
    generator.BBStack.push(fnBB);
    generator.builder.SetInsertPoint(fnBB);

    const indArg = func.getArg(1);
    indArg.setName('index');
    const argCorrection = generator.builder.CreateSub(indArg, generator.builder.getInt32(1), 'index_corr');

    const ptrCast = generator.builder
        .CreatePointerCast(func.getArg(0), llvm.PointerType.getUnqual(arrayType.getElementType()));
    const atGep = generator.builder.CreateGEP(
        arrayType.getElementType(),
        ptrCast,
        argCorrection,
        'arr_at_gep',
    );

    const atLoad = generator.builder.CreateLoad(arrayType.getElementType(), atGep);

    generator.builder.CreateRet(atLoad);
    generator.BBStack.pop();
    generator.builder.SetInsertPoint(generator.BBStack[generator.BBStack.length - 1]);

    return func;
}).bind(stMethodAt);

stMethodAtPut.codegen = ((generator: CodeGenerator, array: llvm.Value) => {
    const arrayType = (array as AllocaInst).getType().getPointerElementType() as llvm.ArrayType;

    const fnName = `at_put_${arrayType.getElementType().getTypeID()}_${arrayType.getNumElements()}`;

    if (generator.rootModule?.getFunction(fnName)) {
        return generator.rootModule?.getFunction(fnName)!;
    }

    const funcType = llvm.FunctionType.get(
        generator.builder.getInt32Ty(),
        [llvm.PointerType.getUnqual(arrayType), generator.builder.getInt32Ty(), generator.builder.getInt32Ty()],
        false
    );

    const func = llvm.Function.Create(
        funcType,
        llvm.Function.LinkageTypes.ExternalLinkage,
        fnName,
        generator.rootModule
    );
    func.getArg(0).setName('arr');

    const fnBB = llvm.BasicBlock.Create(generator.rootContext, `${fnName}_fn`, func!);
    generator.BBStack.push(fnBB);
    generator.builder.SetInsertPoint(fnBB);

    const indArg = func.getArg(1);
    indArg.setName('index');
    const argCorrection = generator.builder.CreateSub(indArg, generator.builder.getInt32(1), 'index_corr');

    const ptrCast = generator.builder
        .CreatePointerCast(func.getArg(0), llvm.PointerType.getUnqual(arrayType.getElementType()));
    const atGep = generator.builder.CreateGEP(
        arrayType.getElementType(),
        ptrCast,
        argCorrection,
        'arr_at_put_gep',
    );

    const elemArg = func.getArg(2);
    elemArg.setName('elem');

    const putStore = generator.builder.CreateStore(elemArg, atGep);

    generator.builder.CreateRet(elemArg);
    generator.BBStack.pop();
    generator.builder.SetInsertPoint(generator.BBStack[generator.BBStack.length - 1]);

    return func;
}).bind(stMethodAtPut);

stMethodSize.codegen = ((generator: CodeGenerator, array: llvm.Value) => {
    const arrayType = (array as llvm.GlobalVariable).getType().getPointerElementType() as llvm.ArrayType;
    // console.log(arrayType);

    const fnName = `size_${arrayType.getElementType().getTypeID()}_${arrayType.getNumElements()}`;

    if (generator.rootModule?.getFunction(fnName)) {
        return generator.rootModule?.getFunction(fnName)!;
    }

    const funcType = llvm.FunctionType.get(
        generator.builder.getInt32Ty(),
        [(array as llvm.GlobalVariable).getType()],
        false
    );

    const func = llvm.Function.Create(
        funcType,
        llvm.Function.LinkageTypes.ExternalLinkage,
        fnName,
        generator.rootModule
    );
    func.getArg(0).setName('arr');

    const fnBB = llvm.BasicBlock.Create(generator.rootContext, `${fnName}_fn`, func!);
    generator.BBStack.push(fnBB);
    generator.builder.SetInsertPoint(fnBB);

    generator.builder.CreateRet(generator.builder.getInt32(arrayType.getNumElements()));
    generator.BBStack.pop();
    generator.builder.SetInsertPoint(generator.BBStack[generator.BBStack.length - 1]);

    return func;
}).bind(stMethodSize);

stMethodWhileTrue.codegen = ((generator: CodeGenerator, blockFn: llvm.Function) => {
    const whileBB = llvm.BasicBlock.Create(generator.rootContext, 'do_while', generator.currentFn);
    const exitBB = llvm.BasicBlock.Create(generator.rootContext, 'do_while_exit', generator.currentFn);

    generator.builder.CreateBr(whileBB);

    generator.BBStack.pop();
    generator.BBStack.push(exitBB);

    generator.BBStack.push(whileBB);
    generator.builder.SetInsertPoint(whileBB);

    const fnVal = generator.builder.CreateCall(blockFn, 'do_while_body');

    generator.builder.CreateCondBr(fnVal, whileBB, exitBB);

    generator.BBStack.pop();

    generator.builder.SetInsertPoint(exitBB);

    return generator.builder.getInt32(0);
}).bind(stMethodWhileTrue);

stMethodToDo.codegen = ((generator: CodeGenerator, fromVal: llvm.Value, toVal: llvm.Value, blockFn: llvm.Function) => {
    const toDoBB = llvm.BasicBlock.Create(generator.rootContext, 'to_do', generator.currentFn);
    const exitBB = llvm.BasicBlock.Create(generator.rootContext, 'to_do_exit', generator.currentFn);

    const indexAlloca = generator.builder.CreateAlloca(fromVal.getType(), null, 'i');
    generator.builder.CreateStore(fromVal, indexAlloca);
    let index = generator.builder.CreateLoad(fromVal.getType(), indexAlloca);

    const condOuter = generator.builder.CreateICmpSGT(index, toVal, 'to_do_cond_prev');
    generator.builder.CreateCondBr(condOuter, exitBB, toDoBB);

    generator.BBStack.pop();
    generator.BBStack.push(exitBB);

    generator.BBStack.push(toDoBB);
    generator.builder.SetInsertPoint(toDoBB);

    index = generator.builder.CreateLoad(fromVal.getType(), indexAlloca);
    const fnVal = generator.builder.CreateCall(blockFn, [index]);

    const indexAdd = generator.builder.CreateAdd(index, generator.builder.getInt32(1));
    const addStore = generator.builder.CreateStore(indexAdd, indexAlloca);
    index = generator.builder.CreateLoad(fromVal.getType(), indexAlloca);

    const cond = generator.builder.CreateICmpSGT(index, toVal, 'to_do_cond');
    generator.builder.CreateCondBr(cond, exitBB, toDoBB);

    generator.BBStack.pop();

    generator.builder.SetInsertPoint(exitBB);

    return indexAlloca;
}).bind(stMethodToDo);

stMethodIfTrue.codegen = ((generator: CodeGenerator, cond: llvm.Value, blockFn: llvm.Function) => {
    const ifTrueBB = llvm.BasicBlock.Create(generator.rootContext, 'if_true', generator.currentFn);
    const exitBB = llvm.BasicBlock.Create(generator.rootContext, 'if_true_exit', generator.currentFn);

    generator.builder.CreateCondBr(cond, ifTrueBB, exitBB);

    generator.BBStack.pop();
    generator.BBStack.push(exitBB);

    generator.BBStack.push(ifTrueBB);
    generator.builder.SetInsertPoint(ifTrueBB);

    const fnVal = generator.builder.CreateCall(blockFn);

    generator.builder.CreateBr(exitBB);
    generator.BBStack.pop();

    generator.builder.SetInsertPoint(exitBB);

    return cond;
}).bind(stMethodIfTrue);

stMethodValueValue.codegen = ((generator: CodeGenerator, fn: llvm.Function, arg1: llvm.Value, arg2: llvm.Value) => {
    return generator.builder.CreateCall(fn, [arg1, arg2]);
}).bind(stMethodValueValue);

stMethodPrintfInt.codegen = ((generator: CodeGenerator, num: llvm.Value) => {
    const fnName = `printf_int`;

    if (generator.rootModule?.getFunction(fnName)) {
        return generator.rootModule?.getFunction(fnName)!;
    }

    const funcType = llvm.FunctionType.get(
        generator.builder.getInt32Ty(),
        [num.getType()],
        false
    );

    const func = llvm.Function.Create(
        funcType,
        llvm.Function.LinkageTypes.ExternalLinkage,
        fnName,
        generator.rootModule
    );
    func.getArg(0).setName('num');

    const fnBB = llvm.BasicBlock.Create(generator.rootContext, `${fnName}_fn`, func!);
    generator.BBStack.push(fnBB);
    generator.builder.SetInsertPoint(fnBB);

    const printRes = generator.genCallPrintf(func.getArg(0));

    generator.builder.CreateRet(printRes);
    generator.BBStack.pop();
    generator.builder.SetInsertPoint(generator.BBStack[generator.BBStack.length - 1]);

    return func;
}).bind(stMethodPrintfInt);
