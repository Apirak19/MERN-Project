const express = require('express')
const mongoose = require('mongoose')

const app = express()

const connectDB = async () => {
   mongoose.connect('mongodb://localhost:27017/')
}

app.listen(5000, () => {
   console.log("server started on port 5000");
})