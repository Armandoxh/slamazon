const db = require('../models/index')
const User = require('../models/User')

module.exports = {
    index,
    addOrder
}

function index (req, res, next){
    User.find({}, function(err, users){
        console.log('redirecting to /index from user controller')
        res.render('/user/index',{
         users
        })
    })
}

function addOrder(req,res,next){
    req.user.orders.push(req.body);
    req.user.save(function(err){
        res.redirect('/index')

    })
}