const assert = require('assert');
const { add, addCallback, addPromise } = require('../../src/add');

xdescribe('Test add sync', () => {
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
});
