function cargarHeaderLog(){
    let secHead = document.createElement('header');
    secHead.className = "sec-head";

    let dImgHeadD = document.createElement('div');
    dImgHeadD.className = "d-img-head-d";
    
    let imgLogHead = document.createElement('img');
    imgLogHead.className = "img-log-head";
    imgLogHead.src = "https://github.com/Leibril2007/img_App/blob/main/logo%20mejorado.png?raw=true";
    dImgHeadD.appendChild(imgLogHead);

    secHead.appendChild(dImgHeadD);

    return secHead;
}

export { cargarHeaderLog };