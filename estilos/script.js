const texto = `Hace justo un año del día en que un ladrón se introdujo por la ventana del dormitorio de tu tía Marinda a las dos de la mañana.
—¡Salga inmediatamente de aquí! —le gritó ella, y eso fue justo lo que él hizo, llevándose también el collar de perlas de tu tía.
Al día siguiente encontraste una botella de cerveza entre los arbustos ubicados junto a la casa de tu tía Marinda.
Puesto que no era muy factible que ella la hubiera arrojado por la ventana, se la entregaste a la policía.
La botella tenía las impresiones digitales del ladrón, la policía no tardó en identificarlo y en la actualidad se encuentra entre rejas.
A partir de ese momento te granjeaste una auténtica reputación de detective.
Conseguiste una lupa, un equipo para impresiones digitales y un grabador de casete y estás listo para tomar cualquier trabajo de investigación.
Algunas de tus amistades también han decidido convertirse en detectives.
Eso no te preocupa, porque no son más que un puñado de aficionados, excepto tal vez Jenny Mudge, la chiquilla de pelo crespo que vive en tu misma calle.
Ella sí que es lista.
De hecho, hay momentos en que piensas que tal vez sea más viva que tú.
Ahora todo parece indicar que tienes entre manos tu primer gran caso.
Harlowe Thrombey, presidente de la Compañía de Plásticos Thrombey, acaba de llamarte por teléfono para pedirte que vayas a su casa esta tarde a las cinco en punto.
—Me han dicho que eres muy observador —dijo—.
Y eso es precisamente lo que necesito en este momento.
Creo que mi vida corre peligro.`;

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
