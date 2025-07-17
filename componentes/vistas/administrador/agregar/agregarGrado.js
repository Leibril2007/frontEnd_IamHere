let loginPage = document.querySelector('#agregarProfe');

function cargarLogin(){

    let seccionLogin = document.createElement('section');
    seccionLogin.className = "seccion-login";

    let formularioLogin = document.createElement('form');
    formularioLogin.className = "formularioProf formulario-prof";

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
    tituloBienvenida.textContent = "Agregar Grado";
    formularioLogin.appendChild(tituloBienvenida);


    let inputNombre = document.createElement('input');
    inputNombre.className = "input input-user-email";
    inputNombre.placeholder = "Nombre:";
    formularioLogin.appendChild(inputNombre);

    let botonIngresar = document.createElement('div');
    botonIngresar.className = "boton boton-ingresar";
    botonIngresar.textContent = "Registrar";

    /* FUNCION INGRESAR */

    botonIngresar.addEventListener("click", async function () {
        let nomIng = inputNombre.value;
        
        //idNivGuardSel

        let nivGuardAnt = localStorage.getItem("idNivelAdmin");
        console.log(nivGuardAnt);
    
        try {
            const response = await fetch('https://backend-iamhere.onrender.com/admin/agregar/grados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: nomIng,
                    nivel_id: nivGuardAnt
                })
            });
    
            if (response.ok) {
                let msjGuardEx = document.createElement('p');
                msjGuardEx.className = "msj-guard-ex";
                msjGuardEx.textContent = "¡Nivel guardado con éxito!";
                formularioLogin.appendChild(msjGuardEx);
            } else {
                let errorText = await response.text();
                console.error("Error de respuesta:", errorText);
                let errorMsg = document.createElement('p');
                errorMsg.className = "error";
                errorMsg.textContent = "No se pudo registrar el nivel.";
                formularioLogin.appendChild(errorMsg);
            }
    
        } catch (error) {
            console.error("Error en el fetch:", error);
            let errorMsg = document.createElement('p');
            errorMsg.className = "error";
            errorMsg.textContent = "No se pudo conectar al servidor";
            formularioLogin.appendChild(errorMsg);
        }
    });

    /* -------------------------- */

    formularioLogin.appendChild(botonIngresar);

    let botonRecuperar = document.createElement('div');
    botonRecuperar.className = "boton boton-recuperar";
    botonRecuperar.textContent = "Regresar";
    formularioLogin.appendChild(botonRecuperar);

    botonRecuperar.addEventListener("click", function(){
        window.location.href = "nivelesAdmin.html";
    });



    seccionLogin.appendChild(formularioLogin);
    return seccionLogin;
}

loginPage.appendChild(cargarLogin());

export { cargarLogin }