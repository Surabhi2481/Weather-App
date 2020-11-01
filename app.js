const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=e595e2643f3d5de0b889feac372c432c&query=23.7957,86.4304'

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})