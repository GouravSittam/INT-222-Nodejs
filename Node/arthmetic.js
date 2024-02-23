// function d(a,b){
//     console.log(a-b)
//     console.log(a+b)
//     console.log(a/b)
//     console.log(a*b) 
// }


function checkPass(marks) {
    if (marks >= 40) {
        return "Pass in First Course";
    } else {
        return "Fail in First Course";
    }
}
function checkGrade(marks) {
    if (marks >= 55) {
        return "Pass in All Courses";
    } else if (marks >= 50) {
        return "Pass in Second Course";
    } else if (marks >= 45) {
        return "Pass in Third Course";
    } else if (marks >= 40) {
        return "Pass in Fourth Course";
    } else {
        return "Fail in All Courses";
    }
}
let studentMarks = 20;
console.log(checkPass(studentMarks));
console.log(checkGrade(studentMarks));