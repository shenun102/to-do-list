import Task from "./create-task.js";
import { closeModal } from "./modal.js";
import createTaskDOM from "./task-dom.js";

export function addNewTask(event) {
  event.preventDefault();
  // Get values from the form fields
  const project = document.querySelector("#project-list").value;
  const taskName = document.querySelector("#taskName").value;
  const deadline = document.querySelector("#task-deadline").value;
  const priority = document.querySelector("#task-priority").value;
  const description = document.querySelector("#taskDescription").value;

  const newTask = new Task(
    project,
    taskName,
    deadline,
    priority,
    "",
    description
  );
  createTaskDOM(newTask);
  closeModal();
}
