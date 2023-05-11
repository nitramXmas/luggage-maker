const database = require('../config/database');
const { default: axios } = require('axios');

const dataFactor = ([data], image) => {
  return {
    name: data.name.common,
    capital: data.capital[0],
    region: data.region,
    flags: data.flags.svg,
    alt: data.flags.alt,
    img: image
  };
};

const getRandomCountry = (request, response) => {
  database
    .query('SELECT country_name, background_img FROM luggage ORDER BY RAND() LIMIT 1')

    .then(([[{ country_name, background_img }]]) => {
      axios
        .get(
          `https://restcountries.com/v3.1/name/${country_name}?fields=name,capital,region,flags`
        )
        .then(({ data }) => response.json(dataFactor(data, background_img)));
    })
    .catch((err) => {
      console.log(err);
      return response.sendStatus(500);
    });
};

module.exports = getRandomCountry;
