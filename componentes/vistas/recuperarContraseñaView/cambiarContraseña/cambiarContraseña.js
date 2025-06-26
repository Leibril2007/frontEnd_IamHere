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
    tituloBienvenida.textContent = "Cambiar Contraseña";
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

    botonIngresar.addEventListener("click", async function(){

        let valorNuevCont = inputUsuarioEmail.value;
        let valorContConfirmar = inputPassword.value;

        const codigoIng = localStorage.getItem("codIng");
        const correoIngCC = localStorage.getItem("almCorreoIng");

        if (valorNuevCont == valorContConfirmar){

            try {

                const response = await fetch('http://localhost:3000/cambiarContrasena', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        correo: correoIngCC, 
                        codigoIng: codigoIng,
                        nuevContra: valorNuevCont 
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
                
                    llamarRecuperar.appendChild(cargarVentanaH());

                  }
    
                
            } catch (error) {
                console.error("Error en el fetch:", error);
                let errorMsg = document.createElement('p');
                errorMsg.className = "error";
                errorMsg.textContent = "No se pudo conectar al servidor";
                formularioLogin.appendChild(errorMsg);
            }
    

        } else {
            let errorMsg = document.createElement('p');
            errorMsg.className = "error";
            errorMsg.textContent = "La contraseña ingresada no es la misma";
            formularioLogin.appendChild(errorMsg);
            return;
        }

    });


    /* -------------------------- */

    formularioLogin.appendChild(botonIngresar);



    seccionLogin.appendChild(formularioLogin);
    return seccionLogin;

}

/* loginPage.appendChild(cargarLogin()); */

export { cargarCambio }