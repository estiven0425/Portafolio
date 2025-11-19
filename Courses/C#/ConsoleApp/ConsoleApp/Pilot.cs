// Programación orientada a objetos
// Espacio de nombres
namespace ConsoleApp;

// Cláse inheredable con constructor incluido
sealed class Pilot(string name)
{
 // Propiedad privada inicializada
 private string Name {get; set;} = name;

 // Método para mostrar el nombre
 public void ShowInfoPilot()
 {
  // Escribir en la consola
  Console.WriteLine($"The pilot is: {Name}");
 }

 // Método estático en clase
 public static void ShowGreeting()
 {
  // Escribir en la consola
  Console.WriteLine($"The pilot waves");}
}