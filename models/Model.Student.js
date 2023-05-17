const { model, Types } = require('mongoose');

module.exports = model('student', {
    firstName: String,
    middleName: String,
    lastName: String,
    group: String,
    token: String,
    user_id: Types.ObjectId
});