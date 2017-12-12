const assert = require('assert');
const { add } = require('../src/add');

it('Can add 2 numbers', () => {
    const tong = add(4, 5);
    // if (tong !== 9) throw new Error('loi');
    // assert(10 === tong);
    assert.equal(tong, 9);
});
