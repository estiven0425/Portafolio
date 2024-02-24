<?php // Inicio PHP
echo phpversion(); // Imprimir versión de PHP
echo("\n\n"); // Imprimir salto de línea

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
echo("\n"); // Imprimir salto de línea

// Variables globales
echo($GLOBALS["Variable1"]); // Imprimir índice de variables globales

// Variables estáticas
static $VariableEstatica = "Valor estático"; // Variable estática

// Impresiones en pantalla
echo("\n"); // Imprimir salto de línea
echo $Variable6; // Imprimir
echo "\nEste es un salto de línea\n"; // Imprimir
echo ($Variable60); // Imprimir

print("\n\n"); // Imprimir salto de línea
print $Variable6; // Imprimir
print "\nEste es un salto de línea\n"; // Imprimir
print ($Variable60); // Imprimir

echo("\n\n"); // Imprimir salto de línea

// String
$Variable7 = "Valor"; // Declaración d variable
$Variable70 = 'Valor'; // Declaración d variable
$Variable71 = "La variable7 tiene como valor: $Variable7"; // Declaración de variable
$Variable72 = 'La variable7 tiene como valor: $Variable7'; // Declaración de variable

echo $Variable71; // Imprimir
echo("\n"); // Imprimir salto de línea
echo $Variable72; // Imprimir
echo("\n"); // Imprimir salto de línea
echo strlen($Variable71); // Imprimir longitud de cadena
echo("\n"); // Imprimir salto de línea
echo str_word_count($Variable71); // Imprimir recuento de palabras
echo("\n"); // Imprimir salto de línea
echo strpos($Variable71, "valor"); // Imprimir busqueda de palabras
echo("\n"); // Imprimir salto de línea
echo strtoupper($Variable71); // Imprimir en mayúscula la cadena
echo("\n"); // Imprimir salto de línea
echo strtolower($Variable71); // Imprimir en minúscula la cadena
echo("\n"); // Imprimir salto de línea
echo str_replace("valor", "contenido", $Variable71); // Imprimir cambiando palabras de la cadena
echo("\n"); // Imprimir salto de línea
echo strrev($Variable71); // Imprimir cadena al reves
echo("\n"); // Imprimir salto de línea
echo trim($Variable71); // Imprimir cadena sin espacios iniciales o finales
echo("\n"); // Imprimir salto de línea
$Variable710 = explode(" ", $Variable71); // Iterar cadena
print_r($Variable710); // Imprimir array
echo("\n"); // Imprimir salto de línea
echo "El texto concatena con" . " " . $Variable71; // Imprimir cadenas concatenadas
echo("\n"); // Imprimir salto de línea
echo "El texto concatena con $Variable71"; // Imprimir cadena
echo("\n"); // Imprimir salto de línea
echo substr($Variable71, 3, 8); // Imprimir cadena recortada
echo("\n"); // Imprimir salto de línea
echo substr($Variable71, 13); // Imprimir cadena recortada sin final
echo("\n"); // Imprimir salto de línea
echo substr($Variable71, -5); // Imprimir cadena recortada desde el final
echo("\n"); // Imprimir salto de línea
echo "El texto concatena con \$Variable71"; // Imprimir cadena
echo("\n"); // Imprimir salto de línea

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
echo("\n"); // Imprimir salto de línea
echo "Valor máximo: $Variable83 - valor mínimo: $Variable830"; // Imprimir
echo("\n"); // Imprimir salto de línea
var_dump($Variable810); // Tipo de dato