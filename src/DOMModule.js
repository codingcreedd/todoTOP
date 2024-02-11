import toDoModule from './index.js';
import domMethods from './domMethods.js';
import {renderTaskForm} from "../src/renderingDOM";

const domModule = (() => {
    const addTaskButton = document.querySelector('.add-task-btn');
    addTaskButton.addEventListener('click', renderTaskForm);

    const submitTaskButton = document.querySelector('.add-input-btn');
    submitTaskButton.addEventListener('click', domMethods.addTaskToList);

    const cancelTaskButton = document.querySelector('.cancel-input-btn');
    cancelTaskButton.addEventListener('click', domMethods.cancelTaskFromList);

    const importantNavButton = document.querySelector('.important-nav-btn');
    importantNavButton.addEventListener('click', renderInImportant);

})();
