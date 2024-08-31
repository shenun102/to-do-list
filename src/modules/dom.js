// dom.js
import projIcon from "../icons/project.svg";
import highlightPage from "./highlight-page";
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
  // highlight the target page
  highlightPage(project);
  console.log(project)
  // Define variable that will contain all tasks html
  let allTaskHTML = "";
  // return the list of tasks associated with said project
  const projectTasks = project.loadTask();
  console.log(projectTasks,"Loading this task")

  // For each task in the list, create the html for it and add it to the variable defined above
  projectTasks.forEach((task) => (allTaskHTML += createTaskDOM(task)));

  // Add the html to the main container
  mainContainer.innerHTML = allTaskHTML;
  
}

// Creates the html for a task and returns it
export function createTaskDOM(task) {
  const taskHTML = `
  <div class="task-container" data-project="${task.project}">
    <div class="content-container">
      <div ${strikeThrough(task)} class="task-title">${task.title}</div>
      <div class="due-date">${task.dueDate}</div>
      <div ${strikeThrough(task)} class="description">${task.desc}</div>
    </div>
    <div class="task-btn-container">
        <div class="project-title">${task.project}</div>
        <button class="change-status-btn">${task.status}</button>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
  </div>`;

  return taskHTML;
}

function strikeThrough(task) {
  if (task.status === "Complete")
    return `style="text-decoration:line-through;"`;
  else {
    return;
  }
}
