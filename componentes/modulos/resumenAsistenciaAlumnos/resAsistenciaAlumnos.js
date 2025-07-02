function cadaAlumRes(){

    let baseCGProy = document.createElement('div');
    baseCGProy.className = "base-c-g-proy";
    
    let divCGProy = document.createElement('div');
    divCGProy.className = "div-c-g-proy";
    divCGProy.textContent = "👤";
    baseCGProy.appendChild(divCGProy);

    let txtCGproy = document.createElement('p');
    txtCGproy.className = "txt-c-g-proy";
    txtCGproy.textContent = "Nombre apellido";
    baseCGProy.appendChild(txtCGproy);

    /* GRAFICA IND */
    let baseGrafResA = document.createElement('div');
    baseGrafResA.className = "base-graf-res-a";

    let canvasIndividual = document.createElement('canvas');
    canvasIndividual.id = "graficaBarraUnica";
    canvasIndividual.className = "design-grafic";

    baseGrafResA.appendChild(canvasIndividual);
    baseCGProy.appendChild(baseGrafResA);

    const grafica = canvasIndividual.getContext('2d');

    // Etiqueta y valor único
    const nombreGrado = "5°A";
    const valorAsistencia = 32;

    new Chart(grafica, {
      type: 'bar',
      data: {
        labels: [nombreGrado], // 👈 solo un grado
        datasets: [{
          data: [valorAsistencia], // 👈 solo un valor
          backgroundColor: '#00C49A',
          borderColor: '#ffffff',
          borderWidth: 2,
          barThickness: 40
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
            beginAtZero: true,
            ticks: {
              color: '#333',
            },
            grid: {
              color: '#ddd'
            }
          },
          y: {
            ticks: {
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


    baseCGProy.appendChild(baseGrafResA);

    return baseCGProy;

}

export { cadaAlumRes }