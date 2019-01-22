const User = require('../../models/User_model');
const jwt = require('jsonwebtoken');

const exp = Math.floor(Date.now() / 1000) + (60 * 60);

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
                doc.forEach(user => {
                    if(user.LogInfo) {
                        user.LogInfo = {};
                    }
                });
                resolve(doc);
            });
        });
    },

    authenticate(_users) {
        return new Promise((resolve, reject) => {
            User.findOne({
                UserName: _users.UserName
            }, (err, doc) => {
                if (err) {
                    reject(err);
                }
                if(doc.LogInfo.PassWord !== _users.PassWord) {
                    reject({
                        success: false,
                        message: 'Authentication failed. Wrong password.'
                    });
                } else {
                    let token = jwt.sign({
                        exp: exp,
                        data: {
                            UserName: doc.UserName,
                            Id: doc.Id
                        }
                    }, process.env.SECRET);
                    resolve({
                        token,
                        exp: exp
                    });
                }
            });
        });
    },

    delete(_users) {
        return new Promise((resolve, reject) => {
            User.deleteOne({ _id: _users._id }, (err, info) => {
                if (err) {
                    reject(err);
                }
                resolve(info);
            });
        });
    }
};
