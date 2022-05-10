const userService = require('../services/user.service');
const authService = require('../services/auth.service');

const createUserController = async (req, res) => {
  const { name, username, email, password, avatar } = req.body;
  if (!name || !username || !email || !password || !avatar) {
    return res.status(400).send({
      message: 'Alguns campos estão incompletos!',
    });
  }
  const foundUser = await userService.findByEmailUserService(email);
  if (foundUser) {
    return res.status(400).send({
      message: ' esse usuário já existe!',
    });
  }
  const user = await userService
    .createUserService(req.body)
    .catch((err) => console.log(err.message));
  if (!user) {
    return res.status(400).send({
      message: 'Erro ao criar usuário!',
    });
  }

  const token = authService.generateToken(user.id);

  res.status(201).send({
    user: {
      id: user.id,
      name,
      username,
      email,
      avatar,
    },
    token,
  });
};
const findAllUserController = async (req, res) => {
  const users = await userService.findAllUserService();
  if (users.length == 0) {
    return res.status(404).send({
      message: 'Nenhum usuário cadastrado!',
    });
  }
  res.send(users);
};

module.exports = { createUserController, findAllUserController };
