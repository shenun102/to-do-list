import Task from "./task";
import { allProjects } from "./initialize";
import { loadProjectTasksDOM } from "./dom";
import { closeModal } from "./modal";

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
  // Add the newly created task to the targeted project class
  console.log(targetProject)
  targetProject.addTask(newTask);
  // Reload the DOM for the new task
  loadProjectTasksDOM(targetProject);
  closeModal();
}
