require('dotenv').config()



const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT || 5000
const router = require('./router/index')


const app = express()

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use('/api', router);

const start = async () => {
    try{
        console.log(process.env.DB_PORT + process.env.DB_HOST)
        await sequelize.authenticate()
        console.log(process.env.DB_PORT + process.env.DB_HOST)
        await sequelize.sync()
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    }catch (e) {
        console.log(e)
    }
}

start();