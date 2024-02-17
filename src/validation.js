const errorDiv = document.querySelector('.error-div');
errorDiv.classList.add('hidden');


export const checkTaskTitleValidation = () => {
    const taskTitleInput = document.querySelector('.task-title-input');

    if(taskTitleInput.validity.tooShort || taskTitleInput.value === ''){
        errorDiv.classList.toggle('hidden');
        errorDiv.textContent = "Your title or description is too short!";
        return false;
    }
    else
    {
        errorDiv.textContent = "";
        if(!errorDiv.classList.contains('hidden'))
            errorDiv.classList.add('hidden');

        return true;
    }

};

export const checkTaskDescriptionValidation = () => {
    const taskDescriptionInput = document.querySelector('.task-description-input');

    if(taskDescriptionInput.validity.tooShort){
        errorDiv.classList.toggle('hidden');
        errorDiv.textContent = "Your title or description is too short!";
        return false;
    }
    else
    {
        return true;
    }
}