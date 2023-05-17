const jwt = require('jsonwebtoken');

module.exports.createJWT = (type, data) => {
    return jwt.sign(data, process.env[type + '_JWT_KEY'], { algorithm: 'HS384' });
}

module.exports.verifyStudentJWT = (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        jwt.verify(req.headers.authorization.split(' ')[1], process.env['STUDENT_JWT_KEY'],
            (err, verified) => {
                if (err || !verified) res.status(401).end();
                else return next()
            });
    } else res.status(401).end();

}

module.exports.verifyLecturerJWT = (req, res, next) => {

    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        jwt.verify(req.headers.authorization.split(' ')[1], process.env['LECTURER_JWT_KEY'],
            (err, verified) => {
                if (err || !verified) res.status(401).end();
                else return next()
            });
    } else res.status(401).end();
}

module.exports.verifyAdminJWT = (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        jwt.verify(req.headers.authorization.split(' ')[1], process.env['ADMIN_JWT_KEY'],
            (err, verified) => {
                if (err || !verified) res.status(401).end();
                else return next()
            });
    } else res.status(401).end();
}