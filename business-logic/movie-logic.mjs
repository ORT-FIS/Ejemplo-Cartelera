export default class MovieLogic {
    
    constructor() {
        this.movies = [];
    }

    add(movie) {
        let isMovieAlreadyListed = this.movies.some(m => m.title == movie.title);
        if(!isMovieAlreadyListed) {
            this.movies.push(movie);
        } else {
            throw new Error(`No se pudo agregar. ${movie.title} ya se encuentra en cartelera.`);
        }
    }

    getAll() {
        return this.movies;
    }
}