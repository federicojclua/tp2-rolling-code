//Ejecutando funciones
document.getElementById("btn_login").addEventListener("click", login);
document.getElementById("btn_register").addEventListener("click", register);
window.addEventListener("resize", broadPage);

//Declarando variables
var form__login = document.querySelector(".form_login");
var form__register = document.querySelector(".form_register");
var container_login_register = document.querySelector(".container_login-register");
var box_1_login = document.querySelector(".box_1-login");
var box_1_register = document.querySelector(".box_1-register");

    //FUNCIONES

function broadPage(){

    if (window.innerWidth > 850){
        box_1_register.style.display = "block";
        box_1_login.style.display = "block";
    }else{
        box_1_register.style.display = "block";
        box_1_register.style.opacity = "1";
        box_1_login.style.display = "none";
        form__login.style.display = "block";
        container_login_register.style.left = "0px";
        form__register.style.display = "none";   
    }
}

broadPage();


    function login(){
        if (window.innerWidth > 850){
            form__login.style.display = "block";
            container_login_register.style.left = "10px";
            form__register.style.display = "none";
            box_1_register.style.opacity = "1";
            box_1_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            container_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            box_1_register.style.display = "block";
            box_1_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            form__register.style.display = "block";
            container_login_register.style.left = "410px";
            form__login.style.display = "none";
            box_1_register.style.opacity = "0";
            box_1_login.style.opacity = "1";
        }else{
            form__register.style.display = "block";
            container_login_register.style.left = "0px";
            form__login.style.display = "none";
            box_1_register.style.display = "none";
            box_1_login.style.display = "block";
            box_1_login.style.opacity = "1";
        }
}

