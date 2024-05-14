import React from "react"; // Importar librería de React
import { Link, Outlet } from "react-router-dom"; // Importar librería de Reac-Router-DOM

function Home() { // Función sin parámetros
    return (
        <>
        <h1>Hola desde el Home, el componente predeterminado para la ruta base</h1>
        <Link to="/Layout">Ir a Layout</Link>
        <Outlet/>
        </>
    ); // Respuesta
}

export default Home; // Exportar componente