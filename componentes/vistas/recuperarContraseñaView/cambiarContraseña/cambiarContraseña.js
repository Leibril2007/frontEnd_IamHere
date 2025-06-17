/* let loginPage = document.querySelector('#cambiarContraseña'); */
import { cargarVentanaH } from "../../ventanaHecho/ventanaHecho.js";

let llamarRecuperar = document.querySelector('#recuperarContraseñaB');

function cargarCambio(){

    let seccionLogin = document.createElement('section');
    seccionLogin.className = "seccion-login";

    let formularioLogin = document.createElement('form');
    formularioLogin.className = "formulario formulario-login";

    let contenedorImagenLogin = document.createElement('div');
    contenedorImagenLogin.className = "contenedor-img-login";

    let imagenBannerLogin = document.createElement('img');
    imagenBannerLogin.className = "img-banner-login";
    imagenBannerLogin.src = "https://github.com/Leibril2007/img_App/blob/main/DA.png?raw=true";
    contenedorImagenLogin.appendChild(imagenBannerLogin);
    formularioLogin.appendChild(contenedorImagenLogin);

    let contenedorLogoLogin = document.createElement('div');
    contenedorLogoLogin.className = "contenedor-logo-login";

    let imagenLogoLogin = document.createElement('img');
    imagenLogoLogin.className = "img-logo-login";
    imagenLogoLogin.src = "https://github.com/Leibril2007/img_App/blob/main/logo%20mejorado.png?raw=true";

    contenedorLogoLogin.appendChild(imagenLogoLogin);
    formularioLogin.appendChild(contenedorLogoLogin);

    let tituloBienvenida = document.createElement('h1');
    tituloBienvenida.className = "titulo-bienvenida";
    tituloBienvenida.textContent = "Cambiar COntraseña";
    formularioLogin.appendChild(tituloBienvenida);

    let inputUsuarioEmail = document.createElement('input');
    inputUsuarioEmail.className = "input input-user-email";
    inputUsuarioEmail.placeholder = "Nueva contraseña";
    formularioLogin.appendChild(inputUsuarioEmail);

    let inputPassword = document.createElement('input');
    inputPassword.className = "input input-password";
    inputPassword.placeholder = "Confirmar contraseña";
    formularioLogin.appendChild(inputPassword);


/*     botonRecuperar.addEventListener("click", function(){
        window.location.href = "recuperarContraseña.html";
    }); */


    let botonIngresar = document.createElement('div');
    botonIngresar.className = "boton boton-ingresar";
    botonIngresar.textContent = "Guadar";

    /* FUNCION INGRESAR */

    botonIngresar.addEventListener("click", function(){
        if(!seccionLogin.classList.contains("ocultar")){
            seccionLogin.classList.add("ocultar");
        }

        llamarRecuperar.appendChild(cargarVentanaH());
    });


    /* -------------------------- */

    formularioLogin.appendChild(botonIngresar);



    seccionLogin.appendChild(formularioLogin);
    return seccionLogin;

}

/* loginPage.appendChild(cargarLogin()); */

export { cargarCambio }