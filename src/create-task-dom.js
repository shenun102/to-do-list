export default function createTaskDOM(task) {
  // Create the container div
  const taskContainer = document.createElement("div");
  taskContainer.className = "task-container";


  // create the title and buttons div
  const contentContainer = document.createElement("div");
  contentContainer.className = "content-container";


  const titleDiv = document.createElement("div");
  titleDiv.className = "task-title";
  titleDiv.textContent = task.title;


  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "btn-container";


  // Create buttons for buttons div
  const changeStatusBtn = document.createElement("button");
  changeStatusBtn.className = "change-status-btn";
  changeStatusBtn.textContent = "Status";

  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.textContent = "Edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";

  // Add buttons to button container div
  buttonsDiv.append(changeStatusBtn, editBtn, deleteBtn);

  // create the due date div
  const dueDateDiv = document.createElement("div");
  dueDateDiv.className = "due-date";
  dueDateDiv.textContent = task.dueDate;

  // create the description div
  const descDiv = document.createElement("div");
  descDiv.className = "description";
  descDiv.textContent = task.desc;


  // Add all the divs
  contentContainer.append(titleDiv, buttonsDiv);
  taskContainer.append(contentContainer, dueDateDiv, descDiv);

  console.log(taskContainer);

  // Finally add to the main container
  main.appendChild(taskContainer);
}