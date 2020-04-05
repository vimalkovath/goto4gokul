const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB/db');
const userdatas = require('./api/usersformapi');
const bookingdetails = require('./api/cycleformapi');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);

const app = express();
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

// Setting up static directory
app.use(express.static(path.join(__dirname, '/Gotothechange')));

app.use('/log', userdatas);
app.use('/log', bookingdetails);


const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log('Connected to port ' + port)
})


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/Gotothechange/index.html'));
});
// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});


// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});



// const http = require('http');

// const server = http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/plain"});
<<<<<<< HEAD
//     response.end("am vimal!");
=======
//     response.end("Hello vimal!");
>>>>>>> server
// });

// const port = process.env.PORT || 1337;
// server.listen(port);





<<<<<<< HEAD
// console.log("Server running.. at http://localhost:%d", port);
=======
// console.log("Server running at http://localhost:%d", port);
>>>>>>> server
