const express = require('express');
const app = express();
const EXPRESS_PORT = 3030;
const countriesRouter = require('./src/routes/countries');

app.use(express.json());
app.use('/api/countries', countriesRouter);

app.listen(EXPRESS_PORT, () =>
  console.log('Server is running on: %s', EXPRESS_PORT)
);
