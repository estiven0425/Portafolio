// Programación orientada a objetos
// Espacio de nombres
namespace ConsoleApp;

// Clase pública con constructor incluido
public class Vehicle(string motor)
{
    // Propiedad protegida con método Get y Set
    protected string Motor{get; set;} = motor;

    // Método público que no devuelve nada
    public void Started()
    {
        Console.WriteLine("Starting motor...");
    }
}