// this keyword


// // In normal function value of this is value of selected element
// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click", function () {
//   console.log("you clicked me !!!!");
//   console.log("value of this");
//   console.log(this);
// });


// In arrow function value of this is window
const btn = document.querySelector(".btn-headline");
btn.addEventListener("click", ()=> {
  console.log("you clicked me !!!!");
  console.log("value of this");
  console.log(this);
});
