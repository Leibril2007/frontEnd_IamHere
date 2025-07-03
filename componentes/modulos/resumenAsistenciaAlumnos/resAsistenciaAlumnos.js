import { grafAlInd } from "./cadaGrafAlum.js";
import { obtenerAsistenciaAlumno } from "../../conexiones/conexionProyec.js";


function cadaAlumRes(nomComp, idAl){

    let baseCGProy = document.createElement('div');
    baseCGProy.className = "base-c-g-proy";
    
    let divCGProy = document.createElement('div');
    divCGProy.className = "div-c-g-proy";
    divCGProy.textContent = "👤";
    baseCGProy.appendChild(divCGProy);

    let txtCGproy = document.createElement('p');
    txtCGproy.className = "txt-c-g-proy";
    txtCGproy.textContent = nomComp;
    baseCGProy.appendChild(txtCGproy);

    let btnVerAP = document.createElement('div');
    btnVerAP.className = "btn-ver btn-ver-ap";
    btnVerAP.textContent = "Ver asistencia";
    baseCGProy.appendChild(btnVerAP);
    
    btnVerAP.addEventListener("click", async function() {
      
      const yaExiste = baseCGProy.querySelector('.bas-graf-t');
      if (yaExiste) {
        yaExiste.remove();
        return; 
      }

      await obtenerAsistenciaAlumno(idAl);
    
      let valoresAsisAl = JSON.parse(localStorage.getItem("valoresAsisAl")) || [];
      console.log("Valores de asistencia:", valoresAsisAl);
    
      baseCGProy.appendChild(grafAlInd(valoresAsisAl, idAl));


    })

    return baseCGProy;

}

export { cadaAlumRes }