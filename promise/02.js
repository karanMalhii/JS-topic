// function returning promise

function ricePromise() {
  const bucket = ["coffee", "chips", "vegetable", "salt", "rice"];
  return new Promise((resolve, reject) => {
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
}
ricePromise()
  .then((myVeg) => {
    console.log("lets eat", myVeg);
  })
  .catch((error) => {
    console.log("error", error);
  });
