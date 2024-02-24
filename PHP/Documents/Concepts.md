# PHP
Esta carpeta contiene un archivo principal con prácticas PHP e información útil.
<hr>
<h3>¿Qué es PHP?</h3>
<b>PHP</b> es un lenguaje de scripting para servidores y una poderosa herramienta para crear páginas web dinámicas e interactivas. <br>
<b>PHP</b> es una alternativa ampliamente utilizada, gratuita y eficiente a competidores como ASP de Microsoft. <br>
El código <b>PHP</b> se ejecuta en el servidor. <br>
<ul>
    <li><b>PHP</b> es un acrónimo de "PHP: Hypertext Preprocessor".</li>
    <li><b>PHP</b> es un lenguaje de scripting de código abierto ampliamente utilizado.</li>
    <li><b>Los scripts PHP</b> se ejecutan en el servidor.</li>
    <li>La descarga y el uso de <b>PHP</b> son gratuitos.</li>
</ul>
Es lo suficientemente poderoso como para estar en el centro de los más grandes sistema de blogs en la web ¡(WordPress)! <br>
¡Es lo suficientemente profundo como para ejecutar grandes redes sociales! <br>
También es bastante fácil ser el primer idioma de servidor de un principiante.
<h3>¿Qué es un archivo PHP?</h3>
Los archivos <b>PHP</b> pueden contener texto, HTML, CSS, JavaScript y código <b>PHP</b>. <br>
El código <b>PHP</b> se ejecuta en el servidor y el resultado se devuelve al navegador como HTML sin formato. <br>
Los archivos <b>PHP</b> tienen extensión "<b><i>.php</b></i>".
<h3>¿Qué puede hacer PHP?</h3>
<ul>
    <li><b>PHP</b> puede generar contenido de página dinámico</li>
    <li><b>PHP</b> puede crear, abrir, leer, escribir, eliminar y cerrar archivos en el servidor</li>
    <li><b>PHP</b> puede recopilar datos de formularios</li>
    <li><b>PHP</b> puede enviar y recibir cookies</li>
    <li><b>PHP</b> puede agregar, eliminar y modificar datos en su base de datos</li>
    <li><b>PHP</b> se puede utilizar para controlar el acceso de los usuarios</li>
    <li><b>PHP</b> puede cifrar datos</li>
</ul>
Con PHP no se está limitado a HTML de salida.Se puede generar imágenes o archivos PDF. También se puede generar cualquier texto, como XHTML y XML.
<h3>¿Por qué PHP?</h3>
<ul>
    <li><b>PHP</b> se ejecuta en varias plataformas (Windows, Linux, Unix, Mac OS X, etc.).</li>
    <li><b>PHP</b> es compatible con casi todos los servidores utilizados hoy en día (Apache, IIS, etc.).</li>
    <li><b>PHP</b> soporta una amplia gama de bases de datos.</li>
    <li><b>PHP</b> es gratis. Es posible descárgarlo del recurso oficial de PHP: www.php.net.</li>
    <li><b>PHP</b> es fácil de aprender y se ejecuta de manera eficiente en el lado del servidor.</li>
</ul>
<hr>
<h3>Sintaxis PHP</h3>
Un script <b>PHP</b> se puede colocar en cualquier parte del documento. <br>
Un script <b>PHP</b> comienza con <b><i>< ?php</i></b> y termina con <b><i>?></i></b>. <br>
Un archivo <b>PHP</b> normalmente contiene etiquetas HTML y algo de código de scripting <b>PHP</b>. <br>
Las sentencias <b>PHP</b> terminan con un punto y coma (<b><i>;</i></b>). <br>
En <b>PHP</b>, las palabras clave (por ejemplo if, else, while, echo etc.), clases, funciones, y las funciones definidas por el usuario no distinguen entre mayúsculas y minúsculas. Sin embargo; ¡Todos los nombres de las variables distinguen entre mayúsculas y minúsculas!
<hr>
<h3>Comentarios PHP</h3>
<h3>Comentarios de una sola línea</h3>
Los comentarios de una sola línea comienzan con <b><i>//</i></b>. <br>
Cualquier texto entre <b><i>//</i></b> y el final de la línea será ignorado (no se ejecutará). <br>
También se puede usar <b><i>#</i></b> para comentarios de una sola línea. <br>
<h3>Comentarios de varias líneas</h3>
Los comentarios de varias líneas comienzan con <b><i>/**/</i></b>. <br>
Cualquier texto entre <b><i>/*</i></b> y <b><i>*/</i></b> será ignorado.
<hr>
<h3>Variables PHP</h3>
En PHP, una variable comienza con el signo <b><i>$</i></b>, seguido del nombre de la variable. <br>
A diferencia de otros lenguajes de programación, PHP no tiene comandos para declarar una variable. Se crea en el momento en que se asigna un valor a eso. <br>
Una variable puede tener un nombre corto o un nombre más descriptivo. <br>
Reglas para variables PHP:
<ul>
    <li>Una variable comienza con el signo, seguido del nombre de la variable$.</li>
    <li>El nombre de una variable debe comenzar con una letra o el carácter de subrayado.</li>
    <li>El nombre de una variable no puede comenzar con un número.</li>
    <li>Un nombre de variable solo puede contener caracteres alfanuméricos y guiones bajos (A-z, 0-9 y _ ).</li>
    <li>Los nombres de las variables distinguen entre mayúsculas y minúsculas (y son dos variables diferentes).</li>
</ul>
PHP asocia automáticamente un tipo de datos a la variable, dependiendo de su valor. Dado que los tipos de datos no se establecen en un sentido estricto, puede hacer cosas como Agregar una cadena a un entero sin causar un error. <br>
En PHP 7, se añadieron declaraciones de tipos. Esto da una opción para especificar el tipo de datos esperado al declarar una función, y al habilitar el requisito estricto, lanzará un mensaje "Fatal Error" en una discrepancia de tipo. <br>
PHP soporta los siguientes tipos de datos:
<ul>
    <li>String</li>
    <li>Integer</li>
    <li>Float (Números de coma flotante, tambien llamados dobles)</li>
    <li>Boolean</li>
    <li>Array</li>
    <li>Object</li>
    <li>NULL</li>
    <li>Resource</li>
</ul>
Para obtener el tipo de datos de una variable, se utiliza la función <b><i>var_dump()</i></b>. <br>
Se puede asignar el mismo valor a varias variables en una línea.
<h3>Alcance de las variables PHP</h3>
En PHP, las variables se pueden declarar en cualquier parte del script. <br>
El ámbito de una variable es la parte del script en la que se puede hacer referencia a la variable. <br>
PHP tiene tres alcances de variables diferentes:
<ul>
    <li>local</li>
    <li>global</li>
    <li>estático</li>
</ul>
La palabra <b><i>global</i></b> clave se utiliza para acceder a una variable global desde dentro de una función. <br>
Para ello, se utiliza la palabra clave <b><i>global</i></b> antes de las variables (dentro de la variable función). <br>
PHP también almacena todas las variables globales en una matriz llamada <b><i>$GLOBALS[Índice]</i></b>. El índice contiene el nombre de la variable. También se puede acceder a esta matriz desde dentro de las funciones y se puede utilizar para actualizar variables globales directamente. <br>
Normalmente, cuando se completa o ejecuta una función, se eliminan todas sus variables. Sin embargo, a veces se requieres que una variable local NO se elimine. Porque se necesita para un trabajo adicional. <br>
Para ello, se utiliza la palabra clave <b><i>static</i></b> cuando se declara por primera vez el método variable. <br>
La variable sigue siendo local o global dependiendo el lugar en el que se creó.
<hr>
<h3>Sentencias PHP echo e print</h3>
Con PHP, hay dos formas básicas de obtener resultados: <b><i>echo</i></b> y <b><i>print</i></b>. <br>
<b><i>echo</i></b> y <b><i>print</i></b> son más o menos lo mismo. Ambos se utilizan para generar datos a la pantalla. <br>
Las diferencias son pequeñas: <b><i>echo</i></b> no tiene valor de retorno mientras que <b><i>print</i></b> tiene un valor de retorno de 1 por lo que se puede usar en expresiones. <b><i>echo</i></b> puede tomar múltiples parámetros (aunque tal uso es raro) mientras <b><i>print</i></b> puede tomar un argumento. <b><i>echo</i></b> es marginalmente más rápido que <b><i>print</i></b>. <br>
La instrucción <b><i>echo</i></b> se puede usar con o sin paréntesis. <br>
La instrucción <b><i>print</i></b> se puede usar con o sin paréntesis.
<hr>
<h3>Tipos de datos PHP</h3>
<h3>Cadena PHP</h3>
Una cadena es una secuencia de caracteres, como "¡Hola mundo!". <br>
Una cadena puede ser cualquier texto entre comillas. Puedes usar comillas simples o dobles.
<h3>Entero de PHP</h3>
Un tipo de datos entero es un número no decimal entre -2.147.483.648 y 2,147,483,647.
<h3>PHP Float</h3>
Un float (número de coma flotante) es un número con un punto decimal o un número en forma exponencial.
<h3>PHP booleano</h3>
Un booleano representa dos estados posibles: TRUE o FALSE.
<h3>Matriz PHP</h3>
Una matriz almacena varios valores en una sola variable.
<h3>Objeto PHP</h3>
Las clases y los objetos son los dos aspectos principales de la programación orientada a objetos. <br>
Una clase es una plantilla para objetos y un objeto es una instancia de una clase.
<h3>Valor NULL de PHP</h3>
Null es un tipo de datos especial que solo puede tener un valor. <br>
Una variable de tipo de datos NULL es una variable que no tiene ningún valor asignado.
<h3>Recurso PHP</h3>
El tipo de recurso especial no es un tipo de datos real. Es el almacenamiento de un referencia a funciones y recursos. <h3>externos a PHP.</h3>
Un ejemplo común de El uso del tipo de datos Resource es una llamada a la base de datos.
<hr>
<h3>Cadenas PHP</h3>
Una cadena es una secuencia de caracteres, como "¡Hola mundo!". <br>
Las cadenas en PHP están rodeadas por comillas dobles o simples. <br>
Hay una gran diferencia entre las comillas dobles y comillas simples en PHP. <br>
Las comillas dobles procesan caracteres especiales, las comillas simples. <br>
Las cadenas entre comillas dobles realizan acciones en caracteres especiales. <br>
Por ejemplo, cuando hay una variable en la cadena, devuelve el valor de La variable <br>
Las cadenas entre comillas simples no realizan tales acciones, devuelven la cadena tal como se escribió, con el nombre de la variable. <br>
La función PHP <b><i>strlen()</i></b> devuelve la longitud de una cadena. <br>
La función PHP <b><i>str_word_count()</i></b> cuenta el número de palabras en una cadena. <br>
La función PHP <b><i>strpos()</i></b> busca un texto específico dentro de una cadena. <br>
Si se encuentra una coincidencia, la función devuelve la posición del carácter de la primera coincidencia. Si no se encuentra ninguna coincidencia, devolverá FALSE. <br>
PHP tiene un conjunto de funciones integradas que puedes usar para modificar cadenas. <br>
La función <b><i>strtoupper()</i></b> devuelve la cadena en mayúsculas. <br>
La función <b><i>strtolower()</i></b> devuelve la cadena en minúsculas. <br>
La función PHP <b><i>str_replace()</i></b> reemplaza algunos caracteres con otros caracteres de una cadena. <br>
La función PHP <b><i>strrev()</i></b> invierte una cadena. <br>
<b><i>trim()</i></b> Elimina cualquier espacio en blanco del principio o del final. <br>
La función PHP <b><i>explode()</i></b> divide una cadena en una matriz. <br>
El primer parámetro de la función representa el "separador". El "separador" especifica dónde dividir la cadena.
<h3>Concatenación de cadenas</h3>
Para concatenar, o combinar, dos cadenas, puede usar el operador <b><i>.(punto)</i></b>. <br>
Una forma más fácil y mejor es utilizando el poder de las comillas dobles. <br>
Al rodear los valores a concatenar entre comillas dobles con un espacio en blanco entre ellos, El espacio en blanco también estará presente en el resultado.
<h3>Rebanar</h3>
Se puede devolver un intervalo de caracteres mediante la función <b><i>substr()</i></b>. <br>
Especificando el índice de inicio y el número de caracteres que se desea devolver. <br>
Al omitir el parámetro de longitud, el rango irá hasta el final. <br>
Se utiliza índices negativos para iniciar el segmento desde el final de la cadena. <br>
El último carácter tiene el índice -1.
<h3>Personaje de escape</h3>
Para insertar caracteres que no son válidos en una cadena, se utiliza un carácter de escape. <br>
Un carácter de escape es una barra diagonal inversa seguida del carácter que se desea insertar. <br>
Un ejemplo de un carácter ilegal es una comilla doble dentro de una cadena que está rodeada de comillas dobles. <br>
Otros caracteres de escape utilizados en PHP:
<ul>
    <li><b><i>\'</i></b> Cotización simple</li>
    <li><b><i>\"</i></b> Comilla doble</li>
    <li><b><i>\$</i></b> Variables PHP</li>
    <li><b><i>\n</i></b> Nueva línea</li>
    <li><b><i>\r</i></b> Retorno de carro</li>
    <li><b><i>\t</i></b> Pestaña</li>
    <li><b><i>\f</i></b> Feed de formularios</li>
    <li><b><i>\ooo</i></b> Valor octal</li>
    <li><b><i>\xhh</i></b> Valor hexadecimal</li>
</ul>
<h3>Números PHP</h3>
Hay tres tipos numéricos principales en PHP:
<ul>
    <li>Integer</li>
    <li>Float</li>
    <li>Number Strings</li>
</ul>
Además, PHP tiene dos tipos de datos más que se utilizan para los números:
<ul>
    <li>Infinity</li>
    <li>NaN</li>
</ul>
Las variables de tipos numéricos se crean cuando se les asigna un valor. <br>
Una cosa importante que se debe saber es que incluso si 4 * 2.5 es 10, el resultado es almacenado como float, porque uno de los operandos es un float (2.5). <br>
Estas son algunas reglas para los números enteros:
<ul>
    <li>Un número entero debe tener al menos un dígito.</li>
    <li>Un número entero NO debe tener un punto decimal.</li>
    <li>Un entero puede ser positivo o negativo.</li>
</ul>
Los enteros se pueden especificar en tres formatos: decimal (base 10), hexadecimal (base 16 - con el prefijo 0x), octal (base 8 - con el prefijo 0) o binario (base 2 - con el prefijo 0b). <br>
PHP tiene las siguientes constantes predefinidas para números enteros:
<ul>
    <li><b><i>PHP_INT_MAX</i></b>: El entero más grande admitido.</li>
    <li><b><i>PHP_INT_MIN</i></b>: El entero más pequeño admitido.</li>
    <li><b><i>PHP_INT_SIZE</i></b>: El tamaño de un entero en bytes.</li>
</ul>
PHP tiene las siguientes funciones para comprobar si el tipo de una variable es entero:
<ul>
    <li>is_int()</li>
    <li>is_integer() - alias de is_int()</li>
    <li>is_long() - alias de is_int()</li>
</ul>
Un float es un número con un punto decimal o un número en forma exponencial. <br>
2.0, 256.4, 10.358, 7.64E+5, 5.56E-5 son todos flotantes. <br>
Normalmente, el tipo de datos float puede almacenar un valor de hasta 1,7976931348623E+308 (depende de la plataforma) y tienen una precisión máxima de 14 dígitos. <br>
PHP tiene las siguientes constantes predefinidas para floats (a partir de PHP 7.2):
<ul>
    <li><b>PHP_FLOAT_MAX</b>: El número de coma flotante representable más grande</li>
    <li><b>PHP_FLOAT_MIN</b>: El número de coma flotante positivo representable más pequeño</li>
    <li><b>PHP_FLOAT_DIG</b>: El número de dígitos decimales que se pueden redondear a un flotar y retroceder sin pérdida de precisión</li>
    <li><b>PHP_FLOAT_EPSILON</b>: El número positivo representable más pequeño x, de modo que x + 1.0 != 1.0</li>
</ul>
PHP tiene las siguientes funciones para comprobar si el tipo de una variable es flotar:
<ul>
    <li>is_float()</li>
    <li>is_double() - alias de is_float()</li>
</ul>
Un valor numérico que es mayor que <b><i>PHP_FLOAT_MAX</i></b> se considera infinito. <br>
PHP tiene las siguientes funciones para comprobar si un valor numérico es finito o infinito:
<ul>
    <li>is_finite()</li>
    <li>is_infinite()</li>
</ul>
<b><i>NaN</i></b> son las siglas de Not a Number. <br>
NaN se utiliza para operaciones matemáticas imposibles. <br>
PHP tiene las siguientes funciones para comprobar si un valor no es un número:
<ul>
    <li>is_nan()</li>
</ul>
La función PHP <b><i>is_numeric()</i></b> se puede usar para encontrar si una variable es numérico. La función devuelve true si la variable es un número o un número string, false de lo contrario.
<h3>PHP Conversión de cadenas y flotantes a enteros</h3>
A veces es necesario convertir un valor numérico en otro tipo de datos. <br>
Las funciones <b><i>(int)</i></b>,<b><i>(integer)</i></b> y <b><i>intval()</i></b> se utilizan a menudo para convertir un valor a un número entero. <br>
