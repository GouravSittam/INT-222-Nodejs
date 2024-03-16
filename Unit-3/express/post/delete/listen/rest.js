const express=require('express');
const app=express();
app.use(express.json());
const courses=[
    {id:1,name:'Node Js'},
    {id:2,name:'HTML'},
    {id:3,name:'CSS'},
    {id:4,name:'JS'},
]
//read Request handlers
app.get('/api/courses',(req,res)=>{
    res.send(courses);
});

app.get('/api/courses/:id',(req,res)=>{
    const course=courses.find(c=>c.id==parseInt(req.params.id));
    res.send(course);
});

//create request handler
app.post('api/courses',(req,res)=>{
    const course={
        id:courses.length+1,
        title:req.body.title
    };
    courses.push(course);
    res.send(course);
});

//update request handler
app.put('/api/courses/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id));
    Object.title=req.body.title;
    res.send(course);
});

//delete request handler
app.delete('/api/courses/:id',(req,res)=>{
    const course=courses.findIndex(c=>c.id===parseInt(req.params.id));
    if(!course) res.status(404).send("No found");
    const index=courses.indexOf(course);
    courses.splice(index,1);
    res.send(course);
});
app.listen(2000);