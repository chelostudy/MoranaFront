const ApiError = require("../exceptions/api-error");

const priceModel = (require('../models/models')).Prices

class PriceService{
    async updatePrices(fields){
        console.log("VHOD")
        if (!fields) throw ApiError.BadRequest('Не выбраны поля в запросе')
        try{
            for (const fKey in fields) {
                console.log(fields[fKey])
                console.log(fields.)
            }
            return null
        } catch (e){
            return null
        }
    }
}
module.exports = new PriceService();