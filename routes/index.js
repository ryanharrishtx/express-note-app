const express = require('express');
const app = express();
const testRoutes = require('./testRoutes');
const notes = require('./notes');


app.use('/test', testRoutes);
app.use('/notes', notes);


module.exports = app;
