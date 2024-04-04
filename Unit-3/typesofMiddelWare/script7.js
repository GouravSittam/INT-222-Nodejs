const express=require('express');
const bodyParser=require('body-parser');
const session=require('express-session');
const app=express();
const port=1999;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(session({
    secret:'your_secret_key',
    resave:false,
    saveUninitialized: true
}));
let user=[
    {id: 1,username: 'Gourav',password:'password1'},
    {id: 2,username: 'Gouravc',password:'password2'}
];
function authentication(req,res,next){
    if(req.session && req.session.user){
        return next();
    }else{
        return res.redirect('/login');
    }
}
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+"/login.html");
});
app.post('/login',(req,res)=>{
    const { username,password}=req.body;
    const user=user.find(u => u.username === username && u.password=== password);
    if(user){
        req.session.user=user;
        res.redirect('/protected');
    }else{
        res.status(401).send('Invalid username or password');
    }
});
app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/login');
});
app.get('/protected', authentication, (req, res) => {
    res.send(`Welcome ${req.session.user.username}! This is a protected route. <a href="/logout">Logout</a>`);
});
app.listen(port, () => {
    console.log(`Server is listening on port 8000`);
});

