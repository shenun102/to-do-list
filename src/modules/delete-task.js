// delete-task.js
import { allProjects } from "./initialize";

export function deleteTask(target) {
  // Find the container of the task
  const targetContainer = target.closest(".task-container");
  // Check that it exists
  if(!targetContainer) return
  // Get the project title from the data attribute
  const projectTitle = targetContainer.dataset.project;
  // Get the task title from the container
  const taskTitle = targetContainer.querySelector(".task-title").textContent;

  // Find the project by project title
  const project = allProjects.find((project) => project.title === projectTitle);

  // Error handling for if it doesnt exist
  if (!project) {
    console.error("Project not found");
    return;
  }

  // Find the task index in the project
  const taskIndex = project
    .loadTask()
    .findIndex((task) => task.title === taskTitle);

  if (taskIndex === -1) {
    console.error("Task not found in project");
    return;
  }

  // Remove the task from the project
  project.delTask(taskTitle);

  // Remove the task container from the DOM
  targetContainer.remove();
}
