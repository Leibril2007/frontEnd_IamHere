let estado = null;

function marcarPresencia(divCheck) {
    const idAlumno = divCheck.dataset.idAlumno;

    if (!divCheck.classList.contains("presente") && !divCheck.classList.contains("ausente")) {
        divCheck.classList.add("presente");
        estado = "presente";
    } else if (divCheck.classList.contains("presente")) {
        divCheck.classList.remove("presente");
        divCheck.classList.add("ausente");
        estado = "ausente";
    } else if (divCheck.classList.contains("ausente")) {
        divCheck.classList.remove("ausente");
        estado = null;
    }

    console.log("ID Alumno clickeado:", idAlumno);
    console.log("Estado:", estado);

    // Almacenar por alumno en localStorage
    let asistencias = JSON.parse(localStorage.getItem("asistencias")) || {};
    asistencias[idAlumno] = estado;
    localStorage.setItem("asistencias", JSON.stringify(asistencias));
}

function todosPresentes() {

    let todosDivAs = document.querySelectorAll('.inp-check');
    let inpPresGen = document.querySelectorAll('.inp-check-pres, .inp-check-2do'); // para capturar ambos estados
    let todosYaPresentes = Array.from(todosDivAs).every(div => div.classList.contains('presente'));


    inpPresGen.forEach(el => {
        if (todosYaPresentes) {
            el.classList.remove('presente', 'inp-check-2do');
            el.classList.add('inp-check-pres');
        } else {
            el.classList.add('presente', 'inp-check-2do');
            el.classList.remove('inp-check-pres');
        }
    });

    let idPresentes = [];
    let asistencias = {};

    todosDivAs.forEach(cadaDivAl => {
        cadaDivAl.classList.remove('ausente');

        const idAlumno = cadaDivAl.dataset.idAlumno;

        if (todosYaPresentes) {
            cadaDivAl.classList.remove('presente');
            asistencias[idAlumno] = null;
        } else {
            cadaDivAl.classList.add('presente');
            idPresentes.push(idAlumno);
            asistencias[idAlumno] = "presente";
        }
    });

    localStorage.setItem("asistencias", JSON.stringify(asistencias));

    if (!todosYaPresentes) {
        console.log("IDs de alumnos marcados como presentes:", idPresentes);
    }
}


function todosAusentes() {
    let todosDivAs = document.querySelectorAll('.inp-check');
    let todosYaAusentes = Array.from(todosDivAs).every(div => div.classList.contains('ausente'));
    let inpPresGen = document.querySelectorAll('.inp-check-au, .inp-check-2do');
    
    inpPresGen.forEach(el => {
        if (todosYaAusentes) {
            el.classList.remove('ausente', 'inp-check-2do');
            el.classList.add('inp-check-au');
        } else {
            el.classList.add('ausente', 'inp-check-2do');
            el.classList.remove('inp-check-au');
        }
    });
    
    let idsAusentes = [];
    let asistencias = {};
    
    todosDivAs.forEach(cadaDivAl => {
        cadaDivAl.classList.remove('presente');
    
        const idAlumno = cadaDivAl.dataset.idAlumno;
    
        if (todosYaAusentes) {
            cadaDivAl.classList.remove('ausente');
            asistencias[idAlumno] = null;
        } else {
            cadaDivAl.classList.add('ausente');
            idsAusentes.push(idAlumno);
            asistencias[idAlumno] = "ausente";
        }
    });
    
    localStorage.setItem("asistencias", JSON.stringify(asistencias));
    
    if (!todosYaAusentes) {
        console.log("IDs de alumnos marcados como ausentes:", idsAusentes);
    }
}

export { marcarPresencia, todosPresentes, todosAusentes };
