const express = require("express")
const BookModel = require('../models/Books')

const routes = express.Router()

//Get All Books
// http://localhost:3001/library/books
routes.get("/books", async (req, res) => {

    try{
        const bookList = await BookModel.find({})
        res.status(200).send(bookList)
    }catch(error) {
        res.status(500).send(error)
    }
    

    //res.send({message: "Get All Books"})

})

//Add NEW Book
routes.post("/books", async (req, res) => {
    
    console.log(req.body)
    try{
        const newBook = new BookModel({
            ...req.body
        })
        await newBook.save()
        //BookModel.create({})
        res.status(200).send(newBook)
    }catch(error){
        res.status(500).send(error)
    }

})

//Update existing Book By Id
routes.post("/book/:bookid", (req, res) => {
    res.send({message: "Update existing Book By Id"})
})

//Delete Book By ID
routes.delete("/book/:bookid", async (req, res) => {
    try{
        // await BookModel.deleteOne({ _id : req.params.bookid })
        await BookModel.findOneAndDelete(req.params.bookid)
        if(!book){
            res.status(200).send({ message: "Book Not Found"})
        }else{
            res.status(200).send(book)
        }
    }catch(error){
        res.status(500).send(error)
    }


    //res.send({message: "Delete Book By ID"})
})

//Get Book By ID
routes.get("/book/:bookid", (req, res) => {
    // res.send({message: "Get Book By ID"})
})

//Get All Books in sorted order
routes.get("/books/sort", (req, res) => {
    res.send({message: "Get All Books in sorted order"})
})

module.exports = routes