// submit-task.js
import Task from "./task";
import { allProjects } from "./initialize";
import { loadProjectTasksDOM } from "./dom";
import { closeModal } from "./modal";
import { saveProjectsToLocalStorage } from "./local-storage";

export function addNewTask(event) {
  event.preventDefault();

  // Get values from the form fields
  const projectName = document.querySelector("#project-list").value;
  const taskName = document.querySelector("#taskName").value;
  const deadline = document.querySelector("#task-deadline").value;
  const priority = document.querySelector("#task-priority").value;
  const description = document.querySelector("#taskDescription").value;

  // Create new task with said values
  const newTask = new Task(
    projectName,
    taskName,
    deadline,
    priority,
    "In-progress",
    description
  );

  // Find the project in the projects Array
  const targetProjectIndex = allProjects.findIndex(
    (project) => project.title === projectName
  );

  // Switch to the target selected in the dropdown options
  const targetProject = allProjects[targetProjectIndex];

  // Check if the project they selected exists
  if (!targetProject) {
    console.error("Target project not found");
    alert("Please select a valid project to add to!");
    return;
  }

  // Check if said task already exists in their project

  const projectTasks = targetProject.loadTask();
  const doesTaskNameExist = projectTasks.some(
    (task) =>
      task.title.split(" ").join("").toLowerCase() ===
      taskName.split(" ").join("").toLowerCase()
  );
  if (doesTaskNameExist) {
    console.error("This task name already exists!");
    alert("This task name already exists! Enter another one");
    return;
  }

  // Add the newly created task to the targeted project class
  targetProject.addTask(newTask);

  // Reload the DOM for the new task
  loadProjectTasksDOM(targetProject);

  // Save allProjects to localstorage
  saveProjectsToLocalStorage()
  closeModal();
}
