// const{Readable}=require("stream")
// const inStream=new Readable({
//     read(){}
// });
// inStream.push("Here to study int222")
// inStream.push("an industry oriented course");
// inStream.push(null);
// inStream.pipe(process.stdout)

//how to read the data from the file using stream
// var fs=require("fs");                  
// var data="";
// var readerStream=fs.createReadStream('file1.txt');
// readerStream.setEncoding("UTF8");
// readerStream.on( "data", function(chunk){
//     data +=chunk;
// });
// readerStream.on('end',function(){
//     console.log(data);
// });
// readerStream.on('error',function(err){
//     console.log(err.stack);
// });


//writing to a stream
var fs=require('fs')
var data='Node is not easy for everyone understand'
var writeStream=fs.createWriteStream('output.txt')
writeStream.write(data,'utf-8')
writeStream.end()
writeStream.on('fnish',function(){
    console.log("Oo Likh toh le programe pura😒")
})
writeStream.on('error',function(err){
    console.log(err.stack)
})
console.log("Apka programe File main Save ho gya hai🙂")



// const fs = require('fs');

// const writeStream = fs.createWriteStream('output.txt');

// const data = 'Hello, world!';
// writeStream.write(data, 'utf-8');
// writeStream.end();
// writeStream.on('finish', () => {
//   console.log('Data has been written to the file successfully.');
// });

// writeStream.on('error', (err) => {
//   console.error('Error writing to the file:', err);
// });


