const assert = require('assert');
const request = require('supertest');
const { app } = require('../../src/app');

describe.only('Test main route', () => {
    it('Main route return 123', async () => {
        const response = await request(app).get('/');
        assert.equal(response.text, '123');
    });
});
