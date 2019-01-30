'use strict';

const DB = require('../../DB');

module.exports = {
    getAll(req, res) {
        DB.User.getAll({}).then(_res => {
            res.send(_res);
        }).catch(_err => {
            res.status(500).send(_err);
        });
    },

    insert(req, res) {
        DB.User.insert(req.body).then(_res => {
            res.send(_res);
        }).catch(_err => {
            res.status(500).send(_err);
        });
    },

    authenticate(req, res) {
        DB.User.authenticate(req.body).then(_res => {
            res.send(_res);
        }).catch(_err => {
            res.status(500).send(_err);
        });
    },

    edit(req, res) {
        DB.User.edit(req.params.id, req.body).then(_res => {
            res.send(_res);
        }).catch(_err => {
            res.status(500).send(_err);
        });
    },

    delete(req, res) {
        DB.User.delete(req.body).then(_res => {
            res.send(_res);
        }).catch(_err => {
            res.status(500).send(_err);
        });
    }
};
