const express = require ("express")
require("./connect")
const app = express();
const body1 = require('body-parser');
const Student1 = require("./connect");
const encoded = body1.urlencoded({extended: false});
app.get("/", (req,res)=> {
res.sendFile(__dirname+ '/signup.html');
})

app.post('/signup',encoded,async(req,res)=>{

    let student = await Student1(req.body);
    student.save()
    .then(()=>{
        res.send(`
        <h2>User registered succesfully</h2>
    <p> Click <a href = "/login">here </a> to login or click <a href = "/">here</a>register for aanother user</p>
    `);
    })
    .catch(err => console.log(err))
})

app.get('/login', (req , res)=>{
    const username1 = req.body.username;
    const password1 = req.body.password;
    Student1.findOne({fname : username1 , password: password1})
    .then(student => {
        if (student){
            res.redirect('/dashboard');
        }else{
            res.status(401).send('Invalid username or password');
        }
    })
    .catch(error => {
        console.error(error);
        res.status(500).send("Internal server error");
    });
})

app.get('/dashboard' , (req, res) => {
    res.send("welcome user")
})

app.listen(8080, ()=>{
    console.log("Server is running on port 8080")
})