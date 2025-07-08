import { mostrarMsjAsis, msjActualAsis } from "../vistas/asistenciaView/funcionAsitenciaGrado.js";
function agregarAsis(idMaestro,idGrado,idAlumno,recFecha,recAsistencia,correoPers,recUniAlum) {
      const datosAsistencia = {
      usuarios_id: idMaestro,
      grados_id: idGrado,
      alumnos_id: idAlumno,
      fecha: recFecha,
      estado: recAsistencia,
      correo_personal: correoPers || null,
    };
    
    if (typeof recUniAlum === 'number' && !isNaN(recUniAlum)) {
      datosAsistencia.uniforme_id = recUniAlum;
    }
    
    fetch("https://backend-iamhere.onrender.com/agregarAsistencia", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datosAsistencia)
    })

    .catch(err => console.error("Error al registrar:", err));
}



function agregarUniforme(observaciones, alumnos_id) {
    return fetch("https://backend-iamhere.onrender.com/uniforme", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            observaciones: observaciones,
            alumnos_id: alumnos_id
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log("Uniforme registrado:", data);
        return data.id; 
    })
    .catch(err => {
        console.error("Error al registrar uniforme:", err);
        return null;
    });
}


function asistenciaGrado(idGradoSel, asistencia, recFecha, idMaestro){

    fetch("https://backend-iamhere.onrender.com/asistenciaDeGrado", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            grado_id: idGradoSel,
            estado: asistencia,
            fecha: recFecha,
            idUser: idMaestro
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log("Asistencia registrada:", data);

        let asisTomadaGrado = JSON.parse(localStorage.getItem("gradosConAsistencia")) || {};
        asisTomadaGrado[idGradoSel] = "guardado"; 
        localStorage.setItem("gradosConAsistencia", JSON.stringify(asisTomadaGrado));

        mostrarMsjAsis();
    }
    )
    .catch(err => console.error("Error al registrar:", err));

}

function asisGradoActualizar(idGradoSel, asistencia, recFecha, idMaestro){

    fetch("https://backend-iamhere.onrender.com/asistenciaDeGrado", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            grado_id: idGradoSel,
            estado: asistencia,
            fecha: recFecha,
            idUser: idMaestro
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log("Asistencia registrada:", data);

        let asisTomadaGrado = JSON.parse(localStorage.getItem("gradosConAsistencia")) || {};
        asisTomadaGrado[idGradoSel] = "actualizado";
        localStorage.setItem("gradosConAsistencia", JSON.stringify(asisTomadaGrado));

        msjActualAsis();
    }
    )
    .catch(err => console.error("Error al registrar:", err));

}


function almacenarAvisoGeneral(correoGen, idGrado, idMaestro){
    
    console.log("AVISO: ", correoGen, idGrado, idMaestro);

    return fetch("https://backend-iamhere.onrender.com/avisoGeneralAlum", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            correo_general: correoGen,
            grados_id: idGrado,
            usuarios_id: idMaestro
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log("Aviso Registrado:", data);
        return data.id;
    })
    .catch(err => {
        console.error("Error al registrar aviso general:", err);
        return null;
    }); 

} 

function actualizarAsis(idMaestro,idGrado,idAlumno,recFecha,recAsistencia,correoPers,recUniAlum) {
    
    fetch(`https://backend-iamhere.onrender.com/actualizarAsis/${idAlumno}/${recFecha}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            usuarios_id: idMaestro,  
            grado_id: idGrado,       
            estado: recAsistencia,  
            correo_personal: correoPers || null,
            uniforme_id: recUniAlum || null  
        })
    })
    .then(res => res.json())
    .then(data => {

/*         if (process.env.NODE_ENV !== 'production') {
            console.log("Asistencia registrada:", data);
        } */

        let asisTomadaGrado = JSON.parse(localStorage.getItem("gradosConAsistencia")) || {};
        asisTomadaGrado[idGrado] = "actualizado";
        localStorage.setItem("gradosConAsistencia", JSON.stringify(asisTomadaGrado));

    }

    )
    .catch(err => console.error("Error al registrar:", err));
}




export { agregarAsis, agregarUniforme, almacenarAvisoGeneral, asistenciaGrado, actualizarAsis, asisGradoActualizar};

