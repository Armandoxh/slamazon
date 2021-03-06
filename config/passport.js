const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require("../models/User")
// new code below

passport.use(new GoogleStrategy({
   clientID: process.env.GOOGLE_CLIENT_ID,
   clientSecret: process.env.GOOGLE_SECRET,
   callbackURL: process.env.GOOGLE_CALLBACK
 },

 function(accessToken, refreshToken, profile, cb) {
    User.findOne({ 'email': profile.emails[0].value }, function(err, user) {
      if (err) return cb(err);
      if (user) {
        return cb(null, user);
      } else {
       
        const user = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id,
          
        });
        user.save(function(err) {
          if (err) return cb(err);
          return cb(null, user);
        });
      }
    });
  }
));

passport.serializeUser(function(user, done) {
    
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    
    User.findById(id, function(err, user) {

        if(err) return console.log(err)
        // console.log("DESERIALIZE USER BEFORE SAVE" , user)
      done(err, user);
    });
  });