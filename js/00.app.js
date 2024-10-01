const express = require('express'); // commonJS
const movies = require('./movies.json')
const app = express();
// Ayuda a crear UUID
const crypto = require('crypto'); // commonJS

app.use(express.json()); // Para parsear los JSON en las peticiones POST

app.disable('x-powered-by'); // Deshabilitar el header

app.get('/', (req, res) => {
    res.json( {
        message: 'Hola Mundo...'
    } );
});

// Todos los recursos que se identifican con /movies
app.get('/movies', (req, res) => {
    const { genre } = req.query;

    if (genre) {
        const filteredMovies = movies.filter(
            movie => movie.genre.some( g => g.toLowerCase() === genre.toLowerCase() )
        );

        return res.json(filteredMovies);
    }

    res.json(movies);
});

// path-to-regexp
app.get('/movies/:id', (req, res) => {
    const { id } = req.params;
    const movie = movies.find(movie => movie.id === id);

    if (movie) return res.json(movie);

    res.status(404).json( {
        message: 'Película no encontrada'
    } );
});

// POST
app.post('/movies', (req, res) => {
    const {
        title,
        year,
        director,
        duration,
        poster,
        genre,
        rate
    } = req.body;

    const newMovie = {
        // Crea uuid V4
        id: crypto.randomUUID(),
        title,
        year,
        director,
        duration,
        poster,
        genre,
        rate
    };

    movies.push(newMovie);

    // Actualizar la caché del cliene
    res.status(201).json(newMovie);
});


const PORT = process.env.PORT ?? 1234;

app.listen(PORT, (req, res) => {
    console.log(`Server escuchando en el puerto ${PORT}`);
});

// Una vez configurado, ejecutamos en consola: node (archivo), debemos estar en el directorio donde se encuentra el archivo