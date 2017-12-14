const assert = require('assert');
const request = require('supertest');
const { app } = require('../../src/app');

describe('Test main route', () => {
    it('Main route return 123', async () => {
        const response = await request(app).get('/');
        assert.equal(response.text, '123');
    });
});

describe('Test post /cong', () => {
    it('Can add 2 numbers by post', async () => {
        const response = await request(app)
        .post('/cong')
        .type('form')
        .send({ soA: 5, soB: 10 });
        assert.equal(response.text, 15);
        assert.equal(response.status, 200);
    });

    it('Cannot add 2 things by post', async () => {
        const response = await request(app)
        .post('/cong')
        .type('form')
        .send({ soA: 'x', soB: 10 });
        assert.equal(response.text, 'Fail');
        assert.equal(response.status, 400);
    });
});
