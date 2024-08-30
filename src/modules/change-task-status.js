import { allProjects } from "./initialize";

export function changeStatus(target) {
  // Find the container of the task
  const targetContainer = target.closest(".task-container");
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

  if (target.textContent === "In-progress") {
    target.textContent = "Complete";
    project.updateTaskStatus(taskTitle, "Complete");
  } else {
    target.textContent = "In-progress";
    project.updateTaskStatus(taskTitle, "In-progress");
  }
}
