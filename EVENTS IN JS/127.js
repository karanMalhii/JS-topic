const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTodoList = todoInput.value;
  const createLi = document.createElement("li");
  const liInnerHtml = `<span class="text">${todoInput.value}</span>
  <div class="todo-buttons">
    <button class="todo-btn done">Done</button>
    <button class="todo-btn remove">Remove</button>
  </div>`;
  createLi.innerHTML = liInnerHtml;
  todoList.append(createLi);

  todoInput.value = "";
});

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("done")) {
    const removeLI = e.target.parentNode.previousElementSibling;
    removeLI.style.textDecoration = "line-through";
  }
  if (e.target.classList.contains("remove")) {
    const doneLi = e.target.parentNode.parentNode;
    doneLi.remove();
  }
});
