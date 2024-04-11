<?php
$NameCookie = "Cookie"; // Declaración de variable

setcookie($NameCookie, 'Valor de cookie'); // Declaración de cookie
setcookie($NameCookie, 'Valor de cookie modificado'); // Declaración de cookie

session_start(); // Iniciar sesión
?>

<!DOCTYPE html>

<html lang="en-CO">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>PHP</title>
</head>

<body>
    <main>
        <form action="Form.php" method="post">
            <label for="Name">Name:</label>
            <input type="text" name="Name" id="Name">
            <input type="submit" value="Submit">
        </form>
        <form action="UploadedForm.php" method="post" enctype="multipart/form-data">
            <input type="file" name="fileToUpload" id="fileToUpload">
            <input type="submit" value="Upload Image" name="submit">
        </form>
        <aside>
            <?php // Inicio PHP
            readfile('FileNew.txt'); // Leer archivo

            echo ("<br>"); // Imprimir salto de línea

            $File = fopen('FileNew.txt', 'r') or die('Archivo no disponible para lectura'); // Obtener o crear archivo

            echo (fread($File, filesize('FileNew.txt'))); // Leer archivo 
            echo ("<br>"); // Imprimir salto de línea

            fclose($File); // Cerrar archivo

            $FileNew = fopen('FileNew.txt', 'a'); // Obtener o crear archivo
            $TextFileNew = "\nTexto añadido mediante PHP"; // Declaración de variable

            // fwrite($FileNew, $TextFileNew); // Escribir en archivo

            fclose($FileNew); // Cerrar archivo

            echo ($_COOKIE[$NameCookie]); // Imprimir
            echo ("<br>"); // Imprimir salto de línea

            $_SESSION['Name'] = 'estiven0425'; // Declaración de variable
            $_SESSION['Email'] = 'estivenmoto6@gmail.com'; // Declaración de variable

            print_r($_SESSION); // Imprimir array
            ?> <!-- Fin PHP -->
        </aside>
    </main>
</body>

</html>