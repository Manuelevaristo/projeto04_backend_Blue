const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const parametroId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(parametroId)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const personage = req.body;

  if (personage || personage.name || personage.image) {
    return res
      .status(400)
      .send({ message: 'Envie o todos os campos da personagem!' });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
