const { model } = require('mongoose');

module.exports = model('user', {
    firstName: String,
    middleName: String,
    lastName: String,
    email: String,
    group: String,
    password: String,
    token: String,
    type: String
});

