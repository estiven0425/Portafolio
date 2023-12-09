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
Ninguna de las OTRAS propiedades de borde CSS (de las que se enseñará a cpntinuación) tendrá NINGÚN efecto a menos que se establezca la propiedad.border-style
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
 -->