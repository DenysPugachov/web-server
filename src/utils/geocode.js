/*
return lat, lon of given address:string
*/

const request = require("request")

const geocode = (address, callback) => {
    //safely parse string in to URI (? >> %3F)
    const codedAddress = encodeURIComponent(address)
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${codedAddress}.json?access_token=pk.eyJ1IjoiZGVuLTIxIiwiYSI6ImNrdjZvY2hsbjFlYWwybm8wNDZjMDhyamoifQ.vlC2ysnO6PU07Ln1ERWQrg&limit=1`

    request({ url, json: true }, (err, res) => {
        if (err) {
            return callback(`Unable to connect to the service. Please check your network.`, undefined)
        }

        if (res.features.length === 0) {
            callback(`Theare is not mathching result found. Please specify search term.`, undefined)
        } else {
            const { center, place_name } = res.features[0]
            callback(undefined, {
                latitude: center[1],
                longitude: center[0],
                location: place_name,
            })
        }
    })
}

module.exports = geocode