// Generated from c:/Users/maxik/Desktop/Documentos/2025/Sintaxis/Unidad 4 ssl/Analizador/gramebnf.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,14,88,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,
1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,
1,12,1,12,1,13,4,13,83,8,13,11,13,12,13,84,1,13,1,13,0,0,14,1,1,3,2,5,3,
7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,1,0,4,1,0,48,57,
2,0,65,90,97,122,5,0,33,33,44,44,46,46,58,59,63,63,3,0,9,10,13,13,32,32,
88,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,
0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,
1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,1,29,1,0,0,0,3,38,1,0,0,0,5,47,1,0,0,0,
7,49,1,0,0,0,9,51,1,0,0,0,11,61,1,0,0,0,13,67,1,0,0,0,15,69,1,0,0,0,17,71,
1,0,0,0,19,73,1,0,0,0,21,75,1,0,0,0,23,77,1,0,0,0,25,79,1,0,0,0,27,82,1,
0,0,0,29,30,5,109,0,0,30,31,5,105,0,0,31,32,5,101,0,0,32,33,5,110,0,0,33,
34,5,116,0,0,34,35,5,114,0,0,35,36,5,97,0,0,36,37,5,115,0,0,37,2,1,0,0,0,
38,39,5,105,0,0,39,40,5,109,0,0,40,41,5,112,0,0,41,42,5,114,0,0,42,43,5,
105,0,0,43,44,5,109,0,0,44,45,5,105,0,0,45,46,5,114,0,0,46,4,1,0,0,0,47,
48,5,40,0,0,48,6,1,0,0,0,49,50,5,41,0,0,50,8,1,0,0,0,51,52,5,118,0,0,52,
53,5,101,0,0,53,54,5,114,0,0,54,55,5,100,0,0,55,56,5,97,0,0,56,57,5,100,
0,0,57,58,5,101,0,0,58,59,5,114,0,0,59,60,5,111,0,0,60,10,1,0,0,0,61,62,
5,102,0,0,62,63,5,97,0,0,63,64,5,108,0,0,64,65,5,115,0,0,65,66,5,111,0,0,
66,12,1,0,0,0,67,68,5,59,0,0,68,14,1,0,0,0,69,70,5,34,0,0,70,16,1,0,0,0,
71,72,5,123,0,0,72,18,1,0,0,0,73,74,5,125,0,0,74,20,1,0,0,0,75,76,7,0,0,
0,76,22,1,0,0,0,77,78,7,1,0,0,78,24,1,0,0,0,79,80,7,2,0,0,80,26,1,0,0,0,
81,83,7,3,0,0,82,81,1,0,0,0,83,84,1,0,0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,
86,1,0,0,0,86,87,6,13,0,0,87,28,1,0,0,0,2,0,84,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class gramebnfLexer extends antlr4.Lexer {

    static grammarFileName = "gramebnf.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'mientras'", "'imprimir'", "'('", "')'", 
                         "'verdadero'", "'falso'", "';'", "'\"'", "'{'", 
                         "'}'" ];
	static symbolicNames = [ null, "MIENTR", "IMPR", "LPAREN", "RPAREN", "VER", 
                          "FAL", "SEMICOLON", "COMILLA", "LBRACE", "RBRACE", 
                          "DIG", "LETRA", "SIMB", "WS" ];
	static ruleNames = [ "MIENTR", "IMPR", "LPAREN", "RPAREN", "VER", "FAL", 
                      "SEMICOLON", "COMILLA", "LBRACE", "RBRACE", "DIG", 
                      "LETRA", "SIMB", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

gramebnfLexer.EOF = antlr4.Token.EOF;
gramebnfLexer.MIENTR = 1;
gramebnfLexer.IMPR = 2;
gramebnfLexer.LPAREN = 3;
gramebnfLexer.RPAREN = 4;
gramebnfLexer.VER = 5;
gramebnfLexer.FAL = 6;
gramebnfLexer.SEMICOLON = 7;
gramebnfLexer.COMILLA = 8;
gramebnfLexer.LBRACE = 9;
gramebnfLexer.RBRACE = 10;
gramebnfLexer.DIG = 11;
gramebnfLexer.LETRA = 12;
gramebnfLexer.SIMB = 13;
gramebnfLexer.WS = 14;



