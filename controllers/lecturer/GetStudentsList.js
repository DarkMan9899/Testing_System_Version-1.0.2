const User = require('../../models/Model.User');


module.exports = (req, res, next) => {
    User.find({ 'group': req.query.group }).select({ "__v": 0 }).then(doc => {
        res.send(doc)
    })
}