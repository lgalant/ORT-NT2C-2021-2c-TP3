const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");
const searchBox = document.getElementById("buscador");

let todoItems = [];
let todoItemsFiltered = [];

//función llamada por el botón
function addTodo() {
  addTodoItem();
  filterList();
}

//añade un elemento al array en base al input del usuario
function addTodoItem() {
  let promptText = prompt("Agregar tarea:");

  if (promptText === "" || promptText === undefined || promptText === null) {
    return;
  }

  let todoItem = {
    text: promptText,
    status: false,
  };

  todoItems.push(todoItem);
}

//filtra la lista original y dibuja el html de nuevo
function filterList() {
  todoItemsFiltered = todoItems.filter(
    (i) =>
      searchBox.value === "" ||
      i.text.toUpperCase().includes(searchBox.value.toUpperCase())
  );

  drawList();
}

//dibuja todos los elementos de la lista
function drawList() {
  list.innerHTML = "";
  updateCounts();

  todoItemsFiltered.forEach((element) => {
    list.append(createListElement(element));
  });
}

//crea un todo item para ser agregado en la lista
function createListElement(element) {
  let container = document.createElement("li");
  container.className = classNames.TODO_ITEM;

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = classNames.TODO_CHECKBOX;
  checkbox.checked = element.status;
  checkbox.onchange = (e) => {
    element.status = e.target.checked;
    updateCounts();
  };
  container.append(checkbox);

  let text = document.createElement("span");
  text.innerText = element.text;
  text.className = classNames.TODO_TEXT;
  container.append(text);

  let del = document.createElement("button");
  del.className = classNames.TODO_DELETE;
  del.onclick = () => {
    todoItems.splice(todoItems.indexOf(element), 1);
    filterList();
  };
  container.append(del);

  return container;
}

//actualiza los contadores en base a la lista filtrada
function updateCounts() {
  itemCountSpan.innerText = todoItemsFiltered.length;
  uncheckedCountSpan.innerText = todoItemsFiltered.filter(
    (i) => !i.status
  ).length;
}
