import { cargarHeaderLog } from "../../modulos/header/header.js";
import { cargarNav } from "../../modulos/nav/nav.js";
import { cargarFooter } from "../../modulos/footer/footer.js";
import { cargarTablero } from "./tablero.js";
import { users } from "../../conexiones/conexiones.js";



let conexionAs = document.querySelector('#asistenciaB');
conexionAs.appendChild(cargarHeaderLog());

function añadirTablero(ngSel, idGradoSel){
    let divTabB = document.createElement('div');
    divTabB.className = "div-tab-b";
    divTabB.appendChild(cargarTablero(ngSel, idGradoSel));

    return divTabB;
}
let darDatosU = users();

conexionAs.appendChild(cargarNav(darDatosU.usuario, darDatosU.correo, darDatosU.grados_id));

let logoTabAs = document.createElement('img');
logoTabAs.className = "logo-tab";
logoTabAs.src = "https://github.com/Leibril2007/img_App/blob/main/logo%20mejorado.png?raw=true";
conexionAs.appendChild(logoTabAs);

conexionAs.appendChild(cargarFooter());





export{ conexionAs, añadirTablero }
	
