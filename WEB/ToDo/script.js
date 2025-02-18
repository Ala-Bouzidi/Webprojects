// Récupérer les éléments du DOM
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Fonction pour ajouter une tâche
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Veuillez entrer une tâche valide.");
        return;
    }

    // Créer un nouvel élément de liste
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    // Ajouter le texte de la tâche
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;
    taskItem.appendChild(taskTextSpan);

    // Ajouter un bouton pour supprimer la tâche
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteButton);

    // Ajouter un événement pour marquer la tâche comme terminée
    taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    // Ajouter la tâche à la liste
    taskList.appendChild(taskItem);

    // Vider le champ de saisie
    taskInput.value = '';
}

// Écouter le clic sur le bouton "Ajouter"
addTaskButton.addEventListener('click', addTask);

// Écouter la touche "Entrée" dans le champ de saisie
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});