function reportPorAl(valorsFechAl, valorObsAl){

    let baseReAl = document.createElement('div');
    baseReAl.className = "base-re-al";

    let iconU = document.createElement('span');
    iconU.className = "icon-u";
    iconU.textContent = "👕";
    baseReAl.appendChild(iconU);

    let fech = document.createElement('p');
    fech.className = "fech";

    let fechaFormateada = new Date(valorsFechAl).toISOString().split('T')[0];
    fech.textContent = fechaFormateada;

    baseReAl.appendChild(fech);

    let obs = document.createElement('p');
    obs.className = "obs";
    obs.textContent = valorObsAl;
    baseReAl.appendChild(obs);


    return baseReAl;

}

function reportPorObs(valorsFechAl, valorObsAl){

    let baseReAl = document.createElement('div');
    baseReAl.className = "base-re-al";

    let iconU = document.createElement('span');
    iconU.className = "icon-u";
    iconU.textContent = "📝";
    baseReAl.appendChild(iconU);

    let fech = document.createElement('p');
    fech.className = "fech";

    let fechaFormateada = new Date(valorsFechAl).toISOString().split('T')[0];
    fech.textContent = fechaFormateada;

    baseReAl.appendChild(fech);

    let obs = document.createElement('p');
    obs.className = "obs";
    obs.textContent = valorObsAl;
    baseReAl.appendChild(obs);


    return baseReAl;

}

export { reportPorAl, reportPorObs };