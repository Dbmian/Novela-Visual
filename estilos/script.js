const texto1 = `Hace un año, un ladrón irrumpió en la casa de tu tía Marinda a través de la ventana de su dormitorio a las dos de la madrugada. Marinda lo confrontó y el ladrón escapó, llevándose su collar de perlas. Al día siguiente, encontraste una botella de cerveza cerca de la casa, la entregaste a la policía y resultó ser una pista clave: las huellas digitales del ladrón llevaron a su arresto. Desde entonces, te ganaste una reputación como detective, con equipo de investigación y todo.

Harlowe Thrombey, presidente de la Compañía de Plásticos Thrombey, te llamó recientemente para pedirte ayuda porque cree que su vida está en peligro y necesita tu observación aguda.

Ahora parece que tienes tu primer gran caso entre manos.`;

const texto2 = `Llegas a la casa de Harlowe Thrombey a las cinco de la tarde. Un hombre calvo y robusto te recibe con desconfianza, pero finalmente te da la mano. Se presenta como Harlowe Thrombey y, antes de invitarte a entrar, te ofrece un recorrido por la propiedad. Mientras caminan entre arbustos floridos y árboles, llegas a un enorme invernadero. Thrombey, con voz preocupada, te confiesa que teme por su vida. A pesar de los lujos que le brinda a su esposa Jane—autos costosos, viajes alrededor del mundo e incluso dos pianos—, cree que ella preferiría verlo muerto.

Al preguntarle por qué piensa eso, Thrombey revela que la propia Jane se lo dijo. Al llegar al invernadero, te sorprende ver cómo sacude la puerta para asegurarse de que esté cerrada con llave. Explica que su jardinero, Jenkins, guarda arsénico allí para tratar los árboles, pero que actualmente está hospitalizado. Thrombey descarta la idea de que su esposa solo estuviera de mal humor y te invita a juzgarla por ti mismo cuando la conozcas. Jane está dando un concierto y se espera que regrese alrededor de las seis.

Mientras se dirigen a la entrada principal, un llamativo auto deportivo rojo se detiene frente a la casa. De él baja un hombre pulcro y barbudo que camina hacia ustedes, añadiendo un nuevo elemento de intriga a la situación.`;

let i = 0;
const velocidad = 30;

function escribirTexto(texto, contenedor) {
    if (i < texto.length) {
        const caracter = texto.charAt(i);
        if (caracter === '.') {
            contenedor.innerHTML += caracter + '</p><p>';
        } else {
            contenedor.innerHTML += caracter;
        }
        i++;
        contenedor.scrollTop = contenedor.scrollHeight;
        setTimeout(() => escribirTexto(texto, contenedor), velocidad);
    }
}

window.onload = () => {
    const contenedor1 = document.getElementById("textoinicio1");
    const contenedor2 = document.getElementById("textoinicio2");

    if (contenedor1) {
        contenedor1.innerHTML = '<p>';
        escribirTexto(texto1, contenedor1);
    }

    if (contenedor2) {
        contenedor2.innerHTML = '<p>';
        escribirTexto(texto2, contenedor2);
    }
};
