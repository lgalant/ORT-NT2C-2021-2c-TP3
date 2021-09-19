const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let itemCount = 0
let uncheckedCount = 0

function addTodo() {
  const toDoText = prompt('Ingrese la tarea a realizar:')
  
  const newLi = document.createElement('li')
  newLi.className = classNames.TODO_ITEM
  const text = document.createTextNode(toDoText)
  text.className = classNames.TODO_TEXT
  const check = document.createElement('input')
  check.type = 'checkbox'
  check.classNames = classNames.TODO_CHECKBOX
  check.checked = false
  check.onchange = uncheck
  newLi.appendChild(text)
  newLi.appendChild(check)
  list.appendChild(newLi)

  updateItemCount()
  updateUncheckedCount()
}

function updateItemCount() {
  itemCount++
  itemCountSpan.innerText = itemCount
}

function updateUncheckedCount() {
  uncheckedCount++
  uncheckedCountSpan.innerText = uncheckedCount
}

function uncheck(objeto) {
  if(objeto.target.checked) { uncheckedCount-- } else { uncheckedCount++ }
  uncheckedCountSpan.innerText = uncheckedCount
}