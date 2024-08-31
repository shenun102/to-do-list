import { allProjects, mainContainer } from "../modules/initialize";
import { createTaskDOM } from "../modules/dom";
import highlightPage from "../modules/highlight-page";
import {
  format,
  subDays,
  parseISO,
  isAfter,
  isBefore,
  isEqual,
} from "date-fns";

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

  const inProgressTasks = allTasks.filter(
    (task) => task.status === "In-progress"
  );

  let everyTaskHTML = "";
  // For each task in the list, create the html for it and add it to the variable defined above
  inProgressTasks.forEach((task) => (everyTaskHTML += createTaskDOM(task)));

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

  const today = format(new Date(), "yyyy-MM-dd");
  const tasksToday = allTasks.filter((task) => {
    return task.dueDate === today;
  });

  let everyTaskHTML = "";
  // For each task in the list, create the html for it and add it to the variable defined above
  tasksToday.forEach((task) => (everyTaskHTML += createTaskDOM(task)));

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

  const today = new Date();
  const oneWeekAgo = subDays(today, 7);
  const tasksWeekly = allTasks.filter((task) => {
    const date = parseISO(task.dueDate);
    return (
      (isAfter(date, oneWeekAgo) || isEqual(date, oneWeekAgo)) &&
      isBefore(date, today)
    );
  });

  let everyTaskHTML = "";
  // For each task in the list, create the html for it and add it to the variable defined above
  tasksWeekly.forEach((task) => (everyTaskHTML += createTaskDOM(task)));

  // Add the html to the main container
  mainContainer.innerHTML = everyTaskHTML;
}
