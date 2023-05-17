
const User = require('../../models/Model.User');
module.exports = (req, res, next) => {

    User.findOneAndDelete({ $and: [{ type: 'lecturer' }, { email: req.query.email }] }).then(doc => {
        if (doc) res.status(200).send({ success: true })
    })
}