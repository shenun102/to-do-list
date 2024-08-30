// Import css styles
import "./styles.css";
import "./task.css";
import "./task-form-modal.css";

// Import images
import projIcon from "./icons/project.svg";

// Import modules
import { openModal, closeModal } from "./modules/modal";

// Create tasks class

// Select the main container
const mainContainer = document.querySelector("#main");
let currProject;

class Task {
  constructor(project, title, dueDate, priority, status, desc) {
    this.project = project;
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
    this.desc = desc;
  }
}

// Create projects class
class Project {
  #tasks = [];
  constructor(title, id) {
    this.title = title;
    this.id = id;
  }

  addTask(task) {
    this.#tasks.push(task);
  }

  loadTask() {
    return this.#tasks;
  }

  // Method to change task status in project when btn clicked
  updateTaskStatus(taskTitle, status) {
    const task = this.#tasks.find((task) => task.title === taskTitle);
    task.status = status;
    console.log(task);
  }

  // Method to delete task
  delTask(taskTitle) {
    const taskIndex = this.#tasks.findIndex((task) => task.title === taskTitle);
    console.log(taskIndex);
    this.#tasks.splice(taskIndex, 1);
    console.log(this);
  }
}

// Creating instances of both classes
const testProject = new Project("Test-project", 1);

const task = new Task(
  "Test-Project",
  "Task 1",
  "1990-22-10",
  "Urgent",
  "In-progress",
  "Something to say"
);

const task2 = new Task(
  "Test-Project",
  "Task 2",
  "1990-23-10",
  "Urgent",
  "Complete",
  "Somethasdasdasdasdasding to say"
);

testProject.addTask(task);
testProject.addTask(task2);
console.log(testProject);
// console.log(task);

// Creating project and task DOMS

// Project

function createProjectDOM(project) {
  const projectContainer = document.querySelector(".projects-container");
  console.log(projectContainer);
  const projectHTML = `
  <div class="project">
    <img src="${projIcon}" alt="Project Page Icon" />
    <button class="open-project">${project.title}</button>
    <button class="close-project">&times;</button>
  </div>`;
  projectContainer.innerHTML += projectHTML;

  // Loads associated project's list of tasks
  loadProjectTasksDOM(project);
}

function loadProjectTasksDOM(project) {
  // Load all the tasks corresponding to that project.
  // Define variable that will contain all tasks html
  let allTaskHTML = "";
  // return the list of tasks associated with said project
  const projectTasks = project.loadTask();
  console.log(projectTasks);
  // For each task in the list, create the html for it and add it to the variable defined above
  projectTasks.forEach((task) => (allTaskHTML += createTaskDOM(task)));
  // Add the html to the main container
  mainContainer.innerHTML = allTaskHTML;
  currProject = project;
}

// Creates the html for a task and returns it
function createTaskDOM(task) {
  const taskHTML = `
  <div class="task-container">
    <div class="content-container">
      <div class="task-title">${task.title}</div>
      <div class="task-btn-container">
        <button class="change-status-btn">${task.status}</button>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    </div>
    <div class="due-date">${task.dueDate}</div>
    <div class="description">${task.desc}</div>
  </div>`;

  return taskHTML;
  // mainContainer.innerHTML += taskHTML;
}

createProjectDOM(testProject);

// Add new task
// Event listeners
// Select the form
// Redundant, since the modal html is set dynamically,
// const taskForm = document.querySelector("#taskForm");
// Now we can add an if section to listen in for add Project form
document.body.addEventListener("submit", function (e) {
  if (!e.target.id === "taskForm") return
  e.preventDefault();
  console.log(e.target);
  addNewTask(e);
});

// Function for adding a new task
function addNewTask(event) {
  event.preventDefault();
  // Get values from the form fields
  const project = document.querySelector("#project-list").value;
  const taskName = document.querySelector("#taskName").value;
  const deadline = document.querySelector("#task-deadline").value;
  const priority = document.querySelector("#task-priority").value;
  const description = document.querySelector("#taskDescription").value;
  // Create new task with said values
  const newTask = new Task(
    project,
    taskName,
    deadline,
    priority,
    "In-progress",
    description
  );

  // Add the newly created task to the targeted project class
  testProject.addTask(newTask);
  // Reload the DOM for the new task
  loadProjectTasksDOM(testProject);
  closeModal();
}

// Event listener for opening and closing the modal
document.body.addEventListener("click", function (e) {
  // console.log(e.target);
  // Depending on whether its add task or project, change modal html
  console.log(e.target.classList);

  if (e.target.classList.contains("open-modal")) {
    if (e.target.classList.contains("new-project")) {
      setProjectHTML();
    } else {
      setTaskHTML();
    }
    openModal();
  }
  if (e.target.classList.contains("close-modal")) closeModal();
});

// Add Event listeners for deleting said task, ediing or changing status
mainContainer.addEventListener("click", function (e) {
  e.preventDefault()
  console.log(e.target);

  if (e.target.classList.contains("change-status-btn")) changeStatus(e.target);
  if (e.target.classList.contains("delete-btn")) deleteTask(e.target);
  // need to remove task from target project aswell

  if (e.target.classList.contains("edit-btn")) console.log(e.target);
});

function changeStatus(target) {
  const targetTask = target
    .closest(".task-container")
    .querySelector(".task-title").textContent;

  if (target.textContent === "In-progress") {
    target.textContent = "Complete";
    currProject.updateTaskStatus(targetTask, "Complete");
  } else {
    target.textContent = "In-progress";
    currProject.updateTaskStatus(targetTask, "In-progress");
  }
}

function deleteTask(target) {
  const targetContainer = target.closest(".task-container");
  const targetTask = targetContainer.querySelector(".task-title").textContent;
  console.log(targetTask);
  currProject.delTask(targetTask);
  targetContainer.remove();
}

// Add function to create new project and list it

function setProjectHTML() {
  const newProjectModalHTML = `
  <!-- Modal content -->
      <div class="modal-content">
        <div class="modal-content-top">
          <h2>New Project</h2>
          <span class="close-modal">&times;</span>
        </div>
        <form id="project-form" method="post" action="">
          <div class="modal-content-bot">
            <div class="input-row">
              <label for="projectName">Project Name:</label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                required
                placeholder="Enter project name."
              />
            </div>
          </div>
        </form>
        <div class="btn-container">
          <button type="submit" form="taskForm" class="submit">Add</button>
          <button class="close-modal">Cancel</button>
        </div>
      </div>`;

  const modalContainer = document.querySelector("#modal");
  modalContainer.innerHTML = newProjectModalHTML;
  console.log(modalContainer);
}

function setTaskHTML() {
  const newTaskModalHTML = `
  <div class="modal-content">
  <div class="modal-content-top">
    <h2>New Task</h2>
    <span class="close-modal">&times;</span>
  </div>

  <form id="taskForm">
    <div class="modal-content-bot">
      <div class="input-row">
        <label for="project-list">Projects:</label>
        <select id="project-list" name="projects-list">
          <option>Add to a project</option>
        </select>
      </div>
      <div class="input-row">
        <label for="taskName">Task Name:</label>
        <input
          type="text"
          id="taskName"
          name="taskName"
          required
          placeholder="Enter task name."
        />
      </div>
      <div class="input-row">
        <label for="task-deadline">Deadline:</label>
        <input type="date" name="task_deadline" id="task-deadline" />
      </div>
      <div class="input-row">
        <label for="task-priority">Priority:</label>
        <select id="task-priority" name="task_priority">
          <option value="Low">Low</option>
          <option value="Normal">Normal</option>
          <option value="High">High</option>
          <option value="Urgent">Urgent</option>
        </select>
      </div>
      <div class="input-row desc-container">
        <label for="taskDescription">Description:</label>
        <textarea
          id="taskDescription"
          name="taskDescription"
          rows="4"
          cols="50"
          placeholder="Enter task description..."
        ></textarea>
      </div>
    </div>
  </form>

  <div class="btn-container">
    <button type="submit" form="taskForm" class="submit">Add</button>
    <button class="close-modal">Cancel</button>
  </div>
</div>
  `;

  const modalContainer = document.querySelector("#modal");
  modalContainer.innerHTML = newTaskModalHTML;
  console.log(modalContainer);
}

// const newProjectBtn = document.querySelector(".new-project");
// newProjectBtn.addEventListener("click", newProject);
