import React from "react"; // Importar librería de React
import { useState } from "react"; // Importar useState

function Formulario() { // Función sin parámetros
    const [Nombre, setNombre] = useState(""); // Declaración de array de estado
    const Envio = (event) => { // Declaración de función constante
        event.preventDefault(); // Anulación de acción por defecto
        alert(`El nombre enviado es: ${Nombre}`); // Alerta
    };
    const [Inputs, setInputs] = useState(""); // Declaración de array de estado
    const ActualizarEstado = (event) => { // Declaración de función constante
        const Nombre = event.target.name; // Declaración de constante
        const Valor = event.target.value; // Declaración de constante

        setInputs(Valores => ({ ...Valores, [Nombre]: Valor })); // Actulización de estado
    };
    const [TextArea, setTextArea] = useState(""); // Declaración de array de estado
    const ActualizarTextArea = (e) => { // Declaración de función constante
        setTextArea(e.target.value); // Actualización de estado
    };
    const [Select, setSelect] = useState("Volvo"); // Declaración de array de estado
    const ActualizarSelect = (e) => { // Declaración de función constante
        setSelect(e.target.value); // Actualización de estado
    };

    return (
        <>
            <form onSubmit={Envio}>
                <label htmlFor="Nombre">Ingrese su nombre: </label>
                <input type="text" name="Nombre" id="Nombre" value={Nombre} onChange={(e) => setNombre(e.target.value)} />

                <label htmlFor="Apellido1">Primer apellido</label>
                <input type="text" name="Apellido1" id="Apellido1" value={Inputs.Apellido1 || ""} onChange={ActualizarEstado} />

                <label htmlFor="Apellido2">Segundo apellido</label>
                <input type="text" name="Apellido2" id="Apellido2" value={Inputs.Apellido2 || ""} onChange={ActualizarEstado} />

                <textarea name="TextArea" id="TextArea" value={TextArea} onChange={ActualizarTextArea}></textarea>

                <select value={Select} onChange={ActualizarSelect}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>

                <button type="submit">Enviar</button>
            </form>

            <p>El nombre actual es: {Nombre}</p>
            <p>Los apellidos son: {Inputs.Apellido1} {Inputs.Apellido2}</p>
        </>
    ); // Respuesta
}

export default Formulario; // Exportar componente