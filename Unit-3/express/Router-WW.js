const express=require("express")
const app=express()
const router=express.Router()
const PORT=8000
router.use(function (req, res, next){
    console.log("Middleware called")
    next()
})
router.use(function(req,res,next){
    res.send("Greetings from Node.js is a warm welcome often encountered in the realm of web development, particularly when working with the Node.js runtime environment. This phrase encapsulates the essence of Node.js as a powerful platform for building scalable, efficient, and high-performance applications. With its event-driven, non-blocking I/O model, Node.js enables developers to create server-side applications using JavaScript, a language traditionally associated with client-side scripting. This convergence of server-side and client-side development within a single language fosters code reusability, simplifies the development process, and accelerates the deployment of modern web applications. From handling HTTP requests to managing databases and orchestrating microservices, Node.js empowers developers to craft responsive, real-time applications that deliver a seamless user experience. So, whenever you encounter the greeting it signifies not just a mere salutation but a celebration of the dynamic capabilities and limitless possibilities that Node.js brings to the world of software development.")
})
app.use('/user',router)
app.listen(PORT,function(err){
    if(err)console.log(err)
    console.log("server listening on PORT",PORT)
})