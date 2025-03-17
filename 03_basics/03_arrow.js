const user = {
  username: "rishi",
  price: 999,

  welcomeMessage: function(){
    console.log(`${this.username}, welcome to website`);
 
  }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);


// function chai(){
//   let username = "rishi"
//   console.log(this.username);
// }
// chai()


const chai = () => {
  let username = "rishi"
  console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//   return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "rishi"})

console.log(addTwo(3,4))
