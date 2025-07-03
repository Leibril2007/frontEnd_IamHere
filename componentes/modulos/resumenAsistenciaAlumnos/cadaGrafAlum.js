import { reportPorAl, reportPorObs } from "./cadaReportAl.js";
import { obtenerReportAlum, obtenerObsAlum } from "../../conexiones/conexionProyec.js";

function grafAlInd(valoresAsisAl, idAl){

    let basGrafT = document.createElement('div');
    basGrafT.className = "bas-graf-t";
    
    let baseGrafResA = document.createElement('div');
    baseGrafResA.className = "base-graf-res-alum";
    
    let canvasIndividual = document.createElement('canvas');
    canvasIndividual.id = "graficaBarraUnica";
    canvasIndividual.className = "design-grafic";
    
    baseGrafResA.appendChild(canvasIndividual);
    basGrafT.appendChild(baseGrafResA);
    
    const grafica = canvasIndividual.getContext('2d');
    
    const valorAsistencia = valoresAsisAl; 
    
    new Chart(grafica, {
      type: 'bar',
      data: {
        labels: [""],
        datasets: [{
          data: [valorAsistencia],
          backgroundColor: '#92D1F5',
          borderRadius: 5,
          barThickness: 25,
        }]
      },
      options: {
        indexAxis: 'y', 
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            callbacks: {
              label: function(context) {
                const porcentaje = context.raw;
                return `Asistencia: ${porcentaje}%`;
              }
            },
            backgroundColor: '#fff',
            titleColor: '#000',
            bodyColor: '#000',
            borderColor: '#ccc',
            borderWidth: 1,
            titleFont: { family: 'Orelega One', size:16 },
            bodyFont: { family: 'Orelega One', size:18 }
          },
        },
        scales: {
          y: {
            display: false 
          },
          x: {
            display: true,
            min: 0,
            max: 100,
            grid: {
              display: true,
              color: '#e0e0e0',
              drawTicks: false,
              drawBorder: false
            },
            ticks: {
              display: true,
              color: '#555',
              font: {
                family: 'Orelega One',
                size: 12
              },
              callback: function(value) {
                return value + '%';
              }
            }
          }
        }
      },
    });


    let btnVerMP = document.createElement('div');
    btnVerMP.className = "btn-ver-mp";
    btnVerMP.textContent = "Ver más";

    btnVerMP.addEventListener("click", async function(){

        await obtenerReportAlum(idAl);
        await obtenerObsAlum(idAl);

        let titUniAl = document.createElement('h3');
        titUniAl.className = "tit-ou";
        titUniAl.textContent = "Reportes por uniforme";
        basGrafT.appendChild(titUniAl);

        let lisObsUniPA = JSON.parse(localStorage.getItem("lisObsUniPA")) || [];

        lisObsUniPA.forEach(cObUAl => {

          basGrafT.appendChild(reportPorAl(cObUAl.fecha, cObUAl.observaciones));
        
        });


        let titObsAl = document.createElement('h3');
        titObsAl.className = "tit-ou";
        titObsAl.textContent = "Otras observaciones";
        basGrafT.appendChild(titObsAl);

        let lisObsCAl = JSON.parse(localStorage.getItem("lisObsCAl")) || [];

        lisObsCAl.forEach(cObAl => {

          basGrafT.appendChild(reportPorObs(cObAl.fecha, cObAl.correo_personal));
        
        });


        if ( lisObsUniPA === "" && lisObsCAl === ""){
            const yaExiste = baseCGProy.querySelector('.tit-ou');
            yaExiste.remove();

            let titObsAl = document.createElement('h3');
            titObsAl.className = "tit-nada tit-no-ou";
            titObsAl.textContent = "No hay reportes";
            basGrafT.appendChild(titObsAl);
        } else {

            if( lisObsUniPA == "" ){
              let titNada = document.createElement('h3');
              titNada.className = "tit-nada tit-no-uni";
              titNada.textContent = "—";
              basGrafT.appendChild(titNada);
            } 
            if ( lisObsCAl == ""){
              let titNada = document.createElement('h3');
              titNada.className = "tit-nada tit-no-obs";
              titNada.textContent = "—";
              basGrafT.appendChild(titNada);
            }
        }


    });


    basGrafT.appendChild(btnVerMP);

    return basGrafT;

}

export { grafAlInd };