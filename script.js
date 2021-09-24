const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let tareas = []
let uncheckedCount = 0

class Tarea {

  constructor(texto_todo) {
    this.texto = texto_todo
    this.chequeado = false

  }
}

function addTodo() {

  texto_prompt = prompt('Ingrese la tarea a realizar:')
  let tarea = new Tarea(texto_prompt)
  tareas.push(tarea)
  render()

}

function render() {

  list.innerHTML = ''
  uncheckedCount = 0

  tareas.forEach((tarea) => {
    const todo_item = document.createElement('li')
    todo_item.className = classNames.TODO_ITEM

    const text_span = document.createElement('span')
    text_span.className = classNames.TODO_TEXT
    text_span.innerText = tarea.texto

    const check = document.createElement('input')
    check.type = 'checkbox'
    check.checked = tarea.chequeado
    check.className = classNames.TODO_CHECKBOX
    check.onchange = uncheck.bind(tarea)

    if (!tarea.chequeado) uncheckedCount++

    todo_item.appendChild(check)
    todo_item.appendChild(text_span)
    list.appendChild(todo_item)
    
  })

  itemCountSpan.innerText = tareas.length
  uncheckedCountSpan.innerText = uncheckedCount
}

function uncheck(object) {
  if (object.target.checked) { uncheckedCount-- } else { uncheckedCount++ }
  this.chequeado = !this.chequeado
  uncheckedCountSpan.innerText = uncheckedCount
}

