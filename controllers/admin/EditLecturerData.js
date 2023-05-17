
const User = require('../../models/Model.User');
//const Lecturer=require('../../models/Lecturer');
const { createHash } = require('../../helpers/Hash');

module.exports = (req, res, next) => {
    const { old_email, email, firstName, lastName, password } = req.body;
    console.log(req.body);
    User.findOneAndUpdate({ email: old_email }, {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password.length == 64 ? password : createHash(password)
    }).then(doc => {
        if (doc) res.status(200).send({ success: true })
    })
}