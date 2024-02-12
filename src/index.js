import '../styles/taskPage.css';
import '../styles/mainStyles.css';

export const todolist = [];

export default function toDoModule() {
    const createToDo = (title, description, projectName = '') => {
        return {
            title: title,
            description: description,
            page: 'Home',
            important: false,
            today: false,
            ['this-week']: false,
            completed: false,
            project: projectName
        }
    };

    const addToDo = (todo) => {
        todolist.push(todo);
    };

    return {
        createToDo,
        addToDo,
        todolist,
    };
}
