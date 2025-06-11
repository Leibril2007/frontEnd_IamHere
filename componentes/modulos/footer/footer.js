function cargarFooter(){

    let divFoo = document.createElement('footer');
    divFoo.className = "sec-foo";

    let btnCSFoo = document.createElement('div');
    btnCSFoo.className = "btn-cs-foo";
    btnCSFoo.textContent = "Cerrar Sesión";
    divFoo.appendChild(btnCSFoo);

    return divFoo;
}

export { cargarFooter };

