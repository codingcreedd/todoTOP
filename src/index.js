import '../styles/taskPage.css';
import '../styles/mainStyles.css';

export const todolist = [];

export default function toDoModule() {
    const currentScreen = 'Home';

    const createToDo = (title, description, projectName = '') => {
        return {
            title: title,
            description: description,
            page: 'Home',
            status: 'pending', //two statuses: pending & done
            important: false,
            today: false,
            ['this-week']: false,
            finished: false,
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
