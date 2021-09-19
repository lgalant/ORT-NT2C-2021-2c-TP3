const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');
const buscarInput = document.getElementById('Buscar');

let tareas = []; // mantengo todas las tareas originales
let tareasRender = [];

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
  tareasRender = [...tareas];
  buscarInput.value = '';
  render();
}

function buscarTodo() {
  tareasRender = tareas.filter(t => t.texto.toLowerCase().includes(buscarInput.value.toLowerCase()));
  render();
}


function render() {
  list.innerHTML = "";
  let uncheckedCount = 0;
  tareasRender.forEach((tarea) => {
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

  itemCountSpan.innerText = tareasRender.length;
  
  uncheckedCountSpan.innerText = uncheckedCount;
}

function uncheck_array(item_array) {
  this.chequeado = !this.chequeado;
  render();
}