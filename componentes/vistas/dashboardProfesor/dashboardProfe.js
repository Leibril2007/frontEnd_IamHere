import { cargarHeaderSimp } from "../../modulos/header/header.js";
import { cadaGradoProy } from "../../modulos/opcionesGrados/opcionesGrados.js";
import { footProyecciones } from "../../modulos/footer/footerDashboard.js";

let llamarDashboard = document.querySelector('#dashboardProfesorB');

llamarDashboard.appendChild(cargarHeaderSimp());

function cargarPantallaDash(){

    let baseDash = document.createElement('section');
    baseDash.className = "base-dash";

    /* TITULO GEN */
    let asisTitProyec = document.createElement('h1');
    asisTitProyec.className = "asis-tit-proyec";
    asisTitProyec.textContent = "Asistencia General";
    baseDash.appendChild(asisTitProyec);

    /* TIT NIV */
    let traerNivel = JSON.parse(localStorage.getItem("nombreNivel")) || [];
    let nombreNivelP = traerNivel.map(nivel => nivel.nombre);

    let nivelTitProyec = document.createElement('h2');
    nivelTitProyec.className = "nivel-tit-proyec";
    nivelTitProyec.textContent = nombreNivelP;

    baseDash.appendChild(nivelTitProyec);

    /* GRAFICA */
    let baseGraf = document.createElement('div');
    baseGraf.className = "base-graf";

/*     let canvasProf = document.createElement('canvas');
    canvasProf.id = "graficaGradosProfe";
    canvasProf.className = "design-grafic";

    baseGraf.appendChild(canvasProf);
    baseDash.appendChild(baseGraf);

    const gradosGuard = JSON.parse(localStorage.getItem("gradosDelNivel")) || [];
    const cadaGrado = gradosGuard.map(grado => grado.nombre);

    const grafica = canvasProf.getContext('2d');

    let colores = ['#F57E25', '#000CB6', '#fcc601', '#7F00FF', '#00C49A', '#FF6666', '#2E8B57'];

    let valoresObtAsisPG = localStorage.getItem("valores");

    console.log("adjhf", valoresObtAsisPG);


    new Chart(grafica, {
      type: 'pie',
      data: {
        labels: cadaGrado,
        datasets: [{
          label: 'Asistencia de cada grado',
          data: valoresObtAsisPG,
          backgroundColor: colores.slice(0, gradosGuard.length),
          borderColor: '#ffffff',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
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
        }
      }
    }); */

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

    let valoresObtAsisPG = JSON.parse(localStorage.getItem("valores")) || [];

/*     console.log("adjhf", valoresObtAsisPG);
    console.log(cadaGrado); */

    console.log("Cantidad de grados:", cadaGrado.length);
    console.log("Cantidad de datos:", valoresObtAsisPG.length);
    console.log("dfasdfdd", valoresObtAsisPG);
    console.log("qrwer", cadaGrado);


    new Chart(grafica, {
      type: 'bar',
      data: {
        labels: cadaGrado,
        datasets: [{
          label: 'Asistencia semanal de cada grado',
          data: valoresObtAsisPG,
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




    /* GRADOS */

    let titVGrados = document.createElement('h2');
    titVGrados.className = "tit-v-grados";
    titVGrados.textContent = "Ver cada grado"
    baseDash.appendChild(titVGrados);

    let dvBaseGrados = document.createElement('div');
    dvBaseGrados.className = "dv-base-grados";


    const gradosGuardados = JSON.parse(localStorage.getItem("gradosDelNivel")) || [];

    gradosGuardados.forEach(cGrado => {

        dvBaseGrados.appendChild(cadaGradoProy(cGrado.nombre));        

    });


    baseDash.appendChild(dvBaseGrados);

    return baseDash;
}

llamarDashboard.appendChild(cargarPantallaDash());
llamarDashboard.appendChild(footProyecciones());


cargarPantallaDash();
export { cargarPantallaDash };