// initialize.js

import Project from "./project";
import Task from "./task";
import { createProjectDOM } from "./dom";

export const mainContainer = document.querySelector("#main");
export const projectContainer = document.querySelector(".projects-container");
export const allProjects = [];
export let currProject;

// Creating instances of both classes
const testProject = new Project("Test-Project", 1);
allProjects.push(testProject);

const task = new Task(
  "Test-Project",
  "Task 1",
  "1990-22-10",
  "Urgent",
  "In-progress",
  "Something to say"
);

const task2 = new Task(
  "Test-Project",
  "Task 2",
  "1990-23-10",
  "Urgent",
  "Complete",
  "Somethasdasdasdasdasding to say"
);

testProject.addTask(task);
testProject.addTask(task2);
console.log(testProject);
// console.log(task);

export function initializePage() {
  createProjectDOM(testProject);
}
