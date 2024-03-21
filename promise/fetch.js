// const URL = "https://jsonplaceholder.typicode.com/postss";

// const whatIsThis = fetch(URL)
//   .then((Response) => {
//     return Response.json();
//   })
//   .then((data) => {
//     console.log("This is my data");
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("This is my error");
//     console.log(error);
//   });

//next

// const URL = "https://jsonplaceholder.typicode.com/postss";

// fetch(URL, {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((Response) => {
//     if (Response.ok) {
//       return Response.json();
//     } else {
//       throw new error("else part error");
//     }
//   })
//   .then((data) => {
//     console.log("This is my data");
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("This is my error");
//     console.log(error);
//   });

const URL = "https://jsonplaceholder.typicode.com/posts";

const whatIsThis = fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
