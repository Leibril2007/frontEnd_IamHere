function cadaAlumno(){
    
    let divBase = document.createElement('div');
    divBase.className = "c-alumno";
    
    let alumno = document.createElement('p');
    alumno.className = "nombre-alumno";
    alumno.textContent = "Juans Cardonas";
    
    let baseInputs = document.createElement('div');
    baseInputs.className = "base-inputs";
    
    /* CHECKBOX */
    let inpSi = document.createElement('div');
    inpSi.className = "inp-check check-si";
    inpSi.type = 'checkbox';
    baseInputs.appendChild(inpSi);
    
    /*  DIVS  */
    
    // uniforme
    let btnUniforme = document.createElement('div');
    btnUniforme.className = "btnCAlum btnUniforme";
    btnUniforme.textContent = "👕";
    baseInputs.appendChild(btnUniforme);
    
    // Correo
    let btnCorrPer = document.createElement('div');
    btnCorrPer.className = "btnCAlum btnCorrPer";
    btnCorrPer.textContent = "✉️";
    baseInputs.appendChild(btnCorrPer);
    
    // Eliminar 
    let btnElimi = document.createElement('div');
    btnElimi.className = "btnCAlum btnElimi";
    btnElimi.textContent = "✖️";
    baseInputs.appendChild(btnElimi);
    


    divBase.appendChild(baseInputs);
    divBase.appendChild(alumno);
    


    return divBase;
}

export { cadaAlumno }