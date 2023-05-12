const database = require('../config/database');

const getAllObjects = (request, response) => {

    database.query('SELECT * FROM objects')
        .then(([results]) => {
            return response.json(results)
        })
        .catch((err) => {
            console.log(err)
            return response.sendStatus(500)
        })
}

module.exports = getAllObjects;