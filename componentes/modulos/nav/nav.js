import { conexionAs } from "../../vistas/asistenciaView/asistencia.js";
import { añadirTablero } from "../../vistas/asistenciaView/asistencia.js";
import { mostrarMsjAsistenciaSegunGrado } from "../../vistas/asistenciaView/funcionAsitenciaGrado.js";
import { asisTodosNiveles, obtenerGradosCordi, obtenerNivelesCordi } from "../../conexiones/conexionCoordi.js";
/* import { consultarAsistencia } from "../../conexiones/enviarDatos.js"; */


function cargarNav(dataUsuarioN, dataCorreoN, dataGradoI){

    console.log("dataUsuarioN ",dataUsuarioN);
    console.log("dataCorreoN",dataCorreoN);
    console.log("dataGradoId ",dataGradoI);

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
        mostrarMsjAsistenciaSegunGrado(idGradoSel);
        
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
    fechaInp.value = new Date().toISOString().split('T')[0];
    localStorage.setItem("recFecha", fechaInp.value);
    navPag.appendChild(fechaInp);


    fechaInp.addEventListener("change", function() {
        localStorage.setItem("recFecha", fechaInp.value);
    });

/*     let horaInp = document.createElement('input');
    horaInp.className = "hora-inp";
    horaInp.type = "time";

    let ahora = new Date();
    let horas = String(ahora.getHours()).padStart(2, '0');
    let minutos = String(ahora.getMinutes()).padStart(2, '0');
    horaInp.value = `${horas}:${minutos}`;

    navPag.appendChild(horaInp);
 */
    let btnProyeccionProf = document.createElement('div');
    btnProyeccionProf.className = "btn-proyeccion-prof";
    btnProyeccionProf.textContent = "Proyección";
    navPag.appendChild(btnProyeccionProf);

/*     btnProyeccionProf.addEventListener('click', async function(){

        let idCoordi = localStorage.getItem("idCoordinador");

        if (idCoordi === "null" || idCoordi === null) {
          window.location.href = "dashboard.html";
        } else {
          const datos = await asisTodosNiveles(); 
          await obtenerGradosCordi();
          await obtenerNivelesCordi();
      
          if (datos && datos.length > 0) {

            window.location.href = "dashboardCoordinador.html";
          } else {
            console.error("No se cargaron datos de asistencia.");
            alert("No se pudo cargar la asistencia. Intenta de nuevo.");
          }
        }

    }); */

    btnProyeccionProf.addEventListener('click', async function () {
      let idCoordi = localStorage.getItem("idCoordinador");
      let esAdmin = localStorage.getItem("esAdmin");
    
      esAdmin = esAdmin === "true";
    
      if (esAdmin) {
        window.location.href = "dashboardAdmin.html";
      } else if (idCoordi !== "null" && idCoordi !== null) {
        const datos = await asisTodosNiveles();
    
        await obtenerGradosCordi();
        await obtenerNivelesCordi();
    
        if (datos && datos.length > 0) {
          window.location.href = "dashboardCoordinador.html";
        } else {
          console.error("No se cargaron datos de asistencia.");
          alert("No se pudo cargar la asistencia. Intenta de nuevo.");
        }
      } 
      else {
        window.location.href = "dashboard.html";
      }
    });


    return navPag;

}


export { cargarNav }