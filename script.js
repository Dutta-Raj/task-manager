document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    // Add new task
    addBtn.addEventListener('click', () => {
        if (taskInput.value.trim() !== '') {
            addTask(taskInput.value);
            taskInput.value = '';
        }
    });

    // Enter key support
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">×</button>
        `;
        taskList.appendChild(li);

        // Add delete functionality
        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });
    }
});
