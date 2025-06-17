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
    let todosYaPresentes = Array.from(todosDivAs).every(div => div.classList.contains('presente'));

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
