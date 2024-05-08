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
const myElement = <h1>I Love JSX!</h1>;

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