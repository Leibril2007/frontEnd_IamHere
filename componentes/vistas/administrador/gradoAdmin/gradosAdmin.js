import { cargarHeaderSimp } from "../../../modulos/header/header.js";
import { cadaGradoAdm } from "../../../modulos/grados/grados.js";

let llamarDashboard = document.querySelector('#nivAdminB');

llamarDashboard.appendChild(cargarHeaderSimp());

function cargarPantallaDash(){

    let baseDash = document.createElement('section');
    baseDash.className = "base-dash";

    let asisTitProyec = document.createElement('h1');
    asisTitProyec.className = "asis-tit-proyec";
    asisTitProyec.textContent = "Grados";
    baseDash.appendChild(asisTitProyec);


    let dvBaseGrados = document.createElement('div');
    dvBaseGrados.className = "dv-base-grados";


    const nivelesGuard = JSON.parse(localStorage.getItem("listaGrados")) || [];
    console.log("d", nivelesGuard);

    const idNivelActual = parseInt(localStorage.getItem("idNivelAdmin")); 
    const gradosFiltrados = nivelesGuard.filter(grado => grado.nivel_id === idNivelActual);

    gradosFiltrados.forEach(cGrado => {
        dvBaseGrados.appendChild(cadaGradoAdm(cGrado.nombre));
        localStorage.setItem("idNivGuardSel", cGrado.id);
    });


    baseDash.appendChild(dvBaseGrados);

    let btnVerProfe = document.createElement('div');
    btnVerProfe.className = "btn-proyec  btn-descarg-proyec";
    btnVerProfe.textContent = "Agregar Grado";
    baseDash.appendChild(btnVerProfe);

    btnVerProfe.addEventListener("click", async function(){

        window.location.href = "agregarGrado.html";

    });


    let btnRegresoProyec = document.createElement('div');
    btnRegresoProyec.className = "btn-regreso";
    btnRegresoProyec.textContent = "Regresar";
    baseDash.appendChild(btnRegresoProyec);

    btnRegresoProyec.addEventListener("click", function(){

        window.location.href = "nivelesAdmin.html";

    });



    return baseDash;
    
}

llamarDashboard.appendChild(cargarPantallaDash());

export { cargarPantallaDash };