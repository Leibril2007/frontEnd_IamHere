import { almacenarAvisoGeneral } from "../../conexiones/enviarDatos.js";

function ventUniforme(idAlumno) {
    let contenedor = document.createElement('div');
    contenedor.className = 'ventana';

    let cerrar = document.createElement('span');
    cerrar.textContent = '✖';
    cerrar.className = 'cerrar';
    cerrar.onclick = () => contenedor.remove();

    let titulo = document.createElement('h3');
    titulo.textContent = 'Uniforme';
    titulo.className = 'titulo-ventana';

    let areaTexto = document.createElement('textarea');
    areaTexto.placeholder = 'Observación...';
    areaTexto.className = 'area-observacion';

    let btnGuardar = document.createElement('button');
    btnGuardar.textContent = 'Guardar';
    btnGuardar.className = 'btn-amarillo';

    btnGuardar.onclick = () => {
        let observaciones = JSON.parse(localStorage.getItem("obsPorAlum")) || {};
        observaciones[idAlumno] = areaTexto.value.trim();
        localStorage.setItem("obsPorAlum", JSON.stringify(observaciones));
        
        let msjGuardVent = document.createElement('p');
        msjGuardVent.className = "msj-guard-vent";
        msjGuardVent.textContent = "¡Guardado éxitosamente!";
        contenedor.appendChild(msjGuardVent);
    };

    let btnEnviar = document.createElement('button');
    btnEnviar.textContent = 'Enviar correo';
    btnEnviar.className = 'btn-amarillo';

    contenedor.append(cerrar, titulo, areaTexto, btnGuardar, btnEnviar);
    return contenedor;
}


function ventCorreo(idAlumno) {
    let contenedor = document.createElement('div');
    contenedor.className = 'ventana';

    let titulo = document.createElement('h3');
    titulo.textContent = 'Correo personal';
    titulo.className = 'titulo-ventana';

    let cerrar = document.createElement('span');
    cerrar.textContent = '✖';
    cerrar.className = 'cerrar';
    cerrar.onclick = () => contenedor.remove();

    let areaTexto = document.createElement('textarea');
    areaTexto.placeholder = 'Observación...';
    areaTexto.className = 'area-observacion';

    let btnGuardar = document.createElement('button');
    btnGuardar.textContent = 'Guardar';
    btnGuardar.className = 'btn-amarillo';

    btnGuardar.onclick = () => {
        let observaciones = {};
        const dataRaw = localStorage.getItem("correoPers");
        if (dataRaw) {
            try {
                observaciones = JSON.parse(dataRaw);
            } catch (e) {
                console.error("Error al parsear correoPers:", e);
            }
        }

        const texto = areaTexto.value.trim();
        if (texto !== "") {
            observaciones[idAlumno] = texto;
            localStorage.setItem("correoPers", JSON.stringify(observaciones));
        }

        let msjGuardVent = document.createElement('p');
        msjGuardVent.className = "msj-guard-vent";
        msjGuardVent.textContent = "¡Guardado éxitosamente!";
        contenedor.appendChild(msjGuardVent);
    };

    let btnEnviar = document.createElement('button');
    btnEnviar.textContent = 'Enviar correo';
    btnEnviar.className = 'btn-violeta';

    btnEnviar.addEventListener('click', async function(){

        let alumId = idAlumno;
        console.log("al id", alumId);
        const texto = areaTexto.value.trim();

        try {

            let response = await fetch('http://localhost:3000/verificarCorreo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    idAlumnoRec: alumId,
                    mensaje: texto
                })
            })
            const data = await response.json();

            if (data.success) {
                alert("Correo enviado correctamente");
            } else {
                alert("Error al enviar el correo: " + (data.message || ""));
            }
            
        } catch (error) {
            console.error("Error en el fetch:", error);
            let errorMsg = document.createElement('p');
            errorMsg.className = "error";
            errorMsg.textContent = "No se pudo conectar al servidor";
            contenedor.appendChild(errorMsg);
        }

    });


    contenedor.append(titulo, cerrar, areaTexto, btnGuardar, btnEnviar);
    return contenedor;
}




function ventEliminar(idAlumnoEliminar) {
    let contenedor = document.createElement('div');
    contenedor.className = 'ventana';

    let titulo = document.createElement('h3');
    titulo.textContent = 'Eliminar alumno';
    titulo.className = 'titulo-ventana';

    let cerrar = document.createElement('span');
    cerrar.textContent = '✖';
    cerrar.className = 'cerrar';
    cerrar.onclick = ()=> contenedor.remove();

    let inputContra = document.createElement('input');
/*     inputContra.type = 'password'; */
    inputContra.placeholder = 'Contraseña';
    inputContra.className = 'campo';

    let btnConfirmar = document.createElement('button');
    btnConfirmar.textContent = 'confirmar';
    btnConfirmar.className = 'btn-mini';

    btnConfirmar.addEventListener('click', async function(){

        let valorInpContra = inputContra.value;
        let alumnoAEliminar = idAlumnoEliminar;

        console.log("contra", valorInpContra);

        try{
            const response = await fetch(`http://localhost:3000/eliminarAlumno`,{

                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    passIng: valorInpContra,
                    idAlumnoEl: alumnoAEliminar
                })
            });

            const data = await response.json();

            if(!response.ok){
                let errorMsg = document.createElement('p');
                errorMsg.className = "error";
                errorMsg.textContent = data.message || "Error al eliminar alumno";
                contenedor.appendChild(errorMsg);
                return;
            } else {
                let msjGuardVent = document.createElement('p');
                msjGuardVent.className = "msj-guard-vent";
                msjGuardVent.textContent = "El alumno fue eliminado";
                contenedor.appendChild(msjGuardVent);
            }


        } catch (error){
            console.error("Error en el fetch:", error);
            let errorMsg = document.createElement('p');
            errorMsg.className = "error";
            errorMsg.textContent = "No se pudo conectar al servidor";
            contenedor.appendChild(errorMsg);
        }



    });

    contenedor.append(titulo, cerrar, inputContra, btnConfirmar);
    return contenedor;
}


function ventCorreoGen() {
    let contenedor = document.createElement('div');
    contenedor.className = 'ventana';

    let titulo = document.createElement('h3');
    titulo.textContent = 'Correo General';
    titulo.className = 'titulo-ventana';

    let cerrar = document.createElement('span');
    cerrar.textContent = '✖';
    cerrar.className = 'cerrar';
    cerrar.onclick = () => contenedor.remove();

    let areaTexto = document.createElement('textarea');
    areaTexto.placeholder = 'Observación...';
    areaTexto.className = 'area-observacion';

    localStorage.setItem("correoPers", areaTexto.value);

    let btnGuardar = document.createElement('button');
    btnGuardar.textContent = 'Guardar';
    btnGuardar.className = 'btn-amarillo';

    btnGuardar.onclick = () => {

        let observaciones = {};
        const dataRaw = localStorage.getItem("correoGen");
        if (dataRaw) {
            try {
                observaciones = JSON.parse(dataRaw);
            } catch (e) {
                console.error("Error al parsear correoPers:", e);
            }
        }

        const texto = areaTexto.value.trim();
        if (texto !== "") {
            observaciones = texto;
            localStorage.setItem("correoGen", JSON.stringify(observaciones));

            const idMaestro = localStorage.getItem("idMaestro");
            const idGradoSel = localStorage.getItem("idGradoSel");

            almacenarAvisoGeneral(observaciones, idGradoSel, idMaestro);
        }

        let msjGuardVent = document.createElement('p');
        msjGuardVent.className = "msj-guard-vent";
        msjGuardVent.textContent = "¡Guardado éxitosamente!";
        contenedor.appendChild(msjGuardVent);
    
    };

    let btnEnviar = document.createElement('button');
    btnEnviar.textContent = 'Enviar correo';
    btnEnviar.className = 'btn-violeta';

    contenedor.append(titulo, cerrar, areaTexto, btnEnviar, btnGuardar);
    return contenedor;
}

export { ventUniforme, ventCorreo, ventEliminar, ventCorreoGen };
