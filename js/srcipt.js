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

//escoger nombre
const selectName = (event) =>{

    if(name__input.value === ""){
        text__error.classList.add("displayblock")
        nombre.classList.remove("displayblock")
        nombre.classList.add("displaynone")
    }else{
        nombre.classList.add("displayblock")
        text__error.classList.remove("displayblock")
        span__name.textContent = name__input.value
    }
}

name__button.addEventListener("click", selectName)

//escoger avatar
const selectAvatar = (event) =>{

    let element = event.target;
    
    if(element.nodeName === "IMG"){
        img__perfil.classList.remove("displaynone")
        img__perfil.src = element.src
    }
}

config__avatar.addEventListener("click", selectAvatar);


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

const loadGame = (event) =>{

    if(img__perfil.src != "./assets/images/perfilcolor.png"){
        config.classList.add("displaynone");
        eleccion__preguntas.classList.add("displayblock")
        
        button__preguntas.classList.add("displaynone")
        button__juego.classList.remove("displaynone")
    }
    

}

button__pregunta.addEventListener("click", loadGame)