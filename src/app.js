const path = require("path")
const express = require("express");

// console.log('__dirname :>> ', __dirname); // ../src
// console.log('__filename :>> ', __filename); // ../src/app.js
// console.log(path.join(__dirname, "../.."))

const app = express()
const port = 3000
const publicDirPath = path.join(__dirname, "../public")


app.set("view engine", "hbs") // setup "Handlebars templates" (create dynamic pages - reuse code (<footer>, <header>))
app.use(express.static(publicDirPath))

app.get("", (req, res) => {
    res.render("index", {
        "title": "Weather App",
        "name": "Alice"
    })
})

app.get("/about", (req, res) => {
    res.render("about", {
        "title": "Weather App",
        "name": "Alice",
        "copyright": "Den_21"
    })
})

app.get("/help", (req, res) => {
    res.render("help", {
        "title": "Weather App",
        "name": "Alice",
        "copyright": "Den_21"
    })
})

app.get("/weather", (req, res) => {
    res.send([{
        "latitude": "51.3333",
        "longitude": "17.0000",
        "location": "Wroclaw",
    },])
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
})