class toDo {
  constructor(title, description, dueDate, priority, notes) {
    this.title = title;
    this.descritpion = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }
}

import createTaskDisplay from "./DOM_elements.js"

createTaskDisplay.appendDisplay()
createTaskDisplay.hideDisplay()