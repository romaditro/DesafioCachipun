let repetirJuego = 0;
let jugadaUsuarioTexto = "";
let jugadaUsuarioCodigo = 0;
let jugadaJSCodigo = 0;
let jugadaJSTexto = "";
let ganador ;


//Convierte la jugada de numero a texto.
function generaJugadaAutomatica(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

//Convierte la jugada de numero a texto.
function convertirJugada(jugadaJSCodigo){
let jugada = "";

    if(jugadaJSCodigo === 1 )
        jugada = "PIEDRA";
    else if(jugadaJSCodigo === 2)
        jugada = "PAPEL";
    else if (jugadaJSCodigo === 3)
        jugada = "TIJERA";

    return jugada;
}


//Solicitar la cantidad de jugadas > 0.
do{
    repetirJuego = prompt("Ingrese la cantidad de veces que desea jugar: ");
    repetirJuego = Number.parseInt(repetirJuego);
}while(repetirJuego < 1);


//Repeticiones del juego.
for(let i = 1; i <= repetirJuego; i++){

    //Solicitar jugada del usuario en texto.
    do{
        jugadaUsuarioTexto = prompt(`Ingrese su jugada N° ${i} [Piedra, Papel, Tijera]: `);
        jugadaUsuarioTexto = jugadaUsuarioTexto.trim().toUpperCase();

    }while((jugadaUsuarioTexto != "PIEDRA") && (jugadaUsuarioTexto != "PAPEL") && (jugadaUsuarioTexto != "TIJERA"));


    //Genera jugada automatica en numero.
    jugadaJSCodigo = generaJugadaAutomatica(1, 3);

    //Convertir la misma jugada a texto.
    jugadaJSTexto = convertirJugada(jugadaJSCodigo);


    //Seleccionar el ganador.
    if (jugadaUsuarioTexto === "PIEDRA" && jugadaJSTexto === "PAPEL")
        ganador = "JS"
    else if (jugadaUsuarioTexto === "PIEDRA" && jugadaJSTexto === "TIJERA")
        ganador = "Usuario";
    else if (jugadaUsuarioTexto === "PAPEL" && jugadaJSTexto === "PIEDRA")
        ganador = "Usuario";
    else if (jugadaUsuarioTexto === "PAPEL" && jugadaJSTexto === "TIJERA")
        ganador = "JS";
    else if (jugadaUsuarioTexto === "TIJERA" && jugadaJSTexto === "PAPEL")
        ganador = "Usuario";
    else if (jugadaUsuarioTexto === "TIJERA" && jugadaJSTexto === "PIEDRA")
        ganador = "JS";
    else if (jugadaUsuarioTexto ===  jugadaJSTexto)
        ganador = "Empate";


    //Mostrar resultados.
    console.log(`La jugada del usuario es: ${jugadaUsuarioTexto}`);
    console.log(`La jugada del JS es: ${jugadaJSTexto} `);
    console.log(`El ganador es : ${ganador}`);
    console.log(`================================`);

}

