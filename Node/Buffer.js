                     //BUFFER
// const mybuffer=Buffer.alloc(17)
// mybuffer.write("node welcome")
// const a=(mybuffer.toString())
// console.log(a)

// const bufferfs=new Buffer('hi how are you')


//give it size of buffer

// var buff=Buffer.alloc(10)
// console.log(buff)
// buff.write("write")
// console.log(buff)
// var a=buff.toString()
// console.log(a);


// //method 2
// var buff2=new Buffer('node')
// console.log(buff2)

// //method 3
// var buff3=Buffer.from([1,2,3,4,5,6,7])
// console.log(buff3)

// // method 4 lengthcalculation
// var length = buff.length
// console.log(length)

// //method 5 concationtion
// console.log(Buffer.concat([buff,buff2,buff3]))

// //copy buffer
// const buffersrc=new Buffer("ABC")
// const bufferDest=Buffer.alloc(3)
// buffersrc.copy(bufferDest)
// const Data=bufferDest.toString('utf-8')
// console.log(Data)


// //slicing data
// const bufferold=new Buffer(
//     'nodeisthere toindroduceyou toindustry'
// )
// const buffernew=bufferold.slice(14,23)
// console.log(buffernew.toString())

// //compare 2 buffer
// const buffero=new Buffer("Grv")
// const buffert=new Buffer("Chaudhary")
// var result=buffero.compare(buffert)
// console.log(result)

                          //PATH

// const path=require('path')
// const directory=path.basename("C:\\Users\\hp\\OneDrive\\Desktop\\❤️❤️.jpeg")
// console.log(directory)

// const path=require('path')
// const directory1=path.normalize("C:\\Users\\hp\\OneDrive\\Desktop\\❤️❤️.jpeg")
// console.log(directory1)

// const path=require('path')
// const directory2=path.toNamespacedp("C:\\Users\\hp\\OneDrive\\Desktop\\❤️❤️.jpeg")
// console.log(directory2)

// const path=require('path')
// console.log(path.delimiter)


// const o=require('os')
// const archi=o.arch()
// console.log(archi)

// const o=require('os')
// const arch=o.version()
// console.log(arch)

// const o=require('os')
// const arch=o.availableParallelism()
// console.log(arch)

// const o=require('os')
// const arch=o.type()
// console.log(arch)

// const o=require('os')
// const arch=o.uptime()
// console.log(arch)

// const o=require('os')
// const arch=o.totalmem()
// console.log(arch)

// const o=require('os')
// const arch=o.userInfo()
// console.log(arch)