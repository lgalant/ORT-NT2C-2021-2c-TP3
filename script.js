const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

let tareas = [];


class Tarea {
  constructor(texto_todo) {
    this.texto = texto_todo;
    this.chequeado = false;
  }
}

function addTodo() {
  // alert('Boton Add TODO clickeado!')
  
  texto_prompt = prompt("Tarea a realizar");
  tarea = new Tarea(texto_prompt);
  tareas.push(tarea);
  
  render();
}


function render() {
  list.innerHTML = "";
  let uncheckedCount = 0;
  tareas.forEach((tarea) => {
    const todo_item = document.createElement("li");
    todo_item.className = classNames.TODO_ITEM;

    const text_span = document.createElement("span");
    text_span.innerText = tarea.texto;
    text_span.className = classNames.TODO_TEXT;

    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = tarea.chequeado;
    check.onchange = uncheck_array.bind(tarea);
    check.className = classNames.TODO_CHECKBOX;

    if (!tarea.chequeado) uncheckedCount++;

    todo_item.appendChild(text_span);
    todo_item.appendChild(check);
    list.appendChild(todo_item);
  });

  itemCountSpan.innerText = tareas.length;
  
  uncheckedCountSpan.innerText = uncheckedCount;
}

function uncheck_array(item_array) {
  this.chequeado = !this.chequeado;
  render();
}