const jwt = require('jsonwebtoken');
const KEY = '23csndqh3efqivdi23fwdasdje2';

function sign(obj) {
    return new Promise((resolve, reject) => {
        jwt.sign(obj, KEY, { expiresIn: '1d' } ,(err, token) => {
            if (err) return reject(err);
            resolve(token);
        });
    });
}

function verify(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, KEY, (err, obj) => {
            if (err) return reject(err);
            resolve(obj);
        });
    });
}

module.exports = { sign, verify };

// jwt.sign({ id: '2ge8o7qwydqje', name: 'Pho' }, KEY, { expiresIn: '1d' } ,(err, token) => {
//     if (err) return console.log(err);
//     console.log(token);
// });

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJnZThvN3F3eWRxamUiLCJuYW1lIjoiUGhvIiwiaWF0IjoxNTEzODU0ODE3fQ.Rig-wnEdIn-Fq24THoOdmmFVHGwTsjOcFciS961yjMo';
// jwt.verify(token, KEY, (err, obj) => {
//     if (err) return console.log(err);
//     console.log(obj); 
// })
