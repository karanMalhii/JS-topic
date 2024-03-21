//DOM Traversing

//111 next
// const rootNode = document.getRootNode();
// console.log(rootNode);
// console.log(rootNode.childNodes);

// const rootNode = document.getRootNode();
// const htmlElementNode = rootNode.childNodes[0];
// console.dir(htmlElementNode);
// console.log(htmlElementNode.childNodes);

// const rootNode = document.getRootNode();
// const htmlElementNode = rootNode.childNodes[0];
// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// // console.log(bodyElementNode);
// // console.log(bodyElementNode.parentElement);
// console.log(headElementNode.nextSibling);

//next
//siblings relation

// const h1 = document.querySelector("h1");
// // console.log(h1.parentElement);
// const div = h1.parentElement;
// div.style.color = "pink";
// div.style.backgroundColor = "purple";

//next

// const h1 = document.querySelector("h1");
// const body = h1.parentElement.parentNode;
// body.style.color = "pink";
// body.style.backgroundColor = "purple";

//next 
const head = document.querySelector("head");
const title = head.querySelector("title");
console.log(title);

//children
// use childrenNode  i have only children not textNode.
const container = document.querySelector(".container");
console.log(container.children);
