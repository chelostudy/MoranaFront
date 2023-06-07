const models = require('../models/models')
const UserModel = models.Admin
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')
const bcrypt = require('bcrypt');
const ApiError = require('../exceptions/api-error');

class UserService{
    async registration(email, password){
        const candidate = await UserModel.findOne({where:{email: email}});
        if(candidate) {
            throw ApiError.BadRequest(`${email} already in use`)
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const user = await UserModel.create({email, password: hashPassword})

        const userDto = new UserDto(user); //id, email
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return{...tokens, admin: userDto}
    }

    async login(email, password) {
        const user = await UserModel.findOne({where:{email: email}})
        if (!user) {
            throw ApiError.BadRequest('Пользователь с таким email не найден')
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль');
        }
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto}
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        console.log(userData)
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }
        const user = await UserModel.findByPk(userData.id);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto}
    }

    async getUserId(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const tokenFromDb = await tokenService.findToken(refreshToken);
        const user = await UserModel.findByPk(tokenFromDb.adminId);
        const userDto = new UserDto(user);
        return userDto
    }
}

module.exports = new UserService();