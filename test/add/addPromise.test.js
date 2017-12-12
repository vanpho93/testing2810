const assert = require('assert');
const { add, addCallback, addPromise } = require('../../src/add');

describe('Test add promise', () => {
    it('Can add 2 number by addPromise', done => {
        addPromise(4, 5)
        .then(result => {
            assert.equal(result, 9);
            done();
        });
    });
    
    it('Cannot add 2 string', (done) => {
        addPromise('a', 5)
        .catch(err => {
            assert.equal(err.message, 'Type error');
            done();
        });
        // assert.throws(() => addPromise('a', 5), Error);
    });
});
