const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDb ATLAS CONNECTED!');
    })
    .catch((error) => {
      return console.log(`Erro ao conectar com o MongoDb, erro: ${error} `);
    });
};

module.exports = connectToDatabase;
