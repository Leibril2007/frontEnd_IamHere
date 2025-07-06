import { ventEliminarProf } from "../ventanaEmergente/ventanaEliminarProf.js";

function resCadProfe(nomComp, gradoGuia){

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

    let txtGradoprof = document.createElement('p');
    txtGradoprof.className = "txt-grado-prof";
    txtGradoprof.textContent = gradoGuia;
    baseCGProy.appendChild(txtGradoprof);

    let btnElimi = document.createElement('span');
    btnElimi.className = "btn-elimi-cprofe";
    btnElimi.textContent = "✖️";
    baseCGProy.appendChild(btnElimi);

    btnElimi.addEventListener("click", function(){

        baseCGProy.appendChild(ventEliminarProf());

    });

    return baseCGProy;

}

export { resCadProfe }