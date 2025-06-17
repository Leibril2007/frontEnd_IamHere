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
    botonRecuperar.textContent = "Recuperar contraseña";
    formularioLogin.appendChild(botonRecuperar);

    botonRecuperar.addEventListener("click", function(){
        window.location.href = "recuperarContraseña.html";
    });


    let botonIngresar = document.createElement('div');
    botonIngresar.className = "boton boton-ingresar";
    botonIngresar.textContent = "Ingresar";

    /* FUNCION INGRESAR */

    botonIngresar.addEventListener("click", async function(){

        let valorUsEm = inputUsuarioEmail.value;
        let valorPass = inputPassword.value;

        const errorExistente = formularioLogin.querySelector(".error");
        if (errorExistente) {
          errorExistente.remove();
        }

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    correo: valorUsEm,
                    contraseña: valorPass
                })
            });

            const data = await response.json();

        
            if (!response.ok) {

              let errorMsg = document.createElement('p');
              errorMsg.className = "error";
              errorMsg.textContent = data.message || "Error al iniciar sesión";
              formularioLogin.appendChild(errorMsg);
              return;
              
            } else {
                localStorage.setItem("usuario", JSON.stringify(data.user));
                localStorage.setItem("idMaestro", data.user.id);
                window.location.href = "asistencia.html";
            }


        } catch (error){
            console.error("Error en el fetch:", error);
            let errorMsg = document.createElement('p');
            errorMsg.className = "error";
            errorMsg.textContent = "No se pudo conectar al servidor";
            formularioLogin.appendChild(errorMsg);
        }
        

    });


    /* -------------------------- */

    formularioLogin.appendChild(botonIngresar);



    seccionLogin.appendChild(formularioLogin);
    return seccionLogin;
}

loginPage.appendChild(cargarLogin());

export { cargarLogin }