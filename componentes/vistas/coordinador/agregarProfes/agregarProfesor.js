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
    tituloBienvenida.textContent = "Agregar Profesor";
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

    // SELECT para nivel

    let todNiv = JSON.parse(localStorage.getItem("listaNivel")) || [];

    let selectNivel = document.createElement('select');
    selectNivel.className = "selects-prof";
    selectNivel.id = "selectNivel";
    let optionNivelDefault = document.createElement('option');
    optionNivelDefault.text = "Seleccione un Nivel";
    optionNivelDefault.disabled = true;
    optionNivelDefault.selected = true;
    selectNivel.appendChild(optionNivelDefault);
    formularioLogin.appendChild(selectNivel);

    todNiv.forEach(nivel => {
        let opt = document.createElement('option');
        opt.value = nivel.id;
        opt.text = nivel.nombre;
        selectNivel.appendChild(opt);
    });
    
    // SELECT para grado guía

    let selectGrado = document.createElement('select');
    selectGrado.className = "selects-prof";
    selectGrado.id = "selectGrado";
    let optionGradoDefault = document.createElement('option');
    optionGradoDefault.text = "Seleccione un Grado Guía";
    optionGradoDefault.disabled = true;
    optionGradoDefault.selected = true;
    selectGrado.appendChild(optionGradoDefault);
    formularioLogin.appendChild(selectGrado);

    let todGrados = JSON.parse(localStorage.getItem("listaGrados")) || [];

    console.log("grad", todGrados);

    todGrados.forEach(grado => {
        let opt = document.createElement('option');
        opt.value = grado.id;
        opt.text = grado.nombre;
        
        console.log("idg", grado.id );
        selectGrado.appendChild(opt);
    });

    let inputUsuario = document.createElement('input');
    inputUsuario.className = "input input-password";
    inputUsuario.placeholder = "usuario:";
    formularioLogin.appendChild(inputUsuario);

    let inputPassP = document.createElement('input');
    inputPassP.className = "input input-password";
    inputPassP.placeholder = "Contraseña:";
    formularioLogin.appendChild(inputPassP);


    let botonIngresar = document.createElement('div');
    botonIngresar.className = "boton boton-ingresar";
    botonIngresar.textContent = "Registrar";

    /* FUNCION INGRESAR */

    botonIngresar.addEventListener("click", async function () {
        let nomIng = inputNombre.value;
        let apeIng = inputApe.value;
        let corrIng = inputCorr.value;
        let gradoGuia = parseInt(selectGrado.value);
        let nivelProfe = parseInt(selectNivel.value);
        console.log("idg", gradoGuia );
        let usuarioProfe = inputUsuario.value;
        let passProfe = inputPassP.value;
    
        try {
            const response = await fetch('http://localhost:3000/agregarProfesor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: nomIng,
                    apellido: apeIng,
                    correo: corrIng,
                    gradoId: parseInt(gradoGuia),
                    nivelId: parseInt(nivelProfe),
                    usuario: usuarioProfe,
                    contraseña: passProfe
                })
            });
    
            if (response.ok) {
                let msjGuardEx = document.createElement('p');
                msjGuardEx.className = "msj-guard-ex";
                msjGuardEx.textContent = "¡Profesor registrado con éxito!";
                formularioLogin.appendChild(msjGuardEx);
            } else {
                let errorText = await response.text();
                console.error("Error de respuesta:", errorText);
                let errorMsg = document.createElement('p');
                errorMsg.className = "error";
                errorMsg.textContent = "No se pudo registrar el profesor.";
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
        window.location.href = "dashboardCordiProfes.html";
    });



    seccionLogin.appendChild(formularioLogin);
    return seccionLogin;
}

loginPage.appendChild(cargarLogin());

export { cargarLogin }