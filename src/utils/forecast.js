


const request = require("request")

// callback(error, wetherInfoObj)
const forecast = (lat, lon, callback) => {
    //safely parse string in to URI (? >> %3F)
    const codedCoordinates = encodeURIComponent(`${lat},${lon}`)
    const url = `http://api.weatherstack.com/current?access_key=886ded7a7622bf45e9faeef35df7cec3&query=${codedCoordinates}`

    request({ url, json: true }, (err, { body }) => {
        if (err) {
            callback(`Unable to connect to weather service. Please check your network.`, undefined)
        } else if (body.error) {
            callback('Error :>> ', body.error.info, undefined)
        } else {
            const { temperature, feelslike } = body.current
            callback(undefined, {
                temperature,
                feelslike
                // body
            })
        }
    })
}

module.exports = forecast