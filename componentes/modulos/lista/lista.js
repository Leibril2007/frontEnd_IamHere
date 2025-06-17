import { marcarPresencia } from "../../vistas/asistenciaView/funcionAsistencia.js";
import { ventUniforme, ventEliminar, ventCorreo } from "../../modulos/ventanaEmergente/ventanaEmergente.js";
import { agregarUniforme } from "../../conexiones/enviarDatos.js";

function cadaAlumno(nomAl){
    

    let divBase = document.createElement('div');
    divBase.className = "c-alumno";

    let nomCompleto = document.createElement('div');
    nomCompleto.className = "nom-completo";
    
    let alumno = document.createElement('p');
    alumno.className = "nombre-alumno";
    alumno.textContent = nomAl.nombre;
    nomCompleto.appendChild(alumno);
    
    let alumnoAP = document.createElement('p');
    alumnoAP.className = "nombre-alumno alumno-ap";
    alumnoAP.textContent = nomAl.apellido;
    
    nomCompleto.appendChild(alumnoAP);
    divBase.appendChild(nomCompleto);

    let baseInputs = document.createElement('div');
    baseInputs.className = "base-inputs";
    
    /* CHECKBOX */
    let inpSi = document.createElement('div');
    inpSi.className = "inp-check check-si";
    inpSi.dataset.idAlumno = nomAl.id;
    inpSi.addEventListener("click", function () {
        
        const divCheck = this;
        
        marcarPresencia(divCheck);
    
        const idMaestro = localStorage.getItem("idMaestro");
        const idAlumno = divCheck.dataset.idAlumno;
    
        let idsGuardados = JSON.parse(localStorage.getItem("idAlumnosMarcados")) || [];
        if (!idsGuardados.includes(idAlumno)) {
            idsGuardados.push(idAlumno);
            localStorage.setItem("idAlumnosMarcados", JSON.stringify(idsGuardados));
        }
    
        const recFecha = localStorage.getItem("recFecha");
        const recAsistencias = JSON.parse(localStorage.getItem("asistencias")) || {};
    
        const recAsistencia = recAsistencias[idAlumno];
        const idGradoSel = localStorage.getItem("idGradoSel");

        const recUniAlum = localStorage.getItem("idAlumno");
    
        console.log("ID MAESTRO:", idMaestro);
        console.log("ID ALUMNO:", idAlumno);
        console.log("ESTADO:", recAsistencia);
        console.log("ID grado", idGradoSel);
        console.log("FECHITA", recFecha);
        console.log("CORREO PERSONAL", correoPers);

        const obsPorAlumno = JSON.parse(localStorage.getItem("obsPorAlum")) || {};
        const valorObsUni = obsPorAlumno[idAlumno] || null;

        const correoPers = JSON.parse(localStorage.getItem("msjCorPer"));
        const valorMsjCP = correoPers[idAlumno] || null;
    
        agregarAsis(idMaestro, idGradoSel, idAlumno, recFecha, recAsistencia, valorMsjCP, recUniAlum);
        agregarUniforme(valorObsUni, idAlumno);
    });
    


    baseInputs.appendChild(inpSi);
    
    /*  DIVS  */
    
    // uniforme
    let btnUniforme = document.createElement('div');
    btnUniforme.className = "btnCAlum btnUniforme";
    btnUniforme.textContent = "👕";
    baseInputs.appendChild(btnUniforme);

    btnUniforme.addEventListener("click", function(){
        
        let ventLlamar = document.querySelector(".ventana");

        if(ventLlamar){
            ventLlamar.remove();
        }

        divBase.appendChild(ventUniforme(nomAl.id));
        
    });
    
    // Correo
    let btnCorrPer = document.createElement('div');
    btnCorrPer.className = "btnCAlum btnCorrPer";
    btnCorrPer.textContent = "✉️";
    baseInputs.appendChild(btnCorrPer);

    btnCorrPer.addEventListener("click", function(){
        
        let ventLlamar = document.querySelector(".ventana");

        if(ventLlamar){
            ventLlamar.remove();
        }

        divBase.appendChild(ventCorreo(nomAl.id));
        
    });
    
    // Eliminar 
    let btnElimi = document.createElement('div');
    btnElimi.className = "btnCAlum btnElimi";
    btnElimi.textContent = "✖️";
    baseInputs.appendChild(btnElimi);

    btnElimi.addEventListener("click", function(){
        
        let ventLlamar = document.querySelector(".ventana");

        if(ventLlamar){
            ventLlamar.remove();
        }

        divBase.appendChild(ventEliminar());
        
    });
    


    divBase.appendChild(baseInputs);


    return divBase;
}

export { cadaAlumno }