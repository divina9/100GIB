// // npm install prompt-sync

// // OPERATORS 

// const prompt = require("prompt-sync")({sigint:true});
// let n = prompt("Enter Number: ");
// for(let i = 1; i<=n; i++){
//     console.log(i);
// }

// //200 - number unary operator
// console.log(+"200");

// //0- number representation
// console.log(+true);

// //NaN
// console.log(+"hello");

// //ternary operator example: condition, true value, false value (3 operands)
// const score = 80;
// const scoreRating = score>50? "Good" : "Poor"; //condition, ? 1st value: 2nd value
// console.log(scoreRating);

// //original code
// for(let i=0; i<=100; i++){
//     if(i%3===0 && i%5===0){
//         console.log("fizzbuzz");
//     }
//     else if(i%3===0){
//         console.log("fizz");
//     }
//     else if(i%5===0){
//         console.log("buzz");
//     }
//     else{
//         console.log(i);
//     }
//     }

// //Print fizzbuzz using ?
// for(let i=0; i<=100; i++){
//     let fizz = i%3 === 0,
//     buzz = i%5 === 0;
//     console.log(fizz? (buzz? 'FizzBuzz' : 'Fizz') : buzz? 'Buzz': i)};

// //STRING
// let name = "DIVINA";
// for(let i=0; i<name.length; i++){ //js is 0 indexed
//     console.log(name[i]);
// }

// //console.log(name[0]);

// //String interpolation
// const fakeName = "Tiana"; //using backticks in message
// const message = `
//     Hello, ${fakeName}! You left a package!
//     If you won't pick it up, ${fakeName}, I will!
//     Bye, ${fakeName}!`;
// console.log(message);

// //escape sequence character is a backslash
// // \n is counted as 1 not 2 chars
// let name1 = 'Divina';
// let name2 = 'Divina\'s'; 
// console.log(name1 , name2);

// //slice
// //same as py a[1:4] format
// var s1 = 'Divina Dcunhaaaa';
// var s2 = s1.slice(0,4); //0 inclusive 4 exclusive
// var s3 = s1.slice(5);
// console.log(s2,s3);
// // console.log(s1.replace("Div","hen"));

// var s1 = '012345'
// console.log(s1.slice(4)); //if u only provide one paramaeter considers as the starting param


// FUNCTIONS - something reusable
// function functionName([arg1, arg2... argN]){
//    //code to be executed
// }

// function square(a){
//     return a*a;
// }
// console.log(square(5));

// function product(a,b){
//     console.log(a*b);
// }
// product(3,5);


// WAYS TO CALL FUNCTION
// 1 - name - console.log(name())
// 2 - call keyword - call()
// 3 - calling product() function

// function product(a , b){        //REGULAR
//     return a*b;
// }
// console.log(product(6,5));


// let product = (a,b) => a*b;
// console.log(product(6,5)); //ARROW 



// //Calling product() function
// let product = (a,b) => a*b;
// var result = product.call(this, 20,5); //where this indicates ownership
// console.log(result);


//ARROW FUNCTION 

// let myFunction = (arg1, arg2, ... argN) => statement(s)


// // ex1
// let greet = x => console.log(x);  //ARROW
// greet("G'morning");