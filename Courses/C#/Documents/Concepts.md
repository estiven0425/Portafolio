# C#

Esta carpeta contiene un archivo principal con prácticas **C#** e información útil.

<hr>
<h3>¿Qué es <b>C#</b>?</h3>
<b>C#</b> se pronuncia "C-Sharp". <br>
Es un lenguaje de programación orientado a objetos creado por <b>Microsoft</b> que ejecuta en <b>.NET Framework.</b> <br>
<b>C#</b> tiene raíces de la familia C, y el lenguaje está cerca de otros lenguajes populares como <b>C++</b> y <b>Java</b>. <br>
La primera versión fue lanzada en el año 2002. La versión más reciente, <b>C# 13</b>, fue lanzado en noviembre de 2024. <br>
<b>C#</b> se usa para:
<ul>
    <li><b>Aplicaciones móviles</b></li>
    <li><b>Aplicaciones de escritorio</b></li>
    <li><b>Aplicaciones web</b></li>
    <li><b>Servicios web</b></li>
    <li><b>Sitios web</b></li>
    <li><b>Juegos</b></li>
    <li><b>Realidad virtual</b></li>
    <li><b>Aplicaciones de bases de datos</b></li>
    <li><b>¡Y mucho, mucho más!</b></li>
</ul>
<hr>
<h3>¿Por qué usar <b>C#</b>?</h3>
<ul>
    <li><b>Es uno de los lenguajes de programación más populares del mundo</b></li>
    <li><b>Es fácil de aprender y simple de usar</b></li>
    <li><b>Tiene un gran apoyo de la comunidad</b></li>
    <li><b>C# es un lenguaje orientado a objetos que da una estructura clara a los programas y permite reutilizar el código, reduciendo los costes de desarrollo</b></li>
    <li><b>Como C# está cerca de C, C++ y Java, facilita a los programadores el cambio a C# o viceversa</b></li>
</ul>
<hr>
<h3>C# IDE</h3>
La manera más fácil de empezar a trabajar con <b>C#</b> es usar un IDE.<br>
Un IDE (entorno de desarrollo integrado) se utiliza para editar y compilar código.<br>
En este tutorial, usaremos Visual Studio Community, que se puede descargar gratis desde <a>https://visualstudio.microsoft.com/vs/community/</a>.<br>
Las aplicaciones escritas en <b>C#</b> usan <b>.NET Framework</b>, por lo que tiene sentido usar <b>Visual Studio</b>, como el programa, el marco y el lenguaje, son creados por Microsoft.
<hr>
<h3>Instalación de <b>C#</b></h3>
Una vez descargado e instalado el instalador de Visual Studio, se elige la carga de trabajo de <b>.NET</b> y haga clic en el botón Modificar/Instalar. <br>
Una vez completada la instalación, se hace clic en el botón <b>Iniciar</b> para comenzar con Visual Studio. <br>
En la ventana de inicio, elegir <b>Crear un nuevo proyecto</b> <br>
Elegir <b>"Aplicación de consola (.NET Core)"</b> de la lista y hacer clic en el botón siguiente. <br>
Ingresar un nombre para el proyecto y hacer clic en el botón crear.
<hr>
<h3>Salida de C#</h3>
Para generar valores o imprimir texto en <b>C#</b>, se puede usar el método:
<pre>
    WriteLine()
</pre>
Se puede agregar tantos métodos <b>WriteLine()</b> como se desee. <br>
Hay que tener en cuenta que agregará una nueva línea para cada método.
<pre>
    Console.WriteLine("Hello, World!");
    Console.WriteLine("I am learning C#");
    Console.WriteLine("It is awesome!");
</pre>
También se puede generar números y realizar cálculos matemáticos:
<pre>
    Console.WriteLine(10 + 20);
</pre>
<h3>El método Write</h3>
También hay un método <b>Write()</b>, que es similar a <b>WriteLine()</b>. <br>
La única diferencia es que no inserta una nueva línea al final de la salida:
<pre>
    Console.Write("Hello World! ");
    Console.Write("I will print on the same line.");
</pre>
En este tutorial, solo se usará <b>WriteLine()</b> porque facilita la lectura de la salida del código.
<hr>
<h3>Comentarios de C#</h3>
Los comentarios se pueden usar para explicar el código de <b>C#</b> y hacerlo más legible. <br>
También se puede utilizar para evitar la ejecución al probar código alternativo.
<h3>Comentarios de una sola línea</h3>
Los comentarios de una sola línea comienzan con dos barras diagonales:
<pre>
    //
</pre>
Cualquier texto entre <b>//</b> y al final de la línea es ignorado por <b>C#</b> (no se ejecutará).
<h3>Comentarios de varias líneas de C#</h3>
Los comentarios de varias líneas comienzan con <b>/*</b> y terminan con <b>*/</b>. <br>
Cualquier texto entre:
<pre>
    /*
    */
</pre>
será omitido por <b>C#</b>.
<hr>
<h3>C# Variables</h3>
Las variables son contenedores para almacenar valores de datos. <br>
En <b>C#</b>, hay diferentes tipos de variables (definidas con diferentes palabras clave), por ejemplo:
<ul>
<li><b>int</b> almacena números enteros (números enteros), sin decimales, como 123 o -123</li>
<li><b>double</b> almacena números de coma flotante, con decimales, como 19.99 o -19.99</li>
<li><b>char</b> almacena caracteres individuales, como 'a' o 'B'. Los valores de caracteres están entre comillas simples</li>
<li><b>string</b> almacena texto, como "Hola mundo". Los valores de cadena están entre comillas dobles</li>
<li><b>bool</b> Almacena valores con dos estados: verdadero o falso</li>
</ul>
<h3>Declaración (creación) de variables</h3>
Para crear una variable, se especifica el tipo y se asigna un valor:
<pre>
    type variableName = value;
</pre>
Donde <b>type</b> es un tipo de <b>C#</b> (como <b>int</b> o <b>string</b>) y <b>variableName</b> es el nombre de la variable (como x o name). <br>
El signo <b>igual</b> se utiliza para asignar valores a la variable. <br>
También se puede declarar una variable sin asignar el valor y asignar el valor más adelante:
<pre>
    int variableEmpty;
    variableEmpty = 10;
</pre>
Tenga en cuenta que si se asigna un nuevo valor a una variable existente, se sobrescribirá el valor anterior.
<h3>Constantes de C#</h3>
Si no se desea que otros sobrescriban los valores existentes, se puede agregar la palabra clave <b>const</b> delante del tipo variable. <br>
Esto declarará la variable como "<b>constante</b>", lo que significa que no se puede cambiar y es de solo lectura:
<pre>
    const string constString = "Hello, constant!";
</pre>
No se puede declarar una variable constante sin asignar el valor. Si lo hace, se producirá un error:
<pre>
    un campo const requiere que se proporcione un valor.
</pre>
<h3>Variables de visualización</h3>
El método <b>WriteLine()</b> se utiliza a menudo para mostrar valores de variables en la ventana de la consola. <br>
Para combinar texto y una variable, se usa el carácter <b>+</b>:
<pre>
    Console.WriteLine(variableString + "Concatenated!");
</pre>
También se puede usar el carácter <b>+</b> para agregar una variable a otra variable:
<pre>
    string firstName = "John";
    string lastName = "Doe";
    string fullName = firstName + " " + lastName;

    Console.WriteLine(fullName);
</pre>
Para valores numéricos, el carácter <b>+</b> funciona como un operador matemático (observe que usaremos variables <b>int</b> (enteras) aquí):
<pre>
    int firstNumber = 10;
    int secondNumber = 20;

    Console.WriteLine(firstNumber + secondNumber);
</pre>
<h3>Declarar muchas variables</h3>
Para declarar más de una variable del mismo tipo, se usa una lista separada por comas:
<pre>
    int x = 1,  y = 2,  z = 3;

    Console.WriteLine(x + y + z);
</pre>
También se puede asignar el mismo valor a varias variables en una línea:
<pre>
    x = y = z = 10;

    Console.WriteLine(x + y + z);
</pre>
<hr>
<h3>Identificadores de C#</h3>
Todas las variables de <b>C#</b> deben identificarse con nombres únicos. <br>
Estos nombres únicos se denominan identificadores. <br>
Los identificadores pueden ser nombres cortos (como x e y) o nombres más descriptivos (age, sum, totalVolume). <br>
Se recomienda utilizar nombres descriptivos para crear código comprensible y mantenible. <br>
Las reglas generales para nombrar variables son:
<ul>
    <li>Los nombres pueden contener letras, dígitos y el carácter de subrayado (_)</li>
    <li>Los nombres deben comenzar con una letra o un guión bajo.</li>
    <li>Los nombres deben comenzar con una letra minúscula y no pueden contener espacios en blanco</li>
    <li>Los nombres distinguen entre mayúsculas y minúsculas ("myVar" y "myvar" son variables diferentes)</li>
    <li>Las palabras reservadas (como las palabras clave de C#, como <b>int</b> o <b>double</b>) no se pueden usar como nombres</li>
</ul>
<hr>
<h3>Tipos de datos de C#</h3>
Como se explica en el capítulo de variables, una variable en <b>C#</b> debe ser un tipo de datos especificado. <br>
Un tipo de datos especifica el tamaño y el tipo de valores de variable. <br>
Es importante utilizar el tipo de datos correcto para la variable correspondiente; para evitar errores, para ahorrar tiempo y memoria, pero también hará que su código sea más fácil de mantener y leer. Los más comunes Los tipos de datos son:
<dl>
    <dt><b>int:</b>
        <dd>
            Almacena números enteros desde -2,147,483,648 hasta 2,147,483,647
        </dd>
    </dt>
    <dt><b>long:</b>
        <dd>
            Almacena números enteros desde -9,223,372,036,854,775,808 hasta 9,223,372,036,854,775,807
        </dd>
    </dt>
    <dt><b>float:</b>
        <dd>
            Almacena números fraccionarios. Suficiente para almacenar de 6 a 7 dígitos decimales
        </dd>
    </dt>
    <dt><b>double:</b>
        <dd>
            Almacena números fraccionarios. Suficiente para almacenar 15 dígitos decimales
        </dd>
    </dt>
    <dt><b>bool:</b>
        <dd>
            Almacena valores verdadero o falso
        </dd>
    </dt>
    <dt><b>char:</b>
        <dd>
            Almacena un solo carácter/letra, rodeado de comillas simples
        </dd>
    </dt>
    <dt><b>string:</b>
        <dd>
            Almacena una secuencia de caracteres, rodeada de comillas dobles
        </dd>
    </dt>
</dl>
<h3>Números</h3>
Los tipos de números se dividen en dos grupos:
<ul>
    <li>Los tipos enteros almacenan números enteros, positivos o negativos (como 123 o -456), sin decimales. Los tipos válidos son <b>int</b> y <b>long</b>. El tipo que debe usar depende del valor numérico.</li>
    <li>Los tipos de punto flotante representan números con un fraccionario, que contiene uno o más decimales. Los tipos válidos son <b>float</b> y <b>double</b>.</li>
</ul>
<h3>Tipos de enteros</h3>
<dl>
    <dt><b>int:</b>
        <dd>
            El tipo de datos <b>int</b> puede almacenar números enteros de -2147483648 a 2147483647. En general, el tipo de datos <b>int</b> es el tipo de datos preferido cuando se crean variables con un valor numérico.
            <pre>
                int variableInteger = 10;
            </pre>
        </dd>
    </dt>
    <dt><b>long:</b>
        <dd>
            El tipo de datos <b>long</b> puede almacenar números enteros de -9223372036854775808 a 9223372036854775807. Esto se usa cuando <b>int</b> no es lo suficientemente grande como para almacenar el valor. Hay que tener en cuenta   que se debe terminar el valor con una "L":
            <pre>
                long variableLong = 20L;
            </pre>
        </dd>
    </dt>
</dl>
<h3>Tipos de coma flotante</h3>
Se debe usar un tipo de punto flotante siempre que se necesite un número con un decimal, como 9.99 o 3.14515. <br>
Los tipos de datos <b>float</b> y <b>double</b> pueden almacenar números fraccionarios. Hay que tener en cuenta que se debe terminar el valor con una "F" para los flotantes y una "D" para los dobles
<pre>
    float varableFloat = 20.50f;
</pre>
<pre>
    double variableDouble = 10.5d;
</pre>
<h3>Números científicos</h3>
Un número de coma flotante también puede ser un número científico con una "e" para indicar la potencia de 10:
<pre>
    float scientificNumber = 35e3F;
</pre>
<h3>Booleanos</h3>
Un tipo de datos booleano se declara con la palabra clave <b>bool</b> y solo puede tomar los valores <b>true</b> o <b>false</b>:
<pre>
    bool variableBoolean = true;
</pre>
<h3>Caracteres</h3>
El tipo de datos <b>char</b> se usa para almacenar un solo carácter. El personaje debe ser entre comillas simples, como 'A' o 'c':
<pre>
    char variableChar = 'A';
</pre>
<h3>String</h3>
El tipo de datos <b>string</b> se utiliza para almacenar una secuencia de caracteres (texto). Los valores de cadena deben estar entre comillas dobles:
<pre>
    string variableString = "Hello, variable!";
</pre>
<hr>
<h3>Conversión de tipos de C#</h3>
La conversión de tipos es cuando se asigna un valor de un tipo de datos a otro tipo. <br>
En <b>C#</b>, hay dos tipos de fundición:
<ul>
    <li><b>Conversión implícita (automáticamente): </b>conversión de un tipo más pequeño a un tamaño de letra más grande char -> int -> long -> double -> float </li>
    <li><b>Conversión explícita (manualmente):</b> conversión de un tipo más grande a un tipo de tamaño más pequeño  float -> double -> long -> int -> char</li>
</ul>
<h3>Casting implícito</h3>
La conversión implícita se realiza automáticamente al pasar un tipo de tamaño más pequeño a un tipo de tamaño más grande:
<pre>
    double variableIntegerToDouble = variableInteger;
</pre>
<h3>Casting explícito</h3>
La conversión explícita debe realizarse manualmente colocando el tipo entre paréntesis delante del valor:
<pre>
    int  variableDoubleToInteger = (int)variableDouble;
</pre>
<h3>Métodos de conversión de tipos</h3>
También es posible convertir tipos de datos explícitamente mediante métodos integrados, como <b>Convert.ToBoolean</b>, <b>Convert.ToDouble</b>, <b>Convert.ToString</b>, <b>Convert.ToInt32</b>(int) y <b>Convert.ToInt64</b>(long):
<pre>
    string variableLongToString = Convert.ToString(variableLong);
    int variableFloatToInteger = Convert.ToInt32(variableFloat);
    double variableLongToDouble = Convert.ToDouble(variableLong);
</pre>
<hr>
<h3>Entrada de usuario de C#</h3>
Ya se ha aprendido que <b>Console.WriteLine()</b> se utiliza para generar (imprimir) valores. Ahora se usará <b>Console.ReadLine()</b> para obtener la entrada del usuario:
<pre>
    Console.WriteLine("Enter your name:");

    string? nameUser = Console.ReadLine();

    Console.WriteLine($"Your name is: {nameUser}");
</pre>
<h3>Entrada de usuario y números</h3>
El método <b>Console.ReadLine()</b> devuelve un archivo <b>string</b>. Por lo tanto, no se puede obtener información de otro tipo de datos, como <b>int</b>. El siguiente programa provocará un error:
<pre>
    Console.WriteLine("Enter your age:");

    int age = Console.ReadLine();

    Console.WriteLine("Your age is: " + age);
</pre>
El mensaje de error será algo como esto:
<pre>
    Cannot implicitly convert type 'string' to 'int'
</pre>
Como dice el mensaje de error, no se puede convertir implícitamente el tipo 'string' en 'int'. <br>
En ese caso debe usarse el método <b>.Convert</b>:
<pre>
    Console.WriteLine("Enter your age:");

    int ageUser = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine($"Your age is: {ageUser}");
</pre>
<hr>
<h3>Operadores</h3>
Los operadores se utilizan para realizar operaciones en variables y valores.
<dl>
    <dt><b>+</b>
        <dd>
            Suma dos valores x + y
            <pre>
                Console.WriteLine($"Sum of X and Y: {operatorX + operatorY}");
            </pre>
        </dd>
    </dt>
    <dt><b>-</b>
        <dd>
            Resta un valor de otro x - y
            <pre>
                Console.WriteLine($"Substraction of X and Y: {operatorX - operatorY}");
            </pre>
        </dd>
    </dt>
    <dt><b>*</b>
        <dd>
            Multiplica dos valores x * y
            <pre>
                Console.WriteLine($"Multiplication of X and Y: {operatorX * operatorY}");
            </pre>
        </dd>
    </dt>
    <dt><b>/</b>
        <dd>
            Divide un valor entre otro x / y
            <pre>
                Console.WriteLine($"Division of X and Y: {operatorX / operatorY}");
            </pre>
        </dd>
    </dt>
    <dt><b>%</b>
        <dd>
            Devuelve el resto de la división x % y
            <pre>
                Console.WriteLine($"Residue of X and Y: {operatorX % operatorY}");
            </pre>
        </dd>
    </dt>
    <dt><b>++</b>
        <dd>
            Aumenta el valor de una variable en 1 x++
            <pre>
                Console.WriteLine($"Addition to X: {++operatorX}");
            </pre>
        </dd>
    </dt>
    <dt><b>--</b>
        <dd>
            Disminuye el valor de una variable en 1 x--
            <pre>
                Console.WriteLine($"Decrease to X: {--operatorX}");
            </pre>
        </dd>
    </dt>
</dl>
<h3>Operadores de asignación</h3>
Los operadores de asignación se utilizan para asignar valores a las variables. <br>
En el siguiente ejemplo, se usará el operador de asignación (<b>=</b>) Para asignar el valor 10 a una variable llamada x:
<pre>
    int x = 10;
</pre>
El operador de asignación de suma (<b>+=</b>) agrega un valor a una variable:
<pre>
    x += 5;
</pre>
Una lista de todos los operadores de asignación:
<dl>
    <dt><b>=</b>
        <dd>
            Lo mismo que x = 5
            <pre>
                operatorInteger = 100;
            </pre>
        </dd>
    </dt>
    <dt><b>+=</b>
        <dd>
            Lo mismo que x = x + 3
            <pre>
                operatorInteger += 5;
            </pre>
        </dd>
    </dt>
    <dt><b>-=</b>
        <dd>
            Lo mismo que x = x - 3
            <pre>
                operatorInteger -= 5;
            </pre>
        </dd>
    </dt>
    <dt><b>*=</b>
        <dd>
            Lo mismo que x = x * 3
            <pre>
                operatorInteger *= 5;
            </pre>
        </dd>
    </dt>
    <dt><b>/=</b>
        <dd>
            Lo mismo que x = x / 3
            <pre>
                operatorInteger /= 5;
            </pre>
        </dd>
    </dt>
    <dt><b>%=</b>
        <dd>
            Lo mismo que x = x % 3
            <pre>
                operatorInteger %= 5;
            </pre>
        </dd>
    </dt>
    <dt><b>&=</b>
        <dd>
            Lo mismo que x = x & 3
            <pre>
                operatorInteger &= 5;
            </pre>
        </dd>
    </dt>
    <dt><b>|=</b>
        <dd>
            Lo mismo que x = x | 3
            <pre>
                operatorInteger |= 5;
            </pre>
        </dd>
    </dt>
    <dt><b>^=</b>
        <dd>
            Lo mismo que x = x ^ 3
            <pre>
                operatorInteger ^= 5;
            </pre>
        </dd>
    </dt>
    <dt><b>>>=</b>
        <dd>
            Lo mismo que x = x >> 3
            <pre>
                operatorInteger >>= 5;
            </pre>
        </dd>
    </dt>
    <dt><b><<=</b>
        <dd>
            Lo mismo que x = x << 3
            <pre>
                operatorInteger <<= 5;
            </pre>
        </dd>
    </dt>
</dl>
<h3>Operadores de comparación</h3>
Los operadores de comparación se utilizan para comparar dos valores (o variables). Esto es importante en la programación, porque nos ayuda a encontrar respuestas y tomar decisiones. <br>
El valor devuelto de una comparación es <b>True</b> o <b>False</b>. Estos valores se conocen como valores booleanos.
<pre>
    Console.WriteLine("Enter a number to comparative(X):");
    int operatorLogicX = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine("Enter a number to comparative(Y):");

    int operatorLogicY = Convert.ToInt32(Console.ReadLine());

    Console.WriteLine($"X = Y? {operatorLogicX == operatorLogicY}");
    Console.WriteLine($"X != Y? {operatorLogicX != operatorLogicY}");
    Console.WriteLine($"X > Y? {operatorLogicX > operatorLogicY}");
    Console.WriteLine($"X < Y? {operatorLogicX < operatorLogicY}");
    Console.WriteLine($"X >= Y? {operatorLogicX >= operatorLogicY}");
    Console.WriteLine($"X <= Y? {operatorLogicX <= operatorLogicY}");
</pre>
<h3>Operadores lógicos</h3>
Al igual que con los operadores de comparación, también se puede probar <b>True</b> o <b>False</b> valores con operadores lógicos. <br>
Los operadores lógicos se utilizan para determinar la lógica entre variables o valores:
<pre>
    Console.WriteLine($"X != and > Y? {operatorLogicX != operatorLogicY && operatorLogicX > operatorLogicY}");
    Console.WriteLine($"X != or > Y? {operatorLogicX != operatorLogicY || operatorLogicX > operatorLogicY}");
</pre>