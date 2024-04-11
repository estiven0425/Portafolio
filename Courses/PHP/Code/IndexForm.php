<!DOCTYPE html>

<html lang="en-CO">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>PHP</title>
</head>
<?php // Inicio PHP
$nameErr = $emailErr = $genderErr = $websiteErr = ""; // Asignación múltiple de valor
?> <!-- Fin PHP -->

<body>
    <header>
        <?php // Inicio PHP
        include 'Header.php'; // Incluir
        ?> <!-- Fin PHP -->
    </header>
    <main>
        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
            Name: <input type="text" name="name">
            <span class="error">* <?php echo $nameErr; ?></span>
            <br><br>
            E-mail:
            <input type="text" name="email">
            <span class="error">* <?php echo $emailErr; ?></span>
            <br><br>
            Website:
            <input type="text" name="website">
            <span class="error"><?php echo $websiteErr; ?></span>
            <br><br>
            Comment: <textarea name="comment" rows="5" cols="40"></textarea>
            <br><br>
            Gender:
            <input type="radio" name="gender" value="female">Female
            <input type="radio" name="gender" value="male">Male
            <input type="radio" name="gender" value="other">Other
            <span class="error">* <?php echo $genderErr; ?></span>
            <br><br>
            <input type="submit" name="submit" value="Submit">

        </form>
    </main>
    <footer>
        <?php // Inicio PHP
        require 'Footer.php'; // Requerir
        ?> <!-- Fin PHP -->
    </footer>
</body>
<?php
// Formulario
$name = $email = $gender = $comment = $website = ""; // Asignación múltiple de valor

if ($_SERVER["REQUEST_METHOD"] == "POST") { // Sí
    if (empty($_POST["name"])) { // Sí
        $nameErr = "Name is required"; // Asignación de valor a variable
    } else { // Si no
        $name = test_input($_POST["name"]); // Asignación de valor a variable
    }

    if (empty($_POST["email"])) { // Sí
        $emailErr = "Email is required"; // Asignación de valor a variable
    } else { // Si no
        $email = test_input($_POST["email"]); // Asignación de valor a variable
    }

    if (empty($_POST["website"])) { // Sí
        $website = ""; // Asignación de valor a variable
    } else { // Si no
        $website = test_input($_POST["website"]); // Asignación de valor a variable
    }

    if (empty($_POST["comment"])) { // Sí
        $comment = ""; // Asignación de valor a variable
    } else { // Si no
        $comment = test_input($_POST["comment"]); // Asignación de valor a variable
    }

    if (empty($_POST["gender"])) { // Sí
        $genderErr = "Gender is required"; // Asignación de valor a variable
    } else { // Si no
        $gender = test_input($_POST["gender"]); // Asignación de valor a variable
    }
}

function test_input($data)
{ // Función con parámetros
    $data = trim($data); // Asignación de valor
    $data = stripslashes($data); // Asignación de valor
    $data = htmlspecialchars($data); // Asignación de valor
    return $data; // Respuesta
}
?> <!-- Fin PHP -->

</html>