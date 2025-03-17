// Primitive datatypes

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 2653872638787368n




// Reference (Non- primitive datatypes)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]
let myObj = {
  name: "rishi",
  age: 18,
}

const myFunction=function(){
  console.log("Hello World");
}
  
// console.log(typeof heroes);




//////////////// +++++++++++++++++++++++++

// Stack (primitive), Heap (Non-Primitive)

let myYoutubename = "rishi.com"

let anotherName = myYoutubename
anotherName = "chaiaurcode"

// console.log(myYoutubename);
// console.log(anotherName);

let user1 = {
  email: "user@google.com",
  upi: "user@ybl"
}

let userTwo = user1

userTwo.email = "rishi@google.com"

console.log(user1.email);
console.log(userTwo.email);