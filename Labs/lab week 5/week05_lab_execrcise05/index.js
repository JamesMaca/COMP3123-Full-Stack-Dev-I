const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
const path = require("path")
const userData = require('./user.json')

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req,res) => {
  res.sendFile(__dirname + "/public/home.html")
  // res.send('This is home router');
});

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req,res) => {
  res.sendFile(__dirname + "/user.json")
  // res.send('This is profile router');
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
//http://localhost:8081/login?username=bret&password=bret@123
//http://localhost:8081/login?username=brt&password=bret@123
//http://localhost:8081/login?username=bret&password=bret@12
router.get('/login', (req,res) => {

  const {username, password} = req.query;

  if(userData.username == username && userData.password == password){
        res.send({
          status: true,
          message: "User Is valid"
        });
      }else if(userData.username !== username){
        res.send({
          status: false,
          message: "User Name is invalid"
        });
      }else if(userData.password !== password){
        res.send({
          status: false,
          message: "Password is invalid"
        });
      }
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
//http://localhost:8081/logout?username=bret
router.get('/logout', (req,res) => {
  const {username} = req.query;
  if(userData.username == username){
    res.send(`<h1>${username} successfully logout</h1>`)
  }
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));