import $api from "../API";


export default class OrderService {
    static async getOrders(pagination_limit, pagination_page) {
        return $api.post('/orders', {pagination_limit, pagination_page})
    }

    static async updateOrderStatus(order_id, order_status, pagination_limit, pagination_page){
        return $api.post('/update_order_status', {order_id, order_status, pagination_limit, pagination_page})
    }

    static async registerOrder(order_text, phone, name, email) {
        return $api.post('/register_order', {order_text, phone, name, email})
    }

    static async deleteOrder(order_id, pagination_limit, pagination_page) {
        return $api.post('/delete_order', {order_id, pagination_limit, pagination_page})
    }
}