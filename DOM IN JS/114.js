//some old methods to support poor IE

// first add li class name 
// appendChild;
// insertBefore;
// replaceChild;
//removeChild;

//appendChild
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// ul.appendChild(li)

//insertBefore;
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// const referenceNode = document.querySelector(".first-todo");
// li.textContent = "new todo";
// ul.insertBefore(li, referenceNode);

// replaceChild;
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// const referenceNode = document.querySelector(".first-todo");
// ul.replaceChild(li, referenceNode)

//removeChild;
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// const referenceNode = document.querySelector(".first-todo");
// ul.removeChild(referenceNode);
