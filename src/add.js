function add(a, b) {
    return a + b;
}

function addCallback(a, b, cb) {
    setTimeout(() => {
        if (isNaN(a) || isNaN(b)) cb(new Error('Type error'));
        cb(null, a + b);
    }, 500);
}

function addPromise(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(a) || isNaN(b)) reject(new Error('Type error'));
            resolve(a + b);
        }, 500)
    });
}

module.exports = { add, addCallback, addPromise };
