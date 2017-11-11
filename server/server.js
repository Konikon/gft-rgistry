const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;
const gifteeRoutes = require("./routes/giftee");

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/giftees", gifteeRoutes)


mongoose.connect("mongodb://localhost/giftees", (err)=>{
  if (err) throw err;
  console.log("connected to the database");
});

app.listen(PORT, ()=>{
  console.log("server is spinning on port " + PORT);
})
