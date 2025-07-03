function grafAlInd(valoresAsisAl){
    
    let baseGrafResA = document.createElement('div');
    baseGrafResA.className = "base-graf-res-alum";
    
    let canvasIndividual = document.createElement('canvas');
    canvasIndividual.id = "graficaBarraUnica";
    canvasIndividual.className = "design-grafic";
    
    baseGrafResA.appendChild(canvasIndividual);
    
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
            display: false, 
            min: 0,
            max: 100 
          }
        }
      },
    });


    return baseGrafResA;

}

export { grafAlInd };