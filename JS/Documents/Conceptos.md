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
