// function makeTea(typeofTea){
//   return `Making ${typeofTea}`;
// }
// let teaOrder = makeTea("lemon tea");
// console.log(teaOrder);

function orderTea(teatype){
  function confirmOrder(){
    return `Order confirmed for chai`;
  }
  return confirmOrder();
}

let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation);


const calculateTotal = (price, quantity) => price * quantity
 
let totalCost = calculateTotal(499 * 100)



function makeTea(typeOfTea){
  return `makeTea: ${typeOfTea}`;
}

function processTeaOrder(teaFunction){
  return teaFunction("earl grey")
}

let order = processTeaOrder(makeTea)
console.log(order);

