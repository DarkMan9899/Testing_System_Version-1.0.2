const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    const form = new formidable.IncomingForm();
    const PATH = path.resolve(__dirname + '/../../' + 'videos');

    if (!fs.existsSync(PATH)) fs.mkdirSync(PATH);

    form.keepExtensions = true;
    form.multiples = false;
    form.parse(req);

    form.on('fileBegin', function (name, file) {
        file.path = PATH + '/' + file.name;
    });

    form.once('end', () => { res.status(200).json({ uploaded: true }) });

    form.on('error', function (err) {
        if (err) res.send('Try again');
    })
}