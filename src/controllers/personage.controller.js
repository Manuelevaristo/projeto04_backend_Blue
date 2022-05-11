const personagesService = require('../services/personage.service');
const mongoose = require('mongoose');

const allPersonagesController = async (req, res) => {
  const personages = await personagesService.allPersonagesService();
  if (personages.length == 0) {
    return res.status(404).send({ message: 'Lista de personagens vazia' });
  }
  res.send(personages);
};
const personageByIdController = async (req, res) => {
  const parametroId = req.params.id;
  const choosePersonage = await personagesService.personageByIdService(
    parametroId,
  );
  if (!choosePersonage) {
    return res.status(404).send({ message: 'Personagem não encontrada' });
  }
  res.send(choosePersonage);
};

const createPersonageController = async (req, res) => {
  res.status(201).send(await personagesService.createPersonageService(req.body));
};

const updatePersonageController = async (req, res) => {
  const parametroId = req.params.id;
  const personageEdit = req.body;
  const updatedPersonage = await personagesService.updatePersonageService(
    parametroId,
    personageEdit,
  );
  res.send(updatedPersonage);
};

const deletePersonageController = async (req, res) => {
  const parametroId = req.params.id;

  await personagesService.deletePersonageService(parametroId);
  res.send({ message: 'Personagem deletada com sucesso!' });
};

const searchPersonageController = async (req, res) => {
  const { name } = req.query;
  const searchPersonage = await personagesService.searchPersonageService(name);

  if (searchPersonage.length == 0) {
    return res.status(404).send({ message: 'Personagem não encontrado!' });
  }

  res.send(searchPersonage);
};

module.exports = {
  allPersonagesController,
  personageByIdController,
  createPersonageController,
  updatePersonageController,
  deletePersonageController,
  searchPersonageController,
};
