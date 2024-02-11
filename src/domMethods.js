import toDoModule from ".";
import {removeTaskFormInputs, addTaskOnScreen} from '../src/renderingDOM'

const toDoModule_ = toDoModule();

//LOGIC

const cancelTaskFromList = () => {
    const taskFormContainer = document.querySelector('.task-form-container');
    taskFormContainer.style.display = 'none';
};

const addTaskToList = () => {
    const taskTitle = document.querySelector('.task-title-input');
    const taskDescription = document.querySelector('.task-description-input');

    if(taskTitle.value !== '')
    {
        const taskObject = toDoModule_.createToDo(taskTitle.value, taskDescription.value);
        toDoModule_.addToDo(taskObject);
        addTaskOnScreen(taskTitle.value, taskDescription.value);
        removeTaskFormInputs(taskTitle, taskDescription);
        cancelTaskFromList();
    }
    
};

const taskFinished = (e) => {
    console.log(toDoModule_.todolist);
    const targetParent = e.target.parentNode;
    const taskTitle = targetParent.querySelector('.task-title').innerText;
    const taskDescription = targetParent.querySelector('.task-description').innerText;

    toDoModule_.todolist.forEach(task => {
        // Check if the current task matches the clicked task
        if (task.title === taskTitle && task.description === taskDescription) {
            task.finished = !task.finished;
        }
    });

}

const deleteTask = (e) => {

    console.log(toDoModule_.todolist);
    const targetParent = e.target.parentNode.parentNode;
    const taskTitle = targetParent.querySelector('.task-title').innerText;
    const taskDescription = targetParent.querySelector('.task-description').innerText;

    for(let i = 0; i < toDoModule_.todolist.length; i++)
    {
        if(toDoModule_.todolist[i].title === taskTitle && toDoModule_.todolist[i].description === taskDescription)
            toDoModule_.todolist.splice(i, 1);
    }

    console.log(toDoModule_.todolist);
};

const taskImportant = (e) => {
    console.log(toDoModule_.todolist);
    const targetParent = e.target.parentNode.parentNode;
    const taskTitle = targetParent.querySelector('.task-title').innerText;
    const taskDescription = targetParent.querySelector('.task-description').innerText;

    toDoModule_.todolist.forEach(task => {
        if (task.title === taskTitle && task.description === taskDescription) {
            task.important = !task.important;
        }
    });
}

export default {
    cancelTaskFromList,
    addTaskToList,
    taskFinished,
    deleteTask,
    taskImportant,
};