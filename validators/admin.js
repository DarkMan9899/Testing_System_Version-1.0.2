const { body } = require('express-validator');


module.exports.insertLecturer = [
    body('firstName').trim().not().isEmpty().withMessage('First name field is required'),
    body('lastName').trim().not().isEmpty().withMessage('Last name field is required'),
    body('subject').trim().not().isEmpty().withMessage('Subject field is required'),
    body('email').trim().not().isEmpty().withMessage('Email field is required')
        .isEmail().withMessage('Enter valid email address'),
    body('password').trim().not().isEmpty().withMessage('Password field is required')
        .isAlphanumeric().withMessage('Enter numbers,symbols and letters.'),
]