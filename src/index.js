import '../styles/taskPage.css';
import '../styles/mainStyles.css';

export default function toDoModule() {
    const todolist = [];

    const createToDo = (description, projectName = '') => {
        return {
            description: description,
            status: 'pending', //two statuses: pending & done
            important: false,
            today: false,
            ['this-week']: false,
            project: projectName
        }
    };

    const addToDo = (todo) => {
        todolist.push(todo);
    };

    const deleteToDo = (todo) => {
        todolist = todolist.filter(item => item === todo);
    };

    return {
        createToDo,
        addToDo,
        deleteToDo,
    };
}
