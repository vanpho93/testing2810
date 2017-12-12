require('../src/db');
const User = require('../src/models/User');

beforeEach('Remove all data', async () => {
    await User.remove({});
});
