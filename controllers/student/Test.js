const question = require('../../models/Model.Question');

const random = (max = 4, min = 1) => {
    return Math.floor(Math.random() * max) + min;
}

module.exports.GetTest = (req, res) => {
    let set = new Set();

    while (set.size < 5) {
        set.add(random(25, 0));
    }

    let numbers = [];

    set.forEach(num => {
        numbers.push(num);
    })

    question.QType_2.find({ 'subject': 'English' }, function (err, result) {
        let ids = [];
        let list = [];

        result.forEach(elem => { ids.push(elem._id); })
        set.forEach(num => { list.push(ids[num]) })


        question.QType_2.find({ _id: list }).select('_id answer_1 answer_2 answer_3 answer_4 question type')
            .then(data => { res.status(200).send(data); })
    })
}

module.exports.TestResults = (req, res) => {
   
    question.QType_2.find({ _id: req.body.ids }).then(doc => {


        let score = 0;
        let corrects = [];
        req.body.answers.map((val, index) => {

            if (val === parseInt(doc[index].correct)) {
                score += parseInt(doc[index].score);
                corrects.push('c_' + parseInt(doc[index].correct));
            }
            else corrects.push('i_' + parseInt(doc[index].correct));
        })
        res.json({ 'score': score, 'correct': corrects });
    })

}