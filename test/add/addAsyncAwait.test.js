const assert = require('assert');
const { add, addCallback, addPromise } = require('../../src/add');

xdescribe('Test add async await', () => {
    it('Can add 2 number by addPromise and async', async () => {
        const tong = await addPromise(4, 5);
        assert.equal(tong, 9);
    });
    
    it('Cannot add 2 string', async () => {
        try {
            const tong = await addPromise('a', 5);
        } catch (err) {
            assert.equal(err.message, 'Type error');
        }
    });
});