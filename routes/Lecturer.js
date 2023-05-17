const LecturerRoute = require('express').Router();



const GetStudentsList = require('../controllers/lecturer/GetStudentsList');
const GetStudentsResult = require('../controllers/lecturer/GetStudentsResult');
const InsertQuestion = require('../controllers/lecturer/InsertQuestion');


LecturerRoute.get('/GetStudentsList', GetStudentsList);
LecturerRoute.get('/GetStudentsResult', GetStudentsResult);
LecturerRoute.post("/InsertQuestion", InsertQuestion);

// LecturerRoute.get('/GetStudentsList', GetStudentsList);
// LecturerRoute.get('/GetStudentsResult', GetStudentsResult);
// LecturerRoute.post("/InsertQuestion", InsertQuestion);
module.exports = LecturerRoute;
