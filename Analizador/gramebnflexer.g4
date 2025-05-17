lexer grammar gramebnflexer;

tokens {COMILLA_APERTURA, COMILLA_CIERRE, ESPACIO}

//Lexemas
LBRACE: '{' ;
RBRACE: '}' ;
LPAREN: '(' ;
RPAREN: ')' ;
SEMICOLON: ';' ;
MIENTR : 'mientras' ;
VER    : 'verdadero' ;
FAL    : 'falso' ;
IMPR   : 'imprimir' ;
LETRA: [a-zA-Z] ;
DIG:   [0-9] ;
SIMB:  [.,!?:;] ;


COMILLA_APERTURA_LEX: '"' -> type(COMILLA_APERTURA), pushMode(INSIDE_STRING) ;

WS: [ \t\r\n]+ -> skip;

mode INSIDE_STRING;

    COMILLA_CIERRE_LEX: '"'         -> type(COMILLA_CIERRE), popMode ;
    LETRA_EN_CADENA:    [a-zA-Z]    -> type(LETRA) ;         // Reusa el tipo LETRA
    DIG_EN_CADENA:      [0-9]       -> type(DIG) ;           // Reusa el tipo DIG
    SIMB_EN_CADENA:     [.,!?:;]    -> type(SIMB) ;          // Reusa el tipo SIMB
    ESPACIO_EN_CADENA_LEX: ' ' -> type(ESPACIO);




