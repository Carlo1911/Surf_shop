require('dotenv').config();

const mbxGeoCoding = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mbxGeoCoding({
    accessToken: process.env.MAPBOX_TOKEN
});

async function geocoder(location){
    try{
        let response = await geocodingClient.forwardGeocode({
                query: 'Paris, France',
                limit: 1
            })
            .send();

            console.log(response.body.features[0].geometry.coordinates);
    } catch(err){
        console.log(err.message);
    }
}

geocoder('Alaska, US');