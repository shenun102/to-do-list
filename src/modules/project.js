// project.js
export default class Project {
  tasks = [];
  constructor(title, id, tasks = []) {
    this.title = title;
    this.id = id;
    this.tasks.push(...tasks);
  }

  addTask(task) {
    this.tasks.push(task);
  }

  loadTask() {
    return this.tasks;
  }

  // Method to change task status in project when btn clicked
  updateTaskStatus(taskTitle, status) {
    const task = this.tasks.find((task) => task.title === taskTitle);
    task.status = status;
  }

  // Method to delete task
  delTask(taskTitle) {
    const taskIndex = this.tasks.findIndex((task) => task.title === taskTitle);
    this.tasks.splice(taskIndex, 1);
  }
}
