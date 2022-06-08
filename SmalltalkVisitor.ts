// Generated from smalltalk/redline/src/main/antlr4/Smalltalk.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SmalltalkParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SmalltalkVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `StatementAnswer`
	 * labeled alternative in `SmalltalkParser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementAnswer?: (ctx: StatementAnswerContext) => Result;

	/**
	 * Visit a parse tree produced by the `StatementExpressionsAnswer`
	 * labeled alternative in `SmalltalkParser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementExpressionsAnswer?: (ctx: StatementExpressionsAnswerContext) => Result;

	/**
	 * Visit a parse tree produced by the `StatementExpressions`
	 * labeled alternative in `SmalltalkParser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementExpressions?: (ctx: StatementExpressionsContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.script`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScript?: (ctx: ScriptContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.sequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSequence?: (ctx: SequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.ws`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWs?: (ctx: WsContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.temps`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemps?: (ctx: TempsContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatements?: (ctx: StatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.answer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnswer?: (ctx: AnswerContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.expressions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressions?: (ctx: ExpressionsContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.cascade`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCascade?: (ctx: CascadeContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.message`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessage?: (ctx: MessageContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.binarySend`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinarySend?: (ctx: BinarySendContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.unarySend`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnarySend?: (ctx: UnarySendContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.keywordSend`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeywordSend?: (ctx: KeywordSendContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.keywordMessage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeywordMessage?: (ctx: KeywordMessageContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.keywordPair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeywordPair?: (ctx: KeywordPairContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.operand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperand?: (ctx: OperandContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.subexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubexpression?: (ctx: SubexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.runtimeLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuntimeLiteral?: (ctx: RuntimeLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.blockParamList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockParamList?: (ctx: BlockParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.dynamicDictionary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDynamicDictionary?: (ctx: DynamicDictionaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.dynamicArray`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDynamicArray?: (ctx: DynamicArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.parsetimeLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParsetimeLiteral?: (ctx: ParsetimeLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.numberExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberExp?: (ctx: NumberExpContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.charConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharConstant?: (ctx: CharConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.hex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHex?: (ctx: HexContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.stInteger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStInteger?: (ctx: StIntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.stFloat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStFloat?: (ctx: StFloatContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.pseudoVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPseudoVariable?: (ctx: PseudoVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.symbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbol?: (ctx: SymbolContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.primitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitive?: (ctx: PrimitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.bareSymbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBareSymbol?: (ctx: BareSymbolContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.literalArray`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralArray?: (ctx: LiteralArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.literalArrayRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralArrayRest?: (ctx: LiteralArrayRestContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.bareLiteralArray`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBareLiteralArray?: (ctx: BareLiteralArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.unaryTail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryTail?: (ctx: UnaryTailContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.unaryMessage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryMessage?: (ctx: UnaryMessageContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.unarySelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnarySelector?: (ctx: UnarySelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.keywords`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeywords?: (ctx: KeywordsContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.reference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReference?: (ctx: ReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.binaryTail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryTail?: (ctx: BinaryTailContext) => Result;

	/**
	 * Visit a parse tree produced by `SmalltalkParser.binaryMessage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryMessage?: (ctx: BinaryMessageContext) => Result;
}

