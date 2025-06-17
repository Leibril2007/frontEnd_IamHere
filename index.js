let principal = document.querySelector("#root");


function cargarPrincipal(){

    let divLogo = document.createElement('div');
    divLogo.className = "div-logo";

    let logo = document.createElement('img');
    logo.className = "logo";
    logo.src = "https://github.com/Leibril2007/img_App/blob/main/logo%20mejorado.png?raw=true";

    divLogo.appendChild(logo);
    principal.appendChild(divLogo);

    let titBnv = document.createElement('h2');
    titBnv.className = "tit-bnv";
    titBnv.textContent = "Bienvenido a";
    principal.appendChild(titBnv);

    let titApp = document.createElement('h1');
    titApp.className = "tit-app";
    titApp.textContent = "I'm Here! 2025";
    principal.appendChild(titApp);

    let btnLogin = document.createElement('div');
    btnLogin.className = "btn-login";
    btnLogin.textContent = "Login";

    btnLogin.addEventListener("click", function(){
        console.log("FUNCIONA BRO")
        window.location.href = "../componentes/paginas/login.html";
    });

    principal.appendChild(btnLogin);

    return principal;

}

cargarPrincipal();

