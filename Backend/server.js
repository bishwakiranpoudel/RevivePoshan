require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error)=> console.error(error))
db.once('open',()=> console.log('Connected to database'))

app.use(express.json())

const retailerRouter = require('./routes/retailers')
app.use('/retailers', retailerRouter)

const charityRouter = require('./routes/charitys')
app.use('/charities', charityRouter)

const authRouter = require('./routes/auth')
app.use('/user', authRouter)

const emailRouter = require('./routes/email')
app.use('/email', emailRouter)



app.listen(3000, ()=> console.log("server started"))

