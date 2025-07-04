let csPage = document.querySelector('#cerrarSesionBase');

function cargarCS(){

    let seccionLogin = document.createElement('section');
    seccionLogin.className = "seccion-cs";

    let basVentCS = document.createElement('div');
    basVentCS.className = "bas-vent-cs";

    let iconCS = document.createElement('span');
    iconCS.className = "icon-cs";
    iconCS.textContent = "🤔";
    basVentCS.appendChild(iconCS);

    let txtDCS = document.createElement('h2');
    txtDCS.className = "txt-dcs";
    txtDCS.textContent = "¿Seguro que desea cerrar sesión?";

    basVentCS.appendChild(txtDCS);

    let basBtnCS = document.createElement('div');
    basBtnCS.className = "bas-btn-cs";

    let btnSi = document.createElement('div');
    btnSi.className = "btn-cs  btn-si";
    btnSi.textContent = "Si";
    basBtnCS.appendChild(btnSi);

    let btnNo = document.createElement('div');
    btnNo.className = "btn-cs  btn-si";
    btnNo.textContent = "No";
    basBtnCS.appendChild(btnNo);

    basVentCS.appendChild(basBtnCS);

    seccionLogin.appendChild(basVentCS);

    return seccionLogin;
}

csPage.appendChild(cargarCS());

export { cargarCS }