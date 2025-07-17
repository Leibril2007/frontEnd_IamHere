import { cargarHeaderSimp } from "../../modulos/header/header.js";

let llamarDashboard = document.querySelector('#dashboardCoordiB');

llamarDashboard.appendChild(cargarHeaderSimp());

function cargarPantallaDash(){

    let baseDash = document.createElement('section');
    baseDash.className = "base-dash";

    /* TITULO GEN */
    let asisTitProyec = document.createElement('h1');
    asisTitProyec.className = "asis-tit-proyec";
    asisTitProyec.textContent = "Proyecciones";
    baseDash.appendChild(asisTitProyec);


    /* VER PROYECCIONES */

    let dvProyCAdmin = document.createElement('div');
    dvProyCAdmin.className = "dv-proyAdmin";
    dvProyCAdmin.textContent = "Coordinador";
    baseDash.appendChild(dvProyCAdmin);

    dvProyCAdmin.addEventListener("click", function(){
        window.location.href = "dashboardCoordinador.html";
    });

    let dvProyPAdmin = document.createElement('div');
    dvProyPAdmin.className = "dv-proyAdmin dv-profAdmin";
    dvProyPAdmin.textContent = "Profesor";
    baseDash.appendChild(dvProyPAdmin);

    dvProyPAdmin.addEventListener("click", function(){
        window.location.href = "dashboard.html";
    });

    let titVGrados = document.createElement('h2');
    titVGrados.className = "tit-v-grados";
    titVGrados.textContent = "Ver niveles"
    baseDash.appendChild(titVGrados);

    let dvVerNiv = document.createElement('div');
    dvVerNiv.className = "dv-verAdminNiv";
    dvVerNiv.textContent = "Niveles";
    baseDash.appendChild(dvVerNiv);

    dvVerNiv.addEventListener("click", function(){
        window.location.href = "nivelesAdmin.html";
    });

    let btnRegresoProyec = document.createElement('div');
    btnRegresoProyec.className = "btn-proyec  btn-regreso-proyec";
    btnRegresoProyec.textContent = "Regresar";
    baseDash.appendChild(btnRegresoProyec);

    btnRegresoProyec.addEventListener("click", function(){

        window.location.href = "asistencia.html";

    });

    return baseDash;
}

llamarDashboard.appendChild(cargarPantallaDash());

export { cargarPantallaDash };