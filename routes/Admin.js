const AdminRoute = require('express').Router();


const { insertLecturer } = require('../validators/admin');
const InsertLecturer = require('../controllers/admin/InsertLecturer');
const GetLecturerList = require('../controllers/admin/GetLecturerList');
const EditLecturerData = require('../controllers/admin/EditLecturerData');
const DeleteLecturerData = require('../controllers/admin/DeleteLecturerData');

AdminRoute.post("/InsertLecturer", insertLecturer, InsertLecturer);
AdminRoute.get('/GetLecturerList', GetLecturerList);
AdminRoute.put('/EditLecturerData', EditLecturerData);
AdminRoute.delete('/DeleteLecturerData', DeleteLecturerData)
// AdminRoute.post("/InsertLecturer", verifyAdminJWT, InsertLecturer);
// AdminRoute.get('/GetLecturerList', verifyAdminJWT, GetLecturerList);
// AdminRoute.put('/EditLecturerData', verifyAdminJWT, EditLecturerData);
module.exports = AdminRoute;
