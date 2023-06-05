const express = require('express');
const router =  express.Router({mergeParams: true});

router.use('/products', require('./products.route'));
router.use('/auth', require('./auth.route'));

module.exports = router;