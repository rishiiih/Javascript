const person = {
  name : "Rishi",

  greet(){
    console.log(`Hi, I am ${this.name}`);
    
  },
};

person.greet();

const greetunction = person.greet
greetunction();

const boundGreet = person.greet.bind({name : "John"})
boundGreet();

// bind, call and apply

