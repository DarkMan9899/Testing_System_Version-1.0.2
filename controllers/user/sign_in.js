const User = require('../../models/Model.User');
const { createHmac } = require('crypto');
const { createJWT } = require('../../helpers/Token');
const { validationResult } = require('express-validator');
module.exports = (req, res) => {
    const valid = validationResult(req);
    if (!valid.isEmpty()) res.status(200).json({ 'msg': valid.array()[0].msg });
    else {
        User.findOne({ email: req.body.email }, (err, result) => {
            if (err || !result) res.status(200).json({ "msg": "Incorrect email and/or password" })
            else {
                const PHash = createHmac('SHA256', '7fd04df92f63', { encoding: 'ascii' }).update(req.body.password).digest('hex');
                if (result.password === PHash) {
                    const new_jwt = createJWT(result.type.toUpperCase(), { email: result.email, id: result._id });
                    ///res.cookie('token', 'Bearer ' + new_jwt);
                    res.status(200).json({
                        'token': new_jwt,
                        'type': result.type,
                        'firstName': result.firstName,
                        'lastName': result.lastName
                    });
                    //res.status(200).send(createJWT(result.type.toUpperCase(), { email: result.email, id: result._id }));
                } else res.status(200).json({ "msg": "Incorrect email and/or password" })
            }
        })
    }

}