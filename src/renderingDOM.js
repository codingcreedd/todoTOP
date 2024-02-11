import domMethods from './domMethods.js';

// Function to create the task container
const createTaskContainer = () => {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task');
    return taskContainer;
};

// Function to create the radio circle icon
const createRadioCircleIcon = () => {
    const radioCircleIcon = document.createElement('i');
    radioCircleIcon.classList.add('bx', 'bx-radio-circle');
    radioCircleIcon.addEventListener('click', e => {
        if(e.target.style.color !== 'green')
            e.target.style.color = 'green';
        else
            e.target.style.color = 'rgb(58, 58, 221)';

        domMethods.taskFinished(e);
    });
    return radioCircleIcon;
};

// Function to create the task title paragraph
const createTaskTitle = (title) => {
    const taskTitle = document.createElement('p');
    taskTitle.classList.add('task-title');
    taskTitle.innerText = title;
    return taskTitle;
};

// Function to create the task description paragraph
const createTaskDescription = (description) => {
    const taskDescription = document.createElement('p');
    taskDescription.classList.add('task-description');
    taskDescription.innerText = description;
    return taskDescription;
};

// Function to create the task navigation section
const createTaskNav = () => {
    const taskNav = document.createElement('div');
    taskNav.classList.add('task-nav');
    return taskNav;
};

// Function to create the calendar icon with date input
const createCalendarIcon = () => {
    const calendarIcon = document.createElement('i');
    calendarIcon.classList.add('bx', 'bx-calendar');
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.style.border = 'none';
    dateInput.style.opacity = '0';
    const spanWrapper = document.createElement('span');
    spanWrapper.appendChild(dateInput);
    calendarIcon.appendChild(spanWrapper);
    return calendarIcon;
};

// Function to create the pencil icon
const createPencilIcon = () => {
    const pencilIcon = document.createElement('i');
    pencilIcon.classList.add('bx', 'bxs-pencil');
    return pencilIcon;
};

// Function to create the star icon
const createStarIcon = () => {
    const starIcon = document.createElement('i');
    starIcon.classList.add('bx', 'bxs-star');

    starIcon.addEventListener('click', e => {
        if(e.target.style.color !== 'rgb(197, 197, 37)')
            e.target.style.color = 'rgb(197, 197, 37)';
        else
            e.target.style.color = 'black';

        domMethods.taskImportant(e);
    });

    return starIcon;
};

// Function to create the trash icon
const createTrashIcon = () => {
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('bx', 'bxs-trash-alt');

    trashIcon.addEventListener('click', e => {
        domMethods.deleteTask(e);
        const taskDiv = e.target.parentNode.parentNode;
        const taskDivParent = taskDiv.parentNode;

        taskDivParent.removeChild(taskDiv);
    });

    return trashIcon;
};


//RENDERING METHODS

export const renderTaskForm = () => {
    const taskFormContainer = document.querySelector('.task-form-container');
    taskFormContainer.style.display = 'flex';
};

export const removeTaskFormInputs = (title, description) => {
    title.value = '';
    description.value = '';
};

// Function to add all elements to the task container and append it to the tasks container
export const addTaskOnScreen = (title, description) => {
    // Create task container
    const taskContainer = createTaskContainer();

    // Create elements
    const radioCircleIcon = createRadioCircleIcon();
    const taskTitle = createTaskTitle(title);
    const taskDescription = createTaskDescription(description);
    const taskNav = createTaskNav();
    const calendarIcon = createCalendarIcon();
    const pencilIcon = createPencilIcon();
    const starIcon = createStarIcon();
    const trashIcon = createTrashIcon();

    // Append elements to task navigation section
    taskNav.appendChild(calendarIcon);
    taskNav.appendChild(pencilIcon);
    taskNav.appendChild(starIcon);
    taskNav.appendChild(trashIcon);

    // Append elements to task container
    taskContainer.appendChild(radioCircleIcon);
    taskContainer.appendChild(taskTitle);
    taskContainer.appendChild(taskDescription);
    taskContainer.appendChild(taskNav);

    // Append task container to tasks container
    const tasksContainer = document.querySelector('.tasks');
    tasksContainer.appendChild(taskContainer);
};


//The following function is necessary when a user switches from one page to another (home is not included)
export const renderTasksOnScreen = (page) => {
    //use todolist array later (when you implement this function & delete this comment)
}


