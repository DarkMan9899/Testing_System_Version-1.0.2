const { body } = require('express-validator');



module.exports.login = [
    body('email').trim().not().isEmpty().withMessage('Email field is required')
        .isEmail().withMessage('Enter valid email address'),

    body('password').trim().not().isEmpty().withMessage('Password field is required')
]

