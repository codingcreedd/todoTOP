import toDoModule from './index.js';

const domModule = (() => {
    const addTaskButton = document.querySelector('.add-task-btn');
    addTaskButton.addEventListener('click', () => {
        console.log('dfdffd');
        document.querySelector('.task-form-container').style.display = 'flex';
    });
})();
