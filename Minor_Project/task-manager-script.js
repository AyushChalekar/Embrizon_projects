const form = document.getElementById('task-form');
const taskInput = document.getElementById('task');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `
      ${taskText}
      <button class="btn btn-danger btn-sm ml-auto delete">Delete</button>
    `;
    taskList.appendChild(li);

    taskInput.value = '';

    // Delete task
    const deleteButton = li.querySelector('.delete');
    deleteButton.addEventListener('click', function() {
      li.remove();
    });
  }
});
