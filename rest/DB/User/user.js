const User = require('../../models/User');

module.exports = {
    insert(_user) {
        return new Promise((resolve, reject) => {
            const user = new User(_user);
            user.save((_err, _res) => {
                if (_err) {
                    reject(_err);
                }
                resolve(_res);
            });
        });
    },

    getAll() {
        return new Promise((resolve, reject) => {
            User.find({}).sort({
            }).exec((err, doc) => {
                if (err) {
                    reject(err);
                }
                resolve(doc);
            });
        });
    }
};
