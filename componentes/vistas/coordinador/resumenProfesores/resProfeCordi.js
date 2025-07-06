import { cargarHeaderSimp } from "../../../modulos/header/header.js";
import { resCadProfe } from "../../../modulos/resumenAsistenciaAlumnos/resCadaAsisProfe.js";
import { footCordiProfes } from "../../../modulos/footer/footerDashboard.js";


let llamarDashboardRes = document.querySelector('#cordinadorProfesores');

llamarDashboardRes.appendChild(cargarHeaderSimp());

function cargarResumenDashAl(){

    let idGradoProyec = localStorage.getItem("idGradoProyec");
    console.log("que llego",idGradoProyec);


    let baseDash = document.createElement('section');
    baseDash.className = "base-dash";

    let asisTitProyec = document.createElement('h1');
    asisTitProyec.className = "asis-tit-proyec";
    asisTitProyec.textContent = "Resumen de Asistencia";
    baseDash.appendChild(asisTitProyec);

    let nivelTitProyec = document.createElement('h2');
    nivelTitProyec.className = "nivel-tit-proyec";
    nivelTitProyec.textContent = "Profesores";

    baseDash.appendChild(nivelTitProyec);


    /* GRAFICA */
    let baseGraf = document.createElement('div');
    baseGraf.className = "base-graf";
    
    let canvasProf = document.createElement('canvas');
    canvasProf.id = "graficaGradosProfe";
    canvasProf.className = "design-grafic";
    
    baseGraf.appendChild(canvasProf);
    baseDash.appendChild(baseGraf);
    
    const grafica = canvasProf.getContext('2d');
    
    let colores = ['#F57E25', '#000CB6', '#fcc601', '#7F00FF', '#00C49A', '#FF6666', '#2E8B57'];
    
    /* DATOS PROFESORES */
    let asistenciaProfesores = JSON.parse(localStorage.getItem("asistenciaProfesores")) || [];
    console.log(asistenciaProfesores);
    const nombresProfesores = asistenciaProfesores.map(p => p.nombre_profesor);
    const valoresProfesores = asistenciaProfesores.map(p => p.porcentaje_asistencia);
    
    /* GRAFICA */
    new Chart(grafica, {
      type: 'bar',
      data: {
        labels: nombresProfesores,
        datasets: [{
          label: 'Asistencia tomada por profesores',
          data: valoresProfesores,
          backgroundColor: colores.slice(0, nombresProfesores.length),
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
              callback: function (value) {
                return value + '%';
              }
            },
            grid: {
              color: '#ddd'
            },
            max: 100
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
    titVGrados.textContent = "Lista de profesores"
    baseDash.appendChild(titVGrados);

    /* CADA PROFE */

    let dvBaseAlum = document.createElement('div');
    dvBaseAlum.className = "dv-base-alum";

    asistenciaProfesores.forEach(cProfe => {
      const nombre = cProfe.nombre_profesor;
      const grado = cProfe.grado;
      const id = cProfe.usuario_id;
    
      dvBaseAlum.appendChild(resCadProfe(nombre, grado, id));
    });

    baseDash.appendChild(dvBaseAlum);

    return baseDash;
}

llamarDashboardRes.appendChild(cargarResumenDashAl());

llamarDashboardRes.appendChild(footCordiProfes());