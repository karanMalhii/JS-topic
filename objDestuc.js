// let car = {
//   color: "red",
//   model: "v1",
//   company: "zen",
// };

// let fruits = ["apple", "orange", "bnanna"];

// let [a, b, c, d] = fruits;

// console.log(a, b, c, d);

// let { color, model, company } = car;

// let x = 1;
// let y;

// console.log(x, y);

// console.log(color, model, company);

let car1 = {
  color: 'red',
  model:"v1",
  company:"zen"
}
let fruits1 = ["apple","orange","banana"];
let [a,...c] = fruits1

console.log(a,c)

// function get(carObj){
//     console.log(carObj.color);
//     console.log(carObj.model);
// }

// function getDetails({ color = "pink", company }) {
//   console.log(color, company);
// }

// // get(car);
// getDetails(car);
