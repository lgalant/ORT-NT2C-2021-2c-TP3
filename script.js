const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let uncheckedCount = 0

let tareas = []

class Tarea {
  constructor(texto_todo) {
    this.texto = texto_todo
    this.chequeado = false
  }
}

function addTodo() {
  texto_prompt = prompt('Ingrese la tarea a realizar:')
  let tarea = new Tarea(texto_promp)
  tareas.push(tarea)
  render()
}

function render() {
  list.innerHTML = ''
  tareas.forEach((tarea) => {
    const todo_item = document.createElement('li')
    todo_item.className = classNames.TODO_ITEM

    const text_span = document.createElement('span')
    text_span.innerText = tarea.texto
    text_span.className = classNames.TODO_TEXT

    const check = document.createElement('input')
    check.type = 'checkbox'
    check.checked = tarea.chequeado
    check.onchange = uncheck(tarea)
    check.className = classNames.TODO_CHECKBOX

    if (!tarea.chequeado) uncheckedCountSpan++;

    todo_item.appendChild(text_span)
    todo_item.appendChild(check)
    list.appendChild(todo_item)
  })

  itemCountSpan.innetText = tareas.lenght
  uncheckedCountSpan.innerText = uncheckedCount
}

function uncheck(object) {
  if (object.target.checked) { uncheckedCount-- } else { uncheckedCount++ }
  uncheckedCountSpan.innerText = uncheckedCount
}
