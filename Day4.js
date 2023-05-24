//Object, an instance of a class
//class blueprint of an object

//e.g., empty building (class) with (objects) multiple rooms.
//last class implementing toString(), method type is object
//new keyword to make print objects

// OBJECTS - mutable.

//Using Literal - 1
//let person = {firstName:"Sarah", lastName: "Smith", age:50, eyeColour: "blue"};

//Dot Operator - 2

// const person = new Object();
// person.firstName = "Sarah";
// person.lastName = "Smith";
// person.age = 50;
// person.eyeColour = "blue";
// // console.log(person);
// const x = person; //*Will not create a copy of person*! - reference, not value. Changes will reflect.
// console.log(x);

//JS for in loop (JS thing) -  can loop within object.
// let txt = "";
// const person = new Object();
// person.firstName = "Sarah";
// person.lastName = "Smith";
// person.age = 50;
// person.eyeColour = "blue";
// for(let x in person){ //iterates for as many properties there are
//     txt+=person[x];
// }
// console.log(txt);//prints as one, haven't appended string.

//this - refers to an object in 
//methods: call, apply, bind all uses this keyword

//EVENT - something is going to happen
//in JS - what ACTION should be taken 
//e.g., prompt is an event
//in HTML file - looked at alert with prompt, changing button name, mouseoverevent, 
//Look at research on the kind of events in Javascript

//4: encapsulation, inheritance, abstraction, polymorphism


// class SessionForm{
//     submit(){
//         alert(this.name + ": Your form is submitted for session: "+ this.sessionName)
//     }
//     cancel(){
//         alert(this.name +": This form is cancelle for session: " + this.sessionName)
//     }
//     fill(givenName, sessionName){
//         this.name = givenName
//         this.sessionName = sessionName
//     }
// }


//Create a form for Divina
//to call, Objectname.(parameters)

//linked with html

/* 
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
</head>

<body>
    Welcome to another class!!!
    <script src="day4.js"></script>
</body>

</html>
*/



// let DivinaForm = new SessionForm();
// //Fill form with details
// DivinaForm.fill("Divina", "100GIB");

// // //Create form for Neha
// let NehaForm1 = new SessionForm();
// let NehaForm2 = new SessionForm();

// //Fill form with Neha's details
// NehaForm1.fill("Neha","Psychology");
// NehaForm2.fill("Neha", "Mathematics");

// DivinaForm.submit();
// NehaForm1.submit();
// NehaForm2.submit();
// NehaForm1.cancel();

//constructor example
//once you print it, can see how many times it is called.

// class SessionForm{
//     // constructor(){
//     //     console.log("Constructor is called") //-1 
//     // }
//     constructor(givenName, sessionName){ //-2
//         console.log("Constructor is called")
//         this.name = givenName
//         this.sessionName = sessionName
//     }
//     submit(){
//         console.log(this.name + ": Your form is submitted for session: "+ this.sessionName)
//     }
//     cancel(){
//         console.log(this.name +": This form is cancelled for session: " + this.sessionName)
//     }
//     fill(givenName, sessionName){
//         this.name = givenName
//         this.sessionName = sessionName
//     }
// }



// Check in HTML for constructor

// let DivinaForm = new SessionForm();
// //Fill form with details
// DivinaForm.fill("Divina", "100GIB");

// // //Create form for Neha
// let NehaForm1 = new SessionForm();
// let NehaForm2 = new SessionForm();

// //Fill form with Neha's details
// NehaForm1.fill("Neha","Psychology");
// NehaForm2.fill("Neha", "Mathematics");

// DivinaForm.submit();
// NehaForm1.submit();
// NehaForm2.submit();
// NehaForm1.cancel();


//prototype __proto__ for next class. can claim that