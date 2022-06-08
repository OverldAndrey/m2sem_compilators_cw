import {SmalltalkVisitor} from "./SmalltalkVisitor";
import {AbstractParseTreeVisitor, ErrorNode, ParseTree, RuleNode} from "antlr4ts/tree";
import {TerminalNode} from "antlr4ts/tree/TerminalNode";
import {
    AssignmentContext, BareSymbolContext, BinaryMessageContext,
    BinarySendContext, BinaryTailContext, BlockContext, BlockParamListContext,
    ExpressionContext, ExpressionsContext, KeywordMessageContext, KeywordSendContext,
    LiteralArrayContext, LiteralContext, NumberContext,
    OperandContext,
    ParsetimeLiteralContext, PseudoVariableContext, ReferenceContext, RuntimeLiteralContext,
    ScriptContext,
    SequenceContext,
    StatementExpressionsContext,
    StatementsContext, StIntegerContext, SubexpressionContext,
    TempsContext,
    UnarySendContext, UnaryTailContext, VariableContext, WsContext
} from "./SmalltalkParser";
import {
    STBinaryMessage,
    STBlock,
    STBlockParams,
    STEmptyNode,
    STInteger,
    STKeywordMessage,
    STLiteralArray,
    STMessage,
    STScript,
    STSequence,
    STStatements,
    STTemps, STVariable
} from "./ast-nodes";
import {stBlockClass, stBooleanClass, stMessages} from "./ast-objects";
import _ from "lodash";

export class Visitor extends AbstractParseTreeVisitor<any> implements SmalltalkVisitor<any> {
    protected defaultResult() {
        throw new Error("Method not implemented.");
    }

    public symbols = new Map<string, STVariable>();

    constructor() {
        super();

        this.symbols.set('false', new STVariable('false'));
        this.symbols.set('true', new STVariable('true'));

        this.symbols.get('false')!.obj = stBooleanClass;
        this.symbols.get('true')!.obj = stBooleanClass;
    }

    visit(tree: ParseTree): any {
        return tree.accept(this);
    }

    visitChildren(node: RuleNode): any {
        return undefined;
    }

    visitErrorNode(node: ErrorNode): any {
        return undefined;
    }

    visitTerminal(node: TerminalNode): any {
        return undefined;
    }

    visitScript(ctx: ScriptContext) {
        const script = new STScript();

        script.startingSequence = this.visitSequence(ctx.sequence());

        return script;
    }

    visitSequence(ctx: SequenceContext) {
        const sequence = new STSequence();

        if (ctx.temps()) {
            sequence.temps = this.visitTemps(ctx.temps()!);
        }

        sequence.statements = this.visitStatements(ctx.statements()!);

        return sequence;
    }

    visitStatements(ctx: StatementsContext) {
        const statements = new STStatements();

        statements.expressions = this.visitStatementExpressions(ctx.payload as StatementExpressionsContext);
        // return ctx.accept(this);
        return statements;
    }

    visitTemps(ctx: TempsContext) {
        const identifiers = ctx.IDENTIFIER().map(node => node.payload.text ?? '');

        identifiers.forEach((t: string) => this.symbols.set(t, new STVariable(t)));

        const temps = new STTemps();
        temps.identifiers = identifiers;

        return temps;
    }

    visitAssignment(ctx: AssignmentContext): STMessage {
        const variable = ctx.variable().payload.text;

        if (!this.symbols.has(variable)) {
            throw new Error('Variable is not defined');
        }

        const rval = this.visitExpression(ctx.expression());
        rval.varName = variable;
        // console.log(rval);

        this.symbols.get(variable)!.ref = rval;

        return rval;
    }

    visitStatementExpressions(ctx: StatementExpressionsContext) {
        return this.visitExpressions(ctx.expressions());
    }

    visitExpressions(ctx: ExpressionsContext) {
        const expressions = [this.visitExpression(ctx.expression())];

        for (const expressionListCtx of ctx.expressionList()) {
            expressions.push(this.visitExpression(expressionListCtx.expression()));
        }

        return expressions;
    }

    visitExpression(ctx: ExpressionContext) {
        if (ctx.binarySend()) {
            return this.visitBinarySend(
                ctx.binarySend()!
            );
        }

        if (ctx.assignment()) {
            return this.visitAssignment(
                ctx.assignment()!
            );
        }

        if (ctx.keywordSend()) {
            return this.visitKeywordSend(
                ctx.keywordSend()!
            );
        }

        throw new Error('Unknown expression class');
    }

    visitKeywordSend(ctx: KeywordSendContext) {
        const message = this.visitBinarySend(ctx.binarySend());

        message.chainedMessage = this.visitKeywordMessage(ctx.keywordMessage());

        return message;
    }

    visitKeywordMessage(ctx: KeywordMessageContext) {
        let rootMessage = new STKeywordMessage();
        // let currentMessage;
        let methodName = '';

        for (let keywordPair of ctx.keywordPair()) {
            methodName += keywordPair.KEYWORD().text;

            const method = stMessages.find(m => m.name === methodName);

            if (!method) {
                throw new Error(`Method '${methodName}' not found`);
            }

            // if (method.name === 'put') {
            //     console.log('put');
            // }
            // if (!currentMessage) {
                rootMessage.arguments.push(this.visitBinarySend(keywordPair.binarySend()));
                rootMessage.message = method;
                // currentMessage = rootMessage;
            // } else {
            //     rootMessage.arguments.push(this.visitBinarySend(keywordPair.binarySend()));
            //     rootMessage.message = method;
            // }

            // if (method.name === 'put') {
            //     console.log(currentMessage);
            // }

            // currentMessage.chainedMessage = new STMessage();
            // currentMessage = currentMessage.chainedMessage;
        }

        return rootMessage;
    }

    visitBinarySend(ctx: BinarySendContext) {
        const unarySend = this.visitUnarySend(ctx.unarySend());

        if (ctx.binaryTail()) {
            const binaryMessage = this.visitBinaryTail(ctx.binaryTail()!);

            binaryMessage.receiver = unarySend;

            return binaryMessage;
        }

        return unarySend;
    }

    visitBinaryTail(ctx: BinaryTailContext) {
        const binaryMessage = this.visitBinaryMessage(ctx.binaryMessage());

        if (ctx.binaryTail()) {
            binaryMessage.chainedMessage = this.visitBinaryTail(ctx.binaryTail()!);
        }

        return binaryMessage;
    }

    visitBinaryMessage(ctx: BinaryMessageContext) {
        const message = new STBinaryMessage();

        message.operation = ctx.BINARY_SELECTOR().text;

        if (ctx.operand()) {
            // @ts-ignore
            message.secondOperand = this.visitOperand(ctx.operand()!);
        } else if (ctx.unarySend()) {
            message.secondOperand = this.visitUnarySend(ctx.unarySend()!);
        }

        return message;
    }

    visitUnarySend(ctx: UnarySendContext) {
        let message;

        if (ctx.unaryTail()) {
            message = this.visitUnaryTail(ctx.unaryTail()!);
        } else {
            message = new STMessage();
        }

        // @ts-ignore
        message.receiver = this.visitOperand(ctx.operand());

        return message;
    }

    visitUnaryTail(ctx: UnaryTailContext) {
        const methodName = ctx.unaryMessage().unarySelector().text;

        const method = stMessages.find(m => m.name === methodName);

        if (!method) {
            throw new Error(`Method '${methodName}' not found`);
        }

        const message = new STMessage();

        if (ctx.unaryTail()) {
            message.chainedMessage = this.visitUnaryTail(ctx.unaryTail()!);
        }

        message.message = method;

        return message;
    }

    visitOperand(ctx: OperandContext) {
        if (ctx.literal()) {
            return this.visitLiteral(ctx.literal()!);
        }

        if (ctx.reference()) {
            return this.visitReference(ctx.reference()!);
        }

        if (ctx.subexpression()) {
            return this.visitSubexpression(ctx.subexpression()!);
        }

        throw new Error('Unknown operand class');
    }

    visitLiteral(ctx: LiteralContext) {
        if (ctx.parsetimeLiteral()) {
            return this.visitParsetimeLiteral(ctx.parsetimeLiteral()!)!;
        }

        return this.visitRuntimeLiteral(ctx.runtimeLiteral()!);
    }

    visitLiteralArray(ctx: LiteralArrayContext) {
        const arr = new STLiteralArray();
        arr.elements = ctx.literalArrayRest().parsetimeLiteral().map(c => this.visitParsetimeLiteral(c)!);

        // Account for misinterpreted unary '-'
        ctx.literalArrayRest().children!.map((c, i, arr2) => {
            if (c instanceof WsContext && c.text === '') {
                if (i > 0
                    && i < arr2.length
                    && arr2[i - 1] instanceof BareSymbolContext
                    && arr2[i + 1] instanceof ParsetimeLiteralContext
                ) {
                    if (!isNaN(Number(arr2[i + 1].text)) && arr2[i - 1].text === '-') {
                        const negInd = arr.elements!.findIndex(
                            e => e instanceof STInteger && e.value === Number(arr2[i + 1].text)
                        );

                        if (negInd > -1) {
                            (arr.elements![negInd] as STInteger).value = -(arr.elements![negInd] as STInteger).value!;
                        }
                    }
                }
            }
        });

        return arr;
    }

    visitPseudoVariable(ctx: PseudoVariableContext) {
        return this.symbols.get(ctx.RESERVED_WORD().text)!;
    }

    visitParsetimeLiteral(ctx: ParsetimeLiteralContext) {
        if (ctx.literalArray()) {
            return this.visitLiteralArray(ctx.literalArray()!);
        }

        if (ctx.number()) {
            return this.visitNumber(ctx.number()!);
        }

        if (ctx.pseudoVariable()) {
            return this.visitPseudoVariable(ctx.pseudoVariable()!);
        }

        throw new Error('Unknown parsetime literal');
    }

    visitNumber(ctx: NumberContext) {
        if (ctx.stInteger()) {
            return this.visitStInteger(ctx.stInteger()!);
        }

        throw new Error('Unknown number');
    }

    visitStInteger(ctx :StIntegerContext) {
        const n = new STInteger();

        n.value = Number(ctx.text);

        return n;
    }

    visitRuntimeLiteral(ctx: RuntimeLiteralContext) {
        if (ctx.block()) {
            return this.visitBlock(ctx.block()!);
        }

        throw new Error('Unknown runtime literal');
    }

    visitBlock(ctx: BlockContext) {
        const block = new STBlock();

        if (ctx.blockParamList()) {
            block.blockParamList = this.visitBlockParamList(ctx.blockParamList()!);
        }

        block.sequence = this.visitSequence(ctx.sequence());

        block.obj = stBlockClass;

        return block;
    }

    visitBlockParamList(ctx: BlockParamListContext) {
        const identifiers = ctx.BLOCK_PARAM().map(node => node.payload.text?.slice(1) ?? '');

        identifiers.forEach((t: string) => {
            const variable = new STVariable(t);
            this.symbols.set(t, variable);
        });

        const params = new STBlockParams();
        params.identifiers = identifiers;

        return params;
    }

    visitReference(ctx: ReferenceContext) {
        return this.visitVariable(ctx.variable());
    }

    visitVariable(ctx: VariableContext) {
        // console.log('var', ctx.IDENTIFIER().text);
        const variable = _.cloneDeep(this.symbols.get(ctx.IDENTIFIER().text));

        if (!variable) {
            throw new Error(`Variable ${ctx.IDENTIFIER().text} is not defined`);
        }

        variable.ref = new STEmptyNode();

        return variable;
    }

    visitSubexpression(ctx: SubexpressionContext) {
        return this.visitExpression(ctx.expression());
    }
}
