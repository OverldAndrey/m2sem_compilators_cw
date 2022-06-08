// Generated from smalltalk/redline/src/main/antlr4/Smalltalk.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { SmalltalkListener } from "./SmalltalkListener";
import { SmalltalkVisitor } from "./SmalltalkVisitor";


export class SmalltalkParser extends Parser {
	public static readonly SEPARATOR = 1;
	public static readonly STRING = 2;
	public static readonly COMMENT = 3;
	public static readonly BLOCK_START = 4;
	public static readonly BLOCK_END = 5;
	public static readonly CLOSE_PAREN = 6;
	public static readonly OPEN_PAREN = 7;
	public static readonly PIPE = 8;
	public static readonly PERIOD = 9;
	public static readonly SEMI_COLON = 10;
	public static readonly BINARY_SELECTOR = 11;
	public static readonly LT = 12;
	public static readonly GT = 13;
	public static readonly MINUS = 14;
	public static readonly RESERVED_WORD = 15;
	public static readonly IDENTIFIER = 16;
	public static readonly CARROT = 17;
	public static readonly COLON = 18;
	public static readonly ASSIGNMENT = 19;
	public static readonly HASH = 20;
	public static readonly DOLLAR = 21;
	public static readonly EXP = 22;
	public static readonly HEX = 23;
	public static readonly LITARR_START = 24;
	public static readonly DYNDICT_START = 25;
	public static readonly DYNARR_END = 26;
	public static readonly DYNARR_START = 27;
	public static readonly DIGIT = 28;
	public static readonly HEXDIGIT = 29;
	public static readonly KEYWORD = 30;
	public static readonly BLOCK_PARAM = 31;
	public static readonly CHARACTER_CONSTANT = 32;
	public static readonly RULE_script = 0;
	public static readonly RULE_sequence = 1;
	public static readonly RULE_ws = 2;
	public static readonly RULE_temps = 3;
	public static readonly RULE_statements = 4;
	public static readonly RULE_answer = 5;
	public static readonly RULE_expression = 6;
	public static readonly RULE_expressions = 7;
	public static readonly RULE_expressionList = 8;
	public static readonly RULE_cascade = 9;
	public static readonly RULE_message = 10;
	public static readonly RULE_assignment = 11;
	public static readonly RULE_variable = 12;
	public static readonly RULE_binarySend = 13;
	public static readonly RULE_unarySend = 14;
	public static readonly RULE_keywordSend = 15;
	public static readonly RULE_keywordMessage = 16;
	public static readonly RULE_keywordPair = 17;
	public static readonly RULE_operand = 18;
	public static readonly RULE_subexpression = 19;
	public static readonly RULE_literal = 20;
	public static readonly RULE_runtimeLiteral = 21;
	public static readonly RULE_block = 22;
	public static readonly RULE_blockParamList = 23;
	public static readonly RULE_dynamicDictionary = 24;
	public static readonly RULE_dynamicArray = 25;
	public static readonly RULE_parsetimeLiteral = 26;
	public static readonly RULE_number = 27;
	public static readonly RULE_numberExp = 28;
	public static readonly RULE_charConstant = 29;
	public static readonly RULE_hex = 30;
	public static readonly RULE_stInteger = 31;
	public static readonly RULE_stFloat = 32;
	public static readonly RULE_pseudoVariable = 33;
	public static readonly RULE_string = 34;
	public static readonly RULE_symbol = 35;
	public static readonly RULE_primitive = 36;
	public static readonly RULE_bareSymbol = 37;
	public static readonly RULE_literalArray = 38;
	public static readonly RULE_literalArrayRest = 39;
	public static readonly RULE_bareLiteralArray = 40;
	public static readonly RULE_unaryTail = 41;
	public static readonly RULE_unaryMessage = 42;
	public static readonly RULE_unarySelector = 43;
	public static readonly RULE_keywords = 44;
	public static readonly RULE_reference = 45;
	public static readonly RULE_binaryTail = 46;
	public static readonly RULE_binaryMessage = 47;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"script", "sequence", "ws", "temps", "statements", "answer", "expression", 
		"expressions", "expressionList", "cascade", "message", "assignment", "variable", 
		"binarySend", "unarySend", "keywordSend", "keywordMessage", "keywordPair", 
		"operand", "subexpression", "literal", "runtimeLiteral", "block", "blockParamList", 
		"dynamicDictionary", "dynamicArray", "parsetimeLiteral", "number", "numberExp", 
		"charConstant", "hex", "stInteger", "stFloat", "pseudoVariable", "string", 
		"symbol", "primitive", "bareSymbol", "literalArray", "literalArrayRest", 
		"bareLiteralArray", "unaryTail", "unaryMessage", "unarySelector", "keywords", 
		"reference", "binaryTail", "binaryMessage",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'['", "']'", "')'", "'('", 
		"'|'", "'.'", "';'", undefined, "'<'", "'>'", "'-'", undefined, undefined, 
		"'^'", "':'", "':='", "'#'", "'$'", "'e'", "'16r'", "'#('", "'#{'", "'}'", 
		"'{'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SEPARATOR", "STRING", "COMMENT", "BLOCK_START", "BLOCK_END", 
		"CLOSE_PAREN", "OPEN_PAREN", "PIPE", "PERIOD", "SEMI_COLON", "BINARY_SELECTOR", 
		"LT", "GT", "MINUS", "RESERVED_WORD", "IDENTIFIER", "CARROT", "COLON", 
		"ASSIGNMENT", "HASH", "DOLLAR", "EXP", "HEX", "LITARR_START", "DYNDICT_START", 
		"DYNARR_END", "DYNARR_START", "DIGIT", "HEXDIGIT", "KEYWORD", "BLOCK_PARAM", 
		"CHARACTER_CONSTANT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SmalltalkParser._LITERAL_NAMES, SmalltalkParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SmalltalkParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Smalltalk.g4"; }

	// @Override
	public get ruleNames(): string[] { return SmalltalkParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SmalltalkParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SmalltalkParser._ATN, this);
	}
	// @RuleVersion(0)
	public script(): ScriptContext {
		let _localctx: ScriptContext = new ScriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SmalltalkParser.RULE_script);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this.sequence();
			this.state = 97;
			this.ws();
			this.state = 98;
			this.match(SmalltalkParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sequence(): SequenceContext {
		let _localctx: SequenceContext = new SequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SmalltalkParser.RULE_sequence);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 100;
				this.temps();
				}
				break;
			}
			this.state = 103;
			this.ws();
			this.state = 105;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 104;
				this.statements();
				}
				break;
			}
			this.state = 107;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ws(): WsContext {
		let _localctx: WsContext = new WsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SmalltalkParser.RULE_ws);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 109;
					_la = this._input.LA(1);
					if (!(_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
				}
				this.state = 114;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public temps(): TempsContext {
		let _localctx: TempsContext = new TempsContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SmalltalkParser.RULE_temps);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this.ws();
			this.state = 116;
			this.match(SmalltalkParser.PIPE);
			this.state = 120;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 117;
					this.ws();
					this.state = 118;
					this.match(SmalltalkParser.IDENTIFIER);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 122;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 124;
			this.ws();
			this.state = 125;
			this.match(SmalltalkParser.PIPE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statements(): StatementsContext {
		let _localctx: StatementsContext = new StatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SmalltalkParser.RULE_statements);
		try {
			this.state = 142;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				_localctx = new StatementAnswerContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 127;
				this.answer();
				this.state = 128;
				this.ws();
				}
				break;

			case 2:
				_localctx = new StatementExpressionsAnswerContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 130;
				this.expressions();
				this.state = 131;
				this.ws();
				this.state = 132;
				this.match(SmalltalkParser.PERIOD);
				this.state = 133;
				this.ws();
				this.state = 134;
				this.answer();
				}
				break;

			case 3:
				_localctx = new StatementExpressionsContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 136;
				this.expressions();
				this.state = 138;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 137;
					this.match(SmalltalkParser.PERIOD);
					}
					break;
				}
				this.state = 140;
				this.ws();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public answer(): AnswerContext {
		let _localctx: AnswerContext = new AnswerContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SmalltalkParser.RULE_answer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.match(SmalltalkParser.CARROT);
			this.state = 145;
			this.ws();
			this.state = 146;
			this.expression();
			this.state = 147;
			this.ws();
			this.state = 149;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 148;
				this.match(SmalltalkParser.PERIOD);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SmalltalkParser.RULE_expression);
		try {
			this.state = 156;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 151;
				this.assignment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 152;
				this.cascade();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 153;
				this.keywordSend();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 154;
				this.binarySend();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 155;
				this.primitive();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressions(): ExpressionsContext {
		let _localctx: ExpressionsContext = new ExpressionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SmalltalkParser.RULE_expressions);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.expression();
			this.state = 162;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 159;
					this.expressionList();
					}
					}
				}
				this.state = 164;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SmalltalkParser.RULE_expressionList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this.match(SmalltalkParser.PERIOD);
			this.state = 166;
			this.ws();
			this.state = 167;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cascade(): CascadeContext {
		let _localctx: CascadeContext = new CascadeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SmalltalkParser.RULE_cascade);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 169;
				this.keywordSend();
				}
				break;

			case 2:
				{
				this.state = 170;
				this.binarySend();
				}
				break;
			}
			this.state = 178;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 173;
					this.ws();
					this.state = 174;
					this.match(SmalltalkParser.SEMI_COLON);
					this.state = 175;
					this.ws();
					this.state = 176;
					this.message();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 180;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public message(): MessageContext {
		let _localctx: MessageContext = new MessageContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SmalltalkParser.RULE_message);
		try {
			this.state = 185;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 182;
				this.binaryMessage();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 183;
				this.unaryMessage();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 184;
				this.keywordMessage();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SmalltalkParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this.variable();
			this.state = 188;
			this.ws();
			this.state = 189;
			this.match(SmalltalkParser.ASSIGNMENT);
			this.state = 190;
			this.ws();
			this.state = 191;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SmalltalkParser.RULE_variable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.match(SmalltalkParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binarySend(): BinarySendContext {
		let _localctx: BinarySendContext = new BinarySendContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SmalltalkParser.RULE_binarySend);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this.unarySend();
			this.state = 197;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 196;
				this.binaryTail();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unarySend(): UnarySendContext {
		let _localctx: UnarySendContext = new UnarySendContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SmalltalkParser.RULE_unarySend);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			this.operand();
			this.state = 200;
			this.ws();
			this.state = 202;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 201;
				this.unaryTail();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keywordSend(): KeywordSendContext {
		let _localctx: KeywordSendContext = new KeywordSendContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SmalltalkParser.RULE_keywordSend);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this.binarySend();
			this.state = 205;
			this.keywordMessage();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keywordMessage(): KeywordMessageContext {
		let _localctx: KeywordMessageContext = new KeywordMessageContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SmalltalkParser.RULE_keywordMessage);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this.ws();
			this.state = 211;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 208;
					this.keywordPair();
					this.state = 209;
					this.ws();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 213;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keywordPair(): KeywordPairContext {
		let _localctx: KeywordPairContext = new KeywordPairContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SmalltalkParser.RULE_keywordPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			this.match(SmalltalkParser.KEYWORD);
			this.state = 216;
			this.ws();
			this.state = 217;
			this.binarySend();
			this.state = 218;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operand(): OperandContext {
		let _localctx: OperandContext = new OperandContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SmalltalkParser.RULE_operand);
		try {
			this.state = 223;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmalltalkParser.STRING:
			case SmalltalkParser.BLOCK_START:
			case SmalltalkParser.MINUS:
			case SmalltalkParser.RESERVED_WORD:
			case SmalltalkParser.HASH:
			case SmalltalkParser.HEX:
			case SmalltalkParser.LITARR_START:
			case SmalltalkParser.DYNDICT_START:
			case SmalltalkParser.DYNARR_START:
			case SmalltalkParser.DIGIT:
			case SmalltalkParser.CHARACTER_CONSTANT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 220;
				this.literal();
				}
				break;
			case SmalltalkParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 221;
				this.reference();
				}
				break;
			case SmalltalkParser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 222;
				this.subexpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subexpression(): SubexpressionContext {
		let _localctx: SubexpressionContext = new SubexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SmalltalkParser.RULE_subexpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 225;
			this.match(SmalltalkParser.OPEN_PAREN);
			this.state = 226;
			this.ws();
			this.state = 227;
			this.expression();
			this.state = 228;
			this.ws();
			this.state = 229;
			this.match(SmalltalkParser.CLOSE_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SmalltalkParser.RULE_literal);
		try {
			this.state = 233;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmalltalkParser.BLOCK_START:
			case SmalltalkParser.DYNDICT_START:
			case SmalltalkParser.DYNARR_START:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 231;
				this.runtimeLiteral();
				}
				break;
			case SmalltalkParser.STRING:
			case SmalltalkParser.MINUS:
			case SmalltalkParser.RESERVED_WORD:
			case SmalltalkParser.HASH:
			case SmalltalkParser.HEX:
			case SmalltalkParser.LITARR_START:
			case SmalltalkParser.DIGIT:
			case SmalltalkParser.CHARACTER_CONSTANT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 232;
				this.parsetimeLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public runtimeLiteral(): RuntimeLiteralContext {
		let _localctx: RuntimeLiteralContext = new RuntimeLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SmalltalkParser.RULE_runtimeLiteral);
		try {
			this.state = 238;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmalltalkParser.DYNDICT_START:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 235;
				this.dynamicDictionary();
				}
				break;
			case SmalltalkParser.DYNARR_START:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 236;
				this.dynamicArray();
				}
				break;
			case SmalltalkParser.BLOCK_START:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 237;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SmalltalkParser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this.match(SmalltalkParser.BLOCK_START);
			this.state = 242;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 241;
				this.blockParamList();
				}
				break;
			}
			this.state = 244;
			this.ws();
			this.state = 247;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 245;
				this.match(SmalltalkParser.PIPE);
				this.state = 246;
				this.ws();
				}
				break;
			}
			this.state = 249;
			this.sequence();
			this.state = 250;
			this.match(SmalltalkParser.BLOCK_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockParamList(): BlockParamListContext {
		let _localctx: BlockParamListContext = new BlockParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SmalltalkParser.RULE_blockParamList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 255;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 252;
					this.ws();
					this.state = 253;
					this.match(SmalltalkParser.BLOCK_PARAM);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 257;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dynamicDictionary(): DynamicDictionaryContext {
		let _localctx: DynamicDictionaryContext = new DynamicDictionaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SmalltalkParser.RULE_dynamicDictionary);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			this.match(SmalltalkParser.DYNDICT_START);
			this.state = 260;
			this.ws();
			this.state = 262;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 261;
				this.expressions();
				}
				break;
			}
			this.state = 264;
			this.ws();
			this.state = 265;
			this.match(SmalltalkParser.DYNARR_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dynamicArray(): DynamicArrayContext {
		let _localctx: DynamicArrayContext = new DynamicArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, SmalltalkParser.RULE_dynamicArray);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
			this.match(SmalltalkParser.DYNARR_START);
			this.state = 268;
			this.ws();
			this.state = 270;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 269;
				this.expressions();
				}
				break;
			}
			this.state = 272;
			this.ws();
			this.state = 273;
			this.match(SmalltalkParser.DYNARR_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parsetimeLiteral(): ParsetimeLiteralContext {
		let _localctx: ParsetimeLiteralContext = new ParsetimeLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, SmalltalkParser.RULE_parsetimeLiteral);
		try {
			this.state = 281;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmalltalkParser.CHARACTER_CONSTANT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 275;
				this.charConstant();
				}
				break;
			case SmalltalkParser.RESERVED_WORD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 276;
				this.pseudoVariable();
				}
				break;
			case SmalltalkParser.MINUS:
			case SmalltalkParser.HEX:
			case SmalltalkParser.DIGIT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 277;
				this.number();
				}
				break;
			case SmalltalkParser.LITARR_START:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 278;
				this.literalArray();
				}
				break;
			case SmalltalkParser.STRING:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 279;
				this.string();
				}
				break;
			case SmalltalkParser.HASH:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 280;
				this.symbol();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, SmalltalkParser.RULE_number);
		try {
			this.state = 287;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 283;
				this.numberExp();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 284;
				this.hex();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 285;
				this.stFloat();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 286;
				this.stInteger();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numberExp(): NumberExpContext {
		let _localctx: NumberExpContext = new NumberExpContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, SmalltalkParser.RULE_numberExp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 291;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 289;
				this.stFloat();
				}
				break;

			case 2:
				{
				this.state = 290;
				this.stInteger();
				}
				break;
			}
			this.state = 293;
			this.match(SmalltalkParser.EXP);
			this.state = 294;
			this.stInteger();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public charConstant(): CharConstantContext {
		let _localctx: CharConstantContext = new CharConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, SmalltalkParser.RULE_charConstant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 296;
			this.match(SmalltalkParser.CHARACTER_CONSTANT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hex(): HexContext {
		let _localctx: HexContext = new HexContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, SmalltalkParser.RULE_hex);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmalltalkParser.MINUS) {
				{
				this.state = 298;
				this.match(SmalltalkParser.MINUS);
				}
			}

			this.state = 301;
			this.match(SmalltalkParser.HEX);
			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 302;
				this.match(SmalltalkParser.HEXDIGIT);
				}
				}
				this.state = 305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SmalltalkParser.HEXDIGIT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stInteger(): StIntegerContext {
		let _localctx: StIntegerContext = new StIntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, SmalltalkParser.RULE_stInteger);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmalltalkParser.MINUS) {
				{
				this.state = 307;
				this.match(SmalltalkParser.MINUS);
				}
			}

			this.state = 311;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 310;
					this.match(SmalltalkParser.DIGIT);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 313;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stFloat(): StFloatContext {
		let _localctx: StFloatContext = new StFloatContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, SmalltalkParser.RULE_stFloat);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmalltalkParser.MINUS) {
				{
				this.state = 315;
				this.match(SmalltalkParser.MINUS);
				}
			}

			this.state = 319;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 318;
				this.match(SmalltalkParser.DIGIT);
				}
				}
				this.state = 321;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SmalltalkParser.DIGIT);
			this.state = 323;
			this.match(SmalltalkParser.PERIOD);
			this.state = 325;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 324;
					this.match(SmalltalkParser.DIGIT);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 327;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pseudoVariable(): PseudoVariableContext {
		let _localctx: PseudoVariableContext = new PseudoVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, SmalltalkParser.RULE_pseudoVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 329;
			this.match(SmalltalkParser.RESERVED_WORD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, SmalltalkParser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 331;
			this.match(SmalltalkParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public symbol(): SymbolContext {
		let _localctx: SymbolContext = new SymbolContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, SmalltalkParser.RULE_symbol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this.match(SmalltalkParser.HASH);
			this.state = 334;
			this.bareSymbol();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitive(): PrimitiveContext {
		let _localctx: PrimitiveContext = new PrimitiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, SmalltalkParser.RULE_primitive);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 336;
			this.match(SmalltalkParser.LT);
			this.state = 337;
			this.ws();
			this.state = 338;
			this.match(SmalltalkParser.KEYWORD);
			this.state = 339;
			this.ws();
			this.state = 341;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 340;
					this.match(SmalltalkParser.DIGIT);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 343;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 345;
			this.ws();
			this.state = 346;
			this.match(SmalltalkParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bareSymbol(): BareSymbolContext {
		let _localctx: BareSymbolContext = new BareSymbolContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, SmalltalkParser.RULE_bareSymbol);
		let _la: number;
		try {
			let _alt: number;
			this.state = 360;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmalltalkParser.BINARY_SELECTOR:
			case SmalltalkParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 348;
				_la = this._input.LA(1);
				if (!(_la === SmalltalkParser.BINARY_SELECTOR || _la === SmalltalkParser.IDENTIFIER)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case SmalltalkParser.KEYWORD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 350;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 349;
						this.match(SmalltalkParser.KEYWORD);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 352;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case SmalltalkParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 354;
				this.string();
				}
				break;
			case SmalltalkParser.PIPE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 356;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 355;
						this.match(SmalltalkParser.PIPE);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 358;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literalArray(): LiteralArrayContext {
		let _localctx: LiteralArrayContext = new LiteralArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, SmalltalkParser.RULE_literalArray);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 362;
			this.match(SmalltalkParser.LITARR_START);
			this.state = 363;
			this.literalArrayRest();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literalArrayRest(): LiteralArrayRestContext {
		let _localctx: LiteralArrayRestContext = new LiteralArrayRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, SmalltalkParser.RULE_literalArrayRest);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 373;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 365;
					this.ws();
					this.state = 369;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
					case 1:
						{
						this.state = 366;
						this.parsetimeLiteral();
						}
						break;

					case 2:
						{
						this.state = 367;
						this.bareLiteralArray();
						}
						break;

					case 3:
						{
						this.state = 368;
						this.bareSymbol();
						}
						break;
					}
					}
					}
				}
				this.state = 375;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			}
			this.state = 376;
			this.ws();
			this.state = 377;
			this.match(SmalltalkParser.CLOSE_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bareLiteralArray(): BareLiteralArrayContext {
		let _localctx: BareLiteralArrayContext = new BareLiteralArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, SmalltalkParser.RULE_bareLiteralArray);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			this.match(SmalltalkParser.OPEN_PAREN);
			this.state = 380;
			this.literalArrayRest();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryTail(): UnaryTailContext {
		let _localctx: UnaryTailContext = new UnaryTailContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, SmalltalkParser.RULE_unaryTail);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
			this.unaryMessage();
			this.state = 383;
			this.ws();
			this.state = 385;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 384;
				this.unaryTail();
				}
				break;
			}
			this.state = 387;
			this.ws();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryMessage(): UnaryMessageContext {
		let _localctx: UnaryMessageContext = new UnaryMessageContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, SmalltalkParser.RULE_unaryMessage);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
			this.ws();
			this.state = 390;
			this.unarySelector();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unarySelector(): UnarySelectorContext {
		let _localctx: UnarySelectorContext = new UnarySelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, SmalltalkParser.RULE_unarySelector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
			this.match(SmalltalkParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keywords(): KeywordsContext {
		let _localctx: KeywordsContext = new KeywordsContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, SmalltalkParser.RULE_keywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 394;
				this.match(SmalltalkParser.KEYWORD);
				}
				}
				this.state = 397;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SmalltalkParser.KEYWORD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reference(): ReferenceContext {
		let _localctx: ReferenceContext = new ReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, SmalltalkParser.RULE_reference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 399;
			this.variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binaryTail(): BinaryTailContext {
		let _localctx: BinaryTailContext = new BinaryTailContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, SmalltalkParser.RULE_binaryTail);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this.binaryMessage();
			this.state = 403;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 402;
				this.binaryTail();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binaryMessage(): BinaryMessageContext {
		let _localctx: BinaryMessageContext = new BinaryMessageContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, SmalltalkParser.RULE_binaryMessage);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 405;
			this.ws();
			this.state = 406;
			this.match(SmalltalkParser.BINARY_SELECTOR);
			this.state = 407;
			this.ws();
			this.state = 410;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				this.state = 408;
				this.unarySend();
				}
				break;

			case 2:
				{
				this.state = 409;
				this.operand();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\"\u019F\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x03\x05\x03h\n\x03\x03\x03\x03\x03\x05\x03l\n\x03\x03\x03" +
		"\x03\x03\x03\x04\x07\x04q\n\x04\f\x04\x0E\x04t\v\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x06\x05{\n\x05\r\x05\x0E\x05|\x03\x05\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06\x8D\n\x06\x03\x06\x03\x06\x05\x06\x91\n\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x98\n\x07\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x05\b\x9F\n\b\x03\t\x03\t\x07\t\xA3\n\t\f\t\x0E\t\xA6" +
		"\v\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x05\v\xAE\n\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x06\v\xB5\n\v\r\v\x0E\v\xB6\x03\f\x03\f\x03\f\x05\f\xBC" +
		"\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x05\x0F\xC8\n\x0F\x03\x10\x03\x10\x03\x10\x05\x10\xCD\n\x10\x03\x11\x03" +
		"\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x06\x12\xD6\n\x12\r\x12\x0E" +
		"\x12\xD7\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14" +
		"\x05\x14\xE2\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x16\x03\x16\x05\x16\xEC\n\x16\x03\x17\x03\x17\x03\x17\x05\x17\xF1\n\x17" +
		"\x03\x18\x03\x18\x05\x18\xF5\n\x18\x03\x18\x03\x18\x03\x18\x05\x18\xFA" +
		"\n\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x06\x19\u0102\n" +
		"\x19\r\x19\x0E\x19\u0103\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0109\n\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0111\n\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C" +
		"\u011C\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0122\n\x1D\x03\x1E" +
		"\x03\x1E\x05\x1E\u0126\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
		" \x05 \u012E\n \x03 \x03 \x06 \u0132\n \r \x0E \u0133\x03!\x05!\u0137" +
		"\n!\x03!\x06!\u013A\n!\r!\x0E!\u013B\x03\"\x05\"\u013F\n\"\x03\"\x06\"" +
		"\u0142\n\"\r\"\x0E\"\u0143\x03\"\x03\"\x06\"\u0148\n\"\r\"\x0E\"\u0149" +
		"\x03#\x03#\x03$\x03$\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x06&\u0158" +
		"\n&\r&\x0E&\u0159\x03&\x03&\x03&\x03\'\x03\'\x06\'\u0161\n\'\r\'\x0E\'" +
		"\u0162\x03\'\x03\'\x06\'\u0167\n\'\r\'\x0E\'\u0168\x05\'\u016B\n\'\x03" +
		"(\x03(\x03(\x03)\x03)\x03)\x03)\x05)\u0174\n)\x07)\u0176\n)\f)\x0E)\u0179" +
		"\v)\x03)\x03)\x03)\x03*\x03*\x03*\x03+\x03+\x03+\x05+\u0184\n+\x03+\x03" +
		"+\x03,\x03,\x03,\x03-\x03-\x03.\x06.\u018E\n.\r.\x0E.\u018F\x03/\x03/" +
		"\x030\x030\x050\u0196\n0\x031\x031\x031\x031\x031\x051\u019D\n1\x031\x02" +
		"\x02\x022\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02\x02\x04\x04\x02\x03\x03\x05\x05\x04\x02\r\r\x12\x12\x02\u01A9" +
		"\x02b\x03\x02\x02\x02\x04g\x03\x02\x02\x02\x06r\x03\x02\x02\x02\bu\x03" +
		"\x02\x02\x02\n\x90\x03\x02\x02\x02\f\x92\x03\x02\x02\x02\x0E\x9E\x03\x02" +
		"\x02\x02\x10\xA0\x03\x02\x02\x02\x12\xA7\x03\x02\x02\x02\x14\xAD\x03\x02" +
		"\x02\x02\x16\xBB\x03\x02\x02\x02\x18\xBD\x03\x02\x02\x02\x1A\xC3\x03\x02" +
		"\x02\x02\x1C\xC5\x03\x02\x02\x02\x1E\xC9\x03\x02\x02\x02 \xCE\x03\x02" +
		"\x02\x02\"\xD1\x03\x02\x02\x02$\xD9\x03\x02\x02\x02&\xE1\x03\x02\x02\x02" +
		"(\xE3\x03\x02\x02\x02*\xEB\x03\x02\x02\x02,\xF0\x03\x02\x02\x02.\xF2\x03" +
		"\x02\x02\x020\u0101\x03\x02\x02\x022\u0105\x03\x02\x02\x024\u010D\x03" +
		"\x02\x02\x026\u011B\x03\x02\x02\x028\u0121\x03\x02\x02\x02:\u0125\x03" +
		"\x02\x02\x02<\u012A\x03\x02\x02\x02>\u012D\x03\x02\x02\x02@\u0136\x03" +
		"\x02\x02\x02B\u013E\x03\x02\x02\x02D\u014B\x03\x02\x02\x02F\u014D\x03" +
		"\x02\x02\x02H\u014F\x03\x02\x02\x02J\u0152\x03\x02\x02\x02L\u016A\x03" +
		"\x02\x02\x02N\u016C\x03\x02\x02\x02P\u0177\x03\x02\x02\x02R\u017D\x03" +
		"\x02\x02\x02T\u0180\x03\x02\x02\x02V\u0187\x03\x02\x02\x02X\u018A\x03" +
		"\x02\x02\x02Z\u018D\x03\x02\x02\x02\\\u0191\x03\x02\x02\x02^\u0193\x03" +
		"\x02\x02\x02`\u0197\x03\x02\x02\x02bc\x05\x04\x03\x02cd\x05\x06\x04\x02" +
		"de\x07\x02\x02\x03e\x03\x03\x02\x02\x02fh\x05\b\x05\x02gf\x03\x02\x02" +
		"\x02gh\x03\x02\x02\x02hi\x03\x02\x02\x02ik\x05\x06\x04\x02jl\x05\n\x06" +
		"\x02kj\x03\x02\x02\x02kl\x03\x02\x02\x02lm\x03\x02\x02\x02mn\x05\x06\x04" +
		"\x02n\x05\x03\x02\x02\x02oq\t\x02\x02\x02po\x03\x02\x02\x02qt\x03\x02" +
		"\x02\x02rp\x03\x02\x02\x02rs\x03\x02\x02\x02s\x07\x03\x02\x02\x02tr\x03" +
		"\x02\x02\x02uv\x05\x06\x04\x02vz\x07\n\x02\x02wx\x05\x06\x04\x02xy\x07" +
		"\x12\x02\x02y{\x03\x02\x02\x02zw\x03\x02\x02\x02{|\x03\x02\x02\x02|z\x03" +
		"\x02\x02\x02|}\x03\x02\x02\x02}~\x03\x02\x02\x02~\x7F\x05\x06\x04\x02" +
		"\x7F\x80\x07\n\x02\x02\x80\t\x03\x02\x02\x02\x81\x82\x05\f\x07\x02\x82" +
		"\x83\x05\x06\x04\x02\x83\x91\x03\x02\x02\x02\x84\x85\x05\x10\t\x02\x85" +
		"\x86\x05\x06\x04\x02\x86\x87\x07\v\x02\x02\x87\x88\x05\x06\x04\x02\x88" +
		"\x89\x05\f\x07\x02\x89\x91\x03\x02\x02\x02\x8A\x8C\x05\x10\t\x02\x8B\x8D" +
		"\x07\v\x02\x02\x8C\x8B\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8E" +
		"\x03\x02\x02\x02\x8E\x8F\x05\x06\x04\x02\x8F\x91\x03\x02\x02\x02\x90\x81" +
		"\x03\x02\x02\x02\x90\x84\x03\x02\x02\x02\x90\x8A\x03\x02\x02\x02\x91\v" +
		"\x03\x02\x02\x02\x92\x93\x07\x13\x02\x02\x93\x94\x05\x06\x04\x02\x94\x95" +
		"\x05\x0E\b\x02\x95\x97\x05\x06\x04\x02\x96\x98\x07\v\x02\x02\x97\x96\x03" +
		"\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\r\x03\x02\x02\x02\x99\x9F\x05" +
		"\x18\r\x02\x9A\x9F\x05\x14\v\x02\x9B\x9F\x05 \x11\x02\x9C\x9F\x05\x1C" +
		"\x0F\x02\x9D\x9F\x05J&\x02\x9E\x99\x03\x02\x02\x02\x9E\x9A\x03\x02\x02" +
		"\x02\x9E\x9B\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9D\x03\x02\x02" +
		"\x02\x9F\x0F\x03\x02\x02\x02\xA0\xA4\x05\x0E\b\x02\xA1\xA3\x05\x12\n\x02" +
		"\xA2\xA1\x03\x02\x02\x02\xA3\xA6\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02" +
		"\xA4\xA5\x03\x02\x02\x02\xA5\x11\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02" +
		"\xA7\xA8\x07\v\x02\x02\xA8\xA9\x05\x06\x04\x02\xA9\xAA\x05\x0E\b\x02\xAA" +
		"\x13\x03\x02\x02\x02\xAB\xAE\x05 \x11\x02\xAC\xAE\x05\x1C\x0F\x02\xAD" +
		"\xAB\x03\x02\x02\x02\xAD\xAC\x03\x02\x02\x02\xAE\xB4\x03\x02\x02\x02\xAF" +
		"\xB0\x05\x06\x04\x02\xB0\xB1\x07\f\x02\x02\xB1\xB2\x05\x06\x04\x02\xB2" +
		"\xB3\x05\x16\f\x02\xB3\xB5\x03\x02\x02\x02\xB4\xAF\x03\x02\x02\x02\xB5" +
		"\xB6\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7" +
		"\x15\x03\x02\x02\x02\xB8\xBC\x05`1\x02\xB9\xBC\x05V,\x02\xBA\xBC\x05\"" +
		"\x12\x02\xBB\xB8\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBB\xBA\x03\x02" +
		"\x02\x02\xBC\x17\x03\x02\x02\x02\xBD\xBE\x05\x1A\x0E\x02\xBE\xBF\x05\x06" +
		"\x04\x02\xBF\xC0\x07\x15\x02\x02\xC0\xC1\x05\x06\x04\x02\xC1\xC2\x05\x0E" +
		"\b\x02\xC2\x19\x03\x02\x02\x02\xC3\xC4\x07\x12\x02\x02\xC4\x1B\x03\x02" +
		"\x02\x02\xC5\xC7\x05\x1E\x10\x02\xC6\xC8\x05^0\x02\xC7\xC6\x03\x02\x02" +
		"\x02\xC7\xC8\x03\x02\x02\x02\xC8\x1D\x03\x02\x02\x02\xC9\xCA\x05&\x14" +
		"\x02\xCA\xCC\x05\x06\x04\x02\xCB\xCD\x05T+\x02\xCC\xCB\x03\x02\x02\x02" +
		"\xCC\xCD\x03\x02\x02\x02\xCD\x1F\x03\x02\x02\x02\xCE\xCF\x05\x1C\x0F\x02" +
		"\xCF\xD0\x05\"\x12\x02\xD0!\x03\x02\x02\x02\xD1\xD5\x05\x06\x04\x02\xD2" +
		"\xD3\x05$\x13\x02\xD3\xD4\x05\x06\x04\x02\xD4\xD6\x03\x02\x02\x02\xD5" +
		"\xD2\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7" +
		"\xD8\x03\x02\x02\x02\xD8#\x03\x02\x02\x02\xD9\xDA\x07 \x02\x02\xDA\xDB" +
		"\x05\x06\x04\x02\xDB\xDC\x05\x1C\x0F\x02\xDC\xDD\x05\x06\x04\x02\xDD%" +
		"\x03\x02\x02\x02\xDE\xE2\x05*\x16\x02\xDF\xE2\x05\\/\x02\xE0\xE2\x05(" +
		"\x15\x02\xE1\xDE\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE1\xE0\x03\x02" +
		"\x02\x02\xE2\'\x03\x02\x02\x02\xE3\xE4\x07\t\x02\x02\xE4\xE5\x05\x06\x04" +
		"\x02\xE5\xE6\x05\x0E\b\x02\xE6\xE7\x05\x06\x04\x02\xE7\xE8\x07\b\x02\x02" +
		"\xE8)\x03\x02\x02\x02\xE9\xEC\x05,\x17\x02\xEA\xEC\x056\x1C\x02\xEB\xE9" +
		"\x03\x02\x02\x02\xEB\xEA\x03\x02\x02\x02\xEC+\x03\x02\x02\x02\xED\xF1" +
		"\x052\x1A\x02\xEE\xF1\x054\x1B\x02\xEF\xF1\x05.\x18\x02\xF0\xED\x03\x02" +
		"\x02\x02\xF0\xEE\x03\x02\x02\x02\xF0\xEF\x03\x02\x02\x02\xF1-\x03\x02" +
		"\x02\x02\xF2\xF4\x07\x06\x02\x02\xF3\xF5\x050\x19\x02\xF4\xF3\x03\x02" +
		"\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF9\x05\x06" +
		"\x04\x02\xF7\xF8\x07\n\x02\x02\xF8\xFA\x05\x06\x04\x02\xF9\xF7\x03\x02" +
		"\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFC\x05\x04" +
		"\x03\x02\xFC\xFD\x07\x07\x02\x02\xFD/\x03\x02\x02\x02\xFE\xFF\x05\x06" +
		"\x04\x02\xFF\u0100\x07!\x02\x02\u0100\u0102\x03\x02\x02\x02\u0101\xFE" +
		"\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02" +
		"\u0103\u0104\x03\x02\x02\x02\u01041\x03\x02\x02\x02\u0105\u0106\x07\x1B" +
		"\x02\x02\u0106\u0108\x05\x06\x04\x02\u0107\u0109\x05\x10\t\x02\u0108\u0107" +
		"\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02" +
		"\u010A\u010B\x05\x06\x04\x02\u010B\u010C\x07\x1C\x02\x02\u010C3\x03\x02" +
		"\x02\x02\u010D\u010E\x07\x1D\x02\x02\u010E\u0110\x05\x06\x04\x02\u010F" +
		"\u0111\x05\x10\t\x02\u0110\u010F\x03\x02\x02\x02\u0110\u0111\x03\x02\x02" +
		"\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0113\x05\x06\x04\x02\u0113\u0114" +
		"\x07\x1C\x02\x02\u01145\x03\x02\x02\x02\u0115\u011C\x05<\x1F\x02\u0116" +
		"\u011C\x05D#\x02\u0117\u011C\x058\x1D\x02\u0118\u011C\x05N(\x02\u0119" +
		"\u011C\x05F$\x02\u011A\u011C\x05H%\x02\u011B\u0115\x03\x02\x02\x02\u011B" +
		"\u0116\x03\x02\x02\x02\u011B\u0117\x03\x02\x02\x02\u011B\u0118\x03\x02" +
		"\x02\x02\u011B\u0119\x03\x02\x02\x02\u011B\u011A\x03\x02\x02\x02\u011C" +
		"7\x03\x02\x02\x02\u011D\u0122\x05:\x1E\x02\u011E\u0122\x05> \x02\u011F" +
		"\u0122\x05B\"\x02\u0120\u0122\x05@!\x02\u0121\u011D\x03\x02\x02\x02\u0121" +
		"\u011E\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0120\x03\x02" +
		"\x02\x02\u01229\x03\x02\x02\x02\u0123\u0126\x05B\"\x02\u0124\u0126\x05" +
		"@!\x02\u0125\u0123\x03\x02\x02\x02\u0125\u0124\x03\x02\x02\x02\u0126\u0127" +
		"\x03\x02\x02\x02\u0127\u0128\x07\x18\x02\x02\u0128\u0129\x05@!\x02\u0129" +
		";\x03\x02\x02\x02\u012A\u012B\x07\"\x02\x02\u012B=\x03\x02\x02\x02\u012C" +
		"\u012E\x07\x10\x02\x02\u012D\u012C\x03\x02\x02\x02\u012D\u012E\x03\x02" +
		"\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0131\x07\x19\x02\x02\u0130" +
		"\u0132\x07\x1F\x02\x02\u0131\u0130\x03\x02\x02\x02\u0132\u0133\x03\x02" +
		"\x02\x02\u0133\u0131\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134" +
		"?\x03\x02\x02\x02\u0135\u0137\x07\x10\x02\x02\u0136\u0135\x03\x02\x02" +
		"\x02\u0136\u0137\x03\x02\x02\x02\u0137\u0139\x03\x02\x02\x02\u0138\u013A" +
		"\x07\x1E\x02\x02\u0139\u0138\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02" +
		"\u013B\u0139\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013CA\x03\x02" +
		"\x02\x02\u013D\u013F\x07\x10\x02\x02\u013E\u013D\x03\x02\x02\x02\u013E" +
		"\u013F\x03\x02\x02\x02\u013F\u0141\x03\x02\x02\x02\u0140\u0142\x07\x1E" +
		"\x02\x02\u0141\u0140\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143" +
		"\u0141\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0145\x03\x02" +
		"\x02\x02\u0145\u0147\x07\v\x02\x02\u0146\u0148\x07\x1E\x02\x02\u0147\u0146" +
		"\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02" +
		"\u0149\u014A\x03\x02\x02\x02\u014AC\x03\x02\x02\x02\u014B\u014C\x07\x11" +
		"\x02\x02\u014CE\x03\x02\x02\x02\u014D\u014E\x07\x04\x02\x02\u014EG\x03" +
		"\x02\x02\x02\u014F\u0150\x07\x16\x02\x02\u0150\u0151\x05L\'\x02\u0151" +
		"I\x03\x02\x02\x02\u0152\u0153\x07\x0E\x02\x02\u0153\u0154\x05\x06\x04" +
		"\x02\u0154\u0155\x07 \x02\x02\u0155\u0157\x05\x06\x04\x02\u0156\u0158" +
		"\x07\x1E\x02\x02\u0157\u0156\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02" +
		"\u0159\u0157\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015B\x03" +
		"\x02\x02\x02\u015B\u015C\x05\x06\x04\x02\u015C\u015D\x07\x0F\x02\x02\u015D" +
		"K\x03\x02\x02\x02\u015E\u016B\t\x03\x02\x02\u015F\u0161\x07 \x02\x02\u0160" +
		"\u015F\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162\u0160\x03\x02" +
		"\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u016B\x03\x02\x02\x02\u0164" +
		"\u016B\x05F$\x02\u0165\u0167\x07\n\x02\x02\u0166\u0165\x03\x02\x02\x02" +
		"\u0167\u0168\x03\x02\x02\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0169\x03" +
		"\x02\x02\x02\u0169\u016B\x03\x02\x02\x02\u016A\u015E\x03\x02\x02\x02\u016A" +
		"\u0160\x03\x02\x02\x02\u016A\u0164\x03\x02\x02\x02\u016A\u0166\x03\x02" +
		"\x02\x02\u016BM\x03\x02\x02\x02\u016C\u016D\x07\x1A\x02\x02\u016D\u016E" +
		"\x05P)\x02\u016EO\x03\x02\x02\x02\u016F\u0173\x05\x06\x04\x02\u0170\u0174" +
		"\x056\x1C\x02\u0171\u0174\x05R*\x02\u0172\u0174\x05L\'\x02\u0173\u0170" +
		"\x03\x02\x02\x02\u0173\u0171\x03\x02\x02\x02\u0173\u0172\x03\x02\x02\x02" +
		"\u0174\u0176\x03\x02\x02\x02\u0175\u016F\x03\x02\x02\x02\u0176\u0179\x03" +
		"\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178" +
		"\u017A\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02\u017A\u017B\x05\x06" +
		"\x04\x02\u017B\u017C\x07\b\x02\x02\u017CQ\x03\x02\x02\x02\u017D\u017E" +
		"\x07\t\x02\x02\u017E\u017F\x05P)\x02\u017FS\x03\x02\x02\x02\u0180\u0181" +
		"\x05V,\x02\u0181\u0183\x05\x06\x04\x02\u0182\u0184\x05T+\x02\u0183\u0182" +
		"\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02" +
		"\u0185\u0186\x05\x06\x04\x02\u0186U\x03\x02\x02\x02\u0187\u0188\x05\x06" +
		"\x04\x02\u0188\u0189\x05X-\x02\u0189W\x03\x02\x02\x02\u018A\u018B\x07" +
		"\x12\x02\x02\u018BY\x03\x02\x02\x02\u018C\u018E\x07 \x02\x02\u018D\u018C" +
		"\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02" +
		"\u018F\u0190\x03\x02\x02\x02\u0190[\x03\x02\x02\x02\u0191\u0192\x05\x1A" +
		"\x0E\x02\u0192]\x03\x02\x02\x02\u0193\u0195\x05`1\x02\u0194\u0196\x05" +
		"^0\x02\u0195\u0194\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196_" +
		"\x03\x02\x02\x02\u0197\u0198\x05\x06\x04\x02\u0198\u0199\x07\r\x02\x02" +
		"\u0199\u019C\x05\x06\x04\x02\u019A\u019D\x05\x1E\x10\x02\u019B\u019D\x05" +
		"&\x14\x02\u019C\u019A\x03\x02\x02\x02\u019C\u019B\x03\x02\x02\x02\u019D" +
		"a\x03\x02\x02\x02-gkr|\x8C\x90\x97\x9E\xA4\xAD\xB6\xBB\xC7\xCC\xD7\xE1" +
		"\xEB\xF0\xF4\xF9\u0103\u0108\u0110\u011B\u0121\u0125\u012D\u0133\u0136" +
		"\u013B\u013E\u0143\u0149\u0159\u0162\u0168\u016A\u0173\u0177\u0183\u018F" +
		"\u0195\u019C";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SmalltalkParser.__ATN) {
			SmalltalkParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SmalltalkParser._serializedATN));
		}

		return SmalltalkParser.__ATN;
	}

}

export class ScriptContext extends ParserRuleContext {
	public sequence(): SequenceContext {
		return this.getRuleContext(0, SequenceContext);
	}
	public ws(): WsContext {
		return this.getRuleContext(0, WsContext);
	}
	public EOF(): TerminalNode { return this.getToken(SmalltalkParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_script; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterScript) {
			listener.enterScript(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitScript) {
			listener.exitScript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitScript) {
			return visitor.visitScript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SequenceContext extends ParserRuleContext {
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public temps(): TempsContext | undefined {
		return this.tryGetRuleContext(0, TempsContext);
	}
	public statements(): StatementsContext | undefined {
		return this.tryGetRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_sequence; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterSequence) {
			listener.enterSequence(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitSequence) {
			listener.exitSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitSequence) {
			return visitor.visitSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WsContext extends ParserRuleContext {
	public SEPARATOR(): TerminalNode[];
	public SEPARATOR(i: number): TerminalNode;
	public SEPARATOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmalltalkParser.SEPARATOR);
		} else {
			return this.getToken(SmalltalkParser.SEPARATOR, i);
		}
	}
	public COMMENT(): TerminalNode[];
	public COMMENT(i: number): TerminalNode;
	public COMMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmalltalkParser.COMMENT);
		} else {
			return this.getToken(SmalltalkParser.COMMENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_ws; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterWs) {
			listener.enterWs(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitWs) {
			listener.exitWs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitWs) {
			return visitor.visitWs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TempsContext extends ParserRuleContext {
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public PIPE(): TerminalNode[];
	public PIPE(i: number): TerminalNode;
	public PIPE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmalltalkParser.PIPE);
		} else {
			return this.getToken(SmalltalkParser.PIPE, i);
		}
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmalltalkParser.IDENTIFIER);
		} else {
			return this.getToken(SmalltalkParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_temps; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterTemps) {
			listener.enterTemps(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitTemps) {
			listener.exitTemps(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitTemps) {
			return visitor.visitTemps(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_statements; }
	public copyFrom(ctx: StatementsContext): void {
		super.copyFrom(ctx);
	}
}
export class StatementAnswerContext extends StatementsContext {
	public answer(): AnswerContext {
		return this.getRuleContext(0, AnswerContext);
	}
	public ws(): WsContext {
		return this.getRuleContext(0, WsContext);
	}
	constructor(ctx: StatementsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterStatementAnswer) {
			listener.enterStatementAnswer(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitStatementAnswer) {
			listener.exitStatementAnswer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitStatementAnswer) {
			return visitor.visitStatementAnswer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StatementExpressionsAnswerContext extends StatementsContext {
	public expressions(): ExpressionsContext {
		return this.getRuleContext(0, ExpressionsContext);
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public PERIOD(): TerminalNode { return this.getToken(SmalltalkParser.PERIOD, 0); }
	public answer(): AnswerContext {
		return this.getRuleContext(0, AnswerContext);
	}
	constructor(ctx: StatementsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterStatementExpressionsAnswer) {
			listener.enterStatementExpressionsAnswer(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitStatementExpressionsAnswer) {
			listener.exitStatementExpressionsAnswer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitStatementExpressionsAnswer) {
			return visitor.visitStatementExpressionsAnswer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StatementExpressionsContext extends StatementsContext {
	public expressions(): ExpressionsContext {
		return this.getRuleContext(0, ExpressionsContext);
	}
	public ws(): WsContext {
		return this.getRuleContext(0, WsContext);
	}
	public PERIOD(): TerminalNode | undefined { return this.tryGetToken(SmalltalkParser.PERIOD, 0); }
	constructor(ctx: StatementsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterStatementExpressions) {
			listener.enterStatementExpressions(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitStatementExpressions) {
			listener.exitStatementExpressions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitStatementExpressions) {
			return visitor.visitStatementExpressions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnswerContext extends ParserRuleContext {
	public CARROT(): TerminalNode { return this.getToken(SmalltalkParser.CARROT, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public PERIOD(): TerminalNode | undefined { return this.tryGetToken(SmalltalkParser.PERIOD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_answer; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterAnswer) {
			listener.enterAnswer(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitAnswer) {
			listener.exitAnswer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitAnswer) {
			return visitor.visitAnswer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public cascade(): CascadeContext | undefined {
		return this.tryGetRuleContext(0, CascadeContext);
	}
	public keywordSend(): KeywordSendContext | undefined {
		return this.tryGetRuleContext(0, KeywordSendContext);
	}
	public binarySend(): BinarySendContext | undefined {
		return this.tryGetRuleContext(0, BinarySendContext);
	}
	public primitive(): PrimitiveContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_expression; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionsContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public expressionList(): ExpressionListContext[];
	public expressionList(i: number): ExpressionListContext;
	public expressionList(i?: number): ExpressionListContext | ExpressionListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionListContext);
		} else {
			return this.getRuleContext(i, ExpressionListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_expressions; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterExpressions) {
			listener.enterExpressions(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitExpressions) {
			listener.exitExpressions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitExpressions) {
			return visitor.visitExpressions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public PERIOD(): TerminalNode { return this.getToken(SmalltalkParser.PERIOD, 0); }
	public ws(): WsContext {
		return this.getRuleContext(0, WsContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CascadeContext extends ParserRuleContext {
	public keywordSend(): KeywordSendContext | undefined {
		return this.tryGetRuleContext(0, KeywordSendContext);
	}
	public binarySend(): BinarySendContext | undefined {
		return this.tryGetRuleContext(0, BinarySendContext);
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public SEMI_COLON(): TerminalNode[];
	public SEMI_COLON(i: number): TerminalNode;
	public SEMI_COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmalltalkParser.SEMI_COLON);
		} else {
			return this.getToken(SmalltalkParser.SEMI_COLON, i);
		}
	}
	public message(): MessageContext[];
	public message(i: number): MessageContext;
	public message(i?: number): MessageContext | MessageContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MessageContext);
		} else {
			return this.getRuleContext(i, MessageContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_cascade; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterCascade) {
			listener.enterCascade(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitCascade) {
			listener.exitCascade(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitCascade) {
			return visitor.visitCascade(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageContext extends ParserRuleContext {
	public binaryMessage(): BinaryMessageContext | undefined {
		return this.tryGetRuleContext(0, BinaryMessageContext);
	}
	public unaryMessage(): UnaryMessageContext | undefined {
		return this.tryGetRuleContext(0, UnaryMessageContext);
	}
	public keywordMessage(): KeywordMessageContext | undefined {
		return this.tryGetRuleContext(0, KeywordMessageContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_message; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterMessage) {
			listener.enterMessage(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitMessage) {
			listener.exitMessage(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitMessage) {
			return visitor.visitMessage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public ASSIGNMENT(): TerminalNode { return this.getToken(SmalltalkParser.ASSIGNMENT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_assignment; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(SmalltalkParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_variable; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitVariable) {
			return visitor.visitVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinarySendContext extends ParserRuleContext {
	public unarySend(): UnarySendContext {
		return this.getRuleContext(0, UnarySendContext);
	}
	public binaryTail(): BinaryTailContext | undefined {
		return this.tryGetRuleContext(0, BinaryTailContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_binarySend; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterBinarySend) {
			listener.enterBinarySend(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitBinarySend) {
			listener.exitBinarySend(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitBinarySend) {
			return visitor.visitBinarySend(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnarySendContext extends ParserRuleContext {
	public operand(): OperandContext {
		return this.getRuleContext(0, OperandContext);
	}
	public ws(): WsContext {
		return this.getRuleContext(0, WsContext);
	}
	public unaryTail(): UnaryTailContext | undefined {
		return this.tryGetRuleContext(0, UnaryTailContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_unarySend; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterUnarySend) {
			listener.enterUnarySend(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitUnarySend) {
			listener.exitUnarySend(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitUnarySend) {
			return visitor.visitUnarySend(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordSendContext extends ParserRuleContext {
	public binarySend(): BinarySendContext {
		return this.getRuleContext(0, BinarySendContext);
	}
	public keywordMessage(): KeywordMessageContext {
		return this.getRuleContext(0, KeywordMessageContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_keywordSend; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterKeywordSend) {
			listener.enterKeywordSend(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitKeywordSend) {
			listener.exitKeywordSend(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitKeywordSend) {
			return visitor.visitKeywordSend(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordMessageContext extends ParserRuleContext {
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public keywordPair(): KeywordPairContext[];
	public keywordPair(i: number): KeywordPairContext;
	public keywordPair(i?: number): KeywordPairContext | KeywordPairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeywordPairContext);
		} else {
			return this.getRuleContext(i, KeywordPairContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_keywordMessage; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterKeywordMessage) {
			listener.enterKeywordMessage(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitKeywordMessage) {
			listener.exitKeywordMessage(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitKeywordMessage) {
			return visitor.visitKeywordMessage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordPairContext extends ParserRuleContext {
	public KEYWORD(): TerminalNode { return this.getToken(SmalltalkParser.KEYWORD, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public binarySend(): BinarySendContext {
		return this.getRuleContext(0, BinarySendContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_keywordPair; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterKeywordPair) {
			listener.enterKeywordPair(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitKeywordPair) {
			listener.exitKeywordPair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitKeywordPair) {
			return visitor.visitKeywordPair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperandContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public reference(): ReferenceContext | undefined {
		return this.tryGetRuleContext(0, ReferenceContext);
	}
	public subexpression(): SubexpressionContext | undefined {
		return this.tryGetRuleContext(0, SubexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_operand; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterOperand) {
			listener.enterOperand(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitOperand) {
			listener.exitOperand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitOperand) {
			return visitor.visitOperand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubexpressionContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(SmalltalkParser.OPEN_PAREN, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(SmalltalkParser.CLOSE_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_subexpression; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterSubexpression) {
			listener.enterSubexpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitSubexpression) {
			listener.exitSubexpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitSubexpression) {
			return visitor.visitSubexpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public runtimeLiteral(): RuntimeLiteralContext | undefined {
		return this.tryGetRuleContext(0, RuntimeLiteralContext);
	}
	public parsetimeLiteral(): ParsetimeLiteralContext | undefined {
		return this.tryGetRuleContext(0, ParsetimeLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_literal; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuntimeLiteralContext extends ParserRuleContext {
	public dynamicDictionary(): DynamicDictionaryContext | undefined {
		return this.tryGetRuleContext(0, DynamicDictionaryContext);
	}
	public dynamicArray(): DynamicArrayContext | undefined {
		return this.tryGetRuleContext(0, DynamicArrayContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_runtimeLiteral; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterRuntimeLiteral) {
			listener.enterRuntimeLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitRuntimeLiteral) {
			listener.exitRuntimeLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitRuntimeLiteral) {
			return visitor.visitRuntimeLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public BLOCK_START(): TerminalNode { return this.getToken(SmalltalkParser.BLOCK_START, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public sequence(): SequenceContext {
		return this.getRuleContext(0, SequenceContext);
	}
	public BLOCK_END(): TerminalNode { return this.getToken(SmalltalkParser.BLOCK_END, 0); }
	public blockParamList(): BlockParamListContext | undefined {
		return this.tryGetRuleContext(0, BlockParamListContext);
	}
	public PIPE(): TerminalNode | undefined { return this.tryGetToken(SmalltalkParser.PIPE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_block; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockParamListContext extends ParserRuleContext {
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public BLOCK_PARAM(): TerminalNode[];
	public BLOCK_PARAM(i: number): TerminalNode;
	public BLOCK_PARAM(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmalltalkParser.BLOCK_PARAM);
		} else {
			return this.getToken(SmalltalkParser.BLOCK_PARAM, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_blockParamList; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterBlockParamList) {
			listener.enterBlockParamList(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitBlockParamList) {
			listener.exitBlockParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitBlockParamList) {
			return visitor.visitBlockParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DynamicDictionaryContext extends ParserRuleContext {
	public DYNDICT_START(): TerminalNode { return this.getToken(SmalltalkParser.DYNDICT_START, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public DYNARR_END(): TerminalNode { return this.getToken(SmalltalkParser.DYNARR_END, 0); }
	public expressions(): ExpressionsContext | undefined {
		return this.tryGetRuleContext(0, ExpressionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_dynamicDictionary; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterDynamicDictionary) {
			listener.enterDynamicDictionary(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitDynamicDictionary) {
			listener.exitDynamicDictionary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitDynamicDictionary) {
			return visitor.visitDynamicDictionary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DynamicArrayContext extends ParserRuleContext {
	public DYNARR_START(): TerminalNode { return this.getToken(SmalltalkParser.DYNARR_START, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public DYNARR_END(): TerminalNode { return this.getToken(SmalltalkParser.DYNARR_END, 0); }
	public expressions(): ExpressionsContext | undefined {
		return this.tryGetRuleContext(0, ExpressionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_dynamicArray; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterDynamicArray) {
			listener.enterDynamicArray(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitDynamicArray) {
			listener.exitDynamicArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitDynamicArray) {
			return visitor.visitDynamicArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParsetimeLiteralContext extends ParserRuleContext {
	public charConstant(): CharConstantContext | undefined {
		return this.tryGetRuleContext(0, CharConstantContext);
	}
	public pseudoVariable(): PseudoVariableContext | undefined {
		return this.tryGetRuleContext(0, PseudoVariableContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public literalArray(): LiteralArrayContext | undefined {
		return this.tryGetRuleContext(0, LiteralArrayContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public symbol(): SymbolContext | undefined {
		return this.tryGetRuleContext(0, SymbolContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_parsetimeLiteral; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterParsetimeLiteral) {
			listener.enterParsetimeLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitParsetimeLiteral) {
			listener.exitParsetimeLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitParsetimeLiteral) {
			return visitor.visitParsetimeLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public numberExp(): NumberExpContext | undefined {
		return this.tryGetRuleContext(0, NumberExpContext);
	}
	public hex(): HexContext | undefined {
		return this.tryGetRuleContext(0, HexContext);
	}
	public stFloat(): StFloatContext | undefined {
		return this.tryGetRuleContext(0, StFloatContext);
	}
	public stInteger(): StIntegerContext | undefined {
		return this.tryGetRuleContext(0, StIntegerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_number; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberExpContext extends ParserRuleContext {
	public EXP(): TerminalNode { return this.getToken(SmalltalkParser.EXP, 0); }
	public stInteger(): StIntegerContext[];
	public stInteger(i: number): StIntegerContext;
	public stInteger(i?: number): StIntegerContext | StIntegerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StIntegerContext);
		} else {
			return this.getRuleContext(i, StIntegerContext);
		}
	}
	public stFloat(): StFloatContext | undefined {
		return this.tryGetRuleContext(0, StFloatContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_numberExp; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterNumberExp) {
			listener.enterNumberExp(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitNumberExp) {
			listener.exitNumberExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitNumberExp) {
			return visitor.visitNumberExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharConstantContext extends ParserRuleContext {
	public CHARACTER_CONSTANT(): TerminalNode { return this.getToken(SmalltalkParser.CHARACTER_CONSTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_charConstant; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterCharConstant) {
			listener.enterCharConstant(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitCharConstant) {
			listener.exitCharConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitCharConstant) {
			return visitor.visitCharConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HexContext extends ParserRuleContext {
	public HEX(): TerminalNode { return this.getToken(SmalltalkParser.HEX, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SmalltalkParser.MINUS, 0); }
	public HEXDIGIT(): TerminalNode[];
	public HEXDIGIT(i: number): TerminalNode;
	public HEXDIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmalltalkParser.HEXDIGIT);
		} else {
			return this.getToken(SmalltalkParser.HEXDIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_hex; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterHex) {
			listener.enterHex(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitHex) {
			listener.exitHex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitHex) {
			return visitor.visitHex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StIntegerContext extends ParserRuleContext {
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SmalltalkParser.MINUS, 0); }
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmalltalkParser.DIGIT);
		} else {
			return this.getToken(SmalltalkParser.DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_stInteger; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterStInteger) {
			listener.enterStInteger(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitStInteger) {
			listener.exitStInteger(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitStInteger) {
			return visitor.visitStInteger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StFloatContext extends ParserRuleContext {
	public PERIOD(): TerminalNode { return this.getToken(SmalltalkParser.PERIOD, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SmalltalkParser.MINUS, 0); }
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmalltalkParser.DIGIT);
		} else {
			return this.getToken(SmalltalkParser.DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_stFloat; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterStFloat) {
			listener.enterStFloat(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitStFloat) {
			listener.exitStFloat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitStFloat) {
			return visitor.visitStFloat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PseudoVariableContext extends ParserRuleContext {
	public RESERVED_WORD(): TerminalNode { return this.getToken(SmalltalkParser.RESERVED_WORD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_pseudoVariable; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterPseudoVariable) {
			listener.enterPseudoVariable(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitPseudoVariable) {
			listener.exitPseudoVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitPseudoVariable) {
			return visitor.visitPseudoVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(SmalltalkParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_string; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SymbolContext extends ParserRuleContext {
	public HASH(): TerminalNode { return this.getToken(SmalltalkParser.HASH, 0); }
	public bareSymbol(): BareSymbolContext {
		return this.getRuleContext(0, BareSymbolContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_symbol; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterSymbol) {
			listener.enterSymbol(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitSymbol) {
			listener.exitSymbol(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitSymbol) {
			return visitor.visitSymbol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(SmalltalkParser.LT, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public KEYWORD(): TerminalNode { return this.getToken(SmalltalkParser.KEYWORD, 0); }
	public GT(): TerminalNode { return this.getToken(SmalltalkParser.GT, 0); }
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmalltalkParser.DIGIT);
		} else {
			return this.getToken(SmalltalkParser.DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_primitive; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterPrimitive) {
			listener.enterPrimitive(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitPrimitive) {
			listener.exitPrimitive(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitPrimitive) {
			return visitor.visitPrimitive(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BareSymbolContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(SmalltalkParser.IDENTIFIER, 0); }
	public BINARY_SELECTOR(): TerminalNode | undefined { return this.tryGetToken(SmalltalkParser.BINARY_SELECTOR, 0); }
	public KEYWORD(): TerminalNode[];
	public KEYWORD(i: number): TerminalNode;
	public KEYWORD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmalltalkParser.KEYWORD);
		} else {
			return this.getToken(SmalltalkParser.KEYWORD, i);
		}
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public PIPE(): TerminalNode[];
	public PIPE(i: number): TerminalNode;
	public PIPE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmalltalkParser.PIPE);
		} else {
			return this.getToken(SmalltalkParser.PIPE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_bareSymbol; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterBareSymbol) {
			listener.enterBareSymbol(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitBareSymbol) {
			listener.exitBareSymbol(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitBareSymbol) {
			return visitor.visitBareSymbol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralArrayContext extends ParserRuleContext {
	public LITARR_START(): TerminalNode { return this.getToken(SmalltalkParser.LITARR_START, 0); }
	public literalArrayRest(): LiteralArrayRestContext {
		return this.getRuleContext(0, LiteralArrayRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_literalArray; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterLiteralArray) {
			listener.enterLiteralArray(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitLiteralArray) {
			listener.exitLiteralArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitLiteralArray) {
			return visitor.visitLiteralArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralArrayRestContext extends ParserRuleContext {
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(SmalltalkParser.CLOSE_PAREN, 0); }
	public parsetimeLiteral(): ParsetimeLiteralContext[];
	public parsetimeLiteral(i: number): ParsetimeLiteralContext;
	public parsetimeLiteral(i?: number): ParsetimeLiteralContext | ParsetimeLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParsetimeLiteralContext);
		} else {
			return this.getRuleContext(i, ParsetimeLiteralContext);
		}
	}
	public bareLiteralArray(): BareLiteralArrayContext[];
	public bareLiteralArray(i: number): BareLiteralArrayContext;
	public bareLiteralArray(i?: number): BareLiteralArrayContext | BareLiteralArrayContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BareLiteralArrayContext);
		} else {
			return this.getRuleContext(i, BareLiteralArrayContext);
		}
	}
	public bareSymbol(): BareSymbolContext[];
	public bareSymbol(i: number): BareSymbolContext;
	public bareSymbol(i?: number): BareSymbolContext | BareSymbolContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BareSymbolContext);
		} else {
			return this.getRuleContext(i, BareSymbolContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_literalArrayRest; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterLiteralArrayRest) {
			listener.enterLiteralArrayRest(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitLiteralArrayRest) {
			listener.exitLiteralArrayRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitLiteralArrayRest) {
			return visitor.visitLiteralArrayRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BareLiteralArrayContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(SmalltalkParser.OPEN_PAREN, 0); }
	public literalArrayRest(): LiteralArrayRestContext {
		return this.getRuleContext(0, LiteralArrayRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_bareLiteralArray; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterBareLiteralArray) {
			listener.enterBareLiteralArray(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitBareLiteralArray) {
			listener.exitBareLiteralArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitBareLiteralArray) {
			return visitor.visitBareLiteralArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryTailContext extends ParserRuleContext {
	public unaryMessage(): UnaryMessageContext {
		return this.getRuleContext(0, UnaryMessageContext);
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public unaryTail(): UnaryTailContext | undefined {
		return this.tryGetRuleContext(0, UnaryTailContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_unaryTail; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterUnaryTail) {
			listener.enterUnaryTail(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitUnaryTail) {
			listener.exitUnaryTail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitUnaryTail) {
			return visitor.visitUnaryTail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryMessageContext extends ParserRuleContext {
	public ws(): WsContext {
		return this.getRuleContext(0, WsContext);
	}
	public unarySelector(): UnarySelectorContext {
		return this.getRuleContext(0, UnarySelectorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_unaryMessage; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterUnaryMessage) {
			listener.enterUnaryMessage(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitUnaryMessage) {
			listener.exitUnaryMessage(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitUnaryMessage) {
			return visitor.visitUnaryMessage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnarySelectorContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(SmalltalkParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_unarySelector; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterUnarySelector) {
			listener.enterUnarySelector(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitUnarySelector) {
			listener.exitUnarySelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitUnarySelector) {
			return visitor.visitUnarySelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordsContext extends ParserRuleContext {
	public KEYWORD(): TerminalNode[];
	public KEYWORD(i: number): TerminalNode;
	public KEYWORD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmalltalkParser.KEYWORD);
		} else {
			return this.getToken(SmalltalkParser.KEYWORD, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_keywords; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterKeywords) {
			listener.enterKeywords(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitKeywords) {
			listener.exitKeywords(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitKeywords) {
			return visitor.visitKeywords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReferenceContext extends ParserRuleContext {
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_reference; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterReference) {
			listener.enterReference(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitReference) {
			listener.exitReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitReference) {
			return visitor.visitReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryTailContext extends ParserRuleContext {
	public binaryMessage(): BinaryMessageContext {
		return this.getRuleContext(0, BinaryMessageContext);
	}
	public binaryTail(): BinaryTailContext | undefined {
		return this.tryGetRuleContext(0, BinaryTailContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_binaryTail; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterBinaryTail) {
			listener.enterBinaryTail(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitBinaryTail) {
			listener.exitBinaryTail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitBinaryTail) {
			return visitor.visitBinaryTail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryMessageContext extends ParserRuleContext {
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public BINARY_SELECTOR(): TerminalNode { return this.getToken(SmalltalkParser.BINARY_SELECTOR, 0); }
	public unarySend(): UnarySendContext | undefined {
		return this.tryGetRuleContext(0, UnarySendContext);
	}
	public operand(): OperandContext | undefined {
		return this.tryGetRuleContext(0, OperandContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_binaryMessage; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterBinaryMessage) {
			listener.enterBinaryMessage(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitBinaryMessage) {
			listener.exitBinaryMessage(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SmalltalkVisitor<Result>): Result {
		if (visitor.visitBinaryMessage) {
			return visitor.visitBinaryMessage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


