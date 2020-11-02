const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=e595e2643f3d5de0b889feac372c432c&query=23.7957,86.4304&units=f'
// //const url = 'http://api.weatherstack.com/current?access_key=e595e2643f3d5de0b889feac372c432c&query=&units=f'


// request({url: url, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect to weather service!')
//     }
//     else if(response.body.error){
//         console.log('Unable to find location')
//     }
//     else{
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently '+ response.body.current.temperature +' degrees out. There is a '+ response.body.current.precip + '% chance of rain.')
//     }
    
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3VyYWJoaTEwMDkiLCJhIjoiY2tneXlvNzVsMG1rMTJ1cGR3anpzNng2aSJ9.gssFO5fbks34PQyxnHofYw&limit=1'
// //const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/123something.json?access_token=pk.eyJ1Ijoic3VyYWJoaTEwMDkiLCJhIjoiY2tneXlvNzVsMG1rMTJ1cGR3anpzNng2aSJ9.gssFO5fbks34PQyxnHofYw&limit=1'

// request({url: geocodeURL, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect to map service!')
//     }
//     else if(response.body.features.length === 0){
//         console.log('Unable to find location. Try another search.')
//     }
//     else{
//         const longitude = response.body.features[0].center[0]
//         const latitude = response.body.features[0].center[1]
//         console.log('Longitude: ' + longitude)
//         console.log('Latitude: ' + latitude)
//     }

// }) 

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic3VyYWJoaTEwMDkiLCJhIjoiY2tneXlvNzVsMG1rMTJ1cGR3anpzNng2aSJ9.gssFO5fbks34PQyxnHofYw&limit=1'

    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to location services', undefined)
        }
        else if(response.body.features.length === 0){
            callback('Unable to find location. Try another search.', undefined)
        }
        else {
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

geocode('Philadelphia', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})