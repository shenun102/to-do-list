import newElement from "./dom-service";

export default function createTaskDOM(task) {
  // Create the container div
  const taskContainer = newElement("div", ["task-container"]);

  // create the title and buttons div
  const contentContainer = newElement("div", ["content-container"]);
  const titleDiv = newElement("div", ["task-title"], task.title);
  const taskBtnsDiv = newElement("div", ["task-btn-container"]);

  // Create buttons for buttons div
  const changeStatusBtn = newElement("button", ["change-status-btn"], "Status");
  const editBtn = newElement("button", ["edit-btn", "open-modal"], "Edit");
  const deleteBtn = newElement("button", ["delete-btn"], "Delete");

  // Add buttons to button container div
  taskBtnsDiv.append(changeStatusBtn, editBtn, deleteBtn);

  // create the due date div
  const dueDateDiv = document.createElement("div");
  dueDateDiv.className = "due-date";
  dueDateDiv.textContent = task.dueDate;

  // create the description div
  const descDiv = newElement("div", ["description"], task.desc);

  // Add all the divs
  contentContainer.append(titleDiv, taskBtnsDiv);
  taskContainer.append(contentContainer, dueDateDiv, descDiv);

  console.log(taskContainer);

  // Finally add to the main container
  main.appendChild(taskContainer);
}
