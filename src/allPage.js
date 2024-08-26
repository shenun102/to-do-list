export default function loadAllPage() {
  // Project container
  const div = document.createElement("div");
  div.className = "task-container";
  const div2 = document.createElement("div");
  div2.className = "task-container";
  const div3 = document.createElement("div");
  div3.className = "task-container";
  main.appendChild(div);
  main.appendChild(div2);
  main.appendChild(div3);

  // Project title
  const projectTitle = document.createElement("div");
  projectTitle.className = "project-title";
  projectTitle.textContent = "Complete Hi";
  
  // Project due date
  const dueDate = document.createElement("div");
  dueDate.className = "due-date";
  dueDate.textContent = new Date();

  div.append(projectTitle, dueDate);
}

// Projects Overview Container
// Scrollable
// Lists all projects
// Projects with urgent to dos will have a red marker in name

// displays target
