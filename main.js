const cargarPeliculasPopulares = async () => {
    cargarPeliculas('https://api.themoviedb.org/3/movie/popular?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES&page=1')
}
const cargarPeliculasProximas = async () => {
    cargarPeliculas('https://api.themoviedb.org/3/movie/upcoming?api_key=c4a520e4e71ab0a5e2f83a4b3c9aac47&language=es-ES&page=1')
}

const cargarPeliculas = async (url) => {

    try {
        const respuesta = await fetch(url)

        const datos = await respuesta.json();
        let peliculas = '';
        datos.results.forEach(pelicula => {
            peliculas += `
            <div class="pelicula" onclick="detallePelicula(${pelicula.id})">
                <img class="poster" src='https://image.tmdb.org/t/p/w500/${pelicula.poster_path}'>
                <h3 class="titulo" >${pelicula.title}</h3>
            </div>`;
        });
        document.getElementById('contenedor-peliculas').innerHTML = peliculas;
        document.getElementById('detalle-pelicula').innerHTML = '';

    } catch (error) {
        console.log(error);
    }


}
const search = async (event) => {
    let valor = event.target.value;
    if (valor) {
        try {
            const busqueda = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c4a520e4e71ab0a5e2f83a4b3c9aac47&language=es-ES&page=1&include_adult=false&query=${event.target.value}`)
            const resultado = await busqueda.json();
            let peliculas = '';
            resultado.results.forEach(pelicula => {
                peliculas += `
            <div class="pelicula" onclick="detallePelicula(${pelicula.id})">
                <img class="poster" src='https://image.tmdb.org/t/p/w500/${pelicula.poster_path}'>
                <h3 class="titulo">${pelicula.title}</h3>
            </div>`
            });
            document.getElementById('contenedor-peliculas').innerHTML = peliculas;
            document.getElementById('detalle-pelicula').innerHTML = '';

        } catch (error) {
            console.log(error)
        }
    }
}

const detallePelicula =  async (movieId) => {
    try{
        const busqueda = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=c4a520e4e71ab0a5e2f83a4b3c9aac47&language=es-ES`)
        const resultado = await busqueda.json();
        let datosPelicula = `
            <h1>${resultado.title}</h1>
            <p>${resultado.overview}</p>
            <img src='https://image.tmdb.org/t/p/w500/${resultado.poster_path}'>
        `;
        document.getElementById('detalle-pelicula').innerHTML = datosPelicula;
        document.getElementById('contenedor-peliculas').innerHTML = '';


        
    } catch (error) {
        console.log(error)
    }

}



