const router = require('express').Router();
const userCtrl = require('../controllers/user');

router.get('/user/index', userCtrl.index);

router.post('/addToBasket', userCtrl.addToBasket)
// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect('/auth/google');
//   }

  

module.exports = router;