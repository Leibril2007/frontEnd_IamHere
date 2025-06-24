import { cadaAlumno } from "../../modulos/lista/lista.js";
import { alumnosBd } from "../../conexiones/conexiones.js";
import { todosAusentes, todosPresentes } from "./funcionAsistencia.js";
import { agregarAsis, agregarUniforme } from "../../conexiones/enviarDatos.js";
import { ventCorreoGen } from "../../modulos/ventanaEmergente/ventanaEmergente.js";

function cargarTablero(ngSel, idGradoSel){
    let sectionTablero = document.createElement('section');
    sectionTablero.className = "sec-tablero";

    let titGradoTab = document.createElement('h1');
    titGradoTab.className = "tit-grado-tab";
    titGradoTab.textContent = ngSel;
    sectionTablero.appendChild(titGradoTab);


    let dBaseInsTab = document.createElement('div');
    dBaseInsTab.className = "d-base-ins-tab";
   
    let titBtPresTab = document.createElement('h1');
    titBtPresTab.className = "tit-ins-gen tit-bt-pres-tab";
    titBtPresTab.textContent = "Presente:";
    dBaseInsTab.appendChild(titBtPresTab);

    let btPresTabIns = document.createElement('div');
    btPresTabIns.className = "bt-ins-gen bt-pres-tab-ins";
    dBaseInsTab.appendChild(btPresTabIns);

    let titBtAuTab = document.createElement('h1');
    titBtAuTab.className = "tit-ins-gen tit-bt-au-tab";
    titBtAuTab.textContent = "Ausente:";
    dBaseInsTab.appendChild(titBtAuTab);

    let btAuTabIns = document.createElement('div');
    btAuTabIns.className = "bt-ins-gen bt-au-tab-ins";
    dBaseInsTab.appendChild(btAuTabIns);
   
    /* CORREO INST */
    let titCorTab = document.createElement('h1');
    titCorTab.className = "tit-ins-gen tit-cor-tab";
    titCorTab.textContent = "Correo:";
    dBaseInsTab.appendChild(titCorTab);

    let corIcTabIns = document.createElement('h2');
    corIcTabIns.className = "bt-ins-gen ic-cor-tab-ins";
    corIcTabIns.textContent = "✉️";
    dBaseInsTab.appendChild(corIcTabIns);

    /* ELIMINAR INST */

    let titElTab = document.createElement('h1');
    titElTab.className = "tit-ins-gen tit-el-tab";
    titElTab.textContent = "Eliminar alumno:";
    dBaseInsTab.appendChild(titElTab);

    let icElTab = document.createElement('h2');
    icElTab.className = "bt-ins-gen ic-el-tab-ins";
    icElTab.textContent = "❌";
    dBaseInsTab.appendChild(icElTab);

    sectionTablero.appendChild(dBaseInsTab);


    /* CORREO GENERAL */
    let dCorGen = document.createElement('div');
    dCorGen.className = "d-cor-gen";

    let titCorGen = document.createElement('h1');
    titCorGen.className = "tit-ins-gen tit-cor-gen";
    titCorGen.textContent = "Correo general:";
    sectionTablero.appendChild(titCorGen);

    let icCorTabGen = document.createElement('div');
    icCorTabGen.className = "bt-ins-gen ic-cor-gen-ins";
    icCorTabGen.textContent = "✉️";

    icCorTabGen.addEventListener("click", function(){

      dCorGen.appendChild(ventCorreoGen());

    });

    dCorGen.appendChild(titCorGen);
    dCorGen.appendChild(icCorTabGen);

    sectionTablero.appendChild(dCorGen);



    let divMarcarTodos = document.createElement('div');
    divMarcarTodos.className = "div-marcar-t";

    let titPresT = document.createElement('h3');
    titPresT.className = "tit-pres-t";
    titPresT.textContent = "Todos presentes";
    divMarcarTodos.appendChild(titPresT);

    let presTodos = document.createElement('div');
    presTodos.className = "inp-check check-si";
    divMarcarTodos.appendChild(presTodos);

    presTodos.addEventListener("click", todosPresentes);

    let titAusT = document.createElement('h3');
    titAusT.className = "tit-aus-t";
    titAusT.textContent = "Todos ausentes";
    divMarcarTodos.appendChild(titAusT);

    let ausTodos = document.createElement('div');
    ausTodos.className = "inp-check check-si";
    divMarcarTodos.appendChild(ausTodos);

    ausTodos.addEventListener("click", todosAusentes);

    sectionTablero.appendChild(divMarcarTodos);

   

    /* ALUMNOS */

    let divAlumno = document.createElement('div');
    divAlumno.className = "div-alumno";
    
    
    alumnosBd().then(alumnos => {
      
      const alumnosDelGrado = alumnos.filter(alumno => alumno.grados_id == idGradoSel);

      alumnosDelGrado.forEach(cAlumno => {
        divAlumno.appendChild(cadaAlumno(cAlumno));
      });
    });



    sectionTablero.appendChild(divAlumno);




    /* BOTONES AGREGAR Y GUARDAR */    

    // Botón "Agregar alumno"
    let btnAgregar = document.createElement('div');
    btnAgregar.className = "boton btn-agregar";
    btnAgregar.textContent = "Agregar alumno";

    // Botón "Guardar asistencia"
    let btnGuardar = document.createElement('div');
    btnGuardar.className = "boton btn-guardar";
    btnGuardar.textContent = "Guardar asistencia";

    btnGuardar.addEventListener("click", async function() {

        const idMaestro = localStorage.getItem("idMaestro");
        const idGradoSel = localStorage.getItem("idGradoSel");
        const recFecha = localStorage.getItem("recFecha");
        const correoPersonal = JSON.parse(localStorage.getItem("correoPers")) || {};
        const obsPorAlumno = JSON.parse(localStorage.getItem("obsPorAlum")) || {};
        const asistencias = JSON.parse(localStorage.getItem("asistencias")) || {};

        const alumnos = await alumnosBd();
        const alumnosDelGrado = alumnos.filter(alumno => alumno.grados_id == idGradoSel);


        for (const alumno of alumnosDelGrado) {
            const idAlumno = alumno.id;
            const estado = asistencias[idAlumno] || "ausente"; 
            
            if (asistencias.hasOwnProperty(idAlumno) || obsPorAlumno.hasOwnProperty(idAlumno)) {
                const observacionUniforme = obsPorAlumno[idAlumno]?.trim();
                let uniforme_id = null;
                
                if (observacionUniforme) {
                    uniforme_id = await agregarUniforme(observacionUniforme, idAlumno);

                    delete obsPorAlumno[idAlumno];
                }
                
                await agregarAsis(idMaestro, idGradoSel, idAlumno, recFecha, estado, correoPersonal[idAlumno]?.trim() || null, uniforme_id);

                delete asistencias[idAlumno];
            }
        }

        localStorage.setItem("asistencias", JSON.stringify(asistencias));
        localStorage.setItem("obsPorAlum", JSON.stringify(obsPorAlumno));
        
        localStorage.removeItem("idAlumnosMarcados");

        localStorage.removeItem("recFecha");

  });
  

    let btnActualizar = document.createElement('div');
    btnActualizar.className = "boton btn-guardar";
    btnActualizar.textContent = "Actualizar asistencia";


    sectionTablero.appendChild(btnAgregar);
    sectionTablero.appendChild(btnGuardar);
    sectionTablero.appendChild(btnActualizar);

    return sectionTablero;

}

export { cargarTablero }