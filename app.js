const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Yogyakarta', (err, data) => {
    console.log('Error', err);
    console.log('Data', data);
})

forecast(-7.80139, 110.36444, (err, data) => {
    console.log('Error', err);
    console.log('Data', data);
})

