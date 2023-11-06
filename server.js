const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');

const PORT = process.env.port || 3001;

const app = express();

// Import custom middleware, "cLog"
app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes' , (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});
// Wildcard to handle 404
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/404.html'));
});


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);