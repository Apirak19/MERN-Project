const express = require("express");
const mongoose = require("mongoose");

const app = express();

const connectDB = async () => {
   try {  
      mongoose.connect("mongodb://localhost:27017/MERN");
      const productSchema = new mongoose.Schema({
         name: String,
         price: Number,
      });
      const product = mongoose.model("product", productSchema);
      const data = await product.find();
      console.warn(data);
   }
  catch (error) {
console.error("Error:", error);
}
};

connectDB();

app.listen(5000, (err) => {
   if (err) {
      console.error("There is an error");
   }
   else {
      console.log("server started on port 5000");
   }
});
