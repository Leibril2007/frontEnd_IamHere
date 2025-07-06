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
  let idCoor = user.coordinador_id;
  let idProf = user.profesores_id;

  console.log(u);
  console.log("idprof",idProf);

  localStorage.setItem("idMaestro", idU);
  localStorage.setItem("idCoordinador", idCoor);
  localStorage.setItem("idProfe", id);

  cargarNav(u, c, gradoId);
  /* cargarGrados(id); */

  if ( idCoor === "null" || idCoor === null){
      cargarGrados(idProf);
  } else {
      cargarGrados(idCoor);
  }


  cargarNivel(idProf);

  return user;
}

export { users };

users();


async function cargarGrados(id) {

    let idEnt = id;

    console.log("radooos",idEnt);

    try {
      const response = await fetch(`https://backend-iamhere.onrender.com/profesor/${idEnt}/grados`); 

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
    const response = await fetch(`https://backend-iamhere.onrender.com/profesor/${idEnt}/nivel`); 

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
    fetch(`https://backend-iamhere.onrender.com/alumnos`)
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
  const respuesta = await fetch(`https://backend-iamhere.onrender.com/asistenciaPieNivel/${nivelId}`);
  const datos = await respuesta.json();


  localStorage.setItem("asistenciaPorGrado", JSON.stringify(datos));


}


export { alumnosBd };