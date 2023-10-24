const config__avatar = document.getElementById("config__avatar")
const img__perfil = document.getElementById("img__perfil")

const nombre = document.getElementById("nombre");
const text__error = document.getElementById("text__error")
const span__name = document.getElementById("span__name")
const name__input = document.getElementById("name__input");
const name__button = document.getElementById("name__button");

//escoger nombre
const selectName = (event) =>{

    if(name__input.value == ""){
        text__error.classList.add("displayblock")
    }else{
        nombre.classList.add("displayblock")
        text__error.classList.remove("displaynone")
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