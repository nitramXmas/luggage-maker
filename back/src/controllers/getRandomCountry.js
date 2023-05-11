const database = require('../config/database');
const { default: axios } = require('axios');

const getRandomCountry = (request, response) => {
  database
    .query('SELECT country_name FROM luggage ORDER BY RAND() LIMIT 1')
    .then(([[{ country_name }]]) => {
      axios
        .get(
          `https://restcountries.com/v3.1/name/${country_name}?fields=name,capital,region,flags`
        )
        .then(console.log);

      return response.json(country_name);
    })
    .catch((err) => {
      console.log(err);
      return response.sendStatus(500);
    });
};

module.exports = getRandomCountry;
