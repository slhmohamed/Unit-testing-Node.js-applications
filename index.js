const express = require("express");
const path = require("path");
require("dotenv").config();
const config = require("./config")
const PORT = config.port || 3000;
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { connect } = require("./db/connectDB");
 
const { baseUrl } = require("./config")

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());
//routes
const bookRoutes=require("./routes/bookRoutes");

app.use("/api",bookRoutes);

connect();

app.listen(PORT,()=>{
    console.log(`app running on port ${PORT}`);
})
module.exports = app;