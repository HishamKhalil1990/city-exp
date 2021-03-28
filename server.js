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
app.get('/location',(request,response)=>{
    const arrData = require('./data/location.json');
    const data = arrData[0];
    console.log(request.query);
    response.status(200).json(new Location('seattle',data.display_name,data.lat,data.lon));
})
app.listen(PORT);