// imports
const express = require("express");
const app = express();
const port = 3000



// static files
app.use(express.static("public"))
app.use("/css", express.static(__dirname+'public/css'))
app.use("/js", express.static(__dirname+'public/js'))
app.use("/img", express.static(__dirname+'public/img'))

// set views 
app.set("views", "./views")
app.set("view engine", "ejs")

app.get("", (req, res) => {
    res.render("index", {text : "The surname is : parimal mahindrakar"})
})
app.get("/about", (req, res) => {
    res.render("about", {text : "This is an about page"})
})


// listen on port 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})


