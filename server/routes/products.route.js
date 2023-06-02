const express = require('express');
const Products = require('../models/Product');
const router =  express.Router({mergeParams: true});

router.get('/', async  (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).json(products);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error, try again later'
        });
    }
});

router.get('/main', async  (req, res) => {

});

router.get('/id', async  (req, res) => {

});

module.exports = router;