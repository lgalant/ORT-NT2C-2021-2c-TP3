const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let tareas = [];

class Tarea {
  constructor(texto_todo){
    this.texto = texto_todo;
    this.isChecked = false;
  }
}



function addTodo() {
  task = prompt("Tarea que desee realizar:");
  let tarea = new Tarea(task);
  tareas.push(tarea);
  render();
}

function render(){
  
  list.innerHTML = '';
  let cant_uncheck = 0;

  tareas.forEach((tarea) => {  
  const item = document.createElement('li');
  item.className = classNames.TODO_ITEM;

  const texto = document.createElement('span');
  texto.className = classNames.TODO_TEXT;
  texto.innerText = tarea.texto;
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = tarea.isChecked;
  checkbox.className = classNames.TODO_CHECKBOX;
  checkbox.onchange = uncheck.bind(tarea);

  const eliminar = document.createElement('button');
  eliminar.innerText = "Eliminar tarea";
  eliminar.className = classNames.TODO_DELETE;
  eliminar.onclick = borrarTarea.bind(tarea);

  if (!tarea.isChecked) cant_uncheck++;

  item.appendChild(checkbox);
  item.appendChild(texto);
  item.appendChild(eliminar);
  list.appendChild(item);
  });

  itemCountSpan.innerText = tareas.length; 
  uncheckedCountSpan.innerText = cant_uncheck;

  completo(cant_uncheck);
}

function uncheck(item_array){
  this.isChecked = !this.isChecked;
  render();
}

function completo(tareas){
  if (tareas === 0){
    alert("¡Terminaste los deberes!");
  }
}

function borrarTarea(item_array){
  let indice = tareas.indexOf(item_array);

  if (indice > -1) tareas.splice(indice, 1);
}
