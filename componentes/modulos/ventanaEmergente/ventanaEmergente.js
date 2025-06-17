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
        contenedor.remove();
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
        let observaciones = JSON.parse(localStorage.getItem("msjCorPer")) || {};
        observaciones[idAlumno] = areaTexto.value.trim();
        localStorage.setItem("msjCorPer", JSON.stringify(observaciones));
        contenedor.remove();
    };

    contenedor.appendChild(btnGuardar);

    let btnEnviar = document.createElement('button');
    btnEnviar.textContent = 'Enviar correo';
    btnEnviar.className = 'btn-violeta';

    contenedor.append(titulo, cerrar, areaTexto, btnEnviar);
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
    inputContra.type = 'password';
    inputContra.placeholder = 'Contraseña';
    inputContra.className = 'campo';

    let btnConfirmar = document.createElement('button');
    btnConfirmar.textContent = 'confirmar';
    btnConfirmar.className = 'btn-mini';

    let btnCancelar = document.createElement('button');
    btnCancelar.textContent = 'regresar a la lista';
    btnCancelar.className = 'btn-mini';

    contenedor.append(titulo, cerrar, inputContra, btnConfirmar, btnCancelar);
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
        localStorage.setItem("recUni", areaTexto.value);
        alert("Observación guardada");
    };
    contenedor.appendChild(btnGuardar);

    let btnEnviar = document.createElement('button');
    btnEnviar.textContent = 'Enviar correo';
    btnEnviar.className = 'btn-violeta';

    contenedor.append(titulo, cerrar, areaTexto, btnEnviar);
    return contenedor;
}

export { ventUniforme, ventCorreo, ventEliminar, ventCorreoGen };
