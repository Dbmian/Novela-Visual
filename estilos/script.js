const texto = `Hace un año, un ladrón irrumpió en la casa de tu tía Marinda a través de la ventana de su dormitorio a las dos de la madrugada. Marinda lo confrontó y el ladrón escapó, llevándose su collar de perlas. Al día siguiente, encontraste una botella de cerveza cerca de la casa, la entregaste a la policía y resultó ser una pista clave: las huellas digitales del ladrón llevaron a su arresto. Desde entonces, te ganaste una reputación como detective, con equipo de investigación y todo.

Harlowe Thrombey, presidente de la Compañía de Plásticos Thrombey, te llamó recientemente para pedirte ayuda porque cree que su vida está en peligro y necesita tu observación aguda.

Ahora parece que tienes tu primer gran caso entre manos.`;

let i = 0;
const velocidad = 30; 

function escribirTexto() {
    const contenedor = document.getElementById("texto");
    if (i < texto.length) {
        if (texto.charAt(i) === '.') {
            contenedor.innerHTML += texto.charAt(i) + '</p><p>';
        } else {
            contenedor.innerHTML += texto.charAt(i);
        }
        i++;
        contenedor.scrollTop = contenedor.scrollHeight; 
        setTimeout(escribirTexto, velocidad);
    }
}

window.onload = () => {
    document.getElementById("texto").innerHTML = '<p>';
    escribirTexto();
};
