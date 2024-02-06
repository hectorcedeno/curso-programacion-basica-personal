const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById ('mascota-enemigo')
const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

// Se declaran las variables para cambiar el HTML donde se muestran las vidas de los jugadores
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

//Hacemos un Array con los tres mokepones
let mokepones = []

// Variables globales
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let vidasJugador = 3
let vidasEnemigo = 3

//Las clases inician con mayúculas.
class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

//Con la clase Mokepon creada arriba, se crean los tres objetos instancia (mokepones). Se llaman objetos instancia porque vienen de una clase
let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)

let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5)

let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5)

//Se crea un objeto iterario, solo guarda información (Arreglo de ataques para Hipodoge, Capipepo y Ratigueya)
hipodoge.ataques.push(
    { nombre : '💧', id : 'boton-agua'},
    { nombre : '💧', id : 'boton-agua'},
    { nombre : '💧', id : 'boton-agua'},
    { nombre : '🔥', id : 'boton-fuego'},
    { nombre : '🌱', id : 'boton-tierra'},
)

capipepo.ataques.push(
    { nombre : '🌱', id : 'boton-tierra'},
    { nombre : '🌱', id : 'boton-tierra'},
    { nombre : '🌱', id : 'boton-tierra'},
    { nombre : '💧', id : 'boton-agua'},
    { nombre : '🔥', id : 'boton-fuego'},
)
ratigueya.ataques.push(
    { nombre : '🔥', id : 'boton-fuego'},
    { nombre : '🔥', id : 'boton-fuego'},
    { nombre : '🔥', id : 'boton-fuego'},
    { nombre : '💧', id : 'boton-agua'},
    { nombre : '🌱', id : 'boton-tierra'},
)

mokepones.push(hipodoge,capipepo,ratigueya)


//Primero se crean las funciones que se van a ejecutar cuando cargue toda la página.

function iniciarJuego(){
    // Solo mostramos la sección para escoger pokemon, ocultamos la sección para escoger ataque y el botón reiniciar
    sectionSeleccionarAtaque.style.display = 'none'

    //Usamos forEach para que por cada uno de nuestros elementos del arreglo de Mokepones haga algo.
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id="${mokepon.nombre}">
        <label class="tarjeta-de-mokepon" for="${mokepon.nombre}">
            <p>${mokepon.nombre}</p>
            <img src="${mokepon.foto}" alt="${mokepon.nombre}">
        </label>
        `
    })

    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

    //Seleccionamos el ataque correspondiente
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){
     // Ocultamos la sección donde se escoge el pokemon
    sectionSeleccionarMascota.style.display = 'none'

    // Mostramos la sección para escoger pokemon quitándole el display:none a la sección 'seleccionar-ataque'
    sectionSeleccionarAtaque.style.display = 'flex'

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
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

// Creamos el párrafo para el resultado final
function crearMensajeFinal(resultadoFinal) {
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    // Se deshabilita los botones de ataque luego de que haya terminado el juego
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true

    // Se muestra el botón Reiniciar
    
    sectionReiniciar.style.display = 'flex'
}

// Reiniciamos el juego
function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min+1) + min)
}

window.addEventListener('load', iniciarJuego) //nuestro juego/script arranca cuando se haya cargado toda la página.