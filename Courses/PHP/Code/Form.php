<?php // Inicio PHP

// Obtención de datos
$Name = $_POST['Name']; // Declaración de variable con obtención de datos

echo ('El método recibido es: ' . $_SERVER['REQUEST_METHOD'] . '<br>'); // Imprimir

if ($_SERVER['REQUEST_METHOD'] == 'POST') { // Sí el método es POST
    if (empty($Name)) { // Si la variable está vacia
        echo ("A enviado el formulario vacío."); // Imprimir
    } else { // Sino
        echo ("El nombre es: $Name"); // Imprimir
    }
} else {
    echo ('El método no es POST'); // Imprimir
}
