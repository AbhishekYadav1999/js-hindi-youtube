// primtive data type 

// 7 types : String,Number,Boolean,Null,Undefined,Symbol,BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId);

const bigNumber = 3456543576654356754n


//referenced type or non-primitive

//Array , Objects , Functions

const heros = ["shaktiman","naagraj","doga"];
let myObj = {
    name:"Abhishek",
    age:24,
}
const myFunction = function()
{
    console.log("Hello World");
}
console.log(typeof myFunction)
console.log(typeof myObj)
console.log(typeof heros)
console.log(typeof outsideTemp)

let myYoutubename="Abhishekyadavdotcom"
let anothername=myYoutubename
anothername="chai or code"
console.log(myYoutubename)
console.log(anothername)
let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne
userTwo.email="hitesh@google.com"

console.log(userOne.email);
console.log(userOne.email);