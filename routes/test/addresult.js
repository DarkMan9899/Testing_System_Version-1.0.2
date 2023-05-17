const route = require('express').Router();
const result = require('../../models/Model.Result');

const faker = require('faker');
const question = require('../../models/Model.Question');
const user = require('../../models/Model.User');
const { createHmac } = require('crypto');


route.get('/add_user', (req, res) => {
    const gender_arr = ['male', 'female'];
    const subject_arr = ['math', 'crypto'];
    const type_arr = ['student'];
    const group_arr = ['A1', 'A2', 'B1', 'B2'];
    const hash = createHmac('SHA256', '7fd04df92f63', { encoding: 'ascii' }).update('test1234').digest('hex')

    let users = [], results = []
    let fName, lName, gender, score, group, subject, type;

    for (let i = 0; i < 5; i++) {
        gender = faker.random.arrayElement(gender_arr);

        fName = faker.name.firstName(gender);
        lName = faker.name.lastName(gender);
        email = faker.internet.email(fName.toLowerCase(), lName.toLowerCase(), 'gmail.com');
        subject = faker.random.arrayElement(subject_arr);
        score = faker.random.number({ min: 40, max: 100 });
        group = faker.random.arrayElement(group_arr);
        type = faker.random.arrayElement(type_arr);
        users.push({
            firstName: fName,
            lastName: lName,
            password: hash,
            email: email,
            group: type === 'lecturer' ? '-' : group,
            type: type
        })
        if (type !== 'lecturer') {
            results.push({
                firstName: fName,
                lastName: lName,
                subject: subject,
                score: score,
                group: group
            })
        }



    }

    user.insertMany(users).then(doc => {
        //console.log('Inserted');
        result.insertMany(results).then(doc => {
            //console.log('Inserted');
            res.send('Users and Result Inserted');
        })
    })

})
module.exports = route;

