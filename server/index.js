const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const PORT = config.get("serverPort")
const authRouter = require("./routes/auth.routes")
const app = express()
const corsMiddleWare = require('./middleware/cors.middleware')

app.use(corsMiddleWare)
app.use(express.json())
app.use("/api/auth", authRouter)

const start = async () => {
    try {
        await mongoose.connect(config.get("mongodbURL"))

        app.listen(PORT, () => {
            console.log("server started on port " + PORT)
        })
    } catch (err) {

    }
}

start() 