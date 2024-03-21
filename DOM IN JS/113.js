//innerHTML to add html element
// This is not best mehtod.

// const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML);
// // todoList.innerHTML = "<li> new todo</li>"
// todoList.innerHTML += "<li> new todo</li>";
// todoList.innerHTML += "<li> other new todo</li>";

//next
// This is best method
//document.createElement()
//append✅ or appendChild
//prepend
//remove

// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teach students");
// const todoList = document.querySelector(".todo-list");
// newTodoItem.append(newTodoItemText);
// todoList.append(newTodoItem)
// console.log(todoList);

//other way
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoItem) //add in end
// todoList.prepend(newTodoItem) // add in starting

//remove
// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();
// console.log(todo1);

// before
// after

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);
// todoList.after(newTodoItem);

//clone nodes
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// const li2 = li.cloneNode(true);
// ul.append(li2);
// ul.prepend(li);
