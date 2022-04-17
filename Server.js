console.clear();
const express = require("express");
require("dotenv").config();
const connectDB = require("./config/dbconnect");
const app = express();
connectDB();

// routes
app.use(express.json());
app.use("/users", require("./routs/users"));
app.use("/Contact", require("./routs/contact"));

const Port = process.env.PORT;
app.listen(Port, (err) =>
  err ? console.log(err) : console.log(`server is running on ${Port}`)
);
