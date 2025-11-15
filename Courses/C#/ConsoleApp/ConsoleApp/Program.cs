// Usar la familia de clases
using ConsoleApp;

// Escribir en la consola "¡Hello, World!", usando la nueva versión de .NET
Console.WriteLine("Hello, C#!");
// WriteLine("") permite escribir texto en una nueva línea
Console.WriteLine("Hello, World!");
Console.WriteLine("I am learning C#");
Console.WriteLine("It is awesome!");
// WriteLine() permite realizar operaciones matemáticas
Console.WriteLine(10 + 20);
// Write("") permite escribir texto en la misma línea
Console.Write("Hello World! ");
// Escribir una línea nueva
Console.WriteLine("i will print on the same line.");

/* Esto es un comentario de varias líneas
 en C#
 */

// Declaración de variables
// Entero
int variableInteger = 10;
// Entero grande
long variableLong = 20L;
// Decimal grande
float variableFloat = 20.50f;
// Decimal
double variableDouble = 10.5;
// Caracter
char variableChar = 'A';
// Cadena de texto
string variableString = "Hello, variable!";
// Booleano
bool variableBoolean = true;
// Entero sin asignar valor
int variableEmpty;
// Asignación de valor a variable
variableEmpty = 10;

// Escribir en la consola interpolada
Console.WriteLine($"{variableInteger} {variableLong} {variableFloat} {variableDouble} {variableChar} {variableString} {variableBoolean} {variableEmpty}");

// Declaración de constantes
const string constString = "Hello, constant!";
// Escritura de constante
Console.WriteLine(constString);

// Escribir en la consola concatenada
Console.WriteLine(variableString + " Concatenated!");

// Declaración y escritura de variables concatenadas
// Cadena de texto
string firstName = "John";
// Cadena de texto
string lastName = "Doe";
// Cadena de texto
string fullName = firstName + " " + lastName;
// Escribir en la consola
Console.WriteLine(fullName);

// Declaración y escritura de variables enteras concatenadas (Se suman)
// Entero
int firstNumber = 10;
// Entero
int secondNumber = 20;
// Escribir en la consola concatenada
Console.WriteLine(firstNumber + secondNumber);

// Múltiple declaración de variables
int x = 1,  y = 2,  z = 3;
// Escribir en la consola concatenada
Console.WriteLine(x + y + z);

// Asignación de valor a múltiples variables
x = y = z = 10;
// Escribir en la consola concatenada
Console.WriteLine(x + y + z);

// Número científico
float scientificNumber = 35e3F;
// Escribir en la consola
Console.WriteLine(scientificNumber);

// Conversión implícita
double variableIntegerToDouble = variableInteger;
// Escribir en la consola interpolada
Console.WriteLine($"variableIntegerToDouble: {variableIntegerToDouble}");

// Conversión explícita
int  variableDoubleToInteger = (int)variableDouble;
// Escribir en la consola interpolada
Console.WriteLine($"variableDoubleToInteger: {variableDoubleToInteger}");

// Conversión por método
// Cadena de texto
string variableLongToString = Convert.ToString(variableLong);
// Entero
int variableFloatToInteger = Convert.ToInt32(variableFloat);
// Decimal
double variableLongToDouble = Convert.ToDouble(variableLong);
// Escribir en la consola interpolada
Console.WriteLine($"{variableLongToString} {variableFloatToInteger} {variableLongToDouble}");

// Entrada del usuario
Console.WriteLine("Enter your name:");
// El "?", después del tipo de variable significa que puede ser null
// Cadena de texto
string? nameUser = Console.ReadLine();

// Escribir en la consola interpolada
Console.WriteLine($"Your name is: {nameUser}");

// Entrada del usuario en número
Console.WriteLine("Enter your age:");
// Conversión de string por defecto a entero
int ageUser = Convert.ToInt32(Console.ReadLine());

// Escribir en la consola interpolada
Console.WriteLine($"Your age is: {ageUser} and in 5 years you have {ageUser + 5} years");

// Operadores aritméticos
// Decimal
double operatorX = 7;
// Decimal
double operatorY = 5;
// Escribir en la consola interpolada
Console.WriteLine($"Sum of X and Y: {operatorX + operatorY}");
// Escribir en la consola interpolada
Console.WriteLine($"Substraction of X and Y: {operatorX - operatorY}");
// Escribir en la consola interpolada
Console.WriteLine($"Multiplication of X and Y: {operatorX * operatorY}");
// Escribir en la consola interpolada
Console.WriteLine($"Division of X and Y: {operatorX / operatorY}");
// Escribir en la consola interpolada
Console.WriteLine($"Residue of X and Y: {operatorX % operatorY}");
// Escribir en la consola interpolada
Console.WriteLine($"Addition to X: {++operatorX}");
// Escribir en la consola interpolada
Console.WriteLine($"Decrease to X: {--operatorX}");

// Operadores de asignación
// Entero
int operatorInteger = 100;

// Adición
operatorInteger += 5;
// Escribir en la consola interpolada
Console.WriteLine($"Now X is: {operatorInteger}");

// Substracción
operatorInteger -= 5;
// Escribir en la consola interpolada
Console.WriteLine($"Now X is: {operatorInteger}");

// Potenciación
operatorInteger *= 5;
// Escribir en la consola interpolada
Console.WriteLine($"Now X is: {operatorInteger}");

// División
operatorInteger /= 5;
// Escribir en la consola interpolada
Console.WriteLine($"Now X is: {operatorInteger}");

// Residuo
operatorInteger %= 5;
// Escribir en la consola interpolada
Console.WriteLine($"Now X is: {operatorInteger}");

// Bit a bit
operatorInteger &= 5;
// Escribir en la consola interpolada
Console.WriteLine($"Now X is: {operatorInteger}");

// Bit a bit
operatorInteger |= 5;
// Escribir en la consola interpolada
Console.WriteLine($"Now X is: {operatorInteger}");

// Bit a bit
operatorInteger ^= 5;
// Escribir en la consola interpolada
Console.WriteLine($"Now X is: {operatorInteger}");

// Bit a bit
operatorInteger >>= 5;
// Escribir en la consola interpolada
Console.WriteLine($"Now X is: {operatorInteger}");

// Bit a bit
operatorInteger <<= 5;
// Escribir en la consola interpolada
Console.WriteLine($"Now X is: {operatorInteger}");

// Operadores lógicos
// Escribir en la consola interpolada
Console.WriteLine("Enter a number to comparative(X):");
// Entrada del usuario en entero
int operatorLogicX = Convert.ToInt32(Console.ReadLine());

// Escribir en la consola interpolada
Console.WriteLine("Enter a number to comparative(Y):");
// Entrada del usuario en entero
int operatorLogicY = Convert.ToInt32(Console.ReadLine());

// Escribir en la consola interpolada para igualdad
Console.WriteLine($"X = Y? {operatorLogicX == operatorLogicY}");
// Escribir en la consola interpolada para diferencia
Console.WriteLine($"X != Y? {operatorLogicX != operatorLogicY}");
// Escribir en la consola interpolada para mayor que
Console.WriteLine($"X > Y? {operatorLogicX > operatorLogicY}");
// Escribir en la consola interpolada para menor que
Console.WriteLine($"X < Y? {operatorLogicX < operatorLogicY}");
// Escribir en la consola interpolada para mayor o igual que
Console.WriteLine($"X >= Y? {operatorLogicX >= operatorLogicY}");
// Escribir en la consola interpolada para menor o igual que
Console.WriteLine($"X <= Y? {operatorLogicX <= operatorLogicY}");

// Operadores lógicos
// Escribir en la consola interpolada para sí y sí
Console.WriteLine($"X != and > Y? {operatorLogicX != operatorLogicY && operatorLogicX > operatorLogicY}");
// Escribir en la consola interpolada sí o sí
Console.WriteLine($"X != or > Y? {operatorLogicX != operatorLogicY || operatorLogicX > operatorLogicY}");

// Matemáticas
// Entero
int mathX = 10;
// Entero
int mathY = 20;
// Acceder al método Max de la clase Math para saber el valor más grande
Console.WriteLine(Math.Max(mathX, mathY));
// Acceder al método Min de la clase Math para saber el valor más bajo
Console.WriteLine(Math.Min(mathX, mathY));
// Acceder al método Sqrt de la clase Math para saber la raíz cuadrada
Console.WriteLine(Math.Sqrt(mathX));
// Acceder al método Abs de la clase Math para saber el valor absoluto
Console.WriteLine(Math.Abs(-mathX));
// Acceder al método Round de la clase Math para redondear al entero más cercano
Console.WriteLine(Math.Round(Convert.ToDouble(mathX)));

// Cadenas de texto
// Cadena de texto
string exampleString = "Hello, C#! ";
// Cadena de texto
string exampleAuxString = "Awesome!";
// Acceder al método Lenght para saber la longitud de la cadena
Console.WriteLine($"The length of the string is: {exampleString.Length}");
// Acceder al método ToUpper para convertir la cadena en mayúsculas
Console.WriteLine(exampleString.ToUpper());
// Acceder al método ToLower para convertir la cadena en minúsculas
Console.WriteLine(exampleString.ToLower());
// Escribir en la consola concatenada
Console.WriteLine(exampleString + exampleAuxString);
// Acceder al método Concat de la clase string para concatenar cadenas de texto
Console.WriteLine(string.Concat(exampleString, exampleAuxString));
// Escribir en la consola interpolada
Console.WriteLine($"{exampleString} {exampleAuxString}");
// Obtener caracter por índice de la cadena de texto
Console.WriteLine($"The first character is: {exampleString[0]}");
// Obtener índice de la cadena de texto
Console.WriteLine($"The 'C' character is in the index: {exampleString.IndexOf('C')}");

// Obtener índice de la cadena de texto
int index = exampleString.IndexOf('C');
// Obtener a partir de índice
string language = exampleString.Substring(index);
// Escribir en la consola interpolada
Console.WriteLine($"The language is: {language}");
// Caracteres especiales
Console.WriteLine("This character \\ allows you to use \" or \' or a new line with \\n \n A tab whit \\t \t and a backspace whit \\b \b");

// Booleanos
// Booleano
bool exampleBoolean = true;
// Escribir en la consola
Console.WriteLine(exampleBoolean);

// Condicionales
// Condicional if y su condición a cumplir
if (operatorLogicX > 50)
 // Código a ejecutar si se cumple
{
 Console.WriteLine("X is greater than 50");
}
// Condicional else if y su condición a cumplir si la del if no se cumplió
else if (operatorLogicX == 50)
{
 Console.WriteLine("X is equal to 50");
}
// Condicional else si if o else if no se cumplió
else
{
 Console.WriteLine("X is less than 50");
}

// Condicional ternario
Console.WriteLine(operatorLogicX > 50 ? "X is greater than 50" : operatorLogicX == 50  ? "X is equal to 50" : "X is less than 50");

// Condicional switch
// Switches con valor a comparar
switch (operatorLogicX)
{
 // Posible resultado
 case < 50:
  // Código a ejecutar
  Console.WriteLine("X is less than 50");
  // Romper switch
 break;
 // Posible resultado
 case 50:
  // Código a ejecutar
  Console.WriteLine("X is equal to 50");
  // Romper switch
  break;
  // Posible resultado
 case > 50:
  // Código a ejecutar
  Console.WriteLine("X is greater than 50");
  // Romper switch
  break;
  // Resultado por defecto
  // default:
  // Código a ejecutar
  // Console.WriteLine("X is a number?");
  // Romper switch
  // break;
}

// Bucles
// Entero
int counterWhile = 0;
// Bucle while
while (counterWhile <= 5)
{
 // Escribir en la consola interpolada
 Console.WriteLine($"The counter is: {counterWhile}");
 // Aumentar valor de variable
 counterWhile++;
}

// Bucle do while
do
{
 // Escribir en la consola interpolada
 Console.WriteLine($"The counter after while is: {counterWhile}");
 // Aumentar valor de variable
 counterWhile++;
} while (counterWhile is > 5 and < 7);

// Bucle for
for (int counterFor = 0; counterFor <= 3; counterFor++)
{
 // Escribir en la consola interpolada
 Console.WriteLine($"The counter for \"for\" is: {counterFor}");

 // Condicional if
 if (counterFor == 1)
 {
  // Escribir en la consola interpolada
  Console.WriteLine($"Omitted: {counterFor}");
  // Continuar bucle
  continue;
 }

 // Bucle for dentro de otro for
 for (int counterInnerFor = 0; counterInnerFor <= 3; counterInnerFor++)
 {
  // Escribir en la consola interpolada
  Console.WriteLine($"The counter for the inner \"for\" is: {counterInnerFor}");

  // Condicional if
  if (counterInnerFor == 2)
  {
   // Escribir en la consola interpolada
   Console.WriteLine($"Broken in: {counterInnerFor}");
   // Romper bucle
   break;
  }
 }
}

// Bucle foreach
// Array de cadena de texto
string[] cars = ["BMW", "Ford", "Toyota"];

// Bucle foreach
foreach (string car in cars)
{
 // Escribir en la consola
 Console.WriteLine(car);
}


// Arrays
// Array de cadena de texto
string[] fruits = ["Orange", "Apple", "Banana", "Coconut"];
// Array de enteros
int[] numbers = [20, 25, 49, 50];

// Escribir en la consola interpolada
Console.WriteLine($"The second fruit is: {fruits[1]}");

// Cambiar valor de objeto en array
fruits[2] = "strawberry";
// Escribir en la consola interpolada
Console.WriteLine($"\"Banana\" change for: {fruits[2]}");
// Escribir en la consola interpolada
Console.WriteLine($"The longitude for the array \"numbers\" is: {numbers.Length}");

// Array de cadena de texto con longitud definida
string[] topColors = new string[3];

// Asignación de valor a array
topColors[0] = "Green";
// Asignación de valor a array
topColors[1] = "Red";
// Asignación de valor a array
topColors[2] = "Blue";

// Bucle foreach
foreach (string color in topColors)
{
 // Escribir en la consola
 Console.WriteLine(color);
}

// Bucle for para array
// Bucle for con Lenght para obtener la longitud del array
for (int counter = 0; counter < numbers.Length; counter++)
{
 // Imprimir en la consola
 Console.WriteLine(numbers[counter]);
}

// Ordenar array alfabéticamente
Array.Sort(fruits);

// Bucle foreach
foreach (string fruit in fruits)
{
 // Escribir en la consola
 Console.WriteLine(fruit);
}

// Obtener número mayor
Console.WriteLine(numbers.Max());
// Obtener número menor
Console.WriteLine(numbers.Min());
// Obtener la suma de los números
Console.WriteLine(numbers.Sum());

// Array bidimensional
// Array bidimensional
int[,] arrayBi =
{
 {10, 20, 30},
 {5, 15, 25}
};

// Array bidimensional definido
int[,] arrayBiDefined = new int[2, 3];
// Insertar datos a array bidimensional
arrayBiDefined[0, 0] = 40;
arrayBiDefined[0, 1] = 50;
arrayBiDefined[0, 2] = 60;
arrayBiDefined[1, 0] = 35;
arrayBiDefined[1, 1] = 45;
arrayBiDefined[1, 2] = 55;

// Array Jagged
int[][] arrayJagged = [[70, 80], [65]];

// Array Jagged definido
int[][] arrayJaggedDefined = new int[2][];
// Definir arrays de segunda dimensión
arrayJaggedDefined[0] = new int[2];
arrayJaggedDefined[1] = new int[4];
// Insertar datos a array jagged definido
arrayJaggedDefined[0][0] = 90;
arrayJaggedDefined[0][1] = 100;
arrayJaggedDefined[1][0] = 75;
arrayJaggedDefined[1][1] = 85;
arrayJaggedDefined[1][2] = 95;
arrayJaggedDefined[1][3] = 105;

// Escribir en la consola interpolada
Console.WriteLine($"The element 0:0 for \"arrayBi\" is: {arrayBi[0, 0]}");
// Escribir en la consola interpolada
Console.WriteLine($"The element 0:0 for \"arrayBiDefined\" is: {arrayBiDefined[0, 0]}");
// Escribir en la consola interpolada
Console.WriteLine($"The element 0:0 for \"arrayJagged\" is: {arrayJagged[0][0]}");
// Escribir en la consola interpolada
Console.WriteLine($"The element 0:0 for \"arrayJaggedDefined\" is: {arrayJaggedDefined[0][0]}");

// Cambiar valor de objeto en array
arrayBi[0, 0] = 11;
// Escribir en la consola interpolada
Console.WriteLine($"The element 0:0 for \"arrayBi\" has changed: {arrayBi[0, 0]}");

// Bucle foreach
foreach (int itemArrayBi in arrayBi)
{
 // Escribir en la consola interpolada
 Console.WriteLine(itemArrayBi);
}

// Bucle for
// Bucle for con GetLenght(Fila) para obtener la longitud de cada fila
for (int counterArrayBi = 0; counterArrayBi < arrayBi.GetLength(0); counterArrayBi++)
{
 for (int counterInnerArrayBi = 0; counterInnerArrayBi < arrayBi.GetLength(1); counterInnerArrayBi++)
 {
  // Escribir en la consola interpolada
  Console.WriteLine(counterInnerArrayBi);
 }
}

// Métodos
// Método de estático que no devuelve nada
 static void ExampleMethod()
 {
  // Escribir en la consola
  Console.WriteLine("This is a method");
 }
// Llamar método
ExampleMethod();

// Método estático que no devuelve nada con parámetros
static void StringMethod(string name, int age)
{
 Console.WriteLine($"Hello {name} from a method, you have {age} years");
}
// Llamar método con parámetros
StringMethod("estiven0425", 20);

// Método estático que no devuelve nada con parámetros predefinidos
static void DefaultMethod(string name, string country = "Colombia")
{
 Console.WriteLine($"Your name is {name} and your country is {country}");
}
// Llamar método con parámetros y sin ellos
DefaultMethod("estiven0425");

//Método estático que si devuelve un entero
static int IntegerMethod(int x, int y)
{
 // Respuesta del método
 return x + y;
}
// Entero que llama método y su valor es la respuesta del mismo
int resultForIntegerMethod = IntegerMethod(15, 34);
// Escribir en la consola
Console.WriteLine(resultForIntegerMethod);
// Escribir en la consola la llamada de una función con los nombres de los argumentos
Console.WriteLine(IntegerMethod(y: 12, x:56));

// Programación orientada a objetos (Mirar clase Bike)
// Instancia de clase
Bike myBike = new Bike("Yamaha");
// Llamar método de clase
myBike.ShowInfoBike();