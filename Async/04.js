//callbacks, callback hell , pyramid of doom
//asynchronous programming

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");

setTimeout(() => {
  heading1.textContent = "heading 1";
  heading1.style.color = "violet";
  setTimeout(() => {
    heading2.textContent = "heading 2";
    heading2.style.color = "purple";
    setTimeout(() => {
      heading3.textContent = "heading 2";
      heading3.style.color = "green";
      setTimeout(() => {
        heading4.textContent = "heading 2";
        heading4.style.color = "red";
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);
