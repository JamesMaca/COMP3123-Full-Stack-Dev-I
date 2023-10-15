const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const noteSchema = mongoose.Schema({
    noteTitle: String,
    noteDescription : String,
    priority: {
        type: String,
        enum: ['HIGH', 'LOW', 'MEDIUM']
    },
    dateAdded: Date,
    dateUpdated: Date
})

module.exports = mongoose.model("note", noteSchema)