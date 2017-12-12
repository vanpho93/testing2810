const assert = require('assert');
const { add, addCallback, addPromise } = require('../src/add');

it('Can add 2 numbers', () => {
    const tong = add(4, 5);
    // if (tong !== 9) throw new Error('loi');
    // assert(10 === tong);
    assert.equal(tong, 9);
});

it('Can add 2 negative numbers', () => {
    const tong = add(-4, -10);
    assert.equal(tong, -14);
});

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
});
