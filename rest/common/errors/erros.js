module.exports.errorHandeler = (_error) = {
    unExpectedError() {
        return new Promise(reject => {
            reject(_error);
        });
    }
};
