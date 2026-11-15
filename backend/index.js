import express from 'express';

const app = express();
const PORT = 3000;

// Middleware para recibir JSON
app.use(express.json());

// Ruta principal de prueba
app.get('/', (req, res) => {
    res.json({
        mensaje: 'API de Gestión de Transporte funcionando correctamente'
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
