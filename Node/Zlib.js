//compressing data using Gzib
// var zlib = require('zlib');
// var fs = require('fs');
// var Gzip = zlib.createGzip(); 
// var r = fs.createReadStream('test.txt');
// var w = fs.createWriteStream('test.txt.gz');
// r.pipe(Gzip).pipe(w); 


//compress using brotli
// var zlib=require('zlib')
// var fs=require('fs')
// var brot=zlib.createBrotliCompress()
// var r=fs.createReadStream('test1.txt')
// var w=fs.createWriteStream('test1.txt.gz')
// r.pipe(brot).pipe(w); 

//compress using deflate
var zlib=require('zlib')
var fs=require('fs')
var delf=zlib.createDeflate()
var r=fs.createReadStream('test2.txt')
var w=fs.createWriteStream('test2.txt.gz')
r.pipe(delf).pipe(w); 
