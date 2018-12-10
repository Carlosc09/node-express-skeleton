'use strict';

// auth controller routes
const express = require('express');
const router = express.Router();
const user = require('../routs/user');

// get /api/user/
router.get('/user', (req, res) => {
    user.getAll(req, res);
});

// get /api/user/
router.post('/user', (req, res) => {
    user.insert(req, res);
});

module.exports = router;
