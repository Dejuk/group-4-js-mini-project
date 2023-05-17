// Retrieve tasks from localStorage or initialize an empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to render the tasks on the page
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editTask(index));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(index));
    
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();

  if (task !== '') {
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';
    renderTasks();
  }
}

// Function to edit a task
function editTask(index) {
  const newTask = prompt('Enter the new task:');
  
  if (newTask !== null && newTask.trim() !== '') {
    tasks[index] = newTask;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
  }
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

// Event listener for the "Add Task" button
const addTaskButton = document.getElementById('addTaskButton');
addTaskButton.addEventListener('click', addTask);

// Initial rendering of tasks
renderTasks();
