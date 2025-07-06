function ventEliminarProf(idProfEliminar) {
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
        let profeEliminar = idProfEliminar;

        console.log("contra", valorInpContra);
        console.log("profe eli", idProfEliminar);

        try {
            const response = await fetch('https://backend-iamhere.onrender.com/eliminarProfesor', {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                passIng: valorInpContra,
                idUsuario: profeEliminar,
              }),
            });
        
            const data = await response.json();
        
            if (response.ok) {
              alert(data.message);
            } else {
              alert(`Error: ${data.message}`);
            }
          } catch (error) {
            console.error('Error en la petición:', error);
            alert('Error del servidor al intentar eliminar al profesor.');
          }


    });

    contenedor.append(titulo, cerrar, inputContra, btnConfirmar);
    return contenedor;
}

export { ventEliminarProf }