const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
  TODO_ITEM_CHECKED: 'todo-container-checked'
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let itemCount = 0;
let uncheckedCount = 0;

function addTodo() {
  const text = prompt("Enter item text");
  list.appendChild(createItemHtmlObject(text, false));
  itemCountSpan.textContent = ++itemCount;
  uncheckedCountSpan.textContent = ++uncheckedCount;
}

function createItemHtmlObject(text, checked) {
  const item = createLiHtmlObject();
  item.appendChild(createCheckboxHtmlObject(checked));
  item.appendChild(createTextHtmlObject(text));
  item.appendChild(createDeleteHtmlObject());
  return item;
}

function createLiHtmlObject() {
  const rowElement = document.createElement("li");
  rowElement.className = classNames.TODO_ITEM;
  return rowElement;
}

function createTextHtmlObject(text) {
  const textElement = document.createTextNode(text)
  textElement.className = classNames.TODO_TEXT;
  return textElement;
}

function createCheckboxHtmlObject(checked) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = classNames.TODO_CHECKBOX;
  checkbox.checked = checked;
  checkbox.onchange = toggleCheck;
  return checkbox;
}

function toggleCheck(checkbox) {
  const li = checkbox.target.parentElement;
  if (checkbox.target.checked) { 
    uncheckedCount--;
    li.classList.add(classNames.TODO_ITEM_CHECKED);
  } else {
    uncheckedCount++;
    li.classList.remove(classNames.TODO_ITEM_CHECKED);
  }
  uncheckedCountSpan.innerText = uncheckedCount;
}

function createDeleteHtmlObject() {
  const deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.value = "Remove"
  deleteButton.className = classNames.TODO_DELETE;
  deleteButton.onclick = deleteItem;
  return deleteButton;
}

function deleteItem(button) {
  const li = button.target.parentElement;
  const checkbox = li.firstChild;
  if (!checkbox.checked) {
    uncheckedCountSpan.textContent = --uncheckedCount;
  }
  itemCountSpan.textContent = --itemCount;
  li.remove();  
}