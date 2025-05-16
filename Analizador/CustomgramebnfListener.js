import gramebnfListener from "./generated/gramebnfListener.js";

export class CustomgramebnfListener extends gramebnfListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}