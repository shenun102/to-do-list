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
import {
  loadAllPage,
  loadInProgressPage,
  loadTodayPage,
  loadWeeklyPage,
} from "./load-pages/all-page";
import {
  saveProjectsToLocalStorage,
  storageAvailable,
} from "./modules/local-storage";
export let editTarget;

// Test for storage
if (storageAvailable("localStorage")) {
  console.log("You can use it!");
} else {
  console.log("You can't use it!");
}

// Creating project and task DOMS

initializePage();

// Project

// Event listeners
// If sidebar pages are selected
const navBarOne = document.querySelector(".nav-one");
navBarOne.addEventListener("click", function (e) {
  const targetPage = e.target.textContent;
  if (targetPage === "All") {
    loadAllPage();
  } else if (targetPage === "In Progress") {
    loadInProgressPage();
  } else if (targetPage === "Today") {
    loadTodayPage();
  } else if (targetPage === "Weekly") {
    loadWeeklyPage();
  }
});

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
    // Add to localStorage
    saveProjectsToLocalStorage();
  }
});

// opening and closing the modal and clearing local storage
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
  if (e.target.classList.contains("clear-storage")) {
    const confirmation = prompt(
      "Enter 'CONFIRM' to clear local storage. Please refresh the page after."
    );
    if (confirmation === "CONFIRM") localStorage.clear();
  }
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
  if (e.target.classList.contains("open-project")) {
    // Find the project directly
    const targetProject = allProjects.find(
      (project) => project.title === e.target.textContent
    );

    // Check if the project was found before attempting to use it
    if (targetProject) {
      // Load the corresponding project tasks
      loadProjectTasksDOM(targetProject);
    } else {
      console.error("Project not found");
    }
  }
});
