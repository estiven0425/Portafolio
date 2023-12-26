// Script externo
function ScriptExterno() { // Función sin parámetros
    document.getElementById("CambioScriptExterno").innerHTML = "JavaScript Externo"; // Selector de Id con modificador de contenido HTML
}
// Bloque de código
let Declaracion = "Declaración"; // Declaración de variables de bloque
let a, b, c; // Declaración de variable
a = 1; // Asignación de valor a variable
b = 2; // Asignación de valor a variable
c = a + b; // Asignación de valor a variable

// Variables
var VariableVar = 1; // Variable
let VariableLet = 2; // Declaración de variable
const VariableConst = 3; // Variable constante

// Operadores
var Operador = 2 * 5; // Variable

// Expresiones
var VariableExpresion = 2; // Variable
Expresion = VariableExpresion * 5; // Expresión

// Palabras clave
let VariableLet1, VariableLet2, VariableLet3; // Declaración de variable
var VariableVar1; // Variable

// Variables
VariableNoDeclarada1 = 1; // Variable no declarada
VariableNoDeclarada2 = 2; // Variable no declarada
VariableNoDeclarada3 = VariableNoDeclarada1 + VariableNoDeclarada2; // Variable no declarada
var Variable1 = 1; // Variable
var Variable2 = 3; // Variable
var Variable3 = Variable1 + Variable2; // Variable
let VariableLet4, VariableLet5, VariableLet6; // Declaración de variable
VariableLet4 = 1; // Variable declarada
VariableLet5 = 2; // Variable declarada
VariableLet6 = VariableLet4 + VariableLet5; // Variable declarada
const VariableConst1 = 1; // Variable constante
const VariableConst2 = 2; // Variable constante
const VariableConst3 = VariableConst1 + VariableConst2; // Variable constante
let VariableMixta = VariableVar + VariableLet + VariableConst; //Variable mixta
let VariableDeclarada; // Declaración de variable
VariableDeclarada = "Variable declarada"; //Asignación de valor a variable
let VariableUndefinida; //Variable undefinida

// Let
{ //Bloque
    let VariableDeBloque = 1; // Declaración de variable en bloque
}
let VariableDeBloque = 1; // Declaración de variable

//Const
const VariableConstReasignada = 1; // Variable constante
VariableConstReasignada = 2; // Variable constante reasignada (Se ignora)
const VariableConstModificada = [1, 2, 3]; // Array constante
VariableConstModificada[1] = "Valor cambiado"; // Modificación de array constante
VariableConstModificada.push("Valor agregado"); // Adición a array constante
const ConstArray = {Nombre:"ArrayConstante", Tipo:"Array constante"}; //Array constante