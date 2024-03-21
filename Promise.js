// let pro = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let BikramGotMilk = false;

//     if (BikramGotMilk) {
//       resolve("bikram got milk");
//     } else {
//       reject("bilram failed");
//     }
//   }, 2000);
// })
//   //  console.log(pro);
//   .then(function (event) {
//     console.log(event);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("end");
//   });

let myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let BikramGotMilk = false;

    if (BikramGotMilk) {
      resolve("bikram got milk");
    } else {
      reject("bikram failed");
    }
  }, 2000);
})
  // console.log(myPromise);
  .then(function (event) {
    console.log(event);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function(){
    console.log("end");
  })
