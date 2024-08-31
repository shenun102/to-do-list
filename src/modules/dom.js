// dom.js
import projIcon from "../icons/project.svg";
import { projectContainer, mainContainer, currProject } from "./initialize";

export function createProjectDOM(project) {
  const projectHTML = `
  <div class="project" data-page="${project.title}">
    <img src="${projIcon}" alt="Project Page Icon" />
    <button class="open-project">${project.title}</button>
    <button class="close-project">&times;</button>
  </div>`;

  projectContainer.innerHTML += projectHTML;

  // Loads associated project's list of tasks
  loadProjectTasksDOM(project);
}

// Load all the tasks corresponding to that project.
export function loadProjectTasksDOM(project) {

  // Highlight the page loaded
  // Select the corresponding sidebar page element
  const element = document.querySelector(`[data-page="${project.title}"]`);
  if (!element.classList.contains("selected")) {
    // Remove all selected classes from all eelements
    const pages = projectContainer.querySelectorAll(".project");
    pages.forEach((page) => page.classList.remove("selected"));

    // Add selected to the target page
    element.classList.toggle("selected");
  }

  // Define variable that will contain all tasks html
  let allTaskHTML = "";
  // return the list of tasks associated with said project
  const projectTasks = project.loadTask();

  // For each task in the list, create the html for it and add it to the variable defined above
  projectTasks.forEach((task) => (allTaskHTML += createTaskDOM(task)));

  // Add the html to the main container
  mainContainer.innerHTML = allTaskHTML;
}

// Creates the html for a task and returns it
function createTaskDOM(task) {
  const taskHTML = `
  <div class="task-container" data-project="${task.project}">
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
}
