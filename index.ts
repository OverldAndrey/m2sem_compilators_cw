import {SmalltalkLexer} from "./SmalltalkLexer";
import {CharStreams, CommonTokenStream} from "antlr4ts";
import {SmalltalkParser} from "./SmalltalkParser";
import * as fs from "fs";
import {Visitor} from "./visitor";
import {CodeGenerator} from "./code-generator";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

// console.log(argv);

const inputFile = argv['i'] ?? 'input.st';
const outputFile = argv['o'] ?? 'input.ll';

const input = fs.readFileSync(inputFile, { encoding: 'ascii' });

const lexer = new SmalltalkLexer(CharStreams.fromString(input));
const tokenStream = new CommonTokenStream(lexer);
const parser = new SmalltalkParser(tokenStream);

const tree = parser.script();

const visitor = new Visitor();

const ast = visitor.visit(tree);
// console.log([...visitor.symbols.entries()]);

fs.writeFileSync('./ast.json', JSON.stringify(ast, null, 4));

const generator = new CodeGenerator();
generator.symbols = visitor.symbols;
const code = generator.generate(ast);

// console.log(code);

if (code) {
    fs.writeFileSync(outputFile, code);
}
