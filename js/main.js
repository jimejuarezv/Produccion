function showMainPanel() {
    document.getElementById('login-panel').classList.add('hidden');
    document.getElementById('main-panel').classList.remove('hidden');
}

document.getElementById('add-task-button').addEventListener('click', function() {
    document.getElementById('task-form').classList.toggle('hidden');
});

document.getElementById('new-task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener valores del formulario
    const taskTitle = document.getElementById('task-title').value;
    const taskDescription = document.getElementById('task-description').value;
    const taskDeadline = document.getElementById('task-deadline').value;

    // Crear un nuevo elemento de tarea
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `<strong>${taskTitle}</strong> - ${taskDescription} <em>(Fecha límite: ${taskDeadline})</em>`;

    // Agregar la tarea a la lista
    document.getElementById('tasks').appendChild(taskItem);

    // Ocultar el formulario y limpiar los campos
    document.getElementById('task-form').classList.add('hidden');
    document.getElementById('new-task-form').reset();
});

function login(event) {
    event.preventDefault();
    showMainPanel();
}
