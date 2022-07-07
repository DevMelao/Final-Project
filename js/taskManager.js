// Creates the HTML code for a new task 
const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => `
    <li class="list-group-item" data-task-id=${id}>
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${name}</h5>
            <span class="badge badge-danger">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned To: ${assignedTo}</small>
            <small>Due: ${dueDate}</small>
        </div>
        <p>${description}</p>
        <div class="d-flex w-100 justify-content-end">
            <button class="btn btn-outline-success done-button ${status === 'TODO' ? 'visible' : 'invisible'}">Mark As Done</button>
        </div>
    </li>


    </li>
`;
// Class that tracks the tasks in an array and property ids
class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }
    // Class
    addTask(name, description, assignedTo, dueDate) {
        const task = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'TODO'
        };

        this.tasks.push(task);
    }

    getTaskById(taskId) {
        // Create a variable to store the found task
        let foundTask;

        // Loop over the tasks and find the task with the id passed as a parameter
        for (let i = 0; i < this.tasks.length; i++) {
            // Get the current task in the loop
            const task = this.tasks[i];

            // Check if its the right task by comparing the task's id to the id passed as a parameter
            if (task.id === taskId) {
                // Store the task in the foundTask variable
                foundTask = task;
            }
        }

        // Return the found task
        return foundTask;
    }

    // Create the render method
    render() {
        const tasksHtmlList = [];
        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];

            const date = new Date(task.dueDate.replace(/-/g, '\/'));
            const formattedDate = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
            
            const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);
            tasksHtmlList.push(taskHtml);
        }
        
        const tasksHtml = tasksHtmlList.join('\n');
        const tasksList = document.querySelector('#tasksList');
        
        tasksList.innerHTML = tasksHtml;
    }
    // This is Task 8:
    //Saving tasks to a local JSON file.
    save() {
        const tasksJson = JSON.stringify(this.tasks);

        localStorage.setItem('tasks', tasksJson);

        const currentId = String(this.currentId);

        localStorage.setItem('currentId', currentId);
    }
    // This is task 8.
    // In this task we implemeneted a load load method to use persistent storage.
    load() {
        if (localStorage.getItem('tasks')) {
            const tasksJson = localStorage.getItem('tasks');

            this.tasks = JSON.parse(tasksJson);
        }
    //
        if (localStorage.getItem('currentId')) {
            const currentId = localStorage.getItem('currentId');

            this.currentId = Number(currentId);
        }
    }
}