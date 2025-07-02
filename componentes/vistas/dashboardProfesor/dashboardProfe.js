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

    let canvasProf = document.createElement('canvas');
    canvasProf.id = "graficaGradosProfe";
    canvasProf.className = "design-grafic";

    baseGraf.appendChild(canvasProf);
    baseDash.appendChild(baseGraf);

    const gradosGuard = JSON.parse(localStorage.getItem("gradosDelNivel")) || [];
    const cadaGrado = gradosGuard.map(grado => grado.nombre);

    const grafica = canvasProf.getContext('2d');

    let colores = ['#F57E25', '#000CB6', '#fcc601', '#7F00FF', '#00C49A', '#FF6666', '#2E8B57'];

    new Chart(grafica, {
      type: 'pie',
      data: {
        labels: cadaGrado,
        datasets: [{
          label: 'Asistencia de cada grado',
          data: [12, 19, 7],
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