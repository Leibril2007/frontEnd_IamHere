import { cargarHeaderLog } from "../../modulos/header/header.js";
import { cargarFooter } from "../../modulos/footer/footer.js";
import { cargarTablero } from "./tablero.js";

let conexionAs = document.querySelector('#asistenciaB');
conexionAs.appendChild(cargarHeaderLog());

function añadirTablero(){
    let divTabB = document.createElement('div');
    divTabB.className = "div-tab-b";
    divTabB.appendChild(cargarTablero());

    return divTabB;
}


function cargarAsistencia(){

    let navPag = document.createElement('nav');
    navPag.className = "nav-pag";

    let titUserNav = document.createElement('h2');
    titUserNav.className = "titulosNav tit-user-n";
    titUserNav.textContent = "Usuario:";
    navPag.appendChild(titUserNav);

    let userNav = document.createElement('h3');
    userNav.className = "datosUEGNav user-nav";
    userNav.textContent = "Usuario base de datos";
    navPag.appendChild(userNav);

    let titEmailNav = document.createElement('h2');
    titEmailNav.className = "titulosNav tit-email-n";
    titEmailNav.textContent = "Correo:";
    navPag.appendChild(titEmailNav);

    let emailNav = document.createElement('h3');
    emailNav.className = "datosUEGNav email-nav";
    emailNav.textContent = "correo base de datos";
    navPag.appendChild(emailNav);

    let titGradoG = document.createElement('h2');
    titGradoG.className = "titulosNav tit-gradoG-n";
    titGradoG.textContent = "Grado Guía:";
    navPag.appendChild(titGradoG);

    let gradoGuiaNv = document.createElement('h3');
    gradoGuiaNv.className = "datosUEGNav gradoG-nav";
    gradoGuiaNv.textContent = "grado";
    navPag.appendChild(gradoGuiaNv);


    /* SELECT */
    
    let selectGrados = document.createElement('select');
    selectGrados.className = "select";

    let opciones = ["Grados", "Bachillerato", "Kinder", "primero primaria"];
    opciones.forEach(grado => {
        let option = document.createElement('option');
        option.className = "select-options";
        option.textContent = grado;
        option.value = grado.toLowerCase();
        selectGrados.appendChild(option);
    });
    
    selectGrados.addEventListener('change', function(){
        conexionAs.appendChild(añadirTablero());
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

    let btnProyeccionProf = document.createElement('div');
    btnProyeccionProf.className = "btn-proyeccion-prof";
    btnProyeccionProf.textContent = "Proyección";
    navPag.appendChild(btnProyeccionProf);


    return navPag;

}

conexionAs.appendChild(cargarAsistencia());

let logoTabAs = document.createElement('img');
logoTabAs.className = "logo-tab";
logoTabAs.src = "https://github.com/Leibril2007/img_App/blob/main/logo%20mejorado.png?raw=true";
conexionAs.appendChild(logoTabAs);

conexionAs.appendChild(cargarFooter());





/* export{ cargarAsistencia} */
	
