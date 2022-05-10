const mongoose = require('mongoose');

const PersonageSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  image: {
    type: String,
    require: true,
  },
});

const Personage = mongoose.model('Personage', PersonageSchema);

module.exports = Personage;
