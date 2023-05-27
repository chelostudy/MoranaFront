const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, required: true},
    password: {type: DataTypes.STRING, required: true},
    role: {type: DataTypes.STRING, defaultValue: "USER", required: true},
})

const RefreshToken = sequelize.define('refreshToken',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    //user_id: {type: DataTypes.INTEGER, required: true },
    refreshToken: {type: DataTypes.STRING, required: true}
})
User.hasMany(RefreshToken)
RefreshToken.belongsTo(User)


module.exports = {
    User,
    RefreshToken
}