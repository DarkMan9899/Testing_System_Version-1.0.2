const UserRoute = require('express').Router();

const SignIn = require('../controllers/user/sign_in');


const { login } = require('../validators/user');

UserRoute.post('/sign_in', login, SignIn);

module.exports = UserRoute;