// let score = prompt("Enter score: ");
// if (score >= 80 && score <= 100) {
//     console.log("Grade 'A'");
// }
// else if ( score >= 70 && score < 80 ) {
//     console.log("Grade 'B'");
// }
// else if ( score >= 60 && score < 70 ) {
//     console.log("Grade 'C'");
// }
// else if ( score >= 50 && score < 60 ) {
//     console.log("Grade 'D'");
// }
// else if ( score < 50 && score >= 0 ) {
//     console.log("Fail");
// }
// else{
//     console.log("Invalid Score");
// }
// let string = prompt("Enter a string: ");
// let size = 0;
// for (let i of string ){
//     console.log(i);
//     size += 1;
// }
console.log("size of string is: " , size);
let students = {
    name: "pradum rathour",
    age : 21,
    city : "lucknow",
    college : "BBDITM",
}
for (let key in students){
    console.log(key, ":", students[key] );
}
