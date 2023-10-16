const express = require("express")
const NoteModel = require('../models/NotesModel');

const routes = express.Router()

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
routes.post("/notes", async (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to save the note
    console.log(req.body)
    try{
        const newNote = new NoteModel({
            ...req.body
        })
        await newNote.save()
        res.status(200).send(newNote)
    }catch(error){
        res.status(500).send(error)
    }

});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
routes.get('/notes', async (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to returns all note
    try{
        const noteList = await NoteModel.find({})
        console.log("ALL NOTES: \n" + noteList)
        res.status(200).send(noteList)
    }catch(error){
        res.status(500).send(error)
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
routes.get('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
    try{
        const note = await NoteModel.findById(req.params.noteId)
        if(note){
            console.log("Note found: " + note)
            res.status(200).send(note)

        }else{
            console.log("No Notes found")
            res.status(404).send("No Notes found")
        }

    }catch(error){
        res.status(500).send(error)
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
routes.put('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid
    try{
        const updatedNote = await NoteModel.findByIdAndUpdate(req.params.noteId, req.body, { new: true })
        console.log("UPDATED NOTE INFO: \n" + updatedNote)
        res.status(200).send(updatedNote)
    }catch(error){
        res.status(500).send(error)
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
routes.delete('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
    try{
        const dltNote = await NoteModel.findByIdAndDelete(req.params.noteId)
        if(!dltNote){
            console.log("Note not found")
            res.status(404).send("Note not found")
        }else{
            console.log("Note Deleted: " + dltEmp)
            res.status(200).send("Note deleted: " + dltEmp)
        }
    }catch(error){
        res.status(500).send(error)
    }
});

module.exports = routes
