import { allProjects, mainContainer } from "../modules/initialize";
import { createTaskDOM } from "../modules/dom";
import highlightPage from "../modules/highlight-page";

const allPage = {
  title: "All",
};

const inProgressPage = {
  title: "In Progress",
};

const todayPage = {
  title: "Today",
};

const weeklyPage = {
  title: "Weekly",
};

export function loadAllPage() {
  // Highlight selected page
  highlightPage(allPage);

  const allTasks = [];

   // Get all the tasks related to page
  allProjects.forEach((project) =>
    project.loadTask().forEach((task) => allTasks.push(task))
  );

  let everyTaskHTML = "";
  // For each task in the list, create the html for it and add it to the variable defined above
  allTasks.forEach((task) => (everyTaskHTML += createTaskDOM(task)));

  console.log(everyTaskHTML);
  // Add the html to the main container
  mainContainer.innerHTML = everyTaskHTML;
}

export function loadInProgressPage() {
  // Highlight selected page
  highlightPage(inProgressPage);

  const allTasks = [];

   // Get all the tasks related to page
  allProjects.forEach((project) =>
    project.loadTask().filter((task) => allTasks.push(task))
  );

  const inProgressTasks = allTasks.filter(task => task.status === "In-progress")

  let everyTaskHTML = "";
  // For each task in the list, create the html for it and add it to the variable defined above
  inProgressTasks.forEach((task) => (everyTaskHTML += createTaskDOM(task)));

  console.log(everyTaskHTML);
  // Add the html to the main container
  mainContainer.innerHTML = everyTaskHTML;
}

export function loadTodayPage() {
  // Highlight selected page
  highlightPage(todayPage);

  const allTasks = [];

   // Get all the tasks related to page
  allProjects.forEach((project) =>
    project.loadTask().filter((task) => allTasks.push(task))
  );

  const completeTasks = allTasks.filter(task => task.date === "In-progress")

  let everyTaskHTML = "";
  // For each task in the list, create the html for it and add it to the variable defined above
  completeTasks.forEach((task) => (everyTaskHTML += createTaskDOM(task)));

  console.log(everyTaskHTML);
  // Add the html to the main container
  mainContainer.innerHTML = everyTaskHTML;
}

export function loadWeeklyPage() {
  // Highlight selected page
  highlightPage(weeklyPage);

  const allTasks = [];

   // Get all the tasks related to page
  allProjects.forEach((project) =>
    project.loadTask().forEach((task) => allTasks.push(task))
  );

  let everyTaskHTML = "";
  // For each task in the list, create the html for it and add it to the variable defined above
  allTasks.forEach((task) => (everyTaskHTML += createTaskDOM(task)));

  console.log(everyTaskHTML);
  // Add the html to the main container
  mainContainer.innerHTML = everyTaskHTML;
}