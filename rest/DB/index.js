'use strict';

const mongoose = require('mongoose');
const User = require('./User/user');
require('dotenv').config();

mongoose.connect(process.env.DB_HOST);

const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on('error', _err => {
    return `connection error: ${_err}`;
});
db.once('open', _error => {
    return _error;
});

module.exports = {
    User
};
