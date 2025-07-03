function alumnosProyec() {

    return new Promise((resolve, reject) => {
      fetch(`http://localhost:3000/alumnos`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          resolve(data); 
        })
        .catch(error => {
          console.error('Error:', error);
          reject(error);
        });
    });
}

async function asisProyecAlumG(idGrado) {
    const respuesta = await fetch(`http://localhost:3000/proyecciones/asistenciaGrado/${idGrado}`);
    const datos = await respuesta.json();
  
    const valoresAG = datos.map(d => d.porcentaje_asistencia); 

    localStorage.setItem("valoresAG", JSON.stringify(valoresAG));

    console.log("Datos crudos:", datos);
    console.log("Valores de asistencia:", valoresAG);
  
}
  

async function obtenerAsistenciaAlumno(idAlumno) {
    const res = await fetch(`http://localhost:3000/proyecciones/asistenciaAlumEsp/${idAlumno}`);
    const datos = await res.json();

    const valoresAsisAl = datos.map(d => d.porcentaje_asistencia); 

    localStorage.setItem("valoresAsisAl", JSON.stringify(valoresAsisAl));

    console.log("Datos crudos:", datos);
    console.log("Valores de asistencia:", valoresAsisAl);

    console.log("Asistencia del alumno:", datos);
}
  

async function obtenerReportAlum(idAlumno) {
  const res = await fetch(`http://localhost:3000/proyecciones/recUniforme/${idAlumno}`);
  const datos = await res.json();

  localStorage.setItem("lisObsUniPA", JSON.stringify(datos));

}

async function obtenerObsAlum(idAlumno) {
  const res = await fetch(`http://localhost:3000/proyecciones/recObservaciones/${idAlumno}`);
  const datos = await res.json();

  localStorage.setItem("lisObsCAl", JSON.stringify(datos));
}



export { alumnosProyec, asisProyecAlumG, obtenerAsistenciaAlumno, obtenerReportAlum, obtenerObsAlum };