# HTML
Esta carpeta contiene un archivo principal con prácticas HTML e información útil.
<hr>
<h3>Acerca de <b>HTML</b></h3>
<li><b>HTML</b> son las siglas de Hyper Text Markup Language (Lenguaje de Marcado de Hipertexto)</li>
<li><b>HTML</b> es el lenguaje de marcado estándar para crear páginas web</li>
<li><b>HTML</b> describe la estructura de una página web</li>
<li><b>HTML</b> consta de una serie de elementos</li>
<li>Los elementos <b>HTML</b> le dicen al navegador cómo mostrar el contenido</li>
<li>Los elementos <b>HTML</b> etiquetan fragmentos de contenido como "esto es un encabezado", "esto es un párrafo", "esto es un enlace", etc.</li>
<hr>
<h3>Estructura</h3>
<pre>
< Etiqueta Atributo > Contenido < / Etiqueta >
</pre>
<li>Todas las etiquetas <b>HTML</b> pueden tener atributos</li>
<li>Los atributos proporcionan información adicional sobre las etiquetas</li>
<li>Los atributos siempre se especifican en la etiqueta de inicio</li>
<li>Los atributos suelen venir en pares nombre/valor como:
<pre>
Atributo="valor"
</pre>
</li>
<hr>
<h3>Etiquetas</h3>
Las etiquetas <b>HTML</b> se pueden anidar (esto significa que las etiquetas pueden contener otras etiquetas). <br>
Los navegadores añaden automáticamente un espacio en blanco (un margen) antes y después de un encabezado. <br>
Las etiquetas <b>HTML</b> sin contenido se denominan etiquetas vacías. <br>
Las etiquetas <b>HTML</b> no distinguen entre mayúsculas y minúsculas, significa lo mismo <b><i>P</i></b> que <b><i>p</i></b>. <br> 
Las comillas dobles alrededor de los valores de atributo son las más comunes en <b>HTML</b>, pero las simples También se pueden utilizar. <br>
En algunas situaciones, cuando el propio valor del atributo contiene comillas dobles, es necesario utilizar comillas simples.
<hr>
<h3>Navegador</h3>
Los motores de búsqueda utilizan los encabezados para indexar la estructura y el contenido de sus páginas web. <br>
Los navegadores suelen sangrar algunas etiquetas. <br>
Los navegadores normalmente insertan comillas alrededor de la cita. <br>
Marcar abreviaturas puede dar información útil a los navegadores, traducción sistemas y motores de búsqueda. <br>
Utilizar el atributo de título para mostrar la descripción de la etiqueta, abreviatura/acrónimo al pasar el ratón por encima del elemento es lo ideal. <br>
Siempre debe incluir el atributo <b><i>lang="idioma-PAIS</i></b> dentro de la etiqueta <b>HTML</b>, para declarar el idioma de la página Web. <br>
Esto está destinado a ayudar a los motores de búsqueda y navegadores. <br>
Los códigos de país también se pueden agregar al código de idioma en el atributo. Entonces, los dos primeros caracteres definen el idioma de la página <b>HTML</b>, y los dos últimos caracteres definen el país. <br>
La etiqueta <b><i>< title ></i></b> agrega un título a la página. <br>
Cada página web debe tener un título de página para describir el significado de la página. <br>
El título debe describir el contenido y el significado de la página. <br>
El título de la página es muy importante para la optimización de motores de búsqueda (SEO). <br>
El texto es utilizado por los algoritmos de los motores de búsqueda para decidir el orden al enumerar páginas en los resultados de búsqueda. <br>
<hr>
<h3>Información y/o créditos</h3>
La información de contacto puede ser una dirección de correo electrónico, URL, dirección física, teléfono número, identificador de redes sociales, etc. <br>
El texto del elemento <b><i>address</i></b> generalmente se muestra en cursiva y los navegadores añaden siempre un salto de línea antes y después de la etiqueta. <br>
Por lo general, el texto de la etiqueta <b><i>cite</i></b> se representa en cursiva. <br>
<hr>
<h3>Comentarios</h3>
Los comentarios <b>HTML</b> no se muestran en el navegador, pero pueden ayuda a documentar el código fuente <b>HTML</b>.
<hr>
<h3>Colores</h3>
<b>HTML</b> admite 140 nombres de color estándar.
<hr>
<h3>Title</h3>
El valor del atributo <b><i>title</i></b> se mostrará cuando pasa el ratón por encima de una etiqueta. <br>
<hr>
<h3>Enlaces</h3>
Los enlaces <b>HTML</b> se pueden utilizar para crear marcadores, de modo que los lectores puedan saltar a partes específicas de una página web. <br>
Los marcadores pueden ser útiles si una página web es muy larga. <br>
Para crear un marcador, primero cree el marcador con un identificador o una clase y luego agregue un enlace a ella usando <b><i>a</i></b>. <br>
Cuando se hace clic en el enlace, la página se desplazará hacia abajo o hacia arriba hasta la ubicación del Marcador. <br>
Un enlace no tiene que ser texto. Un enlace puede ser una imagen o cualquier otro elemento <b>HTML</b>. <br>
El atributo más importante de la etiqueta es el atributo <b><i>href</i></b>, que indica el destino del vínculo. <br>
El texto del enlace es la parte que será visible para el lector. <br>
De forma predeterminada, la página vinculada se mostrará en la ventana actual del navegador, para cambiar esto, se debe especificar otro destino para el vínculo. <br>
Un enlace local (un enlace a una página dentro del mismo sitio web) se especifica con una URL relativa. <br>
Para usar una imagen como enlace, simplemente se coloca la etiqueta <b><i>< img ></i></b> dentro de la etiqueta <b><i> < a ></i></b>: <br>
Se utiliza <b><i>href="mailto:</i></b> dentro del atributo para crear un enlace que abra el programa de correo electrónico del usuario (para enviar un nuevo correo electrónico). <br>
Un enlace también se puede diseñar como un botón, mediante CSS: <br>
Para usar un botón <b>HTML</b> como enlace, se debe agregar algún código JavaScript. <br>
De forma predeterminada, los enlaces aparecerán de la siguiente manera en todos los navegadores:
<li>Un enlace no visitado está subrayado y en azul</li>
<li>Un enlace visitado está subrayado y en morado</li>
<li>Un enlace activo está subrayado y en rojo</li>
<hr>
<h3>Imágenes</h3>
Las imágenes pueden mejorar el diseño y la apariencia de una página web. <br>
Las imágenes no se insertan técnicamente en una página web, las imágenes están enlazadas a la web. <br>
La etiqueta <b><i>< img ></i></b> crea una retención espacio para la imagen a la que se hace referencia. <br>
<b>HTML</b> permite GIFs animados. <br>
Estos son los tipos de archivos de imagen más comunes, que son compatibles con todos los navegadores (Chrome, Edge, Firefox, Safari, Opera):
<li><b>APNG</b> Gráficos de red portátiles animados	.apng</li>
<li><b>GIF</b> Formato de intercambio de gráficos	.gif</li>
<li><b>ICO</b> Icono de Microsoft	.ico, .cur</li>
<li><b>JPEG </b> magen del Grupo Mixto de Expertos Fotográficos	.jpg, .jpeg, .jfif, .pjpeg, .pjp</li>
<li><b>PNG</b> Gráficos de red portátiles	.png</li>
<li><b>SVG</b> Gráficos vectoriales escalables	.svg</li>
Un favicon es una pequeña imagen que se muestra junto al título de la página en la pestaña del navegador. <br>
Puedes usar cualquier imagen que te guste como favicon. También puedes crear tu propio favicon en sitios como <a href="https://favicon.io/">https://favicon.io/</a>. <br>
La etiqueta también debe contener los atributos que especifican el ancho y altura de la imagen:
<pre>
< img height="Valor" src="Archivo" width="Valor" >
</pre>
El atributo <b><i>alt</i></b> especifica un texto alternativo para una imagen o archivo, si la imagen o archivo por alguna razón no se puede mostrar. <br>
Esto puede deberse a una conexión lenta, o un error en el atributo, o si el usuario utiliza una pantalla lector.
<pre>
< img alt="Texto" src="Archivo" >
</pre>
Cuando se carga una página web, es el navegador, en ese momento, que obtiene la imagen de un servidor web y la inserta en la página. Por lo tanto, asegúrese de que la imagen permanezca en el mismo lugar en relación a la página web, de lo contrario, sus visitantes obtendrán un icono de enlace roto. <br>
El ícono roto de enlace y el texto se muestran si el navegador no puede encontrar la imagen. <br>
La etiqueta <b><i>< img ></i></b> está vacía, solo contiene atributos y no tiene una etiqueta de cierre.
La etiqueta tiene dos requisitos de atributos:
<li><b>src</b> Especifica la ruta a la imagen.</li>
<li><b>alt</b> Especifica un texto alternativo para la imagen.</li>
Se puede utilizar el atributo <b><i>style=""</i></b> para especificar la anchura y altura de una imagen. <br>
Alternativamente, puede usar los atributos <b><i>height</i></b> y <b><i>width</i></b> <br>
Los atributos <b><i>height</i></b> y <b><i>width</i></b> siempre definen la altura y la anchura de la imagen. <br>
Algunos sitios web apuntan a una imagen en otro servidor.
<hr>
<h3>Direcciones</h3>
Hay dos formas de especificar la dirección URL en el atributo <b><i>src</i></b>:
<li><b>URL absoluta</b>: Enlaces a un archivo externo que está alojado en otro sitio web. <br>
Ejemplo: <b><i>src="www.google.com/archivo"</i></b>.</li>
<li><b>URL relativa</b>: Enlaces a un archivo alojado en el sitio web. <br>
Aquí, la URL no incluye el nombre de dominio, si la URL comienza sin una barra diagonal, será relativa a la página actual. <br>
Ejemplo: <b><i>src="archivo"</i></b>. <br>
Si la URL comienza con una barra diagonal, será relativa al dominio. <br>
Ejemplo: <b><i>src="carpeta/archivo"</i></b>.</li><br>
Las rutas de archivo se utilizan cuando se vinculan a archivos externos como:
<li>Páginas web</li>
<li>Imágenes</li>
<li>Hojas de estilo</li>
<li>JavaScripts</li>
<hr>
<h3>Picture</h3>
La etiqueta <b><i>< picture ></i></b> le da a la web más flexibilidad en especificación de recursos de imagen. <br>
La etiqueta contiene una o varias etiquetas <b><i>< source ></i></b>, cada una de las cuales se refiere a diferentes imágenes. <br>
De esta manera, el navegador puede elegir la imagen que mejor se adapte a sus necesidades, se ajusta a la vista y/o dispositivo actual. <br>
Cada etiqueta tiene un atributo <b><i>< source media=() ></i></b> que define cuándo la imagen es la más adecuada.
La etiqueta <b><i>< picture ></i></b> tiene dos propósitos principales:
<dl>
    <dt><b>Ancho de banda</b>:
        <dd>
            Si tiene una pantalla o dispositivo pequeño, no es necesario cargar un archivo de imagen nuevo. El navegador usará el primer elemento con valores de atributo coincidentes e ignorará cualquiera de los siguientes archivos.
        </dd>
    </dt>
    <dt><b>Soporte de formato</b>:
        <dd>
            Es posible que algunos navegadores o dispositivos no sean compatibles con todos los formatos de imagen. Al usar la etiqeuta se puede agregar imágenes de todos los formatos, y el navegador usará el primer formato que reconozca, e ignorará cualquiera de los siguientes archivos.
        </dd>
    </dt>
</dl>
<hr>
<h3>Mapa</h3>
La etiqueta <b><i>< map></i></b> define un mapa de imagen. <br>
Un mapa de imagen es una imagen con Áreas en las que se puede hacer clic. <br>
Las áreas se definen con una o más etiquetas <b><i>< area ></i></b>. <br>
La imagen se inserta mediante la etiqueta <b><i>< img ></i></b>. La única diferencia con otras imágenes es que se debe agregar un atributo <b><i>usemap</i></b>. <br>
A continuación se añade un elemento.<b><i>< map ></i></b> <br>
La etiqueta se utiliza para crear un mapa de imagen y se vincula a la imagen mediante el atributo <b><i>map name=""</i></b> <br>
A continuación, se añade las áreas en las que se puede hacer clic. <br>
Un área en la que se puede hacer clic se define mediante una etiqueta <b><i>< area ></i></b>. <br>
Se debe definir la forma del área en la que se puede hacer clic y se puede elegir uno de estos valores:
<li><b>rect</b> Define una región rectangular</li>
<li><b>circle</b> Define una región circular</li>
<li><b>poly</b> Define una región poligonal</li>
<li><b>default</b> Define toda la región</li>
También se debe definir algunas coordenadas para poder colocar el área en la que se puede hacer clic a la imagen. <br>
<dl>
    <dt><b>Las coordenadas para <i>rect</i> vienen en pares, uno para el eje x y otro para el eje y.</b>
        <dd>
            Por lo tanto, las coordenadas se encuentran a una cantidad de píxeles desde el margen izquierdo y otra cantidad de píxeles desde la parte superior. <br>
            Las coordenadas se encuentran una cantidad de píxeles desde el margen derecho y otra cantidad de píxeles desde la parte superior. <br>
            Ahora tenemos suficientes datos para crear un área rectangular en la que se puede hacer clic:
            <pre>
            < area shape="rect" coords="?, ?, ?, ?" >
            </pre>
        </dd>
    </dt>
    <dt><b>Para agregar un área de círculo, primero se ubican las coordenadas del centro del círculo.
        <dd>
            A continuación, se especifica el radio del círculo.</b> <br>
            Ahora se tienen suficientes datos para crear un área circular en la que se pueda hacer clic:
            <pre>
            < area shape="circle" coords="?, ?, ?" >
            </pre>
        </dd>
    </dt>
    <dt><b><i>poly</i>contiene varias coordenadas o puntos, que crean una forma formada con líneas rectas (un polígono), esto se puede usar para crear cualquier forma.</b>
        <dd>
            Se tiene que hallar las coordenadas X Y para todas las aristas de la figura. <br>
            Las coordenadas vienen en pares, uno para el eje X y otro para el eje Y:
            <pre>
            < area shape="poly" coords="140,121,181,116,204,160,204,222,191,270,140,329,85,355,58,352,37,322,40,259,103,161,128,147" >
            </pre>
        </dd>
    </dt>
</dl>
<b>Un área en la que se puede hacer clic también puede desencadenar una función de JavaScript.</b>
<hr>
<h3>Tablas</h3>
Las tablas <b>HTML</b> permiten a los desarrolladores web organizar los datos en filas y Columnas. <br>
Una tabla consta de celdas de tabla dentro de filas y columnas. <br>
Una celda de tabla puede contener todo tipo de elementos <b>HTML</b>: texto, imágenes, listas, enlaces, otras tablas, etc. <br>
PSe puede tener tantas filas como se desee en una tabla. <br>
Solo se debe asegurar de que el número de celdas sea el mismo en cada fila. <br>
A veces se desea que las celdas sean celdas de encabezado de tabla, en esos casos, se usa la etiqueta <b><i>< th ></i></b> en lugar de la etiqueta <b><i>< td ></i></b>. <br>
De forma predeterminada, el texto de las etiquetas <b><i>< th ></i></b> está en negrita y centrado, pero se puede cambiar eso con CSS. <br>
Las tablas pueden tener bordes de diferentes estilos y formas. <br>
Para agregar un borde, se usa la propiedad border CSS. <br>
Para evitar tener bordes dobles, se establece la propiedad CSS en <b><i>Border-collapse: collapse;</i></b>. Eso hará que las fronteras se colapsen en una sola frontera. <br>
Las tablas pueden tener diferentes tamaños para cada columna, fila o celda. <br> 
Para establecer el ancho de una tabla, se usa CSS y las proiedades <b><i>height</i></b> y <b><i>width</i></b>. <br>
El uso de un porcentaje como unidad de tamaño para un ancho significa que tan ancho será este elemento en comparación con su elemento principal. <br>
Para establecer la altura de una fila específica, se usa la propiedad <b><i>height</i></b> en CSS. <br>
Las tablas pueden tener encabezados para cada columna o fila, o para muchas columnas o filas. <br>
Se puede tener un encabezado que abarque dos o más columnas, para hacer esto, se usa el atributo <b><i>colspan</i></b> en la etiqueta. <br>
Se puede agregar un título que sirva como encabezado para toda la tabla. <br>
Para agregar un título a una tabla, se usa la etiqueta<b><i>< caption ></i></b> <br>
Las tablas pueden ajustar el relleno dentro de las celdas, y también el espacio entre las celdas. <br>
El relleno de celda es el espacio entre los bordes de la celda y el contenido de la celda. <br>
De forma predeterminada, el relleno se establece en 0. <br>
Para agregar relleno en las celdas de la tabla, se usa la propiedad CSS <b><i>padding</i></b> <br>
El espaciado de celdas es el espacio entre cada celda. <br>
De forma predeterminada, el espacio se establece en 2 píxeles. <br>
Para cambiar el espacio entre las celdas de la tabla, se usa la propiedad CSS <b><i>border-spacing</i></b>. <br>
Las tablas pueden tener celdas que se extienden a lo largo de varias filas y/o columnas. <br>
Para hacer que una celda se extienda sobre varias columnas, se usa el atributo <b><i>colspan</i></b>. <br>
Para hacer que una celda se extienda por varias filas, se usa el atributo <b><i>rowspan</i></b>. <br>
Si se agrega un color de fondo en cada dos filas de la tabla, se obtendrá un bonito efecto de rayas de cebra.
La etiqueta se utiliza para aplicar estilo a un grupo de columnas <b><i>< colgroup ></i></b>. <br>
Cada grupo se especifica con una etiqueta <b><i>< col ></i></b>. <br>
El atributo <b><i>span</i></b> especifica el número de columnas que obtienen el estilo.
<hr>
<h3>Listas</h3>
Las listas permiten agrupar un conjunto de elementos relacionados en listas. <br>
Una lista desordenada comienza con la etiqueta <b><i>< ul ></i></b>. <br>
Los elementos de la lista se marcarán con viñetas (pequeños círculos negros) de forma predeterminada. <br>
Una lista ordenada comienza con la etiqueta <b><i>< ol ></i></b>. <br>
Los elementos de la lista se marcarán con números de forma predeterminada. <br>
Cada elemento de la lista comienza con la etiqueta <b><i>< li ></i></b>.<bre>
<b>HTML</b> también admite listas de descripciones. <br>
Una lista de descripción es una lista de términos, con una descripción de cada término. <br>
La etiqueta define la lista de descripción <b><i>< dl ></i></b>, la etiqueta <b><i>< dt ></i></b> define el término (nombre) y la etiqueta <b><i>< dl ></i></b> describe cada término. <br>
Las listas se pueden anidar (lista dentro de la lista). <br>
Las listas se pueden diseñar de muchas maneras diferentes con CSS, la forma popular es aplicar estilo a una lista horizontalmente, para crear un menú de navegación. <br>
El atributo <b><i>type</i></b> de la etiqueta <b><i>< o ></i></b>, define el tipo de etiqueta marcador de elemento de lista.
<li><b><i>type="1"</i></b> Número</li>
<li><b><i>type="A"</i></b> Mayúsculas</li>
<li><b><i>type="a"</i></b> Minúsculas</li>
<li><b><i>type="I"</i></b> Mayúsculas en romano</li>
<li><b><i>type="i"</i></b> Minúsculas en romano</li>
De forma predeterminada, una lista ordenada comenzará a contar desde 1, si s desea comenzar a contar a partir de un número específico, se puede usar el atributo <b><i>start</i></b>. <br>
<hr>
<h3>Div</h3>
La etiqueta <b><i>< div ></i></b> es por defecto, un block, lo que significa que toma todo el ancho disponibl. <br>
La etiqueta se utiliza a menudo para agrupar secciones de una página web.
<hr>
<h3>Block</h3>
Las etiquetas <b><i>Block</i></b> son ciertas etiquetas que ocupan todo el ancho disponble. <br>
Si se tiene un elemento que es no es de un 100% de ancho, y se desea alinearlo al centro, se puede estableces la propiedad CSS <b><i>margin</i></b> en <b><i>auto</i></b>. <br>
Se puede tener muchos contenedores en la misma página. <br>
Al crear páginas web, a menudo se desea tener dos o más elementos, uno al lado del otro. <br>
Existen diferentes métodos para alinear elementos uno al lado del otro, todos incluyen algo de estilo CSS. <br>
Los métodos más comunes son:
<dl>
    <dt><b><i>Float</i></b>
        <dd>
            La propiedad CSS no estaba pensada originalmente para alinear elementos uno al lado del otro, pero se ha utilizado para este propósito durante muchos años. <br>
            La propiedad CSS se utiliza para posicionar y dar formato al contenido y permite que los elementos floten uno al lado del otro en lugar de uno encima del otro.
        </dd>
    </dt>
    <dt><b><i>Inline-block</i></b>
        <dd>
            Si cambia la propiedad <b><i>display</i></b> de la etiqueta de <b><i>block</i></b> a <b><i>inline-block</i></b>, los elementos ya no agregarán un salto de línea antes y después, y se mostrarán uno al lado del otro en lugar de uno encima del otro.
        </dd>
    </dt>
    <dt><b><i>Flexbox</i></b>
        <dd>
            El módulo de diseño CSS <b><i>Flexbox</i></b> se introdujo para facilitar el diseño responsivo flexible estructurado sin utilizar flotación ni posicionamiento. <br>
            Para que el método CSS funcione, se debe rodear los elementos con otro elemento y dar el estado de un contenedor flexible.
        </dd>
    </dt>
    <dt> Grid
        <dd>
            El módulo de diseño de cuadrícula CSS ofrece un sistema de diseño basado en cuadrículas, con filas y columnas, facilitando el diseño de páginas web sin tener que utilizar flotadores y posicionamientos. <br>
            Suena casi igual que flex, pero tiene la capacidad de definir más de una fila y posicionar cada fila individualmente. <br>
            El método CSS <b><i>Grid</i></b> requiere que se rodee los elementos con otro elemento y proporcione el estado como contenedor de cuadrícula y se debe especificar el ancho de cada columna.
        </dd>
    </dt>
</dl>
<hr>
<h3>Class</h3>
El atributo <b><i>class</i></b> se utiliza para especificar una clase para un elemento <b>HTML</b>. <br>
Varios elementos <b>HTML</b> pueden compartir la misma clase. <br>
El atributo se usa a menudo para apuntar a un nombre de clase en una hoja de estilos. <br>
También puede ser utilizado por un JavaScript para acceder y manipular los elementos con el nombre de clase específico. <br>
El atributo se puede utilizar en cualquier elemento. <br>
<b>¡El nombre de la clase distingue entre mayúsculas y minúsculas!</b>
Para acceder a una clase, se escribe un carácter de punto <b><i>.</i></b> seguido de el nombre de la clase, a continuación, se definen las propiedades CSS entre llaves <b><i>{}</i></b>. <br>
El nombre de la clase también puede ser utilizado por JavaScript para realizar ciertas tareas para la etiqueta específica.
<hr>
<h3>Id</h3>
Se utiliza el atributo <b><i>id</i></b> para especificar un identificador único para un elemento <b>HTML</b>. <br>
No puede tener más de un elemento con el mismo identificador en un archivo <b>HTML</b>. <br>
El atributo especifica un identificador único para un elemento <b>HTML</b>. El valor del atributo debe ser único dentro del documento <b>HTML</b>. <br>
El atributo se utiliza para apuntar a una declaración de estilo específica en una hoja de estilo. <br>
También es utilizado por JavaScript para acceder y manipular la etiqueta específica. <br>
Para acceder a un id, se escribe un carácter de almohadilla <b><i>#</i></b> seguido de el nombre del id, a continuación, se definen las propiedades CSS entre llaves <b><i>{}</i></b>. <br>
¡El nombre de id distingue entre mayúsculas y minúsculas! <br>
El nombre de identificación debe contener al menos un carácter, no puede comenzar con un número y no debe contener espacios en blanco <b>(espacios, tabulaciones, etc.)</b>. <br>
El atributo también puede ser utilizado por JavaScript para realizar algunas tareas para la etiqueta específica.
<hr>
<h3>Iframe</h3>
Un <b><i>iframe</i></b> <b>HTML</b> se utiliza para mostrar una página web dentro de una página web. <br>
Un marco en línea o <b><i>iframe</i></b> se utiliza para incrustar otro documento dentro del documento <b>HTML</b> actual. <br>
Es una buena práctica incluir siempre un atributo <b><i>title</i></b> para la etiqueta <b><i>< iframe ></i></b>. Esto es utilizado por los lectores de pantalla para leer en voz alta cuál es el contenido del iframe. <br>
Se utiliza los atributos <b><i>height</i></b> y <b><i>width</i></b> para especificar tamaño de la etiqueta. <br>
De forma predeterminada, un iframe tiene un borde a su alrededor. <br>
Para eliminar el borde, se utiliza la propiedad <b><i>border</i></b> de CSS. <br>
Un iframe se puede utilizar como fotograma de destino para un vínculo. <br>
El atributo <b><i>target</i></b> del enlace <b><i>< a ></i></b> debe hacer referencia al atributo <b><i>targetname</i></b> del iframe. <br>
El atributo <b><i>src</i></b> define la dirección URL de la página que se va a incrustar.
<hr>
<h3>JS</h3>
JavaScript hace que las páginas <b>HTML</b> sean más dinámicas e interactivas. <br>
La etiqueta <b><i>< script ></i></b> se utiliza para definir un script del lado del cliente (JavaScript). <br>
La etiqueta contiene instrucciones de script o apunta a un archivo de script externo a través del atributo <b><i>src</i></b>. <br>
Los usos comunes de JavaScript son la manipulación de imágenes, la validación de formularios y cambios dinámicos de contenido. <br>
Para seleccionar un elemento <b>HTML</b>, JavaScript utiliza el método <b><i>document.getElementById()</i></b> con mayor frecuencia. <br>
JavaScript puede cambiar los estilos y los atributos. <br>
La etiqueta <b><i>< noscript ></i></b> define un contenido alternativo para mostrar a los usuarios que tienen scripts deshabilitados en su navegador o tienen un navegador que no es compatible.
<hr>
<h3>Cabeza</h3>
La etiqueta <b><i>< head ></i></b> es un contenedor para las etiquetas <b><i>< style >, < meta >, < link >, < script >, < base > y < title ></i></b>. <br> 
La etiqueta es un contenedor de metadatos (data about data) y se coloca entre la etiqueta <b><i>< HTML ></i></b> y la etiqueta <b><i>< body ></i></b>. <br>
Los metadatos son datos sobre el documento <b>HTML</b>. <b>No se muestran los metadatos</b>. <br>
Los metadatos suelen definir el título del documento, el conjunto de caracteres, los estilos, los guiones y otra metainformación. <br>
La etiqueta <b><i>< link ></i></b> se utiliza con mayor frecuencia para enlazar a hojas de estilo externas. <br>
La etiqueta <b><i>< meta ></i></b> se utiliza normalmente para especificar el juego de caracteres, la descripción de la página, las palabras clave, el autor del documento, y la configuración de la ventanilla. <br>
Los metadatos no se mostrarán en la página, pero serán utilizados por los navegadores (cómo mostrar el contenido o volver a cargar la página), por motores de búsqueda (palabras clave) y otros servicios web. <br>
<dl>
    <dt><b><i>< meta charset="Caracteres" ></i></b>
        <dd>
            Define el juego de caracteres utilizado.
        </dd>
    </dt>
    <dt><b><i>< meta name="keywords" content="Palabra, Palabra" ></i></b>
        <dd>
            Definine palabras clave para los motores de búsqueda.
        </dd>
    </dt>
    <dt><b><i>< meta name="description" content="Descripción" ></i></b>
        <dd>
            Define una descripción de tu página web.
        </dd>
    </dt>
    <dt><b><i>< meta name="author" content="Autor" ></i></b>
        <dd>
            Define el autor de una página.
        </dd>
    </dt>
    <dt><b><i>< meta http-equiv="refresh" content="segundos" ></i></b> 
        <dd>
            Actualiza el documento cada cantidad de segundos.
        </dd>
    </dt>
    <dt><b><i><meta name="viewport" content="width=device-width, initial-scale=1.0" ></i></b>
        <dd>
            Configura la ventana gráfica para que el sitio web se vea bien en todos los dispositivos.
        </dd>
    </dt>
</dl>
La ventanilla es el área visible del usuario de una página web. <br>
Varía según el dispositivo, será más pequeño en un teléfono móvil que en la pantalla de un ordenador. <br>
Se debe incluir el siguiente elemento en todas las páginas web: <b><i>< meta name="viewport" content="width=device-width, initial-scale=1.0" ></i></b>. <br>
Esto le da al navegador instrucciones sobre cómo para controlar las dimensiones y la escala de la página. <br>
La parte <b><i>width=device-width</i></b> establece el ancho de la página para seguir el ancho de la pantalla del dispositivo (que variará según el dispositivo). <br>
La parte <b><i>initial-scale=1.0</i></b> establece el nivel de zoom inicial cuando el navegador carga la página por primera vez. <br>
La etiqueta <b><i>< base ></i></b> especifica la URL base y/o el destino de todas las URL relativas de una página. <br>
¡Solo puede haber una etiqueta <b><i>< base ></i></b> en un documento!
<hr>
<h3>Responsivo</h3>
Los sitios web a menudo muestran contenido en varias columnas (como una revista o un periódico). <br>
El diseño web responsivo consiste en crear páginas web que se vean bien en todos los dispositivos. <br>
Un diseño web responsivo se ajustará automáticamente a diferentes tamaños de pantalla y ventanas gráficas. <br>
El diseño web responsivo consiste en utilizar <b>HTML</b> y <b>CSS</b> para cambiar el tamaño, ocultar, reducir o ampliar automáticamente para que se vea bien en todos los dispositivos (computadoras de escritorio, tabletas y teléfonos). <br>
Todos frameworks CSS populares ofrecen un diseño responsivo.
<hr>
<h3>Informática</h3>
Se utiliza la etiqueta <b><i>< kbd ></i></b> para definir la entrada del teclado. <br>
El contenido del interior se muestra en el archivo con una fuente monoespaciada predeterminada. <br>
La etiqueta <b><i>< samp ></i></b> se utiliza para definir la salida de ejemplo de un programa informático. <br>
El contenido del interior se muestra en la fuente monoespaciada predeterminada del navegador. <br>
Se utiliza la etiqueta <b><i>< code ></i></b> para definir un fragmento de código informático. <br>
El contenido del interior se muestra en el la fuente monoespaciada predeterminada del navegador. <br>
Se debe tener en cuenta que la etiqueta <b><i>< code ></i></b> no conserva espacios en blanco ni saltos de línea adicionales. <br>
Para solucionar esto, se puede poner la etiqueta <b><i>< code ></i></b> dentro de una etiqueta <b><i>< pre ></i></b>. <br>
Se utiliza la etiqueta <b><i>< var ></i></b> para definir una variable en programación o en una expresión matemática. <br>
El contenido del interior suele mostrarse en cursiva. <br>
Un elemento semántico describe claramente su significado tanto para el navegador como para el desarrollador.
<hr>
<h3>Formularios</h3>
Se utiliza un formulario <b><i>< form ></i></b> para recopilar la entrada del usuario. <br>
La entrada del usuario es la mayoría de las veces se envía a un servidor para su procesamiento. <br>
El elemento es un contenedor para diferentes tipos de elementos de entrada, tales como: campos de texto, casillas de verificación, radio botones, botones de envío, etc. <br>
La etiqueta <b><i>< label ></i></b> define un título para muchos elementos <b><i>< input ></i></b> del formulario. <br>
La etiqueta es útil para usuarios xon lectores de pantalla, porque el lector de pantalla leerá en voz alta la etiqueta cuando El usuario se centra en el elemento de entrada. <br>
La etiqueta <b><i>< label ></i></b> también ayuda a los usuarios que tienen dificultad para hacer clic en regiones muy pequeñas (como botones de opción o casillas de verificación), porque cuando el usuario hace clic en el texto dentro del elemento, se alterna el botón de opción/casilla de verificación. <br>
Los botones de radio permiten al usuario seleccionar una de un número limitado de opciones. <br>
Las casillas de verificación permiten al usuario seleccionar cero o más opciones de un número limitado de opciones. <br>
El controlador de formularios suele ser un archivo en el servidor con un script para su procesamiento datos de entrada. <br>
El controlador de formulario se especifica en el atributo <b><i>action</i></b> del formulario. <br>
Hay que tener en cuenta que cada campo de entrada debe tener un atributo <b><i>name</i></b> para enviarse. <br>
Si se omite el atributo <b><i>name</i></b>, el valor del campo de entrada no se enviará. <br>
Si se omite el atributo <b><i>action</i></b>, la acción se establece en la página actual. <br>
El atributo <b><i>method</i></b> especifica el valor o método HTTP que se utilizará al enviar los datos del formulario. <br>
Los datos del formulario se pueden enviar como variables de URL <b><i>con method="get"</i></b> o como transacción HTTP post <b><i>(con method="post")</i></b>. <br>
El método HTTP predeterminado al enviar datos de formulario es <b><i>GET</i></b>.
<dl>
    <dt><b><i>Notas sobre GET</i></b>:
        <dd>
            <li>Anexa los datos del formulario a la dirección URL, en pares nombre/valor</li>
            <li>¡NUNCA use GET para enviar datos confidenciales! (¡los datos del formulario enviado son visibles en la URL!)</li>
            <li>La longitud de una URL es limitada (2048 caracteres)</li>
            <li>Útil para envíos de formularios en los que un usuario desea marcar el resultado</li>
            <li>GET es bueno para datos no seguros, como cadenas de consulta en Google</li>
        </dd>
    </dt>
    <dt><b><i>Notas sobre POST</i></b>:
        <dd>
            <li>Anexa los datos del formulario dentro del cuerpo de la solicitud HTTP (el archivo los datos del formulario no se muestran en la URL)</li>
            <li>POST no tiene limitaciones de tamaño y se puede utilizar para enviar grandes cantidades de datos.</li>
            <li>Los envíos de formularios con POST no se pueden marcar como favoritos</li>
        </dd>
    </dt>
</dl>
El atributo <b><i>autocomplete</i></b> especifica si Un formulario debe tener la función de autocompletar activada o desactivada. <br>
Cuando la función de autocompletar está activada, el explorador completa automáticamente los valores en función de los valores que el usuario ha introducido antes. <br>
El atributo <b><i>novalidate </i></b> es un atributo booleano. <br>
Cuando está presente, especifica que los datos del formulario (entrada) no deben validarse cuando se envían. <br>
El elemento <b><i>< form ></i></b> puede contener uno o varios de los siguientes elementos de formulario:
<dl>
    <dt><b><i>< input ></i></b>
        <dd>
            Una de las etiquetas de formulario más utilizadas. <br>
            La etiqueta se puede mostrar de varias maneras, dependiendo del atributo <b><i>type</i></b>
        </dd>
    </dt>
    <dt><b><i>< label ></i></b>
        <dd>
            La etiqueta define una etiqueta para varios elementos de formulario. <br>
            El atributo <b><i>forid</i></b> de la etiqueta debe ser igual al atributo <b><i>id</i></b> de la etiqueta <b><i>< input ></i></b> para unirlos.
        </dd>
    </dt>
    <dt><b><i>< select ></i></b>
        <dd>
            La etiqueta define una lista desplegable.
            Se utiliza el atributo <b><i>size</i></b> para especificar el número de valores visibles. <br>
            Se utiliza el atributo <b><i>multiple</i></b> para permitir que el usuario seleccione más de un valor.
        </dd>
    </dt>
    <dt><b><i>< textarea ></i></b>
        <dd>
            La etiqueta define un campo de entrada de varias líneas (un área de texto).
            El atributo <b><i>rows</i></b> especifica el número visible de líneas en un área de texto. <br>
            El atributo <b><i>cols</i></b> especifica la anchura visible de un texto área.
        </dd>
    </dt>
    <dt><b><i>< button ></i></b>
        <dd>
            La etiqueta define un botón en el que se puede hacer clic.
        </dd>
    </dt>
    <dt><b><i>< fieldset ></i></b>
        <dd>
            La etiqueta se utiliza para agrupar datos relacionados en un formulario.
        </dd>
    </dt>
    <dt><b><i>< legend ></i></b>
        <dd>
            La etiqueta define un título para a etiqueta <b><i>< fieldset ></i></b>.
        </dd>
    </dt>
    <dt><b><i>< datalist ></i></b>
        <dd>
            La etiqueta especifica una lista de opciones predefinidas para una etiqueta <b><i>< input ></i></b>. <br>
            Los usuarios verán una lista desplegable de las opciones predefinidas a medida que ingresan datos.
        </dd>
    </dt>
    <dt><b><i>< output ></i></b>
        <dd>
            La etiqueta representa el resultado de un cálculo.
        </dd>
    </dt>
    <dt><b><i>< option ></i></b>
        <dd>
            La etiqueta define una opción que puede ser seleccionado. <br>
            De forma predeterminada, se selecciona el primer elemento de la lista desplegable. <br>
        Para definir una opción preseleccionada, se agrega el atributo <b><i>selected</i></b> a la opción.
        </dd>
    </dt>
    </dl>
A los campos de un formulario se le pueden aplicar diversas restricciones:
    <dl>
    <dt><b><i>checked</i></b>
        <dd>
            Especifica que un campo de entrada debe preseleccionarse cuando se carga la página <b><i>(para tipo="checkbox" o tipo="radio")</i></b>.
        </dd>
    </dt>
    <dt><b><i>disable</i></b>
        <dd>
            Especifica que un campo de entrada debe estar deshabilitado.
        </dd>
    </dt>
    <dt><b><i>max</i></b>
        <dd>
            Especifica el valor máximo para un campo de entrada.
        </dd>
    </dt>
    <dt><b><i>maxlength</i></b>
        <dd>
            Especifica el número máximo de caracteres para un campo de entrada.
        </dd>
    </dt>
    <dt><b><i>min</i></b>
        <dd>
            Especifica el valor mínimo para un campo de entrada
        </dd>
    </dt>
    <dt><b><i>Pattern</i></b>
        <dd>
            Especifica una expresión regular para comparar el valor de entrada.
        </dd>
    </dt>
    <dt><b><i>readonly</i></b>
        <dd>
            Especifica que un campo de entrada es de solo lectura (no se puede cambiar).
        </dd>
    </dt>
    <dt><b><i>required</i></b>
        <dd>
            Especifica que un campo de entrada es obligatorio (debe completarse).
        </dd>
    </dt>
    <dt><b><i>size</i></b>
        <dd>
            Especifica el ancho (en caracteres) de un campo de entrada
        </dd>
    </dt>
    <dt><b><i>step</i></b>
        <dd>
            Especifica los intervalos numéricos legales para un campo de entrada.
        </dd>
    </dt>
    <dt><b><i>value</i></b>
        <dd>
            Especifica el valor predeterminado para un campo de entrada.
        </dd>
    </dt>
</dl>
El atributo <b><i>placeholder</i></b> de entrada especifica una breve sugerencia que describe el valor esperado de un campo de entrada (un valor de muestra o una breve descripción del formato esperado). <br>
El atributo <b><i>autofocus</i></b> especifica que un campo de entrada debería obtener el foco automáticamente cuando se cargue la página. <br>
El atributo <b><i>enctype</i></b> especifica cómo se deben codificar los datos del formulario cuando se envían (solo para formularios con method="post"). <br>
El atributo <b><i>target</i></b> especifica un nombre o una palabra clave que indica dónde mostrar la respuesta que se recibe después de enviar el formulario.
<hr>
<h3>Canvas</h3>
El elemento <b><i>< canvas ></i></b> es solo un contenedor para gráficos. <br>
Se debe usar JavaScript para dibujar los gráficos. <br>
Canvas tiene varios métodos para dibujar trazados, cuadros, círculos, texto y agregar imágenes. <br>
Canvas dibuja gráficos en 2D, sobre la marcha (con JavaScript). <br>
El lienzo se representa píxel a píxel. En el lienzo, una vez que se dibuja el gráfico, el navegador lo olvida. <br>
Sin su posición, toda la escena debe volver a dibujarse, incluyendo cualquier objetos que podrían haber sido cubiertos por el gráfico.
<hr>
<h3>SVG</h3>
SVG define gráficos basados en vectores en formato XML.
<li>SVG son las siglas de Scalable Vector Graphics (Gráficos Vectoriales Escalables)</li>
<li>SVG se utiliza para definir gráficos para la Web</li>
<li>SVG es una recomendación del W3C</li>
SVG es un lenguaje para describir gráficos 2D en XML. <br>
SVG está basado en XML, lo que significa que todos los elementos están disponibles dentro del SVG DOM. <br>
Se puede adjuntar controladores de eventos de JavaScript para un elemento. <br>
En SVG, cada forma dibujada se recuerda como un objeto. <br>
Con los atributos de un SVG objeto, el navegador puede volver a renderizar automáticamente la forma. <br>
<hr>
<h3>Multimedia</h3>
Multimedia en la web es sonido, música, vídeos, películas y animaciones. <br>
Solo el video MP4, WebM y Ogg son compatibles con el estándar <b>HTML</b>. <br>
El atributo <b><i>controls</i></b> agrega controles de vídeo, como reproducción, pausa y volumen. <br>
<li>Es una buena idea incluir siempre atributos y si no se establece la altura y la anchura, la página puede parpadear mientras se carga el video.</li>
<li>La etiqueta <b><i>< source ></i></b> permite especificar un vídeo alternativo, archivos entre los que el navegador puede elegir. El navegador utilizará el primer formato reconocido.</li>
<li>El texto entre las etiquetas <b><i>< video ></i></b> y <b><i>< / video ></i></b> solo se mostrará en navegadores que no soporten el archivo.</li>
Para iniciar un vídeo automáticamente, se utiliza el atributo <b><i>autoplay</i></b>. <br>
Se añade después <b><i>muted</i></b> para que el vídeo empiece a reproducirse automáticamente (pero silenciado). <br>
El DOM <b>HTML</b> define métodos, propiedades y eventos para la etiqueta <b><i>< video ></i></b>. <br>
Esto permite cargar, reproducir y pausar videos, así como configurar la duración y el volumen. <br>
También hay eventos DOM que pueden notificar cuando un video comienza a reproducirse, se detiene, etc. <br>
La etiqueta <b><i>< audio ></i></b> se utiliza para reproducir un archivo de audio en una página web. <br>
Los <b>plug-ins</b> son programas informáticos que amplían la funcionalidad estándar del navegador. <br>
Los <b>plug-ins</b> fueron diseñados para ser utilizados para muchos propósitos diferentes:
<li>Para ejecutar applets de Java</li>
<li>Para ejecutar controles ActiveX de Microsoft</li>
<li>Para visualizar películas Flash</li>
<li>Para mostrar mapas</li>
<li>Para buscar virus</li>
<li>Para verificar un ID bancario</li>
La etiqueta <b><i>< object ></i></b> es compatible con todos los navegadores. <br>
La etiqueta define un objeto incrustado dentro de un documento <b>HTML</b>. <br>
Fue diseñado para incrustar <b>plug-ins</b> (como applets de Java, lectores de PDF y Flash Player) en páginas web, pero también se puede usar para incluir <b>HTML</b> en <b>HTML</b>. <br>
La etiqueta <b><i>< embed ></i></b> es compatible con todos los principales navegadores. <br>
La etiqueta <b><i>< embed ></i></b> también define un objeto incrustado dentro de un documento <b>HTML</b>. <br>
Los navegadores web han admitido la etiqueta <b><i>< embed ></i></b> para un tiempo. Sin embargo, no ha sido parte del <b>HTML</b> anterior a <b>HTML:5</b>. <br>
<hr>
<h3>API's</h3>
La API de geolocalización <b>HTML</b> se utiliza para localizar la posición de un usuario. <br>
Dado que esto puede comprometer la privacidad, el puesto no está disponible a menos que el usuario lo apruebe. <br>
El método <b><i>getCurrentPosition()</i></b> se utiliza para devolver la posición del usuario. <br>
<li>Compruebe si la geolocalización es compatible</li>
<li>Si se admite, se puede ejecutar el método <b><i>getCurrentPosition()</i></b>. Si no es así, se debe mostrat un mensaje al usuario</li>
<li>Si el método <b><i>getCurrentPosition()</i></b> tiene éxito, se devuelve un objeto de coordenadas a la función especificada en el parámetro <b><i>showPosition</i></b>.</li>
<li>La función <b><i>showPosition()</i></b> genera la latitud y la longitud</li>
El método devuelve un objeto en caso de éxito. <br>
La latitud, Las propiedades de longitud y precisión siempre se devuelven. <br>
Se devuelven las demás propiedades Si está disponible <b><i>getCurrentPosition()</i></b>. <br>
<dl>
    <dt><b><i>coords.latitude</i></b>
        <dd>
            La latitud como número decimal (siempre devuelto).
        </dd>
    </dt>
    <dt><b><i>coords.longitude </i></b>
        <dd>
            La longitud como un número decimal (siempre devuelto).
        </dd>
    </dt>
    <dt><b><i>coords.accuracy</i></b>
        <dd>
            La precisión de la posición (siempre devuelta).
        </dd>
    </dt>
    <dt><b><i>coords.altitude</i></b>
        <dd>
            La altitud en metros sobre el nivel medio del mar (devuelta si está disponible).
        </dd>
    </dt>
    <dt><b><i>coords.altitudeAccuracy</i></b>
        <dd>
            La precisión de la altitud de la posición (devuelta si está disponible).
        </dd>
    </dt>
    <dt><b><i>coords.heading</i></b>
        <dd>
            El rumbo en grados en el sentido de las agujas del reloj desde el Norte (devuelto si está disponible).
        </dd>
    </dt>
    <dt><b><i>coords.speed</i></b>
        <dd>
            La velocidad en metros por segundo (devuelta si está disponible).
        </dd>
    </dt>
    <dt><b><i>timestamp</i></b>
        <dd>
            La fecha/hora de la respuesta (devuelta si está disponible).
        </dd>
    </dt>
    <dt><b><i>watchPosition()</i></b>
        <dd>
            Devuelve la posición actual del usuario y continúa devuelve la posición actualizada a medida que el usuario se mueve (como el GPS de un coche).
        </dd>
    </dt>
    <dt><b><i>clearWatch()</i></b>
        <dd>
            Detiene el método <b><i>watchPosition()</i></b>.
        </dd>
    </dt>
</dl>
En <b>HTML</b>, cualquier elemento se puede arrastrar y soltar. <br>
En primer lugar: Para hacer que un elemento se pueda arrastrar, hay que establecer el atributo <b><i>draggable</i></b> en <b>true</b>. <br>
A continuación, se especifica lo que debe suceder cuando se arrastra el elemento. <br>
En el ejemplo, el atributo llama a una función, <b><i>Arrastrar(event)</i></b>, que especifica los datos que se van a arrastrar <b><i>ondragstart</i></b>. <br>
El método establece el tipo de datos y el valor de la propiedad Datos arrastrados <b><i>dataTransfer.setData()</i></b>. <br>
En este caso, el tipo de datos es <b>text</b> y el valor es el id del elemento arrastrable <b><i>ObjetoArrastrar</i></b>. <br>
El evento <b><i>ondragover</i></b> especifica dónde se pueden colocar los datos arrastrados. <br>
De forma predeterminada, los datos/elementos no se pueden colocar en otros elementos. Para permitir una caída, se debe evitar el manejo predeterminado del elemento. <br>
Esto se hace llamando al método <b><i>ondragover</i></b> para el evento <b><i>event.preventDefault()</i></b>. <br>
Cuando se sueltan los datos arrastrados, se produce un evento de colocación. <br>
En el ejemplo, el atributo <b><i>ondrop</i></b> llama a una función, <b><i>Arrastre(event)</i></b>
<b>Código explicado</b>:
<ol>
    <li>Llame a preventDefault() para evitar el manejo predeterminado de los datos por parte del navegador (el valor predeterminado es abrir como enlace al soltar)</li>
    <li>Obtenga los datos arrastrados con el método dataTransfer.getData(). Este método devolverá cualquier dato que se haya establecido en el mismo tipo en el método setData()</li>
    <li>Los datos arrastrados son el id del elemento arrastrado ("ObjetoArrastrar")</li>
    <li>Anexar el elemento arrastrado en el elemento de colocación</li>
</ol>
Almacenamiento web <b>HTML</b> puede llegar a ser mejor que las coockies. <br>
Con el almacenamiento web, las aplicaciones web pueden almacenar datos localmente en el navegador del usuario. <br>
Antes de <b>HTML:5</b>, los datos de la aplicación tenían que almacenarse en cookies, incluidas en cada solicitud del servidor. <br>
El almacenamiento web es más seguro y grandes cantidades de datos se puede almacenar localmente, sin afectar el rendimiento del sitio web. <br>
A diferencia de las cookies, el límite de almacenamiento es mucho mayor (al menos 5 MB) y la información nunca es transferida al servidor. <br>
El almacenamiento web es por origen (por dominio y protocolo). <br>
Todas las páginas, desde un solo origin, puede almacenar y acceder a los mismos datos. <br>
El almacenamiento web <b>HTML</b> proporciona dos objetos para almacenar datos en el cliente:
<dl>
    <dt><b><i>window.localStorage</i></b>
        <dd>
            Almacena datos sin fecha de caducidad.
        </dd>
    </dt>
    <dt><b><i>localStorage</i></b>
        <dd>
            El objeto almacena los datos sin fecha de caducidad. Los datos no se eliminaran cuando se cierre el navegador y estará disponible al día, la semana o el año siguiente.
        </dd>
    </dt>
    <dt><b><i>window.sessionStorage</i></b>
        <dd>
        Almacena datos para una sesión (los datos se pierden cuando se cierra la pestaña del navegador). <br>
        El objeto es igual al objeto <b><i>localStorage</i></b>, excepto que almacena los datos de una sola sesión. Los datos se eliminan cuando el usuario cierra el archivo pestaña específica del navegador.
        </dd>
    </dt>
</dl>
<li>
<b>Ejemplo explicado</b>:
<ol>
    <li>Se crea un par nombre/valor <b>localStorage</b> con <b><i>name="lastname" y value="Smith"</i></b>.</li>
    <li>Se recupera el valor de <b>"lastname"</b> y se inserta en el elemento con id <b><i>result</i></b>.</li>
</ol>
Un web worker es un JavaScript que se ejecuta en segundo plano, sin afectar al rendimiento de la página.<br>
Al ejecutar secuencias de comandos en una página <b>HTML</b>, la página deja de responder hasta que finaliza la secuencia de comandos. <br>
Un web worker es un JavaScript que se ejecuta en segundo plano, de forma independiente de otros scripts, sin afectar el rendimiento de la página. <br>
Se puede seguir haciendo lo que quieras: hacer clic, seleccionar cosas, etc. <br>
Mientras el trabajador web se ejecuta en segundo plano. <br>
Normalmente los web workers no se utilizan para scripts tan simples, sino para tareas más intensivas en CPU. <br>
Un evento enviado por el servidor es cuando una página web recibe actualizaciones automáticamente de un servidor. <br>
Esto también era posible antes, pero la página web tendría que preguntar si había alguna actualización disponible. <br>
Con los eventos enviados por el servidor, las actualizaciones se producen automáticamente.