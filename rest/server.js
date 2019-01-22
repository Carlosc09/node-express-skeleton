'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express(); // Please do not remove this line, since CLI uses this line as guidance to import new controllers
const userController = require('./controllers/userController');
const authToken = require('./common/auth/validateToken');
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(authToken);
app.use('/api/portal', userController);

const server = app.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log('Server is running');
});

module.exports = server;
