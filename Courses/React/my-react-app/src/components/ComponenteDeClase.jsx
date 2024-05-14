import React from 'react'; // Importar librería de React

class ComponenteDeClase extends React.Component { // Clase heredando de React.component
    constructor(props) { // Constructor con propiedades
        super(props); // Constructor principal con propiedades
        this.state = {
            color: 'rojo', // Propiedad del componente
            tipo: 'componente', // Propiedad del componente
            idioma: 'español', // Propiedad del componente
            pais: 'USA', // Propiedad el componente
            objetivo: 'Laborar' // Propiedad el componente
        }; // Declarar propiedades de estado del componente
    }

    cambiarIdioma = () => { // Asignar función de flecha a método
        this.setState({ idioma: 'castellano' }); // Cambiar propiedad del componente
    }
    cambiarColor = () => { // Asignar función de flecha a método
        if (this.state.color == 'rojo') { // Condicional
            this.setState({ color: 'azul' }); // Cambiar propiedad del componente
        } else { // si no
            this.setState({ color: 'rojo' }); // Cambiar propiedad del componente
        }
    }

    static getDerivedStateFromProps(props, state) { // Método de cambio de estado
        return { objetivo: props.objetivo }; // Cambiar propiedad del método
    }

    componentDidMount() { // Método de cambio luego de montar
        setTimeout(() => { // Asíncrono
            this.setState({ pais: 'Colombia' }) // Cambiar propiedad del componente
        }, 5000);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) { // Método de datos anteriores a actualización
        document.getElementById('before').innerHTML = '<p>Antes de la correción, el país era: ' + prevState.pais + '</p>'; // Seleccionar HTML e imprimir datos previos
        return null; // Respuesta
    }

    componentDidUpdate() { // Método de datos posteriores a actualización
        document.getElementById('after').innerHTML = '<p>luego de la correción, el país es: ' + this.state.pais + '</p>'; // Seleccionar HTML e imprimir datos nuevos
        return null; // Respuesta
    }

    componentWillUnmount() { // Método para luego de desmontar
        return alert('El componente ha sido desmontado'); // Ventana de alerta
    }

    render() { // Llamada al método render
        return (
            <>
                <p>Este es un {this.props.tipo} de clase de color {this.state.color} creado en {this.state.pais}</p>
                <p>Y estas son sus propiedades:</p>
                <ul>
                    <li>{this.state.color}</li>
                    <li>{this.state.tipo}</li>
                    <li>{this.state.idioma}</li>
                    <li>{this.state.pais}</li>
                    <li>{this.state.objetivo}</li>
                </ul>
                <button type='button' onClick={this.cambiarIdioma}>Cambiar idioma</button>
                <button type="button" onClick={this.cambiarColor}>Cambiar color</button>
            </>
        ); // Respuesta
    }
}

export default ComponenteDeClase; // Exportar componente