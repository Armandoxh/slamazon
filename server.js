const express = require('express');
const methodOverride = require('method-override');
const passport = require('passport')
const morgan = require('morgan');
const session = require('express-session')

const port = 3100;

//routes
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const marketRouter = require('./routes/marketplace')

const app = express();
require('dotenv').config();

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


app.use(session({
    secret: 'SEIRFLEXRocks!',
    resave: false,
    saveUninitialized: true
  }));
app.use(passport.initialize());
app.use(passport.session());
/**
 * not getting access to req user
 */
app.use(function(req,res,next){
    // console.log("server js req.user" , req.user)
    next()
  })

  app.use(function(req, res, next) {
    res.locals.currentOrderDetails = req.session.currentOrderDetails;
    next();
  });

app.use('/', indexRouter)
app.use('/',userRouter)
app.use('/marketplace',marketRouter )

app.listen(port, () => {
    console.log(`Port: ${port}`);
  });