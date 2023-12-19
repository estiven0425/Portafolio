# SASS
Esta carpeta contiene un archivo principal con prácticas SASS e información útil.
<hr>
<h3> Acerca de SASS </h3>
SASS es un preprocesador de <b><b>CSS</b></b>. <br>
SASS reduce la repetición de <b><b>CSS</b></b> y por lo tanto ahorra tiempo. <br>
SASS significa S yntactically Awesome Stylesheet. <br>
SASS es una extensión de <b>CSS</b>. <br>
SASS es un preprocesador de <b>CSS</b>. <br>
SASS es completamente compatible con todas las versiones de <b>CSS</b>. <br>
SASS reduce la repetición de <b>CSS</b> y, por lo tanto, ahorra tiempo. <br>
SASS fue diseñado por Hampton Catlin y desarrollado por Natalie Weizenbaum en 2006. <br>
SASS se puede descargar y usar gratis.
<hr>
<h3>¿Por qué usar SASS?</h3>
Las hojas de estilo son cada vez más grandes, más complejas, y más difíciles de mantener. Aquí es donde un preprocesador <b>CSS</b> puede ayudar. <br>
SASS deja utilizar características que no existen en <b>CSS</b>, como variables, reglas anidadas, mezclas, importaciones herencia, funciones integradas y otras cosas.
<hr>
<h3>Uso de SASS</h3>
Para usar SASS debe instalarse mediante el siguiente comando:
<pre>
npm install -g sass
</pre>
Se puede comprobar si ya está instalado mediante el comando:
<pre>
sass --version
</pre>
Los archivos SASS tienen la extensión de archivo <b>.scss</b> <br>
<b>Un navegador no entiende el código SASS. Por lo tanto, necesitarás un SASS preprocesador para convertir el código SASS en <b>CSS</b> estándar.</b> <br>
Este proceso se denomina transpilación. Por lo tanto, debe dar un transpilador (algún tipo de programa) un poco de código SASS y luego obtener algo de código <b>CSS</b> de vuelta. <br>
<pre>SASS --watch Style.scss Style.css</pre>
Debe introducirse este código en la consla para transpilar SASS (archivo de entrada y archivo de salida).
<hr>
<h3>¿Dónde usar SASS?</h3>
Digamos que tenemos un sitio web con tres colores principales:
    <li>#e1e1e1</li>
    <li>#afafaf</li>
    <li>#7d7d7d</li>
Usar SASS nos permite guardar estos valores en variables para ser llamadas cuando queramos y cuantas veces queramos.
<pre>
$Variable: Valor;
$Variable: Valor;
$Variable: Valor;
Etiqueta {
    Propiedad: $Variable;
    Propiedad: $Variable;
    Propiedad: $Variable;
}
</pre>
<hr>
<h3>Variables</h3>
Las variables son una forma de almacenar información que se puede reutilizar más adelante. <br>
Con SASS, se puede almacenar información en variables, como:
    <li>Instrumentos de cuerda</li>
    <li>Números</li>
    <li>Colores</li>
    <li>Booleanos</li>
    <li>Listas</li>
    <li>Valores nulos</li>
SASS utiliza el símbolo <b><i>$</i></b>, seguido de un nombre, para declarar variables: <br>
<b><i>$Nombre: Valor;</i></b>
<pre>
$Variable: Valor;
$Variable: Valor;
$Variable: Valor;

</pre>
Por lo tanto, cuando se transpila el archivo SASS, toma las variables creadas y genera <b>CSS</b> normal con los valores de las variables colocados en el <b>CSS</b>. <br>
<b>Las variables de SASS solo están disponibles en el nivel de anidamiento en el que se definen.</b>
Permitiendo así definir variables locales.
<pre>
$Variable: Valor;
$Variable: Valor;
$Variable: Valor;
Etiqueta {
    $VariableLocal: Valor;
}
</pre>
El comportamiento predeterminado para el ámbito de la variable se puede invalidar mediante el modificador <b><i>!global</i></b>
<pre>
$VariableLocal: Valor !global;

</pre>
<b><i>!global</i></b> indica que una variable es global, lo que significa que es accesible en todos los niveles. <br>
Las variables globales deben definirse fuera de cualquier regla. Podría ser prudente definir todas las variables globales en su propio archivo, e incluir el archivo con la palabra clave <b><i>@import</i></b>.
<hr>
<h3>Anidaciones</h3>
SASS permite anidar selectores <b>CSS</b> de la misma manera que HTML. <br>
Hay que tener en cuenta que en SASS, los selectores están anidados dentro del selector. Mientras que en <b>CSS</b>, las reglas se definen una por una (no anidadas): <br>
Debido a que se puede anidar propiedades en SASS, es más limpio y fácil de leer que el <b>CSS</b> estándar.
<pre>
Etiqueta {
    Etiqueta {
        Propiedad: Valor;
    }
    Propiedad: Valor;
}
</pre>
<hr>
<h3>Importaciones</h3>
SASS mantiene el código <b>CSS</b> <b>DRY</b> (Don't Repeat Yourself). Una forma de escribir código DRY es mantener el código relacionado en archivos separados. <br>
Se puede crear archivos pequeños con fragmentos de <b>CSS</b> para incluirlos en otros archivos de SASS. <br>
Al igual que <b>CSS</b>, SASS también es compatible con la directiva <b><i>@import</i></b>. <br>
La directiva le permite incluir el contenido de un archivo en otro.
La directiva <b>CSS</b> tiene un gran inconveniente debido a problemas de rendimiento; crea una solicitud HTTP adicional cada vez que lo llames. <br>
Sin embargo, la Directiva SASS incluye el archivo en el <b>CSS</b>; por lo que no se requiere ninguna llamada HTTP adicional en tiempo de ejecución. <br>
<b><i>@import "Nombre";</i></b>
<pre>
@import "Nombre";
</pre>
No es necesario especificar una extensión de archivo, SASS asume automáticamente que se refiere a un archivo <b><i>.sass</i></b> o <b><i>.scss</i></b>. <br>
También puede importar archivos <b>CSS</b>. La directiva importa el archivo y las variables o mezclas definidas en el archivo importado para que se puedan utilizar en el archivo principal. <br>
<b>Puedes importar tantos archivos como necesites en el archivo principal.</b> <br>
De forma predeterminada, SASS transpila todos los archivos <b><i>.scss</i></b> directamente. <br>
Sin embargo, cuando se quiere importar un archivo, no es necesario que el archivo se transpile directamente. <br>
SASS tiene un mecanismo para esto: <b>Si comienzas el nombre del archivo con un guión bajo, SASS no lo transpilará. Los archivos nombrados de esta manera se denominan parciales en SASS.
Por lo tanto, un archivo SASS parcial se nombra con un guión bajo inicial. <i>@import "_Nombre";</i></b>
<pre>
@import "_Nombre";
</pre>
<hr>
<h3>@Mixin e @Include</h3>
La directiva <b><i>@mixin</i></b> permite crear código <b>CSS</b> que se va a reutilizar en todo el sitio web. <br>
<pre>
@mixin Nombre {
  Propiedad: Valor;
  Propiedad: Valor;
}
</pre>
<b>Los guiones y los guiones bajos se consideran lo mismo. Esto significa que:
<pre>
@mixin Nombre-Nombre {
  Propiedad: Valor;
  Propiedad: Valor;
}
</pre>
<pre>
@mixin Nombre_Nombre {
  Propiedad: Valor;
  Propiedad: Valor;
}
</pre>
¡Se consideran como la misma mezcla!</b> <br> <br>
La directiva <b><i>@include</i></b> se utiliza para incluir una mezcla
</pre>
<pre>
Etiqueta {
  @include NombreDelMixin;
}
</pre>
<b>Un <i>@mixin</i> también puede incluir otros <i>@mixin</i>.</b> <br>
Los <b><i>@mixin</i></b> aceptan argumentos. De esta manera, se puede asignar variables a un <b><i>@mixin</i></b>. <br>
Hay que tener en cuenta que los argumentos se establecen como variables y, a continuación, se utilizan como valores:
<pre>
@mixin Nombre($Argumento, $Argumento, $Argumento) {
    Propiedad: Valores y argumentos;
}
Etiqueta {
    @include NombreDelMixin(Argumento, Argumento, Argumento);
}
</pre>
También es posible definir valores predeterminados para las variables de <b><i>@mixin</i></b>:
<pre>
@mixin Nombre($Argumento: ValorPredeterminado, $Argumento: ValorPredeterminado) {
    Propiedad: Valores y argumentos;
}
Etiqueta {
    @include NombreDelMixin;
}
</pre>
Otro buen uso de un mixin es para el proveedor prefijo:
<pre>
@mixin Nombre($Argumento) {
    Propiedad: $Argumento;
}
Etiqueta {
    @include NombreDelMixin(Valor);
}
</pre>
<hr>
<h3>Extend</h3>
La directiva <b><i>@extend</i></b> permite compartir un conjunto de propiedades <b>CSS</b> de un selector a otro. <br>
La directiva es útil si tiene elementos de estilo casi idénticos que solo difieren en algunos Pequeños detalles.
<pre>
EtiquetaBase {
    Propiedad: valor;
    Propiedad: valor;
    Propiedad: valor;
}
Etiqueta {
    @extend EtiquetaBase;
}
</pre>
La directiva ayuda a mantener el código SASS muy limpio.
<hr>
<h3></h3>