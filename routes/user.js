const router = require('express').Router();
const userCtrl = require('../controllers/user');

router.get('/user/index', userCtrl.index);



  

module.exports = router;