const express = require("express");
const db = require("./models/index");
require('dotenv').config();


const app = express();



//connect to db
db.sequelize.sync();



const PORT = process.env.SERVER_PORT;
app.listen(PORT, (req, res)=>{
    console.log(`server started at ${PORT}`);
})