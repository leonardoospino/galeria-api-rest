const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('Conectado a la BD!');
  } catch (error) {
    console.log(error);
    throw new Error('Error al inicializar la BD!');
  }
}

module.exports = { dbConnection }