const express = require('express');
const router = require('express').Router();
const orderCtrl = require('../controllers/orders')


router.post('/editOrder', orderCtrl.editOrder)

module.exports = router;