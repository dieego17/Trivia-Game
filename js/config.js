const avatar = [
    "Capitán América",
    "spider-man",
    "loki",
    "thor",
    "iron man",
    "wolverine",
    "deadpool",
    "groot",
    "hulk",
    "Nick Fury",
    "viuda negra"
]


const config__avatar = document.getElementById("config__avatar")
const img__perfil = document.getElementById("img__perfil")
const config = document.getElementById("config");

const nombre = document.getElementById("nombre");
const text__error = document.getElementById("text__error")
const span__name = document.getElementById("span__name")
const name__input = document.getElementById("name__input");
const name__button = document.getElementById("name__button");

const button__jugar = document.getElementById("button__jugar");
const button__juego = document.getElementById("button__juego");

const eleccion__preguntas = document.getElementById("eleccion__preguntas")
const button__pregunta = document.getElementById("button__pregunta");
const button__preguntas = document.getElementById("button__preguntas");

//juego
const juego = document.getElementById("juego")
const img__oponente = document.getElementById("img__oponente")
const nombre__oponente = document.getElementById("nombre__oponente")
const button__compruebo = document.getElementById("button__compruebo")

//variable para ver si existe el nombre y el avatar
let existeName
let existeAvatar

let nombreSelecc

//escoger nombre
const selectName = (event) =>{
    
    if(name__input.value === ""){
        nombre.classList.remove("displayblock")
        nombre.classList.add("displaynone")
    }else{
        nombreSelecc = event.target
        nombre.classList.add("displayblock")
        span__name.textContent = name__input.value
        existeName = span__name.textContent;
        nombre__jugador.classList.remove("error")
    }
}

name__button.addEventListener("click", selectName)

let avatarSelecc

//escoger avatar
const selectAvatar = (event) =>{

    let element = event.target;
    
    if(element.nodeName === "IMG"){
        avatarSelecc = event.target;
        img__perfil.classList.remove("displaynone")
        img__perfil.src = element.src
        existeAvatar = img__perfil.src 
        avatar__jugador.classList.remove("error")
    }
}

config__avatar.addEventListener("click", selectAvatar);

//cargar los avatares
const loadImg = (event) =>{

    for(let i = 0; i<6; i++){
        let indiceAle = Math.floor(Math.random()*avatar.length)
        let imgAle = avatar.splice(indiceAle,1)[0];
        let img = document.createElement("IMG");
        img.className = "config__img";
        img.src = "./assets/images/avatares/"+imgAle+".png";
        config__avatar.appendChild(img)
    }

}

document.addEventListener("DOMContentLoaded", loadImg)

//validar el juego
const validateConf = (event) =>{
    if(!nombreSelecc){
        nombre__jugador.classList.add("error")
    }
    if(!avatarSelecc){
        avatar__jugador.classList.add("error")
    }

}

button__pregunta.addEventListener("click", validateConf)

//esconder la configuracion y pasar a la siguiente pantalla
const loadGame = (event) =>{

    if(existeAvatar && existeName){
        config.classList.add("displaynone");
        eleccion__preguntas.classList.add("displayblock")
        button__preguntas.classList.add("displaynone")
        button__juego.classList.remove("displaynone")
    }
}

button__pregunta.addEventListener("click", loadGame)

let oponenteSelecc

//seleccionar el oponente contra quien juegas
const selectOponent = (event) =>{
    let avatarAle = Math.floor(Math.random()*avatar.length);

    let element = event.target;
    if(element.nodeName === "IMG"){
      img__thanos.classList.add("background-purple")
      random.classList.remove("background-purple")
      oponenteSelecc = element
      article__eleccion.classList.remove("error")
    }else if(element.nodeName === "I"){
        img__thanos.classList.remove("background-purple")
        random.classList.add("background-purple")
        oponenteSelecc = element
        article__eleccion.classList.remove("error")
    }
}
article__eleccion.addEventListener("click", selectOponent)

//validar eleccion de oponente
const validateOponent = (event) =>{

    if(!oponenteSelecc){
        article__eleccion.classList.add("error")
    }else{
        eleccion__preguntas.classList.remove("displayblock")
        button__jugar.classList.remove("displaybock")
        eleccion__preguntas.classList.add("displaynone")
        button__juego.classList.add("displaynone")
        juego.classList.remove("displaynone")
        juego.classList.add("displaybock")
        button__compruebo.classList.remove("displaynone")
        //al pasar a la pginma del juego se activa el temporizador
        parar_temporizador = setInterval(saludo,1000);

        //si escoge a thanos se añadira a thanos en la siguiente pantalla
        if(oponenteSelecc.nodeName === "IMG"){
            img__oponente.src = oponenteSelecc.src
            nombre__oponente.textContent = "THANOS"
            img__oponente.classList.remove("displaynone")
            nombre__oponente.classList.remove("displaynone")
            span__ganador.textContent = "THANOS"
            span__perdedor.textContent = "THANOS"
            img__ganador.src = "./assets/images/thanos2.png.svg"
            img__perdedor.src = "./assets/images/thanos2.png.svg"
            

            //si no, añadira un oponente aleatorio quitando al avatar
            //que haya elegido el jugador
        }else if(oponenteSelecc.nodeName === "I"){
            let oponenteAle = Math.floor(Math.random()*avatar.length)
            if(img__perfil.src != img__oponente.src){
                img__oponente.src = "./assets/images/avatares/"+avatar[oponenteAle]+".png"
                nombre__oponente.textContent = avatar[oponenteAle]
                img__oponente.classList.remove("displaynone")
                nombre__oponente.classList.remove("displaynone")
                span__ganador.textContent = avatar[oponenteAle]
                span__perdedor.textContent = avatar[oponenteAle]
                img__ganador.src = "./assets/images/avatares/"+avatar[oponenteAle]+".png"
                img__perdedor.src = "./assets/images/avatares/"+avatar[oponenteAle]+".png"
            }
        }
    }
}
button__jugar.addEventListener("click", validateOponent)

//temporizador para juego
const tiempo__juego = document.getElementById("tiempo__juego")
let parar_temporizador;
let contador_parada = 45;
const saludo = ()=>{
    if(contador_parada > 0){
        contador_parada --
        tiempo__juego.textContent = contador_parada;
    }else{
        juego.classList.add("displaynone")
        button__compruebo.classList.add("displaynone")
        button__siguientepre.classList.add("displaynone")
        perdedor.classList.remove("displaynone")
        empezar__nuevo.classList.remove("displaynone")
        clearInterval(parar_temporizador);
    }
}


  


