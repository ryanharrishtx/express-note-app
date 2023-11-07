const notes = require('express').Router();
const path = require('path');
const fs = require('fs');
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsutils');
const { v4:uuidv4 } = require('uuid');  

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})
notes.post('/', (req, res) => {
    console.log(req.method);
    console.log(req.body);
    const { title, text } = req.body;
    console.log(title);
    console.log(text);
    const newNote = {
        title,
        text,
        id: uuidv4()
    };
    readAndAppend(newNote, './db/db.json');
    res.send('New note added!');

});
notes.delete('/:id', (req, res) => {
    const noteId = req.params.id;
    console.log(noteId);
    readFromFile('./db/db.json').then((data) => {
        const parsedData = JSON.parse(data);
        const newData = parsedData.filter((note) => note.id !== noteId);
        writeToFile('./db/db.json', newData);
        res.send('Note deleted!');
    });
});

module.exports = notes;