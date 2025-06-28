function mostrarMsjAsis() {
    let llamarNvGrado = document.querySelector('.div-tab-b');

    let yaExiste = llamarNvGrado.querySelector('.msj-guard-asis');
    if (yaExiste) yaExiste.remove();

    let msjGuardAsis = document.createElement('p');
    msjGuardAsis.className = "msj-guard-asis";
    msjGuardAsis.textContent = "¡Asistencia Guardada!";
    llamarNvGrado.appendChild(msjGuardAsis);
}

function cambiarGradoSel(idGradoSelNuevo) {
    let gradosConAsistencia = JSON.parse(localStorage.getItem("gradosConAsistencia")) || [];
    let mensaje = document.querySelector('.msj-guard-asis');

    if (gradosConAsistencia.includes(idGradoSelNuevo)) {
        if (!mensaje) {
            mostrarMsjAsis(); 
        }
    } else {
        if (mensaje) mensaje.remove(); 
    }
}

export { mostrarMsjAsis, cambiarGradoSel }