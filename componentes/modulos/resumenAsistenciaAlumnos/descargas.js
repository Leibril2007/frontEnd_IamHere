function descargarGrafica() {
    let canvas = document.getElementById('graficaGradosProfe');
    let enlace = document.createElement('a');
    enlace.href = canvas.toDataURL('image/png');
    enlace.download = 'grafica.png';
    enlace.click();
}

export { descargarGrafica };