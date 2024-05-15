import React from 'react'; // Importar librería de React
import ReactDOM from 'react-dom/client'; // Importar librería de ReactDOM
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importar librería de Reac-Router-DOM
import ComponenteDeClase from './components/ComponenteDeClase'; // Importar componente
import { ComponenteDeFuncion } from './components/ComponenteDeFuncion'; // Importar componente
import Formulario from './components/Formulario'; // Importar componente
import Home from './pages/Home'; // Importar componente
import Layout from './pages/Layout'; // Importar componente
import PaginaNoEncontrada from './pages/PaginaNoEncontrada'; // Importar componente
import Principal from './pages/Principal'; // Importar componente
import './style/style.css'; // Importar CSS

const root = ReactDOM.createRoot(document.getElementById('root')); // Asignación valor a constante
const myFirstElement = <h1>Este es un proyecto de React</h1>; // Asignación de valor HTML a constante
const x = 5; // Declaración de constante

let resultadoX = 'es mayor'; // Declaración de variable

if (x <= 5) { // Condicional
    resultadoX = 'es menor o igual'; // Asignación de valor a variable
}

function Car(props) { // Función con parámetros
    return <p>El carro es de color {props.color}.</p>; // Respuesta usando parámetros
}
function Bike() { // Función sin parámetros
    return 'la moto es mejor que el carro.'; // Respuesta
}
function Vehicle() { // Función con parámetros
    return (
        <>
            <Car color="azul" />
            <p>y según tu <Bike /></p>
        </>
    )// Respuesta usando componente
}

let expresion = <p>Este texto contiene una expresión que multiplica 5 por 2 y da como resultado: {5 * 2}.</p>; // Asignación de valor HTML a variable
let bloque = (
    <>
        <BrowserRouter> {/* Crear archivo de rutas */}
            <Routes> {/* Definir archivo de rutas */}
                <Route path='/' element={<Home />}> {/* Ruta principal */}
                    <Route index element={<Principal />} /> {/* Ruta predeterminada */}
                    <Route path='Layout' element={<Layout />} /> {/* Ruta predeterminada */}
                    <Route path='*' element={<PaginaNoEncontrada />} /> {/* Ruta 404 */}
                </Route>
            </Routes>
        </BrowserRouter>
        <hr />

        {myFirstElement}
        {expresion}

        <hr />

        <a href='https://www.w3schools.com/'
            target='_blank'
            className='enlaceExterno'>
            Este enlace con clase lleva a W3School.
        </a>

        <hr />

        <p>Segun nuestra comprobación: {x} {resultadoX} a 5</p>
        <p>Y tambien {x} {x <= 10 ? 'es menor o igual a diez' : 'es mayor a 10'}</p>

        <hr />
        <Car color="rojo" />
        <hr />
        <Vehicle />
        <hr />
        <ComponenteDeClase tipo="componente" objetivo="estudiar" />
        <div id='before'></div>
        <div id='after'></div>
        <hr />
        <ComponenteDeFuncion dice="¡React es muy bacano!" />
        <div id='event'></div>
        <div id='counter'></div>
        <hr />
        <Formulario />
    </>
); // Asignación de bloque de código HTML a variable

root.render(bloque); // Acceder al método render de la constante