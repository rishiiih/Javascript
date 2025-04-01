class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
// console.log(account.getBalance());

//************************************ABSTRACTION*************************//

class CoffeeMachine {
  start() {
    // call DB
    // filter value
    return `Starting the machine....`;
  }
  brewCoffeee() {
    // complex calculation
    return `Brewing coffee`;
  }
  pressStartButton() {
    let msg1 = this.start();
    let msg2 = this.brewCoffeee();
    return `${msg1} + ${msg2}`;
  }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffeee());
// console.log(myMachine.pressStartButton());


//***********************Polymorphism******************************//

class Bird{
  fly(){
    return `Flying...`
  }
}

class Penguin extends Bird{
  fly(){
    return `Penguins can't fly`;
  }
}

let bird = new Bird()
let penguin = new Penguin()
// console.log(bird.fly());
// console.log(penguin.fly());


//********************************static method***********************************//

class Calculator {
  static add(a, b){
    return a+b
  }
}

// let miniCalc = new Calculator()
// console.log(miniCalc.add(2, 3));


// console.log(Calculator.add(2, 3));



//******************************************* Getters and Setters**************************//


class Employee {

  #salary;
  constructor(name, salary){
    this.name = name
    this.#salary = salary
  }

  get salary(){
    return `You are not allowed to see salary`;
  }
  set salary(value){
    if(value < 0){
      console.error("Invalid Salary");
    }
    else{
      this._salary = value;
    }
  }
}
let emp = new Employee("Alice", -50000)
console.log(emp._salary);
 