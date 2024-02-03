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
    <li><b>=</b> Asigna valor</li>
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
Las variables locales se crean cuando se inicia una función y se eliminan cuando se completa la función. <br>
También se puede definir una función de JavaScript mediante una expresión. <br>
Una expresión de función se puede almacenar en una variable. <br>
Una vez que se ha almacenado una expresión de función en una variable, la variable puede se puede utilizar como una función. <br>
Las funciones almacenadas en variables no necesitan nombres de función. Siempre están invocado (llamado) usando el nombre de la variable. <br>
Las funciones de JavaScript están definidas con la palabra clave <b><i>function</i></b>. <br>
Las funciones también se pueden definir con un constructor de funciones de JavaScript integrado llamado <b><i>Function()</i></b>. <br>
Las funciones de JavaScript se pueden usar en expresiones. <br>
Un JavaScript no realiza ninguna comprobación de los valores de parámetros (argumentos). <br>
Las definiciones de funciones de JavaScript no especifican tipos de datos para parámetros. <br>
Las funciones de JavaScript no realizan la comprobación de tipos en el argumentos. <br>
Las funciones de JavaScript no comprueban el número de argumentos recibidos. <br>
Si se llama a una función con argumentos faltantes (menos de los declarados), los valores que faltan se establecen en <b><i>undefined</i></b>. <br>
A veces esto es aceptable, pero a veces es mejor asignar un valor predeterminado al parámetro. <br>
ES6 permite que los parámetros de función tengan valores predeterminados. <br>
El parámetro <b><i>(...)</i></b> permite que una función trate un número indefinido de argumentos como una matriz. <br>
Con el método <b><i>call()</i></b>, se puede escribir un método que se puede usar en diferentes objetos. <br>
El método puede aceptar argumentos.
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
En JavaScript, casi "todo" es un objeto:
<ul>
    <li>Los booleanos pueden ser objetos (si se definen con la palabra clave)new.</li>
    <li>Los números pueden ser objetos (si se definen con la palabra clave)new.</li>
    <li>Las cadenas pueden ser objetos (si se definen con la palabra clave)new.</li>
    <li>Las fechas son siempre objetos.</li>
    <li>Las matemáticas son siempre objetos.</li>
    <li>Las expresiones regulares son siempre objetos.</li>
    <li>Las matrices son siempre objetos.</li>
    <li>Las funciones son siempre objetos.</li>
    <li>Los objetos son siempre objetos.</li>
</ul>
Todos los valores de JavaScript, excepto los primitivos, son objetos. <br>
Un valor primitivo es un valor que no tiene propiedades ni métodos. <br>
Los valores primitivos son inmutables (están codificados de forma rígida y no se pueden cambiar). <br>
Si x = 3,14, puede cambiar el valor de x, pero no se puede cambiar el valor de 3,14. <br>
Los objetos también son variables. Pero los objetos pueden contener muchos valores. <br>
Los valores de los objetos se escriben como pares nombre: valor (nombre y valor separados por un dos puntos). <br>
Los objetos escritos como pares nombre-valor son similares a:
<ul>
    <li>Matrices asociativas en PHP.</li>
    <li>Diccionarios en Python.</li>
    <li>Tablas hash en C.</li>
    <li>Mapas hash en Java.</li>
    <li>Hashes en Ruby y Perl.</li>
</ul>
Los métodos son acciones que se pueden realizar en objetos. <br>
Las propiedades de los objetos pueden ser tanto valores primitivos, otros objetos y funciones. <br>
Un método de objeto es una propiedad de objeto que contiene una función. <br>
Los espacios y los saltos de línea no son importantes. Una definición de objeto puede abarcar varias líneas.
<h3>Propiedades de objeto JavaScript</h3>
Las propiedades son la parte más importante de cualquier objeto JavaScript. <br>
Las propiedades son los valores asociados a un objeto JavaScript. <br>
Un objeto JavaScript es una colección de propiedades desordenadas. <br>
Por lo general, las propiedades se pueden cambiar, agregar y eliminar, pero algunas son de solo lectura. <br>
La palabra clave <b><i>delete</i></b> elimina una propiedad de un objeto. <br>
La palabra clave elimina tanto el valor de la propiedad como la propia propiedad. <br>
Después de la eliminación, la propiedad no se puede usar antes de que se vuelva a agregar. <br>
El operador está diseñado para usarse en propiedades de objetos. No tiene ningún efecto sobre variables o funciones. <br>
Los valores de un objeto pueden ser otro objeto. <br>
Los valores de los objetos pueden ser matrices y los valores de las matrices pueden ser objetos. <br>
Todas las propiedades tienen un nombre. Además, también tienen un valor. <br>
El valor es uno de los atributos de la propiedad. <br>
Otros atributos son:
<ul>
    <li>enumerable.</li>
    <li>configurable.</li>
    <li>grabable.</li>
</ul>
Estos atributos definen cómo se puede acceder a la propiedad (¿es legible?, ¿Se puede escribir?) <br>
En JavaScript, se pueden leer todos los atributos, pero solo el atributo de valor (y solo si la propiedad es escribible). <br>
( ECMAScript 5 tiene métodos para obtener y establecer todas las propiedades atributos).
<h3>Visualización de objetos JavaScript</h3>
Al mostrar un objeto JavaScript, se generará <b><i>[object Object]</i></b>. <br>
Cualquier objeto JavaScript se puede convertir en una matriz usando <b><i>Object.values()</i></b>. <br>
Cualquier objeto JavaScript se puede stringificar (convertir en una cadena) con la función JavaScript <b><i>JSON.stringify()</i></b>. <br>
<b><i>JSON.stringify</i></b> no stringificará funciones. <br>
Esto se puede "arreglar" si se convierte las funciones en cadenas antes de encadenar.
<h3>Descriptores de acceso</h3>
ECMAScript 5 (ES5 2009) introdujo Getter y Setters. <br>
Los captadores y establecedores permiten definir descriptores de acceso a objetos (calculando propiedades). <br>
Estos reemplazan los métodos en un objeto. <br>
JavaScript puede garantizar una mejor calidad de los datos cuando se utilizan getters y setters.
<h3>¿Por qué usar Getters y Setters?</h3>
<ul>
    <li>Proporciona una sintaxis más simple.</li>
    <li>Permite la misma sintaxis para propiedades y métodos.</li>
    <li>Puede asegurar una mejor calidad de datos.</li>
    <li>Es útil para hacer cosas entre bastidores.</li>
</ul>
El método <b><i>defineProperty()</i></b> también se puede utilizar para agregar Getters y Setters:Object.
<h3>Prototipos de objetos</h3>
Todos los objetos JavaScript heredan propiedades y métodos a partir de un prototipo.
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
<b><i>Number.MIN_VALUE</i></b> es una constante que representa el número más bajo posible en JavaScript. <br>
<b><i>Number.MAX_SAFE_INTEGER</i></b> representa el entero seguro máximo en JavaScript. <br>
<b><i>Number.MIN_SAFE_INTEGER</i></b> representa el entero mínimo seguro en JavaScript. <br>
<b><i>POSITIVE_INFINITY</i></b> se devuelve en caso de desbordamiento. <br>
<b><i>NEGATIVE_INFINITY</i></b> se devuelve en caso de desbordamiento. <br>
<b><i>NaN</i></b> es una palabra reservada de JavaScript para un número que no es un número legal.
<hr>
<h3>Matrices</h3>
Una matriz es una variable especial, que puede contener más de un valor. <br>
<h3>¿Por qué usar arrays?</h3>
Si se tiene una lista de elementos (una lista de nombres de automóviles, por ejemplo), al almacenar el archivo de los coches en variables individuales podrían verse así:
<pre>
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
</pre>
Sin embargo, <b>¿qué pasa si se quiere recorrer los coches y encontrar uno específico? ¿Y si no se tuviera 3 coches, sino 300?</b> <br>
<b>¡La solución es una matriz!</b> <br>
Una matriz puede contener muchos valores bajo un solo nombre, y se puede usar para acceder a los valores, con la referencia a un número de índice. <br>
El uso de un literal de matriz es la forma más fácil de crear una matriz de JavaScript. <br>
<b>Sintaxis</b>:
<pre>
const NombreArray = [Valor, Valor, Valor...];
</pre>
Es una práctica común declarar matrices con la palabra clave <b>const</b>. <br>
Los espacios y los saltos de línea no son importantes. Una declaración puede abarcar varias líneas <br>
También se puede crear una matriz y, a continuación, proporcionar los elementos. <br>
<h3>Acceso a los elementos de la matriz</h3>
Para acceder a un elemento de matriz, se hace referencia al número de índice. <br>
<pre>
let ValorArray = Array[Índice];
</pre>
Los índices de matriz comienzan con 0. <br>
Esta instrucción cambia el valor de un elemento en una matriz:
<pre>
Array[índice] = NuevoValor;
</pre>
El método JavaScript <b><i>toString()</i></b> convierte una matriz en un cadena de valores de matriz (separados por comas). <br>
Las matrices son un tipo especial de objetos. El operador en JavaScript <b><i>typeof</i></b> devuelve "<b>object</b>" para las matrices. <br>
Sin embargo, las matrices de JavaScript se describen mejor como matrices. <br>
Las matrices usan números para acceder a sus "valores". <br>
Los objetos usan nombres para acceder a sus "atributos". <br>
Las variables de JavaScript pueden ser objetos ya que las matrices son tipos especiales de objetos. <br>
Debido a esto, se puede tener variables de diferentes tipos en la misma matriz. <br>
Se puede tener objetos en una matriz, funciones y matrices dentro de la misma matriz. <br>
<h3>Propiedades y métodos de la matriz</h3>
La verdadera fuerza de las matrices de JavaScript son las propiedades de matriz incorporadas y los métodos. <br>
Una forma de recorrer una matriz es usar un bucle <b><i>for</i></b>. <br>
También se puede utilizar la función <b><i>.forEach()</i></b>. <br>
La forma más fácil de agregar un nuevo elemento a una matriz es usando el método <b><i>push()</i></b>. <br>
La adición de elementos con índices altos puede crear "agujeros" indefinidos en una matriz. <br>
Muchos lenguajes de programación admiten matrices con índices con nombre. <br>
Las matrices con índices con nombre se denominan asociativas matrices (o hashes). <br>
JavaScript no admite matrices con índices con nombre. <br>
En JavaScript, las matrices siempre usan índices numerados. <br>
JavaScript tiene un constructor de matrices incorporado <b><i>new Array()</i></b>. <br>
Pero se puede usar de manera segura <b><i>[]</i></b> en su lugar. <br>
<h3>Métodos de matrices</h3>
<dl>
    <dt><b><i>length</i></b>
        <dd>
            La propiedad devuelve la longitud (tamaño) de una matriz.
        </dd>
    </dt>
    <dt><b><i>toString()</i></b>
        <dd>
            El método JavaScript convierte una matriz en un cadena de valores de matriz (separados por comas).
        </dd>
    </dt>
    <dt><b><i>at()</i></b>
        <dd>
            El método devuelve un elemento indexado de una matriz.
        </dd>
    </dt>
    <dt><b><i>join()</i></b>
        <dd>
            El método también une todos los elementos de la matriz en una cadena. <br>
            Se comporta igual que <b><i>toString()</i></b>, pero además se puede especificar el separador.
        </dd>
    </dt>
    <dt><b><i>pop()</i></b>
        <dd>
            El método quita el último elemento de una matriz.
        </dd>
    </dt>
    <dt><b><i>push()</i></b>
        <dd>
            El método agrega un nuevo elemento a una matriz (al final).
        </dd>
    </dt>
    <dt><b><i>shift()</i></b>
        <dd>
            El método elimina el primer elemento de la matriz y "desplaza" todos los otros elementos a un índice más bajo.
        </dd>
    </dt>
    <dt><b><i>unshift()</i></b>
        <dd>
            El método agrega un nuevo elemento a una matriz (al principio).
        </dd>
    </dt>
    <dt><b><i>delete()</i></b>
        <dd>
            El método elimina un elemento.
        </dd>
    </dt>
    <dt><b><i>concat()</i></b>
        <dd>
            El método crea una nueva matriz mediante la fusión (concatenación) de matrices existentes.
        </dd>
    </dt>
    <dt><b><i>copyWithin()</i></b>
        <dd>
            El método copia los elementos de la matriz en otra posición de una matriz
        </dd>
    </dt>
    <dt><b><i>flat()</i></b>
        <dd>
            El método crea una nueva matriz con elementos de submatriz concatenados a una profundidad especificada.
        </dd>
    </dt>
    <dt><b><i>splice()</i></b>
        <dd>
            El método agrega nuevos elementos a una matriz. <br>
            El primer parámetro define la posición en la que se deben agregar (empalmar) nuevos elementos. <br>
            El segundo parámetro define cuántos elementos deben eliminarse. <br>
            El resto de parámetros definen los nuevos elementos a añadir.
        </dd>
    </dt>
    <dt><b><i>toSpliced()</i></b>
        <dd>
            La diferencia entre el nuevo método <b><i>toSpliced()</i></b> y el antiguo método <b><i>splice()</i></b> es que el nuevo método crea una nueva matriz, manteniendo la matriz original sin cambios, mientras que el método anterior altera la matriz original.
        </dd>
    </dt>
    <dt><b><i>slice()</i></b>
        <dd>
            El método divide una parte de una matriz en un nuevo arreglo. <br>
            El método crea una nueva matriz.
        </dd>
    </dt>
</dl>
<h3>Métodos de busqueda</h3>
<dl>
    <dt><b><i>indexOf()</i></b>
        <dd>
            El método busca un valor de elemento en una matriz y devuelve su posición
        </dd>
    </dt>
    <dt><b><i>lastIndexOf()</i></b>
        <dd>
            Es lo mismo que <b><i>indexOf()</i></b>, pero devuelve la posición de la última aparición del elemento especificado.
        </dd>
    </dt>
    <dt><b><i>includes()</i></b>
        <dd>
            Esto nos permite comprobar si un elemento está presente en una matriz (incluido NaN, a diferencia de indexOf).
        </dd>
    </dt>
    <dt><b><i>find()</i></b>
        <dd>
            El método devuelve el valor del primer elemento de la matriz que pasa un función de prueba. <br>
            En este ejemplo se busca (devuelve el valor de) el primer elemento que es mayor de 18:
<pre>
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);
function myFunction(value, index, array) {
return value > 18;
}
</pre>
            Hay que tener en cuenta que la función toma 3 argumentos: <br>
            El valor del artículo <br>
            El índice de elementos <br>
            La matriz en sí
        </dd>
    </dt>
    <dt><b><i>findIndex()</i></b>
        <dd>
            El método devuelve el índice del primer elemento de la matriz que Pasa una función de prueba.
        </dd>
    </dt>
    <dt><b><i>findLast()</i></b>
        <dd>
            ES2023 agregó el método <b><i>findLast()</i></b> que comenzará desde el final de una matriz y devolverá Valor del primer elemento que satisface una condición.
        </dd>
    </dt>
    <dt><b><i>findLastIndex()</i></b>
        <dd>
            El método encuentra el índice del último elemento que satisface una condición.
        </dd>
    </dt>
</dl>
<h3>Ordenación de matrices</h3>
<dl>
    <dt><b><i>sort()</i></b>
        <dd>
            El método ordena una matriz alfabéticamente.
        </dd>
    </dt>
    <dt><b><i>reverse()</i></b>
        <dd>
            El método invierte los elementos de una matriz. <br>
            Al combinar <b><i>sort()</i></b> y <b><i>reverse()</i></b>, se puede ordenar una matriz en orden descendente.
        </dd>
    </dt>
    <dt><b><i>toSorted()</i></b>
        <dd>
            La diferencia entre <b><i>toSorted()</i></b> y <b><i>sort()</i></b> es que el primer método crea una nueva matriz, manteniendo la matriz original sin cambios, mientras que el último método altera la matriz original.
        </dd>
    </dt>
    <dt><b><i>toReversed()</i></b>
        <dd>
            La diferencia entre <b><i>toReversed()</i></b> y <b><i>reverse()</i></b> es que el primer método crea una nueva matriz, manteniendo la matriz original sin cambios, mientras que el último método altera la matriz original.
        </dd>
    </dt>
</dl>
<h3>Métodos de iteración</h3>
<dl>
    <dt><b><i>forEach()</i></b>
        <dd>
            El método llama a una función (una función de devolución de llamada) una vez para cada elemento de la matriz.
        </dd>
    </dt>
    <dt><b><i>map()</i></b>
        <dd>
            El método crea una nueva matriz realizando una función en cada elemento de la matriz.
        </dd>
    </dt>
    <dt><b><i>flatMap()</i></b>
        <dd>
            En primer lugar, el método asigna todos los elementos de una matriz y, a continuación, crea una nueva matriz aplanando la matriz.
        </dd>
    </dt>
    <dt><b><i>filter()</i></b>
        <dd>
            El método crea una nueva matriz con elementos de matriz que superan una prueba.
        </dd>
    </dt>
    <dt><b><i>reduce()</i></b>
        <dd>
            El método ejecuta una función en cada elemento de la matriz para producir (reducirlo a) un solo valor. <br>
            Funciona de izquierda a derecha.
        </dd>
    </dt>
    <dt><b><i>reduceRigth()</i></b>
        <dd>
            El método ejecuta una función en cada elemento de la matriz para producir (reducirlo a) un solo valor. <br>
            Funciona de derecha a izquierda.
        </dd>
    </dt>
    <dt><b><i>every()</i></b>
        <dd>
            El método comprueba si todos los valores de la matriz pasan una prueba.
        </dd>
    </dt>
    <dt><b><i>some()</i></b>
        <dd>
            El método comprueba si algunos valores de matriz pasan una prueba.
        </dd>
    </dt>
    <dt><b><i>from()</i></b>
        <dd>
            El método devuelve un objeto Array de cualquier objeto con una longitud propiedad o cualquier objeto iterable.
        </dd>
    </dt>
    <dt><b><i>keys()</i></b>
        <dd>
            El método devuelve un objeto Array Iterator con las claves de una matriz.
        </dd>
    </dt>
    <dt><b><i>entries()</i></b>
        <dd>
            El método devuelve un objeto Array Iterator con pares clave/valor
        </dd>
    </dt>
    <dt><b><i>with()</i></b>
        <dd>
            agregó el método Array with() como una forma segura de actualizar elementos en una matriz sin alterar la matriz original.
        </dd>
    </dt>
    <dt><b><i>Spread (...)</i></b>
        <dd>
            El... expande un iterable (como una matriz) en más elementos
        </dd>
    </dt>
</dl>
<h3>Array const</h3>
En 2015, JavaScript introdujo una nueva e importante palabra clave <b><i>const</i></b>. <br>
Se ha convertido en una práctica común declarar matrices usando <b><i>const</i></b>. <br>
A las variables <b><i>const</i></b> de JavaScript se les debe asignar un valor cuando se declaran. <br>
Una matriz declarada con tiene <b><i>const</i></b> Block Scope. <br>
Una matriz declarada en un bloque no es lo mismo que una matriz declarada fuera del bloque. <br>
<hr>
<h3>Fechas</h3>
Los objetos de fecha de JavaScript permiten trabajar con fechas. <br>
Los objetos de fecha son estáticos. El "reloj" no está "corriendo". <br>
De forma predeterminada, JavaScript usará la zona horaria del navegador y mostrará una fecha como una cadena de texto completo: <br>
<b><i>Mon Jan 08 2024 14:49:54 GMT-0500 (hora estándar de Colombia)</i></b> <br>
Los objetos de fecha se crean con el constructor <b><i>new Date()</i></b>. <br>
Hay nueve formas de crear un objeto de fecha: <br>
<ul>
    <li>new Date()</li>
    <li>new Date(date string)</li>
    <li>new Date(year,month)</li>
    <li>new Date(year,month,day)</li>
    <li>new Date(year,month,day,hours)</li>
    <li>new Date(year,month,day,hours,minutes)</li>
    <li>new Date(year,month,day,hours,minutes,seconds)</li>
    <li>new Date(year,month,day,hours,minutes,seconds,ms)</li>
    <li>new Date(milliseconds)</li>
</ul>
new Date() Crea un objeto de fecha con la fecha y hora actuales. <br>
new Date(date string) Crea un objeto de fecha a partir de una cadena de fecha. <br>
new Date(year, month, ...) Crea un objeto de fecha con una fecha y hora especificadas. <br>
7 números especifican el año, el mes, el día, la hora, el minuto, el segundo y el milisegundo (en ese orden). <br>
JavaScript cuenta los meses del 0 al 11. <br>
<b>6 números especifican año, mes, día, hora, minuto, segundo. <br>
5 números especifican el año, el mes, el día, la hora y el minuto. <br>
4 números especifican año, mes, día y hora. <br>
3 números especifican el año, el mes y el día. <br>
2 números especifican el año y el mes. <br>
No se puede omitir el mes. Si proporciona solo un parámetro, se tratará como milisegundos.</b> <br>
JavaScript generará (de forma predeterminada) las fechas utilizando el método toString(). Se trata de una representación de cadena de la fecha, incluida la zona horaria. <br>
Cuando se muestra un objeto de fecha en HTML, se convierte automáticamente en un objeto string, con el método <b><i>toString()</i></b>. <br>
El método <b><i>toDateString()</i></b> convierte una fecha en una más legible formato. <br>
El método <b><i>toUTCString()</i></b> convierte una fecha en una cadena utilizando el estándar UTC. <br>
El método <b><i>toISOString()</i></b> convierte una fecha en una cadena utilizando el estándar ISO. <br>
Por lo general, hay 3 tipos de formatos de entrada de fecha de JavaScript:
<ul>
    <li><b>Fecha ISO</b> "2015-03-25" (El Estándar Internacional)</li>
    <li><b>Fecha corta</b> "03/25/2015"</li>
    <li><b>Fecha larga</b> "25 de marzo de 2015" o "25 de marzo de 2015"</li>
</ul>
Independientemente del formato de entrada, JavaScript (de forma predeterminada) generará las fechas en su totalidad con formato de cadena de texto. <br>
Las fechas ISO se pueden escribir sin especificar el día (AAAA-MM). <br>
La fecha y la hora están separadas por una T mayúscula. <br>
UTC (Tiempo Universal Coordinado) es lo mismo que GMT (Hora del Meridiano de Greenwich). <br>
Al establecer una fecha, sin especificar la zona horaria, JavaScript usará la zona horaria del navegador. <br>
Al obtener una fecha, sin especificar la zona horaria, el resultado es convertido a la zona horaria del navegador. <br>
En otras palabras: si se crea una fecha/hora en GMT (hora del meridiano de Greenwich), el La fecha/hora se convertirá a CDT (hora de verano central de EE. UU.) si un usuario navega del centro de los Estados Unidos. <br>
Las fechas cortas se escriben con una sintaxis "MM/DD/AAAA" <br>
Las fechas largas se escriben con mayor frecuencia con una sintaxis "MMM DD AAAA". <br>
El mes y el día pueden estar en cualquier orden. <br>
Si se tiene una cadena de fecha válida, se puede usar el método <b><i>parse()</i></b> para convertirla a milisegundos. <br>
Los métodos para obtener la fecha en JavaScript son:
<ul>
    <li>getFullYear() Obtiene el año como un número de cuatro dígitos (aaaa)</li>
    <li>getMonth() Obtiene el mes como un número (0-11)</li>
    <li>getDate() Obtiene el día como un número (1-31)</li>
    <li>getDay() Obtiene el día de la semana como un número (0-6)</li>
    <li>getHours() Obtener hora (0-23)</li>
    <li>getMinutes() Obtener minutos (0-59)</li>
    <li>getSeconds() Obtener el segundo (0-59)</li>
    <li>getMilliseconds() Obtener milisegundos (0-999)</li>
    <li>getTime() Obtener tiempo (milisegundos desde el 1 de enero de 1970)</li>
</ul>
Los métodos set se utilizan para establecer una fecha:
<ul>
    <li>setDate() Establece el día como un número (1-31)</li>
    <li>setFullYear() Establece el año (opcionalmente mes y día)</li>
    <li>setHours() Establece la hora (0-23)</li>
    <li>setMillisegundos() Establece los milisegundos (0-999)</li>
    <li>setMinutes() Establece los minutos (0-59)</li>
    <li>setMonth() Establece el mes (0-11)</li>
    <li>setSeconds() Establece los segundos (0-59)</li>
    <li>setTime() Establece la hora (milisegundos desde el 1 de enero de 1970)</li>
</ul>
<hr>
<h3>Objetos matemáticos</h3>
El objeto JavaScript <b><i>Math</i></b> permite realizar tareas matemáticas en números. <br>
A diferencia de otros objetos, el objeto <b><i>Math</i></b> no tiene constructor. <br>
El objeto <b><i>Math</i></b> es estático. <br>
Todos los métodos y propiedades se pueden usar sin crear primero un objeto <b><i>Math</i></b>. <br>
La sintaxis de cualquier propiedad matemática es:
<pre>
Math.Propiedad;
</pre>
JavaScript proporciona 8 constantes matemáticas a las que se puede acceder como propiedades matemáticas:
<ul>
    <li><b>Math.E</b> devuelve el número de Euler</li>
    <li><b>Math.PI</b> devuelve PI</li>
    <li><b>Math.SQRT2</b> devuelve la raíz cuadrada de 2</li>
    <li><b>Math.SQRT1_2</b> devuelve la raíz cuadrada de 1/2</li>
    <li><b>Math.LN2</b> devuelve el logaritmo natural de 2</li>
    <li><b>Math.LN10</b> devuelve el logaritmo natural de 10</li>
    <li><b>Math.LOG2E</b> devuelve el logaritmo en base 2 de E</li>
    <li><b>Math.LOG10E</b> devuelve el logaritmo en base 10 de E</li>
</ul>
La sintaxis de los métodos matemáticos es:
<pre>
Math.Método(Número);
</pre>
Hay 4 métodos comunes para redondear un número a un número entero:
<ul>
    <li><b>Math.round(x)</b> Devuelve x redondeado a su entero más cercano.</li>
    <li><b>Matemáticas.ceil(x)</b> Devuelve x redondeado a su entero más cercano.</li>
    <li><b>Matemáticas.piso(x)</b> Devuelve x redondeado hacia abajo a su entero más cercano.</li>
    <li><b>Math.trunc(x)</b> Devuelve la parte entera de x (nuevo en ES6).</li>
    <li><b>Math.sign(x)</b> Devuelve si x es negativo, nulo o positivo.</li>
    <li><b>Math.pow(x, y)</b> Devuelve el valor de x elevado a y.</li>
    <li><b>Math.sqrt(x)</b> Devuelve la raíz cuadrada de x.</li>
    <li><b>Math.abs(x)</b> Devuelve el valor absoluto (positivo) de x.</li>
    <li><b>Math.sin(x)</b> Devuelve el seno (un valor entre -1 y 1) del ángulo x (dado en radianes).</li>
    <li><b>Math.cos(x)</b> Devuelve el coseno (un valor entre -1 y 1) del ángulo x (dado en radianes).</li>
    <li><b>Math.min()</b> y <b>Math.max()</b> se puede usar para encontrar el valor más bajo o más alto en una lista de argumentos.</li>
    <li><b>Math.random()</b> devuelve un número aleatorio entre 0 (inclusive) y 1 (Exclusivo).</li>
    <li><b>Math.log(x)</b> Devuelve el logaritmo neperiano de x.</li>
    <li><b>Math.log2(x)</b> Devuelve el logaritmo en base 2 de x.</li>
    <li><b>Math.log10(x)</b> Devuelve el logaritmo en base 10 de x.</li>
</ul>
<hr>
<h3>Booleanos</h3>
Un valor booleano de JavaScript representa uno de dos valores: <b>verdadero o falso</b>. <br>
Muy a menudo, en programación, se necesitará un tipo de datos que solo puede tener uno de dos valores, como:
<ul>
    <li>SÍ / NO</li>
    <li>ENCENDIDO / APAGADO</li>
    <li>VERDADERO / FALSO</li>
</ul>
Para ello, JavaScript tiene un tipo de datos booleano que sólo puede tomar los valores <b><i>true</i></b> o <b><i>false</i></b>. <br>
Se puede usar la función <b><i>Boolean()</i></b> para averiguar si una expresión (o una variable) es verdadera o falsa. <br>
Todo lo que tiene un "valor" es verdad. <br>
Todo lo que no tiene un "valor" es falso. <br>
Normalmente, los booleanos de JavaScript son valores primitivos creados a partir de literales:
<pre>
let x = false;
</pre>
Pero los booleanos también se pueden definir como objetos con la palabra clave <b><i>new</i></b>. <br>
No se debería crear objetos booleanos. <br>
La palabra clave <b><i>new</i></b> complica el código y ralentiza la velocidad de ejecución. <br>
Los objetos booleanos pueden producir resultados inesperados <br>
<hr>
<h3>If, Else y Else if</h3>
Las instrucciones condicionales se utilizan para realizar diferentes acciones en función de diferentes condiciones. <br>
Muy a menudo, cuando se escribe código, se quiere realizar diferentes acciones para diferentes decisiones. <br>
Para ello, se puede usar instrucciones condicionales en el código. <br>
En JavaScript están las siguientes sentencias condicionales:
<ul>
    <li>Se utiliza <b><i>if</i></b> para especificar un bloque de código que se va a ejecutar, si una condición especificada es verdadera</li>
    <li>Se utiliza <b><i>else</i></b> para especificar un bloque de código que se va a ejecutar, si la misma condición es falso</li>
    <li>Se usa <b><i>else if</i></b> para especificar una nueva condición para probar, si la primera condición es falsa</li>
    <li>Se usa <b><i>switch</i></b> para especificar muchos bloques de código alternativos que se van a ejecutar</li>
</ul>
<b>Sintaxis</b>:
<pre>
if (Condición) {
  Código
}
</pre>
Se debe tener en cuenta que está en minúsculas ya que las letras mayúsculas (If o IF) generarán un error de JavaScript. <br>
<hr>
<h3>Switch</h3>
La instrucción <b><i>switch</i></b> se utiliza para realizar diferentes acciones en función de diferentes condiciones. <br>
Así es como funciona:
<ul>
    <li>La expresión switch se evalúa una vez.</li>
    <li>El valor de la expresión se compara con los valores de cada caso.</li>
    <li>Si hay una coincidencia, se ejecuta el bloque de código asociado.</li>
    <li>Si no hay ninguna coincidencia, se ejecuta el bloque de código predeterminado.</li>
</ul>
Cuando JavaScript alcanza una palabra clave <b><i>break</i></b>, sale del bloque switch. <br>
Esto detendrá la ejecución dentro del bloque switch. <br>
No es necesario romper la última caja en un bloque de interruptores puesto que el bloque se rompe (termina) allí de todos modos. <br>
Si omite la instrucción <b><i>break</i></b>, el siguiente caso se ejecutará incluso si La evaluación no coincide con el caso. <br>
La palabra clave <b><i>default</i></b> especifica el código que se va a ejecutar si no hay ninguna coincidencia de casos. <br>
Si varios casos coinciden con un valor de caso, se selecciona el primer caso. <br>
Si no se encuentran casos coincidentes, el programa continúa con la etiqueta predeterminada. <br>
Si no se encuentra ninguna etiqueta predeterminada, el programa continúa con la(s) sentencia(s) después del cambio. <br>
Los casos de switch utilizan una comparación estricta <b>===</b>. <br>
Los valores deben ser del mismo tipo para que coincidan. <br>
Una comparación estricta solo puede ser verdadera si los operandos son del mismo tipo. <br>
<hr>
<h3>Bucles</h3>
Los bucles pueden ejecutar un bloque de código varias veces. <br>
Los bucles son útiles, si se desea ejecutar el mismo código una y otra vez, cada tiempo con un valor diferente. <br>
A menudo, este es el caso cuando se trabaja con matrices. <br>
En lugar de escribir:
<pre>
Variable += Array[0] + "< br >";
Variable += Array[1] + "< br >";
Variable += Array[2] + "< br >";
Variable += Array[3] + "< br >";
Variable += Array[4] + "< br >";
Variable += Array[5] + "< br >";
</pre>
Se puede escribir:
<pre>
for (let i = 0; i < Array.length; i++) {
  Variable += Array[i] + "< br >";
}
</pre>
<h3>Diferentes tipos de bucles</h3>
JavaScript admite diferentes tipos de bucles:
<ul>
    <li><b>for</b> Recorre un bloque de código varias veces.</li>
    <li><b>for/in</b> Recorre las propiedades de un objeto.</li>
    <li><b>for/of</b> recorre los valores de un Objeto iterable.</li>
    <li><b>while</b> recorre un bloque de código mientras una condición especificada es verdadera.</li>
    <li><b>do/while</b> también recorre un bloque de código mientras se cumple una condición especificada.</li>
</ul>
<h3>El bucle For</h3>
La instrucción crea un bucle con 3 expresiones opcionales:
<ul>
    <li>La expresión 1 se ejecuta (una vez) antes de la ejecución del bloque de código.</li>
    <li>La expresión 2 define la condición para ejecutar el bloque de código.</li>
    <li>La expresión 3 se ejecuta (cada vez) después de que se haya ejecutado el bloque de código.</li>
</ul>
<h3>El bucle For In</h3>
La instrucción JavaScript recorre en bucle las propiedades de un objeto.
<h3>El bucle For Of</h3>
La instrucción <b><i>for of</i></b> JavaScript se repite en bucle a través de los valores de un objeto iterable. <br>
Permite recorrer estructuras de datos iterables como matrices, cadenas, mapas, listas de nodos y más. <br>
<b>Sintaxis</b>:
<pre>
for (Variable of Iterable) {
  Código
}
</pre>
<b>Variable</b>: para cada iteración, el valor de la siguiente propiedad es asignada a la variable. La variable se puede declarar con const, let o var. <br>
<b>Iterable</b>: un objeto que tiene propiedades iterables.
<h3>El bucle While</h3>
El bucle <b><i>while</i></b> recorre un bloque de código siempre que se cumpla una condición especificada. <br>
<b>Sintaxis</b>:
<pre>
while (Condición) {
  Código
}
</pre>
Si se olvida aumentar la variable utilizada en la condición, el bucle nunca terminará. Esto bloqueará el navegador.
<h3>El bucle Do While</h3>
El bucle <b><i>do while</i></b> es una variante del bucle <b><i>while</i></b>. <br>
Este bucle ejecuta el bloque de código una vez, antes de verificar si la condición es verdadera, y repite el bucle siempre que la condición sea verdadera. <br>
El bucle siempre será ejecutado al menos una vez, incluso si la condición es falsa, porque el bloque de código se ejecuta antes de probar la condición. <br>
<h3>Break</h3>
La declaración <b><i>break</i></b> "salta" de un bucle. <br>
La instrucción <b><i>continue</i></b> "salta" una iteración en el bucle. <br>
<h3>Etiquetas de JavaScript</h3>
Para etiquetar instrucciones de JavaScript, se precede a las instrucciones con un nombre de etiqueta y dos puntos:
<pre>
Instrucción: Valor
</pre>
Las instrucciones <b><i>break</i></b> y <b><i>continue</i></b> son las únicas instrucciones de JavaScript que se puede "saltar fuera" de un bloque de código. <br>
Sintaxis:
<pre>
break Instrucción;
continue Instrucción;
</pre>
La instrucción <b><i>continue</i></b> (con o sin una referencia de etiqueta) solo se puede usar para omitir una iteración de bucle. <br>
La instrucción <b><i>break</i></b>, sin una referencia de etiqueta, solo se puede usar para saltar fuera de un bucle o un interruptor. <br>
Con una referencia de etiqueta, la instrucción <b><i>break</i></b> se puede usar para saltar de cualquier bloque de código. <br>
<hr>
<h3>Iterables</h3>
Los iterables son objetos iterables (como las matrices). <br>
Se puede acceder a los iterables con un código simple y eficiente. <br>
<h3>Iterar</h3>
La iteración es fácil de entender. <br>
Simplemente significa hacer un bucle sobre una secuencia de elementos. <br>
Estos son algunos ejemplos sencillos:
<ul>
    <li>Iteración sobre una cadena.</li>
    <li>Iteración sobre una matriz.</li>
    <li>Iteración sobre una cadena.</li>
</ul>
Se puede usar un bucle para iterar sobre los elementos de una cadena. <br>
Se puede usar un bucle para iterar sobre los elementos de una matriz. <br>
Se puede usar un bucle para iterar sobre los elementos de un conjunto. <br>
Se puede utilizar un bucle para iterar sobre los elementos de un mapa. <br>
<hr>
<h3>Conjuntos</h3>
Un conjunto de JavaScript es una colección de valores únicos. <br>
Cada valor solo puede aparecer una vez en un conjunto. <br>
<ul>
    <li><b>new Set()</b> Crea un nuevo conjunto</li>
    <li><b>add()</b> Agrega un nuevo elemento al conjunto. </li>
    <li><b>delete()</b> Quita un elemento de un conjunto. </li>
    <li><b>has()</b> Devuelve true si existe un valor en el conjunto. </li>
    <li><b>forEach()</b> Invoca una devolución de llamada para cada elemento del conjunto. </li>
    <li><b>values()</b> Devuelve un iterador con todos los valores de un conjunto. </li>
</ul>
Se puede crear un conjunto de JavaScript de la siguiente manera: <br>
<b>Pasar una matriz a <i>new Set()</i></b>. <br>
<b>Crear un conjunto y usar <i>new Set()</i></b>.
<h3>El método <b>add()</b></h3>
Si se añade elementos iguales, solo se guardará el primero.
<hr>
<h3>Mapas</h3>
Un mapa contiene pares clave-valor en los que las claves pueden ser de cualquier tipo de datos. <br>
Un mapa recuerda el orden de inserción original de las claves. <br>
<ul>
    <li><b>new Map()</b> Crea un nuevo mapa.</li>
    <li><b>set()</b> Establece el valor de una clave en un mapa.</li>
    <li><b>get()</b> Obtiene el valor de una clave en un mapa.</li>
    <li><b>delete()</b> Quita un elemento Map especificado por la clave.</li>
    <li><b>has()</b> Devuelve true si existe una clave en un mapa.</li>
    <li><b>forEach()</b> Llama a una función para cada par clave/valor de un mapa.</li>
    <li><b>entries()</b> Devuelve un iterador con los pares [clave, valor] en un mapa.</li>
</ul>
Se puede crear un mapa de JavaScript de la siguiente manera:
<b>Pasar una matriz a new <i>Map()</i></b>. <br>
<b>Crear un mapa y usar <i>Map.set()</i></b>. <br>
El método <b><i>.set()</i></b> también se puede utilizar para cambiar los valores de un mapa existentes. <br>
El método <b><i>.get()</i></b> obtiene el valor de una clave en un mapa.
<hr>
<h3>Conversión de tipos de datos</h3>
Las variables de JavaScript se pueden convertir en una nueva variable y/o otro tipo de datos. <br>
Mediante el uso de una función JavaScript o automáticamente por el propio JavaScript.
<h3>Conversión de cadenas en números</h3>
El método global <b><i>Number()</i></b> convierte una variable (o un valor) en un número. <br>
Una cadena numérica (como "3.14") se convierte en un número (como 3.14). <br>
Una cadena vacía (como "") se convierte en 0. <br>
Una cadena no numérica (como "Juan") se convierte en (<i>NaN</i>). <br>

<h3>El operador unario +</h3>
El operador unario <b><i>+</i></b> se puede utilizar par convertir una variable en un número:
<pre>
let y = "5"; // y es una cadena
let x = + y; // x es un número
</pre>
Si no se puede convertir, seguirá convirtiéndose en un número, pero con el valor (<i>NaN</i>).
<h3>Conversión de números a cadenas</h3>
El método global <b><i>String()</i></b> puede convertir números en cadenas. <br>
Se puede utilizar en cualquier tipo de números, literales, variables o expresiones.
<h3>Conversión de booleanos a números</h3>
El método global <b><i>Number()</i></b> también puede convertir booleanos en números. <br>
Retornando <b><i>0</i></b> para <b><i>false</i></b> y <b><i>1</i></b> para <b><i>true</i></b>.
<hr>
<h3>Operaciones Bit a Bit</h3>
JavaScript almacena los números como números de coma flotante de 64 bits, pero todos bit a bit Las operaciones se realizan en números binarios de 32 bits. <br>
Antes de realizar una operación bit a bit, JavaScript convierte los números a 32 bits enteros con signo. <br>
Una vez realizada la operación bit a bit, el resultado se convierte de nuevo a JavaScript de 64 bits Números. <br>
Cuando se realiza un bit <b><i>&</i></b> bit en un par de bits, devuelve 1 si ambos bits son 1. <br>
Cuando se realiza un bit <b><i>|</i></b> bit en un par de bits, devuelve 1 si uno de los bits es 1. <br>
Cuando se realiza un bit <b><i>^</i></b> bit en un par de bits, devuelve 1 si los bits son diferentes.
<hr>
<h3>Expresiones regulares</h3>
Una expresión regular es una secuencia de caracteres que forma un patrón de búsqueda. <br>
El patrón de búsqueda se puede utilizar para la búsqueda de texto y el reemplazo de texto Operaciones. <br>
<h3>¿Qué es una expresión regular?</h3>
Una expresión regular es una secuencia de caracteres que forma un patrón de búsqueda. <br>
Al buscar datos en un texto, puede utilizar este patrón de búsqueda para describir lo que está buscando. <br>
Una expresión regular puede ser un solo carácter o un patrón más complicado. <br>
Las expresiones regulares se pueden utilizar para realizar todo tipo de operaciones de búsqueda y reemplazo de texto. <br>
Sintaxis:
<pre>
/Patrón/Modificador;
</pre>
En JavaScript, las expresiones regulares se usan a menudo con las dos cadenas y métodos <b><i>search()</i></b> y <b><i>replace()
</i></b>. <br>
El método <b><i>search()</i></b> utiliza una expresión para buscar un match y devuelve la posición de la coincidencia. <br>
El método <b><i>replace()</i></b> devuelve una cadena modificada en la que el método se reemplaza el patrón.
<hr>
<h3>Precedencia de operadores</h3>
La precedencia del operador describe el orden en el que se realizan las operaciones en una expresión aritmética. <br>
<b>La multiplicación (*) y la división (/) tienen mayor prioridad que suma (+) y resta (-)</b>. <br>
Las expresiones entre paréntesis se calculan antes de que el resto de la expresión. <br>
Las exponenciaciones se ejecutan antes que las multiplicaciones y las multiplicaciones y divisiones se ejecutan antes que las
sumas y restas.
<hr>
<h3>Errores de JavaScript</h3>
La instrucción <b><i>try</i></b> define un bloque de código que se va a ejecutar (probar). <br>
La instrucción <b><i>catch</i></b> define un bloque de código para controlar cualquier error. <br>
La instrucción <b><i>finally</i></b> define un bloque de código que se ejecutará independientemente del resultado. <br>
La instrucción <b><i>throw</i></b> define un error personalizado. <br>
Al ejecutar código JavaScript, se pueden cometer diferentes errores ocurrir. <br>
Los errores pueden ser errores de codificación cometidos por el programador, errores debidos a errores de insumo, y otras cosas imprevisibles. <br>
Cuando se produce un error, JavaScript normalmente se detiene y genera un mensaje de error. <br>
La <b><i>throw</i></b> instrucción permite crear un error personalizado. <br>
Si se utiliza <b><i>throw</i></b> junto con <b><i>try</i></b> y <b><i>catch</i></b>, se puede controlar el programa para que genere mensajes de error personalizados. <br>
La propiedad <b><i>.name</i></b> puede devolver el tipo de error.
<hr>
<h3>Ámbito JavaScript</h3>
El ámbito determina la accesibilidad (visibilidad) de las variables. <br>
Las variables de JavaScript tienen 3 tipos de ámbito:
<ul>
    <li>Ámbito de bloque.</li>
    <li>Ámbito de la función.</li>
    <li>Alcance global.</li>
</ul>
Antes de ES6 (2015), las variables de JavaScript solo tenían ámbito global y ámbito de función. <br>
ES6 introdujo dos nuevas palabras clave importantes de JavaScript, <b><i>let</i></b> y <b><i>const</i></b>. <br>
Estas dos palabras clave proporcionan el ámbito de bloque en JavaScript. <br>
No se puede acceder a las variables declaradas dentro de un bloque <b><i>{}</i></b> desde fuera del mismo. <br>
Las variables declaradas con la palabra clave <b><i>var</i></b> no pueden tener ámbito de bloque. <br>
Las variables declaradas dentro de una función de JavaScript son <b>LOCALES</b> para la función. <br>
Dado que las variables locales solo se reconocen dentro de sus funciones, las variables con el mismo nombre se pueden usar en diferentes funciones. <br>
Las variables locales se crean cuando se inicia una función y se eliminan cuando se completa la función. <br>
Una variable declarada fuera de una función, se convierte en global. <br>
En JavaScript, los objetos y las funciones también son variables. <br>
La duración de una variable de JavaScript comienza cuando se declara. <br>
Las variables de función (locales) se eliminan cuando se completa la función. <br>
En un navegador web, las variables globales se eliminan al cerrar el navegador ventana (o pestaña). <br>
Los argumentos de función (parámetros) funcionan como variables locales dentro de las funciones.
<hr>
<h3>Elevación</h3>
La elevación es el comportamiento predeterminado de JavaScript de mover las declaraciones a la función de arriba. <br>
En JavaScript, una variable se puede declarar después de que se haya utilizado. <br>
En otras palabras; Se puede utilizar una variable antes de que se haya declarado. <br>
Para entender esto, hay que entender el término "<b>elevación</b>". <br>
La elevación es el comportamiento predeterminado de JavaScript de mover todas las declaraciones a la  parte superior del ámbito actual (en la parte superior del script actual o de la función actual). <br>
JavaScript solo levanta declaraciones, no inicializaciones. <br>
La elevación es (para muchos desarrolladores) un comportamiento desconocido o pasado por alto de JavaScript. <br>
Si un desarrollador no entiende la elevación, los programas pueden contener bugs (errores). <br>
Para evitar errores, declare siempre todas las variables al principio de todos los ámbitos. <br>
Dado que así es como JavaScript interpreta el código, siempre es una buena regla.
<hr>
<h3>Modo estricto</h3>
<b><i>use strict</i></b>; Define que el código JavaScript debe ejecutarse en "Modo estricto". <br>
La directiva <b><i>use strict</i></b> era nueva en la versión 5 de ECMAScript. <br>
No es una declaración, sino una expresión literal, ignorada por versiones anteriores de JavaScript. <br>
El propósito de es indicar que el código debe ejecutarse en "modo estricto". <br>
Con el modo estricto, no se puede, por ejemplo, utilizar variables no declaradas. <br>
Todos los navegadores modernos admiten "uso estricto", excepto Internet Explorer 9 y versiones anteriores. <br>
Se puede usar el modo estricto en todos los programas. <br>
Ayudando a escribir un código más limpio, como evitar el uso de variables no declaradas. <br>
<b><i>use strict</i></b> es solo una cadena, por lo que IE 9 no arrojará un error incluso si no lo entiende. <br>
El modo estricto se declara añadiendo <b><i>"use strict";</i></b> al principio de un script o una función. <br>
No se permite en modo estricto:
<ul>
    <li>El uso de un objeto, sin declararlo, no está permitido.</li>
    <li>No se permite eliminar una variable (u objeto) (Con "delete").</li>
    <li>No se permite eliminar una función (Con "delete").</li>
    <li>No se permite duplicar el nombre de un parámetro.</li>
    <li>Los literales numéricos octales no están permitidos.</li>
    <li>Los caracteres de escape octal no están permitidos.</li>
    <li>No se permite escribir en una propiedad de solo lectura.</li>
    <li>No se permite escribir en una propiedad de solo obtención.</li>
    <li>No se permite eliminar una propiedad imborrable.</li>
    <li>La palabra <b><i>eval</i></b> no se puede usar como variable.</li>
    <li>La palabra <b><i>arguments</i></b> no se puede usar como variable.</li>
    <li>La declaración <b><i>with</i></b> no está permitida.</li>
    <li>Por razones de seguridad, no está permitido crear variables en el ámbito desde el que se llamó <b><i>eval()</i></b>.</li>
</ul>
La directiva "use strict" solo se reconoce al principio de un script o una función.
<hr>
<h3>This</h3>
En JavaScript, la palabra clave <b><i>this</i></b> se refiere a un objeto. <br>
El objeto depende de cómo se invoque (use o llame). <br>
La palabra clave <b><i>this</i></b> se refiere a diferentes objetos dependiendo de cómo se use:
<dl>
    <dt>En un método de objeto, hace referencia al objeto.</dt>
        <dd>
            Cuando se utiliza en un método de objeto, hace referencia al objeto.
        </dd>
    <dt>Solo, se refiere al objeto global.</dt>
        <dd>
            Cuando se usa solo, se refiere al objeto global. <br>
            Porque se está ejecutando en el ámbito global. <br>
            En una ventana del navegador, el objeto global es:[object Window]
        </dd>
    <dt>En una función, hace referencia al objeto global.</dt>
        <dd>
            En una función, el objeto global <b><i>this</i></b> es el enlace predeterminado.
        </dd>
    <dt>En una función, en modo estricto, es indefinido.</dt>
        <dd>
            El modo estricto de JavaScript no permite el enlace predeterminado.
        </dd>
    <dt>En un evento, hace referencia al elemento que recibió el evento.</dt>
        <dd>
            En los controladores de eventos HTML, hace referencia al elemento HTML que recibió el evento.
        </dd>
</dl>
<b><i>this</i></b> no es una variable. Es una palabra clave, por lo tanto no se puede cambiar el valor de <b><i>this</i></b>.
<hr>
<h3>Función de flecha</h3>
Las funciones de flecha se introdujeron en ES6. <br>
Las funciones de flecha permiten escribir sintaxis de función más corta:
<pre>
let Función = (a, b) => a * b;
</pre>
Antes de la flecha:
<pre>
hello = function() {
  return "Hello World!";
}
</pre>
Con función de flecha:
<pre>
hello = () => {
  return "Hello World!";
}
</pre>
¡Se acorta! Si la función tiene solo una instrucción, y la instrucción devuelve un valor, se puede eliminar los corchetes y la palabra clave <b><i>return</i></b>. <br>
Esto solo funciona si la función tiene solo un declaración. <br>
Si tiene parámetros, se pasan entre paréntesis. <br>
<h3>¿Qué pasa con this?</h3>
El manejo de <b><i>this</i></b> también es diferente en las funciones de flecha en comparación con las normales funciones. <br>
En resumen, con las funciones de flecha no hay enlace de <b><i>this</i></b>. <br>
En las funciones regulares, la palabra clave representaba el objeto que llamaba a la función función, que puede ser la ventana, el documento, un botón o lo que sea. <br>
Con las funciones de flecha, la palabra clave siempre representa el objeto que Se definió la función de flecha. <br>
<h3>Clases</h3>
ECMAScript 2015, también conocido como ES6, introdujo las clases de JavaScript. <br>
Las clases de JavaScript son plantillas para objetos de JavaScript. <br>
Hay que utilizar la palabra clave <b><iclass></i></b> para crear una clase. <br>
Agregar siempre un método denominado <b><i>constructor()</i></b>. <br>
En el ejemplo se crea una clase denominada "Clase0". <br>
La clase tiene dos propiedades iniciales: "Atributo0" y "Atributo1". <br>
<b>Una clase de JavaScript no es un objeto</b>. <br>
Es una plantilla para objetos JavaScript. <br>
El método constructor se llama automáticamente cuando se crea un nuevo objeto. <br>
<h3>El método constructor</h3>
El método constructor es un método especial:
<ul>
    <li>Tiene que tener el nombre exacto "<b>constructor</b>".</li>
    <li>Se ejecuta automáticamente cuando se crea un nuevo objeto.</li>
    <li>Se utiliza para inicializar las propiedades de los objetos.</li>
    <li>Si no define un método constructor, JavaScript agregará un método constructor vacío. </li>
</ul>
Los métodos de clase se crean con la misma sintaxis que los métodos de objeto. <br>
Se puede enviar parámetros a los métodos de clase. <br>
Para crear una herencia de clase, se usa la palabra clave <b><i>extends</i></b>. <br>
Una clase creada con una herencia de clase hereda todos los métodos de otra clase. <br>
El método <b><i>super()</i></b> se refiere al elemento primario clase. <br>

<hr>
<h3>Módulos</h3>
Los módulos de JavaScript permiten dividir su código en archivos separados. <br>
Esto facilita el mantenimiento de una base de código. <br>
Los módulos se importan desde archivos externos con la instrucción.import <br>
Los módulos también se basan en la etiqueta:
<pre>
< script >.type="module"
</pre>
Los módulos con funciones o variables se pueden almacenar en cualquier archivo externo. <br>
Hay dos tipos de exportaciones: <b>exportaciones con nombre y exportaciones predeterminadas</b>. <br>
Se puede importar módulos en un archivo de dos maneras, en función de si se denominan exportaciones o exportaciones predeterminadas. <br>
Las exportaciones con nombre se construyen con llaves. Las exportaciones predeterminadas no. <br>
<b>Los módulos solo funcionan con el protocolo HTTP(s). <br>
Una página web abierta a través del protocolo file:// no puede utilizar la importación / exportación.</b>
<hr>
<h3>JSON</h3>
JSON es un formato para almacenar y transportar datos. <br>
JSON se usa a menudo cuando los datos se envían desde un servidor a una web página.
<ul>
    <li>JSON son las siglas de JavaScript Object Notation.</li>
    <li>JSON es un formato ligero de intercambio de datos.</li>
    <li>JSON es independiente del lenguaje.</li>
    <li>JSON es "autodescriptivo" y fácil de entender.</li>
</ul>
La sintaxis JSON se deriva de la sintaxis de notación de objetos JavaScript, pero el formato JSON es solo texto. <br>
El código para leer y generar datos JSON se puede escribir en cualquier lenguaje de programación, <br>
El formato JSON es sintácticamente idéntico al código para crear Objetos JavaScript. <br>
Debido a esta similitud, un programa JavaScript puede convertir fácilmente los datos JSON en nativos Objetos JavaScript. <br>
Los datos JSON se escriben como pares nombre/valor, al igual que el objeto JavaScript propiedades. <br>
Un par nombre/valor consta de un nombre de campo (entre comillas dobles), seguido de dos puntos, seguido de un valor. <br>
Los nombres JSON requieren comillas dobles. Los nombres de JavaScript no lo hacen. <br>
Un uso común de JSON es leer datos de un servidor web, y mostrar los datos en una página web. <br>
Para simplificar, esto se puede demostrar utilizando una cadena como entrada. <br>
En primer lugar, se crea una cadena de JavaScript que contenga la sintaxis JSON:
<pre>
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
</pre>
A continuación, se utiliza la función integrada de JavaScript <b><i>JSON.parse()</i></b> para convertir la cadena en un objeto de JavaScript:
<pre>
const obj = JSON.parse(text);
</pre>
<hr>
<h3>Depuración</h3>
Los errores pueden ocurrir (ocurrirán) cada vez que se escriba un nuevo código informático. <br>
El código de programación puede contener errores de sintaxis o errores lógicos. <br>
Muchos de estos errores son difíciles de diagnosticar. <br>
A menudo, cuando el código de programación contiene errores, no sucede nada. No hay mensajes de error y no obtendrá indicaciones sobre dónde buscar errores. <br>
La búsqueda (y corrección) de errores en el código de programación se denomina depuración de código. <br>
La depuración no es fácil. Pero, afortunadamente, todos los navegadores modernos tienen un Depurador de JavaScript. <br>
Los depuradores integrados se pueden activar y desactivar, lo que obliga a notificar los errores a el usuario. <br>
Con un depurador, también puede establecer puntos de interrupción (lugares donde se ejecuta el código se puede detener) y examinar las variables mientras se ejecuta el código. <br>
En la ventana del depurador, puede establecer puntos de interrupción en el código JavaScript. <br>
En cada punto de interrupción, JavaScript dejará de ejecutarse y le permitirá examinar Valores de JavaScript. <br>
Después de examinar los valores, puede reanudar la ejecución del código (normalmente con un botón de reproducción). <br>
La palabra clave <b><i>debugger</i></b> detiene la ejecución de JavaScript, y llama (si está disponible) a la función de depuración.<br>
Esto tiene la misma función que establecer un punto de interrupción en el depurador. <br>
Si no hay ninguna depuración disponible, la instrucción del depurador no tiene ningún efecto.
<hr>
<h3>Convenciones</h3>
Las convenciones de codificación son directrices de estilo para la programación. Por lo general, cubren:
<ul>
    <li>Reglas de nomenclatura y declaración para variables y funciones.</li>
    <li>Reglas para el uso de espacios en blanco, sangría y comentarios.</li>
    <li>Prácticas y principios de programación.</li>
</ul>
Las convenciones de codificación aseguran la calidad:
<ul>
    <li>Mejorar la legibilidad del código.</li>
    <li>Facilitar el mantenimiento del código.</li>
    <li>Las convenciones de codificación pueden ser reglas documentadas para que los equipos las sigan, o simplemente ser su <li>práctica de codificación individual.</li>
</ul>
Buenas practicas son:
<ul>
    <li>Espacios alrededor de los operadores.</li>
    <li>Sangría de código.</li>
    <li>Terminar siempre una declaración simple con un punto y coma.</li>
    <li>Colocar el soporte de apertura al final de la primera línea.</li>
    <li>Colocar el soporte de cierre en una nueva línea, sin espacios iniciales.</li>
    <li>Colocar el corchete de apertura en la misma línea que el nombre del objeto.</li>
    <li>Usar dos puntos más un espacio entre cada propiedad y su valor.</li>
    <li>No agregar una coma después del último par propiedad-valor.</li>
    <li>Colocar el soporte de cierre en una nueva línea, sin espacios principales.</li>
    <li>Evitar las líneas de más de 80 Caracteres.</li>
    <li>Declarar objetos con const evitará cualquier cambio accidental.</li>
    <li>Declarar matrices con const evitará cualquier cambio accidental.</li>
    <li>Siempre terminar un switch con default.</li>
</ul>
<h3>JS asíncrono</h3>
Una devolución de llamada es una función que se pasa como argumento a otra función. <br>
Esta técnica permite que una función llame a otra función. <br>
Una función de devolución de llamada puede ejecutarse después de que otra función haya finalizado. <br>
Las funciones de JavaScript se ejecutan en la secuencia en que se llaman. No en la secuencia en que se definen. <br>
Una devolución de llamada es una función que se pasa como argumento a otra función. <br>
Donde realmente brillan las devoluciones de llamada es en las funciones asíncronas, donde una función tiene que esperar a otra función (como esperar a que se cargue un archivo). <br>
Las funciones que se ejecutan en paralelo con otras funciones se denominan asincrónicas. <br>
En el mundo real, las devoluciones de llamada se utilizan con mayor frecuencia con funciones asincrónicas. <br>
Un ejemplo típico es <b><i>setTimeout()</i></b>. <br>
Cuando se utiliza la función JavaScript <b><i>setTimeout()</i></b>, se puede especificar una función de devolución de llamada para que se ejecute en el tiempo de espera. <br>
En lugar de pasar el nombre de una función como argumento a otra función, siempre se puede pasar una función completa en su lugar. <br>
Cuando se utiliza la función JavaScript <b><i>setInterval()</i></b>, se puede especificar una función de devolución de llamada que se ejecutará para cada intervalo de tiempo. <br>
Con la programación asincrónica, los programas de JavaScript pueden iniciar tareas de larga duración, y continuar ejecutando otras tareas en paralelo. <br>
Sin embargo, los programas asíncronos son difíciles de escribir y difíciles de depurar. <br>
Debido a esto, la mayoría de los métodos asincrónicos modernos de JavaScript no usan devoluciones de llamada. En cambio, en JavaScript, la programación asincrónica se resuelve usando promesas en su lugar. <br>
Un objeto de promesa de JavaScript puede ser:
<ul>
    <li>Pendiente.</li>
    <li>Cumplido.</li>
    <li>Rechazado.</li>
</ul>
El objeto <i>Promise</i> admite dos propiedades: <i>state</i> y <i>result</i>. <br>
Mientras un objeto <i>Promise</i> está "pendiente" (funcionando), el resultado no está definido. <br>
Cuando un objeto <i>Promise</i> se "cumple", el resultado es un valor. <br>
Cuando se "rechaza" un objeto <i>Promise</i>, el resultado es un objeto de error. <br>
Los dos argumentos (resolve y reject) están predefinidos por JavaScript. <br>
No los crearemos, sino que llamaremos a uno de ellos cuando la función ejecutora esté lista. <br>
Muy a menudo no necesitaremos una función de rechazo.
<hr>
<h3>El HTML DOM (Document Object Model)</h3>
Cuando se carga una página web, el navegador crea un <b>Document Object Model</b> de la página. <br>
Con el modelo de objetos, JavaScript obtiene toda la potencia que necesita para crear HTML dinámico:
<ul>
    <li>JavaScript puede cambiar todos los elementos HTML de la página.</li>
    <li>JavaScript puede cambiar todos los atributos HTML de la página.</li>
    <li>JavaScript puede cambiar todos los estilos CSS de la página.</li>
    <li>JavaScript puede eliminar elementos y atributos HTML existentes.</li>
    <li>JavaScript puede agregar nuevos elementos y atributos HTML.</li>
    <li>JavaScript puede reaccionar a todos los eventos HTML existentes en la página.</li>
    <li>JavaScript puede crear nuevos eventos HTML en la página.</li>
</ul>
El estándar W3C DOM se divide en 3 partes diferentes:
<ul>
    <li><b>Core DOM</b>: modelo estándar para todos los tipos de documentos.</li>
    <li><b>XML DOM</b>: modelo estándar para documentos XML.</li>
    <li><b>HTML DOM</b>: modelo estándar para documentos HTML.</li>
</ul>
Los métodos HTML DOM son acciones que se pueden realizar (en HTML Elementos). <br>
Las propiedades HTML DOM son valores (de elementos HTML) que puede establecer o cambiar.
<h3>La interfaz de programación DOM</h3>
Se puede acceder al DOM HTML con JavaScript (y con otros lenguajes de programación). <br>
En el DOM, todos los elementos HTML se definen como objetos. <br>
La interfaz de programación es las propiedades y métodos de cada objeto. <br>
Una propiedad es un valor que se puede obtener o establecer (como cambiar el parámetro contenido de un elemento HTML). <br>
Un método es una acción que puedes hacer (como add o eliminar un elemento HTML). <br>
En el ejemplo, <b><i>getElementById</i></b> es un método, mientras que <b><i>innerHTML</i></b> es una propiedad. <br>
La propiedad <b><i>innerHTML</i></b> es útil para obtener o reemplazar el contenido de los elementos HTML. <br>
El objeto de documento representa la página web. <br>
Si se desea acceder a cualquier elemento de una página HTML, siempre se comienza accediendo a la carpeta objeto de documento.
<h3>Búsqueda de elementos HTML</h3>
A menudo, con JavaScript, se desea manipular elementos HTML. <br>
Para ello, primero se tiene que encontrar los elementos. Hay varias formas de hacerlo:
<ul>
    <li>Búsqueda de elementos HTML por id.</li>
    <li>Búsqueda de elementos HTML por nombre de etiqueta.</li>
    <li>Búsqueda de elementos HTML por nombre de clase.</li>
    <li>Búsqueda de elementos HTML mediante selectores CSS.</li>
    <li>Búsqueda de elementos HTML por colecciones de objetos HTML.</li>
</ul>
Si se desea encontrar todos los elementos HTML que coincidan con un selector CSS especificado (id, nombres de clase, tipos, atributos, valores de atributos, etc.), se utiliza el método <b><i>querySelectorAll()</i></b>.
<h3>Cambiar el contenido HTML</h3>
La forma más fácil de modificar el contenido de un elemento HTML es mediante el uso de la propiedad <b><i>innerHTML</i></b>. <br>
Para cambiar el valor de un atributo HTML, se utiliza esta sintaxis:
<pre>
document.getElementById(id).Atributo = Nuevo valor;
</pre>
En JavaScript, <b><i>document.write()</i></b> se puede usar para escribir directamente en el flujo HTML de salida. <br>
No se debe utilizar nunca después de cargar el documento. Hará sobrescribir el documento.
<h3>Validación de formularios JavaScript</h3>
La validación de formularios HTML se puede realizar mediante JavaScript. <br>
Si un campo de formulario está vacío, una función puede alertar de un mensaje y devolver false, para evitar que se envíe el formulario.
<h3>Cambiar el estilo HTML</h3>
Para cambiar el estilo de un elemento HTML, se utiliza esta sintaxis:
<pre>
document.getElementById(id).Estilo.Propiedad = Nuevo estilo;
</pre>
<h3>El método addEventListener()</h3>
El método asocia un controlador de eventos al elemento especificado. <br>
El método asocia un controlador de eventos a un elemento sin sobrescribir los controladores de eventos existentes. <br>
Se puede agregar muchos controladores de eventos a un elemento. <br>
Se puede agregar muchos controladores de eventos del mismo tipo a un elemento, es decir, dos eventos de "clic". <br>
Se puede agregar detectores de eventos a cualquier objeto DOM, no solo a los elementos HTML. es decir, el objeto ventana. <br>
El método facilita el control de cómo reacciona el evento a la propagación. <br>
Cuando se utiliza el método, el JavaScript se separa del marcado HTML, para una mejor legibilidad y le permite agregar detectores de eventos incluso cuando no controla el marcado HTML. <br>
Se puede quitar fácilmente un detector de eventos mediante el método <b><i>removeEventListener()</i></b>.
<pre>
element.addEventListener(Evento, Función, useCapture);
</pre>
El primer parámetro es el tipo del evento (como "click" o "mousedown" o cualquier otro evento HTML DOM). <br>
El segundo parámetro es la función a la que se quiere llamar cuando se produce el evento. <br>
El tercer parámetro es un valor booleano que especifica si se debe utilizar la propagación de eventos o la captura de eventos. Este parámetro es opcional. <br>
Hay dos propiedades especiales que permiten el acceso al documento completo:
<ul>
    <li><b>document.body</b>: El cuerpo del documento.</li>
    <li><b>document.documentElement</b>: El documento completo.</li>
</ul>
A menudo se utiliza un cuadro de solicitud si desea que el usuario introduzca un valor antes de entrar en una página. <br>
Cuando aparezca un cuadro de aviso, el usuario tendrá que hacer clic en "Aceptar" o "Cancelar" para continuar después de introducir un valor de entrada. <br>
Si el usuario hace clic en "Aceptar", el cuadro devuelve el valor de entrada. Si el usuario hace clic en "Cancelar", la casilla devuelve null. <br>
Sintaxis:
<pre>
window.prompt("Enunciado","Texto por defecto");
</pre>
Para mostrar saltos de línea dentro de un cuadro emergente, se utiliza una barra diagonal inversa seguida del carácter <i>n</i>. <br>
<h3>Cookies de JavaScript</h3>
Las cookies permiten almacenar información del usuario en páginas web. <br>
JavaScript puede crear, leer y eliminar cookies con la propiedad <b><i>document.cookie</i></b>. <br>
Con JavaScript, se puede crear una cookie de la siguiente manera:
<pre>
document.cookie = "NombreDeUsuario=estiven0425";
</pre>
También se puede añadir una fecha de caducidad (en hora UTC). De forma predeterminada, la cookie se elimina cuando se cierra el navegador:
<pre>
document.cookie = "NombreDeUsuario=estiven0425; expires=Thu, 18 Dec 2013 12:00:00 UTC";
</pre>
Con un parámetro de ruta, se puede decirle al navegador a qué ruta pertenece la cookie. De forma predeterminada, la cookie pertenece a la página actual.
<pre>
document.cookie = "NombreDeUsuario=estiven0425; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
</pre>
Con JavaScript, las cookies se pueden leer así:
<pre>
let x = document.cookie;
</pre>
<b><i>document.cookie</i></b> devolverá todas las cookies en una cadena muy parecida a: cookie1=value; cookie2=valor; cookie3=valor; <br>
Con JavaScript, se puede cambiar una cookie de la misma manera que se creo. <br>
Eliminar una cookie es muy sencillo. <br>
No es necesario especificar un valor de cookie cuando se elimina una cookie. <br>
Basta con establecer el parámetro expires en una fecha pasada. <br>
Se debe definir la ruta de la cookie para asegurarse de eliminar la cookie correcta. <br>
Algunos navegadores no permitirán eliminar una cookie si no especifica la ruta.
<hr>
<h3>API'S</h3>
Una API web es el sueño de un desarrollador. <br>
Puede ampliar la funcionalidad del navegador. <br>
Puede simplificar en gran medida funciones complejas. <br>
Puede proporcionar una sintaxis sencilla a código complejo. <br>
Todos los navegadores tienen un conjunto de API web integradas para respaldar operaciones complejas y para ayudar a acceder a los datos. <br>
Por ejemplo, la API de geolocalización puede devolver las coordenadas de dónde se encuentra el navegador. <br>
Las API de terceros no están integradas en el navegador. <br>
Para utilizar estas APIs, hay que descargar el código de la Web. <br>
Ejemplos:
<ul>
    <li><b>API de YouTube</b>: Permite mostrar videos en un sitio web.</li>
    <li><b>API de Twitter</b>: Permite mostrar Tweets en un sitio web.</li>
    <li><b>API de Facebook</b>: Permite mostrar información de Facebook en un sitio web.</li>
</ul>
La API de historial web <b><i>windows.history</i></b> proporciona métodos sencillos para acceder al objeto. <br>
El objeto <b><i>window.history</i></b> contiene las direcciones URL (sitios web) visitadas por el usuario. <br>
El método back() carga la URL anterior en la lista <b><i>windows.history</i></b>. <br>
Es lo mismo que hacer clic en la "flecha hacia atrás" en el navegador. <br>
<pre>
window.history.back();
</pre>
El método <b><i>go()</i></b> carga una URL específica de la lista de historial:
<pre>
window.history.go(-2);
</pre>
<h3>LocalStorage y SessionStorage</h3>
La API de almacenamiento web es una sintaxis sencilla para almacenar y recuperar datos en el navegador. Es muy fácil de usar. <br>
El objeto <b><i>localStorage</i></b> proporciona acceso a un almacenamiento local para un sitio web determinado. Permite almacenar, leer, agregar, modificar y eliminar elementos de datos para ese dominio. <br>
Los datos se almacenan sin fecha de caducidad y no se eliminarán cuando se cierre el navegador. <br>
Los datos estarán disponibles durante días, semanas y años. <br>
El método <b><i>localStorage.setItem()</i></b> almacena un elemento de datos en un almacén. <br>
Toma un nombre y un valor como parámetros. <br>
Ejemplo:
<pre>
localStorage.setItem("NombreDeUsuario", "estiven0425");
</pre>
El método <b><i>localStorage.getItem()</i></b> recupera un elemento de datos del almacenamiento. <br>
Toma un nombre como parámetro. <br>
Ejemplo:
<pre>
localStorage.getItem("NombreDeUsuario");
</pre>
El objeto <b><i>sessionStorage</i></b> es idéntico al objeto <b><i>localStorage</i></b>. <br>
La diferencia es que el objeto sessionStorage almacena los datos de una sesión. <br>
Los datos se eliminan cuando se cierra el navegador. <br>
<h3>Web workers</h3>
Un web worker es un JavaScript que se ejecuta en segundo plano, sin afectar al rendimiento de la página. <br>
Al ejecutar secuencias de comandos en una página HTML, la página deja de responder hasta que finaliza la secuencia de comandos. <br>
Un web worker es un JavaScript que se ejecuta en segundo plano, de forma independiente de otros scripts, sin afectar el rendimiento de la página. Puedes seguir haciendo lo que quieras: hacer clic, seleccionar cosas, etc., mientras el trabajador web se ejecuta en segundo plano. <br>
La parte importante del código anterior es el método <b><i>postMessage()</i></b>, que se utiliza para enviar un mensaje a la página HTML. <br>
Ahora que tenemos el archivo de trabajo web, hay llamarlo desde una página HTML. <br>
Las siguientes líneas comprueban si el trabajador ya existe, si no es así, se crea un nuevo objeto de trabajo web y ejecuta el código en "WebWorker.js":
<pre>
if (typeof(w) == "undefined") {
  w = new Worker("WebWorker.js");
}
</pre>
A continuación, se puede enviar y recibir mensajes del trabajador web. <br>
Se debe agregar un detector de eventos "onmessage" al trabajador web.
<pre>
w.onmessage = function(event){
  document.getElementById("result").innerHTML = event.data;
};
</pre>
Cuando el trabajador web publica un mensaje, se ejecuta el código dentro del detector de eventos. Los datos del Web Worker se almacena en <b><i>event.data</i></b>. <br>
Cuando se crea un objeto de trabajo web, continuará escuchando mensajes (incluso después de que finalice el script externo) hasta que finalice. <br>
Para terminar un web worker y liberar recursos del navegador o del equipo, se usar el método <b><i>terminate()</i></b>.
<pre>
w.terminate();
</pre>
Si se establece la variable de trabajo en undefined, después de que se haya terminado, se puede reutilizar el código:
<pre>
w = undefined;
</pre>
<h3>Fetch</h3>
La interfaz de la API Fetch permite que el navegador web realice solicitudes HTTP a los servidores web.
<hr>
<h3>AJAX</h3>
AJAX es el sueño de cualquier desarrollador, porque se puede:
<ul>
    <li>Leer datos de un servidor web, después de que se haya cargado la página.<li>
    <li>Actualizar una página web sin volver a cargar la página.<li>
    <li>Enviar datos a un servidor web, en segundo plano.<li>
</ul>
<h3>¿Qué es AJAX?</h3>
AJAX = A JavaScript síncrono Ay XML. <br>
AJAX no es un lenguaje de programación. <br>
AJAX solo usa una combinación de:
<ul>
    <li>Un objeto integrado en el navegador (para solicitar datos de un servidor web)<b><i>XMLHttpRequest</i></b>. </li>
    <li>JavaScript y HTML DOM (para mostrar o utilizar los datos). </li>
</ul>
AJAX permite que las páginas web se actualicen de forma asíncrona mediante el intercambio de datos con un servidor web en segundo plano. Esto significa que es posible actualizar partes de una página web, sin volver a cargar toda la página. <br>
Los exploradores modernos pueden usar la API Fetch en lugar del objeto XMLHttpRequest. <br>
La interfaz de la API Fetch permite que el navegador web realice solicitudes HTTP a los servidores web. <br>
Si usa el objeto XMLHttpRequest, Fetch puede hacer lo mismo de una manera más sencilla. <br>
Todos los navegadores modernos son compatibles con el objeto <b><i>XMLHttpRequest</i></b>. <br>
El objeto se puede utilizar para intercambiar datos con un servidor web detrás de escenas. Esto significa que es posible actualizar partes de una página web, sin volver a cargar toda la página. <br>
Todos los navegadores modernos (Chrome, Firefox, IE, Edge, Safari, Opera) tienen un objeto <b><i>XMLHttpRequest</i></b> incorporado. <br>
Sintaxis para crear un objeto <b><i>XMLHttpRequest</i></b>:
<pre>
Variable = new XMLHttpRequest();
</pre>
Para enviar una solicitud a un servidor, se puede utilizar los métodos open() y send() del objeto:
<pre>
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
</pre>
El objeto <b><i>XMLHttpRequest</i></b> se utiliza para solicitar datos de un servidor. <br>
Para enviar una solicitud a un servidor, usamos los métodos <b><i>open()</i></b> y <b><i>send()</i></b> del objeto <b><i>XMLHttpRequest</i></b>. <br>
El parámetro url del método <b><i>open()</i></b>, es una dirección a un archivo en un servidor. <br>
El archivo puede ser cualquier tipo de archivo, como .txt y .xml, o archivos de scripting del servidor como .asp y .php (que pueden realizar acciones en el servidor antes de enviar la respuesta de vuelta). <br>
<h3>Asíncrono: ¿verdadero o falso?</h3>
Las solicitudes del servidor deben enviarse de forma asincrónica. <br>
El parámetro asíncrono de <b><i>open()</i></b> method debe establecerse en <b>true</b>:
<pre>
xhttp.open("GET", "ajax_test.asp", true);
</pre>
Al enviar de forma asíncrona, el JavaScript no tiene que esperar la respuesta del servidor, sino que puede:
<ul>
    <li>Ejecutar otros scripts mientras se espera la respuesta del servidor</li>
    <li>Tratar la respuesta después de que la respuesta esté lista</li>
</ul>
GET es más simple y rápido que POST, y se puede usar en la mayoría de los casos. <br>
Sin embargo, se recomienda utilizar siempre las solicitudes POST cuando:
<ul>
    <il>Un archivo almacenado en caché no es una opción (actualice un archivo o una base de datos en el servidor).</li>
    <il>Envío de una gran cantidad de datos al servidor (POST no tiene limitaciones de tamaño).</li>
    <il>Al enviar la entrada del usuario (que puede contener caracteres desconocidos), POST es más robusto y seguro que GET.</li>
</ul>
<h3>Respuesta del servidor</h3>
La propiedad <b><i>responseText</i></b> devuelve la respuesta del servidor como un JavaScript, y permite usarla en consecuencia. <br>
<b>Ejemplo</b>:
<pre>
document.getElementById("").innerHTML = xhttp.responseText;
</pre>
El objeto <b><i>XMLHttpRequest</i></b> tiene un analizador XML incorporado. <br>
La propiedad <b><i>responseXML</i></b> devuelve la respuesta del servidor como un objeto XML DOM. <br>
Con esta propiedad, se puede analizar la respuesta como un objeto XML DOM. <br>
El método <b><i>getAllResponseHeaders()</i></b> devuelve toda la información del encabezado de la respuesta del servidor. <br>
El método <b><i>getResponseHeader()</i></b> devuelve información de encabezado específica de la respuesta del servidor. <br>
AJAX se puede utilizar para la comunicación interactiva con un archivo XML. <br>
AJAX se utiliza para crear aplicaciones más interactivas. <br>
AJAX se puede utilizar para la comunicación interactiva con una base de datos.
<hr>
<h3>JSON</h3>
JSON son las siglas de JavaScript Object Notation. <br>
JSON es un formato de texto para almacenar y transportar datos. <br>
JSON es "autodescriptivo" y fácil de entender. <br>
Ejemplo:
<pre>
'{"name":"John", "age":30, "car":null}'
</pre>
El formato JSON es sintácticamente similar al código para crear Objetos JavaScript. Debido a esto, un programa JavaScript puede convertir fácilmente datos JSON en objetos JavaScript. <br>
Dado que el formato es solo texto, los datos JSON se pueden enviar fácilmente entre computadoras, y ser utilizados por cualquier lenguaje de programación. <br>
JavaScript tiene una función incorporada para convertir cadenas JSON en objetos JavaScript:
<pre>
JSON.parse()
</pre>
JavaScript también tiene una función incorporada para convertir un objeto en una cadena JSON:
<pre>
JSON.stringify()
</pre>
Si se analiza la cadena JSON con un programa JavaScript, se puede acceder a los datos Como objeto:
<pre>
let personName = obj.name;
let personAge = obj.age;
</pre>
La sintaxis JSON es un subconjunto de la sintaxis de JavaScript. <br>
Reglas de sintaxis JSON:
<ul>
    <li>La sintaxis JSON se deriva de la sintaxis de notación de objetos de JavaScript.</li>
    <li>Los datos están en pares nombre/valor.</li>
    <li>Los datos están separados por comas.</li>
    <li>Las llaves sujetan objetos.</li>
    <li>Los corchetes contienen matrices.</li>
</ul>
En JSON, los valores deben ser uno de los siguientes tipos de datos:
<ul>
    <li>una cadena.</li>
    <li>Un número.</li>
    <li>Un objeto.</li>
    <li>una matriz.</li>
    <li>Un valor booleano.</li>
    <li>nulo
</ul>
En JavaScript los valores pueden ser todos los anteriores, además de cualquier otro JavaScript válido expresión, incluyendo:
<ul>
    <li>una función.</li>
    <li>una fecha.</li>
    <li>indefinido.</li>
</ul>
Debido a que la sintaxis JSON se deriva de la notación de objetos de JavaScript, muy poco más se necesita software para trabajar con JSON dentro de JavaScript. <br>
Con JavaScript se puede crear un objeto y asignarle datos así:
<pre>
person = {name:"John", age:31, city:"New York"};
</pre>
<b>El tipo de archivo para los archivos JSON es ".json"</b> <br>
Un uso común de JSON es intercambiar datos hacia/desde un servidor web. <br>
Al recibir datos de un servidor web, los datos son siempre una cadena. <br>
AL analizar los datos con <b><i>JSON.parse()</i></b>, los datos se convertirán en un objeto JavaScript. <br>
Los objetos de fecha no están permitidos en JSON. <br>
También es posible encadenar matrices de JavaScript. <br>
En JSON, las funciones no están permitidas como valores de objeto. <br>
La función <b><i>JSON.stringify()</i></b> eliminará cualquier función de un JavaScript objeto, tanto la clave como el valor. <br>
Esto se puede omitir si se convierte las funciones en cadenas antes de ejecutarla la función.
<hr>
<h3>Gráficos JS</h3>
Librerías de JavaScript para usar en todo tipo de gráficas:
<ul>
    <li>Plotly.js</li>
    <li>Chart.js</li>
    <li>Gráfico de Google</li>
</ul>