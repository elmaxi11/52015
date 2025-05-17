import gramebnfVisitor from "./generated/gramebnfVisitor.js";
import gramebnfParser from "./generated/gramebnfParser.js";

export class CustomgramebnfVisitor extends gramebnfVisitor {
  constructor() {
    super();
    this.jsCode = "";
    this.executing = true;
    this.indentLevel = 0;
  }

  indent() {
    return "  ".repeat(this.indentLevel);
  }

  visitPrograma(ctx) {
    console.log("\n ▶ Iniciando ejecución del programa:");
    for (const instr of ctx.instr()) this.visit(instr);
    console.log("Fin del programa\n\nCódigo JavaScript equivalente:");
    console.log(this.jsCode);
    return null;
  }

  visitBucle22(ctx) {
    return this.visit(ctx.bucle());
  }

  visitMientr22(ctx) {
    const condType = ctx.cond().getChild(0).getSymbol().type;
    const isTrue = condType === gramebnfParser.VER;
    const jsCond = isTrue ? "true" : "false";

    this.jsCode += `${this.indent()}while (${jsCond}) {\n`;
    this.indentLevel++;

    const prevExecuting = this.executing;
    this.executing = isTrue ? this.executing : false;

    for (const instr of ctx.instr()) this.visit(instr);

    this.executing = prevExecuting;

    this.jsCode += `${this.indent()}break;\n`;
    this.indentLevel--;
    this.jsCode += `${this.indent()}}\n`;
  }

  visitSal22(ctx) {
    let text = this.visit(ctx.caden());
    text = text.replace(/^["']|["']$/g, "");

    if (this.executing) console.log(text);

    const escaped = text.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    this.jsCode += `${this.indent()}console.log("${escaped}");\n`;
  }

  visitCaden22(ctx) {
    return ctx.caract().map((c) => this.visit(c)).join("");
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

  visitEspacio() {
    return " ";
  }
}

