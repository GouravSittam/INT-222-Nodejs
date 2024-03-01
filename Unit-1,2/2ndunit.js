// var fs = require('fs')
// fs.readFile('file.txt', 'utf8', function(err,data){
//     if(err){
//         console.error("error is there")

//     }

//     else{
//         console.log(data);
//     }
// })
// function square(n){
//     return n*n;
// }
// var result=square(5);
// console.log(`The square of 5 is ${result}`);



// var fs = require('fs')
// fs.readFile('file.txt', 'utf8')
// {
//     try{
//         (console.log(data))
//     }
//     catch(e){
//         console.log("Error:")
// }
// }
// function square(n){
//     return n*n;
// }
// var result=square(5);
// console.log(`The square of 5 is ${result}`);



// var fs=require('fs')
// fs.readFileSync('file.txt','utf-8')
// {
//     try
//     {
//         console.log(data);
//     }
   
//     catch(e){
//         console.error('error')
//     }
// }
// function square(n){
//     return n*n;
// }
// var result=square(5);
// console.log(result);



// var fs= require('fs');
// {
//     try{
//         var data=fs.readFileSync('file.txt','utf-8');
//         console.log(data);
//     }
//     catch(e){
//         console.log('error');
//     }
// }
// function square(n){
//     return n*n;
// }
// var result=square(5);
// console.log(result);
// // fs.writeFile("file.txt","i usderstand but i don't know how its work")
// fs.writeFile('file.txt', 'content Written!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

//   fs.access("file.txt",fs.constants.F_OK,(err)=>
//   {
//       if(err){
//           console.log('sorry file is not present')}
  
      
//       else{
//           console.log("file is there")
//       }
//     })

    var fs=require('fs')
    fs.appendFile("file.txt","i am not unserstand instead of trying for ",(err)=>
    {
        if(err)
        {console.error('error')
    }
    else{
        console.log('file appending was successfull')
    }
})
fs.access("file.txt",fs.constants.F_OK,(err)=>
{
    if(err)
    {console.log("sorry file not present")}
else{
    console.log("file is not there,now reading the content");
}
})
    // fs.unlink("file.txt",(err))


//create a form in which you have to ask user details ,fetch those details using java script and display them in tabular format