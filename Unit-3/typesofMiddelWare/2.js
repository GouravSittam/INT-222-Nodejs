const express=require('express');
const app=express();
const PORT=8000;
app.get('/grv',function(req,res){
    res.send("Handled get Request");
});
app.post('/grv',function(req,res){
    res.send("Handled Post Request");
});
app.delete('/remove',function(req,res){
    res.send("Handled DELETE Request");
});
app.listen(PORT,function(err){
    if(err)console.log("ERROR in server setup");
    console.log(`Server listening  on PORT ${PORT}`);
});