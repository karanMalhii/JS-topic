// Understand callback

// function myFunc(callback) {
//   console.log("function is doing task 1");
//   callback();
// }

// function myFunc2() {
//   console.log("function is  doing task 2");
// }

// myFunc(myFunc2);

//next

// function myFunc(callback) {
//   console.log("function is doing task 1");
//   callback();
// }

// myFunc(() => {
//   console.log("function is  doing task 2");
// });

//next
// function getTwoNumbersAndAdd(number1,number2,callback) {
//     console.log(number1,number2);
//     callback(number1,number2);
// }
// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
// getTwoNumbersAndAdd(4,5,addTwoNumbers);

function getTwoNumbersAndAdd(number1, number2, callback) {
  console.log(number1, number2);
  callback(number1, number2);
}

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

getTwoNumbersAndAdd(4, 5,addTwoNumbers);
