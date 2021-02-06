const router = require('express').Router();
const userCtrl = require('../controllers/user');

router.get('/user/index', userCtrl.index);

router.post('/placeOrder', userCtrl.placeOrder)

router.post('/renderOrderDetails', userCtrl.renderDetails)

  

module.exports = router;