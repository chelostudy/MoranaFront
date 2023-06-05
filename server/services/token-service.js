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

    async saveToken(adminId, refreshToken) {
        const tokenData = await refreshTokenModel.findOne({where:{adminId: adminId}})
        console.log(tokenData) // null
        if (tokenData) {
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
        console.log("admin", adminId)
        const token = await refreshTokenModel.create({adminId: adminId, refreshToken})
        return token;
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData;
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            return userData;
        } catch (e) {
            return null;
        }
    }

    async removeToken(refreshToken) {
        const tokenData = await refreshTokenModel.destroy({where:{refreshToken : refreshToken}})
        return tokenData;
    }

    async findToken(refreshToken) {
        const tokenData = await refreshTokenModel.findOne({where: {refreshToken : refreshToken}})
        return tokenData;
    }

}

module.exports = new TokenService();