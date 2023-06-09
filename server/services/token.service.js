const jwt = require('jsonwebtoken');
const config = require('config');
const Token = require('../models/Token');

class TokenService {
    generateToken(payload) {
        const accessToken = jwt.sign(payload, config.get('accessSecret'), {
            expiresIn: '1h'
        });

        const refreshToken = jwt.sign(payload, config.get('refreshSecret'));

        return {
            accessToken,
            refreshToken,
            expiresIn: 3600
        }
    }

    async saveToken(user, refreshToken) {
        const data = await Token.findOne({ user });

        if (data) {
            data.refreshToken = refreshToken;
            return data.save();
        }

        return await Token.create({ user, refreshToken });
    }

    validateRefresh(refreshToken) {
        try {
            return jwt.verify(refreshToken, config.get('refreshSecret'));
        }   catch (e) {
            return null;
        }
    }

    async findToken(refreshToken) {
        try {
            return await Token.findOne({ refreshToken });
        } catch (e) {
            return null;
        }
    }
}

module.exports = new TokenService;