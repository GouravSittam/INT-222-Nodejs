const express = require('express');

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.post('/', (req, res) => {
    res.send('This is a POST request');
});


app.delete('/', (req, res) => {
    res.send('This is a DELETE request');
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});