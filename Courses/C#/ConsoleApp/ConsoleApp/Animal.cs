// Programación orientada a objetos
// Espacio de nombres
namespace ConsoleApp;

// Clase abstracta pública con constructor incluido
public abstract class Animal : IAnimal
{
    // Método abstracto
    public abstract void Nutrition();

    // Método para polimorfismo que emite un sonido
    public virtual void AnimalSound()
    {
        // Escribir en la consola
        Console.WriteLine("Every animal makes a sound");
    }

    // Método de interfaz
    public void Run()
    {
        Console.WriteLine("Running...");
    }
}