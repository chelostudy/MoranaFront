const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Admin = sequelize.define('admin',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, required: true},
    password: {type: DataTypes.STRING, required: true},
    role: {type: DataTypes.STRING(30), defaultValue: "Admin", required: true},
})

const RefreshToken = sequelize.define('refreshToken',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    refreshToken: {type: DataTypes.STRING, required: true}
})

const Orders = sequelize.define('orders',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING(30)},
    order_text: {type: DataTypes.STRING},
    order_status: {type: DataTypes.BOOLEAN, defaultValue: false},
})

const Prices = sequelize.define('prices',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    cost: {type: DataTypes.STRING}
})

const ServiceCategories = sequelize.define('serviceTypes',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
})

Admin.hasMany(Orders);
Orders.belongsTo(Admin)

Admin.hasMany(RefreshToken)
RefreshToken.belongsTo(Admin)

ServiceCategories.hasMany(Prices);
Prices.belongsTo(ServiceCategories);

module.exports = {
    Admin,
    RefreshToken,
    Orders,
    Prices,
    ServiceCategories
}