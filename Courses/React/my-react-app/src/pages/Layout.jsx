import React, { memo } from "react"; // Importar librería de React
import { Link } from "react-router-dom"; // Importar librería de Reac-Router-DOM
import Styles from '../style/Layout.module.css'; // Importar módulo CSS
function Layout() { // Función sin parámetros
    return (
        <>
            <h1 id={Styles.Titulo}>Hola desde el Layout</h1>
            <Link to="/">Volver al inicio</Link>
        </>
    ); // Respuesta
}

export default memo(Layout); // Exportar componente inteligente