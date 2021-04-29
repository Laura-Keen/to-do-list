// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButtton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButtton.addEventListener('click', addTodo);

// Functions

function addTodo(event) {
  event.preventDefault(); // Prevents form from submitting

  // Todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  // Create li
  const newTodo = document.createElement('li');
  newTodo.innerText = 'hey';
  newTodo.classList.add('todo-item');
}