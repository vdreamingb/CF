const close = document.querySelector(".close")
const logInMenu = document.querySelector(".log__in__inner.--log__in")
const transparentBack = document.querySelector(".log__in__menu")
const logIn = document.querySelector("#icon-login")
const body = document.querySelector("body")

const signUp = document.querySelector(".sign__up")
const signUpForm = document.querySelector(".log__in__inner.--sign__up")
const closeHeader = document.querySelector(".close-header")

const nav = document.querySelector(".nav")

closeHeader.addEventListener("click", () =>{
    nav.classList.toggle("active")
    closeHeader.classList.toggle("active")
    body.classList.toggle("lock")
})

logIn.addEventListener("click", () =>{
    transparentBack.classList.add("active")
    logInMenu.classList.add("active")
    close.classList.add("active")
    if(body.classList.contains("lock") == true){
    }
    else{
        body.classList.add("lock")
    }
    
})

close.addEventListener("click", () =>{
    transparentBack.classList.remove("active")
    logInMenu.classList.remove("active")
    close.classList.remove("active")
    signUpForm.classList.remove("active")
    if(nav.classList.contains("active") == true){
        return
    }
    else{
        body.classList.remove("lock")
    }
})

signUp.addEventListener("click", () =>{
    logInMenu.classList.remove("active")
    signUpForm.classList.add("active")
})
