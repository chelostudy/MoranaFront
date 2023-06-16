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


    async fff(){
        await priceModel.create({
            name: "Бетон марки 100",
            cost: "3600",
            serviceTypeId: 1
        })
        await priceModel.create({
            name: "Бетон марки 150",
            cost: "3750",
            serviceTypeId: 1
        })
        await priceModel.create({
            name: "Бетон марки 200",
            cost: "3900",
            serviceTypeId: 1
        })
        await priceModel.create({
            name: "Бетон марки 250",
            cost: "4100",
            serviceTypeId: 1
        })
        await priceModel.create({
            name: "Бетон марки 300",
            cost: "4400",
            serviceTypeId: 1
        })
        await priceModel.create({
            name: "Бетон марки 400",
            cost: "4800",
            serviceTypeId: 1
        })
        await priceModel.create({
            name: "Блок фундаментный бетонный ФБС 390X190x188",
            cost: "210",
            serviceTypeId: 4
        })
        await priceModel.create({
            name: "Блок фундаментный бетонный ФБС Алексинский 390X190x188 мм",
            cost: "180",
            serviceTypeId: 4
        })
        await priceModel.create({
            name: "п. Кирпичный",
            cost: "250",
            serviceTypeId: 3
        })
        await priceModel.create({
            name: "Аксайский район",
            cost: "350",
            serviceTypeId: 3
        })
        await priceModel.create({
            name: "Ростовская область",
            cost: "от 500",
            serviceTypeId: 3
        })
        await priceModel.create({
            name: "по Ростову-на-Дону",
            cost: "450",
            serviceTypeId: 3
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