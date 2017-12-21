const assert = require('assert');
const { add, addCallback, addPromise } = require('../../src/add');

xdescribe('Test add callback', () => {
    it('Can add 2 number by addCallback', (done) => {
        addCallback(4, 5, (err, result) => {
            assert.equal(result, 9);
            done();
        });
    });
    
    it('Cannot add 2 string', (done) => {
        addCallback('a', 5, (err, result) => {
            assert.equal(err.message, 'Type error');
            assert.equal(result, undefined);
            done();
        });
    });
})