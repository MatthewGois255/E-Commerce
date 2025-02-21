const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const user_route = require('./routes/user')

dotenv.config()

const app = express()

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB connection successfull!")).catch((err)=>{console.log(err)})

// routes
app.use(express.json())
app.use('/api/users', user_route)

app.listen(process.env.PORT, () => {
    console.log("Running on 5000 port")
})