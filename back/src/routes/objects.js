const { Router } = require('express');
const getAllObjects = require('../controllers/getAllObjects');

const objectsRouter = Router();

objectsRouter.get('', getAllObjects);

module.exports = objectsRouter;