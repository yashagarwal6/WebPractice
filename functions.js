// function saymyname() { // function defination 
//     console.log("yash agarwal")
// }
// saymyname(); // function calling

// function printcount() { //no parameters are passed but function defining 
//     for(let x = 1;x<100;x++){
//         console.log(x);
//     }
// }
// printcount(); // function calling to use

// function getAverage(num1,num2) {
//     let avg = (num1+num2)/2;
//     console.log(avg)
// }
// getAverage(2,6);

// //return functions 
// function getAverage(num1,num2) {
//     let avg = (num1+num2)/2;
//     return avg;
// }
// let s = getAverage(2,6);
// console.log(s);

// another way of doing it 
const getAverage = function (num1,num2) {
    let avg = (num1+num2)/2;
    return avg;
}
let a = getAverage(2,8)
console.log(a);
// arrow function 
let multiply = (num1,num2) => {
    let b = num1*num2;
    return b;
}
let answer1 = multiply(2,3);
console.log(answer1);
