const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = 3000;

let cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://admin-gobind:admin@cluster0.5773w.mongodb.net/user"
);

const userSchema = new mongoose.Schema({
  name: String,
  img: String,
  email: String,
  phone: String,
  website: String,
});

const User = new mongoose.model("User", userSchema);

app.get("/users", (req, res) => {
  User.find().then((data) => {
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
