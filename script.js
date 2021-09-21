const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let itemCount = 0;
let uncheckecCount = 0;

function addTodo() {
  const task = prompt('Agregar Tarea')
  const new_todo = document.createElement('li')
  new_todo.className = classNames.TODO_ITEM

  const todoText = document.createElement('span')
  todoText.innerText = task
  todoText.className = classNames.TODO_TEXT

  const check = document.createElement('input')
  check.type = 'checkbox'
  check.onchange = uncheck
  check.className = classNames.TODO_CHECKBOX

  const deleteBtn = document.createElement('button')
  deleteBtn.innerText = 'Eliminar'
  customElements.className = classNames.TODO_DELETE
  deleteBtn.onclick = deleteTodo
  

  new_todo.appendChild(todoText)
  new_todo.appendChild(check)
  new_todo.appendChild(deleteBtn)

  list.appendChild(new_todo)

  itemCount++;
  itemCountSpan.innerText = itemCount;

  uncheckecCount++;
  uncheckedCountSpan.innerText = uncheckecCount;

  
}

function uncheck(object){
  
  if (object.target.checked){
    uncheckecCount--;
  } else {
    uncheckecCount++;
  }
  
  uncheckedCountSpan.innerText = uncheckecCount

}

function deleteTodo(e) {
  e.target.parentElement.remove()
  itemCount--;
  itemCountSpan.innerText = itemCount
  uncheckecCount--;
  uncheckedCountSpan.innerText = uncheckecCount
}

