import { llenarSelectGrados } from "./conexionAdmin.js";
import { obtenerNivelesCordi, obtenerGradosCordi } from "./conexionCoordi.js";
import { cargarNav } from "../modulos/nav/nav.js";

function users() {
  const datosGuardados = localStorage.getItem("usuario");
  console.log("Usuario guardado en localStorage:", datosGuardados);

  if (!datosGuardados) {
    console.error("No hay datos de usuario guardados");
    return null;
  }

  const user = JSON.parse(datosGuardados); 

  const {
    id,
    usuario: u,
    correo: c,
    grados_id: gradoId,
    coordinador_id: idCoor,
    profesores_id: idProf,
    administrador_id: idAdmin,
    esAdministrador
  } = user;

  console.log(u);
  console.log("idprof", idProf);
  console.log("esAdministrador", esAdministrador);

  localStorage.setItem("idMaestro", id);
  localStorage.setItem("idCoordinador", idCoor);
  localStorage.setItem("idProfe", idProf);
  localStorage.setItem("esAdmin", esAdministrador);

  cargarNav(u, c, gradoId);

  if  (esAdministrador) {
    obtenerGradosCordi().then(grados => {
      llenarSelectGrados(grados);
    });
  
    obtenerNivelesCordi().then(niveles => {
      console.log("Niveles obtenidos:", niveles);
    });
    
  } else if (idCoor) {
    cargarGrados(idCoor);  
    cargarNivel(idCoor);   
  } else if (idProf) {
    cargarGrados(idProf);
    cargarNivel(idProf);
  }

  return user;
}

export { users };

users();


async function cargarGrados(id) {
  const esAdministrador = localStorage.getItem("esAdmin") === "true";

  try {
    let response;

    if (esAdministrador) {
      response = await fetch('https://backend-iamhere.onrender.com/grados');
    } else {
      response = await fetch(`https://backend-iamhere.onrender.com/profesor/${id}/grados`);
    }

    if (!response.ok) throw new Error('Error en la respuesta del servidor');

    const grados = await response.json();

    const select = document.querySelector('.select');
    if (select && select.options.length <= 1) {
      grados.forEach(grado => {
        const option = document.createElement('option');
        option.value = grado.id;
        option.textContent = grado.nombre;
        select.appendChild(option);
      });
    }

    localStorage.setItem("gradosDelNivel", JSON.stringify(grados));
    console.log("grados", grados);

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