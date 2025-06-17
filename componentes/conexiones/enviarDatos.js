function agregarAsis(idMaestro,idGrado,idAlumno,recFecha,recAsistencia,correoPers,recUniAlum) {
    fetch("http://localhost:3000/agregarAsistencia", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            usuario_id: idMaestro,  
            grados_id: idGrado,      
            alumnos_id: idAlumno,    
            fecha: recFecha,  
            estado: recAsistencia,  
            correo_personal: correoPers || null,
            uniforme_id: recUniAlum || null  
        })
    })
    .then(res => res.json())
    .then(data => console.log("Asistencia registrada:", data))
    .catch(err => console.error("Error al registrar:", err));
}

function agregarUniforme(observaciones, alumnos_id) {
    return fetch("http://localhost:3000/uniforme", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            observaciones,
            alumnos_id
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log("Uniforme registrado:", data);
        return data.id; // ID del uniforme
    })
    .catch(err => {
        console.error("Error al registrar uniforme:", err);
        return null;
    });
}




export { agregarAsis, agregarUniforme };

