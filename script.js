const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function addTodo() {
  const newLi = document.createElement('li')
  const text = document.createTextNode('New item')
  newLi.className = classNames.TODO_ITEM
  text.className = classNames.TODO_TEXT
  newLi.appendChild(text)
  list.appendChild(newLi)
}
