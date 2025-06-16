import { cargarVCodigo } from "./codigoContraseña/codigoContraseña.js";

let llamarRecuperar = document.querySelector('#recuperarContraseñaB');

function cargarRecuperar(){

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
    tituloBienvenida.textContent = "Ingrese se correo";
    formularioLogin.appendChild(tituloBienvenida);

    let tituloLogin = document.createElement('h1');
    tituloLogin.className = "titulo-login";
    tituloLogin.textContent = "Login";
    formularioLogin.appendChild(tituloLogin);

    let inputUsuarioEmail = document.createElement('input');
    inputUsuarioEmail.className = "input input-user-email";
    inputUsuarioEmail.placeholder = "Correo";
    formularioLogin.appendChild(inputUsuarioEmail);

    let divTexto = document.createElement('div');
    divTexto.className = "mensaje-recuperacion";
    divTexto.textContent = "Una vez ingresado se le enviará un código de recuperación";
    formularioLogin.appendChild(divTexto);


    let botonRecuperar = document.createElement('div');
    botonRecuperar.className = "boton boton-recuperar";
    botonRecuperar.textContent = "Recuperar contraseña";
    formularioLogin.appendChild(botonRecuperar);


    botonRecuperar.addEventListener("click", function(){
        /* window.location.href = "recuperarContraseña.html"; */
        if(!seccionLogin.classList.contains("ocultar")){
            seccionLogin.classList.add("ocultar");
        }

        llamarRecuperar.appendChild(cargarVCodigo());
    });

    let botonIngresar = document.createElement('div');
    botonIngresar.className = "boton boton-ingresar";
    botonIngresar.textContent = "Regresar al login";

    /* FUNCION INGRESAR */

    botonIngresar.addEventListener("click", function(){
        window.location.href = "asistencia.html";
    });


    /* -------------------------- */

    formularioLogin.appendChild(botonIngresar);



    seccionLogin.appendChild(formularioLogin);
    return seccionLogin;

}

llamarRecuperar.appendChild(cargarRecuperar());

export { cargarRecuperar };