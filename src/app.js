const path = require("path")
const express = require("express");
const hbs = require("hbs");

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
        "location": "Wroclaw"
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
    if (!req.query.address) {
        return res.send({
            error: "Your must provide a location address."
        })
    }

    res.send([{
        forecast: "It's sunny, 9 degree out there.",
        "location": req.query.address,
    },])
})

app.get("/products", (req, res) => {
    //add query string >> ?search=games&ratings=5
    if (!req.query.search) {
        return res.send({
            error: "You must provide a search term."
        })
    }
    console.log(req.query);
    res.send({
        products: req.query
    })
})

app.get("*", (req, res) => {
    res.render("404", {
        "title": "Page not found.",
        "errorCode": "404"
    })
})


app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
})  