//intro to events
//click
// 3 type of add events

//first way (not use)
//inline with elements

//second way (not use)
// const btn = document.querySelector(".btn-headline");
// btn.onclick = function () {
//   console.log("click on button");
// };

//Third way (use this way)
// const btn = document.querySelector(".btn-headline");
// function clickMe() {
//   console.log("click on btn ");
// }
// btn.addEventListener("click", clickMe);

//other way
// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click", function () {
//   console.log("click on btn");
// });

// another way ( best way )
const btn = document.querySelector(".btn-headline");
btn.addEventListener("click", () => {
  console.log("click on btn");
});
