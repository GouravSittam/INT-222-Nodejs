// const fs=require('fs')
// // read a json file
// fs.readFile('JSON.json',"utf8",(err,data)=>
// {
//     if(err)
//     {
//         console.error("err")
//     }else
//     {
//         console.log(JSON.parse(data)) //we use JSON.parse for read it more comfortabily without strings
//     }
// }
// )

// //Writing something in json file
// const content=
// {
//     key7:"value",
//     key8:7
// }
// const convert=JSON.stringify(content,null,2) 
//   //gernally null is indexing
// fs.writeFile("JSON.json",convert,(err)=>
// {
//     if(err)
//     {
//         console.error("error is there.")
//     }
//     else
//     {
//         console.log("File is updated & Data has been written successfully!")
//     }
// }
// )


// Append file


// const { Console } = require("console");
// const fs = require("fs");
// const cont={
//     "Key6":"value",
//     "Key7":7
// }
// const cnvrt=JSON.stringify(cont,0,2);
// fs.appendFile("JSON.json",cnvrt,(err)=>{
// if(err){
//     console.error("Error is here");
// }
// else{
//     console.log("File is updated");
// }
// })


// Rename file

// const fs = require("fs");

// fs.rename("example.json", "Renamed.json", (err) => {
//     if (err) {
//         console.error("Error occurred while renaming the file:", err);
//     } else {
//         console.log("File renamed successfully.");
//     }
// });


// Copy file


// const fs= require("fs");

// fs.copyFile("Renamed.json","New.json",(err)=>{
//     if (err) {
//                 console.error("Error occurred while copying the file:", err);
//             } else {
//                 console.log("File Copy successfully.");
//             }
// })