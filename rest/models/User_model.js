'use strict';

const mongoose = require('mongoose');

/** Create Schema for user */
const User = mongoose.Schema({
    Id: String,
    Name: String,
    UserName: String,
    LogInfo: mongoose.Mixed,
    Info: mongoose.Mixed,
  });

module.exports = mongoose.model('User', User);
