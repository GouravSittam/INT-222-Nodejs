const express = require('express');
const app = express();
const PORT = 8000;
app.use(function (req, res, next) {
    console.log("MiddleWare called");
    next();

});
app.get('/user', function (req, res) {
    console.log("/user request called");
    res.send('Welcome to nodejs');
});
app.listen(PORT, function (err) {
    
        if (err) {
            console.log(err);}
            else{
        console.log('Server is listening on $(PORT)');
    }
});