import { alumnosProyec } from "../../conexiones/conexionProyec.js";

function cadaGradoProy(grado, idGrado){

    let baseCGProy = document.createElement('div');
    baseCGProy.className = "base-c-g-proy";
    
    let divCGProy = document.createElement('div');
    divCGProy.className = "div-c-g-proy";
    divCGProy.textContent = "📊";
    baseCGProy.appendChild(divCGProy);

    divCGProy.addEventListener("click", function(){

        localStorage.setItem("idGradoProyec", idGrado);
        localStorage.setItem("gradoDeProyec", grado);

        alumnosProyec().then(alumnos => {
      
            const alumnosDelGrado = alumnos.filter(alumno => alumno.grados_id == idGrado);

            localStorage.setItem("cadAlumProyec", JSON.stringify(alumnosDelGrado));

            console.log("alumnosDelGrado", alumnosDelGrado);


            window.location.href = "resumenProfesor.html";

        });
        
    });

    let txtCGproy = document.createElement('p');
    txtCGproy.className = "txt-c-g-proy";
    txtCGproy.textContent = grado;

    console.log(typeof "grados", grado);

    baseCGProy.appendChild(txtCGproy);

    return baseCGProy;

}

export { cadaGradoProy }