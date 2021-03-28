const express = require("express")
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const { response } = require("express");
app.use(cors());
app.get('/',(request,response)=>{
    response.status(200).json(require('./data/location.json'));
})