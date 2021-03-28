function Location(name,location,latitude,longitude){
  this.search_query =  name,
  this.formatted_query = location,
  this.latitude = latitude,
  this.longitude = longitude
}
const express = require("express")
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());
app.get('/',(request,response)=>{
    const data = require('./data/location.json');
    response.status(200).json(new Location(query.search_query,query.location,data.lat,data.lon));
})