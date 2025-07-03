import { cargarNav } from "../modulos/nav/nav.js";

function users() {
  const datosGuardados = localStorage.getItem("usuario");
  console.log("Usuario guardado en localStorage:", datosGuardados);

  if (!datosGuardados) {
    console.error("No hay datos de usuario guardados");
    return null;
  }

  const user = JSON.parse(datosGuardados); 

  let idU = user.id;
  let u = user.usuario;
  let c = user.correo;
  let gradoId = user.grados_id;
  let id = user.id;

  console.log(u);
  console.log(c);

  localStorage.setItem("idMaestro", idU);

  cargarNav(u, c, gradoId);
  cargarGrados(id);
  cargarNivel(id);
  return user;
}

export { users };

users();


async function cargarGrados(id) {

    let idEnt = parseInt(id);

    try {
      const response = await fetch(`http://localhost:3000/profesor/${idEnt}/grados`); 
/*       console.log("Respuesta del servidor:", response); */

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
      

      localStorage.setItem("gradosDelNivel", JSON.stringify(grados));
      console.log("grados",grados);

      return grados;
      
    } catch (error) {
      console.error('Error al cargar los grados:', error);
      return [];
    }
}

async function cargarNivel(id) {

  let idEnt = parseInt(id);

  try {
    const response = await fetch(`http://localhost:3000/profesor/${idEnt}/nivel`); 

    if (!response.ok) throw new Error('Error en la respuesta del servidor');

    const nivel = await response.json();   

    localStorage.setItem("nombreNivel", JSON.stringify(nivel));
    console.log(nivel);
    obtenerAsistenciaPGraf(nivel[0].id);

    console.log("graf", nivel[0].id);

    return nivel;
    
  } catch (error) {
    console.error('Error al cargar los nivel:', error);
    return [];
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


async function obtenerAsistenciaPGraf(nivelId) {
  const respuesta = await fetch(`http://localhost:3000/asistenciaPieNivel/${nivelId}`);
  const datos = await respuesta.json();

  const valores = datos.map(d => d.porcentaje_asistencia);
  console.log("valores de asistecia cada grado", datos);

  localStorage.setItem("valores", JSON.stringify(valores));

  console.log("asdfa", valores);

}


export { alumnosBd };