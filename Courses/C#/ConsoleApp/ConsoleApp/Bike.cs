// Programación orientada a objetos
// Familia de la clase
namespace ConsoleApp;

// Clase pública
public class Bike
{
    // Propiedad pública de cadena de texto de solo lectura ya definida
    public readonly string Country = "Colombia";
    // Propiedad pública de cadena de texto
    public string Brand;

    // Método constructor para inicializar las propiedades con argumentos
    public Bike(string brand)
    {
        // Asignar argumento a propiedad
        Brand = brand;
    }

    // Método público para mostrar la información de la moto
    public void ShowInfoBike()
    {
        Console.WriteLine($"Country: {Country}");
        Console.WriteLine($"Brand: {Brand}");
    }
}