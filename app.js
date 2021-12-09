require('./models/db');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");
const bodyparser = require('body-parser');
const exphbs = require('express-handlebars');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const loggedInUserGuard = require('./middlewares/loggedInUserGuard');

const taskController = require('./controller/taskController');

const passport = require('./passport');


const authRouter = require('./auth/index');


var app = express();

// app.use(bodyparser.urlencoded({
//
//   extended:true
// }));
// app.use(bodyparser.json());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: "super-secret-key",
  //resave: false,
  //saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


app.use('/' , authRouter);



app.use(function (req, res, next) {
  res.locals.user = req.user
  next();
})

app.use('/', loggedInUserGuard,taskController);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
