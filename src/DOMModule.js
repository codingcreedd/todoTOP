import domMethods from "./domMethods.js";
import { renderTaskForm, renderTasksOnScreen } from "../src/renderingDOM";

const otherViewdisplayChange = () => {
  const addTaskButton = document.querySelector(".add-task-btn");
  addTaskButton.style.display = "none";

  const addTaskText = document.getElementById("add-task-text");
  addTaskText.style.display = "none";
};

export const revertDisplayChangesInHome = () => {
  const addTaskButton = document.querySelector(".add-task-btn");
  addTaskButton.style.cssText = "display: block;";

  const addTaskText = document.getElementById("add-task-text");
  addTaskText.style.display = "block";
};

const changeHeadingName = (page) => {
  const pageTitle = document.querySelector(".page-title");
  pageTitle.innerText = `${page}`;
};

const changeHeadingLogo = () => {
  const pageIcon = document.querySelector(".page-icon");
  pageIcon.classList.remove("bx", "bx-folder-open");
  pageIcon.classList.add("bx", "bx-home-alt");
};

const domModule = (() => {
  const addTaskButton = document.querySelector(".add-task-btn");
  addTaskButton.addEventListener("click", () => {
    const taskForm = document.querySelector(".task-form");
    const submitButton = taskForm.querySelector(".add-input-btn");
    submitButton.style.display = "block";

    const updateTaskButton = taskForm.querySelector(".update-input-btn");
    updateTaskButton.style.display = "none";

    const titleFormField = document.querySelector(".task-title-input");
    const descriptionFormField = document.querySelector(
      ".task-description-input",
    );
    titleFormField.value = "";
    descriptionFormField.value = "";
    renderTaskForm();
  });

  const submitTaskButton = document.querySelector(".add-input-btn");
  submitTaskButton.addEventListener("click", domMethods.addTaskToList);

  const cancelTaskButton = document.querySelector(".cancel-input-btn");
  cancelTaskButton.addEventListener("click", domMethods.cancelTaskFromList);

  const navButtons = document.querySelectorAll(".nav");
  navButtons.forEach((navButton) => {
    navButton.addEventListener("click", (e) => {
      console.log("clicked");
      changeHeadingLogo();
      otherViewdisplayChange();

      changeHeadingName(e.target.innerText);
      if (e.target.innerText === "Home") {
        revertDisplayChangesInHome();
        changeHeadingName(e.target.innerText);
      }

      renderTasksOnScreen(
        e.target.innerText.toLowerCase().replace(/\s+/g, "-"),
      );
    });
  });
})();
