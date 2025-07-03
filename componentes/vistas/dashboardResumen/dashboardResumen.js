import { cargarHeaderSimp } from "../../modulos/header/header.js";
import { cadaAlumRes } from "../../modulos/resumenAsistenciaAlumnos/resAsistenciaAlumnos.js";
import { footResDash } from "../../modulos/footer/footerDashboard.js";

let llamarDashboardRes = document.querySelector('#resumenProfesorB');

llamarDashboardRes.appendChild(cargarHeaderSimp());

function cargarResumenDashAl(){

    let idGradoProyec = localStorage.getItem("idGradoProyec");
    console.log("que llego",idGradoProyec);

    let nombreGradoProy = localStorage.getItem("gradoDeProyec");
    console.log("que llego 2",nombreGradoProy);

    let baseDash = document.createElement('section');
    baseDash.className = "base-dash";

    let asisTitProyec = document.createElement('h1');
    asisTitProyec.className = "asis-tit-proyec";
    asisTitProyec.textContent = "Resumen de Asistencia";
    baseDash.appendChild(asisTitProyec);

    let nivelTitProyec = document.createElement('h2');
    nivelTitProyec.className = "nivel-tit-proyec";
    nivelTitProyec.textContent = nombreGradoProy;

    baseDash.appendChild(nivelTitProyec);

    /* ALUM */
    let alumnos = JSON.parse(localStorage.getItem("cadAlumProyec")) || [];
    const nombreCompleto = alumnos.map(alumno => `${alumno.nombre} ${alumno.apellido}`);

     /* GRAFICA */
    let baseGraf = document.createElement('div');
    baseGraf.className = "base-graf";

    let canvasProf = document.createElement('canvas');
    canvasProf.id = "graficaGradosProfe";
    canvasProf.className = "design-grafic";

    baseGraf.appendChild(canvasProf);
    baseDash.appendChild(baseGraf);

    const gradosGuard = JSON.parse(localStorage.getItem("gradosDelNivel")) || [];
    const cadaGrado = gradosGuard.map(grado => grado.nombre);
    console.log("cada", cadaGrado);

    const grafica = canvasProf.getContext('2d');

    let colores = ['#F57E25', '#000CB6', '#fcc601', '#7F00FF', '#00C49A', '#FF6666', '#2E8B57'];

    /* VALUE */

    let valoresAG = JSON.parse(localStorage.getItem("valoresAG")) || [];
    console.log("Valores de asistencia:", valoresAG);
    /* -------- */


    new Chart(grafica, {
      type: 'bar',
      data: {
        labels: nombreCompleto,
        datasets: [{
          label: 'Asistencia semanal de cada grado',
          data: valoresAG,
          backgroundColor: colores.slice(0, gradosGuard.length),
          borderColor: '#ffffff',
          borderWidth: 2,
          barThickness: 30
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: '#824100',
              font: {
                size: 15,
                family: 'Orelega One',
                weight: '400'
              }
            }
          },
          tooltip: {
            bodyFont: {
              size: 14,
              family: 'Orelega One'
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#333',
            },
            grid: {
              color: '#ddd'
            }
          },
          y: {
            ticks: {
              autoSkip: false,
              color: '#824100',
              font: {
                size: 15,
                family: 'Orelega One',
                weight: '400',
              }
            },
            grid: {
              color: '#ddd'
            }
          }
        }
      }
    });
    let titVGrados = document.createElement('h2');
    titVGrados.className = "tit-v-grados";
    titVGrados.textContent = "Asistencia de cada alumno"
    baseDash.appendChild(titVGrados);

    /* CADA ALUM */

    let dvBaseAlum = document.createElement('div');
    dvBaseAlum.className = "dv-base-alum";

    alumnos.forEach(cAlumno => {
        const nombreCompleto = `${cAlumno.nombre} ${cAlumno.apellido}`;
        let idAl = cAlumno.id;
        console.log("id al", idAl);
        dvBaseAlum.appendChild(cadaAlumRes(nombreCompleto, idAl));
    });

    baseDash.appendChild(dvBaseAlum);

    return baseDash;
}

llamarDashboardRes.appendChild(cargarResumenDashAl());

llamarDashboardRes.appendChild(footResDash());