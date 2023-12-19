const express = require("express");
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
app.use(cors());
const Port = process.env.PORT;

app.use(express.json());
app.use('/', routes);

app.get('/',(req,res)=>{
    res.send("hello render")
})

app.listen(Port, (req, res) => {
    console.log("THe port is running at the port of 6500");
})

const URL = process.env.Mongo_DB || 6500;
const dbName = 'Todo';

mongoose.connect(URL, {
    dbName: dbName
}).then(() => {
    console.log("mongoose connected successfully");
}).catch(err => console.log(err));