import { cargarNav } from "../modulos/nav/nav.js";

function users() {
  const datosGuardados = localStorage.getItem("usuario");
  console.log("Usuario guardado en localStorage:", datosGuardados);

  if (!datosGuardados) {
    console.error("No hay datos de usuario guardados");
    return null;
  }

  const user = JSON.parse(datosGuardados); 

  let u = user.usuario;
  let c = user.correo;
  let gradoId = user.grados_id;
  let id = user.id;

  console.log(u);
  console.log(c);

  cargarNav(u, c, gradoId);
  cargarGrados(id);

  return user;
}

export { users };

users();


async function cargarGrados(id) {

    let idEnt = parseInt(id);

    try {
      const response = await fetch(`http://localhost:3000/profesor/${idEnt}/nivel`); 
      console.log("Respuesta del servidor:", response);

      if (!response.ok) throw new Error('Error en la respuesta del servidor');
  
      const grados = await response.json();
  
      const select = document.querySelector('.select');

      if (select.options.length > 1) {
        return; 
      }
  
      grados.forEach(grado => {
        const option = document.createElement('option');
        option.value = grado.id;
        option.textContent = grado.nombre;
        select.appendChild(option);
      });
  
      
    } catch (error) {
      console.error('Error al cargar los grados:', error);
    }
}

function alumnosBd() {

  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000/alumnos`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        resolve(data); 
      })
      .catch(error => {
        console.error('Error:', error);
        reject(error);
      });
  });
}

export { alumnosBd };