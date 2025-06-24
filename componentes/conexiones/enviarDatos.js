function agregarAsis(idMaestro,idGrado,idAlumno,recFecha,recAsistencia,correoPers,recUniAlum) {
    
    console.log("ID DEL MAESTRO QUE LLEGO: ",idMaestro);
    
    fetch("http://localhost:3000/agregarAsistencia", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            usuarios_id: idMaestro,  
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
            observaciones: observaciones,
            alumnos_id: alumnos_id
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


function almacenarAvisoGeneral(correoGen, idGrado, idMaestro){
    
    console.log("AVISO: ", correoGen, idGrado, idMaestro);

    return fetch("http://localhost:3000/avisoGeneralAlum", {
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



export { agregarAsis, agregarUniforme, almacenarAvisoGeneral };

