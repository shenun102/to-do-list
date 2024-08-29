import deleteTask from "./delete-task.js";

export default function initAllPage() {

  // Didnt work for newly added tasks, since they werent included in the deleteBtn
  // const deleteBtn = document.querySelectorAll(".delete-btn");
  // deleteBtn.forEach((btn) =>
  //   btn.addEventListener("click", function (e) {
  //     deleteTask(e.target);
  //   })
  // );

  const main = document.querySelector("#main");
  main.addEventListener("click", function (e) {
    if (!e.target.classList.contains("delete-btn")) return;
    deleteTask(e.target);
  });
}
