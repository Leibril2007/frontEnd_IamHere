function cadaNiv(nombre, id){

    let baseCGProy = document.createElement('div');
    baseCGProy.className = "base-c-g-proy";
    
    let divCGProy = document.createElement('div');
    divCGProy.className = "cada-niv";
    divCGProy.textContent = nombre;
    baseCGProy.appendChild(divCGProy);

    divCGProy.addEventListener("click", async function(){
        
        localStorage.setItem("idNivelAdmin", id);
        console.log("comida",id)


        window.location.href = "gradosAdmin.html";
    });

    return baseCGProy;

}

export { cadaNiv }