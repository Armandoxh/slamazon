const express = require('express');
const router = require('express').Router();
const marketplaceCtrl = require('../controllers/marketplace');

router.get('/', marketplaceCtrl.index)

router.post('/addToBasket', marketplaceCtrl.addToBasket)

router.post('/placeOrder', marketplaceCtrl.placeOrder)
// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect('/auth/google');
//   }

module.exports = router;