import { descargarGrafica } from "../resumenAsistenciaAlumnos/descargas.js";

function footProyecciones(){

    let footerProyec = document.createElement('footer');
    footerProyec.className = "footer-proyec";
    
    let btnDescargProyec = document.createElement('div');
    btnDescargProyec.className = "btn-proyec  btn-descarg-proyec";
    btnDescargProyec.textContent = "Descargar Proyección";
    footerProyec.appendChild(btnDescargProyec);

    btnDescargProyec.addEventListener("click", function(){

        descargarGrafica();

    });

    let btnRegresoProyec = document.createElement('div');
    btnRegresoProyec.className = "btn-proyec  btn-regreso-proyec";
    btnRegresoProyec.textContent = "Regresar al menú principal";
    footerProyec.appendChild(btnRegresoProyec);

    btnRegresoProyec.addEventListener("click", function(){

        window.location.href = "asistencia.html";

    });

    return footerProyec;

}

export { footProyecciones };