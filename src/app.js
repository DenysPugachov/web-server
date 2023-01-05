const path = require("path")
const express = require("express");

const app = express()
const port = 3000


// Define path for express config
const publicDirPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "templates")


// setup "Handlebars templates" (create dynamic pages - reuse code (<footer>, <header>))
app.set("view engine", "hbs")
app.set("views", viewsPath)


// setup static directory to serve
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