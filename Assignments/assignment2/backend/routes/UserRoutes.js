const express = require('express')
const UserModel = require('../models/UserModels')

const routes = express.Router()

//CREATE ACCOUNT - POST********************************************************************
// Allow user to create new account
//http://localhost:3030/api/v1/user/signup
routes.post('/signup', async (req, res) => {
    try{
        const newUser = new UserModel({
            ...req.body
        })
        await newUser.save()
        console.log("New User created: " + newUser + "\n------------------------------------------------------------------------------------------------------------------")
        res.status(201).send(newUser)
    }catch(error){
        res.status(500).send(error)
    }
})


//LOGIN - POST********************************************************************
//Allow user to access the system
//http://localhost:3030/api/v1/user/login
routes.post('/login', async (req, res) => {
    const {username, password} = req.query

    try{
        const user = await UserModel.findOne({ $or: [{ username: username }, { email: username }] })
        if(user){
            if(password == user.password){
                console.log("USER LOOGED IN: " + user)
                res.send({
                    username: username,
                    password: password
                })
            }else{
                res.send({
                    status: false,
                    message: 'Invalid Username and/or password'
                })
            }
        }else{
            res.send({
                status: false,
                message: 'Invalid Username and/or password'
            })
        }

    }catch(error){
        res.status(500).send(error)
    }
})

module.exports = routes