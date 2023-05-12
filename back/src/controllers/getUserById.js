const database = require('../config/database');
const { userFields } = require('../config/dbFields')

const getUserById = (request, response) => {

    database.query(`SELECT ${userFields} FROM users WHERE id = ?`, [request.params.user_id])
        .then(([results]) => {
            return response.json(results)
        })
        .catch((err) => {
            console.log(err)
            return response.sendStatus(500)
        })
}

module.exports = getUserById;