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
La propiedad se utiliza para agregar Una línea de decoración a texto.text-decoration-line
Puede combinar más de un valor, como sobrelínea y subrayado para mostrar líneas tanto por encima como por debajo de un texto.
No se recomienda subrayar el texto que no es un enlace, ya que esto a menudo confunde al lector.
La propiedad se utiliza para Establece el color de la línea de decoración.text-decoration-color
La propiedad se utiliza para Establece el estilo de la línea de decoración.text-decoration-style
La propiedad se utiliza para Establece el grosor de la línea de decoración.text-decoration-thickness
    La propiedad es una taquigrafía Propiedad para:text-decoration
    - text-decoration-line (obligatorio)
    - text-decoration-color (Opcional)
    - text-decoration-style (Opcional)
    - text-decoration-thickness (Opcional)
La propiedad se utiliza para especificar letras mayúsculas y minúsculas en un texto.text-transform
Se puede usar para convertir todo en letras mayúsculas o minúsculas, o Escribe en mayúscula la primera letra de cada palabra:
La propiedad se utiliza para especificar la sangría de la primera línea de un texto:text-indent
La propiedad se utiliza para especificar el espacio entre los caracteres de un texto.letter-spacing
La propiedad se utiliza para especificar el espacio entre líneas:line-height
La propiedad se utiliza para especificar el espacio entre las palabras de un texto.word-spacing
La propiedad especifica cómo se controlan las líneas dentro de un elemento.white-space
La propiedad agrega sombra al texto.text-shadow
En su uso más simple, solo se especifica la sombra horizontal (2px) y la sombra vertical (2px):
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Elegir la fuente correcta tiene un gran impacto en la forma en que los lectores experimentan un sitio web.
La fuente correcta puede crear una identidad fuerte para tu marca.
Es importante usar una fuente que sea fácil de leer. La fuente agrega valor a su texto. También es importante elegir el color y el tamaño del texto correctos para la fuente.
En CSS hay cinco familias de fuentes genéricas:
    - Las fuentes serif tienen un pequeño trazo en los bordes de cada letra. Crean una sensación de formalidad y elegancia.
    - Las fuentes sans-serif tienen líneas limpias (sin trazos pequeños adjuntos). Crean un aspecto moderno y minimalista.
    - Fuentes monoespaciadas: aquí todas las letras tienen el mismo ancho fijo. Crean un aspecto mecánico.
    - Las fuentes cursivas imitan la escritura humana.
    - Las fuentes de fantasía son fuentes decorativas/lúdicas.
En CSS, usamos la propiedad para especificar la fuente de un texto.font-family
La propiedad debe contener varios nombres de fuente como un sistema de "respaldo", para garantizar la máxima compatibilidad entre navegadores/sistemas operativos. Comience con la fuente que desee y termine con una familia genérica (para permitir que el navegador elija una fuente similar en la familia genérica, si no hay otras fuentes disponible). Los nombres de las fuentes deben estar separados por comas.
Si el nombre de la fuente es más de una palabra, debe estar entre comillas, como: "Times New Roman".
Las fuentes seguras para la Web son fuentes que se instalan universalmente en todos los navegadores y dispositivos.
Sin embargo, no existen fuentes 100% completamente seguras para la web. Siempre hay un Posibilidad de que no se encuentre una fuente o no esté instalada correctamente.
Por lo tanto, es muy importante utilizar siempre fuentes alternativas.
Esto significa que debe agregar una lista de "fuentes de copia de seguridad" similares en la propiedad. Si el La primera fuente no funciona, el navegador probará la siguiente, y la siguiente, y así sucesivamente. Termine siempre la lista con un nombre genérico de familia de fuentes.font-family
La siguiente lista son las mejores fuentes seguras para la web para HTML y CSS:
    - Arial (sans-serif)
    - Verdana (sans-serif)
    - Tahoma (sans-serif)
    - Trebuchet MS (sans-serif)
    - Times New Roman (serif)
    - Georgia (serif)
    - Garamond (serif)
    - Courier New (monoespaciado)
    - Brush Script MT (cursiva)
La propiedad se usa principalmente para especificar texto en cursiva.font-style
Esta propiedad tiene tres valores:
    - normal: el texto se muestra normalmente
    - italic - El texto se muestra en cursiva
    - oblique - El texto está "inclinado" (oblicuo es muy similar a la cursiva, pero menos compatible)
La propiedad especifica el grosor de una fuente:font-weight
La propiedad especifica si un texto debe o no se mostrará en una fuente de versalitas.font-variant
    En una fuente de versalitas, todas las letras minúsculas se convierten en mayúsculas letras. Sin embargo, las letras mayúsculas convertidas aparecen en un tamaño de fuente más pequeño que las letras mayúsculas originales del texto.
La propiedad establece el tamaño del texto.font-size
Ser capaz de gestionar el tamaño del texto es importante en el diseño web. Sin embargo, usted no debe usar ajustes de tamaño de fuente para hacer que los párrafos parezcan encabezados, o Los encabezados parecen párrafos.
Utilice siempre las etiquetas HTML adecuadas, como <h1> - <h6> para los encabezados y <p> para Párrafos.
El valor font-size puede ser un tamaño absoluto o relativo.
    Tamaño absoluto:
        Establece el texto en un tamaño especificado
        No permite al usuario cambiar el tamaño del texto en todos los navegadores (malo por razones de accesibilidad)
        El tamaño absoluto es útil cuando se conoce el tamaño físico de la salida
    Tamaño relativo:
        Establece el tamaño relativo a los elementos circundantes
        Permite al usuario cambiar el tamaño del texto en los navegadores
Si usa píxeles, aún puede usar la herramienta de zoom para cambiar el tamaño de toda la página.
Para permitir a los usuarios cambiar el tamaño del texto (en el menú del navegador), muchos Los desarrolladores usan EM en lugar de píxeles.
1em es igual al tamaño de fuente actual. El tamaño de texto predeterminado en los navegadores es 16px. Por lo tanto, el tamaño predeterminado de 1em es de 16px.
El tamaño se puede calcular de píxeles a em usando esta fórmula: pixels/16=em
En el ejemplo anterior, el tamaño del texto en em es el mismo que en el ejemplo anterior en píxeles. Sin embargo, con el tamaño em, es posible ajustar el tamaño del texto en todos los navegadores.
Desafortunadamente, todavía hay un problema con las versiones anteriores de Internet Explorer. El texto se vuelve más grande de lo que debería cuando se hace más grande, y más pequeño de lo que debería cuando se hace más pequeño.
La solución que funciona en todos los navegadores es establecer un tamaño de fuente predeterminado en Porcentaje para el elemento <body>:
El tamaño del texto se puede establecer con una unidad, lo que significa el "ancho de la ventana gráfica".vw
De esa manera, el tamaño del texto seguirá el tamaño de la ventana del navegador:
Viewport es el tamaño de la ventana del navegador. 1VW = 1% del ancho de la ventana gráfica. Si la ventana gráfica tiene 50 cm de ancho, 1vw es 0,5 cm
Si no desea utilizar ninguna de las fuentes estándar en HTML, puede utilizar Google Fonts.
Las fuentes de Google son de uso gratuito y tienen más de 1000 fuentes para elegir.
¡Solicitar varias fuentes puede ralentizar sus páginas web! Así que ten cuidado con eso.
Por supuesto, puedes diseñar Google Fonts como quieras, ¡con CSS!
Las buenas combinaciones de fuentes son esenciales para un gran diseño.
Para acortar el código, también es posible especificar todas las propiedades de fuente individuales en una propiedad.
La propiedad es una propiedad abreviada para:font
    - font-style
    - font-variant
    - font-weight
    - font-size/line-height
    - font-family
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
La forma más sencilla de añadir un icono a tu página HTML es con una biblioteca de iconos, como Font Awesome.
Todos los iconos de las bibliotecas de iconos que aparecen a continuación son vectores escalables que pueden personalizarse con CSS (tamaño, color, sombra, etc.)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Con CSS, los enlaces se pueden diseñar de muchas maneras diferentes.
Los enlaces se pueden diseñar con cualquier propiedad CSS
Además, los enlaces se pueden diseñar de manera diferente según el estado en el que se encuentren.
Los cuatro estados de enlace son:
    - a:link - Un enlace normal y no visitado
    - a:visited - Un enlace que el usuario ha visitado
    - a:hover - Un enlace cuando el usuario pasa el ratón por encima de él
    - a:active - Un enlace en el momento en que se hace clic en él
Al establecer el estilo para varios estados de vínculo, hay algunas reglas de orden:
a:hover DEBE ir después de a:link y a:visited
a:active DEBE venir después de a:hover
La propiedad se utiliza principalmente para eliminar subrayados de los enlaces:text-decoration
La propiedad se puede utilizar para especificar un color de fondo para los vínculos:background-color
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
En HTML, hay dos tipos principales de listas:
    - Listas desordenadas (<ul>): los elementos de la lista están marcados con viñetas
    - Listas ordenadas (<ol>): los elementos de la lista están marcados con números o letras
Las propiedades de la lista CSS le permiten:
    - Establecer diferentes marcadores de elementos de lista para listas ordenadas
    - Establecer diferentes marcadores de elementos de lista para listas desordenadas
    - Establecer una imagen como marcador de elemento de lista
    - Agregar colores de fondo a listas y elementos de lista
La propiedad especifica el tipo de elemento de lista marcador.list-style-type
Algunos de los valores son para listas desordenadas y otros para listas ordenadas.
La propiedad especifica una imagen como lista Marcador de objeto:list-style-image
La propiedad especifica la posición de los marcadores de elementos de lista (viñetas).list-style-position
    "list-style-position: outside;" significa que las viñetas estarán fuera el elemento de lista. El inicio de cada línea de un elemento de lista se alineará verticalmente. Este es el valor predeterminado:
    "list-style-position: inside;" significa que las viñetas estarán dentro el elemento de lista. Como es parte del elemento de la lista, será parte del texto y Inserta el texto al principio:
La propiedad también Se puede ser  utiliza para eliminar los marcadores/viñetas. Tenga en cuenta que la lista también tiene un margen predeterminado y relleno. Para eliminar esto, agregue a <ul> o <ol>:list-style-type:none margin:0 padding:0
La propiedad es una propiedad abreviada. Se utiliza para establecer todos los valores Enumere las propiedades en una declaración:list-style
Cuando se utiliza la propiedad abreviada, el orden de los valores de propiedad es:
    - list-style-type (si se especifica una imagen de estilo de lista, El valor de esta propiedad se mostrará si la imagen por alguna razón no se puede mostrar)
    - list-style-position (especifica si los marcadores de elementos de lista deben aparecer dentro o fuera del flujo de contenido)
    - list-style-image (especifica una imagen como elemento de lista marcador)
Si falta uno de los valores de propiedad anteriores, el valor predeterminado de la propiedad Se insertará la propiedad que falta, si la hubiera.
También podemos estilizar listas con colores, para que se vean un poco más interesante.
Cualquier cosa que se agregue a la etiqueta <ol> o <ul>, afecta a toda la lista, mientras que Las propiedades añadidas a la etiqueta <li> afectarán a los elementos individuales de la lista:
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
El aspecto de una tabla HTML se puede mejorar en gran medida con CSS:
Para especificar los bordes de la tabla en CSS, utilice la propiedad.border
Si necesita una tabla que abarque toda la pantalla (ancho completo), agregue a la etiqueta<Tabla> la propiedad:width: 100%
La propiedad establece si los bordes de la tabla debe contraerse en un solo borde:border-collapse
La anchura y la altura de una tabla se definen mediante las propiedades y.widthheight
La propiedad establece la alineación horizontal (como izquierda, derecha o centro) del contenido en <th> o <td>.text-align
De forma predeterminada, el contenido de los elementos <th> están alineados al centro y el El contenido de los elementos <td> se alinea a la izquierda.
Para alinear al centro el contenido de los elementos <td> también, use :text-align: center
La propiedad establece la alineación vertical (como superior, inferior o central) del contenido en <th> o <td>.vertical-align
De forma predeterminada, la alineación vertical del contenido de una tabla es media (tanto para la <th> y <td> elementos)
Para controlar el espacio entre el borde y el contenido de una tabla, utilice la propiedad en <td> y <th> elementos:padding
Utilice el selector de <tr> para resaltar las filas de la tabla con el ratón sobre::hover
Una tabla adaptable mostrará una barra de desplazamiento horizontal si la pantalla es demasiado pequeña para mostrar el contenido completo:
Agregue un elemento contenedor (como <div>) alrededor del elemento <table> para que responda:overflow-x:auto
En OS X Lion (en Mac), las barras de desplazamiento están ocultas de forma predeterminada y solo se muestran cuando se usan (aunque se haya establecido "overflow:scroll").
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
La propiedad display es la propiedad CSS más importante para controlar el diseño.
La propiedad especifica si se muestra un elemento y cómo se muestra.display
Cada elemento HTML tiene un valor de visualización predeterminado según el tipo de elemento
Un elemento de nivel de bloque siempre comienza en una nueva línea y ocupa todo el ancho disponible (se extiende hacia la izquierda y hacia la derecha tanto como puede).
Un elemento en línea no comienza en una nueva línea y solo ocupa el ancho necesario.
display: none; se usa comúnmente con JavaScript para ocultar y mostrar elementos sin eliminarlos y volver a crearlos.Como se mencionó, cada elemento tiene un valor de visualización predeterminado. Sin embargo, puede Anule esto.
Cambiar un elemento en línea a un elemento de bloque, o viceversa, puede ser útil para Hacer que la página se vea de una manera específica y seguir los estándares de la web.
Un ejemplo común es la creación de elementos en línea para menús horizontales:<li>
Establecer la propiedad display de un elemento solo cambia la forma en que se muestra el elemento, NO qué tipo de elemento es. Por lo tanto, no se permite un elemento en línea con para tener otros elementos de bloque dentro de él
La ocultación de un elemento se puede hacer estableciendo la propiedad en . El elemento se ocultará y la página se mostrará como si el elemento no lo estuviera allí:displaynone
también oculta un elemento.
Sin embargo, el elemento seguirá ocupando el mismo espacio como antes. El elemento estará oculto, pero seguirá afectando al diseño:
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Como se mencionó en el capítulo anterior; Un elemento de nivel de bloque siempre ocupa todo el ancho disponible (se extiende hacia la izquierda y hacia la derecha tanto como puede).
Establecer el width de un elemento a nivel de bloque evitará que se estire hasta los bordes de su contenedor. A continuación, puede establecer el parámetro márgenes a auto, para centrar horizontalmente el elemento dentro de su contenedor. El ocupará el ancho especificado y el espacio restante se dividirá equitativamente entre los dos márgenes:
El problema con lo anterior ocurre cuando la ventana del navegador está más pequeño que el ancho de el elemento. A continuación, el navegador añade una barra de desplazamiento horizontal a la página.<div>
Usar en su lugar, max-width en esta situación, mejorará el Manejo de ventanas pequeñas por parte del navegador. Esto es importante a la hora de hacer que un sitio sea utilizable En dispositivos pequeños: NO FUNCIONA CON %
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
La propiedad especifica el tipo de método de posicionamiento utilizado para un elemento.position
Hay cinco valores de posición diferentes:
    - static
        Los elementos HTML se colocan estáticos de forma predeterminada.
        Los elementos posicionados estáticamente no se ven afectados por las propiedades superior, inferior, izquierda y derecha.
        Un elemento con no se coloca de ninguna manera especial; Lo es Siempre posicionado de acuerdo con el flujo normal de la página:position: static;
    - relative
        Un elemento con position: relative; se coloca en relación con su posición normal.
        Si se establecen las propiedades superior, derecha, inferior e izquierda de un elemento con una posición relativa, se producirá para ser ajustado lejos de su posición normal. El resto del contenido no se ajustará para que quepa en ningún hueco dejado por el elemento.
    - fixed
        Un elemento con se coloca en relación con la ventana gráfica, lo que significa que siempre permanece en el mismo lugar incluso si se desplaza la página. La parte superior, Las propiedades right, bottom e left se utilizan para colocar el elemento.position: fixed;
        Un elemento fijo no deja un hueco en la página donde normalmente se habría ubicado.
    - absolute
        Un elemento con se coloca en relación con el antecesor posicionado más cercano (en lugar de colocarse en relación con la ventana gráfica, como fijo).position: absolute;
        Sin embargo; Si un elemento posicionado en absoluto no tiene antecesores posicionados, Utiliza el cuerpo del documento y se mueve junto con el desplazamiento de la página.
        Los elementos posicionados en posición absoluta se eliminan del flujo normal y pueden superponerse elementos.
    - sticky
        Un elemento con se coloca en función de la posición de desplazamiento del usuario.position: sticky;
        Un elemento adhesivo alterna entre relativefixed y fixed, dependiendo de la posición de desplazamiento. Se coloca en relación hasta que se alcanza una posición de desplazamiento determinada en la ventana gráfica, luego se "pega" en su lugar (como position:fixed).
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
La propiedad especifica el parámetro Orden de pila de un elemento.z-index
Cuando los elementos están colocados, pueden superponerse a otros elementos.
La propiedad especifica el orden de pila de un elemento (qué elemento debe colocarse delante o detrás de los demás).z-index
Un elemento puede tener un orden de pila positivo o negativo:
solo funciona en elementos posicionados (posición: absoluta, position: relative, position: fixed o position: sticky) y elementos flexibles (elementos que son elementos secundarios directos de display: elementos flexibles).
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
La propiedad CSS controla lo que sucede con contenido que es demasiado grande para caber en un área.overflow
La propiedad tiene los siguientes valores:overflow
    - visible -Predeterminado. El desbordamiento no se recorta. El contenido se representa fuera del cuadro del elemento
    - hidden - El desbordamiento se recorta y el resto del contenido será invisible
    - scroll - El desbordamiento se recorta y se agrega una barra de desplazamiento para ver el resto del contenido
    - auto - Similar a , pero agrega barras de desplazamiento solo cuando es necesarioscroll
La propiedad solo funciona para elementos de bloque con una altura especificada.overflow
Las propiedades y especifican si se debe cambiar el desbordamiento de contenido solo horizontal o verticalmente (o Ambos):overflow-xoverflow-y
overflow-x Especifica qué hacer con los bordes izquierdo y derecho de la contenido.
especifica qué hacer con los bordes superior e inferior de la contenido.overflow-y
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
La propiedad CSS especifica cómo debe flotar un elemento.float
La propiedad CSS Especifica qué elementos pueden flotar junto al elemento borrado y en qué lado.clear
La propiedad se utiliza para Posicionamiento y formato del contenido, por ejemplo, dejar que una imagen flote a la izquierda del texto en un contenedor.float
El inmueble puede tener uno de los siguientes valores:float
    - left - El elemento flota a la izquierda de su contenedor
    - right - El elemento flota a la derecha de su contenedor
    - none - El elemento no flota (se mostrará justo donde aparece en el texto). Este es el valor predeterminado
    - inherit - El elemento hereda el valor float de su padre
En su uso más simple, la propiedad se puede usar para ajustar texto alrededor de imágenes.float
Cuando usamos la propiedad, y queremos El siguiente elemento a continuación (no a la derecha ni a la izquierda), tendremos que usar la propiedad.floatclear
La propiedad especifica lo que debería suceder con el elemento que está al lado de un elemento flotante.clear
El inmueble puede tener uno de los siguientes valores:clear
    - none - El elemento no se empuja hacia abajo elementos flotantes a la izquierda o a la derecha. Este es el valor predeterminado
    - left - El elemento se empuja hacia abajo a la izquierda Elementos flotantes
    - right - El elemento se empuja hacia abajo Elementos flotantes a la derecha
    - both - El elemento se empuja debajo de ambos Elementos flotantes izquierdo y derecho
    - inherit - El elemento hereda el valor clear de su padre
Al borrar flotantes, debe hacer coincidir el clear con el float: Si un elemento se desplaza hacia la izquierda, luego debe despejar hacia la izquierda. Tu elemento flotante seguirá flotando, pero el elemento borrado aparecerá debajo de él en la web página.
Si un elemento flotante es más alto que el elemento contenedor, se "desbordará" fuera de su contenedor. A continuación, podemos añadir un truco clearfix a Resuelva este problema:
Puede crear fácilmente tres cajas flotantes una al lado de la otra. Sin embargo, cuando agrega algo que agranda el ancho de cada cuadro (por ejemplo, relleno o bordes), el cuadro se romperá. La propiedad nos permite incluir el relleno y el borde en el ancho (y alto) total de la caja, asegurándonos de que el relleno permanezca dentro de la caja y que no se rompa.box-sizing
En el ejemplo anterior, aprendió a hacer flotar cajas una al lado de la otra con el mismo ancho. Sin embargo, no es fácil crear cajas flotantes con alturas iguales. Una solución rápida sin embargo, es establecer una altura fija
Sin embargo, esto no es muy flexible. Está bien si puede garantizar que las cajas siempre tendrán la misma cantidad de contenido. Pero muchas veces, el contenido no es el mismo. Si intentas el ejemplo anterior en un teléfono móvil, verás que el segundo El contenido de la caja se mostrará fuera de la caja. Aquí es donde CSS3 Flexbox resulta útil, ya que puede estirarse automáticamente Las cajas deben ser tan largas como la caja más larga:
También puede usarlo con una lista de hipervínculos para crear un menú horizontal:float
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
En comparación con display: inline, el principal diferencia es que permite para establecer una anchura y una altura en el elemento.display: inline-block
Además, con display: inline-block, se respetan los márgenes/rellenos superior e inferior, pero con ellos no lo son. display: inline
Un uso común es mostrar los elementos de la lista horizontalmente en lugar de verticalmente.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Para centrar horizontalmente un elemento de bloque (como <div>), use margin: auto;
Establecer el ancho del elemento evitará que se extienda hacia el bordes de su contenedor.
A continuación, el elemento ocupará el ancho especificado y el espacio restante se dividirá a partes iguales entre los dos márgenes:
La alineación central no tiene ningún efecto si no se establece la propiedad (o establecido en 100%).width
Para centrar el texto dentro de un elemento, use text-align: center;
Para centrar una imagen, establezca los márgenes izquierdo y derecho y conviértala en un elemento:autoblock
Un método para alinear elementos es utilizar:position: absolute;
Hay muchas formas de centrar un elemento verticalmente en CSS. Una solución simple es usar arriba y abajo:padding
Si y no son opciones, otra solución es usar el posicionamiento y la propiedad:paddingline-heighttransform
También puedes usar flexbox para centrar las cosas. Solo tenga en cuenta que flexbox no es compatible con IE10 y versiones anteriores:
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Un selector CSS puede contener más de un selector simple. Entre lo simple selectores, podemos incluir un combinador.
Hay cuatro combinadores diferentes en CSS:
    - Selector de descendientes (espacio)
        El selector de descendientes coincide con todos los elementos que son descendientes de un elemento.
    - Selector de niños (>)
        El selector secundario selecciona todos los elementos que son los elementos secundarios de un elemento especificado.
    - Selector de hermanos adyacentes (+)
        El selector del mismo nivel adyacente se utiliza para seleccionar un elemento que está directamente después de otro elemento específico.
        Los elementos del mismo nivel deben tener el mismo elemento primario y "adyacente" significa "inmediatamente después".
    - Selector general de hermanos (~)
        El selector general del mismo nivel selecciona todos los elementos que son los siguientes elementos del mismo nivel de un elemento especificado.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Una pseudoclase se utiliza para definir un estado especial de un elemento.
Por ejemplo, se puede utilizar para:
    Aplicar estilo a un elemento cuando un usuario pasa el ratón por encima de él
    Diseña los enlaces visitados y no visitados de manera diferente
    Aplicar estilo a un elemento cuando se le da el foco
¡DEBE venir después en la definición de CSS para que sea efectivo! Los nombres de pseudoclase no distinguen entre mayúsculas y minúsculas.
Las pseudoclases se pueden combinar con clases HTML:
La pseudoclase coincide con un elemento especificado que es el primer elemento secundario de otro elemento.:first-child
La pseudoclase le permite definir reglas especiales para diferentes idiomas.:lang
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Un pseudoelemento CSS se utiliza para aplicar estilo a partes específicas de un elemento.
Por ejemplo, se puede utilizar para:
    Aplicar estilo a la primera letra, o línea, de un elemento
    Insertar contenido antes o después del contenido de un elemento
El pseudoelemento se utiliza para añadir un estilo especial a la primera línea de un texto.::first-line
El pseudoelemento solo se puede aplicar a nivel de bloque Elementos.::first-line
Las siguientes propiedades se aplican al pseudoelemento:::first-line
    - Propiedades de la fuente
    - Propiedades de color
    - Propiedades de fondo
    - espaciado entre palabras
    - espaciado entre letras
    - texto-decoración
    - alineación vertical
    - transformación-texto
    - altura-línea
    - claro
El pseudoelemento se utiliza para añadir un estilo especial al primero letra de un texto.::first-letter
El pseudoelemento solo se puede aplicar a nivel de bloque Elementos.::first-letter
Las siguientes propiedades se aplican al pseudoelemento ::first-letter:
    - Propiedades de la fuente
    - Propiedades de color
    - Propiedades de fondo
    - Propiedades de margen
    - Propiedades de relleno
    - Propiedades de borde
    - texto-decoración
    - vertical-align (solo si "float" es "none")
    - transformación-texto
    - altura-línea
    - flotar
    - claro
También se pueden combinar varios pseudoelementos.
El pseudoelemento se puede utilizar para insertar algún contenido antes del contenido de un elemento.::before
El pseudoelemento se puede utilizar para insertar algún contenido después del contenido de un elemento.::after
El pseudoelemento selecciona el marcadores de elementos de lista.::marker
El pseudoelemento coincide con la parte de un elemento que es seleccionado por un usuario.::selection
Las siguientes propiedades CSS se pueden aplicar:
    - color
    - background
    - cursor
    - outline
-->