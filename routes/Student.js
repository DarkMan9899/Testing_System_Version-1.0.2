const StudentRoute = require('express').Router();

const { GetTest, TestResults } = require('../controllers/student/Test');
const VideoUpload = require('../controllers/student/VideoUpload');

StudentRoute.get('/GetTest', GetTest);
StudentRoute.post('/TestResult', TestResults);
StudentRoute.post('/VideoUpload', VideoUpload);

module.exports = StudentRoute;