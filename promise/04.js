//Promise.resolve
//Promise.chaining

function myPromise() {
  return new Promise((resolve, reject) => {
    resolve("eat");
  });
}
myPromise()
  .then((value) => {
    console.log(value);
    value += " food";
    
    return value;
  })
  .then((value) => {
    console.log(value);
    value += " daily";
    return value;
  })
  .then((value) => {
    console.log(value);
  });
