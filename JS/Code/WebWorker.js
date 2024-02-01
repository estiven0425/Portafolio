let counter = 0; // Declaración de variable
function WW () { // Función
    counter ++; // Adición de valor a variable
    postMessage(counter); // Mensaje
    setTimeout("TimedCounted()", 500); // Asincronia
}
TimedCount();