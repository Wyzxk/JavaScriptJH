const contenedor = document.querySelector(".flex-container")
function crearLlave (nombre, modelo, precio) {
    img = "<img src='llave.png'>";
    nombre = `<h2> ${nombre}</h2>`
    modelo = `<h4> ${modelo}</h4>`
    precio = `<p> <b>$${precio}</b></p>`
    return [nombre,modelo,precio];
}
 

