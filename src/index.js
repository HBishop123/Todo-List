let arr = [];
console.log(arr);
class toDo {
  constructor(title, dueDate, priority, notes, description) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }
}

const useFormData = {
  grabFormData: function (e) {
    e.preventDefault();

    const task = {
      title: document.getElementById("form-text").value,
      date: document.getElementById("date").value,
      priority: document.querySelector('input[name="priority"]:checked').value,
    };
    const title = task.title;
    const dueDate = task.date;
    const priority = task.priority;

    let result = new toDo(title, dueDate, priority);
    arr.push(result);
    document.forms[0].reset();
    return this.grabFormData;
  },
  attachEventListener: function () {
    document.addEventListener("DOMContentLoaded", () => {
      document
        .getElementById("submit")
        .addEventListener("click", this.grabFormData);
    });
  },
};
useFormData.attachEventListener()









import createTaskDisplay from "./DOM_elements.js";

createTaskDisplay.appendDisplay();
createTaskDisplay.hideDisplay();
