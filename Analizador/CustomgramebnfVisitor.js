import { Parser } from "antlr4";
import gramebnfVisitor from "./generated/gramebnfVisitor.js";
import gramebnfParser from "./generated/gramebnfParser.js";

export class CustomgramebnfVisitor extends gramebnfVisitor {

    constructor() {
        super();
    }

    visitPrograma(ctx) {

        console.log("\nIniciando ejecución del programa:");

        for (const instr of ctx.instr()) {
            this.visit(instr);
        }

         console.log("Fin del programa");
    return null;
    }

    // instr: bucle #bucle22
    visitBucle22(ctx) {
        return this.visit(ctx.bucle());
    }

    // instr: sal #salida
    visitSalida(ctx) {
        return this.visit(ctx.sal());
    }

    // bucle: MIENTR cond LBRACE instr* RBRACE #mientr22
    visitMientr22(ctx) {
        const condTipo = ctx.cond().getChild(0).getSymbol().type;

        if (condTipo === gramebnfParser.VER) {
            for (const instr of ctx.instr()) {
                this.visit(instr);
            }
        }
        return null;
    }

    // sal: IMPR LPAREN caden RPAREN SEMICOLON #sal22
    visitSal22(ctx) {
        const texto = this.visit(ctx.caden());  // visitCaden22 devuelve el string sin comillas
        console.log(texto);
        return null;
    }

    // caden: COMILLA caract* COMILLA #caden22
    visitCaden22(ctx) {
        let contenido = '';
        for (const c of ctx.caract()) {
            contenido += this.visit(c);  // Cada caract retorna un carácter
        }
        return contenido;
    }

    // caract: LETRA #letr
    visitLetr(ctx) {
        return ctx.getText();
    }

    // caract: DIG #digit
    visitDigit(ctx) {
        return ctx.getText();
    }

    // caract: SIMB #simbol
    visitSimbol(ctx) {
        return ctx.getText();
    }
}
