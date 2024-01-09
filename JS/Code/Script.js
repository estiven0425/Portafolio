// Script externo
function Resultado() { // Función sin parámetros
    return document.getElementById("Contenido").innerHTML = Variable + "<br>" + Var0 + "<br>" + VarVar + "<br>" + VarLet + "<br>" +
        VarConst0 + "<br>" + "Operador (valor operador valor) 5 * 2" + Operador + "<br>" + "Expresión (var operador var) var = var * 2" +
        Expresion + "<br>" + Declarada + "<br>" + Undefinida + "<br>" + VarConst1 + "<br>" + ConstObject + "<br>" + VarConcatenacion +
        "<br>" + "Aritmética" + Aritmetica + "<br>" + Numero0 + "<br>" + String0 + "<br>" + Boolean0 + "<br>" + Object0 + "<br>" +
        ArrayObject + "<br>" + DateObject + "<br>" + DatoDinamico + "<br>" + typeof "Cadena de texto" + "<br>" + VarCelsius + "<br>" +
        Car.type + " " + Car["Color"] + "<br>" + Metodo.Funcion() + "<br>" + String1 + "<br>" + String1.length + "<br>" + String2 +
        "<br>" + typeof String1 + "<br>" + typeof String2 + "<br>" + BackTics1 + "<br>" + Numero0 + "<br>" + Numero1 + "<br>" + Numero2 +
        "<br>" + Numero3 + "<br>" + Numero4 + "<br>" + Numero6 + "<br>" + BigInt0 + "<br>" + typeof BigInt0 + BigInt1 + "<br>" +
        NumeroMetodo0.toString() + "<br>" + NumeroMetodo0.toExponential(2) + "<br>" + NumeroMetodo0.toFixed(5) + "<br>" +
        NumeroMetodo0.toPrecision(5) + "<br>" + parseInt(NumeroMetodo1) + "<br>" + parseFloat(NumeroMetodo1) + "<br>" + Propiedad0 +
        "<br>" + Propiedad1 + "<br>" + Array0 + "<br>" + Array1 + "<br>" + ValorArray0 + "<br>" + Array2 + "<br>" + MetodoArray0 +
        "<br>" + RecorridoArray0 + "<br>" + RecorridoArray1 + "<br>" + MetodoArray1 + "<br>" + MetodoArray3 + "<br>" + MetodoArray4 +
        "<br>" + MetodoArray5 + "<br>" + MetodoArray6 + "<br>" + MetodoArray7 + "<br>" + MetodoArray8 + "<br>" + MetodoArray9 +
        "<br>" + MetodoArray10 + "<br>" + Fecha0 + "<br>" + Fecha1 + "<br>" + Fecha2 + "<br>" + Fecha3 + "<br>" + Matematica0 +
        "<br>" + Matematica1 + "<br>" + Matematica2 + "<br>" + Matematica3 + "<br>" + Matematica4 + "<br>" + Matematica5 + "<br>" +
        Boolean1 + "<br>" + Boolean2 + "<br>" + Boolean3 + "<br>" + If0 + "<br>" + FechaSwitch1 + "<br>" + Bucle0 + "<br>" +
        Bucle01 + "<br>" + Bucle2 + "<br>";
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
    console.log(Variable); // Depuración
    console.log(Array0); // Depuración
    console.log(Array0.toString()); // Depuración
}

//Const
const VarConst1 = ["Valor", "Valor", "Valor"]; // Array
VarConst1[0] = "Valor cambiado"; // Modificación de array
VarConst1.push("Valor agregado"); // Adición a array
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
let Number0, String0, Boolean0, Object0, ArrayObject, DateObject; // Declaración de variable
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
while (Numero5 != Infinity) { // Bucle mientras
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
let Propiedad0 = 5; // Asignación de valor a variable
let Propiedad1 = 5; // Asignación de valor a variable

// Matrices
const Array0 = ["Valor1", "Valor2", "Valor3"]; // Array
const Array1 = []; // Array
Array1[0] = "Valor4"; // Asignación de valor a array
Array1[1] = "Valor5"; // Asignación de valor a array
Array1[2] = "Valor6"; // Asignación de valor a array
let ValorArray0 = Array0[0]; // Asignación de valor a variable
Array0[0] = "Valor cambiado"; // Modificación de array
const Array2 = []; // Array
Array2[0] = Car; // Asignación de valor a array
Array2[1] = Celsius(55); // Asignación de valor a array
Array2[2] = Array0; // Asignación de valor a array
let MetodoArray0, MetodoArray1, MetodoArray2, MetodoArray3, MetodoArray4, MetodoArray5, MetodoArray6, MetodoArray7, MetodoArray8,
    MetodoArray9, MetodoArray10; // Declaración de variable
MetodoArray0 = Array0.length; // Asignación de valor a variable
let RecorridoArray0 = "<h3>Recorrido array</h3> <ul>" // Asignación de valor a variable
for (let ListadoArray = 0; ListadoArray < MetodoArray0; ListadoArray++) { // Bucle
    RecorridoArray0 += "<li>" + Array0[ListadoArray] + "</li>"; // Adición de valor a variable
}
RecorridoArray0 += "</ul>"; // Adición de valor a variable
let RecorridoArray1 = "<h3>Recorrido array</h3> <ul>"; // Asignación de valor a variable
Array0.forEach(RecorridoArrayFuncion0); // Recorrido de array
RecorridoArray1 += "</ul>" // Adición de valor a variable
function RecorridoArrayFuncion0(Valor, Indice, Array) { // Función con parámetros
    RecorridoArray1 += "<li>" + Valor + "</li>"; // Adición de valor a variable
}
Array0.push("Valor agregado"); // Adición a array
MetodoArray1 = Array0.at(3) // Asignación de valor a variable
MetodoArray2 = Array0.splice(2, 0, "Valor agregado"); // Modificación de array
MetodoArray3 = Array0.indexOf("Valor3") + 1; // Busqueda de array
MetodoArray4 = Array0.includes("Valor4"); // Busqueda de array
MetodoArray5 = Array0.sort(); // Ordenación de array
MetodoArray6 = Array0.map(RecorridoArrayFuncion1); // Método de array
function RecorridoArrayFuncion1(Valor, Indice, Array) { // Función con parámetros
    return Valor + " " + "MÉTODO" + " "; // Adición de valor a variable
}
const Array3 = []; // Array
Array3[0] = 1; // Asignación de valor a array
Array3[1] = 2; // Asignación de valor a array
Array3[2] = 3; // Asignación de valor a array
Array3[3] = 4; // Asignación de valor a array
Array3[4] = 5; // Asignación de valor a array
MetodoArray7 = Array3.filter(FiltroArrayFuncion); // Asignación de valor a variable
function FiltroArrayFuncion(Valor, Indice, Array) { // Función con parámetros
    return Valor > 2; // Comparación de valor
}
MetodoArray8 = Array.from("ABC"); // Asignación de valor a variable
MetodoArray9 = ""; // Asignación de valor a variable
let keyArray0 = Array0.keys(); // Asignación de valor a variable
for (let KeyArray1 of keyArray0) { // Ciclo mientras
    MetodoArray9 += KeyArray1 + "<br>"; // Adición de valor a variable
}
MetodoArray10 = Array0.with(3, "Valor width"); // Asignación de valor a variable

// Fechas
const Fecha0 = new Date(); // Asignación de valor a variable
const Fecha1 = new Date("2024-01-16"); // Asignación de valor a variable
const Fecha2 = new Date(2024, 1, 8, 10, 33, 30, 0); // Asignación de valor a variable
const Fecha3 = new Date(1 - 8 - 2024); // Asignación de valor a variable

// Matemáticas
let Matematica0, Matematica1, Matematica2, Matematica3, Matematica4, Matematica5; // Declaración de variable
Matematica0 = Math.PI; // Asignación de valor a variable
Matematica1 = Math.E; // Asignación de valor a variable
Matematica2 = Math.round(2.5); // Asignación de valor a variable
Matematica3 = Math.pow(5, 2); // Asignación de valor a variable
Matematica4 = Math.max(1, 2, 3, 4, 5); // Asignación de valor a variable
Matematica5 = Math.round(Math.random() * 101); // Asignación de valor a variable

// Booleanos
let Boolean1, Boolean2, Boolean3; // Declaración de variable
Boolean1 = Boolean(5 > 2); // Asignación de valor a variable
Boolean2 = (5 > 2); // Asignación de valor a variable
Boolean3 = new Boolean(5 > 2); // Asignación de valor a variable

// If, Else y Else If (Sí, síno)
let If0; // Declaración de variable
const FechaIf = new Date(); // Declaración de variable
if (FechaIf.getDay() == 2) { // Si
    If0 = "Hoy es miércoles."; // Asignación de valor a variable
} else if (FechaIf.getDay() == 3) { // Si
    If0 = "Hoy es jueves"; // Asignación de valor a variable
} else { // Sino
    If0 = "Ya no es miércoles ni jueves."; // Asignación de valor a variable
}

// Switch
const FechaSwitch0 = new Date(); // Declaración de variable
let FechaSwitch1; // Declaración de variable
switch (FechaSwitch0.getDay()) { // Si
    case 0: // Opción
        FechaSwitch1 = "Lunes"; // Asignación de valor a variable
        break; // Fin de validación
    case 1: // Opción
        FechaSwitch1 = "Martes"; // Asignación de valor a variable
        break; // Fin de validación
    case 2: // Opción
        FechaSwitch1 = "Miercoles"; // Asignación de valor a variable
        break; // Fin de validación
    case 3: // Opción
        FechaSwitch1 = "Jueves"; // Asignación de valor a variable
        break; // Fin de validación
    case 4: // Opción
        FechaSwitch1 = "Viernes"; // Asignación de valor a variable
        break; // Fin de validación
    case 5: // Opción conjunta
    case 6: // Opción conjunta
        FechaSwitch1 = "Fin de semana"; // Asignación de valor a variable
        break; // Fin de validación
    default: // Opción
        FechaSwitch1 = "¿Qué día es hoy?"; // Asignación de valor a variable
}

// Bucles
let Bucle0 = ""; // Declaración de variable
for (let Bucle00 = 0; Bucle00 < 10; Bucle00 ++) { // Bucle
    Bucle0 += "Vamos en la vuelta " + Bucle00 + "<br>"; // Adición de valor a variable
}
const Bucle1 = {Tipo:"Bucle", Nombre:"Bucle1", Valor:"Nulo"}; // Objeto
let Bucle01 = ""; // Declaración de variable
for (let Bucle001 in Bucle1) { // Bucle en objeto
    Bucle01 += Bucle1[Bucle001] + " "; // Adición de valor a variable
}
let Bucle2 = ""; // Declaración de variable
let Bucle02 = 0; // Declaración de variable
while(Bucle02 < 10) { // bucle mientras
    Bucle2 += "Vamos en la vuelta " + Bucle02 + "<br>"; // Adición de valor a variable
    Bucle02 ++; // Incremento de valor a variable
}
do { // Bucle mientras
    Bucle2 += "Vamos en la vuelta " + Bucle02 + "<br>"; // Adición de valor a variable
    Bucle02 ++; // Incremento de valor a variable
}
while (Bucle02 < 10); // Condición mientras