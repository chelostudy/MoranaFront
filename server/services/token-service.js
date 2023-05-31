const jwt = require('jsonwebtoken');
const models = require('../models/models')

const refreshTokenModel = models.RefreshToken

class TokenService {
    generateTokens(payload){
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: "7d"})
        return{
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await refreshTokenModel.findOne({where:{userid: userId}})
        if (tokenData) {
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
        const token = await refreshTokenModel.create({user: userId, refreshToken})
        return token;
    }


}

module.exports = new TokenService();