// const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

// const friedRicePromise = new Promise((resolve, reject) => {
//   if (
//     bucket.includes("vegetables") &&
//     bucket.includes("salt") &&
//     bucket.includes("rice")
//   ) {
//     resolve({ value: "friedRice" });
//   } else {
//     reject(new Error("something missing from bucket"));
//   }
// });

// friedRicePromise
//   .then((myFriedRice) => {
//     console.log("lets eat", myFriedRice);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//next

//function returning promise
// function ricePromise() {
//   const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];
//   return new Promise((resolve, reject) => {
//     if (
//       bucket.includes("vegetables") &&
//       bucket.includes("salt") &&
//       bucket.includes("rice")
//     ) {
//       resolve({ value: "friedRice" });
//     } else {
//       reject("could't do it");
//     }
//   });
// }
// ricePromise()
//   .then((myFriedRice) => {
//     console.log("lets eat", myFriedRice);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//next
//promise && setTimeout

// function myPromise() {
//   return new Promise((resolve, reject) => {
//     const value = true;
//     setTimeout(() => {
//       if (value) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 2000);
//   });
// }
// myPromise()
//   .then(() => {
//     console.log("its resolve");
//   })
//   .catch(() => {
//     console.log("its reject");
//   });

//next
//promise resolve

// const myPromise = Promise.resolve(5);
// Promise.resolve(5).then((value) => {
//   console.log(value);
// });

//next
// function myPromise() {
//   return new Promise((resolve, reject) => {
//     resolve("hello");
//   });
// }
// myPromise()
//   .then((value) => {
//     console.log(value);
//     value += " world";
//     return value;
//   })
//   .then((value) => {
//     console.log(value);
//     value += " enjoy"
//     return value;
//   })
//   .then((value) => {
//     console.log(value);
//   });
