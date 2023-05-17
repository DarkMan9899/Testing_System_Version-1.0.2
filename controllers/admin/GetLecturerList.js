
const User = require('../../models/Model.User');
//const Lecturer=require('../../models/Lecturer');
module.exports = (req, res, next) => {
    //   Lecturer.find().select({ "__v": 0 }).then(doc => {
    //       res.send(doc)
    //  })
    User.find({ type: 'lecturer' }).select({ "__v": 0 }).then(doc => {
        res.send(doc)
    })
}