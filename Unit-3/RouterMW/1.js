const express=require('express');
const app=express();
const router=express.Router();
const PORT=8000;
router.use(function(req,res,next){
    console.log("MiddleWare called")
    next();
});
router.use(function(req,res){
    // console.log("/grv request called");
    res.send("Greetings from nodejs");
})
app.use('/grv',router);
app.listen(PORT,function(err){
    if(err)console.log(err);
    console.log(`Server listening  on PORT ${PORT}`);
});