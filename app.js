const express = require("express");


const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");


//APP Var
const app = express();

require('dotenv').config();

const LecturerRoute = require('./routes/Lecturer');
const UserRoute = require('./routes/User');
const AdminRoute = require('./routes/Admin');
const StudentRoute = require('./routes/Student');



//APP Config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const url = 'mongodb+srv://admin:4MUoO30P4dokdrCi@cluster0.lwgpy.mongodb.net/testing_system?retryWrites=true&w=majority';
const url1 = "mongodb://localhost:27017/testing_system";

mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
}, err => {
  if (mongoose.connection.states.connected) console.log('Connect...');
  else console.log(err);
})



app.use(cors({
  origin: ['http://localhost:3000']
}));

//Routes Definition
const { verifyAdminJWT,
  verifyStudentJWT,
  verifyLecturerJWT } = require('./helpers/Token');

app.use("/Admin", verifyAdminJWT, AdminRoute);
app.use("/Lecturer", verifyLecturerJWT, LecturerRoute);
app.use('/Student', verifyStudentJWT, StudentRoute);
app.use('/User', UserRoute);

const test_add = require("./routes/test/addresult");

app.use('/test', [test_add]);

app.use(express.static(__dirname + '/build'));

app.get('/student', (req, res, next) => {
  res.sendFile(__dirname + '/build/index.html');
})
//APP Activation

app.listen(process.env.PORT || 8000, () => {
  console.log("Start...");
});
