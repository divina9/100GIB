//Q1. Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }

 //Q2. Write a JS program to print a Left Triangle Pattern as shown below. 

 let rows = 5;
 for (let i = 1; i <= rows; i++) {
   let pattern = "";
   for (let j = 1; j <= i; j++) {
     pattern += "*";
   }
   console.log(pattern);
 }

 //Q3. Write a JS program to print a Downward Triangle Pattern as shown below. 

 for(var i=5;i>=1;i--){
    s = ""
    for(var j=1;j<=i;j++){
        s = s + "*";
    }
    console.log(s);
 }


 //Q4. Write a JS program to print a Pyramid Pattern as shown below.

 for (let i = 1; i <= 5; i++) {
    var s = '';
    for (let j = 1; j <= 5 - i; j++) {
      s += ' ';
    }
    for (let j = 0; j < 2 * i - 1; j++) {
      s += '*';
    }
    console.log(s);
  }