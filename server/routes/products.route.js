const express = require('express');
const Products = require('../models/Product');
const router =  express.Router({mergeParams: true});

router.get('/', async  (req, res) => {
    try {
        const { sortBy, sliceIndexStart, loadLimit, queryParams } = req.query;
        console.log(req.query)
        const sortType = sortBy ? {price: sortBy} : {};
        const getQuery = () => {
            let queryObj = {};
            for (const [key, value] of Object.entries(queryParams)) {
                queryObj = {
                    ...queryObj,
                    [key]: value
                }
            }

            return queryObj;
        }

        
        const query = getQuery();
        
        const productsAmount = await Products.find(query);

        const products = await Products.find(query)
        .skip(sliceIndexStart)
        .sort(sortType)
        .limit(loadLimit);

        res.status(200).json({products, productsAmount: productsAmount.length});
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error, try again later'
        });
    }
});


router.get('/main', async  (req, res) => {
    try {
        const jeans = await Products.find({productType: 'jeans'}).limit(4);
        const jackets = await Products.find({productType: 'jackets'}).limit(4);
        const shirts = await Products.find({productType: 'shirts'}).limit(4);
        const data = [ 
            { jeans }, 
            { jackets }, 
            { shirts }
        ];
        
        res.status(200).json(data);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error, try again later'
        });
    }
});

router.get('/id', async  (req, res) => {
    try {
        const {_id} = req.query;
        const product = await Products.findOne({_id});
        res.status(200).json(product);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error, try again later'
        });
    }
});

router.get('/recommend', async  (req, res) => {
    try {
        const { gender } = req.query;
        const product = await Products.find({gender}).limit(4);
        res.status(200).json(product);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error, try again later'
        });
    }
});

module.exports = router;