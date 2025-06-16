let loginPage = document.querySelector('#login');

function cargarLogin(){

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
    tituloBienvenida.textContent = "¡Bienvenido!";
    formularioLogin.appendChild(tituloBienvenida);

    let tituloLogin = document.createElement('h1');
    tituloLogin.className = "titulo-login";
    tituloLogin.textContent = "Login";
    formularioLogin.appendChild(tituloLogin);

    let inputUsuarioEmail = document.createElement('input');
    inputUsuarioEmail.className = "input input-user-email";
    inputUsuarioEmail.placeholder = "Usuario/Correo";
    formularioLogin.appendChild(inputUsuarioEmail);

    let inputPassword = document.createElement('input');
    inputPassword.className = "input input-password";
    inputPassword.placeholder = "Contraseña";
    formularioLogin.appendChild(inputPassword);

    let botonRecuperar = document.createElement('div');
    botonRecuperar.className = "boton boton-recuperar";
    botonRecuperar.textContent = "Recuperar correo";
    formularioLogin.appendChild(botonRecuperar);

    botonRecuperar.addEventListener("click", function(){
        window.location.href = "recuperarContraseña.html";
    });


    let botonIngresar = document.createElement('div');
    botonIngresar.className = "boton boton-ingresar";
    botonIngresar.textContent = "Ingresar";

    /* FUNCION INGRESAR */

    botonIngresar.addEventListener("click", function(){
        window.location.href = "asistencia.html";
    });


    /* -------------------------- */

    formularioLogin.appendChild(botonIngresar);



    seccionLogin.appendChild(formularioLogin);
    return seccionLogin;

}

loginPage.appendChild(cargarLogin());

export { cargarLogin }