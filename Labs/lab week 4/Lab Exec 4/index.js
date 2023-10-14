var express =require('express')

const SERVER_PORT = 8089

var app = express()

app.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome to Express Server</h1>")
    res.send()
})

app.get("/hello", (req, res) => {
    res.send("Hello Express JS")
})

//Querystring
app.get("/user", (req, res) => {
    res.json(req.query)
})


//Path param
app.post("/user/:fname/:lname", (req, res) => {
    const {fname, lname} = req.params
    res.send(`welcome ${fname} ${lname}`)
})

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localthost: ${SERVER_PORT}`)
})