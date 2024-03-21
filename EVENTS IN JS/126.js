// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

//capturing events
// child.addEventListener("click", () => {
//   console.log("capture !!!! child");
// }, true);
// parent.addEventListener("click", () => {
//   console.log("capture !!!! parent");
// }, true);
// grandparent.addEventListener("click", () => {
//   console.log("capture !!!! grandparent");
// }, true);
// document.body.addEventListener("click", () => {
//   console.log("capture !!!! document.body");
// }, true);

// bubble event
// child.addEventListener("click", () => {
//   console.log("bubble on child");
// });
// parent.addEventListener("click", () => {
//   console.log("bubble on parent");
// });
// grandparent.addEventListener("click", () => {
//   console.log("bubble on grandparent");
// });
// document.body.addEventListener("click", () => {
//   console.log("bubble on document.body");
// });

//delegation event
// const grandparent = document.querySelector(".grandparent");
// grandparent.addEventListener("click", ()=>{
//     console.log("you clicked something!!!");

// })

const grandparent = document.querySelector(".grandparent");
grandparent.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});
