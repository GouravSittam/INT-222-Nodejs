// const readlineSync = require('readline-sync');

// //Get user input for their name
// const userName = readlineSync.question('enter you distance from lpu');

// //Display a personalized greeting
// console.log('${userName}, sorry! this is not good enough to teach the students of b.tech');

//functions
// function square(a){
//     return a*a
// }

function first(){
    let a=123;
    let b=0;
    try{
        if(b==0){
            throw "Cannot divide by zero";
        }
    }
    catch(e){
        document.getElementById('demo').innerHTML +=
        "<br>"+e+"<br>";
    }
    finally{
        document.getElementById('demo').innerHTML += 
        "it will execute anyways!";
}
}
