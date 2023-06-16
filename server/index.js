require('dotenv').config()

const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const sequelize = require('./db')
const PORT = process.env.PORT || 3000
const router = require('./router/index')
const https = require("https")
const fs = require("fs");
const priceService = require("./services/price-service")

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

        https
            .createServer(
                 //Provide the private and public key to the server by reading each
                 //file's content with the readFileSync() method.
                {
                    key: fs.readFileSync("key.pem"),
                    cert: fs.readFileSync("cert.pem"),
                },
                app
            )
            await priceService.ff()
            .listen(3000, () => {
                console.log("server is running at port 3000");
            });

    }catch (e) {
        console.log(e)
    }
}

start();