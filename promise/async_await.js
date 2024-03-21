// const URL = "https://jsonplaceholder.typicode.com/postss";

// async function getPosts() {
//   const response = await fetch(URL);
//   const data = await response.json();
//   return data;
// }

// // const myData = getPosts();
// // console.log(myData);

// getPosts().then((myData) => {
//   console.log(myData);
// });

console.log("script start");

const URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("something went wrong");
  }
  const data = await response.json();
  return data;
}

// const myData = getPosts();
// console.log(myData);

getPosts()
  .then((myData) => {
    console.log(myData);
  })
  .catch((error) => {
    console.log("inside catch");
    console.log(error);
  });

console.log("script end");
