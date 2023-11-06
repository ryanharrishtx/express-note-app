const notes = require('express').Router();
const path = require('path');
const fs = require('fs');
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsutils');

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
    };
    readAndAppend(newNote, './db/db.json');
    res.send('New note added!');

});
// I want to add a note to my db so I need to do a POST request

module.exports = notes;