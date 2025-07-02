let loginPage = document.querySelector('#agregarAlumnoS');

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
    tituloBienvenida.textContent = "Agregar alumno";
    formularioLogin.appendChild(tituloBienvenida);


    let inputNombre = document.createElement('input');
    inputNombre.className = "input input-user-email";
    inputNombre.placeholder = "Nombre:";
    formularioLogin.appendChild(inputNombre);

    let inputApe = document.createElement('input');
    inputApe.className = "input input-password";
    inputApe.placeholder = "Apellido:";
    formularioLogin.appendChild(inputApe);

    let inputCorr = document.createElement('input');
    inputCorr.className = "input input-password";
    inputCorr.placeholder = "Correo institucional:";
    formularioLogin.appendChild(inputCorr);


    let botonIngresar = document.createElement('div');
    botonIngresar.className = "boton boton-ingresar";
    botonIngresar.textContent = "Registrar";

    /* FUNCION INGRESAR */

    botonIngresar.addEventListener("click", async function(){
        let nomIng = inputNombre.value;
        let apeIng = inputApe.value;
        let corrIng = inputCorr.value;

        let idGradoSel = localStorage.getItem("idGradoSel");

        console.log("id grado tomado", idGradoSel);
        
        try {
            const response = await fetch('http://localhost:3000/agregarAlumno', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: nomIng,
                    apellido: apeIng,
                    correoIns: corrIng,
                    idGrado: idGradoSel
                })
            });

            if(response.ok){
                let msjGuardEx = document.createElement('p');
                msjGuardEx.className = "msj-guard-ex";
                msjGuardEx.textContent = "Guardado con exito!";
                formularioLogin.appendChild(msjGuardEx);
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

    let botonRecuperar = document.createElement('div');
    botonRecuperar.className = "boton boton-recuperar";
    botonRecuperar.textContent = "Regresar a la lista";
    formularioLogin.appendChild(botonRecuperar);

    botonRecuperar.addEventListener("click", function(){
        window.location.href = "asistencia.html";
    });



    seccionLogin.appendChild(formularioLogin);
    return seccionLogin;
}

loginPage.appendChild(cargarLogin());

export { cargarLogin }