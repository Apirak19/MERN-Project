const express = require("express");
require("./db/config");
const User = require('./db/user')
const app = express();

app.post("/register", (req, res) => {
   res.send("api in progeress...")
})

app.listen(5000, (err) => {
  if (err) {
    console.error("There is an error");
  } else {
    console.log("server started on port 5000");
  }
});
