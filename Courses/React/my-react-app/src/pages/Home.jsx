import React, { useState } from "react"; // Importar librería de React
import { Link, Outlet } from "react-router-dom"; // Importar librería de Reac-Router-DOM
import '../style/style.scss'; // Importar SASS
import ColorFavorito from "../components/ColorFavorito"; // Importar componente
import AutoContexto from "./context/Contexto"; // Importar contexto

const style = { color: "white", backgroundColor: "black", borderRadius: "10px", padding: "10px" } // Declaración de objeto

function Home() { // Función sin parámetros
    const [Auto, setAuto] = useState("BMW M3 GTR"); // Declaración de array de estado

    return (
        <>
            <h1 style={{ backgroundColor: "#dedede", color: "blue" }}>Hola desde el Home, el componente predeterminado para la ruta base</h1>
            <Link to="/Layout">Ir a Layout</Link>
            <Outlet /> { /* Renderiza componentes secundarios */}
            <h2 id="titulo2">Este h2 se estiliza con SASS</h2>
            <p style={style}>Este Home renderiza los componentes secundarios entre el <code>h1</code> y el <code>h2</code></p>
            <AutoContexto.Provider value={Auto}> {/* Envoltura para enviar constexto */}
                <h2>{`Tu auto es: ${Auto}`}</h2>
                <ColorFavorito />
            </AutoContexto.Provider>
        </>
    ); // Respuesta
}

export default Home; // Exportar componente