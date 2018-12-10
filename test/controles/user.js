// const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

describe('Basic Mocha String Test', () => {
    it('should return number of charachters in a string', () => {
        const isValid = loginController.isValidUserId('abc123');
        expect(isValid).to.be.true;

    });
    it('should return first charachter of the string', () => {
        var isValid = loginController.isValidUserId('abc1234');
        // assert.equal(isValid, false);
        isValid.should.equal(false);
    });
});
