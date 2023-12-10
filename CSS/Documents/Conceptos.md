# CSS
Esta carpeta contiene un archivo principal con prácticas CSS e información útil.
<!-- 
    - CSS son las siglas de Cascading Style Sheets (Hojas de estilo en cascada)
    - CSS describe cómo se deben mostrar los elementos HTML en la pantalla, en papel, o en otros medios
    - CSS ahorra mucho trabajo. Puede controlar el diseño de Varias páginas web a la vez
    - Las hojas de estilo externas se almacenan en archivos CSS
-------------------------------------------------------------------------------INFORMACIÓN---------------------------------------------------------------------------------------------
CSS se utiliza para definir estilos para sus páginas web, incluido el diseño, la maquetación y variaciones en la visualización para diferentes dispositivos y tamaños de pantalla.
Una regla CSS consta de un selector y un bloque de declaración.
h1         {             color:      blue;   font-size:  15px    }
(Selector) (Declaración) (Propiedad) (Valor) (Propiedad) (Valor) (Declaración)
El selector apunta al elemento HTML al que desea aplicar estilo.
El bloque de declaración contiene una o más declaraciones separadas por punto y coma.
Cada declaración incluye un nombre de propiedad CSS y un valor, separados por dos puntos.
Varias declaraciones CSS se separan con punto y coma y declaración Los bloques están rodeados de llaves.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Un selector CSS selecciona los elementos HTML que quieren estilizar.
Los selectores CSS se utilizan para "encontrar" (o seleccionar) los elementos HTML que quieren estilizar.
Podemos dividir los selectores CSS en cinco categorías:
    - Selectores simples (seleccione elementos según el nombre, la identificación, la clase)
        - El selector id utiliza el atributo id de un elemento HTML para seleccionar un elemento específico.
        El id de un elemento es único dentro de una página, por lo que el selector id es acostumbrado ¡Selecciona un elemento único!
        Para seleccionar un elemento con un identificador específico, escriba un carácter de numeral (#), seguido de El identificador del elemento.
        - El selector de clase selecciona elementos HTML con un atributo de clase específico.
        Para seleccionar elementos con una clase específica, escriba un carácter de punto (.) seguido de la opción nombre de la clase.
            También puede especificar que solo los elementos HTML específicos se vean afectados por una clase.
    - Selectores del combinador (seleccione elementos basados en una relación específica entre ellos)
        - El selector de agrupación selecciona todos los elementos HTML con el mismo estilo Definiciones.
    - Selectores de pseudoclase (seleccionar elementos en función de un estado determinado)
    - Selectores de pseudoelementos (seleccionar y aplicar estilo a una parte de un elemento)
    - Selectores de atributos (seleccionar elementos en función de un atributo o valor de atributo)
    El selector universal (*) selecciona todo el HTML elementos de la página.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Con un hoja de estilo externa, puede cambiar el aspecto de todo un sitio web cambiando ¡Solo un archivo!
Se puede utilizar una hoja de estilo interna si una sola página HTML tiene un estilo único.
Se puede utilizar un estilo en línea para aplicar un estilo único a un solo elemento.
Si se han definido algunas propiedades para el mismo selector (elemento) en diferentes hojas de estilo, Se utilizará el valor de la última hoja de estilo leída.
El archivo .css externo no debe contener ninguna etiqueta HTML.
No agregue un espacio entre el valor de la propiedad (20) y la unidad (px)
margin: 20 px;(MAL) margin: 20px;(BIEN)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Los comentarios se utilizan para explicar el código y pueden ayudar cuando edite el código fuente en una fecha posterior.
Los navegadores ignoran los comentarios.
/*Se comenta así*/
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Los colores se especifican mediante nombres de color predefinidos o valores RGB, HEX, HSL, RGBA, HSLA.
    - Un valor de color RGB representa la luz ROJA, VERDE y AZUL.
        Cada parámetro (rojo, verde y azul) define la intensidad del color entre 0 y 255.
        Los valores de color RGBA son una extensión de los valores de color RGB con un canal alfa - que especifica la opacidad de un color.
    - Un color hexadecimal se especifica con: #RRGGBB, donde el RR (rojo), GG (verde) y BB (azul) enteros hexadecimales especifican los componentes de el color.
        Donde rr (rojo), gg (verde) y bb (azul) son valores hexadecimales entre 00 y ff (igual que el decimal 0-255).
        A veces verás un código hexadecimal de 3 dígitos en la fuente CSS.
        El código hexadecimal de 3 dígitos es una abreviatura de algunos códigos hexadecimales de 6 dígitos.
    - HSL significa tono, saturación y luminosidad.
        El tono es un grado en la rueda de colores de 0 a 360. 0 es rojo, 120 es verde y 240 es azul.
        La saturación es un valor porcentual. 0% significa un tono de gris y 100% es el color completo.
        La ligereza también es un porcentaje. El 0% es negro, el 50% no es ni claro ni oscuro, el 100% es blanco
        El parámetro alfa es un número entre 0.0 (totalmente transparente) y 1.0 (nada transparente):
CSS/HTML admite 140 nombres de colores estándar.
Puede establecer el color de fondo de los elementos HTML:
Puede establecer el color del texto:
Puede establecer el color de los bordes:
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Las propiedades de fondo CSS se utilizan para agregar efectos de fondo para los elementos.
La propiedad especifica el color de fondo de un elemento.background-color
La propiedad especifica la opacidad/transparencia de un elemento. Puede tomar un valor de 0.0 a 1.0. Cuanto menor sea el valor, más transparente:opacity
Si no desea aplicar opacidad a los elementos secundarios, utilice valores de color RGBA. En el ejemplo siguiente se establece la opacidad del color de fondo y no del texto:
La propiedad especifica una imagen que se va a utilizar como fondo de un elemento.background-image
De forma predeterminada, la imagen se repite para que cubra todo el elemento.
Algunas imágenes deben repetirse solo horizontal o verticalmente, o se verán extrañas, así:
La propiedad se utiliza para Especifique la posición de la imagen de fondo.background-position
La propiedad especifica si la imagen de fondo debe desplazarse o fijarse (no se desplazará con el botón resto de la página):background-attachment
Para acortar el código, también es posible especificar todas las propiedades de fondo en una sola propiedad única. Esto se denomina propiedad abreviada.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
La propiedad especifica el tipo de borde que se va a mostrar.border-style
Se permiten los siguientes valores:
    - dotted - Define un borde punteado
    - dashed - Define un borde discontinuo
    - solid - Define un borde sólido
    - double - Define un doble borde
    - groove - Define un borde ranurado 3D. El efecto depende del valor del color del borde
    - ridge - Define un borde estriado 3D. El efecto depende del valor del color del borde
    - inset - Define un borde de inserción 3D. El efecto depende del valor del color del borde
    - outset - Define un borde de inicio 3D. El efecto depende del valor del color del borde
    - none - No define ningún borde
    - hidden - Define un borde oculto
Ninguna de las OTRAS propiedades de borde CSS (de las que se enseñará a continuación) tendrá NINGÚN efecto a menos que se establezca la propiedad.border-style
La propiedad especifica el ancho de los cuatro bordes.border-width
El ancho se puede establecer como un tamaño específico (en px, pt, cm, em, etc.) o usando Uno de los tres valores predefinidos: thin, medium o thick:
La propiedad puede tener de uno a cuatro valores (para el borde superior, el borde derecho, borde inferior y el borde izquierdo):border-width
La propiedad se utiliza para establecer el color de los cuatro bordes.border-color
La propiedad puede tener de uno a cuatro valores (para el borde superior, el borde derecho, el borde inferior y el borde izquierdo). border-color
A partir de los ejemplos de las páginas anteriores, ha visto que es posible especificar un borde diferente para cada lado.
En CSS, también hay propiedades para especificar cada uno de los bordes (top, derecha, abajo e izquierda):
Como viste en la página anterior, hay muchas propiedades a tener en cuenta cuando se trata de fronteras.
Para acortar el código, también es posible especificar todas las propiedades de borde individuales en una propiedad.
La propiedad es una propiedad abreviada para las siguientes propiedades de borde individuales:border
    - border-width
    - border-style (obligatorio)
    - border-color
La propiedad se utiliza para agregar bordes redondeados a un elemento:border-radius
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Los márgenes se utilizan para crear espacio alrededor de los elementos, fuera de los bordes definidos.
Con CSS, tienes control total sobre los márgenes. Hay propiedades para establecer el margen de cada lado de un elemento (superior, derecho, inferior e izquierdo).
Todas las propiedades de margen pueden tener los siguientes valores:
    - Automático: el navegador calcula el margen
    - Longitud: especifica un margen en px, pt, cm, etc.
    - % - especifica un margen en % de la anchura del elemento contenedor
    - inherit: especifica que el margen debe heredarse del elemento primario
Para acortar el código, es posible especificar todas las propiedades de margen en una propiedad.
La propiedad es una propiedad abreviada para las siguientes propiedades de margen individuales:margin
    Si la propiedad tiene cuatro valores:margin
    margin: 25px 50px 75px 100px;
        - El margen superior es de 25px
        - El margen derecho es de 50px
        - El margen inferior es de 75px
        - El margen izquierdo es de 100px
    Si la propiedad tiene tres valores:margin
    margin: 25px 50px 75px;
        - El margen superior es de 25px
        - Los márgenes derecho e izquierdo son de 50px
        - El margen inferior es de 75px
    Si la propiedad tiene dos valores:margin
    margin: 25px 50px;
        - Los márgenes superior e inferior son de 25px
        - Los márgenes derecho e izquierdo son de 50px
    Si la propiedad tiene un valor:margin
    margen: 25px;
        - Los cuatro márgenes son de 25px
Puede establecer la propiedad margin en para centrar horizontalmente el elemento dentro de su contenedor.auto
A veces, dos márgenes se colapsan en un solo margen.
Los márgenes superior e inferior de los elementos a veces se contraen en un solo margen que es igual al mayor de los dos márgenes.
¡Esto no sucede en los márgenes izquierdo y derecho! ¡Solo márgenes superior e inferior!
Por ejemplo, el elemento <h1> tiene un margen inferior de 50px y El <h2> tiene un margen superior establecido en 20px.
El sentido común parecería sugerir que el margen vertical entre el <h1> y el <h2> sería un total de 70px (50px + 20px). Pero debido al colapso de los márgenes, El margen real termina siendo de 50px.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
El padding o relleno se utiliza para crear espacio alrededor del contenido de un elemento, dentro de los bordes definidos.
Las propiedades CSS se utilizan para generar espacio alrededor el contenido de un elemento, dentro de los bordes definidos.padding
Con CSS, tienes control total sobre el relleno. Hay propiedades para establecer el relleno de cada lado de un elemento (superior, derecho, inferior e izquierdo).
Todas las propiedades de relleno pueden tener los siguientes valores:
    - Longitud: especifica un relleno en PX, PT, CM, etc.
    - % - especifica un relleno en % de la anchura del elemento que lo contiene
    - inherit: especifica que el relleno debe heredarse del elemento primario
No se permiten valores negativos.
    Si la propiedad tiene cuatro valores:padding
    padding: 25px 50px 75px 100px;
        - El relleno superior es de 25px
        - El relleno derecho es de 50px
        - El relleno inferior es de 75px
        - El relleno izquierdo es de 100px
    si la propiedad tiene tres valores:padding
    padding: 25px 50px 75px;
        - El relleno superior es de 25px
        - Los rellenos derecho e izquierdo son de 50px
        - El relleno inferior es de 75px
    Si la propiedad tiene dos valores:padding
    relleno: 25px 50px;
        - Los rellenos superior e inferior son de 25px
        - Los rellenos derecho e izquierdo son de 50px
    Si la propiedad tiene un valor:padding
    relleno: 25px;
        - Los cuatro rellenos son de 25px
La propiedad CSS especifica el ancho del área de contenido del elemento. El área de contenido es la parte dentro del relleno, el borde y el margen de un elemento (el modelo de caja).width
Por lo tanto, si un elemento tiene un ancho especificado, el relleno agregado a ese elemento se añadirá a la anchura total del elemento. A menudo, este es un resultado indeseable.
Por ejemplo, el elemento <div> tiene un ancho de 300px. Sin embargo, el ancho real del elemento <div> será de 350px (300px + 25px de relleno izquierdo + 25px de relleno derecho):
Para mantener el ancho en 300px, sin importar la cantidad de relleno, puedes usar la propiedad box-sizing. Esto hace que el elemento mantenga su ancho real; si Si aumenta el relleno, el espacio de contenido disponible disminuirá.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
El CSS y las propiedades se utilizan para establecer el altura y anchura de un elemento.heightwidth
La propiedad CSS se utiliza para establecer el ancho máximo de un elemento.max-width
Las propiedades height y width no incluyen relleno, bordes ni márgenes. Establece la altura/anchura del área dentro del relleno, el borde y el margen de el elemento.
Las propiedades y puede tener los siguientes valores:heightwidth
    - auto - Este es el valor predeterminado. El navegador Calcula la altura y la anchura
    - length - Define la altura/anchura en px, cm, etc.
    - % - Define la altura/anchura en porcentaje de El bloque contenedor
    - initial - Establece la altura/anchura en su Valor predeterminado
    - inherit - La altura/anchura será heredado de su valor primario
La propiedad se utiliza para establecer el ancho máximo de un elemento.max-width
Se puede especificar en valores de longitud, como px, cm, etc., o en porcentaje (%) de la que contiene, o se establece en none (esto es predeterminado. Significa que no hay un ancho máximo).max-width
El problema con lo anterior ocurre cuando la ventana del navegador es más pequeña que el ancho de el elemento (500px). A continuación, el navegador añade una barra de desplazamiento horizontal a la página.<div>
En su lugar, el uso en esta situación mejorará el manejo de las ventanas pequeñas por parte del navegador.max-width
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
En CSS todos los elementos HTML pueden ser considerados como cajas.
En CSS, el término "modelo de caja" se utiliza cuando se habla de diseño y maquetación.
El modelo de caja CSS es esencialmente una caja que envuelve cada elemento HTML. Consta de: contenido, relleno, bordes y márgenes. La siguiente imagen ilustra el modelo de caja:
Explicación de las diferentes partes:
    - Contenido: el contenido del cuadro, donde aparecen el texto y las imágenes.
    - Padding: despeja un área alrededor del contenido. El acolchado es transparente
    - Borde: un borde que rodea el padding y el contenido
    - Margen: despeja un área fuera del borde. El margen es transparente
Para establecer correctamente la anchura y la altura de un elemento en todos los navegadores, es necesario saber cómo funciona el modelo de caja.
Al establecer las propiedades width y height de un elemento con CSS, solo tienes que establecer el ancho y el alto del área de contenido. Para Calcular el ancho y alto total de un elemento, también debes incluir el relleno y los bordes.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Un contorno u outline es una línea dibujada fuera del borde del elemento.
Un contorno es una línea que se dibuja alrededor de los elementos, FUERA de los bordes, para hacer que el elemento "se destaque".
CSS tiene las siguientes propiedades de esquema:
    - outline-style
    - outline-color
    - outline-width
    - outline-offset
    - outline
¡El contorno difiere de los bordes! A diferencia del borde, el contorno es dibujado fuera del borde del elemento, y puede superponerse a otro contenido. Además, el outline NO forma parte de las dimensiones del elemento; la anchura y la altura totales del elemento no se ve afectado por la anchura del contorno.
    La propiedad especifica el estilo del contorno, y puede tener uno de los siguientes valores:outline-style
    - dotted - Define un contorno punteado
    - dashed - Define un contorno discontinuo
    - solid - Define un contorno sólido
    - double - Define un doble contorno
    - groove - Define un contorno ranurado en 3D
    - ridge - Define un contorno estriado en 3D
    - inset - Define un contorno de inserción 3D
    - outset - Define un contorno inicial 3D
    - none - No define ningún contorno
    - hidden - Define un contorno oculto
Ninguna de las otras propiedades de esquema (de las que se enseñará a continuación) tendrá NINGÚN efecto a menos que se establezca la propiedad.outline-style
La propiedad especifica el ancho del contorno, y puede tener uno de los siguientes valores:outline-width
    - thin (típicamente 1px)
    - medium (normalmente 3px)
    - thick (normalmente 5px)
    Un tamaño específico (en px, pt, cm, em, etc.)
La propiedad se utiliza para establecer el color del contorno.outline-color
La propiedad es una propiedad abreviada de Establecer las siguientes propiedades de esquema individuales:outline
    - outline-width
    - outline-style (obligatorio)
    - outline-color
La propiedad añade espacio entre un contorno y el borde/borde de un elemento. El espacio entre un outline y su contorno es transparente.outline-offset
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
CSS tiene muchas propiedades para dar formato al texto.
La propiedad se utiliza para establecer el color del texto. El color se especifica mediante:color
El alto contraste es muy importante para las personas con problemas de visión. Por lo tanto, asegúrese siempre de que el contraste entre el color del texto y el color de fondo (o imagen de fondo) es bueno!
Las propiedades para alinear texto son:
    - text-align
        La propiedad se utiliza para establecer la alineación horizontal de un texto.text-align
        Un texto puede estar alineado a la izquierda o a la derecha, centrado o justificado.
        En el ejemplo siguiente se muestra el texto alineado al centro y alineado a la izquierda y a la derecha (La alineación a la izquierda es la predeterminada si la dirección del texto es de izquierda a derecha y a la derecha La alineación es predeterminada si la dirección del texto es de derecha a izquierda):
            Cuando la propiedad se establece en "justify", cada línea es estirado de modo que cada línea tenga el mismo ancho, y los márgenes izquierdo y derecho sean Recto (como en revistas y periódicos)
    - text-align-last
        La propiedad especifica cómo alinear la última línea de un texto.text-align-last
    - direction
    - unicode-bidi
        Las propiedades direction y unicode-bidi se pueden usar para cambiar la dirección del texto de un elemento: 
    - vertical-align
        La propiedad establece la alineación vertical de un elemento.vertical-align
        Establezca la alineación vertical de una imagen en un texto:
 -->