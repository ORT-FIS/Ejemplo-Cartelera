const MIN_YEAR = 1888;
const MAX_YEAR = 2021;

export default class Movie {
    
    constructor(title, genre, year) {
        this.title = title;
        this.genre = genre;
        this.setYear(year);
    }

    setYear(year) {
        if(year >= MIN_YEAR && year <= MAX_YEAR) {
           this.year = year;
        } else {
            throw new Error(`El año ingresado es incorrecto. La pelicula debe ser de los años entre ${MIN_YEAR} y ${MAX_YEAR}`);
        }
    }
}