/* import { cargarCambio } from "./cambiarContraseña/cambiarContraseña.js"; */
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
    tituloBienvenida.textContent = "Ingrese su correo";
    formularioLogin.appendChild(tituloBienvenida);


    let inputUsuarioEmail = document.createElement('input');
    inputUsuarioEmail.className = "input input-user-email";
    inputUsuarioEmail.placeholder = "Correo";
    formularioLogin.appendChild(inputUsuarioEmail);

    let divTexto = document.createElement('div');
    divTexto.className = "mensaje-recuperacion";
    divTexto.textContent = "Una vez ingresado se le enviará un código de recuperación";
    formularioLogin.appendChild(divTexto);


    let botonRecuperar = document.createElement('div');
    botonRecuperar.className = "boton boton-ingresar";
    botonRecuperar.textContent = "Recuperar contraseña";
    formularioLogin.appendChild(botonRecuperar);


    botonRecuperar.addEventListener("click", async function(){
        
        let corIng = inputUsuarioEmail.value;

        localStorage.setItem("almCorreoIng", corIng);

        console.log("correo ing", corIng);

        try {
            
            const response = await fetch('http://localhost:3000/enviarCodigo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    correo: corIng
                })
            });

            const data = await response.json();

            if (!response.ok) {

                let errorMsg = document.createElement('p');
                errorMsg.className = "error";
                errorMsg.textContent = data.message || "Correo incorrecto";
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




        llamarRecuperar.appendChild(cargarVCodigo());
    });

    let botonIngresar = document.createElement('div');
    botonIngresar.className = "boton boton-recuperar";
    botonIngresar.textContent = "Regresar al login";

    /* FUNCION INGRESAR */

    botonIngresar.addEventListener("click", function(){
        window.location.href = "login.html";
    });


    /* -------------------------- */

    formularioLogin.appendChild(botonIngresar);



    seccionLogin.appendChild(formularioLogin);
    return seccionLogin;

}

llamarRecuperar.appendChild(cargarRecuperar());

export { cargarRecuperar }; 