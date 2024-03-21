//synchronous programming vs asynchronous programming
//js is synchronous programming and single thread.

//synchronous programming
// console.log("script start");

// for (let i = 0; i < 10000; i++) {
//     console.log("inside for loop");
// }

// console.log("script end");

//setTimeout

// console.log("script start");

// function hello() {
//   console.log("hello world");
// }
// setTimeout(hello, 1000);

// console.log("script end");

//best way

// console.log("script start");

// setTimeout(() => {
//   console.log("hello world");
// }, 1000);

// console.log("script end");

//next
// console.log("script start");

// setTimeout(() => {
//   console.log("hello world");
// }, 100);

// for (let i = 0; i < 100; i++) {
//   console.log("inside for loop");
// }

// console.log("script end");

//clearTimeOut()
//setTimeout

// console.log("script start");

// const id = setTimeout(() => {
//   console.log("inside setTimeout");
// }, 1000);

// for (let i = 0; i < 100; i++) {
//   console.log("........");
// }

// console.log("settimeout id is", id);
// console.log("clearing time out");
// clearTimeout(id);

// console.log("script end");

//setInterval
// console.log("script start");
// setInterval(() => {
//   console.log(Math.random());
// }, 1000);
// console.log("script end");
