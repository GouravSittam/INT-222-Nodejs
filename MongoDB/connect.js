const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/test')
.then(()=>{
    console.log('Connected sucessfully');
}).catch((err)=>{
    console.error(`Connection error: ${err}`);
})
const signupsch=new mongoose.Schema({
    fname:{
        type:{
            type:String,
            required:true,
            trim:true
        },
        lname:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            unique:true,
            trim:true
        },
        password:{
            type:String,
            required:true,
            trim:true
        }
    }
})
const student=mongoose.model('Register',signupsch);
module.exports=student;
