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
<hr>
<h3>Matemáticas de C#</h3>
La clase <b>Math</b> tiene muchos métodos que permiten realizar tareas matemáticas en números.
<h3>Math.Max(x,y)</h3>
El método <b>Math.Max(x,y)</b> se puede utilizar para encontrar el valor más alto de x e y:
<pre>
    Console.WriteLine(Math.Max(mathX, mathY));
</pre>
<h3>Math.Min(x,y)</h3>
El método <b>Math.Min(x,y)</b> se puede utilizar para encontrar el valor más bajo de x e y:
<pre>
    Console.WriteLine(Math.Min(mathX, mathY));
</pre>
<h3>Math.Sqrt(x)</h3>
El método <b>Math.Sqrt(x)</b> devuelve la raíz cuadrada de x:
<pre>
    Console.WriteLine(Math.Sqrt(mathX));
</pre>
<h3>Math.Sbs(x)</h3>
El método <b>Math.Abs(x)</b> devuelve el valor absoluto positivo de x:
<pre>
    Console.WriteLine(Math.Abs(-mathX));
</pre>
<h3>Math.Round(x)</h3>
El método <b>Math.Round(x)</b> redondea un número al entero más cercano:
<pre>
    Console.WriteLine(Math.Round(mathX));
</pre>
<hr>
<h3>Cadenas de C#</h3>
Las cadenas se utilizan para almacenar texto. <br>
Una variable <b>string</b>contiene una colección de caracteres entre comillas dobles:
<pre>
    string exampleString = "Hello, C#!";
</pre>
<h3>Longitud de la cadena</h3>
Una cadena en <b>C#</b> es en realidad un objeto, que contiene propiedades y métodos que pueden realizar ciertas operaciones en cadenas. Por ejemplo, la longitud de una cadena se puede encontrar con la propiedad <b>Length</b>:
<pre>
    Console.WriteLine($"The length of the string is: {exampleString.Length}");
</pre>
<h3>Otros métodos</h3>
Hay muchos métodos de cadena disponibles, por ejemplo <b>ToUpper()</b> y <b>ToLower()</b>, que devuelve una copia de la cadena convertida a mayúsculas o minúsculas:
<pre>
    Console.WriteLine(exampleString.ToUpper());
    Console.WriteLine(exampleString.ToLower());
</pre>
<h3>Concatenación de cadenas</h3>
El operador <b>+</b> se puede usar entre cadenas para combinarlas. Esto se llama concatenación:
<pre>
    Console.WriteLine(exampleString + exampleAuxString);
</pre>
También se puede usar el método <b>string.Concat()</b> para concatenar dos cadenas:
<pre>
    Console.WriteLine(string.Concat(exampleString, exampleAuxString));
</pre>
<h3>Sumar números y cadenas</h3>
<b>C#</b> usa el operador <b>+</b> para la suma y la concatenación. <br>
<b>Se suman números. Las cadenas se concatenan.</b>
<h3>Interpolación de cadenas</h3>
Otra opción de concatenación de cadenas es la interpolación de cadenas, que sustituye los valores de las variables en marcadores de posición en una cadena. Tener en cuenta que no se tiene que preocupar por los espacios, como con la concatenación:
<pre>
    Console.WriteLine($"{exampleString} {exampleAuxString}");
</pre>
También se debe tener en cuenta que se debe usar el signo de dólar <b>$</b> cuando use el método de interpolación de cadenas. <br>
La interpolación de cadenas se introdujo en la versión 6 de <b>C#</b>.
<h3>Cadenas de acceso</h3>
Se puede acceder a los caracteres de una cadena haciendo referencia a su número de índice Corchetes interiores <b>[]</b>:
<pre>
    Console.WriteLine($"The first character is: {exampleString[0]}");
</pre>
También se puede encontrar la posición de índice de un carácter específico en una cadena, utilizando el método <b>IndexOf()</b>:
<pre>
    Console.WriteLine($"The 'C' character is in the index: {exampleString.IndexOf('C')}");
</pre>
Otro método útil es <b>Substring()</b>, que extrae los caracteres de una cadena, a partir de la posición/índice de caracteres especificados y devuelve una nueva cadena. Este método se usa a menudo junto con <b>IndexOf()</b> para obtener la posición específica del personaje:
<pre>
    int index = exampleString.IndexOf('C');
    string language = exampleString.Substring(index);

    Console.WriteLine($"The language is: {language}");
</pre>
<h3>Caracteres especiales</h3>
Dado que las cadenas deben escribirse entre comillas, <b>C#</b> malinterpretará esta cadena, y genere un error:
<pre>
    Console.WriteLine("This character allows you to use " "");
</pre>
La solución para evitar este problema es usar el carácter de escape de barra invertida. <br>
El carácter de escape de barra invertida <b>\</b> convierte los caracteres especiales en caracteres de cadena:
<pre>
    Console.WriteLine("This character \\ allows you to use \" \"");
</pre>
La secuencia <b>\"</b> inserta una comilla doble en una cadena. <br>
La secuencia <b>\'</b> inserta una comilla simple en una cadena. <br>
La secuencia <b>\\</b> inserta una barra invertida en una cadena. <br>
La secuencia <b>\n</b> inserta una nueva línea en una cadena. <br>
La secuencia <b>\t</b> inserta una tabulación en una cadena. <br>
La secuencia <b>\b</b> inserta un backspace en una cadena.
<hr>
<h3>C# Booleanos</h3>
Muy a menudo, en programación, se necesitará un tipo de datos que solo pueda tener uno de dos valores, como:
<ul>
    <li>SÍ / NO</li>
    <li>ENCENDIDO / APAGADO</li>
    <li>VERDADERO / FALSO</li>
</ul>
Para esto, <b>C#</b> tiene un tipo de datos <b>bool</b>, que puede tomar los valores <b>true</b> o <b>false</b>.
<h3>Valores booleanos</h3>
Un tipo booleano se declara con la palabra clave <b>bool</b> y solo puede tomar los valores <b>true</b> o <b>false</b>:
<pre>
    bool exampleBoolean = true;
</pre>
<h3>Expresión booleana</h3>
Una expresión booleana devuelve un valor booleano: <b>True</b> o <b>False</b>, comparando valores/variables. <br>
Esto es útil para construir lógica y encontrar respuestas. <br>
El valor booleano de una expresión es la base de todas las comparaciones y condiciones de <b>C#</b>.
<hr>
<h3>Condiciones de C# y declaraciones If</h3>
Ya se sabe que C# admite condiciones de comparación conocidas de las matemáticas, como:
<ul>
    <li><b>Menos de:</b> a < b</li>
    <li><b>Menor o igual a:</b> a <= b</li>
    <li><b>Mayor que:</b> a > b</li>
    <li><b>Mayor o igual a:</b> a >= b</li>
    <li><b>Igual a:</b> a == b</li>
    <li><b>No es igual a:</b> a != b</li>
</ul>
Se puede utilizar estas condiciones para realizar diferentes acciones para diferentes decisiones. <br>
<b>C#</b> tiene las siguientes instrucciones condicionales:
<ul>
    <li>Se usa <b>if</b> para especificar un bloque de código que se ejecutará, si una condición especificada es verdadera</li>
    <li>Se usa <b>else</b> para especificar un bloque de código que se ejecutará, si la misma condición es falsa</li>
    <li>Se usa <b>else if</b> para especificar una nueva condición para probar, si la primera condición es falsa</li>
    <li>Se usa <b>switch</b> para especificar muchos bloques de código alternativos que se ejecutarán</li>
</ul>
<h3>La declaración if</h3>
Use la instrucción <b>if</b> para especificar un bloque de código de <b>C#</b> que se ejecutará si una condición es <b>true</b>:
<pre>
    if (condition) 
        {
          // block of code to be executed if the condition is True
        }
</pre>
<h3>La declaración else</h3>
Se utiliza la instrucción <b>else</b> para especificar un bloque de código que se ejecutará si la condición es <b>false</b>.
<pre>
    if (condition) 
        {
          // block of code to be executed if the condition is True
        }
    else
        {
          // block of code to be executed if the condition is false
        }
</pre>
<h3>La declaración else id</h3>
Se utiliza la instrucción <b>else id</b> para especificar una nueva condición si la primera es <b>false</b>.
<pre>
    if (condition1) 
        {
          // block of code to be executed if the condition1 is True
        }
    else if (condition2)
        {
          // block of code to be executed if the condition1 is false and condition2 is true
        }
    else
        {
          // block of code to be executed if the condition1 and condition2 is false
        }
</pre>
<h3>operador ternario</h3>
También hay una abreviatura <b>if else</b>, que se conoce como <b>ternario</b> porque consta de tres operandos. <br>
Se puede utilizar para reemplazar varias líneas de código por una sola línea. <br>
A menudo se usa para reemplazar declaraciones simples si no:
<pre>
    Console.WriteLine(operatorLogicX > 50 ? "X is greater than 50" : operatorLogicX == 50  ? "X is equal to 50" : "X is less than 50");
</pre>
<h3>Instrucciones switch de C#</h3>
Se usa la instrucción <b>switch</b> para seleccionar uno de los muchos bloques de código que se ejecutarán:
<pre>
    switch(expression) 
    {
        case x:
            // code block
        break;
        case y:
            // code block
        break;
        default:
            // code block
            break;
    }
</pre>
Así es como funciona:
<ul>
    <li>La expresión <b>switch</b> se evalúa una vez</li>
    <li>El valor de la expresión se compara con los valores de cada <b>case</b></li>
    <li>Si hay una coincidencia, se ejecuta el bloque de código asociado</li>
    <li>Las palabras clave <b>break</b> y <b>default</b> se describirán más adelante en este capítulo</li>
</ul>
<h3>La palabra clave break</h3>
Cuando <b>C#</b> alcanza una palabra clave <b>break</b>, sale del bloque <b>switch</b>. <br>
Esto detendrá la ejecución de más código y pruebas de casos en el interior el bloque. <br>
Cuando se encuentra una coincidencia y el trabajo está hecho, es hora de un descanso. No hay necesidad de más pruebas.
<h3>La palabra clave default</h3>
La palabra clave <b>default</b> es opcional y especifica algún código que se ejecutará si no hay coincidencia de casos:
<pre>
    switch (operatorLogicX)
    {
        case < 50:
            Console.WriteLine("X is less than 50");
        break;
        case 50:
            Console.WriteLine("X is equal to 50");
        break;
        case > 50:
            Console.WriteLine("X is greater than 50");
        break;
        default:
            Console.WriteLine("X is a number?");
        break;
    }
</pre>
<hr>
<h3>Bucles</h3>
Los bucles pueden ejecutar un bloque de código siempre que se alcance una condición especificada. <br>
Los bucles son útiles porque ahorran tiempo, reducen errores y hacen que el código sea más legible.
<h3>Bucle While de C#</h3>
El bucle <b>while</b> recorre un bloque de código siempre que una condición especificada sea <b>True</b>:
<pre>
    while (condition) 
    {
        // code block to be executed
    }
</pre>
<h3>El bucle Do/While</h3>
El bucle <b>do/while</b> es una variante del bucle <b>while</b>. Este bucle ejecura el bloque de código una vez, antes de verificar si la condición es verdadera, entonces repite el bucle siempre que la condición sea verdadera:
<pre>
    do 
    {
        // code block to be executed
    }
    while (condition);
</pre>
<h3>Bucle For de C#</h3>
Cuando se sabe exactamente cuántas veces se quiere recorrer un bloque de code, se usa el bucle <b>for</b> en lugar de un bucle <b>while</b>:
<pre>
    for (statement 1; statement 2; statement 3) 
    {
        // code block to be executed
    }
</pre>
<ul>
    <li><b>statement 1:</b> se ejecuta (una vez) antes de la ejecución del bloque de código.</li>
    <li><b>statement 2:</b> define la condición para ejecutar el bloque de código.</li>
    <li><b>statement 3:</b> se ejecuta (cada vez) después de que se haya ejecutado el bloque de código.</li>
</ul>
<h3>Bucles anidados</h3>
También es posible colocar un bucle dentro de otro bucle. Esto se denomina bucle anidado.
<h3>El bucle foreach</h3>
También hay un bucle, que se usa exclusivamente para recorrer elementos en una matriz (u otros conjuntos de datos) <b>foreach</b>:
<pre>
    foreach (type variableName in arrayName) 
    {
        // code block to be executed
    }
</pre>
<h3>Breack de C#</h3>
Ya ha visto la instrucción <b>break</b> utilizada en un capítulo anterior de este tutorial. Se usó para "saltar" de una declaración <b>switch</b>. <br>
La instrucción <b>break</b> también se puede usar para saltar fuera de un bucle <b>for</b>
<pre>
    for (int counterInnerFor = 0; counterInnerFor <= 3; counterInnerFor++)
    {
        Console.WriteLine($"The counter for the inner \"for\" is: {counterInnerFor}");

        if (counterInnerFor == 2)
        {
            Console.WriteLine($"Broken in: {counterInnerFor}");

            break;
        }
    }
</pre>
<h3>Continue de C#</h3>
La instrucción <b>continue</b> interrumpe una iteración (en el bucle), si se produce una condición especificada, y continúa con la siguiente iteración en el bucle
<pre>
    for (int counterInnerFor = 0; counterInnerFor <= 3; counterInnerFor++)
    {
        Console.WriteLine($"The counter for the inner \"for\" is: {counterInnerFor}");

        if (counterInnerFor == 2)
        {
            Console.WriteLine($"Omitted: {counterInnerFor}");

            continue;
        }
    }
</pre>
<h3>Interrumpir y continuar en bucle While</h3>
También se puede usar <b>break</b> y <b>continue</b> es bucles <b>while</b>.
<hr>
<h3>Matrices de C#</h3>
Las <b>matrices</b> se utilizan para almacenar varios valores en una sola variable, en lugar de declarar variables separadas para cada una valor.
Para declarar una <b>matriz</b>, se define el tipo de variable con corchetes:
<pre>
    string[] cars = ["BMW", "Ford", "Toyota"];
</pre>
Ahora hemos declarado una variable que contiene una matriz de cadenas. <br>
Para crear una matriz de números enteros, se puede escribir:
<pre>
    int[] numbers = [20, 25, 49, 50];
</pre>
<h3>Acceder a los elementos de una matriz</h3>
Para acceder a un elemento de la matriz, se hace referencia al número de índice.
<pre>
    Console.WriteLine($"The second fruit is: {fruits[1]}");
</pre>
<h3>Cambiar un elemento de matriz</h3>
Para cambiar el valor de un elemento específico, se debe consultar el número de índice.
<pre>
    fruits[2] = "strawberry";
</pre>
<h3>Longitud de la matriz</h3>
Para saber cuántos elementos tiene una matriz, se usa la propiedad <b>Length</b>:
<pre>
    Console.WriteLine($"The longitude for the array \"numbers\" is: {numbers.Length}");
</pre> 
<h3>Otras formas de crear una matriz</h3>
Si está familiarizado con <b>C#</b>, es posible que haya visto matrices creadas con la palabra clave <b>new</b> y quizás también haya visto matrices con un tamaño especificado. En <b>C#</b>, hay diferentes maneras de crear una matriz:
<pre>
    string[] topColors = new string[3];

    topColors[0] = "Green";
    topColors[1] = "Red";
    topColors[2] = "Blue";
</pre>
<h3>Bucle a través de una matriz</h3>
Se puede recorrer los elementos de la matriz con el bucle <b>for</b> y usar la propiedad <b>Length</b> para especificar cuántas veces debe ejecutarse el bucle.
<pre>
    for (int counter = 0; counter < numbers.Length; counter++)
    {

         Console.WriteLine(counter);
    }
</pre>
<h3>Ordenar una matriz</h3>
Hay muchos métodos de matriz disponibles, por ejemplo <b>Sort()</b>, que ordena una matriz alfabéticamente o en orden ascendente:
<pre>
    Array.Sort(fruits);
</pre>
<h3>System.Linq (Espacio de nombres)</h3>
Otros métodos de matriz útiles, como  <b>Min</b>, <b>Max</b> y <b>Sum</b> se pueden encontrar en el espacio de nombres <b>System.Linq</b>:
<pre>
    Console.WriteLine(numbers.Max());
    Console.WriteLine(numbers.Min());
    Console.WriteLine(numbers.Sum());
</pre>  
<h3>Matrices multidimensionales</h3>
En el capítulo anterior, aprendiste sobre matrices, que también se conoce como matrices unidimensionales. Estos son geniales y algo que usarás mucho mientras programas en C #. Sin embargo, si desea almacenar datos como un formulario tabular, como una tabla con filas y columnas, Necesita familiarizarse con las matrices multidimensionales. <br>
Una matriz multidimensional es básicamente una matriz de matrices. <br>
Las matrices pueden tener cualquier número de dimensiones. Los más comunes son las matrices bidimensionales (2D).
<h3>Matrices bidimensionales</h3>
Para crear una matriz 2D, se agrega cada matriz dentro de su propio conjunto de llaves y se inserte una coma <b>,</b> dentro de las llaves:
<pre>
    int[,] arrayBi =
    {
        {10, 20, 30},
        {5, 15, 25}
    };

    int[,] arrayBiDefined = new int[2, 3];

    arrayBiDefined[0, 0] = 40;
    arrayBiDefined[0, 1] = 50;
    arrayBiDefined[0, 2] = 60;
    arrayBiDefined[1, 0] = 35;
    arrayBiDefined[1, 1] = 45;
    arrayBiDefined[1, 2] = 55;

    int[][] arrayJagged = [[70, 80], [65]];

    int[][] arrayJaggedDefined = new int[2][];

    arrayJaggedDefined[0] = new int[2];
    arrayJaggedDefined[1] = new int[4];

    arrayJaggedDefined[0][0] = 90;
    arrayJaggedDefined[0][1] = 100;
    arrayJaggedDefined[1][0] = 75;
    arrayJaggedDefined[1][1] = 85;
    arrayJaggedDefined[1][2] = 95;
    arrayJaggedDefined[1][3] = 105;
</pre>
La coma simple <b>[,]</b> especifica que la matriz es bidimensional. Una matriz tridimensional tendría dos comas <b>[,,]</b>.
<h3>Acceder a elementos de una matriz 2D</h3>
Para acceder a un elemento de una matriz bidimensional, se debe especificar dos índices: uno para la matriz y otro para el elemento dentro de esa matriz:
<pre>
    Console.WriteLine($"The element 1:1 for \"arrayBi\" is: {arrayBi[0, 0]}");
    Console.WriteLine($"The element 1:1 for \"arrayBiDefined\" is: {arrayBiDefined[0, 0]}");
    Console.WriteLine($"The element 1:1 for \"arrayJagged\" is: {arrayJagged[0][0]}");
    Console.WriteLine($"The element 1:1 for \"arrayJaggedDefined\" is: {arrayJaggedDefined[0][0]}");
</pre>
<h3>Cambiar elementos de una matriz 2D</h3>
También puede cambiar el valor de un elemento.
<pre>
    arrayBi[0, 0] = 11;
</pre>
<h3>Bucle a través de una matriz 2D</h3>
Se puede recorrer fácilmente los elementos de una matriz bidimensional con un bucle <b>foreach</b>:
<pre>
    foreach (int itemArrayBi in arrayBi)
    {
        Console.WriteLine(itemArrayBi);
    }
</pre>
También se puede usar un bucle <b>for</b>. Para matrices multidimensionales, se necesita un bucle para cada una de las dimensiones de la matriz. <br>
También se debe tener en cuenta que tenemos que usar <b>GetLength()</b> en lugar de <b>Length</b> para especificar cuántas veces debe ejecutarse el bucle:
<pre>
    for (int counterArrayBi = 0; counterArrayBi < arrayBi.GetLength(0); counterArrayBi++)
    {
        for (int counterInnerArrayBi = 0; counterInnerArrayBi < arrayBi.GetLength(1); counterInnerArrayBi++)
        {
        Console.WriteLine(counterInnerArrayBi);
        }
    }
</pre>