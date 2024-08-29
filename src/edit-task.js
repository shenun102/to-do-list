const editTaskModalHTML = `
          <button type="submit" form="taskForm" class="edit">Edit</button>
          <button class="close-modal">Cancel</button>
`;

const addTaskModalHTML = `
          <button type="submit" form="taskForm" class="submit">Add</button>
          <button class="close-modal">Cancel</button>
`;

const btnContainer = document.querySelector(".btn-container");

export function editTask(event) {
  console.log(event.target);
  //  changes the form to an edit-form
  document.querySelector("#taskForm").className = "edit-form";
  // Changes the add button to an edit button
  btnContainer.innerHTML = editTaskModalHTML;
  const taskContainer = event.target.closest(".task-container");
  console.log(taskContainer);

  // After the modal has been opened, listen in for the submit
  taskForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("edit-form")) submitEdit(taskContainer);
  });
}

export function addTask() {
  console.log(btnContainer);
  // Change form back to add one after
  document.querySelector("#taskForm").className = "add-form";
  btnContainer.innerHTML = addTaskModalHTML;
}

function submitEdit(target) {
  console.log("Submit", target);
  // Get values from the form fields
  const project = document.querySelector("#project-list").value;
  const taskName = document.querySelector("#taskName").value;
  const deadline = document.querySelector("#task-deadline").value;
  const priority = document.querySelector("#task-priority").value;
  const description = document.querySelector("#taskDescription").value;

  // Grab the specific task container's title element
  target.querySelector(".task-title").textContent = taskName;
  target.querySelector(".due-date").textContent = deadline;
  target.querySelector(".description").textContent = description;
}
