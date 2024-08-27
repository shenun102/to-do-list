import "./styles.css";
import "./task.css";
import createTask from "./create-task.js";
import createTaskDOM from "./create-task-dom.js";
import initAllPage from "./init-all-page.js";


const task = createTask(
  "Task 1",
  "Nothing much here",
  "1990-22-10",
  "Urgrent",
  "In-progress"
);
const task2 = createTask(
  "Task 1",
  "Nothing much here",
  "1990-22-10",
  "Urgrent",
  "In-progress"
);
const task3 = createTask(
  "Task 1",
  "Nothing much here",
  "1990-22-10",
  "Urgrent",
  "In-progress"
);
const task4 = createTask(
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
