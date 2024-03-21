//promise and setTimeout

//I want to resolve / reject promise after 2 second.

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
//     console.log("resolved");
//   })
//   .then(() => {
//     console.log("reject");
//   });

function myPromise() {
  return new Promise((resolve, reject) => {
    const value = false;
    setTimeout(() => {
      if (value) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}
myPromise()
  .then((yes) => {
    console.log("resolve");
  })
  .catch(() => {
    console.log("reject");
  });
