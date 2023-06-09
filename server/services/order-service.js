
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
        if (pagination_limit < 0 || page < 0) throw ApiError.BadRequest('Отрицательное значение пагинации')
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

    async updateOrderStatus(order_id, order_status, admin_id){
        if (!order_id || !admin_id) throw ApiError.BadRequest('Отсутствуют необходимые для запроса значения');
        if (order_status == null) order_status = true
        try{
            const order = await orderModel.findByPk(order_id)
            order.set({order_status: order_status, adminId: admin_id})
            return await order.save()
        } catch (e){
            return null
        }
    }

}

module.exports = new OrderService();