const { Router } = require('express');
const getRandomCountry = require('../controllers/getRandomCountry');

const countryRouter = Router();

countryRouter.get('', getRandomCountry);

module.exports = countryRouter;
