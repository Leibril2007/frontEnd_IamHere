function cargarTablero(grados, gradoId, alumnoGId){
    let sectionTablero = document.createElement('section');
    sectionTablero.className = "sec-tablero";

    let titGradoTab = document.createElement('h1');
    titGradoTab.className = "tit-grado-tab";
    titGradoTab.textContent = "V Computación";
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

    let icCorTabGen = document.createElement('h2');
    icCorTabGen.className = "bt-ins-gen ic-cor-gen-ins";
    icCorTabGen.textContent = "✉️";

    dCorGen.appendChild(titCorGen);
    dCorGen.appendChild(icCorTabGen);

    sectionTablero.appendChild(dCorGen);
   

    /* ALUMNOS */

    let divAlumno = document.createElement('div');
    divAlumno.className = "div-alumno";

    sectionTablero.appendChild(divAlumno);

    return sectionTablero;

}

export { cargarTablero }