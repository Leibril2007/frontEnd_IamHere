function alumnosProyec() {

    return new Promise((resolve, reject) => {
      fetch(`http://localhost:3000/alumnos`)
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

export { alumnosProyec };