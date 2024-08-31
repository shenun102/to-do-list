// initialize.js

import Project from "./project";
import Task from "./task";
import { createProjectDOM } from "./dom";

export const mainContainer = document.querySelector("#main");
export const projectContainer = document.querySelector(".projects-container");
export const modalContainer = document.querySelector("#modal");
export const allProjects = [];
export let currProject;

// Creating instances of both classes
const testProject = new Project("Test-Project", 1);
const testProject2 = new Project("Test-Project-2nd", 2);
const testProject3 = new Project("Test-Project-3rd", 3);
allProjects.push(testProject);
allProjects.push(testProject2);
allProjects.push(testProject3);

const task = new Task(
  "Test-Project",
  "Task 1",
  "2024-8-31",
  "Urgent",
  "In-progress",
  "Something to say"
);

const task2 = new Task(
  "Test-Project",
  "Task 2",
  "2024-7-23",
  "Urgent",
  "Complete",
  "Somethasdasdasdasdasding to say"
);

const task3 = new Task (
  "Test-Project",
  "Task 3",
  "2024-08-26",
  "Urgent",
  "In-progress",
  "Noooo"
)

const task4 = new Task (
  "Test-Project",
  "Task 4",
  "2024-08-21",
  "Urgent",
  "Complete",
  "Noooo"
)


testProject.addTask(task);
testProject.addTask(task2);
testProject.addTask(task3);
testProject.addTask(task4);
testProject2.addTask(task);
testProject2.addTask(task2);
testProject3.addTask(task);
testProject3.addTask(task2);
console.log(testProject);
// console.log(task);

export function initializePage() {
  createProjectDOM(testProject);
  createProjectDOM(testProject2);
  createProjectDOM(testProject3);
}
