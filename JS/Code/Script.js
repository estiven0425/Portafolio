// Script externo
function Resultado() { // Función sin parámetros
    console.log();
    console.log(Variable);
    console.log(Var0);
    console.log(VarVar);
    console.log(VarLet);
    console.log(VarConst0);
    console.log("Operador (valor operador valor) 5 * 2", Operador);
    console.log("Expresión (var operador var) var = var * 2", Expresion);
    console.log(NoDeclarada);
    console.log(Declarada);
    console.log(Undefinida);
    console.log(VarConst1);
    console.log(ConstObject);
    console.log(VarConcatenacion);
    console.log("Aritmética", Aritmetica);
    console.log(Number);
    console.log(String);
    console.log(Boolean);
    console.log(Object);
    console.log(ArrayObject);
    console.log(DateObject);
    console.log(DatoDinamico);
    console.log(typeof "Cadena de texto");
    console.log(VarCelsius);
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
}
// Bloque de código
let Variable = "Cadena de texto"; // Declaración de variables de bloque
let Var0; // Declaración de variable
Var0 = "Variable"; // Asignación de valor a variable

// Variables
var VarVar = "Variable var"; // Variable
let VarLet = "Variable let"; // Declaración de variable
const VarConst0 = "Variable const"; // Variable constante

// Operadores
var Operador = 5 * 2; // Variable

// Expresiones
var Expresion = 5; // Variable
Expresion = Expresion * 2; // Expresión

// Palabras clave
let Var1, Var2, Var3; // Declaración de variable

// Variables
NoDeclarada = "Variable no declarada"; // Variable no declarada
let Declarada = "Variable declarada"; // Declaración de variable
let Undefinida; //Variable undefinida

// Let
function Bloque() { //Bloque
    let Variable = "Variable de bloque"; // Declaración de variable en bloque
    console.log(Variable);
}

//Const
const VarConst1 = ["Valor", "Valor", "Valor"]; // Array constante
VarConst1[0] = "Valor cambiado"; // Modificación de array constante
VarConst1.push("Valor agregado"); // Adición a array constante
const ConstObject = { Nombre: "ArrayConstante", Tipo: "Array" }; // Asignación de valor a variable

// Concatenación
let Concatenacion = "Variable"; // Declaración de variable
VarConcatenacion = Concatenacion + " " + "Concatenada"; // Asignación de valor

// Aritmética
let Aritmetica0, Aritmetica1; //Declaración de variables
Aritmetica0 = 5; //Asignación de valor a variable
Aritmetica1 = 2; //Asignación de valor a variable
Aritmetica = Aritmetica0 * Aritmetica1; //Asignación de valor a variable

// Tipos de datos
let Number, String, Boolean, Object, ArrayObject, DateObject; // Declaración de variable
Number = 1; // Asignación de valor a variable
String = "String"; // Asignación de valor a variable
Boolean = true; // Asignación de valor a variable
Object = { Propiedad:"Valor", Propiedad:"Valor" }; // Asignación de valor a variable
ArrayObject = ["Atributo", "Atributo"]; // Asignación de valor a variable
DateObject = new Date("2023-12-28"); // Asignación de valor a variable
let DatoDinamico; // Declaración de variable
DatoDinamico = 5; // Asignación de valor a variable
DatoDinamico = "Dato dinámico"; // Asignación de valor a variable

// Funciones
function Funcion(p1, p2) { // Función con parámetros
    return p1 * p2; // Respuesta
}
let VarFuncion = Funcion(5, 2); // Asignación de valor a variable
function Celsius(farenheit) { // Función con parámetros
    return (5/9) * (farenheit - 32); //Respuesta
}
let VarCelsius = Celsius(77); // Asignación de valor a variable