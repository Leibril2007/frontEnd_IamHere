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
    let nivelTitProyec = document.createElement('h2');
    nivelTitProyec.className = "nivel-tit-proyec";
    nivelTitProyec.textContent = "Nivel Diversificado";

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

    new Chart(grafica, {
      type: 'pie',
      data: {
        labels: ['V Computación', 'IV Computación', 'V Perito','V Perito','V Perito','V Perito','V Perito'],
        datasets: [{
          label: 'Asistencia de cada grado',
          data: [12, 19, 7],
          backgroundColor: ['#F57E25', '#000CB6', '#fcc601'],
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