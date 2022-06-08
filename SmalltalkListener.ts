// Generated from smalltalk/redline/src/main/antlr4/Smalltalk.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { StatementAnswerContext } from "./SmalltalkParser";
import { StatementExpressionsAnswerContext } from "./SmalltalkParser";
import { StatementExpressionsContext } from "./SmalltalkParser";
import { ScriptContext } from "./SmalltalkParser";
import { SequenceContext } from "./SmalltalkParser";
import { WsContext } from "./SmalltalkParser";
import { TempsContext } from "./SmalltalkParser";
import { StatementsContext } from "./SmalltalkParser";
import { AnswerContext } from "./SmalltalkParser";
import { ExpressionContext } from "./SmalltalkParser";
import { ExpressionsContext } from "./SmalltalkParser";
import { ExpressionListContext } from "./SmalltalkParser";
import { CascadeContext } from "./SmalltalkParser";
import { MessageContext } from "./SmalltalkParser";
import { AssignmentContext } from "./SmalltalkParser";
import { VariableContext } from "./SmalltalkParser";
import { BinarySendContext } from "./SmalltalkParser";
import { UnarySendContext } from "./SmalltalkParser";
import { KeywordSendContext } from "./SmalltalkParser";
import { KeywordMessageContext } from "./SmalltalkParser";
import { KeywordPairContext } from "./SmalltalkParser";
import { OperandContext } from "./SmalltalkParser";
import { SubexpressionContext } from "./SmalltalkParser";
import { LiteralContext } from "./SmalltalkParser";
import { RuntimeLiteralContext } from "./SmalltalkParser";
import { BlockContext } from "./SmalltalkParser";
import { BlockParamListContext } from "./SmalltalkParser";
import { DynamicDictionaryContext } from "./SmalltalkParser";
import { DynamicArrayContext } from "./SmalltalkParser";
import { ParsetimeLiteralContext } from "./SmalltalkParser";
import { NumberContext } from "./SmalltalkParser";
import { NumberExpContext } from "./SmalltalkParser";
import { CharConstantContext } from "./SmalltalkParser";
import { HexContext } from "./SmalltalkParser";
import { StIntegerContext } from "./SmalltalkParser";
import { StFloatContext } from "./SmalltalkParser";
import { PseudoVariableContext } from "./SmalltalkParser";
import { StringContext } from "./SmalltalkParser";
import { SymbolContext } from "./SmalltalkParser";
import { PrimitiveContext } from "./SmalltalkParser";
import { BareSymbolContext } from "./SmalltalkParser";
import { LiteralArrayContext } from "./SmalltalkParser";
import { LiteralArrayRestContext } from "./SmalltalkParser";
import { BareLiteralArrayContext } from "./SmalltalkParser";
import { UnaryTailContext } from "./SmalltalkParser";
import { UnaryMessageContext } from "./SmalltalkParser";
import { UnarySelectorContext } from "./SmalltalkParser";
import { KeywordsContext } from "./SmalltalkParser";
import { ReferenceContext } from "./SmalltalkParser";
import { BinaryTailContext } from "./SmalltalkParser";
import { BinaryMessageContext } from "./SmalltalkParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SmalltalkParser`.
 */
export interface SmalltalkListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `StatementAnswer`
	 * labeled alternative in `SmalltalkParser.statements`.
	 * @param ctx the parse tree
	 */
	enterStatementAnswer?: (ctx: StatementAnswerContext) => void;
	/**
	 * Exit a parse tree produced by the `StatementAnswer`
	 * labeled alternative in `SmalltalkParser.statements`.
	 * @param ctx the parse tree
	 */
	exitStatementAnswer?: (ctx: StatementAnswerContext) => void;

	/**
	 * Enter a parse tree produced by the `StatementExpressionsAnswer`
	 * labeled alternative in `SmalltalkParser.statements`.
	 * @param ctx the parse tree
	 */
	enterStatementExpressionsAnswer?: (ctx: StatementExpressionsAnswerContext) => void;
	/**
	 * Exit a parse tree produced by the `StatementExpressionsAnswer`
	 * labeled alternative in `SmalltalkParser.statements`.
	 * @param ctx the parse tree
	 */
	exitStatementExpressionsAnswer?: (ctx: StatementExpressionsAnswerContext) => void;

	/**
	 * Enter a parse tree produced by the `StatementExpressions`
	 * labeled alternative in `SmalltalkParser.statements`.
	 * @param ctx the parse tree
	 */
	enterStatementExpressions?: (ctx: StatementExpressionsContext) => void;
	/**
	 * Exit a parse tree produced by the `StatementExpressions`
	 * labeled alternative in `SmalltalkParser.statements`.
	 * @param ctx the parse tree
	 */
	exitStatementExpressions?: (ctx: StatementExpressionsContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.script`.
	 * @param ctx the parse tree
	 */
	enterScript?: (ctx: ScriptContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.script`.
	 * @param ctx the parse tree
	 */
	exitScript?: (ctx: ScriptContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.sequence`.
	 * @param ctx the parse tree
	 */
	enterSequence?: (ctx: SequenceContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.sequence`.
	 * @param ctx the parse tree
	 */
	exitSequence?: (ctx: SequenceContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.ws`.
	 * @param ctx the parse tree
	 */
	enterWs?: (ctx: WsContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.ws`.
	 * @param ctx the parse tree
	 */
	exitWs?: (ctx: WsContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.temps`.
	 * @param ctx the parse tree
	 */
	enterTemps?: (ctx: TempsContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.temps`.
	 * @param ctx the parse tree
	 */
	exitTemps?: (ctx: TempsContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.statements`.
	 * @param ctx the parse tree
	 */
	enterStatements?: (ctx: StatementsContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.statements`.
	 * @param ctx the parse tree
	 */
	exitStatements?: (ctx: StatementsContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.answer`.
	 * @param ctx the parse tree
	 */
	enterAnswer?: (ctx: AnswerContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.answer`.
	 * @param ctx the parse tree
	 */
	exitAnswer?: (ctx: AnswerContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.expressions`.
	 * @param ctx the parse tree
	 */
	enterExpressions?: (ctx: ExpressionsContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.expressions`.
	 * @param ctx the parse tree
	 */
	exitExpressions?: (ctx: ExpressionsContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.cascade`.
	 * @param ctx the parse tree
	 */
	enterCascade?: (ctx: CascadeContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.cascade`.
	 * @param ctx the parse tree
	 */
	exitCascade?: (ctx: CascadeContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.message`.
	 * @param ctx the parse tree
	 */
	enterMessage?: (ctx: MessageContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.message`.
	 * @param ctx the parse tree
	 */
	exitMessage?: (ctx: MessageContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.binarySend`.
	 * @param ctx the parse tree
	 */
	enterBinarySend?: (ctx: BinarySendContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.binarySend`.
	 * @param ctx the parse tree
	 */
	exitBinarySend?: (ctx: BinarySendContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.unarySend`.
	 * @param ctx the parse tree
	 */
	enterUnarySend?: (ctx: UnarySendContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.unarySend`.
	 * @param ctx the parse tree
	 */
	exitUnarySend?: (ctx: UnarySendContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.keywordSend`.
	 * @param ctx the parse tree
	 */
	enterKeywordSend?: (ctx: KeywordSendContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.keywordSend`.
	 * @param ctx the parse tree
	 */
	exitKeywordSend?: (ctx: KeywordSendContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.keywordMessage`.
	 * @param ctx the parse tree
	 */
	enterKeywordMessage?: (ctx: KeywordMessageContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.keywordMessage`.
	 * @param ctx the parse tree
	 */
	exitKeywordMessage?: (ctx: KeywordMessageContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.keywordPair`.
	 * @param ctx the parse tree
	 */
	enterKeywordPair?: (ctx: KeywordPairContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.keywordPair`.
	 * @param ctx the parse tree
	 */
	exitKeywordPair?: (ctx: KeywordPairContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.operand`.
	 * @param ctx the parse tree
	 */
	enterOperand?: (ctx: OperandContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.operand`.
	 * @param ctx the parse tree
	 */
	exitOperand?: (ctx: OperandContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.subexpression`.
	 * @param ctx the parse tree
	 */
	enterSubexpression?: (ctx: SubexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.subexpression`.
	 * @param ctx the parse tree
	 */
	exitSubexpression?: (ctx: SubexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.runtimeLiteral`.
	 * @param ctx the parse tree
	 */
	enterRuntimeLiteral?: (ctx: RuntimeLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.runtimeLiteral`.
	 * @param ctx the parse tree
	 */
	exitRuntimeLiteral?: (ctx: RuntimeLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.blockParamList`.
	 * @param ctx the parse tree
	 */
	enterBlockParamList?: (ctx: BlockParamListContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.blockParamList`.
	 * @param ctx the parse tree
	 */
	exitBlockParamList?: (ctx: BlockParamListContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.dynamicDictionary`.
	 * @param ctx the parse tree
	 */
	enterDynamicDictionary?: (ctx: DynamicDictionaryContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.dynamicDictionary`.
	 * @param ctx the parse tree
	 */
	exitDynamicDictionary?: (ctx: DynamicDictionaryContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.dynamicArray`.
	 * @param ctx the parse tree
	 */
	enterDynamicArray?: (ctx: DynamicArrayContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.dynamicArray`.
	 * @param ctx the parse tree
	 */
	exitDynamicArray?: (ctx: DynamicArrayContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.parsetimeLiteral`.
	 * @param ctx the parse tree
	 */
	enterParsetimeLiteral?: (ctx: ParsetimeLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.parsetimeLiteral`.
	 * @param ctx the parse tree
	 */
	exitParsetimeLiteral?: (ctx: ParsetimeLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.numberExp`.
	 * @param ctx the parse tree
	 */
	enterNumberExp?: (ctx: NumberExpContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.numberExp`.
	 * @param ctx the parse tree
	 */
	exitNumberExp?: (ctx: NumberExpContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.charConstant`.
	 * @param ctx the parse tree
	 */
	enterCharConstant?: (ctx: CharConstantContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.charConstant`.
	 * @param ctx the parse tree
	 */
	exitCharConstant?: (ctx: CharConstantContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.hex`.
	 * @param ctx the parse tree
	 */
	enterHex?: (ctx: HexContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.hex`.
	 * @param ctx the parse tree
	 */
	exitHex?: (ctx: HexContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.stInteger`.
	 * @param ctx the parse tree
	 */
	enterStInteger?: (ctx: StIntegerContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.stInteger`.
	 * @param ctx the parse tree
	 */
	exitStInteger?: (ctx: StIntegerContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.stFloat`.
	 * @param ctx the parse tree
	 */
	enterStFloat?: (ctx: StFloatContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.stFloat`.
	 * @param ctx the parse tree
	 */
	exitStFloat?: (ctx: StFloatContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.pseudoVariable`.
	 * @param ctx the parse tree
	 */
	enterPseudoVariable?: (ctx: PseudoVariableContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.pseudoVariable`.
	 * @param ctx the parse tree
	 */
	exitPseudoVariable?: (ctx: PseudoVariableContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.symbol`.
	 * @param ctx the parse tree
	 */
	enterSymbol?: (ctx: SymbolContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.symbol`.
	 * @param ctx the parse tree
	 */
	exitSymbol?: (ctx: SymbolContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.primitive`.
	 * @param ctx the parse tree
	 */
	enterPrimitive?: (ctx: PrimitiveContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.primitive`.
	 * @param ctx the parse tree
	 */
	exitPrimitive?: (ctx: PrimitiveContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.bareSymbol`.
	 * @param ctx the parse tree
	 */
	enterBareSymbol?: (ctx: BareSymbolContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.bareSymbol`.
	 * @param ctx the parse tree
	 */
	exitBareSymbol?: (ctx: BareSymbolContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.literalArray`.
	 * @param ctx the parse tree
	 */
	enterLiteralArray?: (ctx: LiteralArrayContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.literalArray`.
	 * @param ctx the parse tree
	 */
	exitLiteralArray?: (ctx: LiteralArrayContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.literalArrayRest`.
	 * @param ctx the parse tree
	 */
	enterLiteralArrayRest?: (ctx: LiteralArrayRestContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.literalArrayRest`.
	 * @param ctx the parse tree
	 */
	exitLiteralArrayRest?: (ctx: LiteralArrayRestContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.bareLiteralArray`.
	 * @param ctx the parse tree
	 */
	enterBareLiteralArray?: (ctx: BareLiteralArrayContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.bareLiteralArray`.
	 * @param ctx the parse tree
	 */
	exitBareLiteralArray?: (ctx: BareLiteralArrayContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.unaryTail`.
	 * @param ctx the parse tree
	 */
	enterUnaryTail?: (ctx: UnaryTailContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.unaryTail`.
	 * @param ctx the parse tree
	 */
	exitUnaryTail?: (ctx: UnaryTailContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.unaryMessage`.
	 * @param ctx the parse tree
	 */
	enterUnaryMessage?: (ctx: UnaryMessageContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.unaryMessage`.
	 * @param ctx the parse tree
	 */
	exitUnaryMessage?: (ctx: UnaryMessageContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.unarySelector`.
	 * @param ctx the parse tree
	 */
	enterUnarySelector?: (ctx: UnarySelectorContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.unarySelector`.
	 * @param ctx the parse tree
	 */
	exitUnarySelector?: (ctx: UnarySelectorContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.keywords`.
	 * @param ctx the parse tree
	 */
	enterKeywords?: (ctx: KeywordsContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.keywords`.
	 * @param ctx the parse tree
	 */
	exitKeywords?: (ctx: KeywordsContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.reference`.
	 * @param ctx the parse tree
	 */
	enterReference?: (ctx: ReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.reference`.
	 * @param ctx the parse tree
	 */
	exitReference?: (ctx: ReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.binaryTail`.
	 * @param ctx the parse tree
	 */
	enterBinaryTail?: (ctx: BinaryTailContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.binaryTail`.
	 * @param ctx the parse tree
	 */
	exitBinaryTail?: (ctx: BinaryTailContext) => void;

	/**
	 * Enter a parse tree produced by `SmalltalkParser.binaryMessage`.
	 * @param ctx the parse tree
	 */
	enterBinaryMessage?: (ctx: BinaryMessageContext) => void;
	/**
	 * Exit a parse tree produced by `SmalltalkParser.binaryMessage`.
	 * @param ctx the parse tree
	 */
	exitBinaryMessage?: (ctx: BinaryMessageContext) => void;
}

