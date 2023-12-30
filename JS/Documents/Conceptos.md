# JS
Esta carpeta contiene un archivo principal con prácticas JS e información útil.
<hr>
<h3>¿Qué es JS?</h3>
JavaScript es el lenguaje de programación más popular del mundo. <br>
JavaScript es uno de los 3 lenguajes que todos los desarrolladores web deben aprender ya que permite programar el comportamiento de la página web. <br>
<h3>Sobre JS</h3>
JavaScript acepta comillas dobles y simples. <br>
JavaScript y Java son lenguajes completamente diferentes, ambos en concepto y diseño. <br>
JavaScript fue inventado por <b>Brendan Eich</b> en 1995 y se convirtió en un estándar ECMA en 1997.
<hr>
<h3>Scripts</h3>
En HTML, el código JavaScript se inserta entre las etiquetas <b><i>< script ></i></b> y <b><i>< / script ></i></b>. <br>
Las etiquetas de JavaScript pueden usar un atributo de tipo:
<pre>
< script type="text/javascript" >
</pre>
El atributo <b><i>type</i></b> no es necesario. <br>
JavaScript es el lenguaje de scripting predeterminado en HTML. <br>
Se puede colocar cualquier número de scripts en un documento HTML. <br>
Los scripts se pueden colocar en el <b><i>< body ></i></b>, o en la sección <b><i>< head ></i></b> de una página HTML, o en ambos. <br>
La colocación de scripts en la parte inferior del elemento <b><i>< body ></i></b> mejora la velocidad, porque la interpretación del guión ralentiza la visualización.
<hr>
<h3>Scripts externo</h3>
Los scripts también se pueden colocar en archivos externos. <br>
Los scripts externos son prácticos cuando se utiliza el mismo código en muchas páginas web diferentes. <br>
Los archivos JavaScript tienen la extensión de archivo .js. <br>
Para usar un script externo, se coloca el nombre del archivo del script en el atributo <b><i>src</i></b> de una etiqueta <b><i>< script ></i></b>. <br>
El script se comportará como si estuviera ubicado exactamente donde se encuentra la etiqueta <b><i>< script ></i></b>. <br>
Los scripts externos no pueden contener etiquetas <b><i>< script ></i></b>. <br>
Para agregar varios archivos de script a una página, se usan varias etiquetas de <b><i>script</i></b>.
<ul>
    <li>Separar HTML y código<li>
    <li>Hacer que HTML y JavaScript sean más fáciles de leer y mantener</li>
    <li>Los archivos JavaScript almacenados en caché pueden acelerar la carga de la página</li>
</ul>
Se puede hacer referencia a un script externo de 3 maneras diferentes:
<ul>
    <li>Con una URL completa (una dirección web completa)</li>
    <li>Con una ruta de archivo (como /js/)</li>
    <li>Sin ningún camino</li>
</ul>
<hr>
<h3>Métodos</h3>
Uno de los muchos métodos HTML de JavaScript es <b><i>getElementById()</i></b>.
Este método busca un elemento HTML por medio de su <b><i>id</i></b>. <br>
JavaScript puede cambiar los valores de los atributos HTML. <br>
JavaScript puede cambiar los estilos HTML (CSS). <br>
La ocultación de elementos HTML se puede hacer cambiando la propiedad <b><i>display</i></b>. <br>
La visualización de elementos HTML se puede hacer cambiando la propiedad <b><i>display</i></b>. <br>
Para acceder a un elemento HTML, JavaScript puede usar el método <b><i>document.getElementById(id)</i></b>.
<hr>
<h3>Funciones y eventos</h3>
Un JavaScript es un bloque de código JavaScript, que se puede ejecutar cuando se llama <b><i>function</i></b>. <br>
Se puede llamar a una función cuando se produce un evento, como cuando el usuario hace clic en un botón.
<hr>
<h3>Salida</h3>
JavaScript puede "mostrar" datos de diferentes maneras:
<dl>
    <dt><b>Escribir en un elemento HTML, usando <i>.innerHTML</i></b>
        <dd>
            El atributo <b><i>id</i></b> define el elemento HTML. <br>
            La propiedad define <b><i>innerHTML</i></b> el contenido HTML. <br>
            Cambiar la propiedad innerHTML de un elemento HTML es una forma común de mostrar datos en HTML.
        </dd>
    </dt>
    <dt><b>Escribir en la salida HTML usando <i>.document.write()</i></b>
        <dd>
            Para fines de prueba, es conveniente utilizar <b><i>document.write()</i></b>. <br>
            <b>El uso de <i>document.write()</i> después de cargar un documento HTML, eliminará todo el HTML existente.</b> <br>
            El método <b><i>document.write()</i></b> solo debe usarse para realizar pruebas.
        </dd>
    </dt>
    <dt><b>Escribir en un cuadro de alerta, usando <i>.window.alert()</i></b>
        <dd>
            Se puede utilizar un cuadro de alerta para mostrar datos. <br>
            Se puede omitir la palabra clave <b><i>window</i></b>. <br>
            En JavaScript, el objeto window es el objeto de ámbito global. <br>
            Esto significa que las variables, las propiedades y los métodos pertenecen de forma predeterminada al objeto de ventana. <br>
            Esto también significa que especificar la palabra clave <b><i>window</i></b> es opcional.
        </dd>
    </dt>
    <dt><b>Escribir en la consola del navegador, usando <i>.console.log()</i></b>
        <dd>
            Para fines de depuración, se puede llamar al método <b><i>console.log()</i></b> en el navegador para mostrar los datos. <br>
        </dd>
    </dt>
</dl>
JavaScript no tiene ningún objeto de impresión ni método de impresión. <br>
No se puede acceder a los dispositivos de salida desde JavaScript. <br>
La única excepción es que se puede llamar al método <b><i>window.print()</i></b> en el navegador para imprimir el contenido de la ventana actual.
<hr>
<h3>Declaraciones</h3>
Un programa de computadora es una lista de "instrucciones" que debe ser "ejecutado" por una computadora. <br>
En un lenguaje de programación, estas instrucciones de programación se denominan sentencias. <br>
Un programa JavaScript es una lista de instrucciones de programación. <br>
Las sentencias JavaScript se componen de <b>valores, operadores, expresiones, palabras clave, y comentarios</b>.
<pre>
document.getElementById("demo").innerHTML = "Hello Dolly.";
</pre>
Esta instrucción le dice al navegador que escriba <b><i>Hello Dolly</i></b> dentro de un elemento HTML con id=<b><i>demo</i></b>.
La mayoría de JavaScript los programas contienen muchas instrucciones de JavaScript. <br>
Las sentencias se ejecutan, una a una, en el mismo orden en que están escritos. <br>
Los puntos y comas separan las instrucciones de JavaScript. <br>
Cuando están separadas por punto y coma, se permiten varias instrucciones en una línea. <br>
<b>Las sentencias finales con punto y coma no son obligatorias, pero se recomiendan encarecidamente.</b> <br>
JavaScript ignora varios espacios se puede agregar espacios en blanco a su script para que sea más legible.
<hr>
<h3>Bloques de código</h3>
Las instrucciones de JavaScript se pueden agrupar en bloques de código, dentro de corchetes. <br>
El propósito de los bloques de código es definir las instrucciones que se ejecutarán conjuntamente. <br>
Un lugar donde se encontrará declaraciones agrupadas en bloques, es en funciones de JavaScript.
<hr>
<h3>Palabras clave</h3>
Las instrucciones de JavaScript a menudo comienzan con una palabra clave para identificar la acción de JavaScript que se va a realizar. <br>
Aquí hay una lista de algunas de las palabras clave que veremos:
<dl>
    <dt><b><i>var</i></b>
        <dd>
            Declara una variable.
        </dd>
    </dt>
    <dt><b><i>let</i></b>
        <dd>
            Declara una variable de bloque.
        </dd>
    </dt>
    <dt><b><i>const</i></b>
        <dd>
            Declara una variable que no se puede cambiar.
        </dd>
    </dt>
    <dt><b><i>if</i></b>
        <dd>
            Marca un bloque de instrucciones que se ejecutarán en una condición.
        </dd>
    </dt>
    <dt><b><i>switch</i></b>
        <dd>
            Marca un bloque de sentencias a ejecutar en diferentes casos.
        </dd>
    </dt>
    <dt><b><i>for</i></b>
        <dd>
            Marca un bloque de instrucciones que se ejecutarán en un bucle.
        </dd>
    </dt>
    <dt><b><i>function</i></b>
        <dd>
            Declara una función.
        </dd>
    </dt>
    <dt><b><i>return</i></b>
        <dd>
            Sale de una función.
        </dd>
    </dt>
    <dt><b><i>try</i></b>
        <dd>
            Implementa el control de errores en un bloque de instrucciones.
        </dd>
    </dt>
</dl>
Las palabras clave de JavaScript son palabras reservadas. Las palabras reservadas no se pueden usar como nombres para variables. <br>
La palabra clave <b><i>let</i></b> le dice al navegador que cree variables. <br>
La palabra clave <b><i>var</i></b> también le dice al navegador que cree variables. <br>

<hr>
<h3>Sintaxis</h3>
La sintaxis de JavaScript es el conjunto de reglas, cómo Los programas JavaScript se construyen:
<pre>
var x; // Creación de variable
x = 1; // Asignación de valor
let y = x + 1; Asignación de valor
</pre>
<h3>Valores</h3>
La sintaxis de JavaScript define dos tipos de valores:
<ul>
    <li>Valores fijos</li>
    <li>Valores de las variables</li>
</ul>
Los valores fijos se denominan <b>literales</b> mientras que los valores de las variables se denominan <b>variables</b>. <br>
Las dos reglas sintácticas más importantes para los valores fijos son:
<ul>
    <li>Los números se escriben con o sin decimales.</li>
    <li>Las cadenas son texto escrito entre comillas dobles o simples.</li>
</ul>
<h3>Variables</h3>
En un lenguaje de programación, las variables se utilizan para almacenar valores de datos. <br>
JavaScript utiliza las palabras clave <b><i>var</i></b>, <b><i>let</i></b> y <b><i>const</i></b> para declarar variables. <br>
Un signo igual se utiliza para asignar valores a las variables. <br>
<h3>Operadores</h3>
JavaScript utiliza operadores aritméticos ( + - * / ) para calcular los valores. <br>
JavaScript utiliza un operador de asignación ( = ) para asignar valores a las variables. <br>
El operador "igual a" se escribe como <b><i>==</i></b> en JavaScript. <br>
<h3>Expresiones</h3>
Una expresión es una combinación de valores, variables y operadores, que se calcula como un valor. <br>
Los valores pueden ser de varios tipos, como números y cadenas. <br>
Las expresiones también pueden contener valores de variable. <br>
<h3>Cometarios</h3>
Los comentarios se insertan con <b>//</b> y no son ejecutados por el script. <br>
Los comentarios de varias líneas se insertan con <b>/* */</b>. <br>
<h3>Identificadores</h3>
Los identificadores son nombres de JavaScript. <br>
Los identificadores se utilizan para nombrar variables, palabras clave y funciones. <br>
odas las variables de JavaScript deben identificarse con nombres únicos. <br>
Los identificadores pueden ser nombres cortos (como x e y) o nombres más descriptivos (edad, suma, volumen total). <br>

Las reglas para los nombres legales son las mismas en la mayoría de los lenguajes de programación. <br>
Un nombre de JavaScript debe comenzar con:
<ul>
    <li>Una letra (A-Z o a-z)</li>
    <li>Un signo de dólar ($)</li>
    <li>O un guión bajo (_)</li>
</ul>
Los caracteres siguientes pueden ser letras, dígitos, guiones bajos o signos de dólar. <br>
Los números no están permitidos como primer carácter en los nombres. <br>
Todos los identificadores de JavaScript distinguen entre mayúsculas y minúsculas. <br>
<b>JavaScript no interpreta LET o Let como la palabra clave let.</b> <br>
<h3>JavaScript y CamelCase</h3>
Históricamente, los programadores han utilizado diferentes formas de unir varias palabras en un nombre de variable. <br>
Estas han sido guiones, guiones bajos o mayúsculas en la primera letra, pero en JS los guiones estan reservados para las restas.
<hr>
<h3>Variables</h3>
Las variables son contenedores para almacenar datos. <br>
Las variables de JavaScript se pueden declarar de 4 maneras:
<ul>
    <li>Automáticamente</li>
    <li>Usando var</li>
    <li>Usando let</li>
    <li>Usando const</li>
</ul>
Las variables no declaradas se declaran automáticamente cuando se utilizan por primera vez. <br>
Se considera una buena práctica de programación declarar siempre las variables antes de su uso. <br>
La palabra clave <b><i>var</i></b> se utilizó en todo el código JavaScript desde 1995 hasta 2015. <br>
Las palabras clave <b><i>let</i></b> y <b><i>const</i></b> se agregaron a JavaScript en 2015. <br>
La palabra clave <b><i>var</i></b> solo debe usarse en código escrito para navegadores más antiguos. <br>
<h3>¿Cuándo usar var, let o const?</h3>
<ul>
    <li>Declarar siempre variables</li>
    <li>Usar <b><i>const</i></b> siempre si el valor no debe cambiarse.</li>
    <li>Utilizar siempre <b><i>const</i></b> si no se debe cambiar el tipo (Matrices y Objetos).</li>
    <li>Usar solo <b><i>const</i></b> si no se puede usar <b><i>let</i></b>.</li>
    <li>Usar solo <b><i>var</i></b> si se DEBE admitir navegadores antiguos.</li>
</ul>
La creación de una variable en JavaScript se denomina "declarar" una variable. <br>
Se declara una variable de JavaScript con la palabra clave <b>var</b> o la siguiente <b>let</b>. <br>
Después de la declaración, la variable no tiene ningún valor <b>(técnicamente es <i>undefined</i>)</b>. <br>
Para asignar un valor a la variable, se utiliza el signo igual. <br>
Se puede declarar muchas variables en una instrucción. <br>
Iniciar la instrucción con <b><i>let</i></b> y separar las variables por <b>coma</b>. <br>
Dado que JavaScript trata un signo de dólar como una letra, los identificadores que contienen <b>$</b> son nombres de variables válidos. <br>
<h3>Tipos de datos</h3>
Las variables de JavaScript pueden contener números como 100 y valores de texto como "John Ciervo". <br>
En programación, los valores de texto se denominan cadenas de texto. <br>
JavaScript puede manejar muchos tipos de datos, pero por ahora. <br>
Si se pone un número entre comillas, se tratará como una cadena de texto. <br>
<h3>Valor undefinido</h3>
En los programas informáticos, las variables a menudo se declaran sin un valor. El valor puede ser algo que tiene que ser calculado, o algo que será proporcionado más tarde, como la entrada del usuario. <br>
Una variable declarada sin un valor tendrá el valor <b><i>undefined</i></b>. <br>
Si se vuelve a declarar una variable de JavaScript declarada con <b><i>var</i></b>, no perderá su valor. <br>
No se puede volver a declarar una variable declarada con <b><i>let</i></b> o <b><i>const</i></b>. <br>
<h3>Artimética</h3>
Al igual que con el álgebra, se puede hacer aritmética con variables de JavaScript, usando operadores como <b>+</b> y <b>=</b>. <br>
También se puede agregar cadenas, pero las cadenas se deben concatenar con <b>+</b>.
<hr>
<h3>Let</h3>
Las variables declaradas con <b><i>let</i></b> tienen un ámbito de bloque. <br>
Las variables declaradas con <b><i>let</i></b> deben declararse antes de su uso. <br>
Las variables declaradas con <b><i>let</i></b> no se pueden volver a declarar en el mismo ámbito. <br>
Antes de ES6 (2015), JavaScript no tenía ámbito de bloque. <br>
JavaScript tenía alcance global y ámbito de función. <br>
ES6 introdujo las dos nuevas palabras clave de JavaScript <b><i>let</i></b> y <b><i>const</i></b>. <br>
Estas dos palabras clave proporcionaron Block Scope en JavaScript:
<pre>
{
    let VariableBolque = 1;
}
</pre>
No se puede acceder a las variables declaradas dentro de un bloque <b>{ }</b> Desde fuera de la cuadra. <br>
Las variables declaradas con <b><i>var</i></b> el siempre tienen alcance global. <br>
Las variables declaradas con la palabra clave <b><i>var</i></b> NO pueden tener ámbito de bloque. <br>
Las variables definidas con <b><i>let</i></b> no se pueden volver a declarar. <br>
No se puede volver a declarar accidentalmente una variable declarada con <b><i>let</i></b>. <br>
Con <b><i>let</i></b>, NO se permite volver a declarar una variable en el mismo bloque. <br>
Las variables definidas con <b><i>var</i></b> se elevan a la parte superior y se puede inicializar en cualquier momento. <br>
Lo que significa que se puede usar la variable antes de que se declare. <br>
Las variables definidas con <b><i>let</i></b> también se elevan a la parte superior del bloque, pero no inicializado. <br>
Lo que significa que el uso de una variable antes de que se declare dará como resultado <b>ReferenceError</b>.
<hr>
<h3>Const</h3>
La palabra clave <b><i>const</i></b> se introdujo en ES6 (2015). <br>
Las variables definidas con <b><i>const</i></b> no se pueden volver a declarar. <br>
Las variables definidas con <b><i>const</i></b> no se pueden reasignar. <br>
Las variables definidas con <b><i>const</i></b> tienen un ámbito de bloque. <br>
Una variable <b><i>const</i></b> no se puede reasignar. <br>
A las variables <b><i>const</i></b> de JavaScript se les debe asignar un valor cuando se declaran. <br>
<h3>¿Cuándo usar const?</h3>
Es bueno declarar siempre una variable con <b><i>const</i></b> cuando se sepa que el valor no debe cambiarse. <br>
Utilizar <b><i>const</i></b> cuando se declara:
<ul>
    <li>Un nuevo Array.</li>
    <li>Un nuevo objeto.</li>
    <li>Una nueva función.</li>
    <li>Un nuevo RegExp.</li>
</ul>
<h3>Objetos constantes y matrices</h3>
La palabra clave es un poco engañosa. <br>
No define un valor constante. Define una referencia constante a un valor. <br>
Debido a esto, NO se puede:
<ul>
    <li>Reasignar un valor constante.</li>
    <li>Reasignar una matriz de constantes.</li>
    <li>Reasignar un objeto constante.</li>
</ul>
Pero se PUEDE:
<ul>
    <li>Cambiar los elementos de la matriz de constantes.</li>
    <li>Cambiar las propiedades de un objeto constante.</li>
</ul>
<hr>
<h3>Operadores de asignación y comparación</h3>
Los operadores de asignación asignan valores a las variables de JavaScript.
<ul>
    <li><b>=</b> Asigan valor</li>
    <li><b>+=</b> Añade valor</li>
    <li><b>-=</b> Resta valor</li>
    <li><b>*=</b> Multiplica valor</li>
    <li><b>/=</b> Divide valor</li>
    <li><b>%=</b> Trae resíduo</li>
    <li><b>**=</b> Potencia valor</li>
</ul>
Los operadores de comparación comparan valores de las variables de JavaScript.
<ul>
    <li><b>==</b> igual a</b>
    <li><b>===</b> valor igual y tipo igual</b>
    <li><b>!=</b> no igual</b>
    <li><b>!==</b> valor no igual o tipo no igual</b>
    <li><b>></b> mayor que</b>
    <li><b><</b> menos que</b>
    <li><b>>=</b> mayor o igual a</b>
    <li><b><=</b> menor o igual a</b>
    <li><b>?</b> operador ternario</b>
</ul>
<h3>Operadores aritméticos</h3>
<ul>
    <li><b>+</b> Adición</li>
    <li><b>-</b> Resta</li>
    <li><b>*</b> Multiplicación</li>
    <li><b>**</b> Exponenciación (ES2016, produce el mismo resultado que <b>Math.pow(x,y)</b>)</li>
    <li><b>/</b> División</li>
    <li><b>%</b> Módulo (Restante)</li>
    <li><b>++</b> Incremento</li>
    <li><b>--</b> Disminución</li>
</ul>
Una operación aritmética típica opera con dos números, los dos números pueden ser literales, variables o expresiones. <br>
La precedencia del operador describe el orden en el que se realizan las operaciones en una expresión aritmética. <br>
<h3>Operadores de asignación</h3>
Operadores de asignación de turnos:
<pre>

Operador   Ejemplo   Igual que
"<<="     x <<= y    x = x << y
">>="     x >>= y    x = x >> y
">>>="    x >>>= y   x = x >>> y
</pre>
Operadores de asignación bit a bit:
<pre>

Operador   Ejemplo   Igual que
"&="      x &= y      x = x & y
"^="      x ^= y      x = x ^ y
"|="      x |= y      x = x | y
</pre>
Operadores de asignación lógica:
<pre>

Operador   Ejemplo   Igual que
"&&="      x &&= y   x = x && (x = y)
"||="      x ||= y   x = x || (x = y)
"??="      x ??= y   x = x ?? (x = y)
</pre>
<dl>
    <dt><b><i>El operador <<=</i></b>
        <dd>
            El operador de asignación de desplazamiento a la izquierda desplaza una variable a la izquierda.
        </dd>
    </dt>
    <dt><b><i>El operador >>=</i></b>
        <dd>
            El operador de asignación de desplazamientos a la derecha desplaza a la derecha una variable (con signo).
        </dd>
    </dt>
    <dt><b><i>El operador >>>=</i></b>
        <dd>
            El operador de asignación de desplazamiento a la derecha sin signo desplaza a la derecha una variable (sin signo).
        </dd>
    </dt>
    <dt><b><i>El operador &=</i></b>
        <dd>
            El operador de asignación  bit AND bit realiza una operación bit AND bit en dos operandos y asigna el resultado a la variable.
        </dd>
    </dt>
    <dt><b><i>El operador |=</i></b>
        <dd>
            El operador de asignación  bit OR bit realiza una operación bit OR bit en dos operandos y asigna el resultado a la variable.
        </dd>
    </dt>
    <dt><b><i>El operador ^=</i></b>
        <dd>
            El operador de asignación XOR bit a bit realiza una operación XOR bit a bit en dos operandos y asigna el resultado a la variable.
        </dd>
    </dt>
    <dt><b><i>El operador &&=</i></b>
        <dd>
            El operador de asignación lógico AND se utiliza entre dos valores. <br>
            Si el primer valor es verdadero, se asigna el segundo valor.
        </dd>
    </dt> 
    <dt><b><i>El ||= Operador</i></b>
        <dd>
            El operador de asignación OR lógico se utiliza entre dos valores. <br>
            Si el primer valor es falso, se asigna el segundo valor.
        </dd>
    </dt>
    <dt><b><i>El operador ??=</i></b>
        <dd>
            El operador de asignación de fusión Nullish se utiliza entre dos valores. <br>
            Si el primer valor es indefinido o nulo, se asigna el segundo valor.
        </dd>
    </dt>
</dl>
<hr>
<h3>Tipos de datos</h3>
JavaScript tiene 8 tipos de datos:
<ul>
    <li>String</li>
    <li>Number</li>
    <li>Bigint</li>
    <li>Boolean</li>
    <li>Undefined</li>
    <li>Null</li>
    <li>Symbol</li>
    <li>Object</li>
</ul>
Los tipos de datos de objeto pueden contener:
<ul>
    <li>Objeto</li>
    <li>Array</li>
    <li>Dato</li>
</ul>
Una variable de JavaScript puede contener cualquier tipo de datos. <br>
En programación, los tipos de datos son un concepto importantes para poder operar con variables, es importante saber algo acerca de el tipo. <br>
JavaScript tiene tipos dinámicos. Esto significa que se puede utilizar la misma variable para mantener diferentes tipos de datos. <br>
Un string (o una cadena de texto) es una serie de caracteres como "John Doe". Las cadenas se escriben entre comillas pero pueden usar comillas simples o dobles. <br>
Todos los números de JavaScript se almacenan como números decimales. Los números se pueden escribir con o sin decimales. <br>
Los números extra grandes o extra pequeños se pueden escribir con Notación (exponencial). <br>
<b>La mayoría de los lenguajes de programación tienen muchos tipos de números: <br>
Números integer (enteros): byte (8 bits), short (16 bits), int (32 bits), long (64 bits) <br>
Números reales (coma flotante): flotante (32 bits), doble (64 bits). <br>
Los números de Javascript son siempre de un tipo: <br>
double (coma flotante de 64 bits). </b> <br>
Todos los números de JavaScript se almacenan en un formato de punto flotante de 64 bits. <br>
<h3>BingInt</h3>
JavaScript <b>BigInt</b> es un nuevo tipo de datos (ES2020) que se puede usar para almacenar valores enteros que son demasiado grandes para ser representados por un número de JavaScript normal. <br>
<h3>Boolean</h3>
Los valores booleanos solo pueden tener dos valores  <b>true</b> o <b>false</b>. <br>
<h3>Array</h3>
Las matrices o arrays de JavaScript se escriben entre corchetes. Los elementos de la matriz están separados por comas. <br>
<h3>Objetos</h3>
Los objetos JavaScript se escriben con llaves.{} <br>
Las propiedades de un objeto se escriben como pares nombre:valor, separados por comas. <br>
<h3>Tipo</h3>
Se puede usar el operador <b><i>typeof</i></b> JavaScript para encontrar el tipo de una variable JavaScript. <br>
El operador devuelve el tipo de una variable o una expresión. <br>
<h3>Idefinido</h3>
En JavaScript, una variable sin un valor, tiene el valor <b><i>undefined</i></b>. El tipo también es <b><i>undefined</i></b>. <br>
Cualquier variable se puede vaciar estableciendo el valor en <b><i>undefined</i></b>. El tipo también será <b><i>undefined</i></b>. <br>
<h3>Vacío</h3>
Un valor vacío no tiene nada que ver con <b><i>undefined</i></b>. Una cadena vacía tiene un valor válido y un tipo.
<hr>
<h3>Funciones</h3>
Una función JavaScript es un bloque de código diseñado para realizar un tarea particular. <br>
Una función de JavaScript se ejecuta cuando "algo" lo invoca (lo llama). <br>
Una función de JavaScript se define con la palabra clave <b><i>function</i></b>, seguido de un nombre, seguido de paréntesis (). <br>
Los nombres de función pueden contener letras, dígitos, guiones bajos y signos de dólar (las mismas reglas que las variables). <br>
Los paréntesis pueden incluir nombres de parámetros separados por comas: (parámetro1, parámetro2, ...) <br>
El código a ejecutar, por parte de la función, se coloca entre llaves {}.
<pre>
function Nombre(Parámetro1, Parámetro2, Parámetro3) {
  // Código a ejecutar
}
</pre>
Los parámetros de la función se enumeran entre paréntesis () en la definición de la función. <br>
Los argumentos de función son los valores recibidos por la función cuando se invoca. <br>
Dentro de la función, los argumentos (los parámetros) se comportan como variables locales. <br>
El código dentro de la función se ejecutará cuando "algo" invoque (llame) a la función. <br>
Cuando JavaScript llega a una instrucción <b><i>return</i></b>, La función dejará de ejecutarse. <br>
<b>¿Por qué funciones?</b> <br>
Con las funciones se puede reutilizar el código y se puede escribir código que se puede usar muchas veces. <br>
Se puede usar el mismo código con diferentes argumentos para producir resultados diferentes. <br>
El operador <b><i>()</i></b> invoca (llama) a la función. <br>
El acceso a una función con parámetros incorrectos puede devolver una respuesta incorrecta. <br>
Al acceder a una función sin () se devuelve la función y no el resultado de la función. <br>
Las funciones se pueden usar de la misma manera que se usan las variables, en todos los tipos de fórmulas, asignaciones y cálculos. <br>
Las variables declaradas dentro de una función de JavaScript, se convierten en LOCAL para la función. <br>
Solo se puede acceder a las variables locales desde dentro de la función. <br>
Dado que las variables locales solo se reconocen dentro de sus funciones, las variables con el mismo nombre se pueden usar en diferentes funciones. <br>
Las variables locales se crean cuando se inicia una función y se eliminan cuando se completa la función.
<hr>
<h3>Objetos</h3>
En la vida real, un coche es un objeto. <br>
Un coche tiene propiedades como el peso y el color, y métodos como el arranque y la parada. <br>
Todos los coches tienen las mismas propiedades, pero los valores de las propiedades difieren de un coche a otro. <br>
Todos los coches tienen los mismos métodos, pero los métodos se realizan en diferentes momentos. <br>
Este código asigna un valor simple (Fiat) a una variable llamada car:
<pre>
let car = "Fiat";
</pre>
Los objetos también son variables. Pero los objetos pueden contener muchos valores. <br>
Este código asigna muchos valores (Fiat, 500, blanco) a una variable llamada car:
<pre>
const car = {type:"Fiat", model:"500", color:"white"};
</pre>
Los valores se escriben como pares nombre:valor (nombre y valor separados por un dos puntos). <br>
Se puede acceder a las propiedades de los objetos de dos maneras:
<ul>
    <li>NombreObjetp.NombrePropiedad</li>
    <li>NombreObjeto["NombrePropiedad"]</li>
</ul>
Los objetos JavaScript son contenedores de valores con nombre denominados propiedades. <br>
Los objetos también pueden tener métodos. <br>
Los métodos son acciones que se pueden realizar en objetos. <br>
Los métodos se almacenan en propiedades como funciones definidas. <br>
<h3>.This</h3>
En JavaScript, la palabra clave <b><i>this</i></b> se refiere a un objeto. <br>
El objeto depende de cómo se invoque (use o llame) <b><i>this</i></b>. <br>
En un método de objeto, hace referencia al objeto. <br>
Solo, se refiere al objeto global. <br>
En una función, hace referencia al objeto global. <br>
En una función, en modo estricto, es <b><i>undefined</i></b>. <br>
En un evento, hace referencia al elemento que recibió el evento.this
Métodos como <b><i>call()</i></b>, <b><i>apply()</i></b>, y <b><i>bind()</i></b>, <b><i>this</i></b> puede referirse a cualquier objeto. <br>
<b><i>this</i></b> no es una variable. Es una palabra clave. No se puede cambiar el valor de <b><i>this</i></b>. <br>
Se accede a un método de objeto con la siguiente sintaxis:
<pre>
NombrePropiedad.NombreMetodo()
</pre>
Si se accede a un método sin el paréntesis (), se devolverá la definición de la función. <br>
Cuando se declara una variable de JavaScript con la palabra clave "<b><i>new</i></b>", la variable es creada como un objeto.
<hr>
<h3>Eventos</h3>
Los eventos HTML son "cosas" que les suceden a los elementos HTML. <br>
Cuando se usa JavaScript en páginas HTML, JavaScript puede "reaccionar" en estos acontecimientos. <br>
Un evento HTML puede ser algo que hace el navegador o algo que hace un usuario. <br>
Estos son algunos ejemplos de eventos HTML:
<ul>
    <li>Una página web HTML ha terminado de cargarse</li>
    <li>Se ha cambiado un campo de entrada HTML</li>
    <li>Se ha hecho clic en un botón HTML</li>
</ul>
A menudo, cuando suceden eventos, es posible que se desee hacer algo. <br>
JavaScript permite ejecutar código cuando se detectan eventos. <br>
HTML permite agregar atributos de controlador de eventos, con código JavaScript, a los elementos HTML. <br>
Con comillas simples:
<pre>
< element event='JavaScript' >
</pre>
Con comillas dobles:
<pre>
< element event="JavaScript" >
</pre>
<h3>String</h3>
Las cadenas de JavaScript sirven para almacenar y manipular texto. <br>
Se puede usar comillas simples o dobles. <br>
Se puede usar comillas dentro de una cadena, siempre y cuando no coincidan con las comillas rodeando la cadena. <br>
Para encontrar la longitud de una cadena, se usa la propiedad integrada <b><i>length</i></b>. <br>
El carácter de escape de barra diagonal inversa (\) convierte los caracteres especiales en caracteres de cadena. <br>
También se puede dividir una línea de código dentro de una cadena de texto con una sola barra invertida. <br>
Una forma más segura de romper una cadena es usar una cadena de adición. <br>
<b>No se puede dividir una línea de código con una barra invertida</b>. Solo cadenas de texto. <br>
Normalmente, las cadenas de JavaScript son valores primitivos, creados a partir de literales:
<pre>
let x = "John";
</pre>
Pero las cadenas también se pueden definir como objetos con la palabra clave <b><i>new</i></b>:
<pre>
let y = new String("John");
</pre>
Cuando se usa el operador <b><i>==</i></b>, x e y son iguales. <br>
Cuando se usa el operador <b><i>===</i></b>, x e y no son iguales:. <br>
<h3>Métodos de string</h3>
<ul>
    <li>String length</li>
    <li>String slice()</li>
    <li>String substring()</li>
    <li>String substr()</li>
    <li>String replace()</li>
    <li>String replaceAll()</li>
    <li>String toUpperCase()</li>
    <li>String toLowerCase()</li>
    <li>String concat()</li>
    <li>String trim()</li>
    <li>String trimStart()</li>
    <li>String trimEnd()</li>
    <li>String padStart()</li>
    <li>String padEnd()</li>
    <li>String charAt()</li>
    <li>String charCodeAt()</li>
    <li>String split()</li>
</ul>
Hay 3 métodos para extraer una parte de una cadena:
<ul>
    <li>slice(start, end)</li>
    <li>substring(start, end)</li>
    <li>substr(start, length)</li>
</ul>
El método <b><i>replace()</i></b> reemplaza un valor especificado por otro valor en una cadena. <br>
De forma predeterminada, el método reemplaza solo la primera coincidencia. <br>
Para reemplazar la función "no distingue entre mayúsculas y minúsculas", se utiliza una expresión regular con un indicador (no distingue)<b><i>/i</i></b>. <br>
Para reemplazar todas las coincidencias, se usa una expresión regular con una marca (coincidencia global) <b><i>/g</i></b>. <br>
En 2021, JavaScript introdujo el método de cadena <b><i>replaceAll()</i></b>. <br>
El método permite especificar un regular en lugar de una cadena que se va a reemplazar. <br>
Si el parámetro es una expresión regular, se debe establecer el indicador global <b><i>g</i></b>, de lo contrario se produce un <b><i>TypeError</i></b>. <br>
Una cadena se convierte a mayúsculas con <b><i>toUpperCase()</i></b>. <br>
Una cadena se convierte a minúsculas con <b><i>toLowerCase()</i></b>. <br>
<b><i>concat()</i></b> combina dos o más cadenas. <br>
<b>Todos los métodos de cadena devuelven una nueva cadena. No modifican la cadena original.</b> <br>
El método <b><i>trim()</i></b> elimina los espacios en blanco de ambos lados de una cadena. <br>
ECMAScript 2019 agregó el método 4 String a JavaScript. trimStart() <br>
El método funciona como <b><i>trim()</i></b>, pero elimina los espacios en blanco solo del inicio de una cadena. <br>
ECMAScript 2019 agregó el método <b><i>trimEnd()</i></b> de cadena a JavaScript. <br>
El método funciona como <b><i>trim()</i></b>, pero elimina los espacios en blanco solo del final de una cadena. <br>
ECMAScript 2017 agregó dos nuevos métodos de cadena a JavaScript <b><i>padStart()</i></b> y <b><i>padEnd()</i></b> para admitir el relleno al principio y al final de una cadena. <br>
Hay 3 métodos para extraer caracteres de cadena:
<ul>
    <li>charAt(position)</li>
    <li>charCodeAt(position)</li>
    <li>Acceso a la propiedad [ ]</li>
</ul>
El método <b><i>charAt()</i></b> devuelve el carácter en un valor especificado index (posición) en una cadena. <br>
El método <b><i>charCodeAt()</i></b> devuelve el unicode del carácter en un índice especificado en una cadena. <br>
El método devuelve un código UTF-16 (un entero entre 0 y 65535). <br>
ECMAScript 5 (2009) permite el acceso a la propiedad [ ] en cadenas. <br>
El acceso a la propiedad puede ser un poco impredecible:
<ul>
    <li>Hace que las cadenas parezcan matrices (pero no lo son)</li>
    <li>Si no se encuentra ningún carácter, [ ] devuelve undefined, mientras que charAt() devuelve una cadena vacía.</li>
    <li>Es de solo lectura. str[0] = "A" no da ningún error (¡pero no funciona!)</li>
</ul>
Si se desea trabajar con una cadena como una matriz, se puede convertir en una matriz. <br>
Una cadena se puede convertir en una matriz con el método <b><i>split()</i></b>. <br>
Si se omite el separador, la matriz devuelta contendrá toda la cadena en el índice [0]. <br>
Si el separador es "<b><i>,</i></b>" la matriz devuelta será una matriz de caracteres.
<h3>Métodos de busqueda de string</h3>
<ul>
    <li>String indexOf()</li>
    <li>String lastIndexOf()</li>
    <li>String search()</li>
    <li>String match()</li>
    <li>String matchAll()</li>
    <li>String includes()</li>
    <li>String startsWith()</li>
    <li>String endsWith()</li>
</ul>
El método <b><i>indexOf()</i></b> devuelve el índice (posición) de la primera aparición de una cadena en una cadena. <br>
El método <b><i>lastIndexOf()</i></b> devuelve el índice de la última aparición de un texto especificado en una cadena. <br>
Ambos métodos aceptan un segundo parámetro como posición inicial para buscar. <br>
El método <b><i>search()</i></b> busca una cadena (o una expresión regular) en una cadena y devuelve la posición de la coincidencia. <br>
El método <b><i>.match()</i></b> devuelve una matriz que contiene los resultados de la coincidencia una cadena contra una cadena (o una expresión regular). <br>
El método <b><i>matchAll()</i></b> devuelve un iterador que contiene los resultados de la coincidencia una cadena contra una cadena (o una expresión regular). <br>
El método <b><i>includes()</i></b> devuelve true si una cadena contiene un valor especificado. <br>
El método <b><i>startsWith()</i></b> devuelve <b><i>true</i></b> si una cadena comienza con un valor especificado. <br>
De lo contrario, devuelve <b><i>false</i></b>. <br>
El método <b><i>endsWith()</i></b> devuelve <b><i>true</i></b> si una cadena termina con un valor especificado. <br>
De lo contrario, devuelve <b><i>false</i></b>. <br>
<hr>
<h3>Plantillas de literales</h3>
<ul>
    <li>Template Literals</li>
    <li>Template Strings</li>
    <li>String Templates</li>
    <li>Back-Tics Syntax</li>
</ul>
Los <b><i>Back-Tics</i></b> usan acentos graves (``) en lugar de las comillas ("") para definir una cadena. <br>
Los <b><i>Back-Tics</i></b> permiten cadenas de varias líneas. <br>
Los <b><i>Back-Tics</i></b> proporcionan una manera sencilla de interpolar variables y expresiones en cadenas. <br>
El método se denomina interpolación de cadenas y la sintaxis es:
<pre>
`$ { ... }`
</pre>
Tambien permiten expresiones en cadenas.
<hr>
<h3>Números</h3>
JavaScript solo tiene un tipo de número. Los números se pueden escribir con o sin decimales. <br>
Los números extra grandes o extra pequeños se pueden escribir con notación científica (exponente). <br>
Los números enteros (números sin notación de punto o exponente) tienen una precisión de hasta 15 dígitos. <br>
El número máximo de decimales es 17. <br>
Si se suma dos números, el resultado será un número. Si se agrega dos cadenas, el resultado será una concatenación de cadenas. Si se agrega un número y una cadena, el resultado será una concatenación de cadenas. <br>
<b><i>NaN</i></b> es una palabra reservada de JavaScript que indica que un número no es un número legal. <br>
Intentar hacer aritmética con una cadena no numérica dará como resultado (No es un Número). <br>
<h3>Infinidad</h3>
<b><i>Infinity</i></b> (o <b><i>-Infinity</i></b>) es el valor que JavaScript devolverá si calcula un número fuera del mayor número posible. <br>
La división por 0 (cero) también genera <b><i>Infinity</i></b>. <br>
De forma predeterminada, JavaScript muestra los números como decimales de base 10. <br>
Pero se puede usar el método <b><i>toString()</i></b> para generar números desde la base 2 hasta la base 36. <br>
El hexadecimal es la base 16. Decimal es en base 10. Octal es base 8. El binario es la base 2. <br>
Normalmente, los números de JavaScript son valores primitivos creados a partir de literales. <br>
Pero los números también se pueden definir como objetos con la palabra clave <b><i>new</i></b>. <br>
<h3>BigInt</h3>
Las variables de JavaScript <b><i>BigInt</i></b> se utilizan para almacenar valores enteros grandes que son demasiado grandes para ser representados por un JavaScript <b><i>Number</i></b> normal. <br>
Los enteros de JavaScript solo son precisos hasta 15 dígitos. <br>
En JavaScript, todos los números se almacenan en un formato de punto flotante de 64 bits (estándar IEEE 754). <br>
Con este estándar, el entero grande no se puede representar exactamente y se redondeará. <br>
Debido a esto, JavaScript solo puede representar números enteros de forma segura: <br>
Hasta 9007199254740991 +(253-1) y Bajar a -9007199254740991 -(253-1). <br>
Los valores enteros fuera de este rango pierden precisión. <br>
Para crear un <b><i>BigInt</i></b>, se anexa <b><i>n</i></b> al final de un entero o se llama a <b><i>BigInt()</i></b>. <br>
<b><i>BigInt</i></b> es el segundo tipo de datos numéricos en JavaScript (después de <b><i>Number</i></b>). <br>
Los operadores que se pueden usar en un JavaScript también se pueden usar en un archivo <b><i>BigInt</i></b>. <br>
<b><i>BigInt</i></b> no puede tener decimales. <br>
<b><i>BigInt</i></b> también se puede escribir en notación hexadecimal, octal o binaria.
<h3>Enteros seguros mínimos y máximos</h3>
ES6 agregó las propiedades max y min al objeto Number:
<ul>
    <li>MAX_SAFE_INTEGER</li>
    <li>MIN_SAFE_INTEGER</li>
</ul>
ES6 también agregó 2 nuevos métodos al objeto Number:
<ul>
    <li>Number.isInteger()</li>
    <li>Number.isSafeInteger()</li>
</ul>
El método <b><i>isInteger()</i></b> devuelve si el argumento es un número entero. <br>
Un entero seguro es un entero que se puede representar exactamente como un número de precisión doble. <br>
El método <b><i>isSafeInteger()</i></b> devuelve si el argumento es un entero seguro.
<h3>Métodos numéricos</h3>
Estos métodos numéricos se pueden usar en todos los números de JavaScript:
<ul>
    <li><b>toString()</b>	Devuelve un número como una cadena</li>
    <li><b>toExponential()</b>	Devuelve un número escrito en notación exponencial</li>
    <li><b>toFixed()</b>	Devuelve un número escrito con un número de decimales</li>
    <li><b>toPrecision()</b>	Devuelve un número escrito con una longitud especificada</li>
    <li><b>ValorOf()</b>	Devuelve un número como un número</li>
</ul>
El método <b><i>toString()</i></b> devuelve un número como una cadena. <br>
<b><i>toExponential()</i></b> Devuelve una cadena, con un número redondeado y escrito usando notación exponencial. <br>
El parámetro es opcional. Si no se especifica, JavaScript no redondeará el número. <br>
<b><i>toFixed()</i></b> devuelve una cadena, con el número escrito con un número especificado de decimales. <br>
<b><i>toPrecision()</i></b> devuelve una cadena, con un número escrito con un longitud especificada. <br>
<b><i>valueOf()</i></b> Devuelve un número como un número. <br>
Hay 3 métodos de JavaScript que se pueden utilizar para convertir una variable en un número:
<ul>
    <li><b>Number()</b>	Devuelve un número convertido a partir de su argumento.</li>
    <li><b>parseFloat()</b>	Analiza su argumento y devuelve un número de punto flotante</li>
    <li><b>parseInt()</b>	Analiza su argumento y devuelve un número entero</li>
</ul>
El método <b><i>Number()</i></b> se puede utilizar para convertir variables de JavaScript en números. <br>
<b><i>parseInt()</i></b> Analiza una cadena y devuelve un número entero. Los espacios son permitido. Solo se devuelve el primer número. <br>
<b><i>parseFloat()</i></b> Analiza una cadena y devuelve un número. Los espacios son permitido. Solo se devuelve el primer número. <br>
<b>Los métodos numéricos no se pueden usar en variables. <br>
Los métodos numéricos anteriores pertenecen al objeto numérico de JavaScript. <br>
El uso de <i>X.isInteger()</i> donde <i>X</i> es una variable, dará como resultado un error: <br>
<i>TypeError X.isInteger is not a function.</i></b>
<hr>
<h3>Propiedades numéricas</h3>
<ul>
    <li><b>EPSILON</b> La diferencia entre 1 y el número más pequeño > 1.</li>
    <li><b>MAX_VALUE</b> El mayor número posible en JavaScript</li>
    <li><b>MIN_VALUE</b> El número más pequeño posible en JavaScript</li>
    <li><b>MAX_SAFE_INTEGER</b> El entero seguro máximo (253 - 1)</li>
    <li><b>MIN_SAFE_INTEGER</b> El entero mínimo seguro -(253 - 1)</li>
    <li><b>POSITIVE_INFINITY</b> Infinito (devuelto en caso de desbordamiento)</li>
    <li><b>NEGATIVE_INFINITY</b> Infinito negativo (devuelto en caso de desbordamiento)</li>
    <li><b>NaN</b> Un valor "no es un número"</li>
</ul>
<b><i>Number.EPSILON</i></b> es la diferencia entre el número de coma flotante más pequeño mayor que 1 y 1. <br>
<b><i>Number.MAX_VALUE</i></b> es una constante que representa el número más grande posible en JavaScript. <br>
<b><i>Number.MIN_VALUE</i><b> es una constante que representa el número más bajo posible en JavaScript. <br>
<b><i>Number.MAX_SAFE_INTEGER</i><b> representa el entero seguro máximo en JavaScript. <br>
<b><i>Number.MIN_SAFE_INTEGER</i><b> representa el entero mínimo seguro en JavaScript. <br>
<b><i>POSITIVE_INFINITY</i><b> se devuelve en caso de desbordamiento. <br>
<b><i>NEGATIVE_INFINITY</i><b> se devuelve en caso de desbordamiento. <br>
<b><i>NaN</i><b> es una palabra reservada de JavaScript para un número que no es un número legal.
<hr>
<h3>Matrices</h3>