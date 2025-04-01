function Person(name){
  this.name = name;
}

Person.prototype.greet = function(){
  console.log(`Hello my name is ${this.name}`);
  
}

let rishi = new Person("rishi");
rishi.greet();