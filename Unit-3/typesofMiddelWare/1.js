const express=require('express');
const app=express();
const PORT=8000;
app.use(function(req,res,next){
    console.log("MiddleWare called")
    next();
});
app.get('/grv',function(req,res){
    console.log("/grv request called");
    res.send("Welcome to nodejs");
})
app.listen(PORT,function(err){
    if(err)console.log(err);
    console.log(`Server listening  on PORT ${PORT}`);
});