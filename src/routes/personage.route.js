const route = require('express').Router();
const controllerPersonages = require('../controllers/personage.controller');

const {
  validId,
  validObjectBody,
} = require('../middlewares/personage.middleware');

const authMiddleware = require('../middlewares/auth.middleware');

route.get(
  '/personages',
  authMiddleware,controllerPersonages.findAllPersonagesController,
);

route.get(
  '/personages/find/:id',
  authMiddleware,
  validId,
  controllerPersonages.findByIdPersonageController,
);
route.get(
  '/personage/search',
  authMiddleware,
  controllerPersonages.searchPersonageController,
);
route.post(
  '/personages/create',
  authMiddleware,
  validObjectBody,
  controllerPersonages.createPersonageController,
);
route.put(
  '/personages/update/:id',
  authMiddleware,
  validId,
  validObjectBody,
  controllerPersonages.updatePersonageController,
);
route.delete(
  '/personages/delete-personage/:id',
  authMiddleware,
  validId,
  controllerPersonages.deletePersonageController,
);

module.exports = route;
