'use strict';

// auth controller routes
const express = require('express');
const router = express.Router();
const user = require('../Controller/user/userController');

// get /api/user/
router.get('/user', (req, res) => {
    user.getAll(req, res);
});

// get /api/user/
router.post('/user', (req, res) => {
    user.insert(req, res);
});

// get /api/user/
router.post('/user/authenticate', (req, res) => {
    user.authenticate(req, res);
});

// delete /api/user/
router.delete('/user', (req, res) => {
    user.delete(req, res);
});

module.exports = router;
