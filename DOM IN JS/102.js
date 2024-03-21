// console.log(window.document);
// console.log(document);
// console.dir(document);

//103 next
// select element using get element by id
// const main_heading = document.getElementById("main-heading");
// console.log(main_heading)

//104 next
// select element using query selector.
// const header = document.querySelector(".header");
// const navItem = document.querySelector(".nav-item")
// const navItem = document.querySelectorAll(".nav-item")
// console.log(navItem);

// 105 next
//change text
// textContent and innerText
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent)
// console.log(mainHeading.innerText)
// mainHeading.textContent = "This is something else";
// console.log(mainHeading.textContent)

// 106 next
//change the styles of elements

// const mainHeading = document.querySelector("div.headline h2")
// console.log(mainHeading.style);
// mainHeading.style.backgroundColor = "";
// mainHeading.style.border = "2px solid red";
// mainHeading.style.borderRadius = "20px";

//107 next
// get and set attributes
// const link = document.querySelector("a");
// console.log(link.getAttribute("href").slice(1));
// link.setAttribute("href", "https://codprog.com");
// console.log(link.getAttribute("href"));

// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));
//  inputElement.setAttribute("type","email");
//  console.log(inputElement.getAttribute("type"));

//108 next
// get multiple items using getElements by class name
// get multiple items using querySelectorAll

// const navItem = document.getElementsByClassName("nav-item");
//html collection
// console.log(navItem[0]);
// console.log(Array.isArray(navItem))

//109 next
// const navItems = document.getElementsByTagName("a");
// for (let i = 0; i < navItems.length; i++) {
//   const navItem = navItems[i];
//   navItem.style.backgroundColor = "pink";
//   navItem.style.color = "green";
// }

//110 next
// const headLine = document.querySelector(".headline");
// console.log(headLine.innerHTML);
// headLine.innerHTML = "<h1> Inter html changed </h1>";
// headLine.innerHTML += '<button class = \"btn\"> click me </button>';
// console.log(headLine.innerHTML);


