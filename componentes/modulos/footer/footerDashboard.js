function footProyecciones(){

    let footerProyec = document.createElement('footer');
    footerProyec.className = "footer-proyec";
    
    let btnDescargProyec = document.createElement('div');
    btnDescargProyec.className = "btn-proyec  btn-descarg-proyec";
    btnDescargProyec.textContent = "Descargar Proyección";
    footerProyec.appendChild(btnDescargProyec);

    let btnRegresoProyec = document.createElement('div');
    btnRegresoProyec.className = "btn-proyec  btn-regreso-proyec";
    btnRegresoProyec.textContent = "Regresar al menú principal";
    footerProyec.appendChild(btnRegresoProyec);


    return footerProyec;

}

export { footProyecciones };