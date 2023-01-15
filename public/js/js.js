console.log("Hello form about page")

const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/Boston.json?access_token=pk.eyJ1IjoiZGVuLTIxIiwiYSI6ImNrdjZvY2hsbjFlYWwybm8wNDZjMDhyamoifQ.vlC2ysnO6PU07Ln1ERWQrg&limit=1`

fetch(url).then(response => {
    response.json().then(data => {
        if (data.features.length === 0) {
            console.log(`Theare is not mathching result found.Please specify search term.`);
        } else {
            console.log('Place', data.features[0].place_name)
            console.log('coordinates :>> ', data.features[0].geometry.coordinates);
        }
    })
}) 