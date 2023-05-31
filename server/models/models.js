const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, required: true},
    password: {type: DataTypes.STRING, required: true},
    role: {type: DataTypes.STRING(30), defaultValue: "USER", required: true},
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
    order_status: {type: DataTypes.BOOLEAN, defaultValue: "true"},
})

User.hasMany(RefreshToken)
RefreshToken.belongsTo(User)


module.exports = {
    User,
    RefreshToken,
    Orders
}