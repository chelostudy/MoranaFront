const ApiError = require("../exceptions/api-error");

const priceModel = (require('../models/models')).Prices
const catModel = (require('../models/models')).ServiceCategories

class PriceService{
    async updatePrices(fields){
        if (!fields) throw ApiError.BadRequest('Не выбраны поля в запросе')
        try{
            for (const fKey in fields) {

                const priceField = await priceModel.findOne({where: {name : fields[fKey].fieldName}})
                if (!priceField) throw ApiError.BadRequest('Поля не существует')

                priceField.set({cost : fields[fKey].fieldValue})
                await priceField.save()
            }
            return null
        } catch (e){
            return null
        }
    }
    async loadPrices(){
        const result = await priceModel.findAll()
        return result;
    }

    async loadPrices(category){
        if (!category) throw ApiError.BadRequest('Категория не указана')
        const result = await priceModel.findAll({where: {id : category}})
        return result;
    }

    async ff(){
        await catModel.create({
            name: "бетон"
        })
        await catModel.create({
            name: "раствор"
        })
        await catModel.create({
            name: "доставка"
        })
        await catModel.create({
            name: "бетонный блок"
        })
        await catModel.create({
            name: "бетононасос"
        })
    }

}




module.exports = new PriceService();

//[
    //{
        //"fieldName": "Бетон марки 200",
        //"fieldValue": "3100"
    //},
    //{
        //"fieldName": "Бетон марки 300",
        //"fieldValue": "4100"
    //},
    //{
        //"fieldName": "Бетон марки 400",
        //"fieldValue": "4600"
    //}
//]