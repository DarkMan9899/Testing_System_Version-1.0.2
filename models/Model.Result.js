const { model } = require('mongoose');

module.exports = model('result', {
    firstName: String,
    lastName: String,
    subject: String,
    score: Number,
    group: String
});

