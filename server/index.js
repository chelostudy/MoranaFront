require('dotenv').config()



const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT || 5000
const router = require('./router/index')
const https = require("https")
const fs = require("fs");

const app = express()

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use('/api', router);




// Create a NodeJS HTTPS listener on port 4000 that points to the Express app
// Use a callback function to tell when the server is created.






const start = async () => {
    try{
        console.log(process.env.DB_PORT + process.env.DB_HOST)
        await sequelize.authenticate()
        console.log(process.env.DB_PORT + process.env.DB_HOST)
        await sequelize.sync()

        https
            .createServer(
                // Provide the private and public key to the server by reading each
                // file's content with the readFileSync() method.
                {
                    key: fs.readFileSync("key.pem"),
                    cert: fs.readFileSync("cert.pem"),
                },
                app
            )
            .listen(80, () => {
                console.log("server is running at port 80");
            });

    }catch (e) {
        console.log(e)
    }
}





start();