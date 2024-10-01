const express = require('express'); // commonJS
const app = express();

app.disable('x-powered-by'); // Deshabilitar el header

app.get('/', (req, res) => {
    res.json( {
        message: 'Hola Mundo...'
    } );
});

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, (req, res) => {
    console.log(`Server escuchando en el puerto ${PORT}`);
});

// Una vez configurado, ejecutamos en consola: node (archivo), debemos estar en el directorio donde se encuentra el archivo