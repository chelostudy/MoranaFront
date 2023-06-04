
const {DataTypes} = require("sequelize");
const ApiError = require("../exceptions/api-error");
mailService = require("./mail-service")
const orderModel = (require('../models/models')).Orders


class OrderService{
    async registerOrder(order){
        await this.saveOrder(order)
        const result = await mailService.sendNotificationToAdmins();
        return result;
    }

    async saveOrder(order) {
        const result = await orderModel.create(
            {
                name: order.name,
                email: order.email,
                phone: order.phone,
                order_text: order.order_text,
            })
        return result;
    }

    async loadOrders(pagination_limit, page){
        const offset = pagination_limit*page;
        const result = await orderModel.findAll({
            limit: pagination_limit,
            offset: offset
        })
        return result;
    }

    async deleteOrder(order_id){
        if (!order_id) throw ApiError.BadRequest('Id не может быть пустым')
        try{
            const result = await orderModel.destroy({where:{id : order_id}})
            return result
        } catch (e){
            return null
        }
    }


}

module.exports = new OrderService();