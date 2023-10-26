const avatar = [
    "capitanamerica",
    "spiderman",
    "loki",
    "thor",
    "ironman",
    "wolverine",
    "deadpool",
    "gru",
    "hulk",
    "nickfuria",
    "scarlet"
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

//seleccionar el oponente contra quien juegas
const selectOponent = (event) =>{
    console.log(event)
    let element = event.target;
    if(element.nodeName === "IMG"){
      img__thanos.classList.add("background-purple")
      random.classList.remove("background-purple")
    }else if(element.nodeName === "I"){
        img__thanos.classList.remove("background-purple")
        random.classList.add("background-purple")
    }
  
}
  
article__eleccion.addEventListener("click", selectOponent)