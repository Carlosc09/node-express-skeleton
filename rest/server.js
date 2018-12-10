const express = require('express');
const bodyParser = require('body-parser');
const app = express(); // Please do not remove this line, since CLI uses this line as guidance to import new controllers
const userController = require('./controllers/userController');
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/test', userController);

app.listen(process.env.PORT || 3000, () => {
    // eslint-disable-next-line no-console
    console.log('Server is running');
});
