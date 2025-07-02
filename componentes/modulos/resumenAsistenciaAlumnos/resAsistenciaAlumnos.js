function cadaAlumRes(nomComp){

    let baseCGProy = document.createElement('div');
    baseCGProy.className = "base-c-g-proy";
    
    let divCGProy = document.createElement('div');
    divCGProy.className = "div-c-g-proy";
    divCGProy.textContent = "👤";
    baseCGProy.appendChild(divCGProy);

    let txtCGproy = document.createElement('p');
    txtCGproy.className = "txt-c-g-proy";
    txtCGproy.textContent = nomComp;
    baseCGProy.appendChild(txtCGproy);

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
    const valorAsistencia = 100; // porcentaje, ejemplo
    
    new Chart(grafica, {
      type: 'bar',
      data: {
        labels: [""], // ocultar la etiqueta lateral
        datasets: [{
          data: [valorAsistencia],
          backgroundColor: '#92D1F5',
          borderRadius: 5,
          barThickness: 25,
        }]
      },
      options: {
        indexAxis: 'y', // 👈 barra horizontal
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }, // ocultar leyenda
          tooltip: { enabled: false }, // sin tooltip
          datalabels: {
            anchor: 'end',
            align: 'right',
            color: '#333',
            font: {
              size: 14,
              family: 'Orelega One',
            },
            formatter: function (value) {
              return `${value}%`;
            }
          }
        },
        scales: {
          y: {
            display: false // ocultar eje Y
          },
          x: {
            display: false, // ocultar eje X
            min: 0,
            max: 100 // para que se entienda como porcentaje
          }
        }
      },
    });
    


    baseCGProy.appendChild(baseGrafResA);

    return baseCGProy;

}

export { cadaAlumRes }