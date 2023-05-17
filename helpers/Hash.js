const { createHmac } = require('crypto');

const createHash = password => {
    return createHmac('SHA256', '5acedc2f8e7673301c6c5e37de4bdd87').update(password).digest('hex')
}

const verifyHash = (paswd1, pswd2) => {
    const hash = createHmac('SHA256', '5acedc2f8e7673301c6c5e37de4bdd87').update(paswd1).digest('hex');
    return hash === pswd2 ? true : false;
}

module.exports = { createHash, verifyHash };