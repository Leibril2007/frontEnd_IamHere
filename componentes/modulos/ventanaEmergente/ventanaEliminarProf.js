function ventEliminarProf(idAlumnoEliminar) {
    let contenedor = document.createElement('div');
    contenedor.className = 'ventana';

    let titulo = document.createElement('h3');
    titulo.textContent = 'Eliminar profesor';
    titulo.className = 'titulo-ventana';

    let cerrar = document.createElement('span');
    cerrar.textContent = '✖';
    cerrar.className = 'cerrar';
    cerrar.onclick = ()=> contenedor.remove();

    let inputContra = document.createElement('input');
/*     inputContra.type = 'password'; */
    inputContra.placeholder = 'Contraseña';
    inputContra.className = 'campo';

    let btnConfirmar = document.createElement('button');
    btnConfirmar.textContent = 'confirmar';
    btnConfirmar.className = 'btn-mini';

    btnConfirmar.addEventListener('click', async function(){

        let valorInpContra = inputContra.value;
        let alumnoAEliminar = idAlumnoEliminar;

        console.log("contra", valorInpContra);

        try{
            const response = await fetch(`http://localhost:3000/eliminarAlumno`,{

                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    passIng: valorInpContra,
                    idAlumnoEl: alumnoAEliminar
                })
            });

            const data = await response.json();

            if(!response.ok){
                let errorMsg = document.createElement('p');
                errorMsg.className = "error";
                errorMsg.textContent = data.message || "Error al eliminar alumno";
                contenedor.appendChild(errorMsg);
                return;
            } else {
                let msjGuardVent = document.createElement('p');
                msjGuardVent.className = "msj-guard-vent";
                msjGuardVent.textContent = "El alumno fue eliminado";
                contenedor.appendChild(msjGuardVent);
            }


        } catch (error){
            console.error("Error en el fetch:", error);
            let errorMsg = document.createElement('p');
            errorMsg.className = "error";
            errorMsg.textContent = "No se pudo conectar al servidor";
            contenedor.appendChild(errorMsg);
        }



    });

    contenedor.append(titulo, cerrar, inputContra, btnConfirmar);
    return contenedor;
}

export { ventEliminarProf }