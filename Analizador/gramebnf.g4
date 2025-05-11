grammar gramebnf;

//Gramática
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

caden: COMILLA caract* COMILLA          #caden22
    ;                  

caract: LETRA                                   #letr
    | DIG                                       #digit
    | SIMB                                      #simbol
    ; 

//Lexemas 
MIENTR: 'mientras' ;
IMPR: 'imprimir' ;
LPAREN: '(' ;
RPAREN: ')' ;
VER: 'verdadero' ;
FAL: 'falso' ;
SEMICOLON: ';' ;
COMILLA: '"' ;
LBRACE: '{' ;
RBRACE: '}' ;
DIG: [0-9] ;
LETRA: [a-zA-Z] ;
SIMB: [.,!?:;] ;
WS: [ \t\r\n]+ -> skip;