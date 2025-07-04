function cargarHeaderLog(){
    let secHead = document.createElement('header');
    secHead.className = "sec-head";

    let btnCSFoo = document.createElement('div');
    btnCSFoo.className = "btn-cs-foo";
    btnCSFoo.textContent = "Cerrar Sesión";
    secHead.appendChild(btnCSFoo);

    btnCSFoo.addEventListener("click", function(){

        window.location.href = "cerrarSesion.html";

    });

    let dImgHeadD = document.createElement('div');
    dImgHeadD.className = "d-img-head-d";
    
    let imgLogHead = document.createElement('img');
    imgLogHead.className = "img-log-head";
    imgLogHead.src = "https://github.com/Leibril2007/img_App/blob/main/logo%20mejorado.png?raw=true";
    dImgHeadD.appendChild(imgLogHead);

    secHead.appendChild(dImgHeadD);

    return secHead;
}

function cargarHeaderSimp(){
    let secHead = document.createElement('header');
    secHead.className = "sec-head-simp";

    return secHead;
}

export { cargarHeaderLog, cargarHeaderSimp };