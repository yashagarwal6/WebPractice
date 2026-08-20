// sayName('Yash')

// function sayName(name) {
//     console.log(name);
// } // due to hoisting function is getting compiled before is function hoisting 


// // console.log(a);
// // var a = 10; 
// // gives undefined always as there is var if there was let then it will be error

// saySurname("Agarwal");
// let saySurname = function (surname) {
//     console.log(surname);
// } // this gives refrence error if let was not used in that case we will not have any error and as the function hoisting the output come


function greetMe(greet,NAME) {
    console.log(NAME);
}
function greet() {
    console.log("Hello! There");
}
greetMe(greet,"YASH"); //FUNCTION CALL STACK 

function solve(number){
    return function(number){
        return number*number;
    }
}

let ans = solve();
console.log(ans(5)); // sove 10 call hua to return kiya function jo dubara call hua aur answer print hua 

const arr = [
    function (a,b) {
        return a+b;
    },
    function (a,b) {
        return a*b;
    },
    function (a,b) {
        return a-b;
    }
]
let b = arr[0];
console.log(b(2,3));



// var greet;
// console. log (greet) this will not give refrence error as just the refrence of function is used 

