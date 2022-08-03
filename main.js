const cargarPeliculas = async () => {
    try {
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=b5138e06a3a9125b8c326498bbeae997&language=en-ES&page=1')
        console.log(respuesta)
      const datos =  await respuesta.json();
      let peliculas = '';
       datos.results.forEach(pelicula => {
        peliculas += `
            <div>
                <img src='https://image.tmdb.org/t/p/w500/${pelicula.poster_path}'
                <h1>${pelicula.title}</h1>
            </div>
            `;
       });
       document.getElementById('contenedor').innerHTML = peliculas

    } catch (error) {
        console.log(error);
    }

}
cargarPeliculas();