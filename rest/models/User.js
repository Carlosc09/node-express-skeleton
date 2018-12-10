const mongoose = require('mongoose');

const User = mongoose.Schema({
    Id: String,
    Name: String,
    Info: mongoose.Mixed,
    Skills: mongoose.Mixed,
    Goals: mongoose.Mixed
});

module.exports = mongoose.model('User', User);
