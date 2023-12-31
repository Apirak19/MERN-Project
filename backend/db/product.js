const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  userID: String,
  company: String
});

module.exports = mongoose.model("products", productSchema);
