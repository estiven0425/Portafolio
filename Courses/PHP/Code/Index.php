<?php // Inicio PHP
echo phpversion(); // Imprimir versión de PHP
echo ("\n\n"); // Imprimir salto de línea

// Variables
$Variable0 = 1; // Declaración de variable
$Variable1 = "Valor"; // Declaración de variable
$Variable2 = 1.1; // Declaración de variable
$Variable3 = true; // Declaración de variable
$Variable4 = ["Valor0", "Valor1", "Valor2"]; // Declaración de array
$Variable5 = (NULL); // Declaración de variable
$Variable6 = $Variable7 = $Variable8 = "Valor múltiple"; // Asignación múltple de valor

// Tipos de variables
var_dump($Variable0, $Variable1, $Variable2, $Variable3, $Variable4, $Variable5); // Tipo de dato

echo ("\n"); // Imprimir salto de línea

// Variables globales
echo ($GLOBALS["Variable1"]); // Imprimir índice de variables globales

// Variables estáticas
static $Estatica = "Valor estático"; // Variable estática

// Impresiones en pantalla
echo ("\n"); // Imprimir salto de línea
echo $Variable6; // Imprimir
echo "\nEste es un salto de línea\n"; // Imprimir
echo ($Variable7); // Imprimir

print("\n\n"); // Imprimir salto de línea
print $Variable6; // Imprimir
print "\nEste es un salto de línea\n"; // Imprimir
print($Variable7); // Imprimir

echo ("\n\n"); // Imprimir salto de línea

// String
$Declarada0 = "Valor"; // Declaración de variable
$Declarada1 = 'Valor'; // Declaración de variable
$ComillaDoble = "La variable7 tiene como valor: $Variable7"; // Declaración de variable
$ComillaSimple = 'La variable7 tiene como valor: $Variable7'; // Declaración de variable

echo $Declarada0; // Imprimir
echo ("\n"); // Imprimir salto de línea
echo $Declarada1; // Imprimir
echo ("\n"); // Imprimir salto de línea
echo strlen($ComillaDoble); // Imprimir longitud de cadena
echo ("\n"); // Imprimir salto de línea
echo str_word_count($ComillaDoble); // Imprimir recuento de palabras
echo ("\n"); // Imprimir salto de línea
echo strpos($ComillaDoble, "valor"); // Imprimir busqueda de palabras
echo ("\n"); // Imprimir salto de línea
echo strtoupper($ComillaDoble); // Imprimir en mayúscula la cadena
echo ("\n"); // Imprimir salto de línea
echo strtolower($ComillaDoble); // Imprimir en minúscula la cadena
echo ("\n"); // Imprimir salto de línea
echo str_replace("valor", "contenido", $ComillaDoble); // Imprimir cambiando palabras de la cadena
echo ("\n"); // Imprimir salto de línea
echo strrev($ComillaSimple); // Imprimir cadena al reves
echo ("\n"); // Imprimir salto de línea
echo trim($ComillaDoble); // Imprimir cadena sin espacios iniciales o finales
echo ("\n"); // Imprimir salto de línea

$ComillaDoble = explode(" ", $ComillaDoble); // Iterar cadena

print_r($ComillaDoble); // Imprimir array

echo ("\n"); // Imprimir salto de línea
echo "El texto concatena con" . " " . $ComillaSimple; // Imprimir cadenas concatenadas
echo ("\n"); // Imprimir salto de línea
echo "El texto concatena con $ComillaSimple"; // Imprimir cadena
echo ("\n"); // Imprimir salto de línea
echo substr($ComillaSimple, 3, 8); // Imprimir cadena recortada
echo ("\n"); // Imprimir salto de línea
echo substr($ComillaSimple, 13); // Imprimir cadena recortada sin final
echo ("\n"); // Imprimir salto de línea
echo substr($ComillaSimple, -5); // Imprimir cadena recortada desde el final
echo ("\n"); // Imprimir salto de línea
echo "El texto concatena con \$ComillaSimple"; // Imprimir cadena
echo ("\n"); // Imprimir salto de línea

// Number
$Numero = 1; // Declaración de variable
$Flotante = 1.1; // Declaración de variable
$Texto = "1"; // Declaración de variable
$EnteroMaximo = PHP_INT_MAX; // Declaración de valor entero máximo
$EnteroMinimo = PHP_INT_MIN; // Declaración de valor entero mínimo
$FlotanteMaximo = PHP_FLOAT_MAX; // Declaración de valor foltante máximo
$FlotanteMinimo = PHP_FLOAT_MIN; // Declaración de valor flotante mínimo
$TextoANumero = intval($Texto); // Convertir a int

var_dump($Numero, $Flotante, $Texto); // Tipo de dato

echo "Valor máximo: $EnteroMaximo - valor mínimo: $EnteroMinimo"; // Imprimir
echo ("\n"); // Imprimir salto de línea
echo "Valor máximo: $FlotanteMaximo - valor mínimo: $FlotanteMinimo"; // Imprimir
echo ("\n"); // Imprimir salto de línea

var_dump($TextoANumero); // Tipo de dato

echo ("\n"); // Imprimir salto de línea

// Conversión
$Variable9 = 1; // Declaración de variable
$ConversionATexto = (string) $Variable9; // Conversión de string
$Variable10 = "1"; // Declaración de variable
$ConversionAEntero = (int) $Variable10; // Conversión de int
$ConversionAFlotante = (float) $Variable10; // Conversión de float
$ConversionABoleano = (bool) $Variable10; // Conversión de booleano
$ConversionAArray = (array) $Variable10; // Conversión de array
$ConvercionAObjeto0 = (object) $Variable10; // Conversión de objeto
$ArrayIndexado0 = ["Valor0", "Valor1", "Valor2"]; // Declaración de array indexado
$ArrayAsociativo0 = ["Atributo0" => "Valor0", "Atributo1" => "Valor1", "Atributo2" => "Valor2"]; // Declaración de array asociativo
$ConversionAObjeto1 = (object) $ArrayIndexado0; // Conversión de objeto
$ConversionAObjeto2 = (object) $ArrayAsociativo0; // Conversión de objeto

var_dump($ConversionATexto); // Tipo de dato
var_dump($ConversionAEntero); // Tipo de dato
var_dump($ConversionAFlotante); // Tipo de dato
var_dump($ConversionABoleano); // Tipo de dato
var_dump($ConversionAArray); // Tipo de dato
var_dump($ConvercionAObjeto0); // Tipo de dato
var_dump($ConversionAObjeto1); // Tipo de dato
var_dump($ConversionAObjeto2); // Tipo de dato

// Matemáticas
echo pi(); // Imprimir PI
echo ("\n"); // Imprimir salto de línea
echo max(0, 150, 30, 20, -8, -200); // Imprimir valor máximo
echo ("\n"); // Imprimir salto de línea
echo min(0, 150, 30, 20, -8, -200); // Imprimir valor minímo
echo ("\n"); // Imprimir salto de línea
echo abs(-6.15); // Imprimir valor absoluto
echo ("\n"); // Imprimir salto de línea
echo sqrt(6); // Imprimir valor raíz cuadrada
echo ("\n"); // Imprimir salto de línea
echo round(6.15); // Imprimir valor redondeado
echo ("\n"); // Imprimir salto de línea
echo rand(); // Imprimir valor aleatorio
echo ("\n"); // Imprimir salto de línea
echo rand(0, 10); // Imprimir valor aleatorio
echo ("\n"); // Imprimir salto de línea

// Constantes
define("Constante0", "Variable constante"); // Declaración de variable constante
define("ArrayConstante0", ["Valor0", "Valor1", "Valor2"]); // Declaración de array constante

const Constante1 = "Variable constante"; // Declaración de variable constante

echo Constante0; // Imprimir constante
echo ("\n"); // Imprimir salto de línea
echo Constante1; // Imprimir constante
echo ("\n"); // Imprimir salto de línea

var_dump(ArrayConstante0); // Tipo de dato

// Condicionales
if (1 > 2) { // Si
    echo "1 es mayor que 2\n"; // Imprimir
} else { // Si no
    echo "2 es mayor que 1\n"; // Imprimir
}
if (1 > 2 && 1 > 3) { // Si múltiple condición
    echo "1 es mayor que 2 y 3\n"; // Imprimir
} else { // Si no
    echo "2 y 3 son mayor que 1\n"; // Imprimir
}
if (1 > 2) { // Si
    echo "1 es mayor que 2\n"; // Imprimir
} elseif (1 < 2) { // Si si
    echo "1 es menor que 2\n"; // Imrpimir
} else { // Si no
    echo "No se puede comparar\n"; // Imprimir
}
if (1 == 1) echo "Los valores coinciden\n"; // Si abreviado

echo 1 > 2 ? "Es mayor\n" : "Es menor\n"; // Si no abreviado

if (1 == 1) { // Si
    echo "Son iguales aunque "; // Imprimir
    if (1 > 2) { // Si anidado
        echo "supera a 2 \n"; // Imprimir
    } else { // Si no anidado
        echo "no supera a 2 \n"; // Imprimir
    }
} else { // Si no
    echo "No son iguales"; // Imprimir
}

$Variable11 = "Carro"; // Declaración de variable

// Switch
switch ($Variable11) { // Si
    case "Carro": // Opción
        echo "Es un carro\n"; // Imprimir

        break; // Romper
    case "Moto": // Opción
        echo "Es una moto\n"; // Imprimir

        break; // Romper
    case "Avión": // Opción
        echo "Es un avión\n"; // Imprimir

        break; // Romper
    default: // Opción por defecto
        echo "Desconocido\n"; // Imprimir
}
switch ($Variable11) { // Si
    case "Carro": // Opción conjunta
    case "Moto": // Opción conjunta
        echo "Es un vehículo terrestre\n"; // Imprimir

        break; // Romper
    case "Avión": // Opción
        echo "Es un avión\n"; // Imprimir

        break; // Romper
    default: // Opción por defecto
        echo "Desconocido\n"; // Imprimir
}

// Bucles
$Variable12 = 1; // Declaración de variable

while ($Variable12 <= 10) { // Bucle mientras

    echo "El valor del bucle es: $Variable12 \n"; // Imprimir

    if ($Variable12 == 5) break; // Romper

    $Variable12++; // Aumentar valor
}

$Variable13 = 1; // Declaración de variable

while ($Variable13 < 10) { // Bucle mientras
    $Variable13++; // Aumentar valor

    if ($Variable13 == 5) continue; // Omitir

    echo "El valor del bucle es: $Variable13 omitiendo 5 \n"; // imprimir
}

$Variable14 = 1; // Declaración de variable

while ($Variable14 <= 5) : // Bucle mientras alternativo
    echo "El valor del bucle es: $Variable14 \n"; // Imprimir

    $Variable14++; // Aumentar valor
endwhile; // Fin bucle mientras

$Variable15 = 1; // Declaración de variable

do { // Bucle
    echo "El valor de la variable es: $Variable15 \n"; // Imprimir

    $Variable15++; // Aumentar valor
} while ($Variable15 <= 5); // Mientras

$Variable16 = 1; // Declaración de variable

do { // Bucle
    echo "El valor de esta variable es: $Variable16 \n"; // Imprimir

    if ($Variable16 == 3) break; // Romper

    $Variable16++; // Aumentar valor
} while ($Variable16 <= 5); // Mientras

$Variable17 = 1; // Declaración de variable

do { // Bucle
    $Variable17++; // Aumentar valor

    if ($Variable17 == 3) continue; // Omitir

    echo "El valor de la variable es: $Variable17 omitiendo 3 \n"; // Imprimir

} while ($Variable17 <= 5); // Mientras

for ($Variable18 = 1; $Variable18 <= 10; $Variable18++) { // Bucle for
    echo "El valor de la variable es: $Variable18 usando for \n"; // Imprimir
}

for ($Variable19 = 1; $Variable19 <= 10; $Variable19++) { // Bucle for
    if ($Variable19 > 5) break; // Romper

    echo "El valor de la variable es rompido en: $Variable19 \n"; // Imprimir
}

for ($Variable20 = 1; $Variable20 <= 10; $Variable20++) { // Bucle for
    if ($Variable20 == 5) continue; // Omitir

    echo "El valor de la variable es: $Variable20 omitiendo 5 \n"; // Imprimir
}

$Variable21 = ["Valor0", "Valor1", "Valor2"]; // Declaración de array

foreach ($Variable21 as $Variable22) { // Bucle en array
    echo "$Variable22 \n"; // Imprimir
}

$Variable23 = ["Atributo0" => "Valor0", "Atribut01" => "Valor1", "Atributo2" => "Valor2"]; // Declaración de array asociativo

foreach ($Variable23 as $Variable24 => $Variable25) { // Bucle en array asociativo
    echo "$Variable24: $Variable25 \n"; // Imprimir
}
foreach ($Variable21 as $Variable26) { // Bucle en array
    if ($Variable26 == "Valor2") $Variable26 = "Valor cambiado"; // Si

    echo "$Variable26 \n"; // Imprimir
}

var_dump($Variable21); // Tipo de dato

foreach ($Variable21 as &$Variable27) { // Bucle en array modificable
    if ($Variable27 == "Valor2") $Variable27 = "Valor cambiado"; // Si

    echo "$Variable27 \n"; // Imprimir
}

var_dump($Variable21); // Tipo de dato

foreach ($Variable21 as $Variable28) : // Bucle en array alternativo
    echo "$Variable28 \n"; // Imprimir
endforeach; // Fin bucle en array

// Funciones
function Funcion()
{ // Función sin parámetros
    echo ("Función"); // Imprimir
}
Funcion(); // Llamada a función

echo ("\n"); // Imprimir salto de línea

function FuncionParametro($Valor)
{ // Función con parámetros
    echo ("El valor pasado es: $Valor"); // Imprimir
}

FuncionParametro(12); // Llamada de función con parámetros

echo ("\n"); // Imprimir salto de línea

function FuncionParametroPredefinido($Valor, $Potencia = 2)
{ // Función con parámetros predefinidos
    $Resultado = $Valor ** $Potencia; // Declaración de variable

    echo "$Valor a la $Potencia potencia es: $Resultado"; // Imprimir
}

FuncionParametroPredefinido(5); // Llamada de función con parámetros

echo ("\n"); // Imprimir salto de línea

FuncionParametroPredefinido(5, 5); // Llamada de función con parámetros

echo ("\n"); // Imprimir salto de línea

function FuncionReturn($a, $b)
{ // Función con parámetros
    $c = $a + $b; // Declaración de variable

    return $c; // Respuesta
}

echo ('El resultado de 1050 + 5010 es: ' . FuncionReturn(1050, 5010) . "\n"); // Imprimir

$Variable29 = 2; // Declaración de variable

echo "El valor de la variable es: $Variable29 \n"; // Imprimir

function FuncionModificable(&$VariableModificable)
{ // Función con parámetros modificables
    $VariableModificable = 5; // Declaración de variable
}

FuncionModificable($Variable29); // Llamada de función con parámetros

echo "El nuevo valor de la variable es: $Variable29 \n"; // Imprimir

function FuncionParametroIndefinido(...$x)
{ // Función con parámetros indefinidos
    $a = 0; // Declaración de variable
    $b = count($x); // Conteo de array

    for ($c = 0; $c < $b; $c++) { // Bucle
        $a += $x[$c]; // Adición de valor
    }

    return $a; // Respuesta
}

$FuncionParametroIndefinido = FuncionParametroIndefinido(1, 2, 3, 4, 5, 6, 7, 8, 9); // Declaración de función con parámetros

echo ($FuncionParametroIndefinido . "\n"); // Imprimir

function FuncionParametroIndefindoIterado(...$x)
{ // Función con parámetros indefinidos
    $y = (array)$x; // Converción de array

    foreach ($y as $z) { // Bucle en array
        echo (""); // Imprimir
    }

    return $y; // Respuesta
}

$FuncionParametroIndefindoIterado = FuncionParametroIndefindoIterado(1, 2, 3, 4, 5, 6, 7, 8, 9); // Llamada de función con parámetros

print_r($FuncionParametroIndefindoIterado); // Imprimir array

// Array
$Array0 = array("Valor0", "Valor1", "Valor2"); // Declaración de array
$Array1 = array("Valor", 0, ["Valor", 0], Funcion()); // Declaración de array

echo ("\n"); // Imprimir salto de línea
echo count($Array0); // Imprimir conteo de array
echo ("\n"); // Imprimir salto de línea

$ArrayIndexado1 = ["Valor0", "Valor1", "Valor2"]; // Declaración de array indexado

var_dump($ArrayIndexado1); // Tipo de dato

echo $ArrayIndexado1[0]; // Imprimir índice de array
echo ("\n"); // Imprimir salto de línea

$ArrayIndexado1[0] = "Valor cambiado"; // Modificación de array

echo $ArrayIndexado1[0]; // Imprimir índice de array
echo ("\n"); // Imprimir salto de línea

foreach ($ArrayIndexado1 as $IndiceArrayIndexado1) { // Bucle en array
    echo "$IndiceArrayIndexado1 \n"; // imprimir
}

array_push($ArrayIndexado1, "Valor agregado"); // Agregar valor a array

print_r($ArrayIndexado1); // Imprimir array

$ArrayAsociativo1 = ["Atributo0" => "Valor0", "Atributo1" => "Valor1", "Atributo2" => "Valor2"]; // Declaración de array asociativo

print_r($ArrayAsociativo1); // Imprimir array

echo ($ArrayAsociativo1["Atributo0"]); // Imprimir índice de array
echo ("\n"); // Imprimir salto de línea

$ArrayAsociativo1["Atributo0"] = "Valor cambiado"; // Modificación de array

print_r($ArrayAsociativo1); // Imprimir array

foreach ($ArrayAsociativo1 as $Atributo => $Valor) { // >Bucle en array asociativo
    echo "$Atributo: $Valor \n"; // Imprimir
}

$ArrayVacio = []; // Declaración de array vacío

print_r($ArrayVacio); // Imprimir array

$ArrayVacio = ["Valor agregado"]; // Agregar valor a array

print_r($ArrayVacio); // Imprimir array

$ArrayVacio["Valor asociativo agregado"] = "Valor agregado"; // Agregar valor a array asociativo

print_r($ArrayVacio); // Imprimir array

array_push($ArrayVacio, "Valor agregado", "Valor agregado"); // Agregar valor a array

print_r($ArrayVacio); // Imprimir array

$ArrayVacio += ["Atributo0 agregado" => "Valor0 agregado", "Atributo1 agregado" => "Valor1 agregado"]; // Agregar valor a array

print_r($ArrayVacio); // Imprimir array

$Array2 = array("Valor0", "Valor1", "Valor2", "Valor3", "Valor4", "Valor5"); // Declaración de array

print_r($Array2); // Imprimir array

array_splice($Array2, 3, 5); // Eliminar valor a array

print_r($Array2); // Imprimir array

unset($Array2[1]); // Eliminar valor de array

print_r($Array2); // Imprimir array

unset($ArrayVacio["Valor asociativo agregado"]); // Eliminar valor asociativo de array

print_r($ArrayVacio); // Imprimir array

$ArrayLleno = array_diff($ArrayVacio, ["Valor0 agregado"]); // Duplicar array eliminando valores

print_r($ArrayLleno); // Imprimir array

array_pop($ArrayLleno); // Eliminar último valor de array

print_r($ArrayLleno); // Imprimir array

array_shift($Array2); // Eliminar primer valor de array

print_r($Array2); // Imprimir array

$Array3 = array( // Array multidimensional
    array("Volvo", "Fabricante", "Carro"),
    array("BMW", "Fabricante", "Carro"),
    array("Saab", "Fabricante", "Carro"),
    array("Land Rover", "Fabricante", "Carro")
);

echo ($Array3[0][0] . "\nRol: " . $Array3[0][1] . "\nProducto: " . $Array3[0][2] . "\n\n");
echo ($Array3[1][0] . "\nRol: " . $Array3[1][1] . "\nProducto: " . $Array3[1][2] . "\n\n");
echo ($Array3[2][0] . "\nRol: " . $Array3[2][1] . "\nProducto: " . $Array3[2][2] . "\n\n");
echo ($Array3[3][0] . "\nRol: " . $Array3[3][1] . "\nProducto: " . $Array3[3][2] . "\n\n");

print_r($Array3); // Imprimir array

// Superglobales

$VariableGlobal = "Variable global"; // Declaración de variable

function FuncionGlobals() // Función sin parámetros
{
    echo ($GLOBALS['VariableGlobal']); // Imprimir variable global
}

FuncionGlobals(); // Llamada de función

echo ("\n"); // Imprimir salto de línea

function FuncionGlobal() // Función sin parámetros
{
    global $VariableGlobal; // Variable global
    echo ($VariableGlobal); // Imprimir
}

FuncionGlobal(); // Llamada de función

echo ("\n"); // Imprimir salto de línea

// Espresiones regulares
$Expresion = 'Expresión regular'; // Declaración de variable
$ExpresionRegular = '/e/i'; // Expresión regular

echo preg_match($ExpresionRegular, $Expresion); // Imprimir cincidencia
echo ("\n"); // Imprimir salto de línea
echo preg_match_all($ExpresionRegular, $Expresion); // Imprimir cantidad de coincidencias
echo ("\n"); // Imprimir salto de línea
echo preg_replace($ExpresionRegular, "X", $Expresion); // Imprimir coincidencias reemplazadas
echo ("\n"); // Imprimir salto de línea

// Fecha y hora de PHP
date_default_timezone_set('America/Bogota'); // Establecer zona horaria
echo ( date_default_timezone_get()); // Imprimir zona horaria
echo ("\n"); // Imprimir salto de línea
echo (date('l d/m/y')); // Imprimir fecha
echo ("\n"); // Imprimir salto de línea
echo ('Son las ' . date('h:i a ') . 'del ' . date('l d ') . 'de ' . date('M ') . 'del ' . date('Y')); // Imprimir fecha y hora
echo ("\n"); // Imprimir salto de línea

// Include
