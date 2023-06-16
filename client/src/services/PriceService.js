import $api from "../API";


export default class PriceService {
    static async getPrices() {
        return $api.get('/get_prices')
    }

    static async getPricesByCat(category){
        return $api.post('/get_prices_by_cat', {category})
    }

    static async updatePrices(fields) {
        return $api.post('/update_prices', {fields})
    }

}