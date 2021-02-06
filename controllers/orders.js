const db = require('../models/index')
const Order = require ('../models/Order')


module.exports = {
editOrder
  };

  function editOrder(req,res){

    res.redirect('user/index')
  }