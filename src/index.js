// Import css styles
import "./styles.css";
import "./task.css";
import "./task-form-modal.css";

// Import modules
import {
  mainContainer,
  projectContainer,
  allProjects,
  currProject,
  initializePage,
} from "./modules/initialize";

import { openModal, closeModal } from "./modules/modal";
import { addNewTask } from "./modules/submit-task";
import { addNewProject } from "./modules/submit-project";
import { setProjectHTML, setTaskHTML } from "./modules/set-modal-html";
import { loadProjectTasksDOM } from "./modules/dom";
import { deleteTask } from "./modules/delete-task";
import { changeStatus } from "./modules/change-task-status";

// Creating project and task DOMS

initializePage();

// Project

// Event listeners
// Submit new task or project
document.body.addEventListener("submit", function (e) {
  if (e.target.id === "taskForm") {
    e.preventDefault();
    console.log(e.target);
    addNewTask(e);
  }
  if (e.target.id === "project-form") {
    e.preventDefault();
    console.log("Hiyayayayay");
    addNewProject();
  }
});

// opening and closing the modal
document.body.addEventListener("click", function (e) {
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

// deleting said task, editing or changing status
mainContainer.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(e.target);

  if (e.target.classList.contains("change-status-btn")) changeStatus(e.target);
  if (e.target.classList.contains("delete-btn")) deleteTask(e.target);
  // need to remove task from target project aswell

  if (e.target.classList.contains("edit-btn")) console.log(e.target);
});

// Open project page
projectContainer.addEventListener("click", function (e) {
  console.log(allProjects, currProject);
  if (e.target.classList.contains("open-project")) {
    console.log(e.target.textContent);
    const targetProject = allProjects.findIndex(
      (project) => project.title === e.target.textContent
    );
    console.log(allProjects, targetProject);
    // Load the corresponding project tasks
    loadProjectTasksDOM(allProjects[targetProject]);
  }
});
