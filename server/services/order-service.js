const {DataTypes} = require("sequelize");
mailService = require("./mail-service")
const orderModel = (require('../models/models')).Orders


class OrderService{
    async registerOrder(order){

        await this.saveOrder(order)
        await mailService.sendNotificationToAdmins();
        return true
    }

    async saveOrder(order) {
        const ebaltvoirot = await orderModel.create(
            {
                name: order.name,
                email: order.email,
                phone: order.phone,
                order_text: order.order_text,
            })
        return ebaltvoirot;
    }



}

module.exports = new OrderService();