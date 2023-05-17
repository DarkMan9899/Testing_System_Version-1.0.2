const Question = require("../../models/Model.Question");

module.exports = (req, res, next) => {

    const name = 'QType_' + req.body.data.type;

    Question[name.toString()].collection.insertOne(req.body.data)
        .then((result) => {
            if (result) res.send(true);
        })
        .catch((err) => {
            if (err) res.send(new Error("Error"));
        });
}