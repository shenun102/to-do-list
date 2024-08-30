// Import css styles
import "./styles.css";
import "./task.css";
import "./task-form-modal.css";

// Import images
import projIcon from "./icons/project.svg";

// Import modules
import { openModal, closeModal } from "./modules/modal";
import deleteTask from "./modules/delete-task";
// Create tasks class

// Select the main container
const mainContainer = document.querySelector("#main");

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
}

// Creating instances of both classes
const testProject = new Project("Test-project", 1);

// const task = new Task(
//   "Test-Project",
//   "Task 1",
//   "1990-22-10",
//   "Urgent",
//   "In-progress",
//   "Something to say"
// );

// const task2 = new Task(
//   "Test-Project",
//   "Task 2",
//   "1990-23-10",
//   "Urgent",
//   "Complete",
//   "Somethasdasdasdasdasding to say"
// );

// testProject.addTask(task);
// testProject.addTask(task2);
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
const taskForm = document.querySelector("#taskForm");
taskForm.addEventListener("submit", function (e) {
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
    "In-Progress",
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
  if (e.target.classList.contains("open-modal")) openModal();
  if (e.target.classList.contains("close-modal")) closeModal();
});

// Add Event listeners for deleting said task
mainContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) deleteTask(e.target);
});
