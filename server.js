function Location(name,location,latitude,longitude){
    this.search_query =  name,
    this.formatted_query = location,
    this.latitude = latitude,
    this.longitude = longitude
}
function Weather(description,valid_date){
    this.forecast = description,
    this.time = valid_date;
}
const express = require("express") 
const app = express(); 
require('dotenv').config(); 
const PORT = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());
app.get('/location',(request,response,next)=>{
    const arrData = require('./data/location.json');
    const data = arrData[0];
    response.status(200).json(new Location(request.query.city,data.display_name,data.lat,data.lon));
    next();
})
app.get('/weather',(request,response)=>{
    const objData = require('./data/weather.json');
    const weatherData = objData.data;
    const returnedData = [];
    weatherData.forEach(a=>{
        returnedData.push(new Weather(a.weather.description,a.valid_date))
    })
    response.status(200).json(returnedData);
})
app.listen(PORT);