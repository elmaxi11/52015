// Generated from c:/Users/maxik/Desktop/Documentos/2025/Sintaxis/Unidad 4 ssl/Analizador/gramebnf.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import gramebnfListener from './gramebnfListener.js';
import gramebnfVisitor from './gramebnfVisitor.js';

const serializedATN = [4,1,14,60,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,5,0,16,8,0,10,0,12,0,19,9,0,1,0,1,0,1,1,1,1,3,1,25,8,
1,1,2,1,2,1,2,1,2,5,2,31,8,2,10,2,12,2,34,9,2,1,2,1,2,1,3,1,3,1,3,1,3,1,
3,1,3,1,4,1,4,1,5,1,5,5,5,48,8,5,10,5,12,5,51,9,5,1,5,1,5,1,6,1,6,1,6,3,
6,58,8,6,1,6,0,0,7,0,2,4,6,8,10,12,0,1,1,0,5,6,58,0,17,1,0,0,0,2,24,1,0,
0,0,4,26,1,0,0,0,6,37,1,0,0,0,8,43,1,0,0,0,10,45,1,0,0,0,12,57,1,0,0,0,14,
16,3,2,1,0,15,14,1,0,0,0,16,19,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,20,
1,0,0,0,19,17,1,0,0,0,20,21,5,0,0,1,21,1,1,0,0,0,22,25,3,4,2,0,23,25,3,6,
3,0,24,22,1,0,0,0,24,23,1,0,0,0,25,3,1,0,0,0,26,27,5,1,0,0,27,28,3,8,4,0,
28,32,5,9,0,0,29,31,3,2,1,0,30,29,1,0,0,0,31,34,1,0,0,0,32,30,1,0,0,0,32,
33,1,0,0,0,33,35,1,0,0,0,34,32,1,0,0,0,35,36,5,10,0,0,36,5,1,0,0,0,37,38,
5,2,0,0,38,39,5,3,0,0,39,40,3,10,5,0,40,41,5,4,0,0,41,42,5,7,0,0,42,7,1,
0,0,0,43,44,7,0,0,0,44,9,1,0,0,0,45,49,5,8,0,0,46,48,3,12,6,0,47,46,1,0,
0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,52,1,0,0,0,51,49,1,0,0,
0,52,53,5,8,0,0,53,11,1,0,0,0,54,58,5,12,0,0,55,58,5,11,0,0,56,58,5,13,0,
0,57,54,1,0,0,0,57,55,1,0,0,0,57,56,1,0,0,0,58,13,1,0,0,0,5,17,24,32,49,
57];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class gramebnfParser extends antlr4.Parser {

    static grammarFileName = "gramebnf.g4";
    static literalNames = [ null, "'mientras'", "'imprimir'", "'('", "')'", 
                            "'verdadero'", "'falso'", "';'", "'\"'", "'{'", 
                            "'}'" ];
    static symbolicNames = [ null, "MIENTR", "IMPR", "LPAREN", "RPAREN", 
                             "VER", "FAL", "SEMICOLON", "COMILLA", "LBRACE", 
                             "RBRACE", "DIG", "LETRA", "SIMB", "WS" ];
    static ruleNames = [ "programa", "instr", "bucle", "sal", "cond", "caden", 
                         "caract" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = gramebnfParser.ruleNames;
        this.literalNames = gramebnfParser.literalNames;
        this.symbolicNames = gramebnfParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, gramebnfParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===2) {
	            this.state = 14;
	            this.instr();
	            this.state = 19;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 20;
	        this.match(gramebnfParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instr() {
	    let localctx = new InstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, gramebnfParser.RULE_instr);
	    try {
	        this.state = 24;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            localctx = new Bucle22Context(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 22;
	            this.bucle();
	            break;
	        case 2:
	            localctx = new SalidaContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 23;
	            this.sal();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, gramebnfParser.RULE_bucle);
	    var _la = 0;
	    try {
	        localctx = new Mientr22Context(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(gramebnfParser.MIENTR);
	        this.state = 27;
	        this.cond();
	        this.state = 28;
	        this.match(gramebnfParser.LBRACE);
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===2) {
	            this.state = 29;
	            this.instr();
	            this.state = 34;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 35;
	        this.match(gramebnfParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sal() {
	    let localctx = new SalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, gramebnfParser.RULE_sal);
	    try {
	        localctx = new Sal22Context(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(gramebnfParser.IMPR);
	        this.state = 38;
	        this.match(gramebnfParser.LPAREN);
	        this.state = 39;
	        this.caden();
	        this.state = 40;
	        this.match(gramebnfParser.RPAREN);
	        this.state = 41;
	        this.match(gramebnfParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cond() {
	    let localctx = new CondContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, gramebnfParser.RULE_cond);
	    var _la = 0;
	    try {
	        localctx = new Cond22Context(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===6)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caden() {
	    let localctx = new CadenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, gramebnfParser.RULE_caden);
	    var _la = 0;
	    try {
	        localctx = new Caden22Context(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(gramebnfParser.COMILLA);
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 14336) !== 0)) {
	            this.state = 46;
	            this.caract();
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 52;
	        this.match(gramebnfParser.COMILLA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caract() {
	    let localctx = new CaractContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, gramebnfParser.RULE_caract);
	    try {
	        this.state = 57;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            localctx = new LetrContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.match(gramebnfParser.LETRA);
	            break;
	        case 11:
	            localctx = new DigitContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.match(gramebnfParser.DIG);
	            break;
	        case 13:
	            localctx = new SimbolContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 56;
	            this.match(gramebnfParser.SIMB);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

gramebnfParser.EOF = antlr4.Token.EOF;
gramebnfParser.MIENTR = 1;
gramebnfParser.IMPR = 2;
gramebnfParser.LPAREN = 3;
gramebnfParser.RPAREN = 4;
gramebnfParser.VER = 5;
gramebnfParser.FAL = 6;
gramebnfParser.SEMICOLON = 7;
gramebnfParser.COMILLA = 8;
gramebnfParser.LBRACE = 9;
gramebnfParser.RBRACE = 10;
gramebnfParser.DIG = 11;
gramebnfParser.LETRA = 12;
gramebnfParser.SIMB = 13;
gramebnfParser.WS = 14;

gramebnfParser.RULE_programa = 0;
gramebnfParser.RULE_instr = 1;
gramebnfParser.RULE_bucle = 2;
gramebnfParser.RULE_sal = 3;
gramebnfParser.RULE_cond = 4;
gramebnfParser.RULE_caden = 5;
gramebnfParser.RULE_caract = 6;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramebnfParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(gramebnfParser.EOF, 0);
	};

	instr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstrContext);
	    } else {
	        return this.getTypedRuleContext(InstrContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gramebnfListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramebnfListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramebnfVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramebnfParser.RULE_instr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class Bucle22Context extends InstrContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	bucle() {
	    return this.getTypedRuleContext(BucleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramebnfListener ) {
	        listener.enterBucle22(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramebnfListener ) {
	        listener.exitBucle22(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramebnfVisitor ) {
	        return visitor.visitBucle22(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

gramebnfParser.Bucle22Context = Bucle22Context;

class SalidaContext extends InstrContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	sal() {
	    return this.getTypedRuleContext(SalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramebnfListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramebnfListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramebnfVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

gramebnfParser.SalidaContext = SalidaContext;

class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramebnfParser.RULE_bucle;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class Mientr22Context extends BucleContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	MIENTR() {
	    return this.getToken(gramebnfParser.MIENTR, 0);
	};

	cond() {
	    return this.getTypedRuleContext(CondContext,0);
	};

	LBRACE() {
	    return this.getToken(gramebnfParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(gramebnfParser.RBRACE, 0);
	};

	instr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstrContext);
	    } else {
	        return this.getTypedRuleContext(InstrContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gramebnfListener ) {
	        listener.enterMientr22(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramebnfListener ) {
	        listener.exitMientr22(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramebnfVisitor ) {
	        return visitor.visitMientr22(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

gramebnfParser.Mientr22Context = Mientr22Context;

class SalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramebnfParser.RULE_sal;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class Sal22Context extends SalContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IMPR() {
	    return this.getToken(gramebnfParser.IMPR, 0);
	};

	LPAREN() {
	    return this.getToken(gramebnfParser.LPAREN, 0);
	};

	caden() {
	    return this.getTypedRuleContext(CadenContext,0);
	};

	RPAREN() {
	    return this.getToken(gramebnfParser.RPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(gramebnfParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramebnfListener ) {
	        listener.enterSal22(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramebnfListener ) {
	        listener.exitSal22(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramebnfVisitor ) {
	        return visitor.visitSal22(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

gramebnfParser.Sal22Context = Sal22Context;

class CondContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramebnfParser.RULE_cond;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class Cond22Context extends CondContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	VER() {
	    return this.getToken(gramebnfParser.VER, 0);
	};

	FAL() {
	    return this.getToken(gramebnfParser.FAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramebnfListener ) {
	        listener.enterCond22(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramebnfListener ) {
	        listener.exitCond22(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramebnfVisitor ) {
	        return visitor.visitCond22(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

gramebnfParser.Cond22Context = Cond22Context;

class CadenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramebnfParser.RULE_caden;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class Caden22Context extends CadenContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	COMILLA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gramebnfParser.COMILLA);
	    } else {
	        return this.getToken(gramebnfParser.COMILLA, i);
	    }
	};


	caract = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaractContext);
	    } else {
	        return this.getTypedRuleContext(CaractContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gramebnfListener ) {
	        listener.enterCaden22(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramebnfListener ) {
	        listener.exitCaden22(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramebnfVisitor ) {
	        return visitor.visitCaden22(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

gramebnfParser.Caden22Context = Caden22Context;

class CaractContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramebnfParser.RULE_caract;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class LetrContext extends CaractContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LETRA() {
	    return this.getToken(gramebnfParser.LETRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramebnfListener ) {
	        listener.enterLetr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramebnfListener ) {
	        listener.exitLetr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramebnfVisitor ) {
	        return visitor.visitLetr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

gramebnfParser.LetrContext = LetrContext;

class DigitContext extends CaractContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DIG() {
	    return this.getToken(gramebnfParser.DIG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramebnfListener ) {
	        listener.enterDigit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramebnfListener ) {
	        listener.exitDigit(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramebnfVisitor ) {
	        return visitor.visitDigit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

gramebnfParser.DigitContext = DigitContext;

class SimbolContext extends CaractContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SIMB() {
	    return this.getToken(gramebnfParser.SIMB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramebnfListener ) {
	        listener.enterSimbol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramebnfListener ) {
	        listener.exitSimbol(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramebnfVisitor ) {
	        return visitor.visitSimbol(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

gramebnfParser.SimbolContext = SimbolContext;


gramebnfParser.ProgramaContext = ProgramaContext; 
gramebnfParser.InstrContext = InstrContext; 
gramebnfParser.BucleContext = BucleContext; 
gramebnfParser.SalContext = SalContext; 
gramebnfParser.CondContext = CondContext; 
gramebnfParser.CadenContext = CadenContext; 
gramebnfParser.CaractContext = CaractContext; 
