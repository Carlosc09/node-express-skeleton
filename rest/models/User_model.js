'use strict';

const mongoose = require('mongoose');

const User = mongoose.Schema({
    Id: String,
    Name: String,
    UserName: String,
    LogInfo: mongoose.Mixed,
    Info: mongoose.Mixed,
  });

module.exports = mongoose.model('User', User);
