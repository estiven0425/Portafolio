// Programación orientada a objetos
// Espacio de nombres
namespace ConsoleApp;

// Clase pública que hereda (Ver la clase Animal como la abstracta)
public class Cat : Animal
{
    // Lista privada ENUM
    private enum CatEnum
    {
        // Item de lista
        Orange,
        // Item de lista
        Red,
        // Item de lista
        Blue,
        // Item de lista
        Green,
        // Item de lista
        Yellow,
    }

    // Método abstracto
    public override void Nutrition()
    {
        // Escribir en la consola
        Console.WriteLine("The cat eat: Meat");
    }

    // Método de la clase abstracta polimórfico
    public override void AnimalSound()
    {
        // Escribir en la consola
        Console.WriteLine("The cat says: miau miau");

    }

    // Método público para mostrar datos del ENUM
    public void ShowInfoEnum()
    {
        // Entero
        int numberEnum = Convert.ToInt32(CatEnum.Orange);

        // Escribir en la consola
        Console.WriteLine($"The color cat is: {CatEnum.Yellow}");
        // Escribir en la consola
        Console.WriteLine($"The index for orange is: {numberEnum}");
    }
}