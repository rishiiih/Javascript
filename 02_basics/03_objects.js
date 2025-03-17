// singleton

// object literals
// Object.create

const mySym = Symbol("key1")


const JsUser = {
  name : "rishi",
  "full name" : "rishi raj singh",
  [mySym] : "mykey1",
  age : 18,
  location : "Jaipur",
  email : "rishi@google.com",
  isLoggedIn : false,
  lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "rishi@chatgpt.com"
// Object.freeze(JsUser)

// console.log(JsUser);

JsUser.greeting = function(){
  console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
  console.log(`Hello Js user, ${this.name}`);
}
 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());
 