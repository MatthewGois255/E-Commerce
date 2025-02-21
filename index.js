const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB connection successfull!")).catch((err)=>{console.log(err)})

// routes
app.get("/api/test", () => {
    console.log("test is successfull")
})

app.listen(process.env.PORT, () => {
    console.log("Running on 5000 port")
})