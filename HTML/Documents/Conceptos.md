# HTML
Esta carpeta contiene un archivo principal con prácticas HTML e información útil.
<!--
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<tagname> El contenido va aquí... </tagname>
    - Todos los elementos HTML pueden tener atributos
    - Los atributos proporcionan información adicional sobre los elementos
    - Los atributos siempre se especifican en la etiqueta de inicio
    - Los atributos suelen venir en pares nombre/valor como: name="value"
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Hay dos formas de especificar la dirección URL en el atributo:src
    - URL absoluta: enlaces a una imagen externa que está alojada en otro sitio web. Ejemplo: src="https://www.w3schools.com/images/img.jpg".
    - URL relativa: enlaces a una imagen alojada en el sitio web. Aquí, la URL no incluye el nombre de dominio. Si la URL comienza Sin una barra diagonal, será relativa a la página actual. Ejemplo: src="img.jpg". Si la URL comienza con una barra diagonal, será relativa al dominio. Ejemplo: src="/images/img.jpg".
    - La etiqueta también debe contener los atributos que especifican el ancho y altura de la imagen (en píxeles):<img src="img.jpg" width="100px" height="100px">
    - El atributo alt para la etiqueta especifica un texto alternativo para una imagen, si la imagen por alguna razón no se puede mostrar. Esto puede deberse a: una conexión lenta, o un error en el atributo, o si el usuario utiliza una pantalla lector.<img src="img.jpg" alt="Una foto">
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
También puede agregar un enlace a un marcador en otra página: <a href="index..html#Editable">Ir al párrafo editable</a>
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Siempre debe incluir el atributo dentro de la etiqueta, para declarar el idioma de la página Web. Esto está destinado a ayudar a los motores de búsqueda y navegadores.<html lang="en-US">
Los códigos de país también se pueden agregar al código de idioma en el atributo. Entonces, los dos primeros caracteres definen el idioma de la página HTML, y los dos últimos caracteres definen el país.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
El elemento agrega un título A tu página:<title>
El título debe describir el contenido y el significado de la página.
El título de la página es muy importante para la optimización de motores de búsqueda (SEO). El texto es utilizado por los algoritmos de los motores de búsqueda para decidir el orden Al enumerar páginas en los resultados de búsqueda.
El elemento:<title>
    - Define un título en la barra de herramientas del navegador
    - Proporciona un título para la página cuando se agrega a Favoritos
    - Muestra un título para la página en los resultados del motor de búsqueda
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
        - type="1"	Número
        - type="A"	Mayúsculas
        - type="a"	Minúsculas
        - type="I"	Mayúsculas en romano
        - type="i"	Minúsculas en romano
De forma predeterminada, una lista ordenada comenzará a contar desde 1. Si desea comenzar a contar a partir de un número específico, puede usar el atributo:start
Las listas se pueden anidar (lista dentro de la lista):
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
El elemento es, por defecto, un block, lo que significa que toma todo el ancho disponible y viene con una línea descansos antes y después.<div>
El elemento se utiliza a menudo para agrupar secciones de una página web.<div>
Si tiene un elemento que es no es 100% ancho, y desea alinearlo al centro, establezca la propiedad CSS en .<div margin=auto;>
Puede tener muchos contenedores en la misma página.<div>
Al crear páginas web, a menudo desea tener dos o más elementos uno al lado del otro. Existen diferentes métodos para alinear elementos uno al lado del otro, todos incluyen algo de estilo CSS. Veremos los métodos más comunes:
    - La propiedad CSS no estaba pensada originalmente para alinear elementos uno al lado del otro, pero se ha utilizado para este propósito durante muchos años.float<div>
    - La propiedad CSS se utiliza para posicionar y dar formato al contenido y Permita que los elementos floten uno al lado del otro en lugar de uno encima del otro.float
Si cambia la propiedad del elemento de displayblock a inline-block, los elementos ya no agregarán un salto de línea antes y después, y se mostrarán uno al lado del otro en lugar de uno encima del otro.
El módulo de diseño CSS Flexbox se introdujo para facilitar el diseño de diseño responsivo flexible estructura sin utilizar flotación ni posicionamiento.
Para que el método CSS flex funcione, rodea los elementos con otro elemento y da Es el estado de un contenedor flexible.
El módulo de diseño de cuadrícula CSS ofrece un sistema de diseño basado en cuadrículas, con filas y columnas, facilitando el diseño de páginas web sin tener que utilizar flotadores y posicionamientos.
Suena casi igual que flex, pero tiene la capacidad de definir más de una fila y posicionar cada fila individualmente.
El método CSS grid requiere que rodee los elementos con otro elemento y proporcione el estado como contenedor de cuadrícula y debe especificar el ancho de cada columna
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
El atributo HTML es se utiliza para especificar una clase para un elemento HTML.class
Varios elementos HTML pueden compartir la misma clase.
El atributo se usa a menudo para apuntar a un nombre de clase en una hoja de estilos. También puede ser utilizado por un JavaScript para acceder y Manipule los elementos con el nombre de clase específico.class
El atributo se puede utilizar en cualquier elemento HTML.class
¡El nombre de la clase distingue entre mayúsculas y minúsculas!
Para crear una clase; Escriba un carácter de punto (.), seguido de un nombre de la clase. A continuación, defina las propiedades CSS entre llaves {}:
El nombre de la clase también puede ser utilizado por JavaScript para realizar ciertas tareas para elementos específicos.
JavaScript puede acceder a elementos con un nombre de clase específico con el método:getElementsByClassName()
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Se utiliza el atributo HTML para especificar un identificador único para un elemento HTML.id
No puede tener más de un elemento con el mismo identificador en un archivo Documento HTML.
El atributo especifica un identificador único para un elemento HTML. El valor del atributo debe ser único dentro del documento HTML.idid
El atributo se utiliza para apuntar a una declaración de estilo específica en una hoja de estilo. También es utilizado por JavaScript para acceder y Manipule el elemento con el identificador específico.id
La sintaxis de id es: escriba un carácter de almohadilla (#), seguido de un nombre de id. A continuación, defina las propiedades CSS entre llaves {}.
¡El nombre de id distingue entre mayúsculas y minúsculas!
El nombre de identificación debe contener al menos un carácter, no puede comenzar con un número y no debe contener espacios en blanco (espacios, tabulaciones, etc.).
El atributo también puede ser utilizado por JavaScript para realizar algunas tareas para ese elemento específico.id
JavaScript puede acceder a un elemento con un id específico con el método:getElementById()
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
JavaScript hace que las páginas HTML sean más dinámicas e interactivas.
La etiqueta HTML se utiliza para definir un script del lado del cliente (JavaScript).<script>
El elemento contiene instrucciones de script o apunta a un archivo de script externo a través del atributo.<script>src
Los usos comunes de JavaScript son la manipulación de imágenes, la validación de formularios y Cambios dinámicos de contenido.
Para seleccionar un elemento HTML, JavaScript utiliza el método con mayor frecuencia.document.getElementById()
JavaScript puede cambiar los estilos y los atributos
La etiqueta HTML define un contenido alternativo para mostrar a los usuarios que tienen scripts deshabilitados en su navegador o tienen un navegador que no es compatible Scripts:<noscript>
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Se utiliza el elemento HTML para definir la entrada del teclado. El contenido del interior se muestra en el archivo Fuente monoespaciada predeterminada.<kbd>
El elemento HTML se utiliza para Defina la salida de ejemplo de un programa informático. El contenido del interior se muestra en la fuente monoespaciada predeterminada del navegador.<samp>
Se utiliza el elemento HTML para definir un fragmento de código informático. El contenido del interior se muestra en el archivo Fuente monoespaciada predeterminada del navegador.<code>
Tenga en cuenta que el elemento no conserva espacios en blanco ni saltos de línea adicionales.<code>
Para solucionar esto, puede poner el elemento dentro de un elemento:<code><pre>
Se utiliza el elemento HTML para definir una variable en programación o en una expresión matemática. El El contenido del interior suele mostrarse en cursiva.<var>
Un elemento semántico describe claramente su significado tanto para el navegador como para el desarrollador.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
    - Anexa los datos del formulario a la dirección URL, en pares nombre/valor
    - ¡NUNCA use GET para enviar datos confidenciales! (¡los datos del formulario enviado son visibles en la URL!)
    - La longitud de una URL es limitada (2048 caracteres)
    - Útil para envíos de formularios en los que un usuario desea marcar el resultado
    - GET es bueno para datos no seguros, como cadenas de consulta en Google
Notas sobre POST:
    - Anexa los datos del formulario dentro del cuerpo de la solicitud HTTP (el archivo los datos del formulario no se muestran en la URL)
    - POST no tiene limitaciones de tamaño y se puede utilizar para enviar grandes cantidades de datos.
    - Los envíos de formularios con POST no se pueden marcar como favoritos
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
    - checked: Especifica que un campo de entrada debe preseleccionarse cuando se carga la página (para tipo="checkbox" o tipo="radio")
    - disable: Especifica que un campo de entrada debe estar deshabilitado.
    - max: Especifica el valor máximo para un campo de entrada
    - maxlength: Especifica el número máximo de caracteres para un campo de entrada
    - min: Especifica el valor mínimo para un campo de entrada patrón Especifica una expresión regular para comparar el valor de entrada
    - readonly: Especifica que un campo de entrada es de solo lectura (no se puede cambiar)
    - required: Especifica que un campo de entrada es obligatorio (debe completarse)
    - size: Especifica el ancho (en caracteres) de un campo de entrada
    - step: Especifica los intervalos numéricos legales para un campo de entrada
    - value: Especifica el valor predeterminado para un campo de entrada
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
El elemento es solo un contenedor para gráficos. Debes usar JavaScript para dibujar los gráficos.<canvas>
Canvas tiene varios métodos para dibujar trazados, cuadros, círculos, texto y agregar imágenes.
SVG define gráficos basados en vectores en formato XML.
    - SVG son las siglas de Scalable Vector Graphics (Gráficos Vectoriales Escalables)
    - SVG se utiliza para definir gráficos para la Web
    - SVG es una recomendación del W3C
SVG es un lenguaje para describir gráficos 2D en XML.
Canvas dibuja gráficos en 2D, sobre la marcha (con JavaScript).
SVG está basado en XML, lo que significa que todos los elementos están disponibles dentro del SVG DOM. Puede adjuntar controladores de eventos de JavaScript para un elemento.
En SVG, cada forma dibujada se recuerda como un objeto. Si los atributos de un SVG objeto, el navegador puede volver a renderizar automáticamente la forma.
El lienzo se representa píxel a píxel. En el lienzo, una vez que se dibuja el gráfico, el navegador lo olvida. Si su posición, toda la escena debe volver a dibujarse, incluyendo cualquier objetos que podrían haber sido cubiertos por el gráfico.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Multimedia en la web es sonido, música, vídeos, películas y animaciones.
Solo el video MP4, WebM y Ogg son compatibles con el estándar HTML.
El atributo controls agrega controles de vídeo, como reproducción, pausa y volumen.
    - Es una buena idea incluir siempre atributos y. Si no se establecen la altura y la anchura, la página puede parpadear mientras se carga el video.
    - El elemento <source> le permite especificar un vídeo alternativo archivos entre los que el navegador puede elegir. El navegador utilizará el primer formato reconocido.
    - El texto entre las etiquetas y solo se mostrará en navegadores que no Apoye el elemento.<video></video>
Para iniciar un vídeo automáticamente, utilice el atributo:autoplay
Añade después para que el vídeo empiece a reproducirse automáticamente (pero silenciado):muted autoplay
El DOM HTML define métodos, propiedades y eventos para el elemento.<video>
Esto le permite cargar, reproducir y pausar videos, así como configurar la duración y el volumen.
También hay eventos DOM que pueden notificarle cuando un video comienza a reproducirse, se detiene, etc.
El elemento HTML se utiliza para Reproducir un archivo de audio en una página web.<audio>
Los plug-ins son programas informáticos que amplían la funcionalidad estándar del navegador.
Los plug-ins fueron diseñados para ser utilizados para muchos propósitos diferentes:
    - Para ejecutar applets de Java
    - Para ejecutar controles ActiveX de Microsoft
    - Para visualizar películas Flash
    - Para mostrar mapas
    - Para buscar virus
    - Para verificar un ID bancario
El elemento es compatible con todos los navegadores.<object>
El elemento define un objeto incrustado dentro de un documento HTML.<object>
Fue diseñado para incrustar plug-ins (como applets de Java, lectores de PDF y Flash Player) en páginas web, pero también se puede usar para incluir HTML en HTML:
El elemento es compatible con todos los principales navegadores.<embed>
El elemento también define un objeto incrustado dentro de un documento HTML.<embed>
Los navegadores web han admitido el elemento <embed> para un tiempo. Sin embargo, no ha sido parte del HTML especificación anterior a HTML5.
Convertir videos a diferentes formatos puede ser difícil y llevar mucho tiempo.
Una solución más fácil es dejar que YouTube reproduzca los videos en su página web.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
La API de geolocalización HTML se utiliza para localizar la posición de un usuario.
Dado que esto puede comprometer la privacidad, el puesto no está disponible a menos que el usuario lo apruebe.
El método se utiliza para devolver la posición del usuario.getCurrentPosition()
    - Compruebe si la geolocalización es compatible
    - Si se admite, ejecute el método getCurrentPosition(). Si no es así, muestre un mensaje al usuario
    - Si el método getCurrentPosition() tiene éxito, devuelve un objeto de coordenadas a la función especificada en el parámetro (showPosition)
    - La función showPosition() genera la latitud y la longitud
El método devuelve un objeto en caso de éxito. La latitud, Las propiedades de longitud y precisión siempre se devuelven. Se devuelven las demás propiedades Si está disponible:getCurrentPosition()
coords.latitude = La latitud como número decimal (siempre devuelto)
    - coords.longitude = La longitud como un número decimal (siempre devuelto)
    - coords.accuracy = La precisión de la posición (siempre devuelta)
    - coords.altitude = La altitud en metros sobre el nivel medio del mar (devuelta si está disponible)
    - coords.altitudeAccuracy = La precisión de la altitud de la posición (devuelta si está disponible)
    - coords.heading = El rumbo en grados en el sentido de las agujas del reloj desde el Norte (devuelto si está disponible)
    - coords.speed = La velocidad en metros por segundo (devuelta si está disponible)
    - timestamp = La fecha/hora de la respuesta (devuelta si está disponible)
watchPosition() - Devuelve la posición actual del usuario y continúa devuelve la posición actualizada a medida que el usuario se mueve (como el GPS de un coche).
clearWatch() - Detiene el método.watchPosition()
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
En HTML, cualquier elemento se puede arrastrar y soltar.
En primer lugar: Para hacer que un elemento se pueda arrastrar, establezca el atributo draggable en true:
A continuación, especifique lo que debe suceder cuando se arrastra el elemento.
En el ejemplo anterior, el atributo llama a una función, Arrastrar(event), que especifica los datos que se van a arrastrar.ondragstart
El método establece el tipo de datos y el valor de la propiedad Datos arrastrados:dataTransfer.setData()
En este caso, el tipo de datos es "text" y el valor es el id del elemento arrastrable ("ObjetoArrastrar").
El evento especifica dónde se pueden colocar los datos arrastrados.ondragover
De forma predeterminada, los datos/elementos no se pueden colocar en otros elementos. Para permitir una caída, Debemos evitar el manejo predeterminado del elemento.
Esto se hace llamando al método para el evento ondragover:event.preventDefault()
Cuando se sueltan los datos arrastrados, se produce un evento de colocación.
En el ejemplo anterior, el atributo ondrop llama a una función, Arrastre(event):
Código explicado:
    - Llame a preventDefault() para evitar el manejo predeterminado de los datos por parte del navegador (el valor predeterminado es abrir como enlace al soltar)
    - Obtenga los datos arrastrados con el método dataTransfer.getData(). Este método devolverá cualquier dato que se haya establecido en el mismo tipo en el método setData()
    - Los datos arrastrados son el id del elemento arrastrado ("ObjetoArrastrar")
    - Anexar el elemento arrastrado en el elemento de colocación
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Almacenamiento web HTML; Mejor que las coockies.
Con el almacenamiento web, las aplicaciones web pueden almacenar datos localmente en el navegador del usuario.
Antes de HTML5, los datos de la aplicación tenían que almacenarse en cookies, incluidas en cada solicitud del servidor. El almacenamiento web es más seguro y grandes cantidades de datos se puede almacenar localmente, sin afectar el rendimiento del sitio web.
A diferencia de las cookies, el límite de almacenamiento es mucho mayor (al menos 5 MB) y la información nunca es transferido al servidor.
El almacenamiento web es por origen (por dominio y protocolo). Todas las páginas, desde una sola origin, puede almacenar y acceder a los mismos datos.
El almacenamiento web HTML proporciona dos objetos para almacenar datos en el cliente:
    - window.localStorage - Almacena datos sin fecha de caducidad
        El objeto localStorage almacena los datos sin fecha de caducidad. Los datos no se eliminará cuando se cierre el navegador y estará disponible al día, la semana o el año siguiente.
        Ejemplo explicado:
            - Cree un par nombre/valor localStorage con name="lastname" y value="Smith"
            - Recupere el valor de "lastname" e insértelo en el elemento con id="result"
    - window.sessionStorage - Almacena datos para una sesión (los datos se pierden cuando se cierra la pestaña del navegador)
        El objeto es igual al objeto localStorage, excepto que almacena los datos de una sola sesión. Los datos se eliminan cuando el usuario cierra el archivo pestaña específica del navegador.sessionStorage
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Un web worker es un JavaScript que se ejecuta en segundo plano, sin afectar al rendimiento de la página.
Al ejecutar secuencias de comandos en una página HTML, la página deja de responder hasta que finaliza la secuencia de comandos.
Un web worker es un JavaScript que se ejecuta en segundo plano, de forma independiente de otros scripts, sin afectar el rendimiento de la página. Puedes seguir haciendo lo que quieras: hacer clic, seleccionar cosas, etc., mientras el trabajador web se ejecuta en segundo plano.
Normalmente los web workers no se utilizan para scripts tan simples, sino para tareas más intensivas en CPU.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Un evento enviado por el servidor es cuando una página web recibe actualizaciones automáticamente de un servidor.
Esto también era posible antes, pero la página web tendría que preguntar si había alguna actualización disponible. Con los eventos enviados por el servidor, las actualizaciones se producen automáticamente.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-->