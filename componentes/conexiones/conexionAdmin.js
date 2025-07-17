function llenarSelectGrados(grados) {
    const select = document.querySelector('.select');
  
    if (!select) {
      console.warn("No se encontró el <select> con clase .select");
      return;
    }

    select.innerHTML = '';
    const defaultOption = document.createElement('option');
    defaultOption.textContent = "Grados";
    defaultOption.value = "";
    select.appendChild(defaultOption);
  
    grados.forEach(grado => {
      const option = document.createElement('option');
      option.value = grado.id;
      option.textContent = grado.nombre;
      select.appendChild(option);
    });
}
  
export { llenarSelectGrados }  