const express = require('express');
const methodOverride = require('method-override');
const passport = require('passport')
const morgan = require('morgan');
const session = require('express-session')

const port = 3100;

//routes
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')


const app = express();
require('dotenv').config();

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

require('./config/database');
require('./config/passport');

/**
 * MethodOverride requires it to be able to make custom URLS
 */
app.use( methodOverride('_method') );



app.use(express.static('public'));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/**
 * for parsing application/x-www-form-urlencoded 
 */
app.use('/', indexRouter)
app.use('/',userRouter)

app.use(session({
    secret: 'SEIRFLEXRocks!',
    resave: false,
    saveUninitialized: true
  }));


app.listen(port, () => {
    console.log(`Port: ${port}`);
  });