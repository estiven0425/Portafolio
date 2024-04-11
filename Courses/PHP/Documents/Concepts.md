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
Las funciones <b><i>(int)</i></b>,<b><i>(integer)</i></b> y <b><i>intval()</i></b> se utilizan a menudo para convertir un valor a un número entero.
<hr>
<h3>Casting PHP</h3>
A veces es necesario cambiar una variable de un tipo de datos a otro. Y, a veces, se desea que una variable tenga un tipo de datos específico. Esto se puede hacer con fundición.
Para convertir en cadena, se usa la instrucción<b><i>(string)</i></b>. <br>
Para convertir a entero, se usa la instrucción <b><i>(int)</i></b>. <br>
Para convertir a float, se usa la instrucción <b><i>(float)</i></b>. <br>
Para convertir a booleano, se use la instrucción <b><i>(bool)</i></b>. <br>
Si un valor es 0, NULL, false o vacío, (bool) lo convierte en false, de lo contrario true. <br>
Incluso -1 se convierte en verdadero. <br>
Para convertir en matriz, se usa la instrucción <b><i>(array)</i></b>. <br>
Al convertir en matrices, la mayoría de los tipos de datos se convierten en una matriz indexada con un elemento. <br>
Los valores NULL se convierten en un objeto de matriz vacío. <br>
Los objetos se convierten en matrices asociativas donde los nombres de las propiedades se convierten en las claves y los valores de las propiedades se convierten en los valores. <br>
Para convertir a objeto, se usa la instrucción <b><i>(object)</i></b>. <br>
Al convertir en objetos, la mayoría de los tipos de datos se convierten en un objeto con una propiedad, denominada "scalar", con el valor correspondiente. <br>
Los valores NULL se convierten en un objeto vacío. <br>
Las matrices indexadas se convierten en objetos con el número de índice como nombre de propiedad y el valor como valor de propiedad. <br>
Las matrices asociativas se convierten en objetos con las claves como nombres de propiedad y los valores como valores de propiedad. <br>
Para convertir a NULL, se usa la instrucción <b><i>(unset)</i></b>.
<hr>
<h3>Matemáticas PHP</h3>
PHP tiene un conjunto de funciones matemáticas que permiten realizar tareas matemáticas con números. <br>
La función <b><i>pi()</i></b> devuelve el valor de PI. <br>
Las funciones <b><i>max()</i></b> y <b><i>min()</i></b> se pueden usar para encontrar el valor más bajo o más alto en una lista de argumentos. <br>
La función <b><i>abs()</i></b> devuelve el valor absoluto (positivo) de un número. <br>
La función <b><i>sqrt()</i></b> devuelve la raíz cuadrada de un número. <br>
La función <b><i>round()</i></b> redondea un número de coma flotante a su entero más cercano. <br>
La función <b><i>rand()</i></b> genera un número aleatorio. <br>
Para obtener más control sobre el número aleatorio, se puede agregar los parámetros opcionales min y max para especificar el entero más bajo y el entero más alto que se devolverán.
<hr>
<h3>Constantes PHP</h3>
Las constantes son como variables, excepto que una vez que se definen no se pueden cambiar ni dejar de definir. <br>
Una constante es un identificador (nombre) para un valor simple. El valor no puede ser modificado durante el guión. <br>
Un nombre de constante válido comienza con una letra o un carácter de subrayado (sin signo $ antes el nombre de la constante). <br>
A diferencia de las variables, las constantes son automáticamente globales a través de todo el guión. <br>
Para crear una constante, se usa la función <b><i>define()</i></b>. <br>
Parámetros:
<ul>
    <li><b>name</b>: Especifica el nombre de la constante.</li>
    <li><b>value</b>: Especifica el valor de la constante.</li>
    <li>sin distinción entre mayúsculas y minúsculas: especifica si el nombre de la constante no debe distinguir entre mayúsculas y minúsculas. El valor predeterminado es false.</li>
</ul>
También se puede crear una constante mediante la palabra clave <b><i>const</i></b>. <br>
const frente a define()
<ul>
    <li><b>const</b> siempre distingue entre mayúsculas y minúsculas.</li>
    <li><b>define()</b> tiene una opción que no distingue entre mayúsculas y minúsculas.</li>
    <li><b>const</b> no se puede crear dentro de otro ámbito de bloque, como dentro de una función o dentro de una instrucción if.</li>
    <li><b>define()</b> se puede crear dentro de otro ámbito de bloque.</li>
</ul>
A partir de PHP7, se puede crear una constante array usando la función <b><i>define()</i></b>. <br>
Las constantes son automáticamente globales y se pueden usar en todo el código.
<hr>
<h3>Constantes predefinidas de PHP</h3>
PHP tiene nueve constantes predefinidas que cambian de valor dependiendo de dónde se usen, y por lo tanto se llaman "Constantes mágicas". <br>
Estas constantes mágicas se escriben con un doble guión bajo al principio y al final, excepto por la constante <b><i>ClassName::class</i></b>.
<ul>
    <li><b>__CLASS__</b> Si se usa dentro de una clase, se devuelve el nombre de la clase.</li>
    <li><b>__DIR__</b> El directorio del archivo.</li>
    <li><b>__FILE__</b> El nombre del archivo, incluida la ruta completa.</li>
    <li><b>__FUNCTION__</b> Si está dentro de una función, se devuelve el nombre de la función.</li>
    <li><b>__LINE__</b> El número de línea actual.</li>
    <li><b>__METHOD__</b> Si se usa dentro de una función que pertenece a una clase, se devuelve tanto el nombre de la clase como el de la función.</li>
    <li><b>__NAMESPACE__</b> Si se utiliza dentro de un espacio de nombres, se devuelve el nombre del espacio de nombres.</li>
    <li><b>__TRAIT__</b> Si se usa dentro de un rasgo, se devuelve el nombre del rasgo.</li>
    <li><b>ClassName::class</b> Devuelve el nombre de la clase especificada y el nombre del espacio de nombres, si lo hay.</li>
</ul>
Las constantes mágicas no distinguen entre mayúsculas y minúsculas.
<hr>
<h3>Operadores PHP</h3>
Los operadores se utilizan para realizar operaciones en variables y valores. <br>
PHP divide los operadores en los siguientes grupos:
<ul>
    <li>Operadores aritméticos</li>
    <li>Operadores de asignación</li>
    <li>Operadores de comparación</li>
    <li>Operadores de incremento/decremento</li>
    <li>Operadores lógicos</li>
    <li>Operadores de cadena</li>
    <li>Operadores de matrices</li>
    <li>Operadores de asignación condicional</li>
</ul>
<hr>
<h3>Sentencias condicionales de PHP</h3>
Muy a menudo, cuando se escribe código, se quiere realizar diferentes acciones para diferentes condiciones. Para ello, se puede usar instrucciones condicionales en el código. <br>
En PHP existen las siguientes sentencias condicionales:
<ul>
    <lI><b><i>if</i></b>: ejecuta algún código si una condición es verdadera.</li>
    <lI><b><i>if...else</i></b>: ejecuta algún código si una condición es verdadera y otro código si esa condición es falsa.</li>
    <lI><b><i>if...elseif...else</i></b>: ejecuta códigos diferentes para más de dos condiciones.</li>
    <lI><b><i>switch</i></b>: selecciona uno de los muchos bloques de código que se ejecutarán.</li>
</ul>
La instrucción <b><i>if</i></b> ejecuta algún código si una condición es verdadera. <br>
También se puede usar variables en la instrucción <b><i>if</i></b>. <br>
La sentencia <b><i>if</i></b> ejecuta algún código si una condición es verdadera y <b><i>else</i></b> otro código si esa condición es falsa. <br>
La instrucción <b><i>elseif</i></b> ejecuta códigos diferentes para más de dos condiciones. <br>
Para escribir código más corto, se puede escribir instrucciones <b><i>if</i></b> en una línea. <br>
Las declaraciones <b><i>else</i></b> también se pueden escribir en una línea, pero la sintaxis es un poco diferente. <br>
Esta técnica se conoce como Operadores Ternarios o Condicionales expresiones. <br>
Se puede tener instrucciones <b><i>if</i></b> dentro de instrucciones <b><i>if</i></b>, esto se llama declaraciones <b><i>if</i></b> anidadas.
<h3>Declaración PHP Switch</h3>
La instrucción <b><i>switch</i></b> se utiliza para realizar diferentes acciones en función de diferentes condiciones. <br>
Sintaxis:
<pre>
switch (Expresión) {
  case Opción1:
    Código;
    break;
  case Opción2:
    Código;
    break;
  case Opción3:
    Código;
    break;
  default:
    Código;
}
</pre>
Así es como funciona:
<ul>
    <li>La expresión se evalúa una vez.</li>
    <li>El valor de la expresión se compara con los valores de cada caso.</li>
    <li>Si hay una coincidencia, se ejecuta el bloque de código asociado.</li>
    <li>La palabra clave <b><i>break</i></b> se sale del bloque switch.</li>
    <li>El bloque de código <b><i>default</i></b> se ejecuta si no hay ninguna coincidencia.</li>
</ul>
Cuando PHP alcanza una palabra clave <b><i>break</i></b>, sale del bloque switch. <br>
Esto detendrá la ejecución de más código y no se probarán más casos. <br>
El último bloque no necesita un descanso, el bloque se rompe (termina) allí de todos modos. <br>
Si se omite la instrucción <b><i>break</i></b> en un caso que no es el último, y ese caso tiene una coincidencia, ¡El siguiente caso también se ejecutará incluso si la evaluación no coincide con el caso! <br>
La palabra clave <b><i>default</i></b> especifica el código que se va a ejecutar si no hay ninguna coincidencia de casos. <br>
El caso <b><i>default</i></b> no tiene que ser el último caso de un interruptor. <br>
Si no es la última opción en el bloque, Hay que terminar el bloque con una declaración <b><i>break</i></b>.
<hr>
<h3>Bucles</h3>
A menudo, cuando se escribe código, se desea que el mismo bloque de código se ejecute una y otra vez una determinada cantidad de veces. Entonces, en lugar de agregar varias líneas de código casi iguales en un script, se puede usar bucles. <br>
Los bucles se utilizan para ejecutar el mismo bloque de código una y otra vez, siempre que se cumpla una determinada condición. <br>
En PHP existen los siguientes tipos de bucles:
<ul>
    <li><b>while</b> recorre un bloque de código siempre que la condición especificada sea verdadera.</li>
    <li><b>do...while</b> recorre un bloque de código una vez y luego repite el ciclo siempre que la condición especificada sea verdadera.</li>
    <li><b>for</b> recorre un bloque de código un número específico de veces.</li>
    <li><b>foreach</b> recorre un bloque de código para cada elemento de una matriz.</li>
</ul>
<h3>While</h3>
El bucle <b><i>while</i></b> recorre un bloque de código siempre que la condición especificada sea verdadera. <br>
El bucle <b><i>while</i></b> no se ejecuta un número específico de veces, pero comprueba después de cada iteración si la condición sigue siendo verdadera. <br>
La condición no tiene que ser un contador; podría ser el estado de una operación o cualquier condición que se evalúe como verdadera o falsa. <br>
Con la declaración <b><i>break</i></b> se puede detener el ciclo incluso si la condición sigue siendo verdadera. <br>
Con la declaración <b><i>continue</i></b> se puede detener la iteración actual y continuar con la siguiente. <br>
La sintaxis del bucle <b><i>while</i></b> también se puede escribir con una declaración <b><i>endwhile</i></b>.
<h3>Do...while</h3>
El bucle <b><i>do...while</i></b>. recorre un bloque de código una vez y luego repite el bucle siempre que la condición especificada sea verdadera. <br>
En un bucle <b><i>do...while</i></b>, la condición se prueba DESPUÉS de ejecutar las declaraciones dentro del bucle. Esto significa que el bucle <b><i>do...while</i></b> ejecutará sus declaraciones al menos una vez, incluso si la condición es falsa. <br>
Con la declaración <b><i>break</i></b> se puede detener el ciclo incluso si la condición sigue siendo verdadera. <br>
Con la declaración <b><i>continue</i></b> se puede detener la iteración actual y continuar con la siguiente.
<h3>For</h3>
El bucle <b><i>for</i></b> recorre un bloque de código un número específico de veces. <br>
El bucle <b><i>for</i></b> se utiliza cuando sabes cuántas veces debe ejecutarse el script. <br>
Sintaxis:
<pre>
for (Expresión1, Expresión2, Expresión3) {
  // Código
}
</pre>
Así es como funciona:
<ul>
    <li><b>Expresión1</b> se evalúa una vez.</li>
    <li><b>Expresión2</b> se evalúa antes de cada iteración.</li>
    <li><b>Expresión3</b> se evalúa después de cada iteración.</li>
</ul>
Con la declaración <b><i>break</i></b> se puede detener el ciclo incluso si la condición sigue siendo verdadera. <br>
Con la declaración <b><i>continue</i></b> se puede detener la iteración actual y continuar con la siguiente.
<h3>Foreach</h3>
El bucle <b><i>foreach</i></b> recorre un bloque de código para cada elemento de una matriz o cada propiedad de un objeto. <br>
El uso más común del bucle <b><i>foreach</i></b> es recorrer los elementos de una matriz. <br>
Para cada iteración del bucle, el valor del elemento de la matriz actual se asigna a la variable $Variable121. La iteración continúa hasta llegar al último elemento de la matriz. <br>
La matriz anterior es una matriz indexada , donde el primer elemento tiene la clave 0, el segundo tiene la clave 1, y así sucesivamente. <br>
Las matrices asociativas son diferentes, las matrices asociativas usan claves con nombre que se les asigna y, al recorrer matrices asociativas, es posible que desee conservar la clave y el valor. <br>
Esto se puede hacer especificando tanto la clave como el valor en la definición <b><i>foreach</i></b>. <br>
Con la declaración <b><i>break</i></b> se puede detener el ciclo incluso si la condición sigue siendo verdadera. <br>
Con la declaración <b><i>continue</i></b> se puede detener la iteración actual y continuar con la siguiente. <br>
Al recorrer los elementos de una matriz, cualquier cambio realizado en el elemento de la matriz, de forma predeterminada, NO afectará la matriz original. <br>
PERO, al usar el carácter <b><i>&</i></b> en la declaración <b><i>foreach</i></b>, el elemento de la matriz se asigna por referencia, lo que da como resultado que cualquier cambio realizado en el elemento de la matriz también se realizará en la matriz original. <br>
La sintaxis <b><i>foreach</i></b> del bucle también se puede escribir con una declaración <b><i>endforeach</i></b>.
<hr>
<h3>Funciones PHP</h3>
El verdadero poder de PHP proviene de sus funciones. <br>
PHP tiene más de 1000 funciones integradas, y además permite crear funciones propias. <br>
Una función es un bloque de instrucciones que se pueden usar repetidamente en un programa. <br>
Una función no se ejecutará automáticamente cuando se cargue una página. <br>
Una función se ejecutará mediante una llamada a la función. <br>
Una declaración de un función definida por el usuario comienza con la palabra clave <b><i>function</i></b>, seguido del nombre de la función. <br>
El nombre de una función debe comenzar con una letra o un guión bajo. Los nombres de función NO distinguen entre mayúsculas y minúsculas. <br>
Para llamar a la función, basta con escribir su nombre seguido de paréntesis. <br>
La información se puede pasar a las funciones a través de argumentos. Un argumento es solo como una variable. <br>
Los argumentos se especifican después del nombre de la función, entre paréntesis. Se puede agregar tantos argumentos como se desee, simplemente separandolos con una coma. <br>
En el ejemplo siguiente se muestra cómo utilizar un parámetro predeterminado. Si llamamos a la función sin argumentos toma el valor predeterminado como argumento. <br>
Para permitir que una función devuelva un valor, se usa la instrucción <b><i>return</i></b>. <br>
En PHP, los argumentos generalmente se pasan por valor, lo que significa que una copia del valor es utilizado en la función y la variable que se pasó a la función no se puede cambiar. <br>
Cuando se pasa un argumento de función por referencia, los cambios en el argumento también cambian la variable que se pasó. Para convertir un argumento de función en una referencia, se utiliza el operador <b><i>&</i></b>. <br>
Al utilizar el operador <b><i>...</i></b> delante del parámetro de función, la función acepta un número desconocido de argumentos. Esto también se denomina función variádica. <br>
El argumento de la función variádica se convierte en una matriz. <br>
En los ejemplos anteriores, se observa que no se tuvo que decirle a PHP qué tipo de datos es la variable. <br>
PHP asocia automáticamente un tipo de datos a la variable, dependiendo de su valor. Dado que los tipos de datos no se establecen en un sentido estricto, se puede hacer cosas como agregar una cadena a un entero sin causar un error. <br>
En PHP 7, se añadieron declaraciones de tipos. Esto da la opción de especificar el tipo de dato esperado al declarar una función, y al agregar la declaración, arrojará un mensaje "Fatal Error" si el tipo de datos no coincide. <br>
Para especificar <b><i>strict</i></b>, se necesita establecer <b><i>declare(strict_types=1);</i></b>. Esto debe estar en la primera línea del archivo PHP.
<hr>
<h3>Array PHP</h3>
Una matriz almacena varios valores en una sola variable. <br>
Una matriz es una variable especial que puede contener muchos valores bajo un solo nombre, y se puede acceder a los valores haciendo referencia a un número de índice o nombre.
<h3>Tipos de matrices PHP</h3>
En PHP, hay tres tipos de arrays:
<ul>
    <li><b>Matrices indexadas</b>: matrices con un índice numérico.</li>
    <li><b>Matrices asociativas</b>: matrices con claves con nombre.</li>
    <li><b>Matrices multidimensionales</b>: matrices que contienen una o más matrices.</li>
</ul>
Los elementos de matriz pueden ser de cualquier tipo de datos. <br>
Los más comunes son las cadenas y los números (int, float), pero los elementos de la matriz también pueden ser objetos, funciones o incluso matrices. <br>
Se puede tener diferentes tipos de datos en la misma matriz. <br>
La verdadera fuerza de las matrices PHP son las funciones de matriz incorporadas, como la función para contar elementos de matriz <b><i>count()</i></b>.
<h3>Matrices indexadas de PHP</h3>
En las matrices indexadas, cada elemento tiene un número de índice. <br>
De forma predeterminada, el primer elemento tiene el índice 0, el segundo elemento tiene el elemento 1, etc. <br>
Para acceder a un elemento de la matriz, se puede consultar el número de índice. <br>
Para cambiar el valor de un elemento de matriz, se utiliza el número de índice. <br>
Para recorrer e imprimir todos los valores de una matriz indexada, se puede usar un bucle <b><i>foreach</i></b>. <br>
La clave de una matriz indexada es un número, por defecto el primer elemento es 0 y el segundo es 1, etc., pero hay excepciones. <br>
Los nuevos elementos obtienen el siguiente número de índice, es decir, uno más alto que el índice existente más alto. <br>
<b><i>array_push()</i></b> añade un nuevo valor a un array.
<h3>Matrices asociativas de PHP</h3>
Las matrices asociativas son matrices que utilizan claves con nombre que se les asignan. <br>
Para acceder a un elemento de matriz, se puede consultar el nombre de la clave. <br>
Para cambiar el valor de un elemento de matriz, se usa el nombre de clave. <br>
Para recorrer e imprimir todos los valores de una matriz asociativa, se puede usar un bucle <b><i>foreach</i></b>.
<h3>Crear matriz</h3>
Se puede crear matrices mediante la función <b><i>array()</i></b>:
<pre>
$cars = array("Volvo", "BMW", "Toyota");

</pre>
También se puede usar una sintaxis más corta usando los corchetes <b><i>[ ]</i></b>:
<pre>
$cars = ["Volvo", "BMW", "Toyota"];

</pre>
Los saltos de línea no son importantes, por lo que una declaración de matriz puede abarcar varias líneas:
<pre>
$cars = [
  "Volvo",
  "BMW",
  "Toyota"
];

</pre>
Al crear matrices indexadas, las claves se dan automáticamente, comenzando en 0 y aumentando en 1 para cada elemento, Por lo tanto, la matriz anterior también podría crearse con claves:
<pre>
$cars = [
  0 => "Volvo",
  1 => "BMW",
  2 =>"Toyota"
];

</pre>
Como se puede ver, las matrices indexadas son lo mismo que las matrices asociativas, pero las matrices asociativas tienen nombres en lugar de números:
<pre>
$myCar = [
  "brand" => "Ford",
  "model" => "Mustang",
  "year" => 1964
];

</pre>
Se puede declarar primero una matriz vacía y agregarle elementos más tarde. <br>
Lo mismo ocurre con las matrices asociativas, se puede declarar primero la matriz y luego agregarle elementos.
<h3>Elemento de matriz de acceso</h3>
Para acceder a un elemento de matriz, se puede consultar el número de índice de las matrices indexadas, y el nombre de clave para las matrices asociativas. <br>
Se puede usar comillas dobles y simples al acceder a una matriz. <br>
Los elementos de matriz pueden ser de cualquier tipo de datos, incluida la función. <br>
Para ejecutar una función de este tipo, se utiliza el número de índice seguido de paréntesis <b><i>()</i></b>. <br>
Se utiliza el nombre de clave cuando la función sea un elemento de una matriz asociativa.
<h3>Actualizar elemento de matriz</h3>
Para actualizar un elemento de matriz existente, se puede consultar el número de índice de las matrices indexadas, y el nombre de clave para las matrices asociativas. <br>
Hay diferentes técnicas que se pueden utilizar al cambiar los valores de los elementos en un bucle <b><i>foreach</i></b>. <br>
Una forma es insertar el carácter en la asignación para asignar el valor del artículo por referencia y, por lo tanto, asegurándose de que cualquier cambio realizado con el elemento de matriz dentro del bucle se realizará en el Matriz original.
<h3>Agregar elemento de matriz</h3>
Para agregar elementos a una matriz existente, puede usar la sintaxis de corchetes <b><i>[]</i></b>. <br>
Para agregar elementos a una matriz asociativa o a una matriz clave-valor, se utiliza corchetes para la clave y se asigna valor con el operador <b><i>=</i></b>. <br>
Para agregar varios elementos a una matriz existente, se usa la función <b><i>array_push()</i></b>. <br>
Para agregar varios elementos a una matriz existente, se puede utilizar el operador <b><i>+=</i></b>.
<h3>Eliminar elemento de matriz</h3>
Para eliminar un elemento existente de una matriz, se puede utilizar la función <b><i>array_splice()</i></b>. <br>
Con la función <b><i>array_splice()</i></b> se especifica el índice (por dónde empezar) y cuántos elementos se desea eliminar. <br>
Después de la eliminación, la matriz se vuelve a indexar automáticamente, a partir del índice 0. <br>
También se puede utilizar la función <b><i>unset()</i></b> para eliminar elementos de matriz existentes. <br>
La función <b><i>unset()</i></b> no reorganiza los índices, lo que significa que después de la eliminación, la matriz ya no contendrá los índices que faltan. <br>
Para eliminar elementos de una matriz asociativa, se puede utilizar la función <b><i>unset()</i></b>. <br>
También se puede utilizar la función <b><i>array_diff()</i></b> para eliminar elementos de un archivo matriz asociativa. <br>
Esta función devuelve una nueva matriz, sin los elementos especificados. <br>
La función <b><i>array_diff</i></b> toma valores como parámetros, y no como claves. <br>
La función <b><i>array_pop()</i></b> elimina el último elemento de una matriz. <br>
La función <b><i>array_shift()</i></b> quita el primer elemento de una matriz.
<h3>Matrices de clasificación de PHP</h3>
Los elementos de una matriz se pueden ordenar en orden alfabético o numérico, descendente o ascendente. <br>
<ul>
    <li><b>sort()</b>: Ordenar matrices en orden ascendente</li>
    <li><b>rsort()</b>: Ordenar matrices en orden descendente</li>
    <li><b>asort()</b>: Ordenar matrices asociativas en orden ascendente, según el valor</li>
    <li><b>ksort()</b>: Ordenar las matrices asociativas en orden ascendente, de acuerdo con la clave</li>
    <li><b>arsort()</b>: Ordenar las matrices asociativas en orden descendente, según el valor</li>
    <li><b>krsort()</b>: Ordenar matrices asociativas en orden descendente, de acuerdo con la clave</li>
</ul>
<h3>Matrices multidimensionales de PHP</h3>
En las páginas anteriores, se a descrito que las matrices que son un lista única de pares clave/valor. <br>
Sin embargo, a veces se desea almacenar valores con más de un llave. Para ello, se dispone de arrays multidimensionales. <br>
Una matriz multidimensional es una matriz que contiene una o más matrices. <br>
PHP soporta matrices multidimensionales que son dos, tres, cuatro, cinco, o más niveles de profundidad. Sin embargo, las matrices de más de tres niveles de profundidad son difíciles de administrar para la mayoría de las personas. <br>
La dimensión de una matriz indica el número de índices que necesita para seleccionar un elemento. <br>
Para una matriz bidimensional, se necesitan dos índices para seleccionar un elemento. <br>
Para una matriz tridimensional, se necesita tres índices para seleccionar un elemento. <br>
Una matriz bidimensional es una matriz de matrices (una matriz tridimensional es una matriz de matrices de matrices).
<hr>
<h3>Variables Globales de PHP - Superglobals</h3>
Algunas variables predefinidas en PHP son "superglobales", lo que significa que siempre accesibles, independientemente del alcance, y puede acceder a ellos desde cualquier función, clase o archivo sin tener que hacer nada especial. <br>
Las variables superglobales de PHP son:
<ul>
    <li>$GLOBALS</li>
    <li>$_SERVER</li>
    <li>$_REQUEST</li>
    <li>$_POST</li>
    <li>$_GET</li>
    <li>$_FILES</li>
    <li>$_ENV</li>
    <li>$_COOKIE</li>
    <li>$_SESSION</li>
</ul>
<h3>PHP $GLOBALS</h3>
<b><i>$GLOBALS</i></b> es una matriz que contiene todas los variables. <br>
Las variables globales son variables a las que se puede acceder desde cualquier ámbito. <br>
Las variables del ámbito más externo son automáticamente variables globales y se pueden usar por cualquier ámbito, por ejemplo, dentro de una función. <br>
Para usar una variable global dentro de una función, se debe definir como global con la palabra clave <b><i>global</i></b>, o hacer referencia a ellos mediante la sintaxis <b><i>$GLOBALS</i></b>. <br>
Esto es diferente de otros lenguajes de programación en los que las variables globales están disponibles sin necesidad de referirse a ellas como globales. <br>
También se puede hacer referencia a variables globales dentro de las funciones definiéndolas como globales con la palabra clave <b><i>global</i></b>. <br>
Las variables creadas en el ámbito más externo son variables globales, ya sea que se creen con la sintaxis o no. <br>
Las variables creadas dentro de una función pertenecen solo a esa función, pero se puede crear variables globales dentro de una función Mediante el uso de la sintaxis <b><i>$GLOBALS</i></b>.
<h3>PHP $_SERVER</h3>
<b><i>$_SERVER</i></b> es una variable súper global de PHP que contiene información sobre encabezados, rutas de acceso y ubicaciones de scripts.
<h3>$_REQUEST</h3>
<b><i>$_REQUEST</i></b> es una variable súper global de PHP que contiene los datos del formulario enviado y todos los datos de las cookies. <br>
En otras palabras, <b><i>$_REQUEST</i></b> es una matriz que contiene datos de <b><i>$_GET</i></b>, <b><i>$_POST</i></b> y <b><i>$_COOKIE</i></b>. <br>
Se puede acceder a estos datos con la palabra clave <b><i>$_REQUEST</i></b> seguida del nombre del campo del formulario, o cookie. <br>
Las solicitudes POST suelen ser datos enviados desde un formulario HTML. <br>
Cuando un usuario hace clic en el botón de submit, los datos del formulario se envían a un archivo PHP especificado en el atributo <b><i>action</i></b> de la etiqueta <b><i>< form ></i></b>. <br>
En el fichero de acciones se puede usar la variable <b><i>$_REQUEST</i></b> para recopilar el valor del campo de entrada. <br>
La solicitud GET puede ser envíos de formularios como en el ejemplo anterior, con el atributo <b><i>method</i></b> del elemento HTML <b><i>< form ></i></b> establecido en <b><i>GET</i></b>. <br>
Las solicitudes <b><i>GET</i></b> también pueden ser datos de una cadena de consulta (información agregada después de una dirección URL).
<h3>PHP $_POST</h3>
<b><i>$_POST</i></b> contiene una matriz de variables recibidas a través del método HTTP POST. <br>
Hay dos formas principales de enviar variables a través del método HTTP Post:
<ul>
    <li>Formularios HTML.</li>
    <li>Solicitudes HTTP de JavaScript.</li>
</ul>
Un formulario HTML envía información a través del método HTTP POST si: El atributo <b><i>method</i></b> del formulario se establece en <b><i>"POST"</i></b>. <br>
Cuando un usuario hace clic en el botón Enviar, los datos del formulario se envían a un archivo PHP especificado en el atributo <b><i>action</i></b> de la etiqueta <b><i>< form ></i></b>. <br>
En el fichero de acciones se puede usar la variable <b><i>$_POST</i></b> para recopilar el valor del campo de entrada. <br>
Al enviar una solicitud HTTP en JavaScript, se puede especificar que el método HTTP sea POST.
<hr>
<h3>Expresiones regulares de PHP</h3>
Una expresión regular es una secuencia de caracteres que forma un patrón de búsqueda. Al buscar datos en un texto, puede utilizar este patrón de búsqueda para describir lo que desea están buscando. <br>
Una expresión regular puede ser un solo carácter o un patrón más complicado. <br>
Las expresiones regulares se pueden usar para realizar todo tipo de búsqueda de texto y reemplazo de texto para operaciones. <br>
En PHP, las expresiones regulares son cadenas compuestas por delimitadores, un patrón y opcionales Modificadores.
<pre>
$exp = "/w3schools/i";

</pre>
En el ejemplo anterior, <b><i>/</i></b> es el delimitador, <b><i>w3schools</i></b> es el patrón que se está buscando, y <b><i>i</i></b> es un modificador que hace que la búsqueda no distinga entre mayúsculas y minúsculas. <br>
El delimitador puede ser cualquier carácter que no sea una letra, un número, una barra diagonal inversa o un espacio. El delimitador más común es la barra diagonal (/), pero cuando el patrón lo contiene es conveniente elegir otros delimitadores como <b><i># o ~.</i></b>. <br>
PHP proporciona una variedad de funciones que permiten usar expresiones regulares. <br>
La función <b><i>preg_match()</i></b> dirá si una cadena contiene coincidencias de un patrón. <br>
La función <b><i>preg_match_all()</i></b> dirá cuántas coincidencias se encontraron para un patrón en un cuerda. <br>
La función <b><i>preg_replace()</i></b> reemplazará todas las coincidencias del patrón en una cadena con otra cadena. <br>
Si la expresión necesita buscar uno de los caracteres especiales, se puede usar un barra invertida ( \ ) para escaparlos. <br>
Se puede utilizar paréntesis para aplicar cuantificadores a patrones completos. También se pueden utilizar para seleccionar las partes del patrón que se van a utilizar como coincidencia.
<hr>
<h3>Formularios PHP</h3>
Los superglobales PHP <b><i>$_GET</i></b> y <b><i>$_POST</i></b> se utilizan para recopilar datos de formularios. <br>
Cuando el usuario rellena el formulario y hace clic en el botón enviar, se envían los datos del formulario para procesar a un archivo PHP. Los datos del formulario se envían con el método HTTP POST. <br>
Esta página no contiene ninguna validación de formulario, solo muestra cómo se puede enviar y recuperar datos de formularios. <br>
Sin embargo, en las siguientes páginas se mostrará cómo procesar formularios PHP teniendo en cuenta la seguridad. La validación adecuada de los datos del formulario es importante para proteger un formulario de piratas informáticos y spammers!
<h3>Get y Post</h3>
Tanto <b><i>GET</i></b> como <b><i>POST</i></b> crean una matriz (por ejemplo, array( clave1 => valor1, clave2 => valor2, clave3 => valor3, ...)). Esta matriz contiene pares clave/valor, donde Las claves son los nombres de los controles de formulario y los valores son los datos de entrada del usuario. <br>
Tanto GET como POST se tratan como <b><i>$_GET</i></b> y <b><i>$_POST</i></b>. Estos son superglobales, lo que significa que siempre son accesibles, independientemente del alcance, y se puede acceder a ellos desde cualquier función, clase o archivo sin tener que hacer nada especial. <br>
<b><i>$_GET</i></b> es una matriz de variables que se pasan al script actual a través de los parámetros de URL. <br>
<b><i>$_POST</i></b> es una matriz de variables que se pasan al script actual a través del método HTTP POST.
<h3>¿Cuándo usar GET?</h3>
La información enviada desde un formulario con el método GET es visible para todos (todos los Los nombres y valores de las variables se muestran en la URL). GET también tiene límites en la cantidad de información a enviar. La limitación es de unos 2000 caracteres. Sin embargo debido a que las variables se muestran en la URL, es posible marcar el página. Esto puede ser útil en algunos casos. <br>
GET se puede utilizar para enviar datos no confidenciales. <br>
¡GET NUNCA debe usarse para enviar contraseñas u otra información confidencial!
<h3>¿Cuándo usar POST?</h3>
La información enviada desde un formulario con el método POST es invisible para los demás (todos los nombres/valores están incrustados en el cuerpo de la solicitud HTTP) y no tiene límites en la cantidad de información a enviar. <br>
Además, POST admite funciones avanzadas, como el soporte para varias partes. entrada binaria mientras se cargan archivos en el servidor. <br>
Sin embargo, debido a que las variables no se muestran en la URL, no es posible marcar la página.
<h3>Validación de formularios PHP</h3>
Cuando se envía el formulario, los datos del formulario se envían con method="post".
<h3>¿Qué es la función htmlspecialchars()?</h3>
La función <b><i>htmlspecialchars()</i></b> convierte los caracteres especiales en entidades HTML. Esto significa que reemplazará los caracteres HTML como <b><i><></i></b> y <b><i>&lt</i></b> con <b><i>;</i></b> y <b><i>&gt;</i></b>. Esto evita que los atacantes exploten el código inyectando código HTML o Javascript (Ataques de secuencias de comandos entre sitios) en formularios.
<h3>¿Qué es la variable $_SERVER["PHP_SELF"]?</h3>
El <b><i>$_SERVER["PHP_SELF"]</i></b> es una variable súper global que devuelve el nombre de archivo de la variable Script que se está ejecutando actualmente. <br>
Por lo tanto, <b><i>$_SERVER["PHP_SELF"]</i></b> envía los datos del formulario enviado a la propia página, en lugar de saltar a una página diferente. De esta manera, el usuario recibirá mensajes de error en la misma página que el formulario. <br>
¡La variable <b><i>$_SERVER["PHP_SELF"]</i></b> puede ser utilizada por piratas informáticos! <br>
Si se utiliza <b><i>PHP_SELF</i></b> en la página, un usuario puede introducir una barra diagonal y, a continuación, algunos comandos de Cross Site Scripting (XSS) para ejecutar. <br>
Cross-site scripting (XSS) es un tipo de vulnerabilidad de seguridad informática normalmente se encuentra en las aplicaciones web. XSS permite a los atacantes inyectar en el lado del cliente script en páginas web vistas por otros usuarios. <br>
Supongamos que tenemos el siguiente formulario en una página llamada "test_form.php":
<pre>
< form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>" >
</pre>
Ahora, si un usuario ingresa la URL normal en la barra de direcciones como "http://www.example.com/test_form.php", el código anterior se traducirá a:
<pre>
< form method="post" action="test_form.php" >
</pre>
Hasta ahora, bien. <br>
Sin embargo, se debe tener en cuenta que un usuario escribe la siguiente dirección URL en la barra de direcciones:
<pre>
http://www.example.com/test_form.php/%22%3E%3Cscript%3Ealert('hacked')%3C/script%3E
</pre>
En este caso, el código anterior se traducirá a:
<pre>
< form method="post" action="test_form.php/" >< script >alert('hacked')< /script >
</pre>
Este código agrega una etiqueta de script y un comando de alerta. Y cuando <b><i>PHP_SELF.</i></b> se carga la página, se ejecutará el código JavaScript (el usuario verá un cuadro de alerta). Esto es solo un simple e inofensivo ejemplo de cómo se puede explotar la variable. <br>
Hay que tener en cuenta que se puede agregar cualquier código JavaScript dentro de la carpeta < script > etiqueta! Un hacker puede redirigir al usuario a un archivo en otro servidor, y ese archivo puede contener código malicioso que puede alterar las variables globales o enviar el formulario a otro dirección para guardar los datos del usuario, por ejemplo.
<h3>¿Cómo evitar los exploits de $_SERVER["PHP_SELF"]?</h3>
<b><i>$_SERVER["PHP_SELF"]</i></b> Los exploits se pueden evitar mediante el uso de la función <b><i>htmlspecialchars()</i></b>. <br>
El código del formulario debería tener este aspecto:
<pre>
< form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" >
</pre>
La función <b><i>htmlspecialchars()</i></b> convierte caracteres especiales en entidades HTML. Ahora, si el usuario intenta explotar la variable PHP_SELF, dará como resultado el siguiente resultado:
<pre>
< form method="post" action="test_form.php/& quot;& gt;& lt;script& gt;alert('hacked')& lt;/script& gt;" >
</pre>
¡El intento de explotación falla y no se produce ningún daño!
<h3>Validar datos de formularios con PHP</h3>
Lo primero que se hace será pasar todas las variables a través de la función de PHP <b><i>htmlspecialchars()</i></b>. <br>
Cuando se usa la función <b><i>htmlspecialchars()</i></b>; A continuación, si un usuario intenta enviar lo siguiente en un campo de texto:
<pre>
< script >location.href('http://www.hacked.com')< /script >
</pre>
Esto no se ejecutaría, porque se guardaría como código de escape HTML, así:
<pre>
& lt;script& gt;location.href('http://www.hacked.com')& lt;/script& gt;
</pre>
El código ahora es seguro para mostrarse en una página o dentro de un correo electrónico. <br>
También se hacen dos cosas más cuando el usuario envíe el formulario:
<ul>
    <li>Eliminar caracteres innecesarios (espacio extra, tabulación, nueva línea) de los datos de entrada del usuario (con la función PHP)<b><i>trim()</i></b>.</li>
    <li>Eliminar las barras invertidas de los datos de entrada del usuario (con la función PHP)<b><i>stripslashes()</i></b>.</li>
</ul>
El siguiente paso es crear una función que haga todas las comprobaciones por nosotros (lo cual es mucho más conveniente que escribir el mismo código una y otra vez). <br>
Se nombra la función <b><i>test_input()</i></b>. <br>
Ahora, se puede comprobar cada variable con la función <b><i>test_input()</i></b>, y el script <b><i>$_POST</i></b> se verá así:
<pre>
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
  $email = test_input($_POST["email"]);
  $website = test_input($_POST["website"]);
  $comment = test_input($_POST["comment"]);
  $gender = test_input($_POST["gender"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
</pre>
Se observa que al principio del script, se comprueba si el formulario ha sido enviado mediante <b><i>$_SERVER["REQUEST_METHOD"]</i></b>. Si el es <b><i>REQUEST_METHODPOST</i></b>, entonces el formulario ha sido enviado, y debe ser validado. Si no se ha enviado, omita la validación y se va mostrar un formulario en blanco. <br>
Sin embargo, en el ejemplo anterior, todos los campos de entrada son opcionales. El guión funciona bien incluso si el usuario no ingresa ningún dato. <br>
El siguiente paso es hacer que los campos de entrada sean obligatorios y crear mensajes de error si necesario. <br>
En el siguiente código se ha añadido algunas variables nuevas: <b><i>$nameErr</i></b>, <b><i>$emailErr</i></b>, <b><i>$genderErr</i></b> y <b><i>$websiteErr</i></b>. Estas variables de error contendrán mensajes de error para los campos obligatorios. También se ha agregado una instrucción para cada variable. Ésta comprueba si la variable está vacía (con la función PHP) <b><i>empty()</i></b>. Si está vacío, se almacena un mensaje de error en las diferentes variables de error, y si no está vacío, envía los datos introducidos por el usuario a través de la función. <br>
Luego, en el formulario HTML, se agrega un pequeño script después de cada campo obligatorio, que genera el mensaje de error correcto si es necesario (es decir, si el usuario intenta enviar el formulario sin rellenar los campos obligatorios). <br>
El siguiente paso es validar los datos de entrada, es decir, "¿El campo Nombre contienen solo letras y espacios en blanco?" y "¿El campo de correo electrónico contiene un sintaxis válida de la dirección de correo electrónico?" y, si se rellena, "¿El campo Sitio web contiene una URL válida?". <br>
El siguiente código muestra una forma sencilla de comprobar si el campo de nombre solo contiene letras, guiones, apóstrofes y espacios en blanco. Si el valor del campo name no es válido, almacene Un mensaje de error:
<pre>
$name = test_input($_POST["name"]);
if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {$nameErr = "Only letters and white space allowed";}
</pre>
La función <b><i>preg_match()</i></b> busca un patrón en una cadena, devolviendo true si El patrón existe, y false en caso contrario. <br>
La forma más fácil y segura de comprobar si una dirección de correo electrónico está bien formada es usar la función de PHP <b><i>filter_var()</i></b>. <br>
El siguiente paso es mostrar cómo evitar que el formulario vacíe toda la entrada cuando el usuario envía el formulario.
<h3>Fecha y hora de PHP</h3>
La función PHP <b><i>date()</i></b> se utiliza para formatear una fecha y/o una hora. <br>
Sintaxis:
<pre>
date(formato,timestamp)
</pre>
El parámetro de formato requerido de la función <b><i>date()</i></b> especifica cómo formatear la fecha (o tiempo). <br>
Estos son algunos caracteres que se usan comúnmente para las fechas:
<ul>
    <li><b>d</b>: Representa el día del mes (01 al 31).</li>
    <li><b>m</b>: Representa un mes (01 a 12).</li>
    <li><b>Y</b>: representa un año (en cuatro dígitos).</li>
    <li><b>l</b>('L' minúscula): Representa el día de la semana.</li>
</ul>
También se pueden insertar otros caracteres, como "/", "." o "-" para agregar formato adicional. <br>
Estos son algunos de los caracteres que se usan comúnmente para los tiempos:
<ul>
    <li><b>H</b>: Formato de 24 horas de una hora (00 a 23).</li>
    <li><b>h</b>: Formato de 12 horas de una hora con ceros a la izquierda (01 a 12).</li>
    <li><b>i</b>: Minutos con ceros a la izquierda (00 a 59).</li>
    <li><b>s</b>: Segundos con ceros a la izquierda (00 a 59).</li>
    <li><b>a</b>: Ante meridiem minúscula y Post meridiem (am o pm).</li>
</ul>
Si la hora que se recibio del código no es correcta, probablemente se deba a que el servidor está en otro país o configurado para una zona horaria diferente. <br>
Por lo tanto, si se necesita que el tiempo sea correcto de acuerdo con un ubicación, se puede establecer la zona horaria que se desea utilizar. <br>
El parámetro opcional <b><i>timestamp</i></b> de la función <b><i>date()</i></b> especifica una marca de tiempo. Si omitido, se usará la fecha y hora actuales (como en el ejemplos anteriores).
<hr>
<h3>PHP include</h3>
La instrucción <b><i>include</i></b>(o <b><i>require</i></b>) toma todo el texto/código/marcado que existe en el archivo especificado y lo copia en archivo que utiliza la instrucción <b><i>include</i></b>. <br>
Incluir archivos es muy útil cuando se quiere incluir el mismo PHP, HTML, o texto en varias páginas de un sitio web. <br>
Es posible insertar el contenido de un archivo PHP en otro archivo PHP (antes de que el archivo server lo ejecuta), con la instrucción <b><i>include</i></b> o <b><i>require</i></b>. <br>
Las instrucciones <b><i>include</i></b> y <b><i>require</i></b> son idénticas, excepto en caso de error:
<dl>
    <dt>require</dt>
        <dd>producirá un error fatal (E_COMPILE_ERROR) y detendrá el script</dd>
    <dt>include</dt>
        <dd>solo producirá una advertencia (E_WARNING) y el script continuará</dd>
</dl>
Por lo tanto, si se desea que la ejecución continúe y muestre a los usuarios la salida, incluso si el <b><i>include</i></b> falla, se utiliza la instrucción <b><i>include</i></b>. De lo contrario, en el caso de FrameWork, CMS o un codificación compleja de aplicaciones PHP, se utiliza siempre la instrucción <b><i>require</i></b> para incluir un archivo de clave en el archivo flujo de ejecución. Esto ayudará a evitar comprometer la seguridad de la aplicación e integridad, en caso de que falte accidentalmente un archivo clave. <br>
La inclusión de archivos ahorra mucho trabajo. Esto significa que se puede crear un archivo de encabezado, pie de página o menú estándar para todas las páginas web. Luego, cuando sea necesario actualizar el encabezado, solo se tiene que actualizar el archivo de inclusión de encabezado. <br>
Sintaxis
<pre>
include 'filename';
</pre>
<pre>
require 'filename';
</pre>
Supongamos que se tiene un archivo de pie de página estándar llamado "footer.php" <br>
Supongamos que se tiene un archivo llamado "vars.php", con algunas variables definidas. <br>
Si se incluye el fichero "vars.php", las variables se pueden utilizar en el fichero de llamada. <br>
La instrucción <b><i>require</i></b> también se utiliza para incluir un archivo en el código PHP. <br>
Sin embargo, hay una gran diferencia entre incluir y requerir; Cuando un archivo se incluye con la declaración <b><i>include</i></b> y PHP no puede encontrarlo, el script continuará ejecutando. <br>
Si se hace el mismo ejemplo usando la instrucción <b><i>require</i></b>, el método no se ejecutará porque la ejecución del script muere después de que la instrucción <b><i>require</i></b> devuelva un error irrecuperable.
<hr>
<h3>Manejo de archivos PHP</h3>
El manejo de archivos es una parte importante de cualquier aplicación web. A menudo es necesario abrir y procesar un archivo para diferentes tareas. <br>
PHP tiene varias funciones para crear, leer, cargar y editar archivos.
<h3>Función readfile() de PHP</h3>
La función <b><i>readfile()</i></b> lee un archivo y lo escribe en el búfer de salida. <br>
La función <b><i>readfile()</i></b> es útil si todo lo que se desea hacer es abrir un archivo y leer su contenido.
<h3>Archivo PHP Abrir/Leer/Cerrar</h3>
Un mejor método para abrir archivos es con la función <b><i>fopen()</i></b>. Esta función ofrece más que la función <b><i>readfile()</i></b>. <br>
El primer parámetro de <b><i>fopen()</i></b> contiene el nombre del archivo que se va a abrir y el segundo parámetro especifica en qué modo se debe abrir el archivo. El siguiente ejemplo también genera un mensaje si la función fopen() no puede abrir el archivo especificado. <br>
<ul>
    <li><b>r</b> Abra un archivo de solo lectura. El puntero de archivo comienza al principio del archivo</li>
    <li><b>w</b> Abra un archivo solo para escritura. Borra el contenido del archivo o crea un nuevo archivo si no existe. El puntero de archivo comienza al principio del archivo</li>
    <li><b>a</b> Abra un archivo solo para escritura. Se conservan los datos existentes en el archivo. El puntero de archivo comienza al final del archivo. Crea un nuevo archivo si el archivo no existe</li>
    <li><b>x</b> Crea un nuevo archivo solo para escritura. Devuelve FALSE y un error si el archivo ya existe</li>
    <li><b>r+</b> Abra un archivo para lectura y escritura. El puntero de archivo comienza al principio del archivo</li>
    <li><b>w+</b> Abra un archivo para lectura y escritura. Borra el contenido del archivo o crea un nuevo archivo si no existe. El puntero de archivo comienza al principio del archivo</li>
    <li><b>a+</b> Abra un archivo para lectura y escritura. Se conservan los datos existentes en el archivo. El puntero de archivo comienza al final del archivo. Crea un nuevo archivo si el archivo no existe</li>
    <li><b>x+</b> Crea un nuevo archivo de lectura/escritura. Devuelve FALSE y un error si el archivo ya existe</li>
</ul>
La función <b><i>fread()</i></b> lee de un archivo abierto. <br>
El primer parámetro de <b><i>fread()</i></b> contiene el nombre del archivo que se va a leer y el segundo parámetro especifica el número máximo de bytes que se van a leer. <br>
El siguiente código PHP lee el archivo "webdictionary.txt" hasta el final:
<pre>
fread($myfile,filesize("webdictionary.txt"));
</pre>
La función <b><i>fclose()</i></b> se utiliza para cerrar un archivo abierto. <br>
Es una buena práctica de programación cerrar todos los archivos después de haber terminado con ellos. <br>
<b><i>fclose()</i></b> requiere el nombre del archivo (o una variable que contenga el filename) que se quiere cerrar. <br>
La función <b><i>fgets()</i></b> se utiliza para leer una sola línea de un archivo. <br>
La función <b><i>feof()</i></b> comprueba si se ha alcanzado el "fin de archivo" (EOF). <br>
La función <b><i>feof()</i></b> es útil para recorrer datos de longitud desconocida. <br>
La función <b><i>fgetc()</i></b> se utiliza para leer un solo carácter de un archivo.
<h3>Creación/escritura de archivos PHP</h3>
La función <b><i>fopen()</i></b> también se utiliza para crear un archivo. Tal vez un poco confuso, pero en PHP, se crea un archivo usando el mismo función utilizada para abrir archivos. <br>
Si se utiliza en un archivo que no exista, lo creará, dado que el archivo se abre para escribir (w) o anexando la letra a. <br>
El archivo será creado en el mismo directorio donde reside el código PHP. <br>
La función <b><i>fwrite()</i></b> se utiliza para escribir en un archivo. <br>
El primer parámetro de <b><i>fwrite()</i></b> contiene el nombre del archivo en el que se va a escribir y el segundo parámetro es la cadena que se va a escribir. <br>
Se puede anexar datos a un archivo utilizando el modo "a". El modo "a" se añade texto al final del archivo, mientras que el modo "w" anula (y borra) el antiguo contenido del archivo.
<h3>Carga de archivos PHP</h3>
Con PHP, es fácil subir archivos al servidor. <br>
Sin embargo, con la facilidad viene el peligro, así que siempre hay que tener cuidado cuando Se permite la carga de archivos!
<h3>Configurar el archivo "php.ini"</h3>
En primer lugar, hay que asegurarse de que PHP está configurado para permitir la carga de archivos. <br>
En el archivo "php.ini", se busca la directiva <b><i>file_uploads</i></b> y se configura en activado. <br>
Algunas reglas a seguir para el formulario HTML anterior:
<ul>
    <li>Asegurarse de que el formulario use method="post"</li>
    <li>El formulario también necesita el siguiente atributo: enctype="multipart/form-data". Especifica qué tipo de contenido se va a utilizar al enviar el formulario.</li>
</ul>
Sin los requisitos anteriores, la carga de archivos no funcionará. <br>
Otras cosas a tener en cuenta:
<ul>
    <li>El atributo type="file" de la etiqueta < input > muestra el campo de entrada como un control de selección de archivo, con un botón "Examinar" junto al control de entrada</li>
</ul>
Explicación del script PHP:
<ul>
    <li><b>$target_dir = "uploads/"</b> especifica el directorio donde se va a colocar el archivo.</li>
    <li><b>$target_file</b> especifica la ruta del archivo que se va a cargar.</li>
    <li><b>$uploadOk=1</b> aún no se usa (se usará más adelante).</li>
    <li><b>$imageFileType</b> contiene la extensión del archivo (en minúsculas).</li>
</ul>
A continuación, se verifica si el archivo de imagen es una imagen real o una imagen falsa. <br>
Ahora se pueden agregar algunas restricciones.
En primer lugar, comprobaremos si el archivo ya existe en la carpeta "uploads". Si Si lo hace, se muestra un mensaje de error y $uploadOk se establece en 0.
<h3>Cookies PHP</h3>
Una cookie se utiliza a menudo para identificar a un usuario. Una cookie es un pequeño archivo que el servidor incrusta en el equipo del usuario. Cada vez que el mismo equipo solicita una página con un navegador, también enviará la cookie. Con PHP, se puede crear y recuperar los valores de las cookies. <br>
Se crea una cookie con la función <b><i>setcookie()</i></b>. <br>
Sintaxis:
<pre>
setcookie(name, value, expire, path, domain, secure, httponly);
</pre>
Solo se requiere el parámetro name. Todos los demás parámetros son opcional. <br>
La función <b><i>setcookie()</i></b> debe aparecer ANTES de la etiqueta < html >. <br>
Para modificar una cookie, basta con configurar (de nuevo) la cookie utilizando la función <b><i>setcookie()</i></b>. <br>
Para eliminar una cookie, se utiliza la función con fecha de caducidad en el pasado.
<hr>
<h3>Sesiones PHP</h3>
Una sesión es una forma de almacenar información (en variables) que se utilizará en varias páginas. <br>
A diferencia de una cookie, la información no se almacena en el ordenador del usuario. <br>
Cuando se trabaja con una aplicación, se abre, se realizan algunos cambios y se luego lo cierras. Esto es muy parecido a una sesión. La computadora sabe quién eres. Sabe cuándo inicias la aplicación y cuándo terminas. Pero en Internet Hay un problema: el servidor web no sabe quién eres ni qué haces, porque la dirección HTTP no mantiene el estado. <br>
Las variables de sesión resuelven este problema almacenando información del usuario para ser utilizado en varias páginas (por ejemplo, nombre de usuario, color favorito, etc.). Por De forma predeterminada, las variables de sesión duran hasta que el usuario cierra el navegador. <br>
Así que; Las variables de sesión contienen información sobre un solo usuario y están disponibles para todas las páginas de una aplicación. <br>
Se inicia una sesión con la función <b><i>session_start()</i></b>. <br>
Las variables de sesión se establecen con la variable global de PHP <b><i>$_SESSION</i></b>. <br>
Se debe tener en cuenta que las variables de sesión no se pasan individualmente a cada nueva página, en su lugar, se recuperan de la sesión que se abrió al principio de cada página. <br>
Se debe tener en cuenta también que todos los valores de las variables de sesión se almacenan en la variable global $_SESSION. <br>
La mayoría de las sesiones establecen una clave de usuario activada el ordenador del usuario que se parece a esto: <b>765487cf34ert8dede5a562e4f3a7e12</b>. Entonces, cuando la sesión se abre en otra página, escanea la computadora en busca de una clave de usuario. Si hay una coincidencia, accede a esa sesión, si no, inicia una nueva sesión. <br>
Para eliminar todas las variables de sesión globales y destruir la sesión, se utiliza <b><i>session_unset()</i></b> y <b><i>session_destroy()</i></b>.