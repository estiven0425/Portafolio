import React, { useState, useContext, useRef, useEffect } from "react"; // Importar librería de React
import AutoContexto from "../pages/context/Contexto"; // Importar contexto

function ColorFavorito() {
    const [color, setColor] = useState("Seleccione un color"); // Declaración de constante de estado
    const ContextoAuto = useContext(AutoContexto); // Usar contexto
    const inputElement = useRef(); // Declaración de referencias
    const focusInput = () => { // Declaración 
        inputElement.current.focus(); // Hacer focus en el elemento
    };
    const ColorPrevio = useRef(); // Declaración de referencias

    useEffect(() => { // Llamada de función de efecto
        ColorPrevio.current = color; // Asiganción de valor
    }, [color]);

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
            <p>El auto pasado como contexto es {ContextoAuto}</p>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Enfocar Input</button>
            <p>Color actual: {color}</p>
            <p>El color anterior era: {ColorPrevio.current}</p>
        </>
    ); // Respuesta
}

export default ColorFavorito; // Exportar componente