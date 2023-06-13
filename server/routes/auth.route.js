const express = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult} = require('express-validator');
const User= require('../models/User');
const tokenService = require('../services/token.service');
const router =  express.Router({mergeParams: true});

router.post('/singUp', [
    check('email', 'Wrong email').isEmail(),
    check('password', 'Passwords must be at least 6 characters').isLength({min: 6}),
    async  (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    message: 'Invalid_data',
                    errors: errors.array()
                });
            }
            

            const {email, password} = req.body;
            
            const existingUser = await User.findOne({email});

            if (existingUser) {
                return res.status(400).json({
                    message: 'Email already exists'
                });
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            const newUser = await User.create({
                ...req.body,
                password: hashedPassword
            });

            const tokens = tokenService.generateToken({_id: newUser._id});
            await tokenService.saveToken(newUser._id, tokens.refreshToken);

            res.status(201).send({...tokens, userId: newUser._id})
        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Server error, try again later'
            });
        }
    }
]);

router.post('/singIn',[
    check('email', 'Wrong email').normalizeEmail().isEmail(),
    check('password', 'Passwords must be at least 6 characters').exists(),
    async  (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    message: 'Invalid_data'
                });
            }

            const {email, password} = req.body;
            const existingUser = await User.findOne({email});

            if (!existingUser) {
                return res.status(400).send({
                    message: 'Email not found'
                });
            }

            const isEqual = await bcrypt.compare(password, existingUser.password);

            if (!isEqual) {
                return res.status(400).send({
                    message: 'Invalid_password'
                });
            }

            const tokens = tokenService.generateToken({_id: existingUser._id});
            await tokenService.saveToken(existingUser._id, tokens.refreshToken);

            res.status(200).send({...tokens, userId: existingUser._id});
        } catch (e) {
            res.status(500).json({
                message: 'Server error, try again later'
            });
        }
}] );

router.post('/refreshToken', async  (req, res) => {
    try {
        const { refreshToken } = req.body;

        const tokenClient = tokenService.validateRefresh(refreshToken);
        const tokenDb = await tokenService.findToken(refreshToken);
        const isTokenInvalid = !tokenClient || !tokenDb || !tokenClient._id === tokenDb?.user?.toString();

        if (isTokenInvalid) {
            return res.status(401).send({
                message: 'Unauthorized',
            });
        }

        const tokens = await tokenService.generateToken({
            id: tokenDb.user.toString()
        });

        await tokenService.saveToken(tokenDb._id, tokens.refreshToken);

        res.status(200).send({...tokens, userId: tokenDb._id});
    } catch (e) {
        res.status(500).json({
            message: 'Server error, try again later'
        });
    }
});

module.exports = router;