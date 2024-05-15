import React, { useState } from "react"; // Importar librería de React

function ColorFavorito() {
    const [color, setColor] = useState("Seleccione un color"); // Declaración de constante de estado

    return (
        <>
            <h1>Mi color favorito es: {color}</h1>
            <button
                type="button"
                onClick={() => setColor("ázul")}
            >Ázul</button>
            <button
                type="button"
                onClick={() => setColor("rojo")}
            >Rojo</button>
            <button
                type="button"
                onClick={() => setColor("rosado")}
            >Rosado</button>
            <button
                type="button"
                onClick={() => setColor("verde")}
            >Verde</button>
        </>
    ); // Respuesta
}

export default ColorFavorito; // Exportar componente