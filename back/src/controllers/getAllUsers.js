const database = require('../config/database');
const { userFields } = require('../config/dbFields')

const getAllUsers = (request, response) => {

    database.query(`SELECT ${userFields} FROM users`)
        .then(([results]) => {
            return response.json(results)
        })
        .catch((err) => {
            console.log(err)
            return response.sendStatus(500)
        })
}

module.exports = getAllUsers;