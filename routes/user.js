const router = require('express').Router();
const user = require('../controllers/user');
const userCtrl = require('../controllers/user');

router.get('/user/index', userCtrl.index);



router.post('/placeOrder', userCtrl.placeOrder)

router.post('/renderOrderDetails', userCtrl.renderDetails)

router.post('/deleteOrder', userCtrl.deleteOrder)
  

router.post( '/:orderID', userCtrl.orderDetails );

router.post( '/deleteItem', userCtrl.deleteItem );

module.exports = router;