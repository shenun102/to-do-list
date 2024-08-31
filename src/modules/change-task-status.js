import { allProjects } from "./initialize";
import { saveProjectsToLocalStorage } from "./local-storage";

export function changeStatus(target) {
  // Find the container of the task
  const targetContainer = target.closest(".task-container");
  // Get the project title from the data attribute
  const projectTitle = targetContainer.dataset.project;
  // Get the task title from the container
  const taskTitle = targetContainer.querySelector(".task-title").textContent;

  // Find the project by project title
  const project = allProjects.find((project) => project.title === projectTitle);

  // Error handling for if it doesn't exist
  if (!project) {
    console.error("Project not found");
    return;
  }

  // Get the task elements that should be strikethrough
  const taskTitleElement = targetContainer.querySelector(".task-title");
  const taskDescriptionElement = targetContainer.querySelector(".description");

  if (target.textContent === "In-progress") {
    target.textContent = "Complete";
    project.updateTaskStatus(taskTitle, "Complete");

    // Apply strikethrough to the task title and description
    taskTitleElement.style.textDecoration = "line-through";
    taskDescriptionElement.style.textDecoration = "line-through";
  } else {
    target.textContent = "In-progress";
    project.updateTaskStatus(taskTitle, "In-progress");

    // Remove strikethrough from the task title and description
    taskTitleElement.style.textDecoration = "none";
    taskDescriptionElement.style.textDecoration = "none";
  }
  saveProjectsToLocalStorage();
}
