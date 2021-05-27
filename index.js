const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Creando la app
const app = express();

// Inicializacion de la BD
dbConnection();

// CORS
app.use(cors());

// Directorio publico
// app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json())

// Rutas
app.use('/api/galeria', require('./routes/galeria'));
// app.use('/api/events', require('./routes/events'));
// TODO: CRUD: Eventos

// Iniciando el servidor
app.listen(process.env.PORT, () => {
  console.log(`Server on port ${ process.env.PORT }`)
})