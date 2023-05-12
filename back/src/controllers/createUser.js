const database = require('../config/database');

const createUser = (request, response) => {
  const { username, password, firstname, lastname, email, profilpic } = request.body;

  database
    .query(
      `
        INSERT INTO users (username, password, firstname, lastname, email, profilpic) 
        VALUES (?, ?, ?, ?, ?, ?) 
        `,
      [username, password, firstname, lastname, email, profilpic]
    )
    .then(([results]) => {
      return response.status(201).json(results);
    })
    .catch((err) => {
      console.log(err);
      return response.sendStatus(500);
    });
};

module.exports = createUser;
