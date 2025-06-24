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

    contenedor.append(titulo, cerrar, areaTexto, btnGuardar, btnEnviar);
    return contenedor;
}




function ventEliminar() {
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
    /* inputContra.type = 'password'; */
    inputContra.placeholder = 'Contraseña';
    inputContra.className = 'campo';

    let btnConfirmar = document.createElement('button');
    btnConfirmar.textContent = 'confirmar';
    btnConfirmar.className = 'btn-mini';


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
