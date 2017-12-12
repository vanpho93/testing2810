function add(a, b) {
    return a + b;
}

function addCallback(a, b, cb) {
    setTimeout(() => {
        if (isNaN(a) || isNaN(b)) cb(new Error('Type error'));
        cb(null, a + b);
    }, 500)
}

module.exports = { add, addCallback };
