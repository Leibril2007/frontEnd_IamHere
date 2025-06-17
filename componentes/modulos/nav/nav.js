import { conexionAs } from "../../vistas/asistenciaView/asistencia.js";
import { añadirTablero } from "../../vistas/asistenciaView/asistencia.js";
import { agregarAsis } from "../../conexiones/enviarDatos.js";

function cargarNav(dataUsuarioN, dataCorreoN, dataGradoI){

    console.log("llego a nav ",dataGradoI);

    let navPag = document.createElement('nav');
    navPag.className = "nav-pag";

    let titUserNav = document.createElement('h2');
    titUserNav.className = "titulosNav tit-user-n";
    titUserNav.textContent = "Usuario:";
    navPag.appendChild(titUserNav);

    let userNav = document.createElement('h3');
    userNav.className = "datosUEGNav user-nav";
    userNav.textContent = dataUsuarioN;
    navPag.appendChild(userNav);

    let titEmailNav = document.createElement('h2');
    titEmailNav.className = "titulosNav tit-email-n";
    titEmailNav.textContent = "Correo:";
    navPag.appendChild(titEmailNav);

    let emailNav = document.createElement('h3');
    emailNav.className = "datosUEGNav email-nav";
    emailNav.textContent = dataCorreoN;
    navPag.appendChild(emailNav);

    let titGradoG = document.createElement('h2');
    titGradoG.className = "titulosNav tit-gradoG-n";
    titGradoG.textContent = "Grado Guía:";
    navPag.appendChild(titGradoG);

    let gradoGuiaNv = document.createElement('h3');
    gradoGuiaNv.className = "datosUEGNav gradoG-nav";
    gradoGuiaNv.textContent = dataGradoI;
    navPag.appendChild(gradoGuiaNv);


    /* SELECT */
    
    let selectGrados = document.createElement('select');
    selectGrados.className = "select";

    let defaultOption = document.createElement('option');
    defaultOption.textContent = "Grados";
    defaultOption.value = "";
    selectGrados.appendChild(defaultOption);
    
    selectGrados.addEventListener('change', async function(){

        const selectedOption = selectGrados.options[selectGrados.selectedIndex];
        const nomGradoSel = selectedOption.textContent;
        const idGradoSel = selectedOption.value;

        localStorage.setItem("idGradoSel", idGradoSel);

        let tabAnt = document.querySelector('.sec-tablero');
        
        if(tabAnt){
            tabAnt.remove();
        }

        conexionAs.appendChild(añadirTablero(nomGradoSel, idGradoSel));

    });


    navPag.appendChild(selectGrados);


    /* FECHA */
    let titFecha = document.createElement('h2');
    titFecha.className = "titulosNav tit-fecha";
    titFecha.textContent = "Fecha:";
    navPag.appendChild(titFecha);

    let fechaInp = document.createElement('input');
    fechaInp.className = "fecha-inp";
    fechaInp.type = "date";
    navPag.appendChild(fechaInp);

    fechaInp.addEventListener("change", function() {
        localStorage.setItem("recFecha", fechaInp.value);
    });

    let btnProyeccionProf = document.createElement('div');
    btnProyeccionProf.className = "btn-proyeccion-prof";
    btnProyeccionProf.textContent = "Proyección";
    navPag.appendChild(btnProyeccionProf);


    return navPag;

}


export { cargarNav }