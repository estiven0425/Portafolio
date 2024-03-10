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