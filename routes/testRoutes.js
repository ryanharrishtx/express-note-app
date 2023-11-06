const test = require('express').Router();

test.get('/test', (req, res) => {
    res.send('test');
})

module.exports = test;