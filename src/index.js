import "./styles.css";
import "./task.css";
import "./task-form-modal.css";
import Task from "./create-task.js";
import createTaskDOM from "./task-dom.js";
import { addNewTask } from "./add-project-or-task.js";
import initAllPage from "./init-all-page.js";
import { openModal, closeModal } from "./modal.js";

const task = new Task(
  "Task 1",
  "Nothing much here",
  "1990-22-10",
  "Urgrent",
  "In-progress"
);
const task2 = new Task(
  "Task 1",
  "Nothing much here",
  "1990-22-10",
  "Urgrent",
  "In-progress"
);
const task3 = new Task(
  "Task 1",
  "Nothing much here",
  "1990-22-10",
  "Urgrent",
  "In-progress"
);
const task4 = new Task(
  "Task 1",
  "Nothing much here",
  "1990-22-10",
  "Urgrent",
  "In-progress"
);

createTaskDOM(task);
createTaskDOM(task2);

const main = document.querySelector("#main");
// loadAllPage();

initAllPage();

console.log("Hello");

const modal = document.querySelector("#modal");
const overlay = document.querySelector(".overlay");
const openModalBtns = document.querySelectorAll(".open-modal");
const closeModalBtns = document.querySelectorAll(".close-modal");

closeModalBtns.forEach((element) =>
  element.addEventListener("click", closeModal)
);

openModalBtns.forEach((element) =>
  element.addEventListener("click", openModal)
);

const taskForm = document.querySelector("#taskForm");
console.log(taskForm)
taskForm.addEventListener("submit", addNewTask);
