const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
   name: String,
   Tel: String,
   email: String
})

module.exports = mongoose.model("contacts", contactSchema)