import { descargarGrafica } from "../resumenAsistenciaAlumnos/descargas.js";
import { asisPorProfesor } from "../../conexiones/conexionCoordi.js";

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

function footResDash(){

    let footerProyec = document.createElement('footer');
    footerProyec.className = "footer-proyec";
    
    let btnDescargProyec = document.createElement('div');
    btnDescargProyec.className = "btn-proyec  btn-descarg-proyec";
    btnDescargProyec.textContent = "Descargar Resumen";
    footerProyec.appendChild(btnDescargProyec);

    btnDescargProyec.addEventListener("click", function(){

        descargarGrafica();

    });

    let btnRegresoProyec = document.createElement('div');
    btnRegresoProyec.className = "btn-proyec  btn-regreso-proyec";
    btnRegresoProyec.textContent = "Regresar a proyecciones";
    footerProyec.appendChild(btnRegresoProyec);

    btnRegresoProyec.addEventListener("click", function(){

        window.location.href = "dashboard.html";

    });

    return footerProyec;

}

function footResDashCordi(){

    let footerProyec = document.createElement('footer');
    footerProyec.className = "footer-proyec";
    
    let btnVerProfe = document.createElement('div');
    btnVerProfe.className = "btn-proyec  btn-descarg-proyec";
    btnVerProfe.textContent = "Ver profesores";
    footerProyec.appendChild(btnVerProfe);

    btnVerProfe.addEventListener("click", async function(){
        
        await asisPorProfesor();

        window.location.href = "dashboardCordiProfes.html";

    });

    let btnDescargProyec = document.createElement('div');
    btnDescargProyec.className = "btn-proyec  btn-descarg-proyec";
    btnDescargProyec.textContent = "Descargar Resumen";
    footerProyec.appendChild(btnDescargProyec);

    btnDescargProyec.addEventListener("click", function(){

        descargarGrafica();

    });

    let btnRegresoProyec = document.createElement('div');
    btnRegresoProyec.className = "btn-proyec  btn-regreso-proyec";
    btnRegresoProyec.textContent = "Regresar a lista";
    footerProyec.appendChild(btnRegresoProyec);

    btnRegresoProyec.addEventListener("click", function(){

        window.location.href = "asistencia.html";

    });

    return footerProyec;

}

function footCordiProfes(){

    let footerProyec = document.createElement('footer');
    footerProyec.className = "footer-proyec";
    
    let btnVerProfe = document.createElement('div');
    btnVerProfe.className = "btn-proyec  btn-descarg-proyec";
    btnVerProfe.textContent = "Agregar Profesores";
    footerProyec.appendChild(btnVerProfe);

    btnVerProfe.addEventListener("click", async function(){
        
        window.location.href = "agregarProfesor.html";

    });

    let btnDescargProyec = document.createElement('div');
    btnDescargProyec.className = "btn-proyec  btn-descarg-proyec";
    btnDescargProyec.textContent = "Descargar Resumen";
    footerProyec.appendChild(btnDescargProyec);

    btnDescargProyec.addEventListener("click", function(){

        descargarGrafica();

    });

    let btnRegresoProyec = document.createElement('div');
    btnRegresoProyec.className = "btn-proyec  btn-regreso-proyec";
    btnRegresoProyec.textContent = "Regresar a proyecciones";
    footerProyec.appendChild(btnRegresoProyec);

    btnRegresoProyec.addEventListener("click", function(){

        window.location.href = "dashboardCoordinador.html";

    });

    return footerProyec;

}


export { footProyecciones, footResDash, footResDashCordi, footCordiProfes };