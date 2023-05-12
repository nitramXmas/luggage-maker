const database = require('../config/database');

const getCountryLuggage = (request, response) => {

    database.query('SELECT * FROM luggage, objects, valid_luggage WHERE luggage.id = valid_luggage.luggage_id AND valid_luggage.object_id = objects.id AND luggage.country_name = ?', [request.params.country_name])
        .then(([results]) => {
            console.log(results);
            return response.json(results)
        })
        .catch((err) => {
            console.log(err)
            return response.sendStatus(500)
        })
}

module.exports = getCountryLuggage;