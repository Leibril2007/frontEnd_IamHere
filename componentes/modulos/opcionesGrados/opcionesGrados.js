function cadaGradoProy(grado){

    let baseCGProy = document.createElement('div');
    baseCGProy.className = "base-c-g-proy";
    
    let divCGProy = document.createElement('div');
    divCGProy.className = "div-c-g-proy";
    divCGProy.textContent = "📊";
    baseCGProy.appendChild(divCGProy);

    divCGProy.addEventListener("click", function(){

        window.location.href = "resumenProfesor.html";

    });

    let txtCGproy = document.createElement('p');
    txtCGproy.className = "txt-c-g-proy";
    txtCGproy.textContent = grado;

    baseCGProy.appendChild(txtCGproy);

    return baseCGProy;

}

export { cadaGradoProy }