<?php // Inicio PHP
$target_dir = "../Uploads/"; // Directorio de destino
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]); // Ruta del archivo
$uploadOk = 1; // Estado de carga
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION)); // Exteción del archivo

if (isset($_POST["submit"])) { // Sí 
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]); // Obtener nombre
    if ($check !== false) { // Si es falso
        echo ("File is an image - " . $check["mime"] . "."); // Imprimir
        $uploadOk = 1; // Asignación de valor a variable
    } else { // Si no
        echo ("File is not an image."); // Imprimir
        $uploadOk = 0; // Asignación de valor a variable
    }
}
if (file_exists($target_file)) { // Sí
    echo ("Sorry, file already exists."); // Imprimir
    $uploadOk = 0; // Asignación de valor a variable
}
