const mongoose = require("mongoose");

const EmployeesSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobileno: String,
  designation: String,
  gender: String,
  course: String,
  img: String,
});

const employesModel = mongoose.model("Employees", EmployeesSchema);
module.exports = employesModel;
