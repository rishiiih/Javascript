


function sayMyName(){
console.log("R");
console.log("I");
console.log("S");
console.log("H");
console.log("I");
}

// sayMyName()  

// function addTwoNos(number1, number2){
//   console.log((number1+number2));
// }
function addTwoNos(number1, number2){

  // let result = number1 + number2
  // return result
  return number1 + number2;
  
}
const result = addTwoNos(3, 5);

// console.log("Result: ", result);


function logInUserMessage(userName = "sam"){
  if(!userName){
    console.log("Please enter a Username");
    return 
  }
  return `${userName} just logged in`
}

// console.log(logInUserMessage("Rishi"))
// console.log(logInUserMessage("rishi"))


function calculateCartPrice(val1, val2, ...num1){
  return num1
}
// console.log(calculateCartPrice(200,400,500,2000))


const user = {
  username: "rishi",
  price: 199
}

function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and  price is ${anyObject.price}`); 
}
// handleObject(user)
handleObject({
  username: "sam",
  price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}
console.log(returnSecondValue(myNewArray));
