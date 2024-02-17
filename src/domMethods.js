import toDoModule from ".";
import { todolist } from "./index.js";
import { removeTaskFormInputs, addTaskOnScreen } from "../src/renderingDOM";
import {checkTaskTitleValidation, checkTaskDescriptionValidation } from "./validation.js";

const toDoModule_ = toDoModule();

//LOGIC

const cancelTaskFromList = () => {
  const titleFormField = document.querySelector(".task-title-input");
  const descriptionFormField = document.querySelector(
    ".task-description-input",
  );

  titleFormField.value = "";
  descriptionFormField.value = "";

  const taskFormContainer = document.querySelector(".task-form-container");
  taskFormContainer.style.display = "none";
};

const addTaskToList = () => {
  const taskTitle = document.querySelector(".task-title-input");
  const taskDescription = document.querySelector(".task-description-input");
  const pageTitle = document.querySelector(".page-title");

  if (checkTaskTitleValidation() === true && checkTaskDescriptionValidation() === true) {
    let projectName = "";
    if (pageTitle.innerText !== "Home") projectName = pageTitle.innerText;

    const taskObject = toDoModule_.createToDo(
      taskTitle.value,
      taskDescription.value,
      projectName,
    );
    toDoModule_.addToDo(taskObject);
    console.log(todolist);
    addTaskOnScreen(taskTitle.value, taskDescription.value);
    removeTaskFormInputs(taskTitle, taskDescription);
    cancelTaskFromList();
  }
};

const taskFinished = (e) => {
  console.log(todolist);
  const targetParent = e.target.parentNode;
  const taskTitle = targetParent.querySelector(".task-title").innerText;
  const taskDescription =
    targetParent.querySelector(".task-description").innerText;

  todolist.forEach((task) => {
    // Check if the current task matches the clicked task
    if (task.title === taskTitle && task.description === taskDescription) {
      task.completed = !task.completed;
    }
  });
};

const deleteTask = (e) => {
  const targetParent = e.target.parentNode.parentNode;
  const taskTitle = targetParent.querySelector(".task-title").innerText;
  const taskDescription =
    targetParent.querySelector(".task-description").innerText;

  for (let i = 0; i < todolist.length; i++) {
    if (
      todolist[i].title === taskTitle &&
      todolist[i].description === taskDescription
    )
      todolist.splice(i, 1);
  }
};

const taskImportant = (e) => {
  console.log(todolist);
  const targetParent = e.target.parentNode.parentNode;
  const taskTitle = targetParent.querySelector(".task-title").innerText;
  const taskDescription =
    targetParent.querySelector(".task-description").innerText;

  todolist.forEach((task) => {
    if (task.title === taskTitle && task.description === taskDescription) {
      task.important = !task.important;
    }
  });
};

export default {
  cancelTaskFromList,
  addTaskToList,
  taskFinished,
  deleteTask,
  taskImportant,
};
