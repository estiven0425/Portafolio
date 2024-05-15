import React, { memo, useState, useEffect } from "react"; // Importar librería de React
import { Link } from "react-router-dom"; // Importar librería de Reac-Router-DOM
import Styles from '../style/Layout.module.css'; // Importar módulo CSS

function Layout() { // Función sin parámetros
    const [count, setCount] = useState(0); // Declaración de array de estado

    useEffect(() => { // Lamada de función useEffect solo para el renderizado inicial
        setTimeout(() => { // Temporizador
            setCount((count) => count + 1);
        }, 1000);
    }, []);

    return (
        <>
            <h1 id={Styles.Titulo}>Hola desde el Layout</h1>
            <Link to="/">Volver al inicio</Link>
            <p>Cada segundo, el contador aumenta: {count}</p>
        </>
    ); // Respuesta
}

export default memo(Layout); // Exportar componente inteligente