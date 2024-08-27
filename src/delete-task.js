export default function deleteTask(target) {
  const targetContainer = target.closest(".task-container");
  targetContainer.remove();
}
