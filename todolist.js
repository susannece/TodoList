
let idCounter = 0;
let inPutElement, allTodoElement;
let toDo = [
  {
    id: 1,
    task: "Shopping"
  },
  {
    id: 2,
    task: "Fishing"
  },
  {
    id: 3,
    task: "Cooking"
  },
  {
    id: 4,
    task: "Sleeping"
  }
];

function init(){
  addTodoItem();
  initAddButton();
  addInput();
}

function addTodoItem(){
  toDo.forEach(function(toDo){
    addTodoElement(toDo);
  })
}

/* function addTodoElement(toDo){
  allTodoElement = document.getElementById('all');

  let todoWrapperElement = document.createElement('div');
  todoWrapperElement.setAttribute('class', 'todo-wrapper');
  todoWrapperElement.setAttribute('title', toDo.task);

  let todoTaskElement = document.createElement('h3');
  todoTaskElement.innerText = toDo.task;
  todoWrapperElement.appendChild(todoTaskElement);

  let todoIdElement = document.createElement('p');
  todoIdElement.innerText = 'Id: ' + toDo.id;
  todoWrapperElement.appendChild(todoIdElement);

   let deleteButton = initDeleteButton();
  todoWrapperElement.appendChild(deleteButton);

  allTodoElement.appendChild(todoWrapperElement);
}
 */

function addTodoElement(toDo){
  let todoWrapperElement = document.createElement('div');
  todoWrapperElement.setAttribute('class', 'todo-wrapper');
  todoWrapperElement.setAttribute('title', toDo.task);

  let todoTaskElement = document.createElement('input');
  todoTaskElement.classList.add('text');
  todoTaskElement.type = 'text';
  todoTaskElement.value = toDo.id + ' ' + toDo.task;
  todoTaskElement.setAttribute('readonly', 'readonly');
  todoWrapperElement.appendChild(todoTaskElement);

  let deleteButton = initDeleteButton();
  todoWrapperElement.appendChild(deleteButton);

  allTodoElement.appendChild(todoWrapperElement);
}

function initDeleteButton(){
  let deleteButton = document.createElement('button');
  deleteButton.innerText = 'X';
  deleteButton.className = 'delete';
  deleteButton.addEventListener('onclick', removeTodo);
  return deleteButton;
}
function removeTodo(event){
//  toDo.splice(event.target.parentElement.title, 1);
  allTodoElement.removeChild(event.target.parentElement);
}

function initAddButton(){
  let addButtonElement = document.createElement('button');
  addButtonElement.className = 'add-button';
  addButtonElement.textContent = 'press to add todo item';
  document.body.appendChild(addButtonElement);
  addButtonElement.addEventListener('onclick', addTodo);
}

function addTodo(){
  if(inPutElement.value !== '' && isNaN(Number(inPutElement.value))){
    idCounter++;
    let newTodo = {
      task: inPutElement.value,
      id: idCounter
    };
    toDo.push(newTodo);
    addTodoElement(newTodo);
  } else {
    alert(inPutElement.value + ' it is not a valid Todo name.');
  }
}

function addInput(){
  inPutElement = document.getElementById('new-task-input');
  addTodo();
  
  let labelElement = document.createElement('label');
  labelElement.textContent = 'Todo: ';

  inPutElement = document.createElement('input');
  inPutElement.setAttribute('name', 'todo');
  inPutElement.setAttribute('type', 'text');

  document.body.insertBefore(inPutElement, document.body.children[0]);
  document.body.insertBefore(labelElement, document.body.children[0]);
}

document.addEventListener('DOMContentLoaded', init);

//Select DOM 

// "Step 1"
// "Grabb the todo-input"
// "Grabb the todo-button"
// "Grabb the todo-list"
// "Grabb the filter-todo"

//Event Listeners

//Step 2 Add Eventlistners here like add todo

//Functions // Step 3 create your li

function addTodo(event){
  // Prevent form from submitting or reloading Step 4
// Create a todo div-> and add todo          Step 4
// Create li                                 Step 4
// Create Completed Button
// Create trash button
// attach final Todo
}

function deleteTodo(e){}
// e.target.parentElement.remove();
function filterTodo(e){}
// use switch here as we have all, completed and uncompleted
function saveLocalTodos(todo){}

function removeLocalTodos(todo){}

function getTodos(){}