// Object that stores Data of the tasks
export const storingData = {
  taskArray: [],
  // this counter allows the correct task object to be appended to the page
  taskArrayCounter: 0,
  deleteButtonCounter: -1
};

console.log(storingData.taskArray);
// class constructor for the task object
class toDo {
  constructor(title, dueDate, priority, notes) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }
}

// object to get the form data and push it to the storingData array
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
    storingData.taskArray.push(result);
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

import {
  createTaskDisplay,
  createTaskOnPage,
  displayNotes,
} from "./DOM_elements.js";

import {
  pushNotesToTaskArray,
  deleteButtonFunctionality,
} from "./site-functionality.js";

const flowOfTasks = (function () {
  // hide and show task form
  createTaskDisplay.appendDisplay();
  createTaskDisplay.hideDisplay();

  // collect the form data and pushes it to the task array.
  // data is taken from the task array and pushed to the display for the user
  useFormData.attachEventListener();
  createTaskOnPage.pushTaskToPage();

  // controls the notes page
  displayNotes.showNotesPopup();

  // pushes notes to the relevant object
  pushNotesToTaskArray.pushNotes();

  // delete-button functionality
  deleteButtonFunctionality.deleteButtonFunction()
})();
