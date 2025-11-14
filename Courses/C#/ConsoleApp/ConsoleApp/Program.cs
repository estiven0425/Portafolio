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
Console.WriteLine("i will print on the same line.");

/* Esto es un comentario de varias líneas
 en C#
 */

// Declaración de variables
int variableInteger = 10;
long variableLong = 20L;
float variableFloat = 20.50f;
double variableDouble = 10.5;
char variableChar = 'A';
string variableString = "Hello, variable!";
bool variableBoolean = true;
int variableEmpty;

// Asignación de valor a variable
variableEmpty = 10;

// Escritura de variables (Interpolada)
Console.WriteLine($"{variableInteger} {variableLong} {variableFloat} {variableDouble} {variableChar} {variableString} {variableBoolean} {variableEmpty}");

// Declaración de constantes
const string constString = "Hello, constant!";

// Escritura de constante
Console.WriteLine(constString);

// Escritura concatenada de variables
Console.WriteLine(variableString + " Concatenated!");

// Declaración y escritura de variables concatenadas
string firstName = "John";
string lastName = "Doe";
string fullName = firstName + " " + lastName;

Console.WriteLine(fullName);

// Declaración y escritura de variables enteras concatenadas (Se suman)
int firstNumber = 10;
int secondNumber = 20;

Console.WriteLine(firstNumber + secondNumber);

// Múltiple declaración de variables
int x = 1,  y = 2,  z = 3;

Console.WriteLine(x + y + z);

// Asignación de valor a múltiples variables
x = y = z = 10;

Console.WriteLine(x + y + z);

// Número científico
float scientificNumber = 35e3F;

Console.WriteLine(scientificNumber);

// Conversión implícita
double variableIntegerToDouble = variableInteger;

Console.WriteLine($"variableIntegerToDouble: {variableIntegerToDouble}");

// Conversión explícita
int  variableDoubleToInteger = (int)variableDouble;

Console.WriteLine($"variableDoubleToInteger: {variableDoubleToInteger}");

// Conversión por método
string variableLongToString = Convert.ToString(variableLong);
int variableFloatToInteger = Convert.ToInt32(variableFloat);
double variableLongToDouble = Convert.ToDouble(variableLong);

Console.WriteLine($"{variableLongToString} {variableFloatToInteger} {variableLongToDouble}");

// Entrada del usuario
Console.WriteLine("Enter your name:");

// El "?", después del tipo de variable significa que puede ser null
string? nameUser = Console.ReadLine();

Console.WriteLine($"Your name is: {nameUser}");

// Entrada del usuario en número
Console.WriteLine("Enter your age:");

// Conversión de string por defecto a entero
int ageUser = Convert.ToInt32(Console.ReadLine());

Console.WriteLine($"Your age is: {ageUser} and in 5 years you have {ageUser + 5} years");

// Operadores aritméticos
double operatorX = 7;
double operatorY = 5;

Console.WriteLine($"Sum of X and Y: {operatorX + operatorY}");
Console.WriteLine($"Substraction of X and Y: {operatorX - operatorY}");
Console.WriteLine($"Multiplication of X and Y: {operatorX * operatorY}");
Console.WriteLine($"Division of X and Y: {operatorX / operatorY}");
Console.WriteLine($"Residue of X and Y: {operatorX % operatorY}");
Console.WriteLine($"Addition to X: {++operatorX}");
Console.WriteLine($"Decrease to X: {--operatorX}");

int operatorInteger = 100;

// Operadores de asignación
operatorInteger += 5;

Console.WriteLine($"Now X is: {operatorInteger}");

operatorInteger -= 5;

Console.WriteLine($"Now X is: {operatorInteger}");

operatorInteger *= 5;

Console.WriteLine($"Now X is: {operatorInteger}");

operatorInteger /= 5;

Console.WriteLine($"Now X is: {operatorInteger}");

operatorInteger %= 5;

Console.WriteLine($"Now X is: {operatorInteger}");

operatorInteger &= 5;

Console.WriteLine($"Now X is: {operatorInteger}");

operatorInteger |= 5;

Console.WriteLine($"Now X is: {operatorInteger}");

operatorInteger ^= 5;

Console.WriteLine($"Now X is: {operatorInteger}");

operatorInteger >>= 5;

Console.WriteLine($"Now X is: {operatorInteger}");

operatorInteger <<= 5;

Console.WriteLine($"Now X is: {operatorInteger}");

// Operadores lógicos
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

// Operadores lógicos
Console.WriteLine($"X != and > Y? {operatorLogicX != operatorLogicY && operatorLogicX > operatorLogicY}");
Console.WriteLine($"X != or > Y? {operatorLogicX != operatorLogicY || operatorLogicX > operatorLogicY}");