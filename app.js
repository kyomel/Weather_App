const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=2e5d71be6871e6bce896c6a6c1817ca8&query=37.8267,-122.4233';

request({ url: url, json: true }, (err, res) => {
    const data = JSON.parse(res.body);
    console.log(data.current);
})