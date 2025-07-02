import { cadaAlumno } from "../../modulos/lista/lista.js";
import { alumnosBd } from "../../conexiones/conexiones.js";
import { todosAusentes, todosPresentes } from "./funcionAsistencia.js";
import { agregarAsis, agregarUniforme, actualizarAsis, asisGradoActualizar } from "../../conexiones/enviarDatos.js";
import { ventCorreoGen } from "../../modulos/ventanaEmergente/ventanaEmergente.js";
import { asistenciaGrado } from "../../conexiones/enviarDatos.js";

function cargarTablero(ngSel, idGradoSel){
    let sectionTablero = document.createElement('section');
    sectionTablero.className = "sec-tablero";

    let titGradoTab = document.createElement('h1');
    titGradoTab.className = "tit-grado-tablero";
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
    presTodos.className = "inp-check-pres check-si";
    divMarcarTodos.appendChild(presTodos);

    presTodos.addEventListener("click", todosPresentes);

    let titAusT = document.createElement('h3');
    titAusT.className = "tit-aus-t";
    titAusT.textContent = "Todos ausentes";
    divMarcarTodos.appendChild(titAusT);

    let ausTodos = document.createElement('div');
    ausTodos.className = "inp-check-au check-si";
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

    let baseBtnTab = document.createElement('div');
    baseBtnTab.className = "base-btn-tab";

    // Botón "Agregar alumno"
    let btnAgregar = document.createElement('div');
    btnAgregar.className = "boton btn-agregar";
    btnAgregar.textContent = "Agregar alumno";

    btnAgregar.addEventListener("click", function(){

      window.location.href = "agregarAlumno.html";

    });

    // Botón "Guardar asistencia"
    let btnGuardar = document.createElement('div');
    btnGuardar.className = "boton btn-guardar";
    btnGuardar.textContent = "Guardar asistencia";

    btnGuardar.addEventListener("click", async function() {

        const idMaestro = localStorage.getItem("idMaestro");
        const idGradoSel = localStorage.getItem("idGradoSel");
        const recFecha = localStorage.getItem("recFecha");
        const correoPersRaw = localStorage.getItem("correoPers");
        const correoPers = correoPersRaw ? JSON.parse(correoPersRaw) : {};
        const obsPorAlumno = JSON.parse(localStorage.getItem("obsPorAlum")) || {};
        const asistencias = JSON.parse(localStorage.getItem("asistencias")) || {};
        
        console.log(correoPers);

        const alumnos = await alumnosBd();
        const alumnosDelGrado = alumnos.filter(alumno => alumno.grados_id == idGradoSel);

        let seGuardoAsis = false;

        let asisOriginales = {};
        let obsUniOriginales = {};
        let corrOriginales = {};

        for (const alumno of alumnosDelGrado) {
            const idAlumno = alumno.id;
            localStorage.setItem("idAlumno", idAlumno);
            const estado = asistencias[idAlumno] || "ausente"; 
            
            if (asistencias.hasOwnProperty(idAlumno) || obsPorAlumno.hasOwnProperty(idAlumno) || correoPers.hasOwnProperty(idAlumno)) {
                const observacionUniforme = obsPorAlumno[idAlumno]?.trim();
                let uniforme_id = null;
                
                if (observacionUniforme) {
                    uniforme_id = await agregarUniforme(observacionUniforme, idAlumno);
                    obsUniOriginales[idAlumno] = observacionUniforme;
                    delete obsPorAlumno[idAlumno];
                }

                let correoPersVacioOLleno = correoPers[idAlumno]?.trim() || null;
                if (correoPersVacioOLleno) corrOriginales[idAlumno] = correoPersVacioOLleno;

                await agregarAsis(idMaestro, idGradoSel, idAlumno, recFecha, estado, correoPersVacioOLleno, uniforme_id);

                asisOriginales[idAlumno] = estado;

                delete asistencias[idAlumno];
                delete correoPers[idAlumno];
                localStorage.setItem("correoPers", JSON.stringify(correoPers));

                seGuardoAsis = true;
            }
        }

        localStorage.setItem("asisOriginales", JSON.stringify(asisOriginales));
        localStorage.setItem("obsUniOriginales", JSON.stringify(obsUniOriginales));
        localStorage.setItem("corrOriginales", JSON.stringify(corrOriginales)); 

        if( seGuardoAsis ){
            asistenciaGrado(idGradoSel, "true", recFecha, idMaestro);
        }

        localStorage.setItem("asistencias", JSON.stringify(asistencias));
        localStorage.setItem("obsPorAlum", JSON.stringify(obsPorAlumno));
        
        localStorage.removeItem("idAlumnosMarcados");

  });
  

    let btnActualizar = document.createElement('div');
    btnActualizar.className = "boton btn-guardar";
    btnActualizar.textContent = "Actualizar asistencia";


    btnActualizar.addEventListener("click", async function() {
        const idMaestro = localStorage.getItem("idMaestro");
        const idGradoSel = localStorage.getItem("idGradoSel");
        const recFecha = localStorage.getItem("recFecha");
      
        // DATOS ACTUALES
        const correoPersRaw = localStorage.getItem("correoPers");
        const correoPers = correoPersRaw ? JSON.parse(correoPersRaw) : {};

        const obsPorAlumno = JSON.parse(localStorage.getItem("obsPorAlum")) || {};
        const asistencias = JSON.parse(localStorage.getItem("asistencias")) || {};
      
        // DATPS ORIGINALES
        const asisOriginales = JSON.parse(localStorage.getItem("asisOriginales")) || {};
        const obsUniOriginales = JSON.parse(localStorage.getItem("obsUniOriginales")) || {};
        const corrOriginales = JSON.parse(localStorage.getItem("corrOriginales")) || {};

        const alumnos = await alumnosBd();
        const alumnosDelGrado = alumnos.filter(alumno => alumno.grados_id == idGradoSel);
      
        let seActualiAsis = false;
      
        for (const alumno of alumnosDelGrado) {
            const idAlumno = alumno.id;
            localStorage.setItem("idAlumno", idAlumno);
        
            const estadoNv = asistencias[idAlumno] !== undefined ? asistencias[idAlumno] : asisOriginales[idAlumno] || "ausente";
            const estadoAnt = asisOriginales[idAlumno] || "ausente"; 
        
            const obsNv = obsPorAlumno[idAlumno] !== undefined ? obsPorAlumno[idAlumno]?.trim() : obsUniOriginales[idAlumno] || "";
            const obsAnt = obsUniOriginales[idAlumno] || "";
        
            const corrNv = correoPers[idAlumno] !== undefined ? correoPers[idAlumno]?.trim() : corrOriginales[idAlumno] || "";
            const corrAnt = corrOriginales[idAlumno] || "";
        
            const huboCambAsisE = estadoNv !== estadoAnt;
            const huboCambObsUni = obsNv !== obsAnt && obsNv !== undefined;
            const huboCambCorr = corrNv !== corrAnt && corrNv !== undefined;
        
            let uniforme_id = null;
        
            if (huboCambObsUni && obsNv) {
                uniforme_id = await agregarUniforme(obsNv, idAlumno);
            }
          
            if (huboCambAsisE || huboCambObsUni || huboCambCorr) {
                await actualizarAsis(idMaestro, idGradoSel, idAlumno, recFecha, estadoNv, corrNv || null, uniforme_id);
                seActualiAsis= true;
            }
          
            asisOriginales[idAlumno] = estadoNv;
            corrOriginales[idAlumno] = corrNv;

            if (obsNv !== undefined) {
                obsUniOriginales[idAlumno] = obsNv;
            }
        }
      
        if (seActualiAsis) {
            asisGradoActualizar(idGradoSel, "true", recFecha, idMaestro);
        }
      
        // ESTADOS ACTUALIZADOS
        localStorage.setItem("asisOriginales", JSON.stringify(asisOriginales));
        localStorage.setItem("obsUniOriginales", JSON.stringify(obsUniOriginales));
        localStorage.setItem("corrOriginales", JSON.stringify(corrOriginales));

        // LIMPIAR cambios 
        localStorage.setItem("correoPers", JSON.stringify({}));
        localStorage.setItem("asistencias", JSON.stringify({}));
        localStorage.setItem("obsPorAlum", JSON.stringify({}));
        localStorage.removeItem("idAlumnosMarcados");
    });


    baseBtnTab.appendChild(btnAgregar);
    baseBtnTab.appendChild(btnGuardar);
    baseBtnTab.appendChild(btnActualizar);

    sectionTablero.appendChild(baseBtnTab);
    return sectionTablero;

}

export { cargarTablero }