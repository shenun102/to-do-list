//submit-project.js

import Project from "./project";
import { createProjectDOM } from "./dom";
import { allProjects } from "./initialize";
import { closeModal } from "./modal";

export function addNewProject(event) {
  // Get values from the form fields
  const taskName = document.querySelector("#projectName").value;
  // Create new project instance
  const newProject = new Project(taskName, 33);
  console.log(newProject);
  // Create the dom for said project
  createProjectDOM(newProject);
  // Add new project instance to projects list
  allProjects.push(newProject);
  console.log(allProjects);
  closeModal();
}
