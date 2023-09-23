'use strict';
// 
// x = 3.14;

// const private = 10;
// Primitive Data Types  vs Reference (Object based)

// String
// Number 
// Boolean 
// undefined 
// null 
// Symbol
// BigInt 

// console.log("JS is working!!")

// let myName = "Arjit Verma";
// let anotherUser = myName;

// console.log(myName);
// console.log(anotherUser);

// myName = "Arjit Singh"



// console.log(myName);
// console.log(anotherUser);

// Object 
// const aboutMe = {
//     name : 'Arjit',
//     job: 'Trainer',
//     location:'New Delhi'
// }

// const anotherUser = aboutMe;

// console.log(aboutMe)
// console.log(anotherUser)

// aboutMe.job = "Pilot"
// console.log(aboutMe)

// console.log(anotherUser)

// const numbers = [15.5, 2.3, 1.1, 4.7];

// let sum = numbers.reduce(getSum, 0)


// function getSum(total, num) {
//     return total + Math.round(num);
// }

// console.log(sum)


// this - Keyword

// console.log(this)
// this always refers to the window 


// function b(){
//     console.log(this)
// }

// b()

// let myBtn = document.querySelector('.btn');

// myBtn.addEventListener('click',function(){
//     console.log(this)
// })



// Arrow vs Normal Fun 

// let user = {
//     userName : "Rohit",
//     yearOfBirth: 1996,
//     calcAge : function(){
//         console.log(this)
//         let a = 10;
//          const canDrive = ()=>{
//             console.log("Value of this in inner function", this)
//             console.log(a)
//         }

//         canDrive()

//     },
//     // canDrive:()=>{
//     //     // console.log((2023 - this.yearOfBirth) >= 18 ? "Can Drive":"Cannot Drive" )
//     // console.log(this)
    
// }

// user.calcAge()

function multiplyNums(a,b){
    console.log(arguments)
    console.log(a,b)
}

multiplyNums(3,2,4,2,42,43)


const arrMultiply = (a,b) =>{
    console.log(arguments)
    return(a*b)
}

arrMultiply(23,3,342,434,34)


// 1. JavaScript Basics:
// a. Variables and Data Types: Understand the various data types and how to declare variables using let, const, and var.
// b. Operators: Learn about arithmetic, logical, and comparison operators.
// c. Control Structures: Grasp the use of if, else, switch, loops.
// d. Functions: Comprehend how to declare and use functions, including arrow functions.
// e. Objects and Arrays: Learn about object literals, array literals, and their methods.

// 2. JavaScript ES6+ Features:
// a. Arrow Functions: Understand the concise way to write functions.
// b. Classes: Learn about JavaScript’s syntactical sugar for prototypes.
// c. Destructuring Assignment: Grasp how to unpack values from arrays or properties from objects.
// d. Template Literals: Learn to create strings using backticks allowing embedded expressions.
// e. Spread/Rest Operator: Understand how to use ... to work with objects and arrays.
// f. Import/Export (Modules): Grasp ES6 module syntax to include/exclude parts of your code.

// 3. Advanced JavaScript Concepts:
// a. Promises and Async/Await: Learn about asynchronous programming and how to handle asynchronous operations.
// b. Closures: Understand the mechanism to have an inner function reference variables of an outer function.
// c. Callback Functions: Grasp how functions can be passed as arguments to other functions.
// d. Higher-Order Functions & Arrays: Learn about map, filter, and reduce.

// 4. Web Technologies:
// a. HTML/CSS: Understand the basics of HTML and CSS as they are the building blocks of web development.
// b. DOM Manipulation: Learn about the Document Object Model and how to interact with it.
// c. HTTP/HTTPS and APIs: Understand the basics of HTTP protocols and how to communicate with servers using APIs.

// 5. Development Tools and Environment Setup:
// a. Node.js and npm: Learn about the runtime and package manager which will be required to set up a React development environment.
// b. Webpack and Babel: Basic understanding of bundling JavaScript files and transpiling next-gen JS.