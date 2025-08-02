function addTask() 
{
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        ${taskText} <button onclick="removeTask(this)">Remove</button>
    `;
    document.getElementById('taskList').appendChild(li);
    input.value = '';
}

function removeTask(button) 
{
    const li = button.parentElement;
    li.remove();
}
