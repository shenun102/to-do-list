import { closeModal, openModal } from "./modal";
import { setEditTaskHTML } from "./set-modal-html";
import { allProjects, modalContainer } from "./initialize";
import { editTarget } from "../index";


export function editTask(target) {
  console.log("Hello!", target.closest(".task-container"));

  setEditTaskHTML();
  openModal();
}

export function submitEdit(e, editTarget) {

  // First find the project the task belongs to
  const projectIndex = allProjects.findIndex(
    (project) => project.title === editTarget.dataset.project
  );
  // Find index of task
  const taskIndex = allProjects[projectIndex]
    .loadTask()
    .findIndex(
      (task) =>
        editTarget.querySelector(".task-title").textContent === task.title
    );

  const targetTask = allProjects[projectIndex].loadTask()[taskIndex];

  // Get values from the form fields
  targetTask.title = document.querySelector("#taskName").value;
  targetTask.dueDate = document.querySelector("#task-deadline").value;
  targetTask.priority = document.querySelector("#task-priority").value;
  targetTask.desc = document.querySelector("#taskDescription").value;
  return allProjects[projectIndex];
}
