const { model } = require('mongoose');

module.exports = model('lecturer', {
    firstName: String,
    lastName: String,
    subject: String,
    email: String,
    password: String,
    username: String
});

