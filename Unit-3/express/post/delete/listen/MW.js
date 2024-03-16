const express = require('express');

const app = express();
const port = 3000;


app.get('/user', (req, res) => {
    res.send('Hello World!');
});


app.post('/user', (req, res) => {
    res.send('This is a POST request');
});


app.delete('/user', (req, res) => {
    res.send('This is a DELETE request');
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});