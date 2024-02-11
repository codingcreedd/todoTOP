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

const revertDisplayChangesInHome = () => {
    const addTaskButton = document.querySelector('.add-task-btn');
    addTaskButton.style.display = 'block';
    
    const addTaskText = document.getElementById('add-task-text');
    addTaskText.style.display = 'block';
}

const showOtherViewContainer = () => {
    const otherViewContainer = document.querySelector('.tasks-other-view');
    otherViewContainer.style.display = 'flex';
}

const changeHeadingName = (page) => {
    const pageTitle = document.querySelector('.page-title');
    pageTitle.innerText = `${page}`;
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
        changeHeadingName('Home');
        const otherViewContainer = document.querySelector('.tasks-other-view');
        otherViewContainer.style.display = 'none';

        revertDisplayChangesInHome();
        const homeDisplay = document.querySelector('.tasks-home-view');
        homeDisplay.style.display = 'flex';
    });

    const navButtons = document.querySelectorAll('.nav');
    navButtons.forEach(navButton => {
        navButton.addEventListener('click', (e) => {
            if(e.target.innerText !== 'Home')
            {
                console.log('clicked')
                otherViewdisplayChange();
                changeHeadingName(e.target.innerText)
                showOtherViewContainer();
                renderTasksOnScreen((e.target.innerText).toLowerCase().replace(/\s+/g, '-'));
            }
        });
    });

})();
