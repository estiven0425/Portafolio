# CSS
Esta carpeta contiene un archivo principal con prácticas <b>CSS</b> e información útil.
<hr>
<h3>¿Qué es <b>CSS</b>?</h3>
<b>CSS</b> son las siglas de Cascading Style Sheets (Hojas de estilo en cascada). <br>
<b>CSS</b> describe cómo se deben mostrar los elementos HTML en la pantalla, en papel, o en otros medios. <br>
<b>CSS</b> ahorra mucho trabajo. Ya que se puede controlar el diseño de varias páginas web a la vez. <br>
Las hojas de estilo externas se almacenan en archivos <b>CSS</b>.
<hr>
<h3>¿Para qué sirve y cómo usar <b>CSS</b>?</h3>
<b>CSS</b> se utiliza para definir estilos para las páginas web, incluido el diseño, la maquetación y variaciones en la visualización para diferentes dispositivos y tamaños de pantalla. <br>
Una regla <b>CSS</b> consta de un selector y un bloque de declaración:
<pre>
Selector {
    Propiedad: Valor;
}
</pre>
El selector apunta al elemento HTML al que se desea aplicar estilo. <br>
El bloque de declaración contiene una o más declaraciones separadas por punto y coma. <br>
Cada declaración incluye un nombre de propiedad <b>CSS</b> y un valor, separados por dos puntos. <br>
Varias declaraciones <b>CSS</b> se separan con punto y coma y Los bloques están rodeados de llaves. <br>
Con un hoja de estilo externa, puede cambiar el aspecto de todo un sitio web cambiando ¡Con solo un archivo! <br>
Se puede utilizar una hoja de estilo interna si una sola página HTML tiene un estilo único. <br>
Se puede utilizar un estilo en línea para aplicar un estilo único a un solo elemento. <br>
Si se han definido algunas propiedades para el mismo selector (elemento) en diferentes hojas de estilo, Se utilizará el valor de la última hoja de estilo leída. <br>
El archivo <b><i>.css</i></b> externo no debe contener ninguna etiqueta HTML. <br>
No se puede agregar un espacio entre el valor de la propiedad (20) y la unidad (px). <br>
<b><i>margin: 20 px;</i>(MAL)<i> margin: 20px;</i>(BIEN)</b>
<hr>
<h3>Selectores</h3>
Un selector <b>CSS</b> selecciona los elementos HTML que se quieren estilizar. <br>
Se puede dividir los selectores <b>CSS</b> en cinco categorías:
<dl>
    <dt><b>Selectores simples (selecciona elementos según el nombre, la identificación o la clase)</b>
        <dd>
            El selector id utiliza el atributo id de un elemento HTML para seleccionar un elemento específico. <br>
            El id de un elemento es único dentro de una página, por lo que el selector id ¡Selecciona un elemento único!
            Para seleccionar un elemento con un identificador específico, se escribe un carácter de numeral (#), seguido de El identificador del elemento.
        </dd>
        <dd>
            El selector de clase selecciona elementos HTML con un atributo de clase específico. <br>
            Para seleccionar elementos con una clase específica, se escribe un carácter de punto (.) seguido del nombre de la clase. <br>
            También se puede especificar que solo algunos elementos HTML específicos se vean afectados por una clase.
        </dd>
    </dt>
</dl>
<ul>
    <li><b>Selectores del combinador (selecciona elementos basados en una relación específica entre ellos)</b></li>
    <li><b>Selector de agrupación (selecciona todos los elementos HTML con el mismo estilo Definiciones)</b></li>
    <li><b>Selectores de pseudoclase (selecciona elementos en función de un estado determinado)</b></li>
    <li><b>Selectores de pseudoelementos (selecciona y aplica estilo a una parte de un elemento)</b></li>
    <li><b>Selectores de atributos (selecciona elementos en función de un atributo o valor de atributo)</b></li>
    <li><b>El selector universal (*) selecciona todo el HTML elementos de la página</b></li>
</ul>
Un selector <b>CSS</b> puede contener más de un selector simple. Entre lo simple selectores, podemos incluir un combinador. <br>
Hay cuatro combinadores diferentes en <b>CSS</b>:
<dl>
    <dt><b>Selector de descendientes (espacio)</b>
        <dd>
            El selector de descendientes coincide con todos los elementos que son descendientes de un elemento.
        </dd>
    </dt>
    <dt><b>Selector de niños (>)</b>
        <dd>
            El selector secundario selecciona todos los elementos que son los elementos secundarios de un elemento especificado.
        </dd>
    </dt>
    <dt><b>Selector de hermanos adyacentes (+)</b>
        <dd>
            El selector del mismo nivel adyacente se utiliza para seleccionar un elemento que está directamente después de otro elemento específico. <br>
            Los elementos del mismo nivel deben tener el mismo elemento primario y "adyacente" significa "inmediatamente después".
        </dd>
    </dt>
    <dt><b>Selector general de hermanos (~)</b>
        <dd>
            El selector general del mismo nivel selecciona todos los elementos que son los siguientes elementos del mismo nivel de un elemento especificado.
        </dd>
    </dt>
</dl>
<hr>
<h3>Comentarios</h3>
Los comentarios se utilizan para explicar el código y pueden ayudar cuando se edita el código fuente en una fecha posterior. <br>
Los navegadores ignoran los comentarios. <br>
<b><i>/*Se comenta así*/</i></b>
<hr>
<h3>Colores</h3>
Los colores se especifican mediante nombres de color predefinidos o valores <b>RGB, HEX, HSL, RGBA, HSLA</b>.
<dl>
    <dt><b>Un valor de color RGB representa la luz ROJA, VERDE y AZUL.</b>
        <dd>
            Cada parámetro (rojo, verde y azul) define la intensidad del color entre 0 y 255. <br>
            Los valores de color RGBA son una extensión de los valores de color RGB con un canal alfa - que especifica la opacidad de un color.
        </dd>
    </dt>
    <dt><b>Un color hexadecimal se especifica con: #RRGGBB, donde el RR (rojo), GG (verde) y BB (azul) enteros hexadecimales especifican los componentes de el color.</b>
        <dd>
            Donde rr (rojo), gg (verde) y bb (azul) son valores hexadecimales entre 00 y ff (igual que el decimal 0-255). <br>
            A veces verás un código hexadecimal de 3 dígitos en la fuente <b>CSS</b>. <br>
            El código hexadecimal de 3 dígitos es una abreviatura de algunos códigos hexadecimales de 6 dígitos.
        </dd>
    </dt>
    <dt><b>HSL significa tono, saturación y luminosidad.</b>
        <dd>
            El tono es un grado en la rueda de colores de 0 a 360. 0 es rojo, 120 es verde y 240 es azul. <br>
            La saturación es un valor porcentual. 0% significa un tono de gris y 100% es el color completo. <br>
            La ligereza también es un porcentaje. El 0% es negro, el 50% no es ni claro ni oscuro, el 100% es blanco. <br>
            El parámetro alfa es un número entre 0.0 (totalmente transparente) y 1.0 (nada transparente).
        </dd>
    </dt>
</dl>
<b>CSS</b> y HTML admiten 140 nombres de colores estándar. <br>
Se puede establecer el color de fondo de los elementos HTML, el color del texto y el color de los bordes entre muchas otras.
<hr>
<h3>Fondo</h3>
Las propiedades de fondo <b>CSS</b> se utilizan para agregar efectos de fondo para los elementos. <br>
La propiedad <b><i>background-color</i></b> especifica el color de fondo de un elemento.<br>
La propiedad <b><i>opacity</i></b> especifica la opacidad/transparencia de un elemento. Puede tomar un valor de 0.0 a 1.0. Cuanto menor sea el valor, más transparente. <br>
Si no se desea aplicar opacidad a los elementos secundarios, se utiliza valores de color RGBA. <br>
La propiedad <b><i>background-image</i></b> especifica una imagen que se va a utilizar como fondo de un elemento. <br>
De forma predeterminada, la imagen se repite para que cubra todo el elemento. <br>
Algunas imágenes deben repetirse solo horizontal o verticalmente, o se verán extrañas. <br>
La propiedad <b><i>background-position</i></b> se utiliza para especificar la posición de la imagen de fondo. <br>
La propiedad <b><i>background-attachment</i></b> especifica si la imagen de fondo debe desplazarse o fijarse (no se desplazará con el botón resto de la página). <br>
Para acortar el código, también es posible especificar todas las propiedades de fondo en una sola propiedad única. Esto se denomina propiedad abreviada.
<hr>
<h3>Borde</h3>
La propiedad <b><i>border-style</i></b> especifica el tipo de borde que se va a mostrar. <br>
Se permiten los siguientes valores:
<ul>
    <li><b>dotted</b> Define un borde punteado</li>
    <li><b>dashed</b> Define un borde discontinuo</li>
    <li><b>solid</b> Define un borde sólido</li>
    <li><b>double</b> Define un doble borde</li>
    <li><b>groove</b> Define un borde ranurado 3D. El efecto depende del valor del color del borde</li>
    <li><b>ridge</b> Define un borde estriado 3D. El efecto depende del valor del color del borde</li>
    <li><b>inset</b> Define un borde de inserción 3D. El efecto depende del valor del color del borde</li>
    <li><b>outset</b> Define un borde de inicio 3D. El efecto depende del valor del color del borde</li>
    <li><b>none</b> No define ningún borde</li>
    <li><b>hidden</b> Define un borde oculto</li>
</ul>
Ninguna de las OTRAS propiedades de borde <b>CSS</b> (de las que se enseñará a continuación) tendrá NINGÚN efecto a menos que se establezca la propiedad <b><i>border-style</i></b>. <br>
La propiedad <b><i>border-width</i></b> especifica el ancho de los cuatro bordes. <br>
El ancho se puede establecer como un tamaño específico (en px, pt, cm, em, etc.) o usando uno de los tres valores predefinidos <b>thin, medium o thick</b>. <br>
La propiedad <b><i>border-width</i></b> puede tener de uno a cuatro valores (para el borde superior, el borde derecho, borde inferior y el borde izquierdo). <br>
La propiedad <b><i>border-color</i></b> se utiliza para establecer el color de los cuatro bordes. <br>
La propiedad <b><i>border-color</i></b> puede tener de uno a cuatro valores (para el borde superior, el borde derecho, el borde inferior y el borde izquierdo). <br>
A partir de los ejemplos de las páginas anteriores, se ha visto que es posible especificar un borde diferente para cada lado. <br>
En <b>CSS</b>, también hay propiedades para especificar cada uno de los bordes (top, derecha, abajo e izquierda). <br>
Como se demostró en la página anterior, hay muchas propiedades a tener en cuenta cuando se trata de fronteras. <br>
Para acortar el código, también es posible especificar todas las propiedades de borde individuales en una propiedad. <br>
La propiedad <b><i>border</i></b> es una propiedad abreviada para las siguientes propiedades de borde individuales:
<ul>
    <li>border-width</li>
    <li>border-style (obligatorio)</li>
    <li>border-color</li>
</ul>
La propiedad <b><i>border-radius</i></b> se utiliza para agregar bordes redondeados a un elemento.
<hr>
<h3>Margen</h3>
Los márgenes se utilizan para crear espacio alrededor de los elementos, fuera de los bordes definidos. <br>
Con <b>CSS</b>, se tiene el control total sobre los márgenes. Hay propiedades para establecer el margen de cada lado de un elemento (superior, derecho, inferior e izquierdo). <br>
Todas las propiedades de margen pueden tener los siguientes valores:
<ul>
    <li><b>Auto</b> el navegador calcula el margen.</li>
    <li><b>Longitud</b>especifica un margen en px, pt, cm, etc.</li>
    <li><b>%</b>especifica un margen en % de la anchura del elemento contenedor.</li>
    <li><b>inherit</b>especifica que el margen debe heredarse del elemento primario.</li>
</ul>
Para acortar el código, es posible especificar todas las propiedades de margen en una propiedad. <br>
La propiedad <b><i>margin</i></b> es una propiedad abreviada para las siguientes propiedades de margen individuales:
<dl>
    <dt><b>Si la propiedad tiene cuatro valores</b>
        <dd>
            El margen superior es de 25px. <br>
            El margen derecho es de 50px. <br>
            El margen inferior es de 75px. <br>
            El margen izquierdo es de 100px.
        </dd>
    </dt>
    <dt><b>Si la propiedad tiene tres valores</b>
        <dd>
            El margen superior es de 25px. <br>
            Los márgenes derecho e izquierdo son de 50px. <br>
            El margen inferior es de 75px.
        </dd>
    </dt>
    <dt><b>Si la propiedad tiene dos valores</b>
        <dd>
            Los márgenes superior e inferior son de 25px. <br>
            Los márgenes derecho e izquierdo son de 50px.
        </dd>
    </dt>
    <dt><b>Si la propiedad tiene un valor</b>
        <dd>
            Los cuatro márgenes son de 25px.
        </dd>
    </dt>
</dl>
Se puede establecer la propiedad <b><i>margin</i></b> en <b><i>auto</i></b> para centrar horizontalmente el elemento dentro de su contenedor. <br>
A veces, dos márgenes se colapsan en un solo margen. <br>
Los márgenes superior e inferior de los elementos a veces se contraen en un solo margen que es igual al mayor de los dos márgenes. <br>
¡Esto no sucede en los márgenes izquierdo y derecho! ¡Solo márgenes superior e inferior! <br>
Por ejemplo, el elemento <b><i>< h1 ></i></b> tiene un margen inferior de <b><i>50px</i></b> y el <b><i>< h2 ></i></b> tiene un margen superior establecido en <b><i>20px</i></b>. <br>
El sentido común parecería sugerir que el margen vertical entre el <b><i>< h1 ></i></b> y el <b><i>< h2 ></i></b> sería un total de <b><i>70px (50px + 20px)</i></b>. Pero debido al colapso de los márgenes, el margen real termina siendo de <b><i>50px</i></b>.
<hr>
<h3>Relleno</h3>
El padding o relleno se utiliza para crear espacio alrededor del contenido de un elemento, dentro de los bordes definidos. <br>
La propiedade <b><i>padding</i></b> <b>CSS</b> se utilizan para generar espacio alrededor del contenido de un elemento, dentro de los bordes definidos. <br>
Con <b>CSS</b>, se tiene el control total sobre el relleno. <br>
Hay propiedades para establecer el relleno de cada lado de un elemento (superior, derecho, inferior e izquierdo). <br>
Todas las propiedades de relleno pueden tener los siguientes valores:
<ul>
    <li><b>Auto</b> el navegador calcula el padding.</li>
    <li><b>Longitud</b>especifica un padding en px, pt, cm, etc.</li>
    <li><b>%</b>especifica un padding en % de la anchura del elemento contenedor.</li>
    <li><b>inherit</b>especifica que el padding debe heredarse del elemento primario.</li>
</ul>
<dl>
    <dt><b>Si la propiedad tiene cuatro valores</b>
        <dd>
            El padding superior es de 25px. <br>
            El padding derecho es de 50px. <br>
            El padding inferior es de 75px. <br>
            El padding izquierdo es de 100px.
        </dd>
    </dt>
    <dt><b>Si la propiedad tiene tres valores</b>
        <dd>
            El padding superior es de 25px. <br>
            El padding derecho e izquierdo es de 50px. <br>
            El padding inferior es de 75px.
        </dd>
    </dt>
    <dt><b>Si la propiedad tiene dos valores</b>
        <dd>
            El padding superior e inferior es de 25px. <br>
            El padding derecho e izquierdo es de 50px.
        </dd>
    </dt>
    <dt><b>Si la propiedad tiene un valor</b>
        <dd>
            El padding es de 25px.
        </dd>
    </dt>
</dl>
<hr>
<h3>Altura y anchura</h3>
La propiedad <b><i>width</i></b> <b>CSS</b> especifica el ancho del área de contenido del elemento. <br>
El área de contenido es la parte dentro del relleno, el borde y el margen de un elemento (el modelo de caja). <br>
Por lo tanto, si un elemento tiene un ancho especificado, el relleno agregado a ese elemento se añadirá a la anchura total del elemento. A menudo, este es un resultado indeseable. <br>
Por ejemplo, el elemento <b><i>< div ></i></b> tiene un ancho de <b><i>300px</i></b>. Sin embargo, el ancho real del elemento <b><i>< div ></i></b> será de <b><i>350px</i></b> (300px + 25px de relleno izquierdo + 25px de relleno derecho). <br>
Para mantener el ancho en <b><i>300px</i></b>, sin importar la cantidad de relleno, se puede usar la propiedad <b><i>box-sizing</i></b>. <br>
Esto hace que el elemento mantenga su ancho real; Si aumenta el relleno, el espacio de contenido disponible disminuirá. <br>
En <b>CSS</b> las propiedades <b><i>height</i></b> y <b><i>width</i></b> se utilizan para establecer la altura y anchura de un elemento. <br>
La propiedad <b><i>max-width</i></b>se utiliza para establecer el ancho máximo de un elemento.
Las propiedades height y width no incluyen relleno, bordes ni márgenes. Establece la altura/anchura del área dentro del relleno, el borde y el margen de el elemento.
Las propiedades y puede tener los siguientes valores:heightwidth
<ul>
    <li><b>Auto</b> el navegador calcula la altura/anchura.</li>
    <li><b>Longitud</b>especifica una altura/anchura en px, pt, cm, etc.</li>
    <li><b>%</b>especifica una altura/anchura en % de la anchura del elemento contenedor.</li>
    <li><b>inherit</b>especifica que la altura/anchura debe heredarse del elemento primario.</li>
</ul>
La propiedad <b><i>max-width</i></b> se utiliza para establecer el ancho máximo de un elemento. <br>
Se puede especificar en valores de longitud, como <b>px, cm, etc.</b>, o en porcentaje <b>%</b> de la que contiene, o se establece en <b>none</b> (esto es predeterminado. significa que no hay un ancho máximo). <br>
El problema con lo anterior ocurre cuando la ventana del navegador es más pequeña que el ancho de el elemento. <br>
A continuación, el navegador añade una barra de desplazamiento horizontal a la página. <br>
En su lugar, el uso en esta situación mejorará el manejo de las ventanas pequeñas por parte del navegador.
<hr>
<h3>Modelo de caja</h3>
En <b>CSS</b> todos los elementos HTML pueden ser considerados como cajas. <br>
En <b>CSS</b>, el término <"b>modelo de caja</b>" se utiliza cuando se habla de diseño y maquetación. <br>
El modelo de caja <b>CSS</b> es esencialmente una caja que envuelve cada elemento HTML. <br>
Consta de: contenido, relleno, bordes y márgenes.
Explicación de las diferentes partes:
<ul>
    <li><b>Contenido</b> el contenido del cuadro, donde aparecen el texto y las imágenes.</li>
    <li><b>Padding</b> despeja un área alrededor del contenido. El acolchado es transparente.</li>
    <li><b>Borde</b> un borde que rodea el padding y el contenido.</li>
    <li><b>Margen</b> despeja un área fuera del borde. El margen es transparente.</li>
</ul>
Para establecer correctamente la anchura y la altura de un elemento en todos los navegadores, es necesario saber cómo funciona el modelo de caja. <br>
Al establecer las propiedades <b><i>height</i></b> y <b><i>width</i></b> de un elemento con <b>CSS</b>, solo se tiene que establecer el ancho y el alto del área de contenido. <br>
Para Calcular el ancho y alto total de un elemento, también se debe incluir el relleno y los bordes.
<hr>
<h3>Remarcado</h3>
Un contorno u outline es una línea dibujada fuera del borde del elemento. <br>
Un contorno es una línea que se dibuja alrededor de los elementos, fuera de los bordes, para hacer que el elemento "se destaque". <br>
<b>CSS</b> tiene las siguientes propiedades de esquema:
<ul>
    <li>outline-style</li>
    <li>outline-color</li>
    <li>outline-width</li>
    <li>outline-offset</li>
    <li>outline</li>
</ul>
¡El contorno difiere de los bordes! A diferencia del borde, el contorno es dibujado fuera del borde del elemento, y puede superponerse a otro contenido. Además, el outline NO forma parte de las dimensiones del elemento; la anchura y la altura totales del elemento no se ve afectado por la anchura del contorno. <br>
La propiedad <b><i>outline-style</i></b> especifica el estilo del contorno, y puede tener uno de los siguientes valores:
<ul>
    <li><b>dotted</b> Define un contorno punteado</li>
    <li><b>dashed</b> Define un contorno discontinuo</li>
    <li><b>solid</b> Define un contorno sólido</li>
    <li><b>double</b> Define un doble contorno</li>
    <li><b>groove</b> Define un contorno ranurado en 3D</li>
    <li><b>ridge</b> Define un contorno estriado en 3D</li>
    <li><b>inset</b> Define un contorno de inserción 3D</li>
    <li><b>outset</b> Define un contorno inicial 3D</li>
    <li><b>none</b> No define ningún contorno</li>
    <li><b>hidden</b> Define un contorno oculto</li>
</ul>
Ninguna de las otras propiedades de esquema (de las que se enseñará a continuación) tendrá ningún efecto a menos que se establezca la propiedad <b><i>outline-style</i></b>. <br>
La propiedad <b><i>outline-width</i></b> especifica el ancho del contorno, y puede tener uno de los siguientes valores:
<ul>
    <li><b>thin</b> típicamente 1px</li>
    <li><b>medium</b> normalmente 3px</li>
    <li><b>thick</b> normalmente 5px</li>
    <li><b>Un tamaño específico</b>px, pt, cm, em, etc.</li>
</ul>
La propiedad <b><i>outline-color</i></b> se utiliza para establecer el color del contorno. <br>
La propiedad <b><i>outline</i></b> es una propiedad abreviada de Establecer las siguientes propiedades de esquema individuales:
<ul>
    <li>outline-width</li>
    <li>outline-style (obligatorio)</li>
    <li>outline-color</li>
</ul>
La propiedad <b><i>outline-offset</i></b> añade espacio entre un contorno y el borde/borde de un elemento. <br>
El espacio entre un outline y su contorno es transparente.
<hr>
<h3>Texto</h3>
<b>CSS</b> tiene muchas propiedades para dar formato al texto. <br>
La propiedad <b><i>color</i></b> se utiliza para establecer el color del texto. <br>
El alto contraste es muy importante para las personas con problemas de visión. Por lo tanto, es bueno asegurarse siempre de que el contraste entre el color del texto y el color de fondo (o imagen de fondo) es bueno! <br>
Las propiedades para alinear texto son:
<dl>
    <dt><b>text-align</b>
        <dd>
            La propiedad <b><i>text-align</i></b> se utiliza para establecer la alineación horizontal de un texto. <br>
            Un texto puede estar alineado a la izquierda o a la derecha, centrado o justificado. <br>
        </dd>
    </dt>
    <dt><b>text-align-last</b>
        <dd>
            La propiedad especifica cómo alinear la última línea de un texto.text-align-last.
        </dd>
    </dt>
    <dt><b>direction</b>
    </dt>
    <dt><b>unicode-bidi</b>
        <dd>
            Las propiedades direction y unicode-bidi se pueden usar para cambiar la dirección del texto de un elemento.
        </dd>
    </dt>
    <dt><b>vertical-align</b>
        <dd>
            La propiedad <b><i>vertical-align</i></b> establece la alineación vertical de un elemento.
        </dd>
    </dt>
</dl>
La propiedad <b><i>text-decoration-line</i></b> se utiliza para agregar una línea de decoración a texto. <br>
Se puede combinar más de un valor, como sobrelínea y subrayado para mostrar líneas tanto por encima como por debajo de un texto. <br>
No se recomienda subrayar el texto que no es un enlace, ya que esto a menudo confunde al lector. <br>
La propiedad <b><i>text-decoration-color</i></b> se utiliza para Establece el color de la línea de decoración. <br>
La propiedad <b><i>text-decoration-style</i></b> se utiliza para Establece el estilo de la línea de decoración. <br>
La propiedad <b><i>text-decoration-thickness</i></b> se utiliza para Establece el grosor de la línea de decoración. <br>
La propiedad <b><i>text-decoration</i></b> es una taquigrafía propiedad para:
<ul>
    <li>text-decoration-line (obligatorio)</li>
    <li>text-decoration-color (Opcional)</li>
    <li>text-decoration-style (Opcional)</li>
    <li>text-decoration-thickness (Opcional)</li>
</ul>
La propiedad <b><i>text-transform</i></b> se utiliza para especificar letras mayúsculas y minúsculas en un texto. <br>
Se puede usar para convertir todo en letras mayúsculas o minúsculas, o escribir en mayúscula la primera letra de cada palabra. <br>
La propiedad <b><i>text-indent</i></b> se utiliza para especificar la sangría de la primera línea de un texto. <br>
La propiedad <b><i>letter-spacing</i></b> se utiliza para especificar el espacio entre los caracteres de un texto. <br>
La propiedad <b><i>line-height</i></b> se utiliza para especificar el espacio entre líneas: <br>
La propiedad <b><i>word-spacing</i></b> se utiliza para especificar el espacio entre las palabras de un texto. <br>
La propiedad <b><i>white-space</i></b> especifica cómo se controlan las líneas dentro de un elemento. <br>
La propiedad  <b><i>text-shadow</i></b>agrega sombra al texto. <br>
En su uso más simple, solo se especifica la sombra horizontal (2px) y la sombra vertical (2px).
<hr>
<h3>Fuente</h3>
Elegir la fuente correcta tiene un gran impacto en la forma en que los lectores experimentan un sitio web. <br>
La fuente correcta puede crear una identidad fuerte para una marca. <br>
Es importante usar una fuente que sea fácil de leer. <br>
La fuente agrega valor al texto. <br>
También es importante elegir el color y el tamaño del texto correctos para la fuente. <br>
En <b>CSS</b> hay cinco familias de fuentes genéricas:
<ul>
    <li><b>Las fuentes serif</b> tienen un pequeño trazo en los bordes de cada letra. Crean una sensación de formalidad y elegancia.</li>
    <li><b>Las fuentes sans-serif</b> tienen líneas limpias (sin trazos pequeños adjuntos). Crean un aspecto moderno y minimalista.</li>
    <li><b>Fuentes monoespaciadas</b>: aquí todas las letras tienen el mismo ancho fijo. Crean un aspecto mecánico.</li>
    <li><b>Las fuentes cursivas</b> imitan la escritura humana.</li>
    <li><b>Las fuentes de fantasía</b> son fuentes decorativas/lúdicas.</li>
</ul>
En <b>CSS</b>, se usa la propiedad <b><i>font-family</i></b> para especificar la fuente de un texto. <br>
La propiedad debe contener varios nombres de fuente como un sistema de "respaldo", para garantizar la máxima compatibilidad entre navegadores/sistemas operativos. <br>
Comienza con la fuente que se desea y termine con una familia genérica (para permitir que el navegador elija una fuente similar en la familia genérica, si no hay otras fuentes disponibles). <br>
Los nombres de las fuentes deben estar separados por comas. <br>
Si el nombre de la fuente es más de una palabra, debe estar entre comillas, como "<b>Times New Roman</b>". <br>
Las fuentes seguras para la web son fuentes que se instalan universalmente en todos los navegadores y dispositivos. <br>
Sin embargo, no existen fuentes 100% completamente seguras para la web. <br>
Siempre hay un posibilidad de que no se encuentre una fuente o no esté instalada correctamente. <br>
Por lo tanto, es muy importante utilizar siempre fuentes alternativas. <br>
Esto significa que debe agregar una lista de "fuentes de copia de seguridad" similares en la propiedad. <br>
Si La primera fuente no funciona, el navegador probará la siguiente, y la siguiente, y así sucesivamente. <br>
Terminar siempre la lista con un nombre genérico de familia de fuentes. <br>
La siguiente lista son las mejores fuentes seguras para la web para HTML y <b>CSS</b>:
<ul>
    <li>Arial (sans-serif)</li>
    <li>Verdana (sans-serif)</li>
    <li>Tahoma (sans-serif)</li>
    <li>Trebuchet MS (sans-serif)</li>
    <li>Times New Roman (serif)</li>
    <li>Georgia (serif)</li>
    <li>Garamond (serif)</li>
    <li>Courier New (monoespaciado)</li>
    <li>Brush Script MT (cursiva)</li>
</ul>
La propiedad <b><i>font-style</i></b> se usa principalmente para especificar texto en cursiva. <br>
Esta propiedad tiene tres valores:
<ul>
    <li><b>normal</b> el texto se muestra normalmente.</li>
    <li><b>italic</b> El texto se muestra en cursiva.</li>
    <li><b>oblique</b> El texto está "inclinado" (oblicuo es muy similar a la cursiva, pero menos compatible).</li>
</ul>
La propiedad <b><i>font-weight</i></b> especifica el grosor de una fuente. <br>
La propiedad <b><i>font-variant</i></b> especifica si un texto debe o no se mostrará en una fuente de versalitas. <br>
En una fuente de versalitas, todas las letras minúsculas se convierten en letras mayúsculas. <br>
Sin embargo, las letras mayúsculas convertidas aparecen en un tamaño de fuente más pequeño que las letras mayúsculas originales del texto. <br>
La propiedad <b><i>font-size</i></b> establece el tamaño del texto. <br>
Ser capaz de gestionar el tamaño del texto es importante en el diseño web. <br>
Sin embargo, no debe usar ajustes de tamaño de fuente para hacer que los párrafos parezcan encabezados, o Los encabezados parecen párrafos. <br>
Se debe utilizar siempre las etiquetas HTML adecuadas, como <b><i>< h1 > - < h6 ></i></b> para los encabezados y <b><i>< p ></i></b> para párrafos. <br>
El valor <b><i>font-size</i></b> puede ser un tamaño absoluto o relativo:
<dl>
    <dt><b>Tamaño absoluto</b>
        <dd>
            Establece el texto en un tamaño especificado. <br>
            No permite al usuario cambiar el tamaño del texto en todos los navegadores (malo por razones de accesibilidad). <br>
            El tamaño absoluto es útil cuando se conoce el tamaño físico de la salida.
        </dd>
    </dt>
    <dt><b>Tamaño relativo</b>
        <dd>
            Establece el tamaño relativo a los elementos circundantes. <br>
            Permite al usuario cambiar el tamaño del texto en los navegadores.
        </dd>
    </dt>
</dl>    
Si se usa píxeles, aún se puede usar la herramienta de zoom para cambiar el tamaño de toda la página. <br>
Para permitir a los usuarios cambiar el tamaño del texto (en el menú del navegador), muchos Los desarrolladores usan <b><i>EM</i></b> en lugar de píxeles. <br>
<b><i>1em</i></b> es igual al tamaño de fuente actual. El tamaño de texto predeterminado en los navegadores es 16px. Por lo tanto, el tamaño predeterminado de <b><i>1em</i></b> es de 16px. <br>
El tamaño se puede calcular de píxeles a em usando esta fórmula: <b>pixels/16=em</b>. <br>
En el ejemplo anterior, el tamaño del texto en <b><i>em</i></b> es el mismo que en el ejemplo anterior en píxeles. <br>
Sin embargo, con el tamaño <b><i>em</i></b>, es posible ajustar el tamaño del texto en todos los navegadores. <br>
Desafortunadamente, todavía hay un problema con las versiones anteriores de Internet Explorer. <br>
El texto se vuelve más grande de lo que debería cuando se hace más grande, y más pequeño de lo que debería cuando se hace más pequeño. <br>
La solución que funciona en todos los navegadores es establecer un tamaño de fuente predeterminado en porcentaje para el elemento <b><i>< body ></i></b>. <br>
El tamaño del texto se puede establecer con una unidad <b><i>vw</i></b>, que significa el "ancho de la ventana gráfica". <br>
De esa manera, el tamaño del texto seguirá el tamaño de la ventana del navegador. <br>
Viewport es el tamaño de la ventana del navegador. <br>
<b><i>1VW = 1% del ancho de la ventana gráfica</i></b>. <br>
Si la ventana gráfica tiene 50 cm de ancho, <b><i>1vw es 0,5 cm</i></b>. <br>
Si no se desea utilizar ninguna de las fuentes estándar en HTML, puede utilizar Google Fonts. <br>
Las fuentes de Google son de uso gratuito y tienen más de 1000 fuentes para elegir. <br>
¡Solicitar varias fuentes puede ralentizar una página web! Así que se debe tener cuidado con eso. <br>
Por supuesto, se puede diseñar Google Fonts como sea, ¡con <b>CSS</b>! <br>
Las buenas combinaciones de fuentes son esenciales para un gran diseño. <br>
Para acortar el código, también es posible especificar todas las propiedades de fuente individuales en una propiedad. <br>
La propiedad <b><i>font</i></b> es una propiedad abreviada para:
<ul>
    <li>font-style</li>
    <li>font-variant</li>
    <li>font-weight</li>
    <li>font-size/line-height</li>
    <li>font-family</li>
</ul>
<hr>
<h3>Íconos</h3>
La forma más sencilla de añadir un icono a una página HTML es con una biblioteca de iconos, como <b>Font Awesome</b>. <br>
Todos los iconos de las bibliotecas de iconos son vectores escalables que pueden personalizarse con <b>CSS</b> (tamaño, color, sombra, etc.).
<hr>
<h3>Enlaces</h3>
Con <b>CSS</b>, los enlaces se pueden diseñar de muchas maneras diferentes. <br>
Los enlaces se pueden diseñar con cualquier propiedad <b>CSS</b> <br>
Además, los enlaces se pueden diseñar de manera diferente según el estado en el que se encuentren. <br>
Los cuatro estados de enlace son:
<ul>
    <li><b>a:link </b> Un enlace normal y no visitado.</li>
    <li><b>a:visited</b> Un enlace que el usuario ha visitado.</li>
    <li><b>a:hover</b> Un enlace cuando el usuario pasa el ratón por encima de él.</li>
    <li><b>a:active</b> Un enlace en el momento en que se hace clic en él.</li>
</ul>
Al establecer el estilo para varios estados de vínculo, hay algunas reglas de orden: <br>
<strong>a:hover DEBE ir después de a:link y a:visited</strong><br>
<strong>a:active DEBE venir después de a:hover</strong><br>
La propiedad <b><i>text-decoration</i></b> se utiliza principalmente para eliminar subrayados de los enlaces. <br>
La propiedad <b><i>background-color</i></b> se puede utilizar para especificar un color de fondo para los vínculos.
<hr>
<h3>Listas</h3>
En HTML, hay dos tipos principales de listas:
<ul>
    <li><b>Listas desordenadas < ul ></b> los elementos de la lista están marcados con viñetas.</li>
    <li><b>Listas ordenadas < ol ></b> los elementos de la lista están marcados con números o letras.</li>
</ul>
Las propiedades de la lista <b>CSS</b> permiten:
<ul>
    <li>Establecer diferentes marcadores de elementos de lista para listas ordenadas.</li>
    <li>Establecer diferentes marcadores de elementos de lista para listas desordenadas.</li>
    <li>Establecer una imagen como marcador de elemento de lista.</li>
    <li>Agregar colores de fondo a listas y elementos de lista.</li>
</ul>
La propiedad <b><i>list-style-type</i></b> especifica el tipo de elemento de lista marcador. <br>
Algunos de los valores son para listas desordenadas y otros para listas ordenadas. <br>
La propiedad <b><i>list-style-image</i></b> especifica una imagen como lista Marcador de objeto. <br>
La propiedad <b><i>list-style-position</i></b> especifica la posición de los marcadores de elementos de lista (viñetas). <br>
<dl>
    <dt><b>list-style-position: outside;</b>
        <dd>
            Significa que las viñetas estarán fuera el elemento de lista. <br>
            El inicio de cada línea de un elemento de lista se alineará verticalmente. <br>
            Este es el valor predeterminado.
        </dd>
    </dt>
    <dt><b>list-style-position: inside;</b>
        <dd>
            Significa que las viñetas estarán dentro el elemento de lista. <br>
            Como es parte del elemento de la lista, será parte del texto e inserta el texto al principio.
        </dd>
    </dt>
</dl>
La propiedad también puede ser utiliza para eliminar los marcadores/viñetas. <br>
Hay que tener en cuenta que la lista también tiene un margen predeterminado y relleno. <br>
Para eliminar esto, se agrega a <b><i>< ul ></i> o <i>< ol> </i></b>:
<pre>
list-style-type:none;
margin:0;
padding:0;
</pre>
La propiedad <b><i>list-style</i></b> es una propiedad abreviada. <br>
Se utiliza para establecer todos los valores. <br>
Cuando se utiliza la propiedad abreviada, el orden de los valores de propiedad es:
<ul>
<li><b>list-style-type</b>si se especifica una imagen de estilo de lista, el valor de esta propiedad se mostrará si la imagen por alguna razón no se puede mostrar</li>
<li><b>list-style-position</b>especifica si los marcadores de elementos de lista deben aparecer dentro o fuera del flujo de contenido</li>
<li><b>list-style-image</b>especifica una imagen como elemento de lista marcador</li>
</ul>
Si falta uno de los valores de propiedad anteriores, el valor predeterminado de la propiedad se insertará en la propiedad que falta, si la hubiera. <br>
También se puede estilizar listas con colores, para que se vean un poco más interesante. <br>
Cualquier cosa que se agregue a la etiqueta <b><i>< ol ></i> o <i>< ul ></i></b>, afecta a toda la lista, mientras que Las propiedades añadidas a la etiqueta <b><i>< li ></i></b> afectarán a los elementos individuales de la lista.
<hr>
<h3>Tablas</h3>
El aspecto de una tabla HTML se puede mejorar en gran medida con <b>CSS</b>. <br>
Para especificar los bordes de la tabla en <b>CSS</b>, se utiliza la propiedad <b><i>border</i></b>. <br>
Si se necesita una tabla que abarque toda la pantalla (ancho completo), se agrega a la etiqueta <b><i>< Tabla ></i></b> la propiedad <b><i>width: 100%</i></b>. <br>
La propiedad <b><i>border-collapse</i></b> establece si los bordes de la tabla debe contraerse en un solo borde. <br>
La anchura y la altura de una tabla se definen mediante las propiedades <b><i>height</i></b> y <b><i>width</i></b>. <br>
La propiedad <b><i>text-align</i></b> establece la alineación horizontal (como izquierda, derecha o centro) del contenido en <b><i>< th ></i> o <i>< td ></i></b>. <br>
De forma predeterminada, el contenido de los elementos <b><i>< th ></i></b> están alineados al centro y el contenido de los elementos <b><i>< td ></i></b> se alinea a la izquierda. <br>
Para alinear al centro el contenido de los elementos <b><i>< td ></i></b> también se usa <b><i>text-align: center</i></b>. <br>
La propiedad <b><i>vertical-align</i></b> establece la alineación vertical (como superior, inferior o central) del contenido en <b><i>< th ></i> o <i>< td ></i></b>. <br>
De forma predeterminada, la alineación vertical del contenido de una tabla es media (tanto para elementos<b><i>< th ></i> y <i>< td ></i></b>). <br>
Para controlar el espacio entre el borde y el contenido de una tabla, se utiliza la propiedad <b><i>Padding</i></b> en <b><i>< th ></i> y <i>< td ></i></b>. <br>
Se utiliza el selector <b><i:hover></i></b> de <b><i>< tr ></i></b> para resaltar las filas de la tabla con el ratón sobre. <br>
Una tabla adaptable mostrará una barra de desplazamiento horizontal si la pantalla es demasiado pequeña para mostrar el contenido completo. <br>
Se puede agregar un elemento contenedor (como <b><i>< div ></i></b>) alrededor del elemento <b><i>< table ></i></b> para que responda la propiedad <b><i>overflow-x:auto</i></b>. <br>
En OS X Lion (en Mac), las barras de desplazamiento están ocultas de forma predeterminada y solo se muestran cuando se usan (aunque se haya establecido "<b><i>overflow:scroll</i></b>").
<hr>
<h3>Display</h3>
La propiedad <b><i>display</i></b> es la propiedad <b>CSS</b> más importante para controlar el diseño. <br>
La propiedad especifica si se muestra un elemento y cómo se muestra. <br>
Cada elemento HTML tiene un valor de visualización predeterminado según el tipo de elemento. <br>
Un elemento de nivel de bloque siempre comienza en una nueva línea y ocupa todo el ancho disponible (se extiende hacia la izquierda y hacia la derecha tanto como puede). <br>
Un elemento en línea no comienza en una nueva línea y solo ocupa el ancho necesario. <br>
<b><i>Display: none</i></b> se usa comúnmente con JavaScript para ocultar y mostrar elementos sin eliminarlos y volver a crearlos. <br>
Como se mencionó, cada elemento tiene un valor de visualización predeterminado. Sin embargo, se puede anular esto. <br>
Cambiar un elemento en línea a un elemento de bloque, o viceversa, puede ser útil para hacer que la página se vea de una manera específica y seguir los estándares de la web. <br>
Un ejemplo común es la creación de elementos en línea para menús horizontales. <br>
Establecer la propiedad display de un elemento solo cambia la forma en que se muestra el elemento, NO qué tipo de elemento es. <br>
Por lo tanto, no se permite un elemento en línea con para tener otros elementos de bloque dentro de él. <br>
La ocultación de un elemento se puede hacer estableciendo la propiedad <b><i>Display</i></b> en <b><i>none</i></b>. <br>
El elemento se ocultará y la página se mostrará como si el elemento no estuviera allí. <br>
Sin embargo, el elemento seguirá ocupando el mismo espacio como antes. El elemento estará oculto, pero seguirá afectando al diseño.
Como se mencionó anteriormente; Un elemento de nivel de bloque siempre ocupa todo el ancho disponible (se extiende hacia la izquierda y hacia la derecha tanto como puede). <br>
Establecer el <b><i>width</i></b> de un elemento a nivel de bloque evitará que se estire hasta los bordes del contenedor. <br>
A continuación, se puede establecer el parámetro <b><i>márgen</i></b> a <b><i>auto</i></b>, para centrar horizontalmente el elemento dentro de su contenedor. <br>
El ocupará el ancho especificado y el espacio restante se dividirá equitativamente entre los dos márgenes. <br>
El problema con lo anterior ocurre cuando la ventana del navegador está más pequeño que el ancho de el elemento. <br>
A continuación, el navegador añade una barra de desplazamiento horizontal a la página. <br>
Se puede usar en su lugar, <b><i>max-width </i></b>en esta situación, mejorará el manejo de ventanas pequeñas por parte del navegador. <br>
Esto es importante a la hora de hacer que un sitio sea utilizable en dispositivos pequeños. <b>NO FUNCIONA CON %</b>. 
<hr>
<h3>Position</h3>
La propiedad <b><i>position</i></b>especifica el tipo de método de posicionamiento utilizado para un elemento. <br>
Hay cinco valores de posición diferentes:
<dl>
    <dt><b>static</b>
        <dd>
            Los elementos HTML se colocan estáticos de forma predeterminada. <br>
            Los elementos posicionados estáticamente no se ven afectados por las propiedades superior, inferior, izquierda y derecha. <br>
            Un elemento con no se coloca de ninguna manera especial, siempre está posicionado de acuerdo con el flujo normal de la página.
        </dd>
    </dt>
    <dt><b>relative</b>
        <dd>
            Un elemento con posición relativa se coloca en relación con su posición normal. <br>
            Si se establecen las propiedades superior, derecha, inferior e izquierda de un elemento con una posición relativa, se producirá para ser ajustado lejos de su posición normal. <br>
            El resto del contenido no se ajustará para que quepa en ningún hueco dejado por el elemento.
        </dd>
    </dt>
    <dt><b>fixed</b>
        <dd>
            Un elemento con se coloca en relación con la ventana gráfica, lo que significa que siempre permanece en el mismo lugar incluso si se desplaza la página. <br>
            La parte superior, Las propiedades right, bottom e left se utilizan para colocar el elemento. <br>
            Un elemento fijo no deja un hueco en la página donde normalmente se habría ubicado.
        </dd>
    </dt>
    <dt><b>absolute</b>
        <dd>
            Un elemento con se coloca en relación con el antecesor posicionado más cercano (en lugar de colocarse en relación con la ventana gráfica, como fijo). <br>
            Sin embargo, Si un elemento posicionado en absoluto no tiene antecesores posicionados, Utiliza el cuerpo del documento y se mueve junto con el desplazamiento de la página. <br>
            Los elementos posicionados en posición absoluta se eliminan del flujo normal y pueden superponerse elementos.
        </dd>
    </dt>
    <dt><b>sticky</b>
        <dd>
            Un elemento con se coloca en función de la posición de desplazamiento del usuario. <br>
            Un elemento adhesivo alterna entre <b><i>relative</i></b> y <b><i>fixed</i></b>, dependiendo de la posición de desplazamiento. <br>
            Se coloca en relación hasta que se alcanza una posición de desplazamiento determinada en la ventana gráfica, luego se "pega" en su lugar (como fixed).
        </dd>
    </dt>
</dl>
<hr>
<h3>Z-Index</h3>
La propiedad <b><i>z-index</i></b> especifica el parámetro de orden de pila de un elemento. <br>
Cuando los elementos están colocados, pueden superponerse a otros elementos. <br>
La propiedad especifica el orden de pila de un elemento (qué elemento debe colocarse delante o detrás de los demás). <br>
Un elemento puede tener un orden de pila positivo o negativo. <br>
solo funciona en elementos posicionados (absoluta, relative, fixed o sticky) y elementos flexibles (elementos que son elementos secundarios directos de display). <br>
<hr>
<h3>Overflow</h3>
La propiedad <b><i>overflow</i></b> controla lo que sucede con contenido que es demasiado grande para caber en un área. <br>
La propiedad tiene los siguientes valores:
<ul>
    <li><b>visible</b> Predeterminado. El desbordamiento no se recorta. El contenido se representa fuera del cuadro del elemento.</li>
    <li><b>hidden</b>El desbordamiento se recorta y el resto del contenido será invisible.</li>
    <li><b>scroll</b>El desbordamiento se recorta y se agrega una barra de desplazamiento para ver el resto del contenido.</li>
    <li><b>auto</b> Similar a scroll, pero agrega barras de desplazamiento solo cuando es necesario.</li>
</ul>
La propiedad solo funciona para elementos de bloque con una altura especificada. <br>
Las propiedades <b><i>overflow-x</i></b> y <b><i>overflow-y</i></b> especifican si se debe cambiar el desbordamiento de contenido solo horizontal o verticalmente (o Ambos). <br>
<b><i>overflow-x</i></b> especifica qué hacer con los bordes izquierdo y derecho de la contenido. <br>
<b><i>overflow-y</i></b> especifica qué hacer con los bordes superior e inferior de la contenido.
<hr>
<h3>Float</h3>
La propiedad <b><i>float</i></b> especifica cómo debe flotar un elemento. <br>
La propiedad <b><i>clear</i></b> especifica qué elementos pueden flotar junto al elemento borrado y en qué lado. <br>
La propiedad <b><i>float</i></b> se utiliza para el posicionamiento y formato del contenido, por ejemplo, dejar que una imagen flote a la izquierda del texto en un contenedor. <br>
El inmueble puede tener uno de los siguientes valores:
<ul>
    <li><b>left</b> El elemento flota a la izquierda de su contenedor.</li>
    <li><b>right</b> El elemento flota a la derecha de su contenedor.</li>
    <li><b>none</b>El elemento no flota (se mostrará justo donde aparece en el texto). Este es el valor predeterminado.</li>
    <li><b>inherit</b>El elemento hereda el valor float de su padre.</li>
</ul>
En su uso más simple, la propiedad se puede usar para ajustar texto alrededor de imágenes. <br>
Cuando usamos la propiedad, y queremos el siguiente elemento a continuación (no a la derecha ni a la izquierda), tendremos que usar la propiedad. <br>
La propiedad especifica lo que debería suceder con el elemento que está al lado de un elemento flotante. <br>
El inmueble puede tener uno de los siguientes valores:
<ul>
    <li><b>none</b> El elemento no se empuja hacia abajo elementos flotantes a la izquierda o a la derecha. Este es el valor predeterminado.</li>
    <li><b>left</b> El elemento se empuja hacia abajo a la izquierda Elementos flotantes.</li>
    <li><b>right</b> El elemento se empuja hacia abajo Elementos flotantes a la derecha.</li>
    <li><b>both</b> El elemento se empuja debajo de ambos Elementos flotantes izquierdo y derecho.</li>
    <li><b>inherit</b> El elemento hereda el valor clear de su padre.</li>
</ul>
Al borrar flotantes, se debe hacer coincidir el clear con el float. <br>
Si un elemento se desplaza hacia la izquierda, luego debe despejar hacia la izquierda. <br>
Un elemento flotante seguirá flotando, pero el elemento borrado aparecerá debajo de él en la web página. <br>
Si un elemento flotante es más alto que el elemento contenedor, se "desbordará" fuera de su contenedor.
<hr>
<h3>Inline-Block</h3>
En comparación con <b><i>display: inline</i></b>, la principal diferencia es que permite para establecer una anchura y una altura en el elemento<b><i>display: inline-block</i></b>. <br>
Además, con <b><i>display: inline-block</i></b>, se respetan los márgenes/rellenos superior e inferior. <br>
Un uso común es mostrar los elementos de la lista horizontalmente en lugar de verticalmente.
<hr>
<h3>Centrado</h3>
Para centrar horizontalmente un elemento de bloque, se usa <b><i>margin: auto;</i></b>. <br>
Establecer el ancho del elemento evitará que se extienda hacia el bordes del contenedor. <br>
A continuación, el elemento ocupará el ancho especificado y el espacio restante se dividirá a partes iguales entre los dos márgenes. <br>
La alineación central no tiene ningún efecto si no se establece la propiedad <b><i>width</i></b> (o  estáestablecido en 100%). <br>
Para centrar el texto dentro de un elemento, se usa <b><i>text-align: center;</i></b>. <br>
Para centrar una imagen, se establece los márgenes izquierdo y derecho y se convierten en un elemento <b><i>autoblock</i></b>. <br>
Un método para alinear elementos es utilizar <b><i>position: absolute;</i></b>. <br>
Hay muchas formas de centrar un elemento verticalmente en <b>CSS</b>. <br>
Una solución simple es usar arriba y abajo <b><i>padding</i></b>. <br>
También se puede usar flexbox para centrar las cosas. <br>
Solo hay que tener en cuenta que flexbox no es compatible con IE10 y versiones anteriores.
<hr>
<h3>Pseudoclase</h3>
Una pseudoclase se utiliza para definir un estado especial de un elemento. <br>
Por ejemplo, se puede utilizar para:
<ul>
    <li>Aplicar estilo a un elemento cuando un usuario pasa el ratón por encima de él.</li>
    <li>Diseña los enlaces visitados y no visitados de manera diferente.</li>
    <li>Aplicar estilo a un elemento cuando se le da el foco.</li>
</ul>
¡DEBE venir después en la definición de <b>CSS</b> para que sea efectivo! Los nombres de pseudoclase no distinguen entre mayúsculas y minúsculas. <br>
Las pseudoclases se pueden combinar con clases HTML. <br>
La pseudoclase <b><i>:first-child</i></b> coincide con un elemento especificado que es el primer elemento secundario de otro elemento. <br>
La pseudoclase <b><i>:lang</i></b> permite definir reglas especiales para diferentes idiomas.
<hr>
<h3>Pseudoelemento</h3>
Un pseudoelemento <b>CSS</b> se utiliza para aplicar estilo a partes específicas de un elemento. <br>
Por ejemplo, se puede utilizar para aplicar estilo a la primera letra, o línea, de un elemento o para insertar contenido antes o después del contenido de un elemento. <br>
El pseudoelemento <b><i>::first-line</i></b> se utiliza para añadir un estilo especial a la primera línea de un texto. <br>
El pseudoelemento <b><i>::first-line</i></b> solo se puede aplicar a nivel de bloque Elementos.
Las siguientes propiedades se aplican al pseudoelemento<b><i>::first-line</i></b>:
<ul>
    <li>Propiedades de la fuente</li>
    <li>Propiedades de color</li>
    <li>Propiedades de fondo</li>
    <li>Espaciado entre palabras</li>
    <li>Espaciado entre letras</li>
    <li>Decoración de texto</li>
    <li>Alineación vertical</li>
    <li>Transformación-texto</li>
    <li>Altura-línea</li>
    <li>Claro</li>
</ul>
El pseudoelemento <b><i>::first-letter</i></b> se utiliza para añadir un estilo especial al primero letra de un texto. <br>
El pseudoelemento <b><i>::first-letter</i></b> solo se puede aplicar a nivel de bloque Elementos.
Las siguientes propiedades se aplican al pseudoelemento <b><i>::first-letter:</i></b>:
<ul>
    <li>Propiedades de la fuente</li>
    <li>Propiedades de color</li>
    <li>Propiedades de fondo</li>
    <li>Propiedades de margen</li>
    <li>Propiedades de relleno</li>
    <li>Propiedades de borde</li>
    <li>Texto-decoración</li>
    <li>Vertical-align (solo si "float" es "none")</li>
    <li>Transformación de texto</li>
    <li>Altura-línea</li>
    <li>Flotar</li>
    <li>Claro</li>
</ul>
También se pueden combinar varios pseudoelementos. <br>
El pseudoelemento <b><i>::before</i></b> se puede utilizar para insertar algún contenido antes del contenido de un elemento. <br>
El pseudoelemento <b><i>::after</i></b> se puede utilizar para insertar algún contenido después del contenido de un elemento. <br>
El pseudoelemento <b><i>::marker</i></b> selecciona el marcadores de elementos de lista. <br>
El pseudoelemento <b><i>::selection</i></b> coincide con la parte de un elemento que es seleccionado por un usuario. <br>
Las siguientes propiedades <b>CSS</b> se pueden aplicar:
<ul>
    <li>color</li>
    <li>background</li>
    <li>cursor</li>
    <li>outline</li>
</ul>
<hr>
<h3>Opacidad</h3>
La propiedad <b><i>opacity</i></b> especifica la opacidad/transparencia de un elemento. <br>
La propiedad <b><i>opacity</i></b> se usa a menudo junto con el selector <b><i>:hover</i></b> para cambiar la opacidad al pasar el mouse. <br>
Cuando se usa la propiedad para agregar transparencia al fondo de un elemento, todos sus elementos secundarios heredan la misma transparencia. <br>
Esto puede hacer que el texto dentro de un elemento totalmente transparente sea difícil de leer. <br>
Si no se desea aplicar opacidad a los elementos secundarios, se utiliza valores de color RGBA.
<hr>
<h3>Barra de navegación</h3>
Tener una navegación fácil de usar es importante para cualquier sitio web. <br>
Con <b>CSS</b> se puede transformar aburridos menús HTML en atractivas barras de navegación. <br>
Una barra de navegación necesita HTML estándar como base. <br>
Una forma de crear una barra de navegación horizontal es especificar los elementos <b><i>< li ></i></b> como en línea, además del código "estándar" de la página anterior.
<hr>
<h3>Galería de imágenes</h3>
<b>CSS</b> se puede utilizar para crear una galería de imágenes.
<hr>
<h3>Sprite de imágenes</h3>
Un sprite de imagen es una colección de imágenes colocadas en una sola imagen. <br>
Una página web con muchas imágenes puede tardar mucho tiempo en cargarse y genera múltiples solicitudes de servidor. <br>
El uso de sprites de imagen reducirá el número de solicitudes del servidor y ahorrará ancho de banda.
<hr>
<h3>Atributos</h3>
Es posible aplicar estilo a elementos HTML que tienen atributos o valores de atributo específicos. <br>
El selector <b><i>[attribute]</i></b> se utiliza para seleccionar elementos con un atributo. <br>
El selector <b><i>[attribute="value"]</i></b> se utiliza para seleccionar elementos con un atributo y valor. <br>
El selector <b><i>[attribute~="value"]</i></b> se utiliza para seleccionar elementos con un atributo valor que contiene una palabra especificada. <br>
El selector <b><i>[attribute|="value"]</i></b> se utiliza para seleccionar elementos con el atributo especificado, cuyo valor puede ser exactamente el valor especificado o el valor especificado seguido de un guión (-). <br>
    El valor tiene que ser una palabra entera, ya sea sola, como class="top", o seguido de un guión( - ), como class="top-text".
El selector <b><i>[attribute^="value"]</i></b> se utiliza para seleccionar elementos con el atributo especificado, cuyo valor comienza con el valor especificado. <br>
    ¡El valor no tiene que ser una palabra completa!
El selector <b><i>[attribute$="value"]</i></b> se utiliza para seleccionar elementos cuyo atributo value termina con un valor especificado. <br>
    ¡El valor no tiene que ser una palabra completa!
El selector <b><i>[attribute*="value"]</i></b> se utiliza para seleccionar elementos cuyo atributo value contiene un valor especificado. <br>
¡El valor no tiene que ser una palabra completa!
<hr>
<h3>Formulario</h3>
El aspecto de un formulario HTML se puede mejorar en gran medida con <b>CSS</b>. <br>
Se utiliza la propiedad <b><i>width</i></b> para determinar el ancho del campo de entrada. <br>
Se utiliza la propiedad <b><i>padding</i></b> para agregar espacio dentro del campo de texto. <br>
Si se desea un icono dentro de la entrada, se usa la propiedad <b><i>background-image</i></b> y se coloca con la propiedad <b><i>background-position</i></b>. <br>
Se usa la propiedad <b><i>resize</i></b> para evitar que se cambie el tamaño de las áreas de texto (deshabilite el "capturador" en la esquina inferior derecha).
<hr>
<h3>Contadores</h3>
Los contadores <b>CSS</b> son "variables" mantenidas por <b>CSS</b> cuyos valores pueden ser incrementado por las reglas <b>CSS</b> (para realizar un seguimiento de cuántas veces se utilizan). <br>
Contadores permite ajustar la apariencia del contenido en función de su ubicación en el documento. <br>
Para trabajar con contadores <b>CSS</b> se utilizan las siguientes propiedades:
<ul>
<li><b>counter-reset</b> Crea o restablece un contador.</li>
<li><b>counter-increment</b> Incrementa un valor de contador.</li>
<li><b>content</b> Inserciones generadas contenido.</li>
<li><b>counter() o counters()</b> Agrega el atributo valor de un contador a un elemento.</li>
</ul>
<hr>
<h3>Important</h3>
La regla <b><i>!important</i></b> en <b>CSS</b> se utiliza para añadir más importancia a una propiedad/valor de lo normal. <br>
De hecho, si se usa la regla, anulará TODAS las reglas de estilo anteriores para eso propiedad específica en ese elemento. <br>
Es bueno conocer la regla. <br>
Es posible que se vea en algún código fuente <b>CSS</b>. <br>
Sin embargo, no es recomendable usarlo a menos que sea absolutamente necesario.
<hr>
<h3>Matemáticas</h3>
Las funciones matemáticas <b>CSS</b> permiten que las expresiones matemáticas sean utilizados como valores de propiedad. <br>
Aquí, explicaremos las funciones <b><i>calc()</i></b>, <b><i>max()</i></b> y <b><i>min()</i></b>. <br>
La función <b><i>calc()</i></b> realiza un cálculo que se utilizará como valor de propiedad. <br>
La función <b><i>max()</i></b> utiliza el valor más grande, de una lista de valores separados por comas, como el valor de la propiedad. <br>
La función <b><i>min()</i></b> utiliza el valor más pequeño, de una lista de valores separados por comas, como el valor de la propiedad.
<hr>
<h3>Esquinas</h3>
Con la propiedad <b><i>border-radius</i></b>, se puede dar a cualquier elemento "esquinas redondeadas". <br>
La propiedad <b><i>border-radius</i></b> define el radio de un esquinas del elemento. <br>
La propiedad <b><i>border-radius</i></b> es en realidad una propiedad abreviada de las propiedades <b><i>border-top-left-radius, border-top-right-radius, border-bottom-right-radius y border-bottom-left-radius</i></b>. <br>
La propiedad puede tener desde uno a cuatro valores. Estas son las reglas:
<dl>
    <dt><b>Cuatro valores</b>
        <dd>
            El primero el valor se aplica a la esquina superior izquierda, el segundo valor se aplica a la esquina superior derecha, El tercer valor se aplica a la esquina inferior derecha y el cuarto valor se aplica a esquina inferior izquierda.
        </dd>
    </dt>
    <dt><b>Tres valores</b>
        <dd>
            El primer valor se aplica a la esquina superior izquierda, el segundo valor se aplica a la esquina superior derecha y a la parte inferior izquierda esquinas, y el tercer valor se aplica a la esquina inferior derecha.
        </dd>
    </dt>
    <dt><b>Dos valores</b>
        <dd>
            Se aplica el primer valor a las esquinas superior izquierda e inferior derecha, y el segundo valor se aplica a la esquina superior derecha y esquina inferiore izquierda.
        </dd>
    </dt>
    <dt><b>Un valor</b>
        <dd>
            El valor se aplica a todos los cuatro esquinas, que se redondean igualmente.
        </dd>
    </dt>
</dl>
<hr>
<h3>Imagen de borde</h3>
Con la propiedad <b><i>border-image</i></b>, se puede establecer una imagen para que se use como borde alrededor de un elemento. <br>
La propiedad permite especificar una imagen que se utilizará en lugar del borde normal alrededor de un elemento. <br>
La propiedad tiene tres partes:
<ul>
<li>La imagen que se va a utilizar como borde</li>
<li>Dónde cortar la imagen</li>
<li>Defina si las secciones centrales deben repetirse o estirarse</li>
</ul>
<hr>
<h3>Múltiple fondo</h3>
<b>CSS</b> permite agregar varias imágenes de fondo para un elemento, a través de la propiedad<b><i>background-image</i></b>. <br>
Las diferentes imágenes de fondo están separadas por comas, y las imágenes son apiladas una encima de la otra, donde la primera imagen está más cerca del espectador. <br>
Se pueden especificar varias imágenes de fondo utilizando el background (como en el caso anterior) o la propiedad abreviada. <br>
La propiedad <b><i>background-size</i></b> permite especificar el tamaño de las imágenes de fondo. <br>
El tamaño se puede especificar en longitudes, porcentajes o utilizando uno de los dos Palabras clave: <b>contain</b> o <b>cover</b>. <br>
La palabra clave <b><i>contain</i></b> escala la imagen de fondo para que sea lo más grande posible (pero tanto su anchura como su altura deben caber dentro del área de contenido). Por lo tanto, dependiendo de las proporciones del fondo imagen y el área de posicionamiento del fondo, puede haber algunas áreas de el fondo que no están cubiertos por la imagen de fondo. <br>
La palabra clave <b><i>cover</i></b> escala la imagen de fondo para que el área de contenido sea completamente cubierto por la imagen de fondo (tanto su anchura como su altura son iguales o exceder el área de contenido). Como tal, es posible que algunas partes de la imagen de fondo no estén visible en el área de posicionamiento del fondo. <br>
La propiedad <b><i>background-size</i></b> también acepta varios valores para el tamaño de fondo (usando una lista separada por comas), cuando se trabaja con varios fondos. <br>
La propiedad <b><i>background-origin</i></b> especifica dónde se encuentra la imagen de fondo Colocado.
La propiedad toma tres valores diferentes:
<ul>
    <li><b>border-box</b> la imagen de fondo comienza desde la esquina superior izquierda del borde.</li>
    <li><b>padding-box</b> (por defecto) la imagen de fondo comienza desde la esquina superior izquierda del borde de relleno.</li>
    <li><b>content-box</b> la imagen de fondo comienza en la esquina superior izquierda del contenido.</li>
</ul>
La propiedad <b><i>background-clip</i></b> especifica el área de pintura del fondo. <br>
La propiedad toma tres valores diferentes:
<ul>
    <li><b>border-box</b> (por defecto) el fondo se pinta en el borde exterior del borde.</li>
    <li><b>padding-box</b> el fondo está pintado en el borde exterior del relleno.</li>
    <li><b>content-box</b> el fondo se pinta dentro del cuadro de contenido.</li>
</ul>
<hr>
<h3>Palabras clave</h3>
La palabra clave <b><i>transparent</i></b> se utiliza para hacer un color transparente. <br>
Esto se usa a menudo para hacer un color de fondo transparente para un elemento. <br>
La palabra clave es equivalente a <b><i>rgba(0,0,0,0)</i></b>. <br>
Los valores de color RGBA son una extensión de valores de color RGB con un canal alfa, que especifica la opacidad de un color. <br>
La palabra clave <b><i>currentcolor</i></b> es como una variable que contiene el valor actual de la propiedad color de un elemento. <br>
Esta palabra clave puede ser útil si desea que un color específico sea consistente en un o una página. <br>
La palabra clave <b><i>inherit</i></b> especifica que un debe heredar su valor de su elemento primario. <br>
La palabra clave <b><i>inherit</i></b> se puede utilizar para cualquier <b>CSS</b> y en cualquier elemento HTML.
<hr>
<h3>Degradados</h3>
Los degradados <b>CSS</b> permiten mostrar transiciones suaves entre dos o más colores especificados. <br>
<b>CSS</b> define tres tipos de degradados:
<dl>
    <dt><b>Degradados lineales (va hacia abajo/arriba/izquierda/derecha/diagonalmente)</b>
        <dd>
            Para crear un degradado lineal se debe definir Al menos dos paradas de color. Las paradas de color son los colores que desea representar transiciones suaves entre. También puede establecer un punto de partida y una dirección (o un ángulo) a lo largo de con el efecto degradado. <br>
            <b><i>background: linear-gradient(direction, color-stop1, color-stop2, ...);</i></b> <br>
            Se puede crear un degradado en diagonal especificando las posiciones inicial horizontal y vertical. <br>
            Si se desea tener más control sobre la dirección del degradado, se puede definir un ángulo, en lugar de las direcciones predefinidas (hacia abajo, hacia arriba, a la derecha, a la izquierda, a abajo a la derecha, etc.). <br>
            Un valor de 0 grados equivale a "Para arriba". <br>
            Un valor de 90 grados equivale a "a la derecha". Un valor de 180 grados es equivalente a "hasta el fondo". <br>
            Los degradados <b>CSS</b> también admiten transparencia, que se puede utilizar para crear efectos de desvanecimiento. <br>
            La función <b><i>repeating-linear-gradient()</i></b> se utiliza para repetir gradientes lineales.
        </dd>
    </dt>
    <dt><b>Degradados radiales (definidos por su centro)</b>
        <dd>
            Un gradiente radial se define por su centro. <br>
            Para crear un degradado radial, también se debe definir al menos dos paradas de color. <br>
            <b><i>background-image: radial-gradient(shape size at position, start-color, ..., last-color);</i></b> <br>
            El parámetro <b><i>shape</i></b> define la forma. <br>
            Puede tomar el valor círculo o elipse. <br>
            El valor predeterminado es elipse.
        </dd>
    </dt>
    <dt><b>Degradados cónicos (girados alrededor de un punto central)</b>
        <dd>
            Un degradado cónico es un degradado con transiciones de color giradas alrededor de un punto central. <br>
            Para crear un degradado cónico se debe definir al menos dos colores. <br>
            <b><i>background-image: conic-gradient([from angle] [at position,] color [degree], color [degree], ...);</i></b> <br>
            De forma predeterminada, el ángulo es 0 grados y la posición es el centro. <br>
            Si no se especifica ningún grado, los colores se distribuirán por igual el punto central. <br>
            Solo se tiene que añadir <b><i>border-radius: 50%</i></b> para que el degradado cónico parezca un pastel. <br>
            El [from ángulo] especifica un ángulo en el que todo el gradiente cónico es rotado por. <br>
            La posición [at] especifica el centro del gradiente cónico. <br>
            La función <b><i>repeating-conic-gradient()</i></b> se utiliza para repetir gradientes cónicos.
        </dd>
    </dt>
</dl>
<hr>
<h3>Sombra</h3>
Con <b>CSS</b> puedes añadir sombras al texto y a los elementos. <br>
La propiedad <b><i>text-shadow</i></b> <b>CSS</b> aplica sombra al texto. <br>
La propiedad <b><i>box-shadow</i></b> <b>CSS</b> se utiliza para aplicar una o más sombras en un elemento. <br>
En su uso más simple, solo se especifica una sombra horizontal y una vertical. <br>
El color predeterminado de la sombra es el color de texto actual. <br>
El parámetro <b><i>spread</i></b> define el radio de propagación. <br>
Un valor positivo aumenta el tamaño de la sombra, un valor negativo disminuye el tamaño de la sombra. <br>
El parámetro <b><i>inset</i></b> cambia la sombra de una sombra exterior (inicio) a una sombra interior.
<hr>
<h3>Exceso de texto</h3>
La propiedad <b><i>text-overflow</i></b> especifica cómo el contenido desbordado que no es debe señalarse al usuario. <br>
Se puede recortar o se puede representar como puntos suspensivos (...). <br>
La propiedad <b><i>word-wrap</i></b> permite que las palabras largas se puedan dividir y envolver en la siguiente línea. <br>
La propiedad <b><i>word-break</i></b> especifica las reglas de salto de línea. <br>
La propiedad <b><i>writing-mode</i></b> especifica si las líneas de texto se disponen horizontal o verticalmente.
<hr>
<h3>Transformación</h3>
Las transformaciones <b>CSS</b> permiten mover, rotar, escalar y sesgar elementos. <br>
Con la propiedad se puede usar los siguientes métodos de transformación 2D:
<ul>
    <li><b>translate()</b> El método mueve un elemento desde su posición actual (según a los parámetros dados para el eje X y el eje Y).</li>
    <li><b>rotate()</b> El método gira un elemento en el sentido de las agujas del reloj o en el sentido contrario a las agujas del reloj según un grado determinado.</li>
    <li><b>scale()</b> El método aumenta o disminuye el tamaño de un elemento (de acuerdo con los parámetros dados para el ancho y el alto).</li>
    <li><b>skew()</b> El método sesga un elemento a lo largo de los ejes X e Y en los ángulos dados.</li>
    <li><b>matrix()</b> El método combina todos los métodos de transformación 2D en uno solo. <br>
        El método matrix() toma seis parámetros, que contienen funciones matemáticas, que le permite rotar, escalar, mover (traducir) y sesgar elementos. <br>
        Los parámetros son los siguientes: (scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY()).</li>
</ul>
<b>CSS</b> también admite transformaciones 3D.
Con la propiedad <b><i>transform</i></b> se puede usar los siguientes métodos de transformación 3D:
<ul>
    <li>rotateX()</li>
    <li>rotateY()</li>
    <li>rotateZ()</li>
</ul>
<hr>
<h3>Transición</h3>
Las transiciones <b>CSS</b> permiten cambiar los valores de las propiedades sin problemas, durante un período determinado. <br>
Para crear un efecto de transición, se debe especificar dos cosas, la propiedad <b>CSS</b> a la que se desea agregar un efecto y la duración del efecto. <br>
La propiedad <b><i>transition-timing-function</i></b> especifica la curva de velocidad del efecto de transición. <br>
La propiedad <b><i>transition-timing-function</i></b> puede tener los siguientes valores: <br>
<ul>
    <li><b>ease</b> Especifica un efecto de transición con un inicio lento, luego rápido y luego lento (este es el valor predeterminado).</li>
    <li><b>linear</b> Especifica un efecto de transición con la misma velocidad de principio a fin.</li>
    <li><b>ease-in</b> Especifica un efecto de transición con un inicio lento.</li>
    <li><b>ease-out</b> Especifica un efecto de transición con un final lento.</li>
    <li><b>ease-in-out</b> Especifica un efecto de transición con un inicio y un final lentos.</li>
    <li><b>cubic-bezier(n,n,n,n)</b> Le permite definir sus propios valores en una función cúbica-bézier.</li>
</ul>
La propiedad <b><i>transition-delay</i></b> especifica un retardo (en segundos) para el efecto de transición. <br>
Las propiedades de transición <b>CSS</b> se pueden especificar una por una o mediante el uso de la propiedad abreviada <b><i>transition</i></b>:<b><i>transition: width 2s linear 1s;</i></b>
<hr>
<h3>Animaciones</h3>
¡<b>CSS</b> permite la animación de elementos HTML sin usar JavaScript! <br>
Una animación permite que un elemento cambie gradualmente de un estilo a otro. <br>
Se puede cambiar tantas propiedades <b>CSS</b> como quiera, tantas veces como quiera. <br>
Para usar la animación <b>CSS</b>, primero se debe especificar algunos fotogramas clave para el archivo animación. <br>
Los fotogramas clave contienen los estilos que tendrá el elemento en determinados momentos. <br>
Al especificar estilos <b>CSS</b> dentro de la regla <b><i>@keyframes</i></b>, la animación cambiará gradualmente del estilo actual al nuevo estilo en determinados momentos. <br>
Para que una animación funcione, se debe vincularla a un elemento. <br>
El inmueble <b><i>animation-duration</i></b> define cuánto tiempo debe tardar en completarse una animación. <br>
Si no se especifica la propiedad, no se producirá ninguna animación, porque el valor predeterminado es 0s (0 segundos). <br>
También es posible utilizar porcentaje. Al usar porcentaje, se puede agregar tantos como el estilo cambia a tu gusto. <br>
La propiedad <b><i>animation-delay</i></b> especifica un retraso para el inicio de una animación. <br>
La propiedad <b><i>animation-iteration-count</i></b> especifica el número de veces que se debe ejecutar una animación. <br>
La propiedad <b><i>animation-direction</i></b> especifica si una animación debe reproducirse hacia adelante, hacia atrás o alternativamente ciclos. <br>
La propiedad <b><i>animation-direction</i></b> puede tener los siguientes valores:
<ul>
    <li><b>normal</b> La animación se reproduce con normalidad (delanteros). Este es el valor predeterminado.</li>
    <li><b>reverse</b> La animación se reproduce en dirección inversa (hacia atrás).</li>
    <li><b>alternate</b> Se reproduce la animación Primero hacia adelante, luego hacia atrás.</li>
    <li><b>alternate-reverse</b> Se reproduce la animación Primero hacia atrás, luego hacia adelante.</li>
</ul>
La propiedad <b><i>animation-timing-function</i></b> especifica la curva de velocidad de la propiedad animación. <br>
La propiedad <b><i>animation-timing-function</i></b> puede tener los siguientes valores:
<ul>
    <li><b>ease</b> Especifica una animación con un inicio lento, luego rápido y luego lento (este es el valor predeterminado).</li>
    <li><b>linear</b> Especifica una animación con la misma velocidad de principio a fin.</li>
    <li><b>ease-in</b> Especifica una animación con un inicio lento.</li>
    <li><b>ease-out</b> Especifica una animación con un final lento.</li>
    <li><b>ease-in-out</b> Especifica una animación con un inicio y un final lentos.</li>
    <li><b>cubic-bezier(n,n,n,n)</b> Le permite definir sus propios valores en una función cúbica-bézier.</li>
</ul>
Las animaciones <b>CSS</b> no afectan a un elemento antes de que se reproduzca el primer fotograma clave o después de que se reproduzca el último fotograma clave. <br>
La propiedad <b><i>animation-fill-mode</i></b>  puede anular este comportamiento. <br>
La propiedad <b><i>animation-fill-mode</i></b> especifica para el elemento de destino cuando la animación no se está reproduciendo (antes de que comienza, después de que termina, o ambos). <br>
La propiedad <b><i>animation-fill-mode</i></b> puede tener los siguientes valores:
<ul>
    <li><b>none</b> Valor predeterminado. La animación no Aplique cualquier estilo al elemento antes o después de que se ejecute.</li>
    <li><b>forwards</b> El elemento conservará el elemento valores de estilo establecidos por el último fotograma clave (depende de la dirección de la animación) y animation-iteration-count.</li>
    <li><b>backwards</b> El elemento obtendrá el estilo valores establecidos por el primer fotograma clave (depende de la dirección de la animación), y Conserve esto durante el período de retardo de animación.</li>
    <li><b>both</b> La animación seguirá las reglas tanto para adelante como para atrás, extendiendo las propiedades de animación en ambos Indicaciones.</li>
</ul>
Se puede lograr el mismo efecto de animación que el anterior mediante el uso de la propiedad abreviada <b><i>animation</i></b>.
<hr>
<h3>Estilo de imágenes</h3>
La propiedad <b><i>filter</i></b> <b>CSS</b> agrega efectos visuales (como desenfoque y saturación) a un elemento. <br>
La propiedad <b><i>box-reflect</i></b> se utiliza para crear un reflejo de imagen. <br>
Para especificar el espacio entre la imagen y el reflejo, se agregua el tamaño de la brecha a la propiedad <b><i>box-reflect</i></b>.
<hr>
<h3>Object-fit y position</h3>
La propiedad <b><i>object-fit</i></b> se utiliza para especificar cómo un <b><i>< img ></i> o <i>< video ></i></b> debe cambiar de tamaño para que se ajuste a su contenedor. <br>
Esta propiedad indica al contenido que llene el contenedor de varias maneras; como "conserva esa relación de aspecto" o "estira y ocupa tanto espacio como sea" posible". <br>
Aquí es donde viene la propiedad. <br>
La propiedad puede tomar uno de los siguientes valores:
<ul>
    <li><b>fill</b> Este es el valor predeterminado. Se cambia el tamaño de la imagen para llenar el dimensión dada. Si es necesario, la imagen se estirará o aplastará para que quepa.</li>
    <li><b>contain</b> La imagen mantiene su relación de aspecto, pero se redimensiona para ajustarse a la dimensión dada.</li>
    <li><b>cover</b> La imagen mantiene su relación de aspecto y rellena la dimensión dada. La imagen se recortará para que encaje.</li>
    <li><b>none</b> No se cambia el tamaño de la imagen.</li>
    <li><b>scale-down</b> La imagen es reducida a la versión más pequeña de o none contain.</li>
</ul>
La propiedad <b><i>object-position</i></b> se utiliza para especificar cómo se debe colocar un <b><i>< img ></i> o <i>< video ></i></b> dentro de su contenedor.
<hr>
<h3>Enmascaramiento</h3>
Con el enmascaramiento <b>CSS</b>, se crea una capa de máscara para colocarla sobre un para ocultar parcial o totalmente partes del elemento.
La propiedad <b><i>mask-image</i></b> especifica una máscara capa imagen. <br>
La imagen de la capa de máscara puede ser una imagen PNG, una imagen SVG, un degradado <b>CSS</b> o un elemento SVG. <br>
<hr>
<h3>Columnas</h3>
El diseño de varias columnas <b>CSS</b> permite una fácil definición de varias columnas de Texto, al igual que en los periódicos. <br>
La propiedad <b><i>column-coun</i></b> especifica el número de columnas que debe tener un elemento dividirse en. <br>
La propiedad <b><i>column-gap</i></b> especifica el espacio entre las columnas. <br>
La propiedad <b><i>column-rule-style</i></b> especifica el estilo de la regla entre Columnas. <br>
La propiedad <b><i>column-rule-width</i></b> especifica el ancho de la regla entre columnas. <br>
La propiedad <b><i>column-span</i></b> especifica el número de columnas que debe abarcar un elemento. <br>
La propiedad <b><i>column-width</i></b> especifica un ancho óptimo sugerido para las columnas.
<hr>
<h3>Variables</h3>
La función <b><i>var()</i></b> se utiliza para insertar el valor de un variable <b>CSS</b>. <br>
Las variables <b>CSS</b> tienen acceso al DOM, lo que significa que se puede crear variables con ámbito local o global. <br>
Una buena manera de usar variables <b>CSS</b> es cuando se trata de los colores de un diseño. <br>
En lugar de copiar y pegar los mismos colores una y otra vez, se puede usar las variables. <br>
La sintaxis de la función <b><i>var()</i></b> es la siguiente:
<pre>
var(--Nombre: Valor)
</pre>
En primer lugar: las variables <b>CSS</b> pueden tener un alcance global o local. <br>
Se puede acceder/utilizar variables globales a través de todo el documento, mientras que Las variables locales solo se pueden usar dentro del selector donde se declaran. <br>
Para crear una variable con ámbito global, se declara dentro del selector <b><i>:root</i></b>. <br>
El selector coincide con el elemento raíz del documento. <br>
Para crear una variable con ámbito local, se declara dentro del selector que la va a utilizar. <br>
Las ventajas de usar <b><i>var()</i></b> son:
<ul>
    <li>hace que el código sea más fácil de leer (más comprensible).</li>
    <li>hace que sea mucho más fácil cambiar los valores de color.</li>
</ul>
Las variables <b>CSS</b> tienen acceso al DOM, lo que significa que se pueden cambiar con JavaScript.
<hr>
<h3>Consultas</h3>
La regla <b><i>@media</i></b>, introducida en <b>CSS</b>2, hizo posible definir diferentes reglas de estilo para diferentes tipos de medios. <br>
Las consultas de medios en <b>CSS</b>3 ampliaron la idea de los tipos de medios <b>CSS</b>2. <br>
En lugar de buscar un tipo de dispositivo, analizan la capacidad de la dispositivo. <br>
Las consultas de medios se pueden usar para verificar muchas cosas, como:
<ul>
    <li>Anchura y altura de la ventanilla.</li>
    <li>Anchura y altura del dispositivo.</li>
    <li>Orientación (¿está la tableta/teléfono en modo horizontal o vertical?).</li>
    <li>Resolución.</li>
</ul>
El uso de consultas de medios es una técnica popular para ofrecer un estilo personalizado a computadoras de escritorio, portátiles, tabletas y teléfonos móviles (como teléfonos iPhone y Android). <br>
Una consulta de medios consta de un tipo de medio y puede contener uno o más expresiones, que se resuelven en verdadero o falso.
<pre>
@media not|only mediatype and (expressions) {
    Codigo;
}
</pre>
<ul>
    <li><b>all</b> Se utiliza para todos los dispositivos de tipo multimedia.</li>
    <li><b>print</b> Se utiliza para impresoras.</li>
    <li><b>screen</b> Se utiliza para pantallas de computadoras, tabletas, teléfonos inteligentes, etc.</li>
    <li><b>speech</b> Se utiliza para lectores de pantalla que "leen" la página en voz alta.</li>
</ul>
Una forma de usar las consultas de medios es tener una sección <b>CSS</b> alternativa dentro de la hoja de estilo. <br>
Las consultas de medios son una técnica popular para entregar una hoja de estilo personalizada a diferentes dispositivos. <br>
Otro uso común de las consultas de medios es ocultar elementos en diferentes tamaños de pantalla. <br>
Las consultas de medios también se pueden utilizar para cambiar el diseño de una página en función de la orientación del navegador. <br>
Se puede tener un conjunto de propiedades <b>CSS</b> que solo cuando la ventana del navegador es más ancha que su altura, lo que se denomina "Paisaje/Landscape" orientación. <br>
También se puede utilizar los valores para establecer una anchura mínima y una anchura máxima.
<hr>
<h3>Flexbox</h3>
Antes del módulo de diseño de Flexbox, había cuatro modos de diseño:
<ul>
    <li><b>Block</b> para secciones de una página web.</li>
    <li><b>Inline</b> para texto.</li>
    <li><b>Table</b> para datos de tabla bidimensionales.</li>
    <li><b>Positioned</b> para la posición explícita de un elemento.</li>
</ul>
El Módulo de Diseño de Caja Flexible, facilita el diseño Estructura de diseño flexible y receptiva sin usar flotación o posicionamiento. <br>
Para empezar a utilizar el modelo Flexbox, primero se debe definir un contenedor flexible. <br>
Las propiedades del contenedor flexible son:
<dl>
    <dt><b>flex-direction</b>
        <dd>
            La propiedad define en qué dirección se encuentra el contenedor que quiere apilar los elementos flexibles.
        </dd>
    </dt>
    <dt><b>flex-wrap</b>
        <dd>
            La propiedad especifica si el o Los artículos flexibles deben envolverse o no.
        </dd>
    </dt>
    <dt><b>justify-content</b>
        <dd>
            La propiedad se utiliza para alinear los elementos flexibles.
        </dd>
    </dt>
    <dt><b>align-items</b>
        <dd>
            La propiedad se utiliza para alinear Los elementos flexibles.
        </dd>
    </dt>
    <dt><b>align-content</b>
        <dd>
            La propiedad se utiliza para alinear las líneas flexibles.
        </dd>
    </dt>
</dl>
<hr>
<h3>Grid</h3>
El módulo de diseño de cuadrícula <b><i>Grid</i></b> ofrece un sistema de diseño basado en cuadrículas, con filas y columnas, lo que facilita el diseño de páginas web sin tener que usar floats y posicionamiento. <br>
Un elemento HTML se convierte en un contenedor de cuadrícula cuando su propiedad se establece en <b><i>display:grid</i> o <i>inline-grid</i></b>. <br>
La propiedad <b><i>grid-template-columns</i></b> define el número de columnas en el diseño de cuadrícula y puede definir el ancho de cada columna. <br>
El valor es una lista separada por espacios, donde cada valor define el ancho de la columna respectiva. <br>
Si tiene más de 4 elementos en una cuadrícula de 4 columnas, la cuadrícula se agrega una nueva fila para colocar los elementos. <br>
La propiedad <b><i>grid-template-rows</i></b> define la altura de cada fila. <br>
La propiedad <b><i>justify-content</i></b> se utiliza para alinear toda la cuadrícula dentro del contenedor. <br>
El ancho total de la cuadrícula debe ser menor que el ancho del contenedor para que la propiedad tenga algún efecto. <br>
La propiedad <b><i>align-content</i></b> se utiliza para alinear verticalmente toda la cuadrícula dentro del contenedor. <br>
La propiedad <b><i>grid-column</i></b> define en qué columna(s) para colocar un elemento. <br>
La propiedad <b><i>grid-row</i></b> define en qué fila se va a Coloque un elemento. <br>
La propiedad <b><i>grid-area</i></b> se puede utilizar como una propiedad abreviada para las propiedades <b><i>grid-row-start, grid-column-start y las propiedades grid-row-end grid-column-end</i></b>. <br>
La propiedad <b><i>grid-area</i></b> también se puede utilizar para asignar nombres a elementos de cuadrícula.