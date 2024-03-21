const bucket = ["coffee", "chips", "vegetable", "salt", "rice"];

const firedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetable") &&
    bucket.includes("salt") &&
    bucket.includes("rice")
  ) {
    resolve("got it");
  } else {
    reject("data not found");
  }
});

//next

// firedRicePromise.then(
//   (myVeg) => {
//     console.log("lets eat", myVeg);
//   },
//   (error) => {
//     console.log("oops", error);
//   }
// );

//next
firedRicePromise
  .then((myVeg) => {
    console.log("lets eat", myVeg);
  })
  .catch((error) => {
    console.log("error", error);
  });
