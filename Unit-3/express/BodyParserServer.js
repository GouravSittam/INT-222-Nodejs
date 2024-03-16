const express=require('express');
const bodyParser=require("body-parser");
const app=express();
const port=8000;
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());
app.post('/BodyParser',(req,res)=>{
    const{username,password}=req.body;
    res.send(`Login successful. Welcome, ${username}!`);
});
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/BodyParse.html')
});
app.listen(port,()=>{
    console.log(`Server running at http://localhost:$ {port}`);
});