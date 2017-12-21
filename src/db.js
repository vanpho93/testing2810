const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const uri = process.env.NODE_ENV ? 'mongodb://localhost/mean2810-test' : 'mongodb://localhost/mean2810';

mongoose.connect(uri, { useMongoClient: true })
.catch(err => {
    console.log(err.message);
    process.exit(1);
});
