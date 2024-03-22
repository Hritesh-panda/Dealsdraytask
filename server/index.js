const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Usermodule = require("./models/user.js");
const employesModel = require("./models/employees.js");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/DealsDray");
app.post("/userlogin", (req, res) => {
  console.log("login api");
  const { name, password } = req.body;
  Usermodule.findOne({ name: name }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("the password is incorect");
      }
    } else {
      res.json("no record existed");
    }
  });
});
app.post("/userregister", (req, res) => {
  console.log("register file");
  Usermodule.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => {
      req.json(err);
    });
});

app.post("/employee", (req, res) => {
  console.log("employe register");
  employesModel
    .create(req.body)
    .then((employe) => {
      res.json(employe);
    })
    .catch((err) => {
      res.json(err);
    });
});
app.get("/empdata", (req, res) => {
  console.log("get emp data");
  employesModel
    .find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.listen(2124, () => {
  console.log("server is started succesufully");
});
