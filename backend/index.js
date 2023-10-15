const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/user");
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
