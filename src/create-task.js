export default class Task {
  constructor(project, title, dueDate, priority, status, desc) {
    this.project = project;
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
    this.desc = desc;
  }
}
