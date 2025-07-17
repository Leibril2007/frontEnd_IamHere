import { cargarHeaderSimp } from "../../../modulos/header/header.js";
import { cadaNiv } from "../../../modulos/niveles/cadaNivel.js";

let llamarDashboard = document.querySelector('#nivAdminB');

llamarDashboard.appendChild(cargarHeaderSimp());

function cargarPantallaDash(){

    let baseDash = document.createElement('section');
    baseDash.className = "base-dash";

    /* TITULO GEN */
    let asisTitProyec = document.createElement('h1');
    asisTitProyec.className = "asis-tit-proyec";
    asisTitProyec.textContent = "Niveles";
    baseDash.appendChild(asisTitProyec);

    /* TIT NIV */

    let dvBaseGrados = document.createElement('div');
    dvBaseGrados.className = "dv-base-niv";


    const nivelesGuard = JSON.parse(localStorage.getItem("listaNivel")) || [];
    console.log("ldsf", nivelesGuard);

    nivelesGuard.forEach(cGrado => {

        dvBaseGrados.appendChild(cadaNiv(cGrado.nombre, cGrado.id));        

    });


    baseDash.appendChild(dvBaseGrados);

    let btnVerProfe = document.createElement('div');
    btnVerProfe.className = "btn-proyec  btn-descarg-proyec";
    btnVerProfe.textContent = "Agregar Nivel";
    baseDash.appendChild(btnVerProfe);

    btnVerProfe.addEventListener("click", async function(){

        window.location.href = "agregarNivel.html";

    });


    let btnRegresoProyec = document.createElement('div');
    btnRegresoProyec.className = "btn-regreso";
    btnRegresoProyec.textContent = "Regresar";
    baseDash.appendChild(btnRegresoProyec);

    btnRegresoProyec.addEventListener("click", function(){

        window.location.href = "dashboardAdmin.html";

    });


    return baseDash;
}

llamarDashboard.appendChild(cargarPantallaDash());

export { cargarPantallaDash };