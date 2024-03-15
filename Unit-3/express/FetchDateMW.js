// const express=require('express')
// const app=express()
// const requestTime=function(req,res,next){
//     req.requestTime=Date.now();
//     next();

// };
// app.use(requestTime)
// app.get('/',(req,res)=>{
//     let responseText="Hello World!<br>";
//     responseText += '<small>Requested at: ${req.requestTime}</small>';
//     res.send(responseText)
// });
// app.listen(3000)


// const express = require('express');
// const app = express();

// const requestTime = function(req, res, next) {
//     req.requestTime = Date.now();
//     next();
// };

// app.use(requestTime);

// app.get('/', (req, res) => {
//     let responseText = 'Ram Ram!<br>';
//     responseText += <small>Requested at: ${req.requestTime}</small>;
//     res.send(responseText);
// });

// app.listen(3000);

const express = require('express');
const app = express();
const requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
};
app.use(requestTime);
app.get('/', (req, res) => {
    let responseText = "Hello World!<br>";
    responseText += `<small>Requested at: ${req.requestTime}</small>`;
    res.send(responseText);
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
