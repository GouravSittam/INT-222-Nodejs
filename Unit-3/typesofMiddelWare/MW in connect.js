const connect=require('connect');
const app=connect();
function logger(req,res,next){
    console.log(`${req.method} ${req.url}`);
    next();
};
app.use(logger);
app.use((req,res)=>{
    res.end("Hello World!");
});
app.listen(8000,()=>{
    console.log("server is running in port 8000");
});