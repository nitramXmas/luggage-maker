const { Router } = require('express');
const createUser = require('../controllers/createUser');
const getAllUsers = require('../controllers/getAllUsers');
const getUserById = require('../controllers/getUserById');

const userRouter = Router();

// Récupère tous les users
userRouter.get('', getAllUsers);
// Récupère un user
userRouter.get('/:user_id', getUserById);
//Créer un user
userRouter.post('', createUser);

module.exports = userRouter;