import 'dotenv/config';
import express from 'express';
import passport from 'passport';
import cors from 'cors';

import './middlewares/passport.js';

import usuariosRoutes from './routes/usuarios.js';
import vehiculosRoutes from './routes/vehiculos.js';
import conductoresRoutes from './routes/conductores.js';
import viajesRoutes from './routes/viajes.js';

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(passport.initialize());

app.get('/', (req, res) => {
    res.json({
        mensaje: 'API de Gestión de Transporte funcionando correctamente'
    });
});

app.use('/api/usuarios', usuariosRoutes);
app.use('/api/vehiculos', vehiculosRoutes);
app.use('/api/conductores', conductoresRoutes);
app.use('/api/viajes', viajesRoutes);

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
