const Personage = require('../models/Personage');

const createPersonageService = async (newPersonage) => {
  return await Personage.create(newPersonage);
};

const allPersonagesService = async () => {
  return await Personage.find();
};

const personageByIdService = async (id) => {
  return await Personage.findById(id);
};

const updatePersonageService = async (id, editedPersonage) => {
  await Personage.findByIdAndUpdate(id, editedPersonage);
  return editedPersonage;
};

const deletePersonageService = async (id) => {
  return await Personage.findByIdAndDelete(id);
};

const searchPersonageService = (name) => {
  return Personage.find({ name: { $regex: name, $options: 'i' } });
};

module.exports = {
  createPersonageService,
  allPersonagesService,
  personageByIdService,
  updatePersonageService,
  deletePersonageService,
  searchPersonageService,
};
