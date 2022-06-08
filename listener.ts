import {SmalltalkListener} from "./SmalltalkListener";
import {
    AnswerContext,
    AssignmentContext,
    BareLiteralArrayContext,
    BareSymbolContext,
    BinaryMessageContext,
    BinarySendContext,
    BinaryTailContext,
    BlockContext,
    BlockParamListContext,
    CascadeContext,
    CharConstantContext,
    DynamicArrayContext,
    DynamicDictionaryContext,
    ExpressionContext,
    ExpressionListContext,
    ExpressionsContext,
    // Hex_Context,
    // HexContext,
    KeywordMessageContext,
    KeywordPairContext,
    KeywordsContext,
    KeywordSendContext,
    LiteralArrayContext,
    LiteralArrayRestContext,
    LiteralContext,
    MessageContext,
    NumberContext,
    NumberExpContext,
    OperandContext,
    ParsetimeLiteralContext,
    PrimitiveContext,
    PseudoVariableContext,
    ReferenceContext,
    RuntimeLiteralContext,
    ScriptContext,
    SequenceContext,
    StatementAnswerContext,
    StatementExpressionsAnswerContext,
    StatementExpressionsContext,
    StatementsContext,
    StFloatContext,
    StIntegerContext,
    StringContext,
    SubexpressionContext,
    SymbolContext,
    TempsContext,
    UnaryMessageContext, UnarySelectorContext,
    UnarySendContext, UnaryTailContext,
    VariableContext,
    WsContext
} from "./SmalltalkParser";

export class Listener implements SmalltalkListener {

    public enterScript(ctx: ScriptContext) {
        console.log('script: ', ctx.text);
    }

    public enterBlock(ctx: BlockContext) {
        console.log('block: ', ctx.text);
    }

    public enterExpression(ctx: ExpressionContext) {
        console.log('expression: ', ctx.text);
    }

    public enterWs(ctx: WsContext) {
        console.log('ws: ', ctx.text);
    }

    public enterBinaryMessage(ctx: BinaryMessageContext) {
        console.log('binary message: ', ctx.text);
    }

    public enterAssignment(ctx: AssignmentContext) {
        console.log('assignment: ', ctx.text);
    }

    public enterCharConstant(ctx: CharConstantContext) {
        console.log('char constant: ', ctx.text);
    }

    public enterLiteral(ctx: LiteralContext) {
        console.log('literal: ', ctx.text);
    }

    public enterMessage(ctx: MessageContext) {
        console.log('message: ', ctx.text);
    }

    public enterAnswer(ctx: AnswerContext) {
        console.log('answer: ', ctx.text);
    }

    public enterStatements(ctx: StatementsContext) {
        console.log('statements: ', ctx.text);
    }

    public enterCascade(ctx: CascadeContext) {
        console.log('cascade: ', ctx.text);
    }

    public enterBareSymbol(ctx: BareSymbolContext) {
        console.log('bare symbol: ', ctx.text);
    }

    public enterBinaryTail(ctx: BinaryTailContext) {
        console.log('binary tail: ', ctx.text);
    }

    public enterBareLiteralArray(ctx: BareLiteralArrayContext) {
        console.log('bare literal array: ', ctx.text);
    }

    public enterBinarySend(ctx: BinarySendContext) {
        console.log('binary send: ', ctx.text);
    }

    public enterBlockParamList(ctx: BlockParamListContext) {
        console.log('block param list: ', ctx.text);
    }

    public enterDynamicArray(ctx: DynamicArrayContext) {
        console.log('dynamic array: ', ctx.text);
    }

    public enterDynamicDictionary(ctx: DynamicDictionaryContext) {
        console.log('dynamic dictionary: ', ctx.text);
    }

    public enterExpressionList(ctx: ExpressionListContext) {
        console.log('expression list: ', ctx.text);
    }

    public enterExpressions(ctx: ExpressionsContext) {
        console.log('expressions: ', ctx.text);
    }

    public enterKeywordMessage(ctx: KeywordMessageContext) {
        console.log('keyword message: ', ctx.text);
    }

    public enterKeywordPair(ctx: KeywordPairContext) {
        console.log('keyword pair: ', ctx.text);
    }

    public enterKeywords(ctx: KeywordsContext) {
        console.log('keywords: ', ctx.text);
    }

    public enterKeywordSend(ctx: KeywordSendContext) {
        console.log('keyword send: ', ctx.text);
    }

    public enterNumber(ctx: NumberContext) {
        console.log('number: ', ctx.text);
    }

    public enterOperand(ctx: OperandContext) {
        console.log('operand: ', ctx.text);
    }

    public enterPrimitive(ctx: PrimitiveContext) {
        console.log('primitive: ', ctx.text);
    }

    public enterLiteralArray(ctx: LiteralArrayContext) {
        console.log('literal array: ', ctx.text);
    }

    public enterNumberExp(ctx: NumberExpContext) {
        console.log('number exp: ', ctx.text);
    }

    public enterParsetimeLiteral(ctx: ParsetimeLiteralContext) {
        console.log('parsetime literal: ', ctx.text);
    }

    public enterPseudoVariable(ctx: PseudoVariableContext) {
        console.log('pseudo variable: ', ctx.text);
    }

    public enterSequence(ctx: SequenceContext) {
        console.log('sequence: ', ctx.text);
    }

    public enterReference(ctx: ReferenceContext) {
        console.log('reference: ', ctx.text);
    }

    public enterRuntimeLiteral(ctx: RuntimeLiteralContext) {
        console.log('runtime literal: ', ctx.text);
    }

    public enterStatementAnswer(ctx: StatementAnswerContext) {
        console.log('statement answer: ', ctx.text);
    }

    public enterStatementExpressions(ctx: StatementExpressionsContext) {
        console.log('statement expressions: ', ctx.text);
    }

    public enterString(ctx: StringContext) {
        console.log('string: ', ctx.text);
    }

    public enterStatementExpressionsAnswer(ctx: StatementExpressionsAnswerContext) {
        console.log('statement expressions answer: ', ctx.text);
    }

    public enterStFloat(ctx: StFloatContext) {
        console.log('st float: ', ctx.text);
    }

    public enterStInteger(ctx: StIntegerContext) {
        console.log('st integer: ', ctx.text);
    }

    public enterSubexpression(ctx: SubexpressionContext) {
        console.log('subexpression: ', ctx.text);
    }

    public enterSymbol(ctx: SymbolContext) {
        console.log('symbol: ', ctx.text);
    }

    public enterTemps(ctx: TempsContext) {
        console.log('temps: ', ctx.text);
    }

    public enterVariable(ctx: VariableContext) {
        console.log('variable: ', ctx.text);
    }

    public enterLiteralArrayRest(ctx: LiteralArrayRestContext) {
        console.log('literal array rest: ', ctx.text);
    }

    public enterUnaryMessage(ctx: UnaryMessageContext) {
        console.log('unary message: ', ctx.text);
    }

    public enterUnarySend(ctx: UnarySendContext) {
        console.log('unary send: ', ctx.text);
    }

    public enterUnarySelector(ctx: UnarySelectorContext) {
        console.log('unary selector: ', ctx.text);
    }

    public enterUnaryTail(ctx: UnaryTailContext) {
        console.log('unary tail: ', ctx.text);
    }

    // public enterHex(ctx: HexContext) {
    //     console.log('hex: ', ctx.text);
    // }

    // public enterHex_(ctx: Hex_Context) {
    //     console.log('hex_: ', ctx.text);
    // }
}
