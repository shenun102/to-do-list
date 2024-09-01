// set-modal-html.js
import { allProjects } from "./initialize";
import { modalContainer } from "./initialize";

export function setProjectHTML() {
  const newProjectModalHTML = `
  <!-- Modal content -->
      <div class="modal-content">
        <div class="modal-content-top">
          <h2>New Project</h2>
          <span class="close-modal">&times;</span>
        </div>
        <form id="project-form" method="post" action="" novalidate>
          <div class="modal-content-bot">
            <div class="input-row">
              <label for="projectName">Project Name:</label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                required
                placeholder="Enter project name."
              />
            </div>
          </div>
        </form>
        <div class="btn-container">
          <button type="submit" form="project-form" class="submit">Add</button>
          <button class="close-modal">Cancel</button>
        </div>
      </div>`;

  modalContainer.innerHTML = newProjectModalHTML;
  console.log(modalContainer);
}

export function setTaskHTML() {
  const newTaskModalHTML = `
  <div class="modal-content">
  <div class="modal-content-top">
    <h2>New Task</h2>
    <span class="close-modal">&times;</span>
  </div>

  <form id="taskForm">
    <div class="modal-content-bot">
      <div class="input-row">
        <label for="project-list">Projects:</label>
        <select id="project-list" name="projects-list">
          <option>Add to a project</option>${projectOptions()}
        </select>
      </div>
      <div class="input-row">
        <label for="taskName">Task Name:</label>
        <input
          type="text"
          id="taskName"
          name="taskName"
          required
          placeholder="Enter task name."
        />
      </div>
      <div class="input-row">
        <label for="task-deadline">Deadline:</label>
        <input type="date" name="task_deadline" id="task-deadline" />
      </div>
      <div class="input-row">
        <label for="task-priority">Priority:</label>
        <select id="task-priority" name="task_priority">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div class="input-row desc-container">
        <label for="taskDescription">Description:</label>
        <textarea
          id="taskDescription"
          name="taskDescription"
          rows="4"
          cols="50"
          placeholder="Enter task description..."
        ></textarea>
      </div>
    </div>
  </form>

  <div class="btn-container">
    <button type="submit" form="taskForm" class="submit">Add</button>
    <button class="close-modal">Cancel</button>
  </div>
</div>
  `;

  modalContainer.innerHTML = newTaskModalHTML;
  console.log(modalContainer);
}

export function setEditTaskHTML() {
  setTaskHTML();
  modalContainer.querySelector("#taskForm").id = "edit-form";
  document.querySelector(".modal-content-top h2").textContent = "Edit Task";
  const submitBtn = document.querySelector(".submit");
  submitBtn.textContent = "Edit";
  submitBtn.setAttribute("form", "edit-form");
  const modalContentBot = document.querySelector(".modal-content-bot");
  const firstDivChild = modalContentBot.querySelector("div");
  if (firstDivChild) {
    modalContentBot.removeChild(firstDivChild);
  }
  console.log(modalContainer);
}

// A function which dynamically generates the options for projects for html above
function projectOptions() {
  let projectOptionHTML = "";
  allProjects.forEach((project) => {
    console.log(project.title);
    projectOptionHTML += `<option value="${project.title}">${project.title}</option>`;
  });
  return projectOptionHTML;
}
