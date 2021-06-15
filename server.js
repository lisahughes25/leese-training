const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;
const logger = require('morgan');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
app.use(logger('dev'))