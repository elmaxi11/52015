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

    visitBucle22(ctx) {
        return this.visit(ctx.bucle());
    }

    visitSalida(ctx) {
        return this.visit(ctx.sal());
    }

    visitMientr22(ctx) {
        const condTipo = ctx.cond().getChild(0).getSymbol().type;

        if (condTipo === gramebnfParser.VER) {
            for (const instr of ctx.instr()) {
                this.visit(instr);
            }
        }
        return null;
    }

    visitSal22(ctx) {
    const texto = this.visit(ctx.caden());
       console.log(texto);
    return null;
}

    visitCaden22(ctx) {
        return ctx.caract().map(c => this.visit(c)).join('');
    }

    visitLetr(ctx) {
        return ctx.getText();
    }

    visitDigit(ctx) {
        return ctx.getText();
    }

    visitSimbol(ctx) {
        return ctx.getText();
    }

    visitEspacio(ctx) {
    return ' ';
}
}
