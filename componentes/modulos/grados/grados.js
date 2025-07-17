function cadaGradoAdm(nombre, id){

    let baseCGProy = document.createElement('div');
    baseCGProy.className = "base-c-g-proy";
    
    let divCGProy = document.createElement('div');
    divCGProy.className = "cada-niv";
    divCGProy.textContent = nombre;
    baseCGProy.appendChild(divCGProy);

    return baseCGProy;

}

export { cadaGradoAdm }