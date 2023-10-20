//IMPORT LIBRARIES
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
require('dotenv/config')

//ADD ROUTES 
const postsRoute = require('./routes/posts')

app.use(bodyParser.json())
app.use('/posts', postsRoute)


app.get('/', (req,res)=>{
    res.send("Homepage - New whip whose this")
})

mongoose.connect(process.env.DB_CONNECTOR).then(()=>{
    console.log('We have connected to the bloody DB')
})

app.listen(3000, ()=>{
    console.log("Hoston we sadly don't have a problem. GG")
})