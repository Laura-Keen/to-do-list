// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButtton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButtton.addEventListener('click', addTodo);

// Functions
function addTodo()