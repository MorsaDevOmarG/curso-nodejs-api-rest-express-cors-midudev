const express = require('express'); // commonJS
const movies = require('./movies.json')
const app = express();
// Ayuda a crear UUID
const crypto = require('crypto'); // commonJS
const z = require('zod');

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
    const movieSchema = z.object( {
        title: z.string({
            invalid_type_error: 'Movie title must be a string',
            required_error: 'Movie title is required'
        }),
        year: z.number().int().min(1900).max(2025),
        director: z.string(),
        duration: z.number().int().positive(),
        poster: z.string().url({
            message: 'Poster must be a valid URL'
        }),
        genre: z.array(
            z.enum(
                [
                    'Action',
                    'Adventure',
                    'Comedy',
                    'Drama',
                    'Family',
                    'Fantasy',
                    'Horror',
                    'Musical',
                    'Romance',
                    'Sci-Fi',
                    'Thriller'
                ]
            ),
            {
                required_error: 'Movie genre is required',
                invalid_type_error: 'Movie genre must be an array of strings'
            }
        ),
        rate: z.number().min(0).max(10)
    });

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