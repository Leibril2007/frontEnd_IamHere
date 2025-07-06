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
  
  
export { asisTodosNiveles };