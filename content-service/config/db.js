const mongoose = require('mongoose');

// Tarea GA04-38-H19.1 legada
// Tarea GA04-48-H22.1.1 legada
// Tarea GA04-48-H22.1.2 legada

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error de conexión a MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;