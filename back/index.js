const app = express();
const EXPRESS_PORT = 3030;
const countriesRouter = require('./src/routes/countries');
const objectsRouter = require('./src/routes/objects');
const luggageRouter = require('./src/routes/luggage');
const userRouter = require('./src/routes/user')
const cors = require('cors');

const corsOptions = {
    origin: '*'
  origin: '*'
}
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/countries', countriesRouter);
app.use('/api/objects', objectsRouter )
app.use('/api/luggage', luggageRouter)
app.use('/api/users', userRouter);


app.listen(EXPRESS_PORT, () =>
  console.log('Server is running on: %s', EXPRESS_PORT)
);
