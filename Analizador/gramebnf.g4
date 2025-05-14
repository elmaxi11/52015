grammar gramebnf;

options {
  tokenVocab = gramebnflexer; // IMPORTANTE: Indica que los tokens vienen de gramebnfLexer
}

programa: instr* EOF
;

instr: bucle                            #bucle22
    | sal                               #salida
    ;

bucle: MIENTR cond LBRACE instr* RBRACE         #mientr22
    ;

sal: IMPR LPAREN caden RPAREN SEMICOLON         #sal22
    ;

cond: (VER|FAL)                                 #cond22
    ;

caden: COMILLA_APERTURA caract* COMILLA_CIERRE #caden22
    ;

caract
    : LETRA                     #letr
    | DIG                       #digit
    | SIMB                      #simbol
    | ESPACIO                   #espacio
    ;
