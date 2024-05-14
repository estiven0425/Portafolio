import React from 'react'; // Importar librería de React

let variable = 'Esto es una variable'; // Declaración de variable

const objeto = { atributo0: 'Valor0', atributo1: 'Valor1', atributo2: 'Valor2' }; // Declaración de objeto

function alerta() { // Función sin parámetros
    return window.alert('¡Alerta!'); // Alerta
}
function gol(event, disparo) { // Función con argumento y eventos
    document.getElementById('event').innerHTML = '<p>El evento ' + event.type + ' hizo algo... ' + disparo + '</p>'; // Imprimir en HTML
}

let i = 0; // Declaración de variable

function contador() { // Función sin parámetros
    document.getElementById('counter').innerHTML = '<p>' + i + '</p>'; // Imprimir en HTML

    return i++; // Respuesta
}
function MissedShoot() { // Función sin parámetros
    return <p>¡Perdido!</p>; // Respuesta
}
function MadeShoot() { // Función sin parámetros
    return <p>¡Disparo!</p>; // Respuesta
}
function Shoot(props) { // Función con parámetros
    const isShoot = props.isShoot; // Declaración de constante

    if (isShoot == true) { // Condicional
        return <MadeShoot />; // Respuesta
    } else { // Si no
        return <MissedShoot />; // Respuesta
    }
}
function Shoots(props) { // Función con parámetros
    const isShoot = props.isShoot; // Declaración de constante

    return (
        <>
            {isShoot == true ? <MadeShoot /> : <MissedShoot />}
        </>
    ) // Respuesta
}
function Garage(props) { // Función con parámetros
    const cars = props.carros; // Declaración de constante

    return ( // Respuesta
        <>
            <h3>Garage</h3>
            {cars.length > 0 && // Condicional
                <>
                    <p>El garage tiene {cars.length} carros.</p>
                </>
            }
        </>
    );
}

let carros = ['Audi', 'Mercedez', 'Ford']; // Declaración de arrays

function Bike(props) { // Función con parámetros
    return <li>Yo soy una {props.bike}</li>; // Respuesta
}

function GarageBike() { // Función sin parámetros
    const bikes = [
        { id: 1, bike: 'Suzuki' },
        { id: 2, bike: 'Yamaha' },
        { id: 3, bike: 'Honda' }
    ]; // Declaración de array
    return (
        <>
            <h1>¿Quién vive en mi garage?</h1>
            <ul>
                {bikes.map((bike) => <Bike key={bike.id} bike={bike.bike} />)}
            </ul>
        </>
    ); // Respuesta
}

function ComponenteDeFuncion(props) { // Función sin parámetros
    return (
        <>
            <p>Este es un componente de función con un props que dice: {props.dice}</p>
            <p>{variable}</p>
            <p>{objeto.atributo0}</p>
            <button type="button" onClick={alerta}>Alerta</button>
            <button type="button" onClick={(event) => gol(event, '¡GOL!')}>Disparar evento</button>
            <button type="button" onClick={contador}>Aumentar</button>
            <Shoot isShoot={true} />
            <Shoots isShoot={false} />
            <Garage carros={carros} />
            <GarageBike />
        </>
    ); // Respuesta
}

export { ComponenteDeFuncion }; // Exportar componente