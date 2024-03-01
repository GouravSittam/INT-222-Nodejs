// Event Emitter
const Even=require('events')
var eventEmitter=new Even();
eventEmitter.on('grade',(err,msg)=>{//remove err to get events
    console.log(msg)
})
eventEmitter.emit('grade',"first event")

//removing listern
// create a event pass a,b ,c,d and give me the sum

// const {EventEmitter} = require('events');
// const eventEmitter = new EventEmitter();
// eventEmitter.on('calSum', (a+b+c+d) => {
//     // const sum = a + b + c + d;
//     // console.log('The sum is:', sum);
// });
// eventEmitter.emit('calSum', 5, 10, 15, 20);


// const { EventEmitter } = require('events');

// var eventEmitter = new EventEmitter();
// eventEmitter.on('grade', (a,b,c,d) => {
//     console.log(a+b+c+d); 
// });
// eventEmitter.emit('grade',10,20,30,40);

