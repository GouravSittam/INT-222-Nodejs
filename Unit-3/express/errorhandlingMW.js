const express=require("express");
const app=express();
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send("Something Went Wrong");
});
app.get('/error', (req, res,next) => {
    const err=new Error("International Error");
    next(err);
});
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});