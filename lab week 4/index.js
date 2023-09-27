var express = require('express')

const SERVER_PORT = 8089

var app = express()

//Static middlerware
app.use("/test", express.static("./public"), "/")


// app.get("/index", (req, res) => {
//     res.sendFile(__dirname + "/public/index.html")
// })

app.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome to Express Server</h1>")
    res.send()
    // res.end()
})

app.get("/home", (req, res) => {
    
    res.send("<h1>Home Page</h1>")
    
})

app.get("/person", (req, res) => {
    const p ={
        pid: 1,
        pnm: "James MacAloney"
    }
    res.send(p)
    // res.json(p)
})

app.post("/person", (req, res) => {
    const p ={
        pid: 1,
        pnm: "James MacAloney"
    }
    res.send(p)
    // res.json(p)
})

//http://localhost:8089/student/james/macaloney
app.get("/student/:fname/:lname", (req, res) => {
    // res.json(req.params)
    const {fname, lname} = req.params
    res.send(`Welcome ${fname} ${lname}`)
})


//http://localhost:8089/student/student?fnm=james&lnm=macaloney
//Query Parameter
app.get("/emp", (req, res) => {
    // res.json(req.query)
    if(req.query.fnm == undefined){
        res.send("Please send fnm as query parameter")
    }
})



app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localthost: ${SERVER_PORT}`)
})