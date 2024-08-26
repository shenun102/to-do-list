class Task {
  constructor(title, desc, dueDate, priority, status) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
  }
}

export default function createTask(title, desc, dueDate, priority, status) {
  const task = new Task(title, desc, dueDate, priority, status);
  console.log(task);
  return task
}
