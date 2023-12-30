// Script externo
function Resultado() { // Función sin parámetros
    return document.getElementById("Contenido").innerHTML = Variable + "<br>" + Var0 + "<br>" + VarVar + "<br>" + VarLet + "<br>" + 
    VarConst0 + "<br>" + "Operador (valor operador valor) 5 * 2" + Operador + "<br>" + "Expresión (var operador var) var = var * 2" + 
    Expresion + "<br>" + Declarada + "<br>" + Undefinida + "<br>" + VarConst1 + "<br>" + ConstObject + "<br>" + VarConcatenacion + 
    "<br>" + "Aritmética" + Aritmetica + "<br>" + Numero0 + "<br>" + String0 + "<br>" + Boolean0 + "<br>" + Object0 + "<br>" + 
    ArrayObject + "<br>" + DateObject + "<br>" + DatoDinamico + "<br>" + typeof "Cadena de texto" + "<br>" + VarCelsius + "<br>" + 
    Car.type + " " + Car["Color"] + "<br>" + Metodo.Funcion() + "<br>" + String1 + "<br>" + String1.length + "<br>" + String2 + 
    "<br>" + typeof String1 + "<br>" + typeof String2 + "<br>" + BackTics1 + "<br>" + Numero0 + "<br>" + Numero1 + "<br>" + Numero2 + 
    "<br>" + Numero3 + "<br>" + Numero4 + "<br>" + Numero6 + "<br>" + BigInt0 + "<br>" + typeof BigInt0 + BigInt1 + "<br>" + NumeroMetodo0.toString()
     + "<br>" + NumeroMetodo0.toExponential(2) + "<br>" + NumeroMetodo0.toFixed(5) + "<br>" + NumeroMetodo0.toPrecision(5) + "<br>" + 
     parseInt(NumeroMetodo1) + "<br>" + parseFloat(NumeroMetodo1) + "<br>" + Propiedad0 + "<br>" + Propiedad1;
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
const ConstObject = { Nombre: "ArrayConstante", Tipo: "Objeto" }; // Asignación de valor a variable

// Concatenación
let Concatenacion = "Variable"; // Declaración de variable
VarConcatenacion = Concatenacion + " " + "Concatenada"; // Asignación de valor

// Aritmética
let Aritmetica0, Aritmetica1; //Declaración de variables
Aritmetica0 = 5; //Asignación de valor a variable
Aritmetica1 = 2; //Asignación de valor a variable
Aritmetica = Aritmetica0 * Aritmetica1; //Asignación de valor a variable

// Tipos de datos
let Number, String0, Boolean, Object, ArrayObject, DateObject; // Declaración de variable
Number0 = 1; // Asignación de valor a variable
String0 = "String"; // Asignación de valor a variable
Boolean0 = true; // Asignación de valor a variable
Object0 = { Propiedad: "Valor" }; // Objeto
ArrayObject = ["Atributo", "Atributo"]; // Array
DateObject = new Date("2023-12-28"); // Dato
let DatoDinamico; // Declaración de variable
DatoDinamico = 5; // Asignación de valor a variable
DatoDinamico = "Dato dinámico"; // Asignación de valor a variable

// Funciones
function Funcion(p1, p2) { // Función con parámetros
    return p1 * p2; // Respuesta
}
let VarFuncion = Funcion(5, 2); // Asignación de valor a variable
function Celsius(farenheit) { // Función con parámetros
    return (5 / 9) * (farenheit - 32); //Respuesta
}
let VarCelsius = Celsius(77); // Asignación de valor a variable

// Objetos
let Car = { type: "Fiat", Model: "500", Color: "White" }; // Objeto
const Metodo = {
    Tipo: "Método", Funcionalidad: "Programar objetos", Funcion: function () { // Objeto con método
        return "Este es un " + this.Tipo + " " + "que sirve para " + this.Funcionalidad; // Respuesta
    }
}

// Eventos
function Evento() { // Función sin parámetros
    return document.getElementById("Evento").style.backgroundColor = "#afafaf"; // Respuesta
}

// String
let String1 = "Cadena de \"String\" texto"; // Asignación de valor a varible
let String2 = new String("Nuevo objeto"); // Nuevo objeto

// Back-Tics
let BackTics0 = `Bac-Tics`; // Asignación de valor a variable
let BackTics1 = `Esta es una ${BackTics0} de texto`; // Asignación de valor a variable

// Números
let Numero0 = 5; // Asignación de valor a variable
let Numero1 = 5.2; // Asignación de valor a variable
let Numero2 = 5e2; // Asignación de valor a variable
let Numero3 = 0.5 + 0.2; // Asignación de valor a variable
let Numero4 = 5 * "Número"; // Asignación de valor a variable
let Numero5 = 5; // Asignación de valor a variable
let Numero6 = " "; // Asignación de valor a avariable
while (Numero5 != Infinity) { //Mientras
    Numero5 = Numero5 * Numero5; // Asignación de valor a variable
    Numero6 = Numero6 + Numero5; // Asignación de valor a variable
}

// BigInt
let BigInt0 = 55555555555555555555n; // Asignación de valor a variable
let BigInt1 = BigInt(55555555555555555555); // Asignación de valor a variable

// Max y min number
// let MaxNumber = Number.MAX_SAFE_INTEGER; // Declaración de variables
// let MinNumber = Number.MIN_SAFE_INTEGER; // Declaración de variables

// Is integer
// Number.isInteger(12); // cambio de valor

// Métodos de números
let NumeroMetodo0 = 5; // Asignación de valor a variable
let NumeroMetodo1 = "55 22" // Asignación de valor a variable

// Propiedades
let Propiedad0 = 5;
let Propiedad1 = 5;