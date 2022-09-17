// Variables globales
let ataqueJugador
let ataqueEnemigo

//Primero se crean las funciones que se van a ejecutar cuando cargue toda la página.

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota') 
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

    //Seleccionamos el ataque correspondiente
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaJugador(){
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
  // COMBATE
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("¡Empataron! 🫤");
    } else if ( //debe cumplirse una de las tres condiciones que siguen, con el || que sugnifica 'o'
        (ataqueJugador == 'Agua 💧' && ataqueEnemigo == 'Fuego 🔥') ||
        (ataqueJugador == 'Tierra 🌱' && ataqueEnemigo == 'Agua 💧') ||
        (ataqueJugador == 'Fuego 🔥' && ataqueEnemigo == 'Tierra 🌱')
    ) {
        crearMensaje("¡Ganaste la batalla! 🥳")
    } else {
        crearMensaje("¡Perdiste! 😱😥");
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + '- ' + resultado

    sectionMensajes.appendChild(parrafo)
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener('load', iniciarJuego) //nuestro juego/script arranca cuando se haya cargado toda la página.