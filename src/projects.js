import toDoModule from ".";
import { todolist  } from ".";
import {removeTaskFormInputs, addTaskOnScreen} from '../src/renderingDOM';
import { revertDisplayChangesInHome } from "./DOMModule";

const toDoModule_ = toDoModule();

const projectRendererModule = () => {

    const changeHeadingName = (newName) => {
        const pageTitle = document.querySelector('.page-title');
        pageTitle.innerText = newName;
    }

    const changeHeadingLogo = () => {
        const pageIcon = document.querySelector('.page-icon');
        pageIcon.classList.remove('bx', 'bx-home-alt');
        pageIcon.classList.add('bx', 'bx-folder-open');
    }

    const renderProjectTasks = (projectName) => {
        toDoModule_.todolist.forEach(task => {
            if(task.project === projectName)
                addTaskOnScreen(task.title, task.description);
        });
    }

    const removeProjectTasksFromView = () => {
        const tasksContainer = document.querySelector('.tasks-home-view')
        while(tasksContainer.firstChild)
            tasksContainer.removeChild(tasksContainer.firstChild);
    }

    const addProjectToList = (projectName) => {
        // Create project container
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('project');
    
        // Create folder icon
        const folderIcon = document.createElement('i');
        folderIcon.classList.add('bx', 'bx-folder');
    
        // Create project name element
        const projectNameElement = document.createElement('p');
        projectNameElement.classList.add('project-name');
        projectNameElement.textContent = projectName;
    
        // Append icon and project name to project container
        projectContainer.appendChild(folderIcon);
        projectContainer.appendChild(projectNameElement);
    
        // Get projects container
        const projectsContainer = document.querySelector('.projects');
    
        // Append project container to projects container
        projectsContainer.appendChild(projectContainer);
        
        const projectsHTML = document.querySelectorAll('.project');
        projectsHTML.forEach(project => {
            project.addEventListener('click', e => {
                changeHeadingName(e.target.innerText);
                changeHeadingLogo();
                revertDisplayChangesInHome();
                removeProjectTasksFromView();
                renderProjectTasks(e.target.innerText);
            });
        });
    };

    const cancelProjectForm = () => {
       const projectForm = document.querySelector('.project-form');
       projectForm.style.cssText = "display: none;";
    }
    
    const renderProjectForm = () => {
        const projectForm = document.querySelector('.project-form');
        projectForm.style.display = 'flex';
    }

    const removeInputFields = () => {
        const projectNameInputField = document.querySelector('.project-title-input');
        projectNameInputField.value = '';
    };


    return{
        addProjectToList,
        renderProjectForm,
        cancelProjectForm,
        removeInputFields
    }
};

const projectsModule = (() => {

    const projectRenderer = projectRendererModule();
    const projects = []; //contains project names

    const addProjectToProjectList = (projectName) => {
        projects.push(projectName);
    }

    const addProjectButton = document.querySelector('.adding-class');
    addProjectButton.addEventListener('click', projectRenderer.renderProjectForm);

    const cancelProjectFormButton = document.querySelector('.cancel-project-btn');
    cancelProjectFormButton.addEventListener('click', projectRenderer.cancelProjectForm);


    const createProjectButton = document.querySelector('.create-project-btn');
    createProjectButton.addEventListener('click', () => {
        const projectName = document.querySelector('.project-title-input').value;
        if(projectName !== '')
        {
            projectRenderer.addProjectToList(projectName);
            projectRenderer.cancelProjectForm();
            projectRenderer.removeInputFields();
            addProjectToProjectList(projectName);
        }
    });

})();