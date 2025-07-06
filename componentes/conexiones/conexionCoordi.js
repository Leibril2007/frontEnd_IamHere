async function asisTodosNiveles() {
    try {
      const respuesta = await fetch('http://localhost:3000/coordinador/asistenciaTodosNiveles');
      
      if (!respuesta.ok) throw new Error('Error al obtener los datos de asistencia');
  
      const datos = await respuesta.json();
  
      const valoresATN = datos.map(d => d.porcentaje_asistencia);
  
      localStorage.setItem("valoresATN", JSON.stringify(valoresATN));
      localStorage.setItem("datosAsistenciaCrudos", JSON.stringify(datos));
  
      console.log("Porcentajes:", valoresATN);
      console.log("Datos completos:", datos);
  
      return datos;
    } catch (error) {
      console.error('Error al cargar asistencia de todos los niveles:', error);
      return [];
    }
}

async function obtenerGradosCordi() {
    try {
      const respuesta = await fetch('http://localhost:3000/grados');
  
      if (!respuesta.ok) throw new Error('Error al obtener los grados');
  
      const grados = await respuesta.json();
  
      console.log("Grados obtenidos:", grados);
  
      // Puedes guardarlos en localStorage si los vas a reutilizar
      localStorage.setItem("listaGrados", JSON.stringify(grados));
  
      return grados;
    } catch (error) {
      console.error('Error al cargar grados:', error);
      return [];
    }
}

async function obtenerNivelesCordi() {
  try {
    const respuesta = await fetch('http://localhost:3000/niveles');

    if (!respuesta.ok) throw new Error('Error al obtener los grados');

    const niveles = await respuesta.json();

    console.log("Grados obtenidos:", niveles);

    // Puedes guardarlos en localStorage si los vas a reutilizar
    localStorage.setItem("listaNivel", JSON.stringify(niveles));

    return niveles;
  } catch (error) {
    console.error('Error al cargar grados:', error);
    return [];
  }
}
  
async function asisPorProfesor() {
  try {
    const respuesta = await fetch('http://localhost:3000/coordinador/asistenciaPorProfesor');

    if (!respuesta.ok) {
      throw new Error('Error al obtener los datos de asistencia por profesor');
    }

    const datos = await respuesta.json();

    // Guardar en localStorage si lo necesitas luego
    localStorage.setItem('asistenciaProfesores', JSON.stringify(datos));

    console.log('📊 Asistencia por profesor:', datos);

    return datos;
  } catch (error) {
    console.error('❌ Error al cargar asistencia por profesor:', error);
    return [];
  }
}
  
  
export { asisTodosNiveles, obtenerGradosCordi, asisPorProfesor, obtenerNivelesCordi };