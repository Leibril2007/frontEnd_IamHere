import { cargarCambio } from "../cambiarContraseña/cambiarContraseña.js";
let rec = document.querySelector('#recuperarContraseñaB');

function cargarVCodigo(){

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
    tituloBienvenida.textContent = "Recuperar Contraseña";
    formularioLogin.appendChild(tituloBienvenida);

    let tituloLogin = document.createElement('h1');
    tituloLogin.className = "titulo-login";
    tituloLogin.textContent = "Ingresa el código";
    formularioLogin.appendChild(tituloLogin);

    let inputUsuarioEmail = document.createElement('input');
    inputUsuarioEmail.className = "input input-user-email";
    inputUsuarioEmail.placeholder = "Codigo";
    formularioLogin.appendChild(inputUsuarioEmail);


    let botonIngresar = document.createElement('div');
    botonIngresar.className = "boton boton-ingresar";
    botonIngresar.textContent = "Verificar";

    /* FUNCION INGRESAR */

    botonIngresar.addEventListener("click", async function(){

        let codIng = inputUsuarioEmail.value;

        localStorage.setItem("codIng", codIng);

        const almCorreoIng = localStorage.getItem("almCorreoIng");

        try {
            const response = await fetch('http://localhost:3000/verificarCodigo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    correo: almCorreoIng, 
                    codigoIng: codIng 
                })
            })

            const data = await response.json();

            if (!response.ok) {

                let errorMsg = document.createElement('p');
                errorMsg.className = "error";
                errorMsg.textContent = data.message || "Código incorrecto";
                formularioLogin.appendChild(errorMsg);
                return;
                
              } else {

                if(!seccionLogin.classList.contains("ocultar")){
                    seccionLogin.classList.add("ocultar");
                }
              }


        } catch (error) {
            console.error("Error en el fetch:", error);
            let errorMsg = document.createElement('p');
            errorMsg.className = "error";
            errorMsg.textContent = "No se pudo conectar al servidor";
            formularioLogin.appendChild(errorMsg);
        }


        rec.appendChild(cargarCambio());
    });


    /* -------------------------- */

    formularioLogin.appendChild(botonIngresar);



    seccionLogin.appendChild(formularioLogin);
    return seccionLogin;

}


export { cargarVCodigo };