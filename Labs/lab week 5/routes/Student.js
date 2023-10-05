var express = require('express')

var routes = express.Router()

//http://localhost:8089
routes.get("/", (req, res) =>{
    res.send("<h1>Student - GET</h1>")
})

//http://localhost:8089/student/fulltime
routes.route("/fulltime")
    .get((req, res) =>{
        res.send("<h1>Full Time Student - GET - </h1>")
    })
    .post((req, res) =>{
        res.send("<h1>Full Time Student - POST - </h1>")
    })
    .put((req, res) =>{
        res.send("<h1>Full Time Student - Put - </h1>")
    })

//http://localhost:8089/student/partime
routes.route("/partime")
    .get((req, res) =>{
        res.send("<h1>Part Time Student - GET - </h1>")
    })
    .post((req, res) =>{
        res.send("<h1>Part Time Student - POST - </h1>")
    })

module.exports = routes