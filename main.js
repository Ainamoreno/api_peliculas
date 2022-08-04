const cargarPeliculasPopulares = async () => {
    try {
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=b5138e06a3a9125b8c326498bbeae997&language=en-ES&page=1')
    
      const datos =  await respuesta.json();
      let peliculas = '';
       datos.results.forEach(pelicula => {
        peliculas += `
            <div class="pelicula">
                <img class="poster" src='https://image.tmdb.org/t/p/w500/${pelicula.poster_path}'>
                <h3 class="titulo" >${pelicula.title}</h3>
            </div>
            `;
       });
       document.getElementById('contenedor').innerHTML = peliculas

    } catch (error) {
        console.log(error);
    }

}
const cargarPeliculasProximas = async () => {
    try {
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=c4a520e4e71ab0a5e2f83a4b3c9aac47&language=en-ES&page=1')
        
      const datos =  await respuesta.json();
      let peliculas = '';
       datos.results.forEach(pelicula => {
        peliculas += `
            <div class="pelicula">
                <img class="poster" src='https://image.tmdb.org/t/p/w500/${pelicula.poster_path}'>
                <h3 class="titulo" >${pelicula.title}</h3>
            </div>
            `;
       });
       document.getElementById('contenedor').innerHTML = peliculas

    } catch (error) {
        console.log(error);
    }

}

