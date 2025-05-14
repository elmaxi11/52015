import gramebnfLexer from "./generated/gramebnfLexer.js";
import gramebnfParser from "./generated/gramebnfParser.js";
import { CustomgramebnfListener } from "./CustomgramebnfListener.js";
import { CustomgramebnfVisitor } from "./CustomgramebnfVisitor.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from 'readline';
import fs from 'fs';

class ThrowingErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
        throw new Error(`línea ${line}, columna ${column}: ${msg}`);
    }
}


async function main() {
    let input;
    input = fs.readFileSync('input.txt', 'utf8');

        while (!input) {
        input = await leerCadena();
    }

    try {
    const inputCharStream = CharStreams.fromString(input); // renombrado para evitar conflicto
    const lexer = new gramebnfLexer(inputCharStream);
    lexer.removeErrorListeners();
    lexer.addErrorListener(new ThrowingErrorListener());


    let tokenStream = new CommonTokenStream(lexer);
    let parser = new gramebnfParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(new ThrowingErrorListener());

    let tree = parser.programa();

    // Verifico si se produjeron errores
        console.log("\nEntrada válida.");
         console.log("\nTabla de Lexemas:");
            tokenStream.fill(); // llena todos los tokens
            tokenStream.tokens.forEach(token => {
                const tokenName = gramebnfLexer.symbolicNames[token.type];
                if (tokenName) {
                    console.log(`${token.text} → ${tokenName}`);
                }
    });
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`\nÁrbol de derivación: ${cadena_tree}`);

        const visitor = new CustomgramebnfVisitor();
        visitor.parser = parser; // le pasamos el parser con el stream
        visitor.visit(tree);
    
        
    } catch (e) {
    console.error("\n❌ Se detectó un error durante el análisis:");
    console.error(e.message);
    return; // importante: detener ejecución

    
}
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer.trim()); // Elimina espacios en blanco al inicio y al final
        });
    });
}

// Ejecuta la función principal
main();