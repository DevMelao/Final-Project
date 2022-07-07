# Junior Web Developer - Final Project - Task Planner Web App
## Task 1: Design your App Wireframes
### Description
Is always a good practice to design first before start coding. The objective of this task is to create the Task planner app wireframes to understand how it will work and look.
## Task 2: Implement your Wireframes using Bootstrap
### Description
Implement the basic HTML structure of your Wireframes design.
Create a private Github repository for your project that is shared with the instructor.
0. Create a private GitHub repository.
1. Create the page structure.
2. Implementing your Task Planner Wireframes.
## Task 3: Create a Task Card layout and a Task List component
### Description
Implement the card layout bootstrap component that contains the task information:
* Name
* Description
* AssignedTo
* DueDate
* Status
1. Implement the task Card layout.
2. Implementing the task list.
3. Adding your sample data.
## Task 4: Adding Tasks
### Description
For this task, we'll be creating a class to manage the tasks, adding a method to the class to keep track of tasks in our application, and connecting up the New Task form to create tasks.
1. The Setup
In this step, we'll re-organise our folder structure in preparation for the next few steps.
a. Create a js folder in your project if one does not already exist
b. Copy the existing `js` file into your js folder, and rename it to `index.js`
c. Update the `<script>` tag in your html file to use the new location of the `js/index.js` file.
d. Create a `taskManager.js` file in the `js` folder
e. Add a `<script>` tag pointing to the `js/taskManager.js` file before the `<script>` tag pointing to the `js/index.js` file.
2. The TaskManager Class
3. Adding A New Task Programmatically
## Task 5: Display The Tasks
### Description
 For this task, we'll be writing the code to display the `TaskManager's` tasks array on the page.
1. Using Javascript to Create the Task HTML
2. The render method
3. Calling render
## Task 6: Task Form Inputs Validation
### Description
Implement a form that captures the fields required to create a task.
1. Add a task form.
2. Implement a JavaScript function to validate your form fields.
3. Showing errors to users.
## Task 7: Update A Task
### Description
For this task, we'll write the code to update a task's status to "DONE" once a "Mark As Done" button on the task is clicked.
Note, for this task, we are not using the "Update Task" form. This is part of the re-structuring of the project. This step will be added as a stretch goal to the end of the course.
1. Adding the "Mark As Done" button.
2. Adding an Event Listener to the Task List.
3. Adding the Task id to the DOM.
4. Adding getTaskById to the `TaskManager` class.
5. Update the status of the selected Task to 'DONE'

## Task 8: Persisting Task