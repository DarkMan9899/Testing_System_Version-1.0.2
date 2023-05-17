const User = require('../../models/Model.User');
const { createHash } = require('../../helpers/Hash');

const { validationResult } = require('express-validator');

const hyperid = require('hyperid');
const id = hyperid({
    fixedLength: true,
    urlSafe: true
});

module.exports = (req, res, next) => {
    const valid = validationResult(req);
    console.log()
    if (!valid.isEmpty()) {
        res.status(200).json({ msg: valid.array()[0].msg, invalid: true });
    } else {
        const { firstName, lastName, subject, email, password } = req.body;

        User.findOne({ email: email }).then(result => {
            if (result) res.status(200).json({
                msg: 'Email address already exist.',
                invalid: true
            }); else {
                User.collection.insertOne({
                    firstName: firstName,
                    lastName: lastName,
                    subject: subject,
                    email: email,
                    password: createHash(password),
                    type: 'lecturer'
                }).then(result => {
                    if (result) res.send('Data Inserted.'); else res.send('There is an error, try again.')
                })
            }
        })
    }


}