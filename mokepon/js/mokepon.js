// Variables globales
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

//Primero se crean las funciones que se van a ejecutar cuando cargue toda la página.

function iniciarJuego(){
    // Solo mostramos la sección para escoger pokemon, ocultamos la sección para escoger ataque y el botón reiniciar
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota') 
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

    //Seleccionamos el ataque correspondiente
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){
     // Ocultamos la sección donde se escoge el pokemon
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    // Mostramos la sección para escoger pokemon quitándole el display:none a la sección 'seleccionar-ataque'
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById ('mascota-enemigo')

    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego(){
    ataqueJugador = 'Fuego 🔥'
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'Agua 💧'
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = 'Tierra 🌱'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'Fuego 🔥'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'Agua 💧'
    } else {
        ataqueEnemigo = 'Tierra 🌱'
    }

    combate()
}

function combate() {
    // Se declaran las variables para cambiar el HTML donde se muestran las vidas de los jugadores
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    // COMBATE
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("¡Empataron! 🫤");
    } else if ( //debe cumplirse una de las tres condiciones que siguen, con el || que significa 'o'
        (ataqueJugador == 'Agua 💧' && ataqueEnemigo == 'Fuego 🔥') ||
        (ataqueJugador == 'Tierra 🌱' && ataqueEnemigo == 'Agua 💧') ||
        (ataqueJugador == 'Fuego 🔥' && ataqueEnemigo == 'Tierra 🌱')
    ) {
        crearMensaje("¡Ganaste la batalla! 🥳")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("¡Perdiste! 😱😥");
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas ()

}

// Función para revisar vidas de ambos Pokemon
function revisarVidas(){
    if (vidasEnemigo == 0) {
        crearMensajeFinal("Felicitaciones, GANASTE EL JUEGO 🥳")
    } else if(vidasJugador == 0) {
        crearMensajeFinal("Lo lamento, PERDISTE EL JUEGO 😭")
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + '- ' + resultado

    sectionMensajes.appendChild(parrafo)
}

// Creamos el párrafo para el resultado final
function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    // Se deshabilita los botones de ataque luego de que haya terminado el juego
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    // Se muestra el botón Reiniciar
    let sectionReiniciar= document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

// Reiniciamos el juego
function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min+1) + min)
}

window.addEventListener('load', iniciarJuego) //nuestro juego/script arranca cuando se haya cargado toda la página.