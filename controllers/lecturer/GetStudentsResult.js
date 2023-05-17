const Result = require('../../models/Model.Result');

module.exports = (req, res, next) => {
    
    Result.find({ 'group': req.query.group }).select({ "_id": 0, "__v": 0, }).then(doc => {
        res.send(doc)
    })
}