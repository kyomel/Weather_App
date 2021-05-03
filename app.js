const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=2e5d71be6871e6bce896c6a6c1817ca8&query=37.8267,-122.4233&units=m';

request({ url: url, json: true }, (err, res) => {
    console.log(`${res.body.current.weather_descriptions[0]}. It is currently ${res.body.current.temperature} degrees out. It feels like ${res.body.current.feelslike} degress out`);
})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Yogyakarta.json?access_token=pk.eyJ1Ijoia3lvbWVsIiwiYSI6ImNrbzZ6czcydjEzbmUyb3M3dDNyM2FnemgifQ.s4vs7jq4Z926xDxvymxSOA&limit=1';

request({ url: geocodeURL, json:true }, (err, res) => {
    const latitude = res.body.features[0].center[1];
    const longitude = res.body.features[0].center[0];
    console.log(latitude, longitude);
})