const loginContainer = document.getElementById("loginContainer");
const loginForm = document.getElementById("loginForm")
const loginInput = loginForm.querySelector("input")
const mainContainer = document.getElementById("mainContainer");

let UserName = []
let isLoggedIn = false;

function handleLogin(event){
    event.preventDefault();
    const userName = loginInput.value;
    isLoggedIn = true;
    loginContainer.style.visibility = "hidden"
    loginContainer.style.opacity = "0"
    mainContainer.style.visibility = "visible";
    console.log(1)
}

loginForm.addEventListener("submit",handleLogin);

window.onload = function(){
    if(!isLoggedIn){
        mainContainer.style.visibility = "hidden";
    }
}