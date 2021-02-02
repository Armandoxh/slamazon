const express = require('express');
const router = require('express').Router();
const marketplaceCtrl = require('../controllers/marketplace');

router.get('/', marketplaceCtrl.index)

module.exports = router;