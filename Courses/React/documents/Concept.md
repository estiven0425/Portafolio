# REACT
Esta carpeta contiene un proyect principal con prácticas REACT e información útil.
<hr>
<h3>¿Qué es REACT?</h3>
React es una biblioteca de JavaScript para crear interfaces de usuario. <br>
React se utiliza para crear aplicaciones de una sola página. <br>
React nos permite crear componentes de interfaz de usuario reutilizables.
<hr>
<h3>Crear aplicación React</h3>
Para aprender y probar React, se debe configurar un entorno de React en la computadora. <br>
En este tutorial se utiliza el archivo <b><i>create-react-app</i></b>. <br>
La herramienta <b><i>create-react-app</i></b> es una forma oficialmente compatible de crear aplicaciones React. <br>
Node.js es necesario para usar <b><i>create-react-app</i></b>. <br>
Abra la terminal en el directorio en el que se desea crear la aplicación. <br>
Ejecutar este comando para crear una aplicación React llamada <b><i>my-react-app</i></b>:
<pre>
create-react-app my-react-app
</pre>
<b><i>create-react-app</i></b> configurará todo lo que se necesita para ejecutar una aplicación React. <br>
Se ejecita este comando para ejecutar la aplicación React:
<pre>
npm start
</pre>
¡Aparecerá una nueva ventana del navegador con la aplicación React recién creada! De lo contrario, abra el navegador y escriba en la barra de direcciones <b>localhost:3000</b>.
<hr>
<h3>¿Cómo funciona React?</h3>
React crea un DOM VIRTUAL en la memoria. <br>
En lugar de manipular el DOM del navegador directamente, React crea un archivo virtual DOM en la memoria, donde realiza todas las manipulaciones necesarias, antes de realizar el cambios en el DOM del navegador. <br>
¡React solo cambia lo que hay que cambiar! <br>
React descubre cuáles han sido los cambios y cambia solo lo que hay que cambiar.
<hr>
Para usar React en producción, se necesita npm, que se incluye con Node.js.
<hr>
<h3>Modificar la aplicación React</h3>
Hasta aquí todo bien, pero ¿cómo puedo cambiar el contenido? <br>
Busque en el directorio <b><i>my-react-app</i></b> y encontrará una carpeta <b><i>src</i></b>. Dentro de la carpeta hay un archivo llamado <b><i>App.js</i></b>. <br>
Intente cambiar el contenido HTML y guarde el archivo. <br>
Tenga en cuenta que los cambios son visibles inmediatamente después de guardar el archivo, ¡no tiene que volver a cargar el navegador!
<hr>
<h3>React Render HTML</h3>
El objetivo de React es, en muchos sentidos, renderizar HTML en una página web. <br>
React renderiza HTML en la página web mediante el uso de una función llamada <b><i>createRoot()</i></b> y su método <b><i>render()</i></b>.
<h3>La función createRoot</h3>
La función <b><i>createRoot()</i></b> toma uno argumento, un elemento HTML. <br>
El propósito de la función es definir el elemento HTML donde se debe mostrar un componente de React.
<h3>El método render</h3>
A continuación, se llama al método <b><i>render()</i></b> para definir el componente de React que se debe renderizar. <br>
Pero, ¿renderizar dónde? <br>
Hay otra carpeta en el directorio raíz del proyecto React, llamada "public". En esta carpeta, hay un archivo <b><i>index.html</i></b>.
Notarás un solo <b><i>< div ></i></b> en el cuerpo de este archivo. Aquí es donde se renderizará nuestra aplicación React. <br>
Es bueno tener en cuenta que el identificador del elemento no tiene que llamarse "raíz", pero esta es la convención estándar.
<h3>El nodo raíz</h3>
El nodo raíz es el elemento HTML en el que se desea mostrar el resultado. <br>
Es como un contenedor de contenido gestionado por React.
NO tiene que ser un elemento <b><i>< div ></i></b> y  NO tiene que tener el id <b><i>root</i></b>.
<hr>
<h3>¿Qué es JSX?</h3>
JSX son las siglas de JavaScript XML. <br>
JSX nos permite escribir HTML en React. <br>
JSX hace que sea más fácil escribir y agregar HTML en React. <br>
JSX nos permite escribir elementos HTML en JavaScript y colocarlos en el DOM sin ningún método <b><i>createElement()</i></b> y/o <b><i>appendChild()</i></b>. <br>
JSX convierte las etiquetas HTML en elementos de react. <br>
No es necesario que usar JSX, pero JSX facilita la escritura de aplicaciones React. <br>
Ejemplo 1 <br>
JSX:
<pre>
const myElement = < h1 >I Love JSX!< /h1> ;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
</pre>
Ejemplo 2 <br>
Sin JSX:
<pre>
const myElement = React.createElement('h1', {}, 'I do not use JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
</pre>
Como se puede ver en el primer ejemplo, JSX nos permite escribir HTML directamente dentro del código JavaScript. <br>
JSX es una extensión del lenguaje JavaScript basado en ES6 y se traduce a JavaScript normal en tiempo de ejecución. <br>
Con JSX se puede escribir expresiones entre llaves { }. <br>
La expresión puede ser una variable de React, o una propiedad, o cualquier otra expresión JavaScript válida. JSX ejecutará la expresión y devolverá el resultado:
<pre>
const myElement = < h1 >React is {5 + 5} times better with JSX< /h1 >;
</pre>
Para escribir HTML en varias líneas, se coloca el HTML entre paréntesis:
<pre>
const myElement = (
  < ul >
    < li >Apples< /li >
    < li >Bananas< /li >
    < li >Cherries< /li >
  </ ul >
);
</pre>
El código HTML debe estar envuelto en un elemento de nivel superior. <br>
Así que si gusta escribir dos párrafos, debes ponerlos dentro de un padre, como un elemento <b><i>div</i></b>. <br>
JSX arrojará un error si el HTML no es correcto, o si el HTML pierde un elemento principal. <br>
Alternativamente, se puede usar un "fragmento" para ajustar varias líneas. Esto evitará agregar innecesariamente nodos adicionales al DOM. <br>
Un fragmento tiene el aspecto de una etiqueta HTML vacía <b><i><></></i></b>. <br>
JSX sigue las reglas XML y, por lo tanto, los elementos HTML deben cerrarse correctamente. <br>
El atributo <b><i>class</i></b> es un atributo muy utilizado en HTML, pero dado que JSX se representa como JavaScript y la palabra clave <b><i>class</i></b> es una palabra reservada en JavaScript, no se le permite usarlo en JSX. <br>
En su lugar, se usa el atributo <b><i>className</i></b>. <br>
JSX resolvió esto usando en su lugar <b><i>className</i></b>. Cuando se procesa JSX, traduce los atributos <b><i>className</i></b> en atributos <b><i>class</i></b>. <br>
React admite declaraciones <b><i>if</i></b>, pero no dentro de JSX. <br>
Para poder usar instrucciones condicionales en JSX, se debe colocar las instrucciones fuera de JSX, o puede usar una expresión ternaria en su lugar. <br>
Se debe tener en cuenta que para incrustar una expresión de JavaScript dentro de JSX, el JavaScript debe estar envuelto con llaves <h3>{ }</h3>.
<hr>
<h3>Componentes de React</h3>
Los componentes son como funciones que devuelven elementos HTML. <br>
Los componentes son bits de código independientes y reutilizables. Tienen el mismo propósito que las funciones de JavaScript, pero trabajan de forma aislada y devuelven HTML. <br>
Los componentes vienen en dos tipos, componentes de clase y componentes de función, en en este tutorial nos concentraremos en los componentes de la función. <br>
Al crear un componente de React, el nombre del componente DEBE comenzar con un letra mayúscula.
<h3>Componente de clase</h3>
Un componente de clase debe incluir la instrucción <b><i>extends React.Component</i></b>. Esta instrucción crea una herencia de React.Component y le da al componente acceso a las funciones de React.Component. <br>
El componente también requiere un método <b><i>render()</i></b>, este método devuelve HTML.
<h3>Componente de función</h3>
Este es el mismo ejemplo que el anterior, pero creado con un componente Function en su lugar. <br>
Un componente Function también devuelve HTML y se comporta de la misma manera que un componente Class. pero los componentes de la función se pueden escribir usando mucho menos código, son más fáciles de entender y serán los preferidos en este tutorial. <br>
Los componentes se pueden pasar como <b><i>props</i></b>, que significa propiedades. <br>
Las propiedades son como argumentos de función, y se envían al componente como atributos. <br>
Podemos referirnos a componentes dentro de otros componentes. <br>
React se trata de reutilizar código, y se recomienda dividir sus componentes en archivos separados. <nr>
Hay que tener en cuenta que el nombre del archivo debe comenzar con un carácter en mayúsculas. <br>
Para poder utilizar el componente, se debe importar el archivo en el archivo aplicación. <br>
Ahora importamos el archivo  en la aplicación, y se puede usar el componente como si hubiera sido creado aquí.
<hr>
<h3>Componentes de la clase React</h3>
Antes de React 16.8, los componentes de clase eran la única forma de rastrear el estado y el ciclo de vida en un componente de React. Los componentes de la función se consideraron "sin estado". <br>
Con la adición de Hooks, los componentes de función ahora son casi equivalentes a los componentes de clase. Las diferencias son tan pequeñas que probablemente nunca necesites usar un componente de clase en React. <br>
A pesar de que se prefieren los componentes de función, no hay planes actuales para eliminar los componentes de clase de React.
<h3>Componentes de React</h3>
Los componentes son bits de código independientes y reutilizables. Tienen el mismo propósito que las funciones de JavaScript, pero trabajan de forma aislada y devuelven HTML a través de una función render(). <br>
Los componentes vienen en dos tipos, componentes de clase y componentes de función, en en este capítulo aprenderá sobre los componentes de la clase. <br>
<h3>Crear un componente de clase</h3>
Al crear un componente de React, el nombre del componente debe comenzar con un Letra mayúscula. <br>
El componente tiene que incluir la instrucción <b><i>extends React.Component</i></b>, esta instrucción crea una herencia a React.Component, y le da a tu componente acceso a las funciones de React.Component. <br>
El componente también requiere un método <b><i>render()</i></b>.
<h3>Constructor de componentes</h3>
Si hay una función <b><i>constructor()</i></b> en su componente, esta función se llamará cuandose inicia el componente. <br>
La función constructora es donde se inician las propiedades del componente. <br>
En React, las propiedades de los componentes deben mantenerse en un objeto llamado <b><i>state</i></b>. <br>
La función constructora también es donde se honra la herencia de la función parent mediante la inclusión de la instrucción <b><i>super()</i></b>, que ejecuta la función constructora del componente principal, y el componente tiene acceso a todas las funciones de El componente primario (<b><i>React.Component</i></b>). <br>
Otra forma de controlar las propiedades de los componentes es mediante el uso de <b><i>props</i></b>. <br>
Las propiedades son como argumentos de función, y se envían al componente como atributos. <br>
Si el componente tiene una función constructora, las props siempre deben pasarse al constructor y también al React.Component a través del método <b><i>super()</i></b>.
<h3>Estado del componente de la clase React</h3>
Los componentes de la clase React tienen un objeto <b><i>state</i></b> incorporado. <br>
Es posible que haya notado que se usó <b><i>state</i></b> anteriormente en la sección constructor de componentes. <br>
El objeto <b><i>state</i></b> es donde se almacenan los valores de propiedad que pertenecen al componente. <br>
Cuando el objeto <b><i>state</i></b> cambia, el componente se vuelve a renderizar. <br>
Consulte el <b><i>state</i></b> objeto en cualquier parte del componente mediante la sintaxis <b><i>this.state.propertyname</i></b>. <br>
Para cambiar un valor en el objeto de estado, se utiliza el método <b><i>this.setState()</i></b>. <br>
Cuando cambia un valor en el objeto, el componente se volverá a renderizar, lo que significa que la salida cambiará de acuerdo con los nuevos valores. <br>
Hay que utilizar siempre el método <b><i>setState()</i></b> para cambiar el objeto de estado, Se asegurará de que el componente sepa que se ha actualizado y se llame al método <b><i>render()</i></b> (y todos los demás métodos del ciclo de vida).
<hr>
<h3>Ciclo de vida de los componentes</h3>
Cada componente en React tiene un ciclo de vida que puedes monitorear y manipular durante su tres fases principales. <br>
Las tres fases son:
<ul>
  <li>Montaje</li>
  <li>Actualización</li>
  <li>Desmontaje</li>
</ul>
Montura<h3></h3>
Montar significa colocar elementos en el DOM. <br>
React tiene cuatro métodos incorporados que se llaman, en este orden, cuando se hace el montaje de un componente:
<ul>
  <li><b><i>constructor()</i></b></li>
  <li><b><i>getDerivedStateFromProps()</i></b></li>
  <li><b><i>render()</i></b></li>
  <li><b><i>componentDidMount()</i></b></li>
</ul>
El método <b><i>render()</i></b> es necesario y siempre se llamará, los demás son opcionales y se llamarán si los define.
<h3>constructor</h3>
El método <b><i>constructor()</i></b> se llama antes que cualquier otra cosa, cuando se inicia el componente, y es el lugar para configurar el <b><i>state</i></b> inicial y otros valores iniciales. <br>
El método <b><i>constructor()</i></b> se llama con los argumentos <b><i>props</i></b>, y siempre debe comenzar llamandose al <b><i>super()</i></b> antes cualquier otra cosa, esto iniciará el método constructor del padre y permite que el método componente pueda heredar métodos de su padre.
<h3>getDerivedStateFromProps</h3>
El método <b><i>getDerivedStateFromProps()</i></b> es justo antes de renderizar los elementos en el DOM. <br>
Este es el lugar natural para establecer el objeto <b><i>state</i></b> y <b><i>props</i></b> en función del archivo. <br>
<b><i>state</i></b> lo toma como argumento y devuelve un objeto  con cambios en el archivo <b><i>state</i></b>.
<h3>render</h3>
El método <b><i>render()</i></b> es obligatorio, y es el método que realmente envía el HTML al DOM.
<h3>componentDidMount</h3>
El método <b><i>componentDidMount()</i></b> se llama después de que el componente esté montado. <br>
Aquí es donde se ejecutan instrucciones que requieren que el componente ya esté colocado en el DOM.
<h3>Actualización</h3>
La siguiente fase del ciclo de vida es cuando se actualiza un componente. <br>
Un componente se actualiza cada vez que hay un cambio en el archivo <b><i>state</i></b> o <b><i>props</i></b>. <br>
React tiene cinco métodos incorporados que se llaman, en este orden, cuando un componente se actualiza:
<ul>
  <li>getDerivedStateFromProps()</li>
  <li>shouldComponentUpdate()</li>
  <li>render()</li>
  <li>getSnapshotBeforeUpdate()</li>
  <li>componentDidUpdate()</li>
</ul>
<h3>getDerivedStateFromProps</h3>
También en las actualizaciones, el método <b><i>getDerivedStateFromProps</i></b> es llamado. Este es el primer método al que se llama cuando se actualiza un componente. <br>
Este sigue siendo el lugar natural para colocar el objeto <b><i>state</i></b> en función de los accesorios iniciales.
<h3>shouldComponentUpdate</h3>
En el método <b><i>shouldComponentUpdate()</i></b> puede devolver un valor booleano que especifique si React debe continuar con el renderizado o no. <br>
El valor predeterminado es <b><i>true</i></b>.
<h3>getSnapshotBeforeUpdate</h3>
En el método <b><i>getSnapshotBeforeUpdate()</i></b> tiene acceso a la <b><i>props</i></b> y <b><i>state</i></b> antes de la actualización, lo que significa que incluso después de la actualización, se puede comprobar cuáles eran los valores antes de la actualizar. <br>
Si el método <b><i>getSnapshotBeforeUpdate()</i></b> está presente, también se debe incluir el método <b><i>componentDidUpdate()</i></b>, de lo contrario se obtendrá un error.
<h3>componentDidUpdate</h3>
El método <b><i>componentDidUpdate</i></b> se llama después de que el componente se actualice en el DOM.
<h3>Desmontar</h3>
La siguiente fase en el ciclo de vida es cuando se retira un componente del DOM, o se desmonta, como le gusta llamarlo a React. <br>
React solo tiene un método incorporado que se llama cuando se desmonta un componente:
<ul>
  <li>componentWillUnmount()</li>
</ul>
<h3>componentWillUnmount</h3>
El método <b><i>componentWillUnmount</i></b> se usa cuando el componente está a punto de ser eliminado del DOM.
<hr>
<h3>Props de React</h3>
Las props son argumentos pasados a los componentes de React. <br>
Las propiedades se pasan a los componentes a través de atributos HTML. <br>
props significa propiedades. <br>
Los React Props son como argumentos de función en JavaScript y atributos en HTML. <br>
Para enviar props a un componente, se utiliza la misma sintaxis que los atributos HTML. <br>
El componente recibe el argumento <b><i>props</i></b> como un objeto.
<h3>Pasar datos</h3>
Las props también son la forma en que se pasan los datos de un componente a otro, como parámetros. <br>
Si se tiene una variable para enviar, y no una cadena como en el ejemplo anterior, simplemente se coloca el nombre de la variable entre llaves. <br>
¡Los props de React son de solo lectura! Obtendrá un error si se intenta cambiar su valor!
<hr>
<h3>Eventos de React</h3>
Al igual que los eventos HTML DOM, React puede realizar acciones basadas en eventos de usuario. <br>
React tiene los mismos eventos que HTML: hacer clic, cambiar, pasar el ratón por encima, etc.
<h3>Adición de eventos</h3>
Los eventos de React están escritos en la sintaxis camelCase: <br>
<b><i>onClick</i></b> En lugar de <b><i>onclick</i></b>. <br>
Los controladores de eventos de React se escriben dentro de curly ortodoncia:
<pre>
onClick={shoot}
</pre>
En lugar de
<pre>
onclick="shoot()"
</pre>
<h3>Pasar argumentos</h3>
Para pasar un argumento a un controlador de eventos, se usa una función de flecha.
<h3>Objeto de evento React</h3>
Los controladores de eventos tienen acceso al evento de React que activó la función. <br>
En nuestro ejemplo, el evento es el evento "clic".
<hr>
<h3>Renderizado condicional de React</h3>
En React, se puede renderizar componentes condicionalmente. <br>
Hay varias formas de hacerlo.
<h3>Declaración if</h3>
Se puede usar el operador JavaScript <b><i>if</i></b> para decidir qué componente renderizar.
<h3>Operador lógico &&</h3>
Otra forma de renderizar condicionalmente un componente de React es mediante el operador <b><i>&&</i></b>. <br>
Si la condición es verdadera, La expresión a continuación se renderizará. <br>
Otra forma de representar elementos condicionalmente es mediante un operador ternario.
<hr>
<h3>Listas de React</h3>
En React, renderizarás listas con algún tipo de bucle. <br>
El método de matriz <b><i>map() </i></b> de JavaScript suele ser el método preferido.
<h3>Llaves</h3>
Las claves permiten a React realizar un seguimiento de los elementos. De esta manera, si se actualiza o elimina un elemento, solo se volverá a representar ese elemento en lugar de toda la lista. <br>
Las llaves deben ser únicas para cada hermano. Pero se pueden duplicar a nivel mundial. <br>
Por lo general, la clave debe ser un identificador único asignado a cada elemento. Como último recurso, puede utilizar el índice de matriz como clave.
<hr>
<h3>Formularios de React</h3>
Al igual que en HTML, React utiliza formularios para permitir a los usuarios interactuar con la página web. <br>
Esto funcionará normalmente, el formulario se enviará y la página se actualizará. <br>
Pero, en general, esto no es lo que queremos que suceda en React. <br>
Queremos evitar este comportamiento predeterminado y dejar que React controle el formulario.
<h3>Manejo de formularios</h3>
El manejo de formularios tiene que ver con la forma en que maneja los datos cuando cambian de valor u obtienen presentado. <br>
En HTML, los datos de los formularios suelen ser manejados por el DOM. <br>
En React, los datos del formulario suelen ser manejados por los componentes. <br>
Cuando los datos son manejados por los componentes, todos los datos se almacenan en el componente estado. <br>
Se puede controlar los cambios agregando controladores de eventos en el atributo <b><i>onChange</i></b>. <br>
Podemos usar el Hook <b><i>useState</i></b> para realizar un seguimiento de cada valor de entrada y proporcionar una "única fuente de verdad" para toda la aplicación.
<h3>Envío de formularios</h3>
Se puede controlar la acción de envío agregando un controlador <b><i>onSubmit</i></b> de eventos en el atributo para el <b><i>< form ></i></b>.
<h3>Múltiples campos de entrada</h3>
Se puede controlar los valores de más de un campo de entrada agregando un atributo <b><i>name</i></b> a cada elemento. <br>
Inicializaremos nuestro estado con un objeto vacío. <br>
Para acceder a los campos del controlador de eventos, se utiliza la sintaxis <b><i>event.target.name</i></b> y <b><i>event.target.value</i></b>. <br>
Para actualizar el estado, se usa corchetes [notación de corchetes] alrededor del nombre de la propiedad. <br>
Usamos la misma función de controlador de eventos para ambos campos de entrada, podríamos escribir un controlador de eventos para cada uno, pero esto nos da un código mucho más limpio y es la forma preferida en React.
<h3>Área de texto</h3>
El elemento textarea en React es ligeramente diferente del HTML ordinario. <br>
En HTML, el valor de un área de texto era el texto entre la etiqueta inicial <b><i>< textarea ></i></b> y la etiqueta final <b><i>< /textarea ></i></b>. <br>
En React, el valor de un área de texto se coloca en un atributo de valor. Usaremos el Hook <b><i>useState</i></b> para administrar el valor del área de texto.
<h3>Escoger</h3>
Una lista desplegable, o un cuadro de selección, en React también es un poco diferente de HTML. <br>
en HTML, el valor seleccionado en la lista desplegable se definió con el atributo <b><i>selected</i></b>. <br>
En React, el valor seleccionado se define con un atributo <b><i>value</i></b> en la etiqueta <b><i>select</i></b>.
<hr>
<h3>React Router</h3>
Create React App no incluye el enrutamiento de páginas. <br>
React Router es la solución más popular.
<h3>Agregar React Router</h3>
Para agregar React Router en una aplicación, se ejecuta en el terminal desde el directorio raíz de la aplicación:
<pre>
npm install react-router-dom
</pre>
<h3>Estructura de carpetas</h3>
Para crear una aplicación con varias rutas de página, comencemos primero con la estructura de archivos. <br>
Dentro de la carpeta src, crearemos una carpeta llamada pages con varios archivos. <br>
Cada archivo contendrá un componente de React muy básico.
<h3>Uso básico</h3>
Ahora usaremos el Router en el  archivo <b><i>index.js</i></b>. <br>
Primero envolvemos nuestro contenido con <b><i>< BrowserRouter ></i></b>. <br>
A continuación, definimos nuestro archivo <b><i>< Routes ></i></b>. Una aplicación puede tener varios archivos <b><i>< Routes ></i></b>. Nuestro ejemplo básico solo usa uno. <br>
<b><i>< Route ></i></b>s se puede anidar. El primer <b><i>< Route ></i></b> tiene una ruta de acceso <b><i>/</i></b> y representa el componente <b><i>Home</i></b>. <br>
Los <b><i>< Route ></i></b>s anidados heredan y se agregan a la ruta principal. Por lo tanto, la ruta <b><i>Formulario</i></b> se combina con el padre y se convierte en <b><i>/Formulario</i></b>. <br>
La ruta del componente <b><i>Layout</i></b> no tiene una ruta, pero tiene un atributo <b><i>index</i></b>. Eso especifica esta ruta como la ruta predeterminada para la ruta principal, que es <b><i>/</i></b>. <br>
Establecer el <b><i>path</i></b> en <b><i>*</i></b> actuará como un catch-all para cualquier URL no definida. Esto es genial para una página de error 404. <br>
El componente <b><i>Layout</i></b> tiene elementos <b><i>< Outlet ></i></b> y <b><i>< Link ></i></b>. <br>
<b><i>< Outlet ></i></b> Renderiza la ruta actual seleccionada. <br>
<b><i>< Link ></i></b> se utiliza para establecer la URL y realizar un seguimiento del historial de navegación. <br>
Cada vez que enlazamos a una ruta interna, usaremos <b><i>< Link ></i></b> en lugar de <b><i>< a href="" ></i></b>. <br>
La "ruta de diseño" es un componente compartido que inserta contenido común en todas las páginas, como un menú de navegación.
<hr>
<h3>Memorándum de React</h3>
El uso de <b><i>memo</i></b> hará que React omita el renderizado de un componente si sus propiedades no han cambiado. <br>
Esto puede mejorar el rendimiento. <br>
<b>Ejemplo</b> <br>
Al hacer clic en el botón de incremento, el componente se vuelve a procesar. <br>
Si este componente fuera complejo, podría causar problemas de rendimiento. <br>
Para solucionar esto, se puede usar <b><i>memo</i></b>.
Se utiliza <b><i>memo</i></b> para evitar que el componente se vuelva a renderizar innecesariamente. <br>
Se envuelve la exportación del componente en <b><i>memo</i></b>:
<pre>
export default memo(Componente);
</pre>
Ahora el componente solo se vuelve a renderizar cuando se actualizan los datos que se le pasan a través de props.
<hr>
<h3>Aplicar estilo a React usando CSS</h3>
Hay muchas maneras de diseñar React con CSS, este tutorial echa un vistazo más de cerca a tres formas comunes:
<ul>
  <li>Estilo en línea.</li>
  <li>Hojas de estilo CSS.</li>
  <li>Módulos CSS.</li>
</ul>
<h3>Estilo en línea</h3>
Para aplicar estilo a un elemento con el atributo inline style, el valor debe ser un Objeto JavaScript. <br>
En JSX, las expresiones de JavaScript se escriben entre llaves, y dado que los objetos JavaScript también usan llaves, El estilo en el ejemplo anterior está escrito dentro de dos conjuntos de llaves <b><i>{{}}</i></b>.
<h3>camelCased Nombres de propiedades</h3>
Dado que el CSS en línea se escribe en un objeto JavaScript, las propiedades con separadores de guiones, como <b><i>background-color</i></b>, deben escribirse con sintaxis de mayúsculas y minúsculas.
<h3>Objeto JavaScript</h3>
También se puede crear un objeto con información de estilo y hacer referencia a él en el atributo style.
<h3>Hoja de estilo CSS</h3>
Se puede escribir un estilo CSS en un archivo separado, simplemente se guarda el archivo con la extensión <b><i>.css</i></b> del archivo y se importa en su archivo aplicación.
<h3>Módulos CSS</h3>
Otra forma de agregar estilos a su aplicación es usar módulos CSS. <br>
Los módulos CSS son convenientes para los componentes que se colocan en archivos separados. <br>
El CSS dentro de un módulo solo está disponible para el componente que lo importó, Y no tienes que preocuparte por los conflictos de nombres. <br>
Se crea un módulo CSS con la extensión <b><i>.module.css</i></b>.
<hr>
<h3>Estilizar React usando Sass</h3>
<h3>¿Qué es Sass?</h3>
Sass es un preprocesador de CSS. <br>
Los archivos Sass se ejecutan en el servidor y envían CSS al Explorador.
<h3>Crear un archivo Sass</h3>
Cree un archivo sass de la misma manera que crea archivos CSS, pero los archivos sass tienen el atributo extensión <b><i>.scss</i></b> de archivo. <br>
En los archivos sass se pueden utilizar variables y otras funciones de sass. <br>
Se importa el archivo Sass de la misma manera que importó un archivo CSS.
<hr>
<h3>React hooks</h3>
Los ganchos se agregaron a React en la versión 16.8. <br>
Los ganchos permiten que los componentes de la función tengan acceso al estado y otras características de React. Debido a esto, los componentes de clase generalmente ya no son necesarios. <br>
Aunque los Hooks generalmente reemplazan los componentes de clase, no hay planes para eliminar clases de React.
<h3>¿Qué es un hook?</h3>
Los ganchos nos permiten "engancharnos" a las características de React, como los métodos de estado y ciclo de vida. <br>
Aquí estamos usando el Hook <b><i>useState</i></b> para realizar un seguimiento del estado de la aplicación. <br>
Por lo general, el estado se refiere a los datos o propiedades de la aplicación de los que es necesario realizar un seguimiento.
<h3>Reglas de los hooks</h3>
Hay 3 reglas para los ganchos:
<ul>
  <li>Los ganchos o hooks solo se pueden llamar dentro de los componentes de función de React.</li>
  <li>Los ganchos o hooks solo se pueden llamar en el nivel superior de un componente.</li>
  <li>Los ganchos o hooks no pueden ser condicionales.</li>
</ul>
Los ganchos no funcionarán en los componentes de clase de React. <br>
Si se tiene una lógica con estado que debe reutilizarse en varios componentes, se puede crear Hooks personalizados.
<h3>UseState</h3>
El React Hook <b><i>useState</i></b> nos permite rastrear el estado en un componente de función. <br>
Por lo general, el estado hace referencia a los datos o propiedades de los que se debe realizar un seguimiento en una aplicación. <br>
Para usar el gancho <b><i>useState</i></b>, primero necesitamos incluirlo en nuestro componente con <b><i>import</i></b>. <br>
Tenga en cuenta que estamos desestructurando <b><i>useState</i></b> a partir de <b><i>react</i></b> ya que es una exportación con nombre.
<h3>Inicializar useState</h3>
Se inicializa el estado llamando al componente de función <b><i>useState</i></b>. <br>
<b><i>useState</i></b> Acepta un estado inicial y devuelve dos valores:
<ul>
  <li>El estado actual.</li>
  <li>Función que actualiza el estado.</li>
</ul>
Se debe tener en cuenta que, de nuevo, estamos desestructurando los valores devueltos de <b><i>useState</i></b>. <br>
El primer valor, <b><i>Inicial</i></b>, es el estado actual. <br>
El segundo valor, <b><i>seInicial</i></b>, es la función que se utiliza para actualizar el estado. <br>
Estos nombres son variables que se pueden nombrar como quieras. <br>
Por último, se establece el estado inicial en una cadena vacía <b><i>useState("")</i></b>. <br>
Ahora podemos incluir nuestro estado en cualquier lugar de nuestro componente. <br>
Para actualizar el estado, usamos la función de actualización de estado. <br>
Nunca se debe actualizar directamente el estado. Ej: no está permitido <b><i>inicial = "red"</i></b>.
<h3>¿Qué puede sostener el Estado?</h3>
El gancho <b><i>useState</i></b> se puede utilizar para realizar un seguimiento de cadenas, números, booleanos, matrices, objetos y cualquier combinación de estos. <br>
Podríamos crear varios ganchos de estado para realizar un seguimiento de los valores individuales. <br>
¡O bien, podemos usar solo un estado e incluir un objeto en su lugar! <br>
Dado que ahora estamos rastreando un solo objeto, Necesitamos hacer referencia a ese objeto y luego a la propiedad de ese objeto al renderizar el componente.
<h3>Actualización de objetos y matrices en estado</h3>
Cuando se actualiza el estado, se sobrescribe todo el estado. <br>
<b>¿Y si solo queremos actualizar el color de nuestro coche?</b> <br>
Si solo llamáramos a <b><i>setCarro({color: "blue"})</i></b>, esto eliminaría la marca, el modelo y el año de nuestro estado. <br>
Podemos usar el operador spread de JavaScript para ayudarnos. <br>
Debido a que necesitamos el valor actual de <b><i>state</i></b>, se pasa una función a la función <b><i>setCar</i></b>. Esta función recibe el valor anterior. <br>
A continuación, se devuelve un objeto, extendiendo el <b><i>previousState</i></b> y sobrescribiendo solo el color.
<h3>useEffect</h3>
El gancho <b><i>useEffect</i></b> permite realizar efectos secundarios en los componentes. <br>
Algunos ejemplos de efectos secundarios son: la obtención de datos, la actualización directa del DOM y los temporizadores. <br>
<b><i>useEffect</i></b> acepta dos argumentos. El segundo argumento es opcional:
<pre>
useEffect(< function >, < dependency >)
</pre>
¡¡Pero espera!! ¡Sigue contando a pesar de que solo debería contar una vez! <br>
<b><i>useEffect</i></b> se ejecuta en cada renderizado. Esto significa que cuando cambia el recuento, se produce un renderizado, que luego desencadena otro efecto. <br>
Esto no es lo que se quiere. Hay varias formas de controlar cuándo se producen los efectos secundarios. <br>
Siempre se debe incluir el segundo parámetro que acepta una matriz. Opcionalmente, se puede pasar dependencias a <b><i>useEffect</i></b> en esta matriz. <br>
Entonces, para solucionar este problema, se ejecuta este efecto solo en el renderizado inicial. <br>
A continuación se muestra un ejemplo de un Hook <b><i>useEffect</i></b> que depende de una variable. Si la variable <b><i>count</i></b> se actualiza, el efecto se ejecutará de nuevo:
<pre>
  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);
</pre>
<h3>Limpieza de efectos</h3>
Algunos efectos requieren limpieza para reducir las pérdidas de memoria. <br>
Se deben eliminar los tiempos de espera, las suscripciones, los agentes de escucha de eventos y otros efectos que ya no sean necesarios. <br>
Hacemos esto incluyendo una función de retorno al final del Hook <b><i>useEffect</i></b>.
<h3>useContext</h3>
React Context es una forma de gestionar el estado globalmente. <br>
Se puede usar junto con el gancho <b><i>useState</i></b> para compartir el estado entre componentes profundamente anidados más fácilmente que con <b><i>useState</i></b> solos.
<h3>El problema</h3>
El estado debe estar en manos del componente primario más alto de la pila que requiere acceso al estado. <br>
Para ilustrar, tenemos muchos componentes anidados. El componente en la parte superior e inferior de la pila necesita acceso al estado. <br>
Para hacer esto sin Context, necesitaremos pasar el estado como "props" a través de cada componente anidado. A esto se le llama "perforación de puntal".
La solución<h3></h3>
La solución es crear contexto.
Crear contexto<h3></h3>
Para crear contexto, se debe importar e inicializar <b><i>createContext</i></b>. <br>
A continuación, usaremos el proveedor de contexto para envolver el árbol de componentes que necesitan el estado Context. <br>
Se encapsulan los componentes secundarios en el proveedor de contexto y se proporciona el valor de estado. <br>
Ahora, todos los componentes de este árbol tendrán acceso al contexto del usuario.
<h3>Usa el gancho useContext</h3>
Para usar el <b><i>useContext</i></b> en un componente hijo, se necesita acceder a él usando el Hook <b><i>useContext</i></b>. <br>
En primer lugar, se incluye el <b><i>useContext</i></b> en la declaración de importación.
<h3>useRef</h3>
El gancho <b><i>useRef</i></b> permite conservar valores entre renders. <br>
Se puede usar para almacenar un valor mutable que no provoque una nueva representación cuando se actualice. <br>
Se puede utilizar para acceder directamente a un elemento DOM.
<h3>No provoca re-renders</h3>
Si intentáramos contar cuántas veces se renderiza nuestra aplicación usando el Hook <b><i>useState</i></b>, estaríamos atrapados en un bucle infinito ya que este Hook en sí mismo provoca un re-renderizado. <br>
Para evitar esto, podemos usar el Gancho <b><i>useRef</i></b>. <br>
useRef() solo devuelve un elemento. Devuelve un objeto llamado <b><i>current</i></b>. <br>
Cuando inicializamos establecemos el valor inicial: <b><i>useRefuseRef(0)</i></b>.
<h3>Acceso a los elementos DOM</h3>
En general, queremos dejar que React se encargue de toda la manipulación del DOM. <br>
Pero hay algunos casos en los que se puede usar <b><i>useRef</i></b> sin causar problemas. <br>
En React, podemos añadir un atributo <b><i>ref</i></b> a un elemento para acceder a él directamente en el DOM.
<h3>Seguimiento de los cambios de estado</h3>
El gancho <b><i>useRef</i></b> también se puede utilizar para realizar un seguimiento de los valores de estado anteriores. <br>
Esto se debe a que podemos conservar los valores entre renders. <br>
Esta vez usamos una combinación de <b><i>useState</i></b>, <b><i>useEffect</i></b> y <b><i>useRef</i></b> para realizar un seguimiento del estado anterior.
<h3>useReducer</h3>
El gancho <b><i>useReducer</i></b> es similar al gancho <b><i>useState</i></b>. <br>
Permite una lógica de estado personalizada. <br>
Si se encuentra realizando un seguimiento de varias piezas de estado que se basan en una lógica compleja, puede ser útil <b><i>useReducer</i></b>.
<h3>Sintaxis</h3>
El gancho useReducer acepta dos argumentos.
<pre>
useReducer(< reducer >, < initialState >);
</pre>
La función <b><i>reducer</i></b> contiene la lógica de estado personalizada y puede ser un valor simple, pero <b><i>initialState</i></b> generalmente contendrá un objeto. <br>
El Hook <b><i>useReducer</i></b> devuelve la corriente <b><i>state</i></b> y un método <b><i>dispatch</i></b>.