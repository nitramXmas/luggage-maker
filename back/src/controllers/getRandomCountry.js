const database = require('../config/database');
const { default: axios } = require('axios');

const getRandomCountry = (request, response) => {
  database
    .query('SELECT country_name FROM luggage ORDER BY RAND() LIMIT 1')
    .then(([result]) => {
      console.log(`https://restcountries.com/v3.1/${result}`);
      console.log(result); // result = [{country-name: france}]
      axios.get(`https://restcountries.com/v3.1/${result}`);
      return response.json(result);
    })
    .catch((err) => {
      console.log(err);
      return response.sendStatus(500);
    });
};

module.exports = getRandomCountry;
