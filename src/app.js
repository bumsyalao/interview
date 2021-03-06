import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

require('dotenv').config();

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const router = express.Router();

const PORT = parseInt(process.env.PORT, 10) || 3010;

app.set('port', PORT);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}!`);
});
