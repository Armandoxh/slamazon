
const router = require('express').Router();
const passport = require('passport');

router.get('/', function(req, res) {
    console.log('redirecting to index from index.js route'),

    res.render('index', {
        foundUser: req.user
    });
  });
  
  router.get('/auth/google', passport.authenticate('google',
  {
    scope:['profile', 'email']
  }
  ));
  
  router.get('/oauth2callback', passport.authenticate('google', 
  {
    successRedirect : '/user/index',
    failureRedirect : '/'
  }
  ));
  
  router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

module.exports= router