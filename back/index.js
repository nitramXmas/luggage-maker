const express = require('express');
const app = express();
const EXPRESS_PORT = 3030;
const countriesRouter = require('./src/routes/countries');
const cors = require('cors');

const corsOptions = {
    origin: '*'
}
app.use(cors(corsOptions));

app.use('/api/countries', countriesRouter);

app.use(express.json());

app.listen(EXPRESS_PORT, () =>
  console.log('Server is running on: %s', EXPRESS_PORT)
);
