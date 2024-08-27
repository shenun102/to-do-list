import deleteTask from "./delete-task.js";

export default function initAllPage() {
  const deleteBtn = document.querySelectorAll(".delete-btn");
  deleteBtn.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      deleteTask(e.target);
    })
  );
}
