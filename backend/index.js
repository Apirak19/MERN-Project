const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Product = require('./db/Product')
const app = express();

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
   res.end("api loading")
})

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject()
  res.send(result);
});


app.post("/add", async (req, res) => {
  let product = new Product(req.body)
  let result = await product.save()
  res.send(result)
})

app.get("/products", async (req, res) => {
  let products = await Product.find()
  if (products.length > 0) {
    res.send(products)
  } else {
    res.send("nothing found")
  }
})

app.post("/login", async (req, res) => {
  let user = await User.findOne(req.body).select("-password")
  if (req.body.email && req.body.password) {
    res.send(user)
  } else {
    res.send("no reult found")
  }
})

app.listen(5000, (err) => {
  if (err) {
    console.error("There is an error");
  } else {
    console.log("server started on port 5000");
  }
});
