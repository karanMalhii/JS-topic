//selected single btn
// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function () {
//   console.log("click me");
// });

//other way
// const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);

//selected all btn

// const allButtons = document.querySelectorAll(".my-buttons button");
// for (let button of allButtons) {
//   button.addEventListener("click", function () {
//     // console.log("you clicked me !!!!");
//     // console.log(this);
//     console.log(this.textContent);
//   });
// }

//event object
// const allButtons = document.querySelectorAll(".my-buttons button");
// allButtons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     console.log(e.currentTarget.textContent);
//   });
// });

console.log("script start !!!!!!!!");
const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let num = 0;
    for (let i = 0; i <= 1000000000; i++) {
      num += i;
    }
    console.log(e.currentTarget.textContent, num);
  });
});

let outerVar = 0;
for (let i = 0; i <= 1000000000; i++) {
  outerVar += i;
}
console.log("value of outer variable is ", outerVar);
console.log("script end !!!!!");
