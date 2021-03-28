function Location(name, location, latitude, longitude) {
    this.search_query = name,
        this.formatted_query = location,
        this.latitude = latitude,
        this.longitude = longitude
}
function Weather(description, valid_date) {
    this.forecast = description,
        this.time = valid_date;
}
function Error() {
    this.status = 500,
        this.responseText = "Sorry, something went wrong"
}
const express = require("express")
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());
app.get('/location', (request, response, next) => {
    const arrData = require('./data/location.json');
    if (request.query.city == 'seattle') {
        const data = arrData[0];
        response.status(200).json(new Location(request.query.city, data.display_name, data.lat, data.lon));
        next();
    } else {
        response.json(new Error());
    }
})
app.get('/weather', (request, response) => {
    const objData = require('./data/weather.json');
    const weatherData = objData.data;
    response.status(200).json(returnedData);
    if (request.query.city == objData.city_name) {
        const returnedData = [];
        weatherData.forEach(a => {
            returnedData.push(new Weather(a.weather.description, a.valid_date));
        });
    } else {
        response.json(new Error);
    }
})
app.listen(PORT);