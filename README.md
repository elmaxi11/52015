# Analizador - Maximiliano Kotlik - 52015

Este proyecto utiliza **ANTLR4** y **Node.js** para analizar instrucciones escritas en un lenguaje definido por la gramática:<br> 

`<programa> ::= { <instrucción> } ;`   
`<instrucción> ::= <bucle> | <salida>;`  
`<bucle> ::= "mientras" <condición> "{" { <instrucción> } "}" ;`
`<salida> ::= "imprimir" "(" <cadena> ")" ";";`
`<condición> ::= "verdadero" | "falso" ;`
`<cadena> ::= """ { <carácter> } """ ;`
`<carácter> ::= <letra> | <dígito> | " " | <símbolo> ;`
`<letra> ::= "a" | "b" | ... | "z" | "A" | "B" | ... | "Z" ;`
`<dígito> ::= "0" | "1" | ... | "9" ;`
`<símbolo> ::= "." | "," | "!" | "?" | ":" | ";" | "'" .`

## Instalación del Proyecto

1. Clona este repositorio desde la terminal:

   ```bash
   git clone https://github.com/elmaxi11/52015.git
   ```

   Si se clonó correctamente, deberías ver el mensaje `done`.

2. Cambia al directorio del proyecto:

   ```bash
   cd 52015/Analizador
   ```

3. Para abrir el proyecto en VS Code escribe esto en la terminal:

   ```bash
   code .
   ```

---

### 📝 Para probar el analizador:

1. Copia el contenido de uno de los ejemplos ubicados en la carpeta `52015` en el archivo `input.txt` y guarda el archivo.  
  
2. Ejecuta el analizador abriendo la terminal de VS Code y escribiendo:

   ```bash
   npm start
   ```

   > ⚠️ En caso de nunca haber utilizado este comando, primero debes ejecutar:
   > ```bash
   > Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
   > ```

3. La salida esperada será algo como:

   ```
   Entrada válida.

   Tabla de Lexemas:  
   mientras → MIENTR   
   verdadero → VER
   { → LBRACE  
   ...

   Árbol de derivación: (programa (instr ...) ...)

   Iniciando ejecución del programa:
   Hola mundo?.!
   Fin del programa
   ```

---

## Funcionamiento del Lenguaje

### 📌 Sintaxis aceptada por la gramática

El analizador reconoce instrucciones con el siguiente formato:

```plaintext
mientras verdadero|falso { imprimir("Cadena de Prueba"); }
```

También es posible anidar estas instrucciones:

```plaintext
mientras verdadero|falso { 
    mientras verdadero|falso {
        imprimir("Cadena de Prueba");
    }
}
```

### ✨ Características de las cadenas

Las cadenas utilizadas en `imprimir` aceptan:

- Letras mayúsculas y minúsculas  
- Números  
- Símbolos: `. , ! ? : ;`

### ⚙️ Lógica de ejecución

- Si la condición es `verdadero`, , se ingresa al bloque del `mientras`, el cual siempre contiene una única instrucción `imprimir`.
- Al ejecutarse `imprimir`, se muestra la cadena por pantalla y se finaliza inmediatamente el bucle, ya que no hay más instrucciones dentro.
- Si la condición es `falso`, el bloque no se ejecuta en absoluto.



---

## Estructura Principal del Proyecto

- `gramebnf.g4`: Gramática del lenguaje.
- `input.txt`: Archivo de entrada con ejemplos de prueba.
- `index.js`: Lógica principal del analizador.
- `CustomgramebnfListener.js` / `CustomgramebnfVisitor.js`: Recorrido y procesamiento del árbol.
- `generated/`: Carpeta generada automáticamente por ANTLR con el Lexer y Parser.

