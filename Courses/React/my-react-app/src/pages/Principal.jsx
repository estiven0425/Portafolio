import React, { useState } from "react"; // Importar librería de React

function Principal() { // Función sin parámetros
    const [inicial, setInicial] = useState("Iniciado"); // Declaración de array de estado
    const [Carro, setCarro] = useState({
        modelo: "Ford",
        año: "2020",
        color: "blanco",
        kilometros: "10255"
    }); // Declaración de array de estado
    const ActualizarColor = () => { // Declaración de función constante
        setCarro(previousState => { // Llamada de actualización de estado y copia de estado actual
            return { ...previousState, color: "negro" } // Trascripción de estado original más actual
        })
    };

    return (
        <>
            <h1>Hola desde el Principal</h1>
            <p>El estado actual es: {inicial}</p>
            <button type="button" onClick={() => setInicial("Actualizado")}>Actualizar estado</button>
            <p>Este {Carro.modelo} es {Carro.año} de color {Carro.color} y tiene {Carro.kilometros} kilómetros.</p>
            <button type="button" onClick={ActualizarColor}>Actualizar color del carro</button>
        </>
    ); // Respuesta
}

export default Principal; // Exportar componente inteligente