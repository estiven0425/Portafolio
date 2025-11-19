// Programación orientada a objetos
// Espacio de nombres
namespace ConsoleApp;

// Clase pública que hereda (Ver la clase Vehicle como el padre)
public class Bike : Vehicle
{
    // Campo privado de cadena de texto de solo lectura ya definida
    private readonly string _country = "Colombia";
    // Propiedad privada de cadena de texto con métodos Get y Set automáticos
    private string Brand{get; set;}
    // campo privado de entero de solo lectura
    private readonly int _stock;
    // Campo privado de texto inicializada vacía
    private string _model = string.Empty;
    // Propiedad pública para controlar con método Get y Set la propiedad privada
    public string Model
    {
        // Método Get para obtener los datos de la propiedad
        get => _model.Length == 0 ? "Unknown" : _model;

        // Método Set para asignarle valor a la propiedad
        set => _model = value;
    }
    // Propiedad pública de cadena de texto con métodos Get y Set automáticos
    public string Color {get; set;}

    // Método constructor para inicializar las propiedades tanto propias como del padre con argumentos
    public Bike(string brand, int stock, string color, string motor) : base(motor)
    {
        // Asignar argumento a propiedad
        Brand = brand;
        // Asignar argumento a propiedad
        _stock = stock;
        // Asignar argumento a propiedad
        Color = color;

    }

    // Método público para mostrar la información de la moto
    public void ShowInfoBike()
    {
        // Escribir en la consola
        Console.WriteLine($"Country: {_country}");
        // Escribir en la consola
        Console.WriteLine($"Brand: {Brand}");
        // Escribir en la consola
        Console.WriteLine($"Stock: {_stock}");
        // Escribir en la consola
        Console.WriteLine($"Color: {Color}");
    }
}