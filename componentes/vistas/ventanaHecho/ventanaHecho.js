function cargarVentanaH(){

     let seccionLogin = document.createElement('section');
    seccionLogin.className = "seccion-login";

    let formularioLogin = document.createElement('form');
    formularioLogin.className = "formulario formulario-vh";

    let contenedorImagenLogin = document.createElement('div');
    contenedorImagenLogin.className = "contenedor-img-vh";

    let imagenBannerLogin = document.createElement('img');
    imagenBannerLogin.className = "img-banner-vh";
    imagenBannerLogin.src = "https://github.com/Leibril2007/img_App/blob/main/check.png?raw=true";
    contenedorImagenLogin.appendChild(imagenBannerLogin);
    formularioLogin.appendChild(contenedorImagenLogin);

    let tituloBienvenida = document.createElement('h1');
    tituloBienvenida.className = "titulo-exito";
    tituloBienvenida.textContent = "¡Guardado con éxito!";
    formularioLogin.appendChild(tituloBienvenida);


    let botonIngresar = document.createElement('div');
    botonIngresar.className = "boton boton-ingresar";
    botonIngresar.textContent = "Ir al login";

    botonIngresar.addEventListener("click", function(){

        window.location.href = "login.html";

    });

    /* FUNCION INGRESAR */

    /* -------------------------- */

    formularioLogin.appendChild(botonIngresar);


    seccionLogin.appendChild(formularioLogin);
    return seccionLogin;
}

export { cargarVentanaH }