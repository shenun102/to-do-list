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
