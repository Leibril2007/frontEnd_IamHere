function mostrarMsjAsis() {
    let llamarNvGrado = document.querySelector('.div-tab-b');

    let yaExiste = llamarNvGrado?.querySelector('.msj-guard-asis');
    if (yaExiste) yaExiste.remove();

    let msjGuardAsis = document.createElement('p');
    msjGuardAsis.className = "msj-guard-asis";
    msjGuardAsis.textContent = "¡Asistencia Guardada!";
    llamarNvGrado?.appendChild(msjGuardAsis);
}

function mostrarMsjAsistenciaSegunGrado(idGradoSel) {
    let gradosConAsistencia = JSON.parse(localStorage.getItem("gradosConAsistencia")) || {};
    let mensaje = document.querySelector('.msj-guard-asis');
    if (mensaje) mensaje.remove();

    const tipoAsistencia = gradosConAsistencia[idGradoSel];

    if (tipoAsistencia === "guardado") {
        mostrarMsjAsis();
    } else if (tipoAsistencia === "actualizado") {
        msjActualAsis();
    }
}

function msjActualAsis() {
    let llamarNvGrado = document.querySelector('.div-tab-b');

    let yaExiste = llamarNvGrado?.querySelector('.msj-guard-asis');
    if (yaExiste) yaExiste.remove();

    let msjGuardAsis = document.createElement('p');
    msjGuardAsis.className = "msj-guard-asis";
    msjGuardAsis.textContent = "¡Asistencia Actualizada!";
    llamarNvGrado?.appendChild(msjGuardAsis);
}



export { mostrarMsjAsis, mostrarMsjAsistenciaSegunGrado, msjActualAsis }