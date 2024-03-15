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
$Variable6 = $Variable60 = $Variable61 = "Valor múltiple"; // Asignación múltple de valor

// Tipos de variables
var_dump($Variable0, $Variable1, $Variable2, $Variable3, $Variable4, $Variable5); // Tipo de dato
echo ("\n"); // Imprimir salto de línea

// Variables globales
echo ($GLOBALS["Variable1"]); // Imprimir índice de variables globales

// Variables estáticas
static $VariableEstatica = "Valor estático"; // Variable estática

// Impresiones en pantalla
echo ("\n"); // Imprimir salto de línea
echo $Variable6; // Imprimir
echo "\nEste es un salto de línea\n"; // Imprimir
echo ($Variable60); // Imprimir

print("\n\n"); // Imprimir salto de línea
print $Variable6; // Imprimir
print "\nEste es un salto de línea\n"; // Imprimir
print($Variable60); // Imprimir

echo ("\n\n"); // Imprimir salto de línea

// String
$Variable7 = "Valor"; // Declaración d variable
$Variable70 = 'Valor'; // Declaración d variable
$Variable71 = "La variable7 tiene como valor: $Variable7"; // Declaración de variable
$Variable72 = 'La variable7 tiene como valor: $Variable7'; // Declaración de variable

echo $Variable71; // Imprimir
echo ("\n"); // Imprimir salto de línea
echo $Variable72; // Imprimir
echo ("\n"); // Imprimir salto de línea
echo strlen($Variable71); // Imprimir longitud de cadena
echo ("\n"); // Imprimir salto de línea
echo str_word_count($Variable71); // Imprimir recuento de palabras
echo ("\n"); // Imprimir salto de línea
echo strpos($Variable71, "valor"); // Imprimir busqueda de palabras
echo ("\n"); // Imprimir salto de línea
echo strtoupper($Variable71); // Imprimir en mayúscula la cadena
echo ("\n"); // Imprimir salto de línea
echo strtolower($Variable71); // Imprimir en minúscula la cadena
echo ("\n"); // Imprimir salto de línea
echo str_replace("valor", "contenido", $Variable71); // Imprimir cambiando palabras de la cadena
echo ("\n"); // Imprimir salto de línea
echo strrev($Variable71); // Imprimir cadena al reves
echo ("\n"); // Imprimir salto de línea
echo trim($Variable71); // Imprimir cadena sin espacios iniciales o finales
echo ("\n"); // Imprimir salto de línea
$Variable710 = explode(" ", $Variable71); // Iterar cadena
print_r($Variable710); // Imprimir array
echo ("\n"); // Imprimir salto de línea
echo "El texto concatena con" . " " . $Variable71; // Imprimir cadenas concatenadas
echo ("\n"); // Imprimir salto de línea
echo "El texto concatena con $Variable71"; // Imprimir cadena
echo ("\n"); // Imprimir salto de línea
echo substr($Variable71, 3, 8); // Imprimir cadena recortada
echo ("\n"); // Imprimir salto de línea
echo substr($Variable71, 13); // Imprimir cadena recortada sin final
echo ("\n"); // Imprimir salto de línea
echo substr($Variable71, -5); // Imprimir cadena recortada desde el final
echo ("\n"); // Imprimir salto de línea
echo "El texto concatena con \$Variable71"; // Imprimir cadena
echo ("\n"); // Imprimir salto de línea

// Number
$Variable8 = 1; // Declaración de variable
$Variable80 = 1.1; // Declaración de variable
$Variable81 = "1"; // Declaración de variable
$Variable82 = PHP_INT_MAX; // Declaración de valor entero máximo
$Variable820 = PHP_INT_MIN; // Declaración de valor entero mínimo
$Variable83 = PHP_FLOAT_MAX; // Declaración de valor foltante máximo
$Variable830 = PHP_FLOAT_MIN; // Declaración de valor flotante mínimo
$Variable810 = intval($Variable81); // Convertir a int

var_dump($Variable8, $Variable80, $Variable81); // Tipo de dato

echo "Valor máximo: $Variable82 - valor mínimo: $Variable820"; // Imprimir
echo ("\n"); // Imprimir salto de línea
echo "Valor máximo: $Variable83 - valor mínimo: $Variable830"; // Imprimir
echo ("\n"); // Imprimir salto de línea

var_dump($Variable810); // Tipo de dato
echo ("\n"); // Imprimir salto de línea

// Conversión
$Variable9 = 1; // Declaración de variable
$Variable90 = (string) $Variable9; // Conversión de string
$Variable91 = "1"; // Declaración de variable
$Variable910 = (int) $Variable91; // Conversión de int
$Variable92 = (float) $Variable91; // Conversión de float
$Variable93 = (bool) $Variable91; // Conversión de booleano
$Variable94 = (array) $Variable91; // Conversión de array
$Variable95 = (object) $Variable91; // Conversión de objeto
$Variable96 = ["Valor0", "Valor1", "Valor2"]; // Declaración de array indexado
$Variable960 = ["Atributo0" => "Valor0", "Atributo1" => "Valor1", "Atribut2" => "Valor2"]; // Declaración de array asociativo
$Variable961 = (object) $Variable96; // Conversión de objeto
$Variable962 = (object) $Variable960; // Conversión de objeto

var_dump($Variable90); // Tipo de dato
var_dump($Variable910); // Tipo de dato
var_dump($Variable92); // Tipo de dato
var_dump($Variable93); // Tipo de dato
var_dump($Variable94); // Tipo de dato
var_dump($Variable95); // Tipo de dato
var_dump($Variable961); // Tipo de dato
var_dump($Variable962); // Tipo de dato

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
echo rand(); // Imprimir valor redondeado
echo ("\n"); // Imprimir salto de línea
echo rand(0, 10); // Imprimir valor redondeado
echo ("\n"); // Imprimir salto de línea

// Constantes
define("Constante", "Variable constante"); // Declaración de variable constante
define("ArrayConstante", ["Valor0", "Valor1", "Valor2"]); // Declaración de array constante

const Constante1 = "Variable constante"; // Declaración de variable constante

echo Constante; // Imprimir constante
echo ("\n"); // Imprimir salto de línea
echo Constante1; // Imprimir constante
echo ("\n"); // Imprimir salto de línea

var_dump(ArrayConstante); // Tipo de dato

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

$Variable10 = "Carro"; // Declaración de variable

// Switch
switch ($Variable10) { // Si
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
switch ($Variable10) { // Si
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
$Variable11 = 1; // Declaración de variable

while ($Variable11 <= 10) { // Bucle mientras

    echo "El valor del bucle es: $Variable11 \n"; // Imprimir

    if ($Variable11 == 5) break; // Romper

    $Variable11++; // Aumentar valor
}

$Variable111 = 1; // Declaración de variable

while ($Variable111 < 10) { // Bucle mientras
    $Variable111++; // Aumentar valor

    if ($Variable111 == 5) continue; // Omitir

    echo "El valor del bucle es: $Variable111 omitiendo 5 \n"; // imprimir
}

$Variable112 = 1; // Declaración de variable

while ($Variable112 <= 5) : // Bucle mientras alternativo
    echo "El valor del bucle es: $Variable112 \n"; // Imprimir

    $Variable112++; // Aumentar valor
endwhile; // Fin bucle mientras

$Variable113 = 1; // Declaración de variable

do { // Bucle
    echo "El valor de la variable es: $Variable113 \n"; // Imprimir

    $Variable113++; // Aumentar valor
} while ($Variable113 <= 5); // Mientras

$Variable114 = 1; // Declaración de variable

do { // Bucle
    echo "El valor de esta variable es: $Variable114 \n"; // Imprimir

    if ($Variable114 == 3) break; // Romper

    $Variable114++; // Aumentar valor
} while ($Variable114 <= 5); // Mientras

$Variable115 = 1; // Declaración de variable

do { // Bucle
    $Variable115++; // Aumentar valor

    if ($Variable115 == 3) continue; // Omitir

    echo "El valor de la variable es: $Variable115 omitiendo 3 \n"; // Imprimir

} while ($Variable115 <= 5); // Mientras

for ($Variable116 = 1; $Variable116 <= 10; $Variable116++) { // Bucle for
    echo "El valor de la variable es: $Variable116 usando for \n"; // Imprimir
}

for ($Variable117 = 1; $Variable117 <= 10; $Variable117++) { // Bucle for
    if ($Variable117 > 5) break; // Romper
    echo "El valor de la variable es rompido en: $Variable117 \n"; // Imprimir
}

for ($Variable118 = 1; $Variable118 <= 10; $Variable118++) { // Bucle for
    if ($Variable118 == 5) continue; // Omitir
    echo "El valor de la variable es: $Variable118 omitiendo 5 \n"; // Imprimir
}

$Variable12 = ["Valor0", "Valor1", "Valor2"]; // Declaración de array

foreach ($Variable12 as $Variable121) { // Bucle en array
    echo "$Variable121 \n"; // Imprimir
}

$Variable122 = ["Atributo0" => "Valor0", "Atribut01" => "Valor1", "Atributo2" => "Valor2"]; // Declaración de array asociativo
foreach ($Variable122 as $Variable1221 => $Variable1222) { // Bucle en array asociativo
    echo "$Variable1221: $Variable1222 \n"; // Imprimir
}
foreach ($Variable12 as $Variable1211) { // Bucle en array
    if ($Variable1211 == "Valor2") $Variable1211 = "Valor cambiado"; // Si
    echo "$Variable1211 \n"; // Imprimir
}

var_dump($Variable12); // Tipo de dato

foreach ($Variable12 as &$Variable1212) { // Bucle en array modificable
    if ($Variable1212 == "Valor2") $Variable1212 = "Valor cambiado"; // Si
    echo "$Variable1212 \n"; // Imprimir
}

var_dump($Variable12); // Tipo de dato

foreach ($Variable12 as $Variable123) : // Bucle en array alternativo
    echo "$Variable123 \n"; // Imprimir
endforeach; // Fin bucle en array

// Funciones
function Funcion0()
{ // Función sin parámetros
    echo ("Función0"); // Imprimir
}
Funcion0(); // Llamada a función

echo ("\n"); // Imprimir salto de línea

function Funcion1($Valor)
{ // Función con parámetros
    echo ("El valor pasado es: $Valor"); // Imprimir
}

Funcion1(12); // Llamada de función con parámetros

echo ("\n"); // Imprimir salto de línea

function Funcion2($Valor, $Potencia = 2)
{ // Función con parámetros predefinidos
    $Resultado = $Valor ** $Potencia; // Declaración de variable
    echo "$Valor a la $Potencia potencia es: $Resultado"; // Imprimir
}

Funcion2(5); // Llamada de función con parámetros

echo ("\n"); // Imprimir salto de línea

Funcion2(5, 5); // Llamada de función con parámetros

echo ("\n"); // Imprimir salto de línea

function Funcion3($a, $b)
{ // Función con parámetros
    $c = $a + $b; // Declaración de variable
    return $c; // Respuesta
}

echo ('El resultado de 1050 + 5010 es: ' . Funcion3(1050, 5010) . "\n"); // Imprimir

$Variable13 = 2; // Declaración de variable

echo "El valor de la variable es: $Variable13 \n"; // Imprimir

function Funcion4(&$Variable) { // Función con parámetros modificables
    $Variable = 5; // Declaración de variable
}

Funcion4($Variable13); // Llamada de función con parámetros

echo "El nuevo valor de la variable es: $Variable13 \n"; // Imprimir

function Funcion5 (...$x) { // Función con parámetros indefinidos
    $a = 0; // Declaración de variable
    $b = count($x); // Conteo de array
    for($c = 0; $c < $b; $c++) { // Bucle
        $a += $x[$c]; // Adición de valor
    }
    return $a; // Respuesta
}

$Funcion5 = Funcion5(1, 2, 3, 4, 5, 6, 7, 8, 9); // Declaración de función con parámetros

echo ($Funcion5 . "\n"); // Imprimir

function Funcion6 (...$x) { // Función con parámetros indefinidos
    $y = (array)$x; // Converción de array
    foreach ($y as $z) { // Bucle en array
        echo (""); // Imprimir
    }
    return $y; // Respuesta
}

$Funcion6 = Funcion6(1, 2, 3, 4, 5, 6, 7, 8, 9); // Llamada de función con parámetros

print_r ($Funcion6); // Imprimir array

echo ("\n"); // Imprimir salto de línea