const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=e595e2643f3d5de0b889feac372c432c&query=23.7957,86.4304&units=f'

request({url: url, json: true}, (error, response) => {
    //const data = JSON.parse(response.body)
    //console.log(response.body.current)

    console.log(response.body.current.weather_descriptions[0] + '. It is currently '+ response.body.current.temperature +' degrees out. There is a '+ response.body.current.precip + '% chance of rain.')
})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3VyYWJoaTEwMDkiLCJhIjoiY2tneXlvNzVsMG1rMTJ1cGR3anpzNng2aSJ9.gssFO5fbks34PQyxnHofYw&limit=1'

request({url: geocodeURL, json: true}, (error, response) => {
    const longitude = response.body.features[0].center[0]
    const latitude = response.body.features[0].center[1]
    console.log('Longitude: ' + longitude)
    console.log('Latitude: ' + latitude)
})