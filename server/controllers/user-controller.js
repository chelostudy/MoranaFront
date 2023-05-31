const userService = require('../services/user-service')
const orderService = require('../services/order-service')
const {DataTypes} = require("sequelize");

class UserController{
    async login(req, res, next){
        try{

        } catch (e){

        }
    }
    async refresh(req, res, next) {
        try{
            res.json(['23','321']);
        } catch (e){

        }
    }
    async registration(req, res, next) {
        try{
            const {email, password} = req.body;
            const userData = await userService.registration(email, password);
            res.cookie('refreshToken', userData.refreshToken,{maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json(userData);
        } catch (e){
            console.log(e);
        }
    }
    async logout(req, res, next) {
        try{
            res.json(['23','321']);
        } catch (e){

        }
    }

    async registerOrder(req, res, next){
        try{
            const order = req.body;
            console.log({...order})
            return res.json(await orderService.registerOrder(order));
        } catch (e){
            console.log(e)
        }
    }

}


module.exports = new UserController();