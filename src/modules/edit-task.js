import { openModal } from "./modal";
import { setEditTaskHTML } from "./set-modal-html";
import { allProjects, modalContainer } from "./initialize";
import { editTarget } from "../index";

export function editTask(target) {
  setEditTaskHTML();
  openModal();
}

export function submitEdit(e, editTarget) {
  // First find the project the task belongs to
  const projectIndex = allProjects.findIndex(
    (project) => project.title === editTarget.dataset.project
  );

  if (projectIndex === -1) {
    console.error("Project not found.");
    return;
  }

  // get tasks array of project
  const tasks = allProjects[projectIndex].loadTask();
  // Find index of task
  const taskIndex = tasks.findIndex(
    (task) => editTarget.querySelector(".task-title").textContent === task.title
  );

  if (taskIndex === -1) {
    console.error("Task not found.");
    return;
  }

  const targetTask = tasks[taskIndex];

  // Get values from the form fields
  const { value: title } = document.querySelector("#taskName");
  const { value: dueDate } = document.querySelector("#task-deadline");
  const { value: priority } = document.querySelector("#task-priority");
  const { value: desc } = document.querySelector("#taskDescription");

  Object.assign(targetTask, { title, dueDate, priority, desc });

  return allProjects[projectIndex];
}
