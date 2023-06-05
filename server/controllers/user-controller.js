const userService = require('../services/user-service')
const orderService = require('../services/order-service')
const priceService = require('../services/price-service')
const {DataTypes} = require("sequelize");
const {validationResult} = require('express-validator');

const ApiError = require('../exceptions/api-error');


class UserController{
    async login(req, res, next){
        try{
            const {email, password} = req.body;
            const userData = await userService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken,{maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json(userData);
        } catch (e){
            next(e);
        }
    }
    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }
    async registration(req, res, next) {
        try{
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }
            const {email, password} = req.body;
            const userData = await userService.registration(email, password);
            res.cookie('refreshToken', userData.refreshToken,{maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json(userData);
        } catch (e){
            next(e);
        }
    }
    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (e) {
            next(e);
        }
    }
    async registerOrder(req, res, next){
        try{
            const order = req.body;
            console.log({...order})
            return res.json(await orderService.registerOrder(order));
        } catch (e){
            next(e);
        }
    }
    async getOrders(req, res, next){
        try{
            const {pagination_limit, pagination_page} = req.body;
            return res.json(await orderService.loadOrders(pagination_limit, pagination_page));
        } catch (e){
            next(e)
        }
    }

    async deleteOrder(req, res, next){
        try{
            const {order_id, pagination_limit, pagination_page} = req.body;
            await orderService.deleteOrder(order_id)
            return res.json(await orderService.loadOrders(pagination_limit, pagination_page));
        }catch (e){
            next(e)
        }
    }
    async updateOrderStatus(req, res, next){
        try{
            const {order_id, order_status, pagination_limit, pagination_page} = req.body;
            await orderService.updateOrderStatus(order_id, order_status)
            return res.json(await orderService.loadOrders(pagination_limit, pagination_page));
        }catch (e){
            next(e)
        }
    }
    async updateAllPrices(req,res,next){
        try {
            const fields = req.body;
            await priceService.updatePrices(fields)
            return res.json(await priceService.loadPrices())
        } catch (e){
            next(e)
        }
    }

}


module.exports = new UserController();