import { cargarHeaderSimp } from "../../modulos/header/header.js";
import { cadaAlumRes } from "../../modulos/resumenAsistenciaAlumnos/resAsistenciaAlumnos.js";
import { footResDash } from "../../modulos/footer/footerDashboard.js";

let llamarDashboardRes = document.querySelector('#resumenProfesorB');

llamarDashboardRes.appendChild(cargarHeaderSimp());

function cargarResumenDashAl(){

    let baseDash = document.createElement('section');
    baseDash.className = "base-dash";

    let asisTitProyec = document.createElement('h1');
    asisTitProyec.className = "asis-tit-proyec";
    asisTitProyec.textContent = "Resumen de Asistencia";
    baseDash.appendChild(asisTitProyec);

    let nivelTitProyec = document.createElement('h2');
    nivelTitProyec.className = "nivel-tit-proyec";
    nivelTitProyec.textContent = "V Computación";

    baseDash.appendChild(nivelTitProyec);

    /* CADA ALUM */

    let dvBaseAlum = document.createElement('div');
    dvBaseAlum.className = "dv-base-alum";

    let alum = ["Josefina Hernandez","Josefina Hernandez","Josefina Hernandez","Josefina Hernandez" ]

    alum.forEach(cAlum => {

        dvBaseAlum.appendChild(cadaAlumRes(cAlum));

    });

    baseDash.appendChild(dvBaseAlum);

    return baseDash;
}

llamarDashboardRes.appendChild(cargarResumenDashAl());

llamarDashboardRes.appendChild(footResDash());