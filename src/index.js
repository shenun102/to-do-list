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
import { editTask, submitEdit } from "./modules/edit-task";

export let editTarget;

// Creating project and task DOMS

initializePage();

// Project

// Event listeners
// Submit new task or project
document.body.addEventListener("submit", function (e) {
  e.preventDefault();
  if (e.target.matches("#taskForm")) {
    addNewTask(e);
  }
  if (e.target.matches("#project-form")) {
    addNewProject();
  }
  if (e.target.matches("#edit-form")) {
    // Reload dom
    loadProjectTasksDOM(submitEdit(e, editTarget));
    // Close dom
    closeModal();
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
  if (e.target.classList.contains("change-status-btn")) changeStatus(e.target);
  if (e.target.classList.contains("delete-btn")) deleteTask(e.target);
  if (e.target.classList.contains("edit-btn")) {
    editTask(e.target);
    editTarget = e.target.closest(".task-container");
  }
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
