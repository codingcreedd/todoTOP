import toDoModule from './index.js';
import domMethods from './domMethods.js';
import {renderTaskForm, renderTasksOnScreen} from "../src/renderingDOM";

const otherViewdisplayChange = () => {
    const homeDisplay = document.querySelector('.tasks-home-view');
    homeDisplay.style.display = 'none';
    
    const addTaskButton = document.querySelector('.add-task-btn');
    addTaskButton.style.display = 'none';
    
    const addTaskText = document.getElementById('add-task-text');
    addTaskText.style.display = 'none';
}

const domModule = (() => {
    const addTaskButton = document.querySelector('.add-task-btn');
    addTaskButton.addEventListener('click', renderTaskForm);

    const submitTaskButton = document.querySelector('.add-input-btn');
    submitTaskButton.addEventListener('click', domMethods.addTaskToList);

    const cancelTaskButton = document.querySelector('.cancel-input-btn');
    cancelTaskButton.addEventListener('click', domMethods.cancelTaskFromList);

    const homeNavButton = document.querySelector('.home-nav-btn');
    homeNavButton.addEventListener('click', () => {
        const otherViewContainer = document.querySelector('.tasks-other-view');
        otherViewContainer.style.display = 'none';

        const homeDisplay = document.querySelector('.tasks-home-view');
        homeDisplay.style.display = 'flex';
    });

    const importantNavButton = document.querySelector('.important-nav-btn');
    importantNavButton.addEventListener('click', () => {
        otherViewdisplayChange();

        renderTasksOnScreen('important');
    });

})();
