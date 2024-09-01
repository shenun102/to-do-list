//submit-project.js

import Project from "./project";
import { createProjectDOM } from "./dom";
import { allProjects } from "./initialize";
import { closeModal } from "./modal";
import { saveProjectsToLocalStorage } from "./local-storage";

export function addNewProject(event) {
  // Get values from the form fields
  const projectName = document.querySelector("#projectName").value;

  // Check if projectName is non-empty
  if (!projectName) {
    console.error("There is no project name!");
    alert("Please enter a project name!");
    return;
  }

  // Check if the projectName doesn't already exist
  const isProjectNameTaken = allProjects.some(
    (project) =>
      project.title.split(" ").join("").toLowerCase() ===
      projectName.split(" ").join("").toLowerCase()
  );

  if (isProjectNameTaken) {
    console.error("This project name already exists!");
    alert(
      "Please enter another project name, the one you entered already exists!"
    );
    return;
  }

  // Create new project instance
  const newProject = new Project(projectName, "", []);

  // Create the dom for said project
  createProjectDOM(newProject);

  // Add new project instance to projects list
  allProjects.push(newProject);

  // Save the updated projects list to localStorage
  saveProjectsToLocalStorage();
  closeModal();
}
