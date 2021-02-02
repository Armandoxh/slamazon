const db = require('../models/index')
const User = require('../models/User')


function index (req, res, next){
    User.find({}, function(err, users){
        res.render('user/index',{
          users
        })
    })
}