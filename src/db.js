const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/mean2810-test', { useMongoClient: true })
.catch(err => {
    console.log(err.message);
    process.exit(1);
});
