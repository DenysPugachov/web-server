const path = require("path")
const express = require("express");
const hbs = require("hbs")

const app = express()
const port = 3000


// Define path for express config
const publicDirPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")


// setup "Handlebars templates" (create dynamic pages - reuse code (<footer>, <header>))
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath) // were to look for header template

// setup static directory to serve
app.use(express.static(publicDirPath))


app.get("", (req, res) => {
    res.render("index", {
        "title": "Weather main page",
        "name": "Alice"
    })
})

app.get("/about", (req, res) => {
    res.render("about", {
        "title": "About me",
        "name": "Alice",
        "copyright": "Den_21"
    })
})

app.get("/help", (req, res) => {
    res.render("help", {
        "title": "Help page",
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