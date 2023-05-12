const { Router } = require('express');
const getCountryLuggage = require('../controllers/getCountryLuggage');

const luggageRouter = Router();

luggageRouter.get('/:country_name', getCountryLuggage);

module.exports = luggageRouter;