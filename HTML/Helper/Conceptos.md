# HTML

¿Qué es HTML?
    - HTML son las siglas de Hyper Text Markup Language (Lenguaje de Marcado de Hipertexto)
    - HTML es el lenguaje de marcado estándar para crear páginas web
    - HTML describe la estructura de una página web
    - HTML consta de una serie de elementos
    - Los elementos HTML le dicen al navegador cómo mostrar el contenido
    - Los elementos HTML etiquetan fragmentos de contenido como "esto es un encabezado", "esto es un párrafo", "esto es un enlace", etc.
--------------------------------------------------------------------------------------INFORMACIÓN-------------------------------------------------------------------------------------
Los elementos HTML se pueden anidar (esto significa que los elementos pueden contener otros elementos).
Los navegadores añaden automáticamente un espacio en blanco (un margen) antes y después de un encabezado.
Los elementos HTML sin contenido se denominan elementos vacíos.
Las etiquetas HTML no distinguen entre mayúsculas y minúsculas: significa lo mismo que .<P><p>
Las comillas dobles alrededor de los valores de atributo son las más comunes en HTML, pero simples También se pueden utilizar comillas.
En algunas situaciones, cuando el propio valor del atributo contiene comillas dobles, es necesario utilizar comillas simples.
Los motores de búsqueda utilizan los encabezados para indexar la estructura y el contenido de sus páginas web.
Los navegadores suelen sangrar elementos.<blockquote>
Los navegadores normalmente insertan comillas alrededor de la cita.
Marcar abreviaturas puede dar información útil a los navegadores, traducción sistemas y motores de búsqueda.
Utilice el atributo de título para mostrar la descripción de la etiqueta abreviatura/acrónimo al pasar el ratón por encima del elemento.
La información de contacto puede ser una dirección de correo electrónico, URL, dirección física, teléfono número, identificador de redes sociales, etc.
El texto del elemento generalmente se muestra en cursiva y los navegadores Añade siempre un salto de línea antes y después del elemento.<address><address>
Por lo general, el texto del elemento se representa en cursiva.<cite>
Los comentarios HTML no se muestran en el navegador, pero pueden ayuda a documentar el código fuente HTML.
HTML admite 140 nombres de color estándar.
El valor del atributo title se mostrará cuando pasa el ratón por encima del elemento:
Los enlaces HTML se pueden utilizar para crear marcadores, de modo que los lectores puedan Saltar a partes específicas de una página web.
Los marcadores pueden ser útiles si una página web es muy larga.
Para crear un marcador, primero cree el marcador y luego agregue un enlace a ella.
Cuando se hace clic en el enlace, la página se desplazará hacia abajo o hacia arriba hasta la ubicación con el botón Marcador.
Las imágenes pueden mejorar el diseño y la apariencia de una página web.
HTML permite GIFs animados:
Utilice la propiedad CSS para permitir que la imagen flote a la derecha o a la izquierda de un texto:float
Estos son los tipos de archivos de imagen más comunes, que son compatibles con todos los navegadores (Chrome, Edge, Firefox, Safari, Opera):
    - APNG	Gráficos de red portátiles animados	.apng
    - GIF	Formato de intercambio de gráficos	.gif
    - ICO	Icono de Microsoft	.ico, .cur
    - JPEG	Imagen del Grupo Mixto de Expertos Fotográficos	.jpg, .jpeg, .jfif, .pjpeg, .pjp
    - PNG	Gráficos de red portátiles	.png
    - SVG	Gráficos vectoriales escalables	.svg
Un favicon es una pequeña imagen que se muestra junto al título de la página en la pestaña del navegador.
Puedes usar cualquier imagen que te guste como favicon. También puedes crear el tuyo propio favicon en sitios como https://www.favicon.cc.
Cada página web debe tener un título de página para describir el significado de la página.

<tagname> El contenido va aquí... </tagname>
    - Todos los elementos HTML pueden tener atributos
    - Los atributos proporcionan información adicional sobre los elementos
    - Los atributos siempre se especifican en la etiqueta de inicio
    - Los atributos suelen venir en pares nombre/valor como: name="value"

Hay dos formas de especificar la dirección URL en el atributo:src
    - URL absoluta: enlaces a una imagen externa que está alojada en otro sitio web. Ejemplo: src="https://www.w3schools.com/images/img.jpg".
    - URL relativa: enlaces a una imagen alojada en el sitio web. Aquí, la URL no incluye el nombre de dominio. Si la URL comienza Sin una barra diagonal, será relativa a la página actual. Ejemplo: src="img.jpg". Si la URL comienza con una barra diagonal, será relativa al dominio. Ejemplo: src="/images/img.jpg".
    - La etiqueta también debe contener los atributos que especifican el ancho y altura de la imagen (en píxeles):<img src="img.jpg" width="100px" height="100px">
    - El atributo alt para la etiqueta especifica un texto alternativo para una imagen, si la imagen por alguna razón no se puede mostrar. Esto puede deberse a: una conexión lenta, o un error en el atributo, o si el usuario utiliza una pantalla lector.<img src="img.jpg" alt="Una foto">

Un enlace no tiene que ser texto. Un enlace puede ser una imagen o cualquier otro elemento HTML!
El atributo más importante del elemento es el atributo href, que indica el destino del vínculo.<a>
El texto del enlace es la parte que será visible para el lector.
De forma predeterminada, la página vinculada se mostrará en la ventana actual del navegador. Para cambiar esto, debe especificar otro destino para el vínculo.
Un enlace local (un enlace a una página dentro del mismo sitio web) se especifica con una URL relativa (sin la parte "https://www"): href="/css/default.asp"
Para usar una imagen como enlace, simplemente coloque la etiqueta dentro de la etiqueta:<img><a>
Utilícelo dentro del atributo para crear un enlace que abra el programa de correo electrónico del usuario (para Deja que envíen un nuevo correo electrónico): href="mailto:"
Un enlace también se puede diseñar como un botón, mediante CSS:
Para usar un botón HTML como enlace, debe agregar algún código JavaScript.
De forma predeterminada, los enlaces aparecerán de la siguiente manera en todos los navegadores:
    - Un enlace no visitado está subrayado y en azul
    - Un enlace visitado está subrayado y en morado
    - Un enlace activo está subrayado y en rojo
También puede agregar un enlace a un marcador en otra página: <a href="html_demo.html#Edit">Ir al párrafo editable</a>

Siempre debe incluir el atributo dentro de la etiqueta, para declarar el idioma de la página Web. Esto está destinado a ayudar a los motores de búsqueda y navegadores.<html lang="en-US">
Los códigos de país también se pueden agregar al código de idioma en el atributo. Entonces, los dos primeros caracteres definen el idioma de la página HTML, y los dos últimos caracteres definen el país.

Cuando se carga una página web, es el navegador, en ese momento momento, que obtiene la imagen de un servidor web y la inserta en la página. Por lo tanto, asegúrese de que la imagen permanezca en el mismo lugar en relación a la página web, de lo contrario, sus visitantes obtendrán un icono de enlace roto. Lo roto El icono de enlace y el texto se muestran si el navegador no puede encontrar la imagen.alt
Las imágenes no se insertan técnicamente en una página web; Las imágenes están enlazadas a la web. La etiqueta crea una retención espacio para la imagen a la que se hace referencia.<img>
La etiqueta está vacía, solo contiene atributos y no tiene una etiqueta de cierre.</img>
La etiqueta tiene dos requisitos Atributos:<img>
    - src = Especifica la ruta a la imagen
    - alt = Especifica un texto alternativo para la imagen
Puede utilizar el atributo para especificar la anchura y altura de una imagen. style=""
Alternativamente, puede usar los atributo:width and height
Los atributos width and height siempre definen la anchura y la altura de la imagen en píxeles.
Si tiene sus imágenes en una subcarpeta, debe incluir la carpeta name en el atributo:src<img src="/HTML/Img/TarjetaHombresDeNegro.png" alt="Foto local" height="250px" width="250px"/>
Algunos sitios web apuntan a una imagen en otro servidor.
Para apuntar a una imagen en otro servidor, debe especificar un valor absoluto (completo) URL en el atributo: src
Para agregar una imagen de fondo en un elemento HTML, use el atributo HTML y la propiedad CSS:style="background-image:";
Si la imagen de fondo es más pequeña que el elemento, la imagen se repetirá, horizontal y verticalmente, hasta llegar al final del elemento:
Para evitar que la imagen de fondo se repita, establezca la propiedad Para.background-repeat: no-repeat
Si desea que la imagen de fondo cubra todo el elemento, debe puede establecer la propiedad en background-size:cover.
Además, para asegurarse de que todo el elemento esté siempre cubierto, establezca la propiedad en background-attachment:fixed:
De esta manera, la imagen de fondo cubrirá todo el elemento, sin estirar (la imagen mantener sus proporciones originales):
Si desea que la imagen de fondo se estire para que se ajuste a todo el elemento, puede establecer la propiedad en: background-size: 100% 100%
El elemento HTML le da a web desarrolladores más flexibilidad en Especificación de recursos de imagen.<picture>
El elemento contiene uno o varios más elementos, cada uno de los cuales se refiere a a diferentes imágenes a través del atributo. De esta manera, el navegador puede elegir la imagen que mejor se adapte a sus necesidades. se ajusta a la vista y/o dispositivo actual.<picture><source srcset="">
Cada elemento tiene un atributo que define cuándo la imagen es el más adecuado.<source media=()>
El elemento tiene dos propósitos principales:<picture>
    - Ancho de banda
        Si tiene una pantalla o dispositivo pequeño, no es necesario cargar un dispositivo grande archivo de imagen. El navegador usará el primer elemento con valores de atributo coincidentes e ignorará cualquiera de los siguientes Elementos.<source>
    - Soporte de formato
        Es posible que algunos navegadores o dispositivos no sean compatibles con todos los formatos de imagen. Al usar el elemento, puede agregar imágenes de todos los formatos, y el navegador usará el primer formato que reconozca, e ignorará cualquier de los siguientes elementos. <picture>
La etiqueta HTML <map> define un mapa de imagen. Un mapa de imagen es una imagen con Áreas en las que se puede hacer clic. Las áreas se definen con una o más etiquetas. <area>
La imagen se inserta mediante la etiqueta <img>. La única diferencia con otras imágenes es que debes Agregue un atributo: usemap
A continuación, añade un elemento.<map>
El elemento se utiliza para crear un mapa de imagen y se vincula a la imagen mediante el comando Atributo requerido:<map name="">
A continuación, añade las áreas en las que se puede hacer clic.
Un área en la que se puede hacer clic se define mediante un elemento.<area>
Forma
Debe definir la forma del área en la que se puede hacer clic y puede elegir una de estas valores:
    - rect - Define una región rectangular
    - circle - Define una región circular
    - poly - Define una región poligonal
    - default - Define toda la región
También debe definir algunas coordenadas para poder colocar el área en la que se puede hacer clic la imagen.
    - Las coordenadas vienen en pares, uno para el eje x y otro para el eje y.shape="rect"
        Por lo tanto, las coordenadas se encuentran a 34 píxeles desde el margen izquierdo y 44 píxeles desde la parte superior:34,44
        Las coordenadas se encuentran 270 píxeles desde el margen izquierdo y 350 píxeles desde la parte superior:270,350
        Ahora tenemos suficientes datos para crear un área rectangular en la que se puede hacer clic: <area shape="rect" coords="34, 44, 270, 350" href="#">
    - Para agregar un área de círculo, primero ubique las coordenadas del centro del círculo: 337,300
        A continuación, especifique el radio del círculo: 44 Píxeles
        Ahora tiene suficientes datos para crear un área circular en la que se pueda hacer clic: <area shape="circle" coords="337, 300, 44" href="#">
    - Contiene varias coordenadas puntos, que crea una forma formada con líneas rectas (un polígono).shape="poly" Esto se puede usar para crear cualquier forma.
        Tenemos que hallar las coordenadas x e y para todas las aristas de la cruasán:
        Las coordenadas vienen en pares, uno para el eje x y otro para el eje y: <area shape="poly" coords="140,121,181,116,204,160,204,222,191,270,140,329,85,355,58,352,37,322,40,259,103,161,128,147" href="croissant.htm">
    - Un área en la que se puede hacer clic también puede desencadenar una función de JavaScript.

El elemento agrega un título A tu página:<title>
El título debe describir el contenido y el significado de la página.
El título de la página es muy importante para la optimización de motores de búsqueda (SEO). El texto es utilizado por los algoritmos de los motores de búsqueda para decidir el orden Al enumerar páginas en los resultados de búsqueda.
El elemento:<title>
    - Define un título en la barra de herramientas del navegador
    - Proporciona un título para la página cuando se agrega a Favoritos
    - Muestra un título para la página en los resultados del motor de búsqueda


Las tablas HTML permiten a los desarrolladores web organizar los datos en filas y Columnas.
Una tabla en HTML consta de celdas de tabla dentro de filas y columnas.
Una celda de tabla puede contener todo tipo de elementos HTML: texto, imágenes, listas, enlaces, otras tablas, etc.
Puede tener tantas filas como desee en una tabla; Solo asegúrese de que el número de celdas sea el mismo en cada fila.
A veces desea que sus celdas sean celdas de encabezado de tabla. En esos casos, use la etiqueta en lugar de la etiqueta:<th>
De forma predeterminada, el texto de los elementos están en negrita y centrados, pero puedes cambiar eso con CSS. <th>
Las tablas HTML pueden tener bordes de diferentes estilos y formas
Para agregar un borde, use la propiedad border CSS en table y los elementos:th, td
Para evitar tener bordes dobles como en el ejemplo anterior, establezca la propiedad CSS en .border-collapsecollapse
Esto hará que las fronteras se colapsen en una sola frontera:
Las tablas HTML pueden tener diferentes tamaños para cada columna, fila o toda la mesa.
Para establecer el ancho de una tabla, agregue el atributo al elemento:<table style="">
El uso de un porcentaje como unidad de tamaño para un ancho significa ¿Qué tan ancho será este elemento en comparación con su elemento principal, que en este caso es el elemento.<body>
Para establecer la altura de una fila específica, agregue el atributo en un elemento de fila de tabla: <tr style="height:;">
Las tablas HTML pueden tener encabezados para cada columna o fila, o para muchas columnas o filas.
Puede tener un encabezado que abarque dos o más columnas.
Para hacer esto, use el atributo en el elemento:<th colspan="">
Puede agregar un título que sirva como encabezado para toda la tabla.
Para agregar un título a una tabla, use la etiqueta:<caption>
Las tablas HTML pueden ajustar el relleno dentro de las celdas, y también el espacio entre las celdas.
El relleno de celda es el espacio entre los bordes de la celda y el contenido de la celda.
De forma predeterminada, el relleno se establece en 0.
Para agregar relleno en las celdas de la tabla, use la propiedad CSS:padding
El espaciado de celdas es el espacio entre cada celda.
De forma predeterminada, el espacio se establece en 2 píxeles.
Para cambiar el espacio entre las celdas de la tabla, use la propiedad CSS en el elemento:<table style="border-spacing:;">
Las tablas HTML pueden tener celdas que se extienden a lo largo de varias filas y/o columnas.
Para hacer que una celda se extienda sobre varias columnas, use el atributo:colspan
Para hacer que una celda se extienda por varias filas, utilice el atributo:rowspan
Si agregas un color de fondo en cada dos filas de la tabla, obtendrás un bonito efecto de rayas de cebra.
Para aplicar estilo a todos los demás elementos de fila de la tabla, use el selector de la siguiente manera::nth-child(even)
El elemento se utiliza para aplicar estilo a columnas de una tabla.<colgroup>
El elemento debe usarse como contenedor para la columna características técnicas.<colgroup>
Cada grupo se especifica con un elemento.<col>
El atributo especifica el número de columnas que obtienen el estilo.span
El atributo especifica el estilo que se va a dar a las columnas.style

Las listas HTML permiten a los desarrolladores web agrupar un conjunto de elementos relacionados en listas.
Una lista desordenada comienza con la etiqueta.<ul> Cada elemento de la lista comienza con la etiqueta.<li>
Los elementos de la lista se marcarán con viñetas (pequeños círculos negros) de forma predeterminada:
Una lista ordenada comienza con la etiqueta.<ol> Cada elemento de la lista comienza con la etiqueta.<li>
Los elementos de la lista se marcarán con números de forma predeterminada:
HTML también admite listas de descripciones.
Una lista de descripción es una lista de términos, con una descripción de cada término.
La etiqueta define la lista de descripción<dl>, la etiqueta define el término (nombre)<dt> y la etiqueta describe cada término:<dd>
Las listas se pueden anidar (lista dentro de la lista):
Las listas HTML se pueden diseñar de muchas maneras diferentes con CSS.
Una forma popular es aplicar estilo a una lista horizontalmente, para crear un menú de navegación:
El atributo de la etiqueta, define el tipo de etiqueta Marcador de elemento de lista:<ol type=>
    Tipo/Descripción
        - type="1"	Número
        - type="A"	Mayúsculas
        - type="a"	Minúsculas
        - type="I"	Mayúsculas en romano
        - type="i"	Minúsculas en romano
De forma predeterminada, una lista ordenada comenzará a contar desde 1. Si desea comenzar a contar a partir de un número específico, puede usar el atributo:start
Las listas se pueden anidar (lista dentro de la lista):

Cada elemento HTML tiene un valor de visualización predeterminado, según el tipo de elemento es.
Los dos valores de visualización más comunes son bloque e inline.
Un elemento de nivel de bloque siempre comienza en una nueva línea, y los navegadores Añade automáticamente un espacio (un margen) antes y después del elemento.
Un elemento de nivel de bloque siempre ocupa todo el ancho disponible (se extiende hacia la izquierda y hacia la derecha tanto como puede).
Estos son los elementos a nivel de bloque en HTML:
    - <address>
    - <article>
    - <aside>
    - <blockquote>
    - <canvas>
    - <dd>
    - <div>
    - <dl>
    - <dt>
    - <fieldset>
    - <figcaption>
    - <figure>
    - <footer>
    - <form
    - ><h1>-<h6>
    - <header>
    - <hr>
    - <li>
    - <main>
    - <nav>
    - <noscript>
    - <ol>
    - <p>
    - <pre>
    - <section>
    - <table>
    - <tfoot>
    - <ul>
    - <video>
Un elemento en línea no comienza en una nueva línea.
Un elemento en línea solo ocupa el ancho necesario.
    - <a>
    - <abbr>
    - <acronym>
    - <b>
    - <bdo>
    - <big>
    - <br>
    - <button>
    - <cite>
    - <code>
    - <dfn>
    - <em>
    - <i>
    - <img>
    - <input>
    - <kbd>
    - <label>
    - <map>
    - <object>
    - <output>
    - <q>
    - <samp>
    - <script>
    - <select>
    - <small>
    - <span>
    - <strong>
    - <sub>
    - <sup>
    - <textarea>
    - <time>
    - <tt>
    - <var>
Un elemento en línea no puede contener un nivel de bloque

El elemento es, por defecto, un block, lo que significa que toma todo el ancho disponible y viene con una línea descansos antes y después.<div>
El elemento se utiliza a menudo para agrupar secciones de una página web.<div>
Si tiene un elemento que es no es 100% ancho, y desea alinearlo al centro, establezca la propiedad CSS en .<div margin=auto;>
Puede tener muchos contenedores en la misma página.<div>
Al crear páginas web, a menudo desea tener dos o más elementos uno al lado del otro. Existen diferentes métodos para alinear elementos uno al lado del otro, todos incluyen algo de estilo CSS. Veremos los métodos más comunes:
    La propiedad CSS no estaba pensada originalmente para alinear elementos uno al lado del otro, pero se ha utilizado para este propósito durante muchos años.float<div>
    La propiedad CSS se utiliza para posicionar y dar formato al contenido y Permita que los elementos floten uno al lado del otro en lugar de uno encima del otro.float
Si cambia la propiedad del elemento de displayblock a inline-block, los elementos ya no agregarán un salto de línea antes y después, y se mostrarán uno al lado del otro en lugar de uno encima del otro.
El módulo de diseño CSS Flexbox se introdujo para facilitar el diseño de diseño responsivo flexible estructura sin utilizar flotación ni posicionamiento.
Para que el método CSS flex funcione, rodea los elementos con otro elemento y da Es el estado de un contenedor flexible.
El módulo de diseño de cuadrícula CSS ofrece un sistema de diseño basado en cuadrículas, con filas y columnas, facilitando el diseño de páginas web sin tener que utilizar flotadores y posicionamientos.
Suena casi igual que flex, pero tiene la capacidad de definir más de una fila y posicionar cada fila individualmente.
El método CSS grid requiere que rodee los elementos con otro elemento y proporcione el estado como contenedor de cuadrícula y debe especificar el ancho de cada columna

El atributo HTML es se utiliza para especificar una clase para un elemento HTML.class
Varios elementos HTML pueden compartir la misma clase.
El atributo se usa a menudo para apuntar a un nombre de clase en una hoja de estilos. También puede ser utilizado por un JavaScript para acceder y Manipule los elementos con el nombre de clase específico.class
El atributo se puede utilizar en cualquier elemento HTML.class
¡El nombre de la clase distingue entre mayúsculas y minúsculas!
Para crear una clase; Escriba un carácter de punto (.), seguido de un nombre de la clase. A continuación, defina las propiedades CSS entre llaves {}:
El nombre de la clase también puede ser utilizado por JavaScript para realizar ciertas tareas para elementos específicos.
JavaScript puede acceder a elementos con un nombre de clase específico con el método:getElementsByClassName()

Se utiliza el atributo HTML para especificar un identificador único para un elemento HTML.id
No puede tener más de un elemento con el mismo identificador en un archivo Documento HTML.
El atributo especifica un identificador único para un elemento HTML. El valor del atributo debe ser único dentro del documento HTML.idid
El atributo se utiliza para apuntar a una declaración de estilo específica en una hoja de estilo. También es utilizado por JavaScript para acceder y Manipule el elemento con el identificador específico.id
La sintaxis de id es: escriba un carácter de almohadilla (#), seguido de un nombre de id. A continuación, defina las propiedades CSS entre llaves {}.
¡El nombre de id distingue entre mayúsculas y minúsculas!
El nombre de identificación debe contener al menos un carácter, no puede comenzar con un número y no debe contener espacios en blanco (espacios, tabulaciones, etc.).
El atributo también puede ser utilizado por JavaScript para realizar algunas tareas para ese elemento específico.id
JavaScript puede acceder a un elemento con un id específico con el método:getElementById()

Un iframe HTML se utiliza para mostrar una página web dentro de una página web.
Un marco en línea se utiliza para incrustar otro documento dentro del documento HTML actual.
Es una buena práctica incluir siempre un atributo para el archivo . Esto es utilizado por los lectores de pantalla para leer en voz alta cuál es el contenido del iframe. title<iframe>
Utilice los atributos y para especificar el atributo Tamaño del iframe.heightwidth
De forma predeterminada, un iframe tiene un borde a su alrededor.
Para eliminar el borde, agregue el atributo y use la propiedad CSS:styleborder
Un iframe se puede utilizar como fotograma de destino para un vínculo.
El atributo del enlace debe hacer referencia al atributo del iframe:targetname
La etiqueta HTML especifica un marco en línea<iframe>
El atributo define la dirección URL de la página que se va a incrustarsrc
Incluir siempre un atributo (para lectores de pantalla) title

JavaScript hace que las páginas HTML sean más dinámicas e interactivas.
La etiqueta HTML se utiliza para definir un script del lado del cliente (JavaScript).<script>
El elemento contiene instrucciones de script o apunta a un archivo de script externo a través del atributo.<script>src
Los usos comunes de JavaScript son la manipulación de imágenes, la validación de formularios y Cambios dinámicos de contenido.
Para seleccionar un elemento HTML, JavaScript utiliza el método con mayor frecuencia.document.getElementById()
JavaScript puede cambiar los estilos y los atributos
La etiqueta HTML define un contenido alternativo para mostrar a los usuarios que tienen scripts deshabilitados en su navegador o tienen un navegador que no es compatible Scripts:<noscript>

Una ruta de acceso de archivo describe la ubicación de un archivo en la estructura de carpetas de un sitio web.
    - <img src="imagen.jpg">	El archivo "picture.jpg" se encuentra en la misma carpeta que la página actual
    - <img src="images/picture.jpg">	El archivo "picture.jpg" se encuentra en la carpeta de imágenes de la carpeta actual
    - <img src="/images/picture.jpg">	El archivo "picture.jpg" se encuentra en la carpeta images en la raíz de la web actual
    - <img src=".. /imagen.jpg">	El archivo "picture.jpg" se encuentra en la carpeta un nivel más arriba de la carpeta actual
Las rutas de archivo se utilizan cuando se vinculan a archivos externos, como:
    - Páginas web
    - Imágenes
    - Hojas de estilo
    - JavaScripts
Una ruta de archivo absoluta es la URL completa de un archivo:
<img src="https://www.w3schools.com/images/picture.jpg" alt="Mountain">
Se recomienda utilizar rutas de archivo relativas (si es posible).
Al utilizar rutas de archivo relativas, las páginas web no se enlazarán a las URL base. Todos los enlaces funcionarán en su propia computadora (localhost), así como en su dominio público actual y sus futuros dominios públicos.

El elemento HTML <head> es un contenedor para los siguientes elementos: <title>, <style>, <meta>, <link>, <script> y <base>.
El elemento es un contenedor de metadatos (data about data) y se coloca entre la etiqueta y la etiqueta.<html><head><body>
Los metadatos HTML son datos sobre el documento HTML. No se muestran los metadatos.
Los metadatos suelen definir el título del documento, el conjunto de caracteres, los estilos, los guiones y otra metainformación.
El elemento define el título del documento. El título debe ser solo texto y se muestra en la barra de título del navegador o en la pestaña de la página.<title>
¡El elemento es obligatorio en los documentos HTML!<title>
El elemento define el elemento relación entre el documento actual y un recurso externo.
La etiqueta se utiliza con mayor frecuencia para enlazar a hojas de estilo externas:<link>
El elemento se utiliza normalmente para especificar el juego de caracteres, la descripción de la página, las palabras clave, el autor del documento, y la configuración de la ventanilla.<meta>
Los metadatos no se mostrarán en la página, pero serán utilizados por los navegadores (cómo mostrar el contenido o volver a cargar la página), por motores de búsqueda (palabras clave) y otros servicios web.
    - Defina el juego de caracteres utilizado:
        <meta charset="UTF-8">
    - Definir palabras clave para los motores de búsqueda:
        <meta name="keywords" content="HTML, CSS, JavaScript">
    - Define una descripción de tu página web:
        <meta name="description" content="Free Web tutorials">
    - Defina el autor de una página:
        <meta name="author" content="John Doe">
    - Actualice el documento cada 30 segundos:
        <meta http-equiv="refresh" content="30">
    - Configurar la ventana gráfica para que su sitio web se vea bien en todos los dispositivos:
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
La ventanilla es el área visible del usuario de una página web. Varía según el dispositivo - Será más pequeño en un teléfono móvil que en la pantalla de un ordenador.
Debes incluir el siguiente elemento en todas tus páginas web:<meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
Esto le da al navegador instrucciones sobre cómo para controlar las dimensiones y la escala de la página.
La parte establece el ancho de la página para seguir el ancho de la pantalla del dispositivo (que variará según el dispositivo).width=device-width
La pieza establece el nivel de zoom inicial cuando el navegador carga la página por primera vez.initial-scale=1.0
El elemento especifica la URL base y/o el destino de todas las URL relativas de una página.<base>
La etiqueta debe tener un href o un atributo de destino presente, o ambos.<base>
¡Solo puede haber un único elemento en un documento!<base>

Los sitios web a menudo muestran contenido en varias columnas (como una revista o un periódico).
El diseño web responsivo consiste en crear páginas web que se vean bien en todos los dispositivos.
Un diseño web responsivo se ajustará automáticamente a diferentes tamaños de pantalla y ventanas gráficas.
El diseño web responsivo consiste en utilizar HTML y CSS para cambiar el tamaño, ocultar, reducir o ampliar automáticamente. Un sitio web, para que se vea bien en todos los dispositivos (computadoras de escritorio, tabletas y teléfonos):
Tenga en cuenta que en el ejemplo anterior, la imagen se puede escalar para que sea más grande que su tamaño original. Una mejor solución, en muchos casos, será usar la propiedad en su lugar.max-width
Si la propiedad se establece en 100%, la imagen se reducirá si es necesario, pero nunca se ampliará para que sea más grande que su tamaño original
El tamaño del texto se puede establecer con una unidad "vw", que significa el "ancho de la ventana gráfica".
De esa manera, el tamaño del texto seguirá el tamaño de la ventana del navegador:
Además de cambiar el tamaño del texto y las imágenes, también es común usar consultas de medios en páginas web responsivas.
Con las consultas de medios, puede definir estilos completamente diferentes para diferentes navegadores Tamaños.
Todos los frameworks CSS populares ofrecen un diseño responsivo.

Se utiliza el elemento HTML para definir la entrada del teclado. El contenido del interior se muestra en el archivo Fuente monoespaciada predeterminada.<kbd>
El elemento HTML se utiliza para Defina la salida de ejemplo de un programa informático. El contenido del interior se muestra en la fuente monoespaciada predeterminada del navegador.<samp>
Se utiliza el elemento HTML para definir un fragmento de código informático. El contenido del interior se muestra en el archivo Fuente monoespaciada predeterminada del navegador.<code>
Tenga en cuenta que el elemento no conserva espacios en blanco ni saltos de línea adicionales.<code>
Para solucionar esto, puede poner el elemento dentro de un elemento:<code><pre>
Se utiliza el elemento HTML para definir una variable en programación o en una expresión matemática. El El contenido del interior suele mostrarse en cursiva.<var>
Un elemento semántico describe claramente su significado tanto para el navegador como para el desarrollador.

Se utiliza un formulario HTML para recopilar la entrada del usuario. La entrada del usuario es la mayoría de las veces se envía a un servidor para su procesamiento.
El elemento es un contenedor para diferentes tipos de elementos de entrada, tales como: campos de texto, casillas de verificación, radio botones, botones de envío, etc.
    - <input type="text">	Muestra un campo de entrada de texto de una sola línea
    - <input type="radio">	Muestra un botón de opción (para seleccionar una de las muchas opciones)
    - <input type="checkbox">	Muestra una casilla de verificación (para seleccionar cero o más de muchas opciones)
    - <input type="submit">	Muestra un botón de envío (para enviar el formulario)
    - <input type="button">	Muestra un botón en el que se puede hacer clic
La etiqueta define una etiqueta para muchos elementos de formulario.<label>
El elemento es útil para usuarios de lectores de pantalla, porque el lector de pantalla leerá en voz alta la etiqueta cuando El usuario se centra en el elemento de entrada.<label>
El elemento también ayuda a los usuarios que tienen dificultad para hacer clic en regiones muy pequeñas (como botones de opción o casillas de verificación) - porque cuando el usuario hace clic en el texto dentro del elemento, se alterna el botón de opción/casilla de verificación.<label><label>
Define un botón de opción.<input type="radio">
Los botones de opción permiten al usuario seleccionar UNA de un número limitado de opciones.
Define una casilla de verificación.<input type="checkbox">
Las casillas de verificación permiten al usuario seleccionar CERO o MÁS opciones de un número limitado de opciones.
Define un botón para enviar los datos del formulario a un controlador de formularios.<input type="submit">
El controlador de formularios suele ser un archivo en el servidor con un script para su procesamiento datos de entrada.
El controlador de formulario se especifica en el atributo del formulario.action
Tenga en cuenta que cada campo de entrada debe tener un atributo para enviarse.name
Si se omite el atributo, el valor del campo de entrada no se enviará en absoluto
Si se omite el atributo, la acción se establece en la página actual.action
El atributo especifica el valor HTTP método que se utilizará al enviar los datos del formulario.method
Los datos del formulario se pueden enviar como variables de URL (con method="get") o como transacción HTTP post (con method="post").
El método HTTP predeterminado al enviar datos de formulario es GET.
Notas sobre GET:
    Anexa los datos del formulario a la dirección URL, en pares nombre/valor
    ¡NUNCA use GET para enviar datos confidenciales! (¡los datos del formulario enviado son visibles en la URL!)
    La longitud de una URL es limitada (2048 caracteres)
    Útil para envíos de formularios en los que un usuario desea marcar el resultado
    GET es bueno para datos no seguros, como cadenas de consulta en Google
Notas sobre POST:
    Anexa los datos del formulario dentro del cuerpo de la solicitud HTTP (el archivo los datos del formulario no se muestran en la URL)
    POST no tiene limitaciones de tamaño y se puede utilizar para enviar grandes cantidades de datos.
    Los envíos de formularios con POST no se pueden marcar como favoritos
El atributo especifica si Un formulario debe tener la función de autocompletar activada o desactivada.autocomplete
Cuando la función de autocompletar está activada, el explorador completa automáticamente los valores en función de los valores que el usuario ha introducido antes.
El atributo es un atributo booleano.novalidate
Cuando está presente, especifica que los datos del formulario (entrada) no deben validarse cuando se envían.
El elemento HTML <form> puede contener uno o varios de los siguientes elementos de formulario:
    - <input> Uno de los elementos de formulario más utilizados es el elemento. <input>
        El elemento se puede mostrar de varias maneras, dependiendo del atributo.<input>type
    - <label> El elemento define una etiqueta para varios elementos de formulario.<label>
        El atributo de la etiqueta debe ser igual al atributo del elemento para unirlos. <label>forid<input>
    - <select> El elemento define una lista desplegable:<select>
        Utilice el atributo para especificar el número de valores visibles:size
        Utilice el atributo para permitir que el usuario seleccione más de un valor:multiple
    - <textarea> El elemento define un campo de entrada de varias líneas (un área de texto):<textarea>
        El atributo especifica el número visible de líneas en un área de texto.rows
        El atributo especifica la anchura visible de un texto área.cols
    - <button> El elemento define un elemento en el que se puede hacer clic botón:<button>
    - <fieldset> El elemento se utiliza para agrupar datos relacionados en un formulario.<fieldset>
    - <legend> El elemento define un título para el elemento.<legend> <fieldset>
    - <datalist> El elemento especifica una lista de opciones predefinidas para un elemento.<datalist><input>
        Los usuarios verán una lista desplegable de las opciones predefinidas a medida que ingresan datos.
    - <output> El elemento representa el resultado de un cálculo (como uno interpretado por un guión).<output>
    - <option> El elemento define una opción que puede ser seleccionado.<option> De forma predeterminada, se selecciona el primer elemento de la lista desplegable. Para definir una opción preseleccionada, agregue el atributo a la opción: selected
    - <optgroup>
Restricciones:
    checked: Especifica que un campo de entrada debe preseleccionarse cuando se carga la página (para tipo="checkbox" o tipo="radio")
    disable: Especifica que un campo de entrada debe estar deshabilitado.
    max: Especifica el valor máximo para un campo de entrada
    maxlength: Especifica el número máximo de caracteres para un campo de entrada
    min: Especifica el valor mínimo para un campo de entrada patrón Especifica una expresión regular para comparar el valor de entrada
    readonly: Especifica que un campo de entrada es de solo lectura (no se puede cambiar)
    required: Especifica que un campo de entrada es obligatorio (debe completarse)
    size: Especifica el ancho (en caracteres) de un campo de entrada
    step: Especifica los intervalos numéricos legales para un campo de entrada
    value: Especifica el valor predeterminado para un campo de entrada
El atributo value especifica un valor inicial para un campo de entrada:input
El atributo pattern especifica una expresión regular que el atributo El valor del campo de entrada se compara cuando se envía el formulario.input
El atributo de entrada especifica Una breve sugerencia que describe el valor esperado de un campo de entrada (un valor de muestra o una breve descripción del formato esperado).placeholder
El atributo autofocus especifica que Un campo de entrada debería obtener el foco automáticamente cuando se cargue la página.input
El atributo formaction especifica la dirección URL de El archivo que procesará la entrada cuando se envíe el formulario.
El atributo formenctype especifica cómo se deben codificar los datos del formulario cuando se envían (solo para formularios con method="post").
El atributo input define el método HTTP para enviar datos de formulario a la URL de la acción.formmethod
    Este atributo anula el atributo method del elemento.<form>
El atributo input especifica un nombre o una palabra clave que indica dónde para mostrar la respuesta que se recibe después de enviar el formulario.formtarget
    Este atributo anula el atributo de destino del elemento.<form>
El atributo de entrada especifica que un elemento <input> no debe validarse cuando se envía.formnovalidate
    Este atributo anula el atributo novalidate del elemento.<form>
El atributo es un atributo.novalidate<form>
Cuando está presente, novalidate especifica que todos los datos del formulario no deben validarse cuando se envían.
--------------------------------------------------------------------------------------ESTRUCTURA--------------------------------------------------------------------------------------
- La declaración define que este documento es un documento HTML5<!DOCTYPE html>
- El elemento es el elemento raíz de un HTML página<html>
- El elemento contiene metainformación sobre el elemento Página HTML<head>
- El elemento especifica un título para el elemento Página HTML (que se muestra en la barra de título del navegador o en la pestaña de la página)<title>
- El elemento define el elemento cuerpo del documento, y es un contenedor para todo el contenido visible, como encabezados, párrafos, imágenes, hipervínculos, tablas, listas, etc.<body>
-----------------------------------------------------------------------------------ETIQUETAS PRINCIPALES------------------------------------------------------------------------------
Los encabezados HTML se definen con las etiquetas hasta.<h1><h6>
Los párrafos HTML se definen con la etiqueta:<p>
Los enlaces HTML se definen con la etiqueta:<a> / El destino del vínculo se especifica en el atributo. href
Las imágenes HTML se definen con la etiqueta.<img>
La etiqueta define un salto de línea y es un elemento vacío sin una etiqueta de cierre:<br>
La etiqueta define un hipervínculo. El atributo especifica la dirección URL de la página El enlace va a:<a href="">
La etiqueta se utiliza para incrustar un imagen en una página HTML. El atributo Especifica la ruta de acceso a la imagen que se va a mostrar:<img src="">
Los atributos width y height proporcionan información sobre el tamaño de las imágenes<img width="" height="">
El atributo alt proporciona un texto alternativo para una imagen <img alt="">
El atributo se utiliza para agregar estilos a un elemento, como el color, la fuente, el tamaño, etc.style="propiedad:valor;"
El atributo de la etiqueta declara el idioma de la página web<html lang="">
El atributo define alguna información sobre un elemento title=""
El elemento se utiliza para separar el contenido (o definir un cambio) en un HTML página:<hr>
El elemento HTML define el texto preformateado.<pre>
    - <b> - Texto en negrita
    - <strong> - Texto importante
    - <i> - Texto en cursiva
    - <em> - Texto enfatizado
    - <mark> - Texto marcado
    - <small> - Texto más pequeño
    - <del> - Texto eliminado
    - <ins> - Texto insertado
    - <sub> - Texto en subíndice
    - <sup> - Texto en superíndice
El elemento HTML define una sección que se cita de otra fuente.<blockquote>
La etiqueta HTML define una cita corta.<q>
La etiqueta HTML define una abreviatura o un acrónimo, como "HTML", "CSS", "Sr.", "Dr.", "Lo antes posible", "Cajero automático".<abbr>
La etiqueta HTML define la información de contacto del autor/propietario de un documento o un artículo.<address>
La etiqueta HTML define el título de un trabajo creativo (por ejemplo, un libro, un poema, una canción, una película, una pintura, una escultura, etc.).<cite>
La etiqueta HTML se utiliza para anular La dirección actual del texto:<bdo>
El atributo especifica dónde abrir el documento vinculado.target
    - _self -Predeterminado. Abre el documento en la misma ventana/pestaña en la que se hizo clic
    - _blank - Abre el documento en una nueva ventana o pestaña
    - _parent - Abre el documento en el marco principal
    - _top - Abre el documento en el cuerpo completo de la ventana
Utilice el atributo (id="value") para definir marcadores en una página
La etiqueta HTML se utiliza para incrustar un imagen en una página web.<img>
<img> Define una imagen
<map> Define un mapa de imagen
<area> Define un área en la que se puede hacer clic dentro de un mapa de imagen
<picture> Define un contenedor para varios recursos de imagen
El elemento HTML permite para mostrar diferentes imágenes para diferentes dispositivos o tamaños de pantalla.<picture>
<table> Define una tabla
    - <th> Define una celda de encabezado en una tabla
    - <tr> Define una fila en una tabla
    - <td> Define una celda o columna en una tabla
    - <caption> Define un título de tabla
    - <colgroup> Especifica un grupo de una o varias columnas de una tabla para dar formato
    - <col> Especifica las propiedades de columna de cada columna de un <colgroup> elemento
    - <thead> Agrupa el contenido del encabezado en una tabla
    - <tbody> Agrupa el contenido del cuerpo en una tabla
    - <tfoot> Agrupa el contenido del pie de página en una tabla
Utilice el elemento HTML para definir una lista desordenada<ul>
Utilice la propiedad CSS para definir el marcador de elemento de lista:list-style-type=
Usar el elemento HTML para definir un elemento de lista<li>
Las listas se pueden anidar
Los elementos de lista pueden contener otros elementos HTML
Utilice la propiedad CSS para mostrar una lista horizontalmente: float:left
Utilice el elemento HTML para definir una lista ordenada<ol>
Utilice el atributo HTML para definir el tipo de numeración type
Utilice el elemento HTML para definir una lista de descripciones<dl>
Utilice el elemento HTML para definir el término de descripción<dt>
Utilice el elemento HTML para describir el término en una lista de descripciones<dd>
El elemento se utiliza como contenedor para otros elementos HTML.<div>
El atributo HTML especifica uno o varios Más nombres de clase para un elemento.class
El atributo se utiliza para especificar un identificador único para un elemento HTML.id
El elemento se utiliza para definir la información de estilo de un página HTML única:<style>
El elemento es un contenedor de metadatos (data sobre los datos)<head>
El elemento se coloca entre la etiqueta y la etiqueta<head><html><body>
El elemento es obligatorio y Define el título del documento<title>
El elemento se utiliza para Definición de información de estilo para un solo documento<style>
La etiqueta se usa con mayor frecuencia para vincular a hojas de estilo externas<link>
Normalmente, el elemento es se utiliza para especificar el juego de caracteres, la descripción de la página, las palabras clave, el autor de la Configuración del documento y de la ventanilla<meta>
El elemento se utiliza para definir JavaScripts del lado del cliente<script>
El elemento especifica el elemento URL base y/o destino para todas las URL relativas de una página<base>
<header> - Define un encabezado para un documento o una sección
<nav> - Define un conjunto de enlaces de navegación
<section> - Define una sección en un documento
<article> - Define un sistema independiente y autónomo contenido
<aside> - Define el contenido aparte del contenido (como una barra lateral)
<footer> - Define un pie de página para un documento o una sección
<details> - Define detalles adicionales que el usuario puede abrir y cerrar bajo demanda
<summary> - Define un encabezado para el elemento<details>
El elemento define Entrada de teclado<kbd>
El elemento define Ejemplo de salida de un programa informático<samp>
El elemento define un fragmento de código informático<code>
El elemento define una variable en la programación o en una expresión matemática<var>
El elemento HTML se utiliza para crear un formulario HTML para la entrada del usuario:<form>
Tipos de entrada:
    <input type="button"> Define un botón:
    <input type="checkbox"> Define una casilla de verificación. Las casillas de verificación permiten al usuario seleccionar CERO o MÁS opciones de un número limitado de opciones.
    <input type="color"> Se utiliza para los campos de entrada que deben contener un color.
    <input type="date"> El se utiliza para los campos de entrada que deben contener una fecha. También puede usar los atributos y para agregar restricciones a las fechas:minmax
    <input type="datetime-local"> El especifica Un campo de entrada de fecha y hora, sin zona horaria.
    <input type="email"> Se utiliza para los campos de entrada que deben contener una dirección de correo electrónico.
        Dependiendo de la compatibilidad del navegador, la dirección de correo electrónico se puede validar automáticamente cuando se envía.
        Algunos teléfonos inteligentes reconocen el tipo de correo electrónico y agregan ".com" al teclado para que coincida con la entrada de correo electrónico.
    <input type="file"> Define un campo de selección de archivos y un botón "Examinar" para las cargas de archivos.
    <input type="hidden"> Define un campo de entrada oculto (no visible para un usuario).<input type="hidden">
        Un campo oculto permite a los desarrolladores web incluir datos que no se pueden ver o modificado por los usuarios cuando se envía un formulario.
        Un campo oculto a menudo almacena el registro de la base de datos que debe actualizarse cuando se envía el formulario.
    <input type="image"> Define una imagen como un botón de envío.
    <input type="month"> Permite al usuario seleccionar un mes y un año.<input type="month">
    <input type="number"> Define un campo de entrada numérico.<input type="number">
        También puede establecer restricciones sobre los números que se aceptan.
        En el ejemplo siguiente se muestra un campo de entrada numérico, donde puede introducir un valor de 1 a 5:
    <input type="password"> Define un campo de contraseña:
    <input type="radio"> Define un botón de opción. Los botones de opción permiten al usuario seleccionar SOLO UNA de un número limitado de opciones:
    <input type="range">
    <input type="reset"> Define un botón de reinicio que restablecerá todos los valores del formulario a sus valores predeterminados:
    <input type="search"> Se utiliza para los campos de búsqueda (un campo de búsqueda se comporta como un campo de texto normal).
    <input type="submit"> Define un botón para enviar datos de formulario a un controlador de formularios.
    <input type="tel"> Se utiliza para los campos de entrada que deben contener un número de teléfono.
    <input type="text"> Define un campo de entrada de texto de una sola línea:
    <input type="time"> Permite al usuario seleccionar una hora (sin zona horaria).
    <input type="url"> Se utiliza para los campos de entrada que deben contener una dirección URL.
    <input type="week"> Permite al usuario seleccionar una semana y un año.
-----------------------------------------------------------------------------------CURIOSIDADES---------------------------------------------------------------------------------------
ctrl + U = Ver código de una página
--------------------------------------------------------------------------------------ETIQUETAS---------------------------------------------------------------------------------------
<!--...--> Define un comentario
<!DOCTYPE> Define el tipo de documento
<a> Define un hipervínculo
<abbr> Define una abreviatura o un acrónimo
<acronym> No es compatible con HTML5. <abbr> Úselo en su lugar para definir un acrónimo.
<address> Define la información de contacto del autor/propietario de un documento
<applet> No es compatible con HTML5. Use <embed> o <object> en su lugar para definir un applet incrustado.
<area> Define un área dentro de un mapa de imagen
<article> Define un artículo
<aside> Define el contenido aparte del contenido de la página
<audio> Define el contenido de sonido incrustado
<b> Define el texto en negrita
<base> Especifica la dirección URL o el destino base para todas las direcciones URL relativas de un documento
<basefont> No es compatible con HTML5. En su lugar, usa CSS para especificar un color, un tamaño y una fuente predeterminados para todo el texto de un documento.
<bdi> Aísla una parte del texto que podría tener un formato diferente al de otro texto fuera de ella
<bdo> Anula la dirección actual del texto
<big> No es compatible con HTML5. En su lugar, usa CSS para definir texto grande
<blockquote> Define una sección que se cita de otra fuente
<body> Define el cuerpo del documento
<br> Define un solo salto de línea
<button> Define un botón en el que se puede hacer clic
<canvas> Se utiliza para dibujar gráficos, sobre la marcha, a través de secuencias de comandos (generalmente JavaScript)
<caption> Define un título de tabla
<center> No es compatible con HTML5. En su lugar, usa CSS para definir el texto centrado
<cite> Define el título de una obra
<code> Define un fragmento de código informático
<col> Especifica las propiedades de columna de cada columna de un <colgroup> elemento
<colgroup> Especifica un grupo de una o varias columnas de una tabla para dar formato
<data> Agrega una traducción legible por máquina de un contenido determinado
<datalist> Especifica una lista de opciones predefinidas para los controles de entrada
<dd> Define una descripción/valor de un término en una lista de descripciones
<del> Define el texto que se ha eliminado de un documento
<details> Define detalles adicionales que el usuario puede ver u ocultar
<dfn> Especifica un término que se va a definir dentro del contenido
<dialog> Define un cuadro de diálogo o una ventana
<dir> No es compatible con HTML5. <ul> Úselo en su lugar para definir una lista de directorios
<div> Define una sección en un documento
<dl> Define una lista de descripciones
<dt> Define un término/nombre en una lista de descripciones
<em> Define el texto enfatizado
<embed> Define un contenedor para una aplicación externa
<fieldset> Agrupa elementos relacionados en un formulario
<figcaption> Define un título para un <figure> elemento
<figure> Especifica el contenido autónomo
<font> No es compatible con HTML5. En su lugar, usa CSS para definir la fuente, el color y el tamaño del texto
<footer> Define un pie de página para un documento o sección
<form> Define un formulario HTML para la entrada del usuario
<frame> No es compatible con HTML5. Define una ventana (un marco) en un conjunto de marcos
<frameset> No es compatible con HTML5. Define un conjunto de fotogramas
<h1> <h6> Define encabezados HTML
<head> Contiene metadatos/información para el documento
<header> Define un encabezado para un documento o sección
<hgroup> Define un encabezado y contenido relacionado
<hr> Define un cambio temático en el contenido
<html> Define la raíz de un documento HTML
<i> Define una parte del texto en una voz o estado de ánimo alternativo
<iframe> Define una ventana en línea
<img> Define una imagen
<input> Define un control de entrada
<ins> Define un texto que se ha insertado en un documento
<kbd> Define la entrada del teclado
<label> Define una etiqueta para un <input> elemento
<legend> Define un título para un <fieldset> elemento
<li> Define un elemento de lista
<link> Define la relación entre un documento y un recurso externo (más utilizado para vincular a hojas de estilo)
<main> Especifica el contenido principal de un documento
<map> Define un mapa de imagen
<mark> Define texto marcado/resaltado
<menu> Define una lista desordenada
<meta> Define metadatos sobre un documento HTML
<meter> Define una medida escalar dentro de un rango conocido (un medidor)
<nav> Define los vínculos de navegación
<noframes> No es compatible con HTML5. Define un contenido alternativo para los usuarios que no admiten marcos
<noscript> Define un contenido alternativo para los usuarios que no admiten scripts del lado del cliente
<object> Define un contenedor para una aplicación externa
<ol> Define una lista ordenada
<optgroup> Define un grupo de opciones relacionadas en una lista desplegable
<option> Define una opción en una lista desplegable
<output> Define el resultado de un cálculo
<p> Define un párrafo
<param> Define un parámetro para un objeto
<picture> Define un contenedor para varios recursos de imagen
<pre> Define texto preformateado
<progress> Representa el progreso de una tarea
<q> Define una cita corta
<rp> Define lo que se va a mostrar en los navegadores que no admiten anotaciones de ruby
<rt> Define una explicación/pronunciación de caracteres (para tipografía de Asia Oriental)
<ruby> Define una anotación de rubí (para tipografía de Asia Oriental)
<s> Define el texto que ya no es correcto
<samp> Define la salida de ejemplo de un programa informático
<script> Define una secuencia de comandos del lado cliente
<search> Define una sección de búsqueda
<section> Define una sección en un documento
<select> Define una lista desplegable
<small> Define texto más pequeño
<source> Define varios recursos multimedia para elementos multimedia (<video> y <audio>)
<span> Define una sección en un documento
<strike> No es compatible con HTML5. Use <del> o <s> en su lugar para definir el texto tachado
<strong> Define el texto importante
<style> Define la información de estilo de un documento
<sub> Define texto con subíndices
<summary> Define un encabezado visible para un <details> elemento
<sup> Define texto en superíndice
<svg> Define un contenedor para gráficos SVG
<table> Define una tabla
<tbody> Agrupa el contenido del cuerpo en una tabla
<td> Define una celda en una tabla
<template> Define un contenedor para el contenido que debe ocultarse cuando se carga la página
<textarea> Define un control de entrada de varias líneas (área de texto)
<tfoot> Agrupa el contenido del pie de página en una tabla
<th> Define una celda de encabezado en una tabla
<thead> Agrupa el contenido del encabezado en una tabla
<time> Define una hora específica (o fecha y hora)
<title> Define un título para el documento
<tr> Define una fila en una tabla
<track> Define pistas de texto para elementos multimedia (<video> y <audio>)
<tt> No es compatible con HTML5. En su lugar, usa CSS para definir el texto del teletipo
<u> Define parte del texto que no está articulado y tiene un estilo diferente al texto normal
<ul> Define una lista desordenada
<var> Define una variable
<video> Define el contenido de vídeo incrustado
<wbr> Define un posible salto de línea
--------------------------------------------------------------------------------------ATRIBUTOS---------------------------------------------------------------------------------------
Atributo/Etiqueta/Función
accept <input> Especifica los tipos de archivos que acepta el servidor (solo para type="file")
accept-charset <form> Especifica las codificaciones de caracteres que se van a utilizar para el envío del formulario
accesskey Atributos globales Especifica una tecla de método abreviado para activar/enfocar un elemento
action <form> Especifica dónde enviar los datos del formulario cuando se envía un formulario
align No es compatible con HTML 5.	Especifica la alineación según los elementos circundantes. Usa CSS en su lugar
alt <area>, <img>, <input> Especifica un texto alternativo cuando el elemento original no se muestra
async <script> Especifica que la secuencia de comandos se ejecuta de forma asincrónica (solo para secuencias de comandos externas)
autocomplete <form>, <input> especifica si el <form> o el <input> elemento debe tener habilitado el autocompletado
autofocus <button>, <input>, <select>, <textarea> Especifica que el elemento debe obtener el foco automáticamente cuando se cargue la página
autoplay <audio>, <video> especifica que el audio/video comenzará a reproducirse tan pronto como esté listo
bgcolor No es compatible con HTML 5.	Especifica el color de fondo de un elemento. Usa CSS en su lugar
border No es compatible con HTML 5.	Especifica la anchura del borde de un elemento. Usa CSS en su lugar
charset <meta>, <script> especifica la codificación de caracteres
checked <input> Especifica que un <input> elemento debe ser preseleccionado cuando se carga la página (para type="checkbox" o type="radio")
cite <blockquote>, <del>, <ins>, <q> Especifica una URL que explica el texto entre comillas/eliminado/insertado
class Atributos globales Especifica uno o más nombres de clase para un elemento (hace referencia a una clase en una hoja de estilos)
color No es compatible con HTML 5.	Especifica el color del texto de un elemento. Usa CSS en su lugar
cols <textarea> Especifica la anchura visible de un área de texto
colspan <td>, <th> especifica el número de columnas que debe abarcar una celda de tabla
content <meta> Proporciona el valor asociado con el atributo http-equiv o name
contenteditable Atributos globales Especifica si el contenido de un elemento es editable o no
controles <audio>, <video> Especifica que se deben mostrar los controles de audio/vídeo (como un botón de reproducción/pausa, etc.)
coords <area> Especifica las coordenadas del área
data <object> Especifica la dirección URL del recurso que utilizará el objeto
data-* Atributos globales Se utiliza para almacenar datos personalizados privados de la página o aplicación
datetime <del>, <ins>, <time> Especifica la fecha y la hora
default <track> Especifica que la pista debe habilitarse si las preferencias del usuario no indican que otra pista sería más apropiada
defer <script> Especifica que la secuencia de comandos se ejecuta cuando la página ha terminado de analizarse (solo para secuencias de comandos externas)
dir Atributos globales Especifica la dirección del texto para el contenido de un elemento
dirname <input>, <textarea> especifica que se enviará la dirección del texto
disabled <button>, <fieldset>, <input>, <optgroup>, <option>, <select>, <textarea> Especifica que el elemento/grupo de elementos especificado debe estar deshabilitado
download <a>, <area> especifica que el destino se descargará cuando un usuario haga clic en el hipervínculo
draggable Atributos globales Especifica si un elemento se puede arrastrar o no
enctype <form> Especifica cómo se deben codificar los datos del formulario al enviarlos al servidor (solo para method="post")
enterkeyhint Atributos globales Especifica el texto de la tecla Intro en un teclado virtual
for <label>, <output> especifica a qué elemento(s) de formulario está enlazado una etiqueta/cálculo
form <button>, <fieldset>, <input>, <label>, <meter>, <object>, <output>, <select>, <textarea> Especifica el nombre del formulario al que pertenece el elemento
formaction <button>, <input> especifica dónde enviar los datos del formulario cuando se envía un formulario. Solo para type="submit"
headers <td>, <th> especifica una o más celdas de encabezado con las que está relacionada una celda
height <canvas>, <embed>, <iframe>, <img>, <input>, <object>, <video> Especifica la altura del elemento
hidden Atributos globales Especifica que un elemento aún no es relevante o que ya no lo es.
high <meter> Especifica el intervalo que se considera un valor alto
href <a>, <area>, <base>, <link> Especifica la URL de la página a la que va el enlace
hreflang <a>, <area>, <link> Especifica el idioma del documento vinculado
http-equiv <meta> Proporciona un encabezado HTTP para la información/valor del atributo de contenido
id Atributos globales Especifica un identificador único para un elemento
inert Atributos globales Especifica que el navegador debe ignorar esta sección
inputmode Atributos globales Especifica el modo de un teclado virtual
ismap <img> Especifica una imagen como un mapa de imágenes del lado del servidor
kind <track> Especifica el tipo de pista de texto
label <track>, <option>, <optgroup> Especifica el título de la pista de texto
lang Atributos globales Especifica el idioma del contenido del elemento
list <input> Hace referencia a un elemento <datalist> que contiene opciones predefinidas para un <input> elemento
loop <audio>, <video> Especifica que el audio/vídeo comenzará de nuevo, cada vez que finalice
low <meter> Especifica el intervalo que se considera un valor bajo
max <input>, <meter>, <progress> Especifica el valor máximo
maxlength <input>, <textarea> especifica el número máximo de caracteres permitidos en un elemento
media  <a>, <area>, <link>, <source>, <style> Especifica para qué medio/dispositivo está optimizado el documento vinculado
method <form> Especifica el método HTTP que se va a utilizar al enviar datos de formulario
min <input>, <meter> especifica un valor mínimo
multiple <input>, <select> especifica que un usuario puede introducir más de un valor
muted <video>, <audio> especifica que la salida de audio del vídeo debe estar silenciada
name <button>, <fieldset>, <form>, <iframe>, <input>, <map>, <meta>, <object>, <output>, <param>, <select>, <textarea> especifica el nombre del elemento
novalidate <form> Especifica que el formulario no debe validarse cuando se envía
onabort <audio>, <embed>, <img>, <object>, <video> Script que se ejecutará al abortar
onafterprint <body> Script que se ejecutará después de imprimir el documento
onbeforeprint <body> Script que se ejecutará antes de imprimir el documento
onbeforeunload <body> Script que se ejecutará cuando el documento esté a punto de descargarse
onblur Todos los elementos visibles. Script que se ejecutará cuando el elemento pierda el foco
oncanplay <audio>, <embed>, <object>, <video>, Script que se ejecutará cuando un archivo esté listo para comenzar a reproducirse (cuando se haya almacenado en búfer lo suficiente como para comenzar)
oncanplaythrough <audio>, <video> Script que se ejecutará cuando un archivo se pueda reproducir hasta el final sin hacer una pausa para el almacenamiento en búfer
onchange Todos los elementos visibles. Script que se ejecutará cuando se cambie el valor del elemento
onclick  en Todos los elementos visibles. Script que se ejecutará cuando se haga clic en el elemento
oncontextmenu Todos los elementos visibles. Script que se ejecutará cuando se active un menú contextual
oncopy Todos los elementos visibles. Script que se ejecutará cuando se copie el contenido del elemento
oncuechange <track> Script que se ejecutará cuando la cue cambie en un <track> elemento
oncut Todos los elementos visibles.	Script que se ejecutará cuando se corte el contenido del elemento
ondblclick Todos los elementos visibles. Script que se ejecutará cuando se haga doble clic en el elemento
ondrag Todos los elementos visibles. Script que se ejecutará cuando se arrastre el elemento
ondragend Todos los elementos visibles.	Script que se ejecutará al final de una operación de arrastre
ondragenter Todos los elementos visibles. Script que se ejecutará cuando un elemento se haya arrastrado a un destino de colocación válido
ondragleave Todos los elementos visibles. Script que se ejecutará cuando un elemento abandone un destino de colocación válido
ondragover Todos los elementos visibles.	Secuencia de comandos que se ejecutará cuando se arrastre un elemento sobre un destino de colocación válido
ondragstart Todos los elementos visibles. Script que se ejecutará al inicio de una operación de arrastre
ondrop Todos los elementos visibles. Script que se ejecutará cuando se suelte el elemento arrastrado
ondurationchange <audio>, <video> Script que se ejecutará cuando cambie la longitud de los medios
onemptyted <audio>, <video> Script que se ejecutará cuando suceda algo malo y el archivo de repente no esté disponible (como se desconecta inesperadamente)
onended <audio>, <video> Script que se ejecutará cuando el medio haya llegado al final (un evento útil para mensajes como "gracias por escuchar")
onerror <audio>, <body>, <embed>, <img>, <object>, <script>, <style>, <video> Script que se ejecutará cuando se produzca un error
onfocus Todos los elementos visibles. Script que se ejecutará cuando el elemento tenga el foco
onhashchange <body> Script que se ejecutará cuando se hayan producido cambios en la parte de anclaje de una URL
oninput Todos los elementos visibles. Script que se ejecutará cuando el elemento reciba la entrada del usuario
oninvalid Todos los elementos visibles.	Script que se ejecutará cuando el elemento no sea válido
onkeydown Todos los elementos visibles.	Script que se ejecutará cuando un usuario presione una tecla
onkeypress Todos los elementos visibles. Script que se ejecutará cuando un usuario presione una tecla
onkeyup Todos los elementos visibles.	Script que se ejecutará cuando un usuario libere una clave
onload <body>, <iframe>, <img>, <input>, <link>, <script>, <style> Script que se ejecutará cuando el elemento termine de cargarse
onloadeddata <audio>, <video> Script que se ejecutará cuando se carguen los datos multimedia
onloadedmetadata <audio>, <video> Script que se ejecutará cuando se carguen los metadatos (como las dimensiones y la duración)
onloadstart <audio>, Script que se <video> ejecutará justo cuando el archivo comience a cargarse antes de que se cargue nada
onmousedown Todos los elementos visibles. Script que se ejecutará cuando se presione un botón del mouse sobre un elemento
onmousemove Todos los elementos visibles. Script que se ejecutará siempre que el puntero del ratón se mueva sobre un elemento
onmouseout Todos los elementos visibles. Script que se ejecutará cuando el puntero del mouse se mueva fuera de un elemento
onmouseover Todos los elementos visibles. Script que se ejecutará cuando un puntero del ratón se mueva sobre un elemento
onmouseup Todos los elementos visibles. Script que se ejecutará cuando se suelte un botón del ratón sobre un elemento
onmousewheel Todos los elementos visibles. Script que se ejecutará cuando se desplace la rueda del ratón sobre un elemento
onoffline <body> Script que se ejecutará cuando el navegador comience a funcionar sin conexión
ononline <body> Script que se ejecutará cuando el navegador comience a funcionar en línea
onpagehide <body> Script que se ejecutará cuando un usuario navegue fuera de una página
onpageshow <body> Script que se ejecutará cuando un usuario navegue a una página
onpaste Todos los elementos visibles. Script que se ejecutará cuando el usuario pegue algún contenido en un elemento
onpause <audio>, <video> secuencia de comandos que se ejecutará cuando el usuario o mediante programación ponga en pausa el medio
onplay <audio>, <video> Script que se ejecutará cuando el medio haya comenzado a reproducirse
onplaying <audio>, <video> Script que se ejecutará cuando el medio haya comenzado a reproducirse
onpopstate <body> Script que se ejecutará cuando cambie el historial de la ventana.
onprogress <audio>, <video> Script que se ejecutará cuando el navegador esté en el proceso de obtener los datos multimedia
onratechange <audio>, <video> Script que se ejecutará cada vez que cambie la velocidad de reproducción (como cuando un usuario cambia a un modo de cámara lenta o avance rápido).
onreset <form> Secuencia de comandos que se ejecutará cuando se haga clic en un botón de restablecimiento en un formulario.
onresize <body> Script que se ejecutará cuando se cambie el tamaño de la ventana del navegador.
onscroll Todos los elementos visibles.	Script que se ejecutará cuando se desplace la barra de desplazamiento de un elemento
onsearch <input> Script que se ejecutará cuando el usuario escriba algo en un campo de búsqueda (para <input type="search">)
onseeked <audio>, <video> Script que se ejecutará cuando el atributo seeking se establezca en false, lo que indica que la búsqueda ha finalizado
onseeking <audio>, <video> Script que se ejecutará cuando el atributo seeking se establezca en true, lo que indica que la búsqueda está activa
onselect Todos los elementos visibles.	Script que se ejecutará cuando se seleccione el elemento
onstalled <audio>, <video> Script que se ejecutará cuando el navegador no pueda obtener los datos multimedia por cualquier motivo
onstorage <body> Script que se ejecutará cuando se actualice un área de almacenamiento web
onsubmit <form> Script que se ejecutará cuando se envíe un formulario
onsuspend <audio>, <video> El script que se ejecutará cuando se obtengan los datos multimedia se detiene antes de que se cargue por completo por cualquier motivo
ontimeupdate <audio>, <video> Script que se ejecutará cuando la posición de reproducción haya cambiado (como cuando el usuario avanza rápidamente a un punto diferente en el medio)
ontoggle <details> Script que se ejecutará cuando el usuario abra o cierre el <details> elemento
onunload <body> Script que se ejecutará cuando se haya descargado una página (o se haya cerrado la ventana del navegador)
onvolumechange <audio>, <video> Script que se ejecutará cada vez que se cambie el volumen de un vídeo/audio
onwaiting  <audio>, <video> script que se ejecutará cuando el medio se haya pausado pero se espera que se reanude (como cuando el medio se detiene para almacenar en búfer más datos)
onwheel Todos los elementos visibles. Script que se ejecutará cuando la rueda del ratón se mueva hacia arriba o hacia abajo sobre un elemento
open <details> Especifica que los detalles deben ser visibles (abiertos) para el usuario
optimum <meter> Especifica cuál es el valor óptimo para el medidor
pattern <input> Especifica una expresión regular <input> con la que se comprueba el valor de un elemento
placeholder <input>, <textarea> marcador de posición que especifica una sugerencia breve que describe el valor esperado del elemento
popover Atributos globales Especifica un elemento popover
popovertarget <button>, <input> especifica el elemento popover que se va a invocar
popovertargetaction <button>, <input> especifica lo que sucede con el elemento popover cuando se hace clic en el botón
poster <video> Especifica una imagen que se mostrará mientras se descarga el vídeo o hasta que el usuario pulse el botón de reproducción
preload <audio>, <video> Especifica si el autor cree que el audio/vídeo debe cargarse cuando se cargue la página y cómo lo hace.
readonly <input>, <textarea> especifica que el elemento es de solo lectura
rel <a>, <area>, <form>, <link> Especifica la relación entre el documento actual y el documento vinculado
required <input>, <select>, <textarea> Especifica que el elemento debe completarse antes de enviar el formulario
reversed <ol> Especifica que el orden de la lista debe ser descendente (9,8,7...)
rows <textarea> Especifica el número visible de líneas en un área de texto
rowspan <td>, <th> especifica el número de filas que debe abarcar una celda de tabla
sandbox <iframe> sandbox Habilita un conjunto adicional de restricciones para el contenido de un <iframe>archivo
scope <th> Especifica si una celda de encabezado es un encabezado para una columna, fila o grupo de columnas o filas
select <option> Especifica que se debe preseleccionar una opción cuando se cargue la página
shape <area> Especifica la forma del área
size <input>, <select> especifica el ancho, en caracteres (para <input>) o especifica el número de opciones visibles (para <select>)
sizes , <img><link>, <source> Especifica el tamaño del recurso vinculado
span <col>, <colgroup> especifica el número de columnas que se van a abarcar
spellcheck Atributos globales Especifica si se va a revisar la ortografía y la gramática del elemento o no.
src <audio>, <embed>, <iframe>, <img>, <input>, <script>, <source>, <track>, <video> Especifica la dirección URL del archivo multimedia
srcdoc <iframe> Especifica el contenido HTML de la página que se mostrará en el archivo <iframe>
srclang <track> Especifica el idioma de los datos de texto de la pista (requerido si kind="subtitles")
srcset <img>, <source> especifica la dirección URL de la imagen que se va a utilizar en diferentes situaciones
start <ol> Especifica el valor de inicio de una lista ordenada
step <input> Especifica los intervalos numéricos válidos para un campo de entrada
style Atributos globales Especifica un estilo CSS en línea para un elemento
tabindex Atributos globales Especifica el orden de tabulación de un elemento
target <a>, <area>, <base>, <form> Especifica el destino de dónde abrir el documento vinculado o dónde enviar el formulario
title Atributos globales Especifica información adicional sobre un elemento
translate Atributos globales Especifica si el contenido de un elemento debe traducirse o no
type <a>, <button>, <embed>, <input>, <link>, <menu>, <object>, <script>, <source>, <style> especifica el tipo del elemento
usemap <img>, <object> especifica una imagen como mapa de imagen del lado del cliente
value <button>, <input>, <li>, <option>, <meter>, <progress>, <param> Especifica el valor del elemento
width <canvas>, <embed>, <iframe>, <img>, <input>, <object>, <video> Especifica la anchura del elemento
wrap <textarea> Especifica cómo se debe ajustar el texto de un área de texto cuando se envía en un formulario
---------------------------------------------------------------------------------------IDIOMAS----------------------------------------------------------------------------------------
Idioma/ISO
Abjasio ab
Afar aa
Afrikáans af
Akan ak
Albanés sq
Alemán de
Amhárico am
Árabe ar
Aragonés an
Armenio hy
Asamés as
Avar av
Avesta ae
Aymara ay
Azerí az
Bambara bm
Bashkir ba
Bengalí (Bangla) bn
Bielorruso be
Birmano my
Bislama bi
Bosnio bs
Bretón br
Búlgaro bg
Catalán ca
Chamorro ch
Checheno ce
Cheroqui ch
Chewa, Chichewa, Nyanja ny
Chino zh
Chino (simplificado) zh-Hans
Chino (tradicional) zh-Hant
Chuvasio cv
Cingalés si
Coreano ko
Corso co
Cree cr
Croata hr
Danés da
Divehi, Dhivehi, Maldivo dv
Edo io
Efiopio ee
Egipcio eg
Escocés (gaélico) gd
Eslovaco sk
Esloveno sl
Español es
Esperanto eo
Estonio et
Euskera eu
Feroés fo
Fijiano fj
Finlandés fi
Francés fr
Frisón fy
Fulah, Fula, Pulaar, Pular ff
Gaélico (manés) gv
Galés cy
Gallego gl
Georgiano ka
Griego el
Groenlandés kl
Guaraní gn
Gujarati gu
Hausa ha
Hawaiano hw
Hebreo he
Herero hz
Hindi hi
Hiri Motu ho
Hmong hm
Holandés nl
Húngaro hu
Igbo ig
Ilocano il
Indonesio id, in
Inglés en
Interlingua ia
Interlingue ie
Inuktitut iu
Inupiaq ik
Irlandés ga
Islandés is
Italiano it
Japonés ja
Javanés jv
Kannada kn
Kanuri kr
Kashmiri ks
Kazajo kk
Khmer km
Kikuyu ki
Kinyarwanda (Ruanda) rw
Kirguís ky
Kirundi rn
Komi kv
Kongo kg
Kurdo ku
Kwanyama kj
Lao lo
Latín la
Letón (letón) lv
Limburgués (limburgués) li
Lingala ln
Lituano lt
Luba-Katanga lu
Luganda, Ganda lg
Luxemburgués lb
Macedonio mk
Malayo ms
Malayalam ml
Malgache mg
Maltés mt
Maorí mi
Maratí mr
Marshalés mh
Moldavo mo
Mongol mn
Nauruano na
Navajo nv
Ndonga ng
Neerlandés nl
Nepalí ne
Nórdico antiguo no
Noruego no
Noruego bokmål nb
Noruego nynorsk nn
Nuosu ii
Occitano oc
Ojibwe oj
Oriya or
Oromo (Afaan Oromo) om
Osético os
Pali pi
Pastún, Pasto ps
Persa (farsi) fa
Polaco pl
Portugués pt
Punjabi (oriental) pa
Quechua qu
Retorrománico rm
Rumano ro
Ruso ru
Sami se
Samoano sm
Sango sg
Sánscrito sa
Serbio sr
Serbocroata sh
Sesotho st
Setsuana tn
Shona sn
Sichuan Yi ii
Sindi sd
Siswati ss
Somali so
Sotho meridional st
Suajili (kiswahili) sw
Sueco sv
Sundanés su
Tagalo tl
Tahitiano ty
Tailandés th
Tailandés th
Tajik tg
Tamil ta
Tártaro tt
Tayiko tg
Telugu te
Tibetano bo
Tigriña ti
Tongano to
Tsonga ts
Turco tr
Turkmeno tk
Twi tw
Ucraniano uk
Uigur ug
Urdu ur
Uzbeko uz
Venda ve
Vietnamita vi
Volapük vo
Wallon wa
Wolof wo
Xhosa xh
Yiddish yi, ji
Yoruba yo
Zulú zu
Zulú zu
---------------------------------------------------------------------------------------PAÍSES-----------------------------------------------------------------------------------------
País/ISO
AFGANISTÁN AF
ALBANIA AL
ALEMANIA DE
ANDORRA AD
ANGOLA AO
ANGUILLA AI
ANTÁRTIDA AQ
ANTIGUA Y BARBUDA AG
ARABIA SAUDITA SA
ARGELIA DZ
ARGENTINA AR
ARMENIA AM
ARUBA AW
AUSTRALIA AU
AUSTRIA AT
AZERBAIYÁN AZ
BAHAMAS BS
BANGLADÉS BD
BARBADOS BB
BARÉIN BH
BÉLGICA BE
BELICE BZ
BENÍN BJ
BERMUDAS BM
BIELORRUSIA BY
BIRMANIA (MYANMAR) MM
BOLIVIA BO
BOSNIA Y HERZEGOVINA BA
BOTSUANA BW
BRASIL BR
BRUNÉI BN
BULGARIA BG
BURKINA FASO BF
BURUNDI BI
BUTÁN BT
CABO VERDE CV
CAMBOYA KH
CAMERÚN CM
CANADÁ CA
CATAR QA
CHAD TD
CHILE CL
CHINA CN
CHIPRE CY
CIUDAD DEL VATICANO VA
COLOMBIA CO
COMORAS KM
CONGO CG
CONGO, REPÚBLICA DEMOCRÁTICA DEL CD
COREA DEL NORTE KP
COREA DEL SUR KR
COSTA DE MARFIL CI
COSTA RICA CR
CROACIA HR
CUBA CU
DINAMARCA DK
DOMINICA DM
ECUADOR EC
EGIPTO EG
EL SALVADOR SV
EMIRATOS ÁRABES UNIDOS AE
ERITREA ER
ESLOVAQUIA SK
ESLOVENIA SI
ESPAÑA ES
ESTADOS UNIDOS US
ESTONIA EE
ETIOPÍA ET
FILIPINAS PH
FINLANDIA FI
FIYI FJ
FRANCIA FR
GABÓN GA
GAMBIA GM
GEORGIA GE
GHANA GH
GIBRALTAR GI
GRANADA GD
GRECIA GR
GROENLANDIA GL
GUADALUPE GP
GUAM GU
GUATEMALA GT
GUAYANA FRANCESA GF
GUERNSEY GG
GUINEA GN
GUINEA ECUATORIAL GQ
GUINEA-BISÁU GW
GUYANA GY
HAITÍ HT
HONDURAS HN
HONG KONG HK
HUNGRÍA HU
INDIA IN
INDONESIA ID
IRÁN IR
IRAQ IQ
IRLANDA IE
ISLA BOUVET BV
ISLA DE MAN IM
ISLA DE NAVIDAD CX
ISLA NORFOLK NF
ISLANDIA IS
ISLAS ÅLAND AX
ISLAS CAIMÁN KY
ISLAS COCOS (KEELING) CC
ISLAS COOK CK
ISLAS FEROE FO
ISLAS GEORGIAS DEL SUR Y SANDWICH DEL SUR GS
ISLAS HEARD Y MCDONALD HM
ISLAS MALVINAS FK
ISLAS MARIANAS DEL NORTE MP
ISLAS MARSHALL MH
ISLAS PITCAIRN PN
ISLAS SALOMÓN SB
ISLAS TURCAS Y CAICOS TC
ISLAS ULTRAMARINAS DE ESTADOS UNIDOS UM
ISLAS VÍRGENES BRITÁNICAS VG
ISLAS VÍRGENES DE LOS ESTADOS UNIDOS VI
ISRAEL IL
ITALIA IT
JAMAICA JM
JAPÓN JP
JERSEY JE
JORDANIA JO
KAZAJISTÁN KZ
KENIA KE
KIRGUISTÁN KG
KIRIBATI KI
KOSOVO XK
KUWAIT KW
LAOS LA
LESOTO LS
LETONIA LV
LÍBANO LB
LIBERIA LR
LIBIA LY
LIECHTENSTEIN LI
LITUANIA LT
LUXEMBURGO LU
MACAO MO
MACEDONIA MK
MADAGASCAR MG
MALASIA MY
MALAUI MW
MALDIVAS MV
MALÍ ML
MALTA MT
MARRUECOS MA
MARTINICA MQ
MAURICIO MU
MAURITANIA MR
MAYOTTE YT
MÉXICO MX
MICRONESIA FM
MOLDAVIA MD
MÓNACO MC
MONGOLIA MN
MONTENEGRO ME
MONTSERRAT MS
MOZAMBIQUE MZ
NAMIBIA NA
NAURU NR
NEPAL NP
NICARAGUA NI
NÍGER NE
NIGERIA NG
NIUE NU
NORUEGA NO
NUEVA CALEDONIA NC
NUEVA ZELANDA NZ
OMÁN OM
PAÍSES BAJOS NL
PAKISTÁN PK
PALAOS PW
PALESTINA, ESTADO DE PS
PANAMÁ PA
PAPÚA NUEVA GUINEA PG
PARAGUAY PY
PERÚ PE
POLINESIA FRANCESA PF
POLONIA PL
PORTUGAL PT
PUERTO RICO PR
REINO UNIDO GB
REPÚBLICA ÁRABE SAHARAUI DEMOCRÁTICA EH
REPÚBLICA CENTROAFRICANA CF
REPÚBLICA CHECA CZ
REPÚBLICA DOMINICANA DO
REUNIÓN RE
RUANDA RW
RUMANÍA RO
RUSIA RU
SAMOA WS
SAMOA AMERICANA AS
SAN BARTOLOMÉ BL
SAN CRISTÓBAL Y NIEVES KN
SAN MARINO SM
SAN MARTÍN (PARTE FRANCESA) MF
SAN PEDRO Y MIQUELÓN PM
SAN VICENTE Y LAS GRANADINAS VC
SANTA ELENA SH
SANTA LUCÍA LC
SANTO TOMÉ Y PRÍNCIPE ST
SENEGAL SN
SERBIA RS
SEYCHELLES SC
SIERRA LEONA SL
SINGAPUR SG
SINT MAARTEN (PARTE NEERLANDESA) SX
SIRIA SY
SOMALIA SO
SRI LANKA LK
SUDÁFRICA ZA
SUDÁN SD
SUDÁN DEL SUR SS
SUECIA SE
SUIZA CH
SURINAM SR
SVALBARD Y JAN MAYEN SJ
SWAZILANDIA SZ
TAILANDIA TH
TAIWÁN TW
TANZANIA TZ
TAYIKISTÁN TJ
TERRITORIO BRITÁNICO DEL OCÉANO ÍNDICO IO
TERRITORIOS AUSTRALES FRANCESES TF
TIMOR ORIENTAL TL
TOGO TG
TOKELAU TK
TONGA TO
---------------------------------------------------------------------------------------MÉTODOS----------------------------------------------------------------------------------------
¿Qué es HTTP?
El protocolo de transferencia de hipertexto (HTTP) está diseñado para permitir Comunicaciones entre clientes y servidores.
HTTP funciona como un protocolo de solicitud-respuesta entre un cliente y un servidor.

GET
POST
PUT
HEAD
DELETE
PATCH
OPTIONS
CONNECT
TRACE

El método GET
GET se utiliza para solicitar datos de un recurso.
Tenga en cuenta que la cadena de consulta (pares nombre/valor) se envía en la dirección URL de una solicitud GET:

/test/demo_form.php?name1=value1&name2=value2

Algunas notas sobre las solicitudes GET:

    - Las solicitudes GET se pueden almacenar en caché
    - Las solicitudes GET permanecen en el historial del navegador
    - Las solicitudes GET se pueden marcar como favoritas
    - Las solicitudes GET nunca deben usarse cuando se trata de datos confidenciales
    - Las solicitudes GET tienen restricciones de longitud
    - Las solicitudes GET solo se utilizan para solicitar datos (no para modificarlos)

El método POST
POST se utiliza para enviar datos a un servidor para crear o actualizar un recurso.
Los datos enviados al servidor con POST se almacenan en el cuerpo de la solicitud del Solicitud HTTP:

POST /test/demo_form.php HTTP/1.1
Host: w3schools.com

name1=value1&name2=value2
Algunas notas sobre las solicitudes POST:

    - Las solicitudes POST nunca se almacenan en caché
    - Las solicitudes POST no permanecen en el historial del navegador
    - Las solicitudes POST no se pueden marcar como favoritas
    - Las solicitudes POST no tienen restricciones en cuanto a la longitud de los datos

El método PUT
PUT se utiliza para enviar datos a un servidor para crear o actualizar un recurso.
La diferencia entre POST y PUT es que las solicitudes PUT son idempotentes. Ese es decir, llamar a la misma solicitud PUT varias veces siempre producirá lo mismo resultado. Por el contrario, llamar a una solicitud POST repetidamente tiene efectos secundarios de crear el mismo recurso varias veces.

El método HEAD
HEAD es casi idéntico a GET, pero sin el cuerpo de respuesta.
En otras palabras, si GET /users devuelve una lista de usuarios, entonces HEAD /users Realice la misma solicitud, pero no devolverá la lista de usuarios.
Las solicitudes HEAD son útiles para comprobar lo que devolverá una solicitud GET antes de hacer una solicitud GET, como antes de descargar un archivo o una respuesta de gran tamaño cuerpo.

El método DELETE
El método DELETE elimina el recurso especificado.

El método PATCH
El método PATCH se utiliza para aplicar modificaciones parciales a un recurso.

El método OPTIONS
El método OPTIONS describe las opciones de comunicación para el destino recurso.

El método CONNECT
El método CONNECT se utiliza para iniciar una comunicación bidireccional (un túnel) con el recurso solicitado.

El método TRACE
El método TRACE se utiliza para realizar una prueba de bucle invertido de mensajes que Prueba la ruta de acceso del recurso de destino (útil para fines de depuración).