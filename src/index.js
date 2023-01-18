import {
  createTaskDisplay,
  createTaskOnPage,
  displayNotes,
  createAddProjectDisplay,
} from "./DOM_elements.js";

import {
  pushNotesToTaskArray,
  deleteButtonFunctionality,
} from "./site-functionality.js";

// Object that stores Data of the tasks
export const storingData = {
  taskArray: [],
  // this counter allows the correct task object to be appended to the page
  taskArrayCounter: 0,
  deleteButtonCounter: 0,
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
      priority: document.querySelector('select[name="select"]').value,
      notes: document.querySelector("#notes").value,
    };
    const title = task.title;
    const dueDate = task.date;
    const priority = task.priority;
    const notes = task.notes;

    let result = new toDo(title, dueDate, priority, notes);
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

const flowOfTasks = (function () {
  // hide and show task form
  createTaskDisplay.appendDisplay();
  createTaskDisplay.hideDisplay();

  // show and hide the add project form
  createAddProjectDisplay.revealProjectDisplay()
  createAddProjectDisplay.hideProjectDisplay()

  // collect the form data and pushes it to the task array.
  // data is taken from the task array and pushed to the display for the user
  useFormData.attachEventListener();
  createTaskOnPage.pushTaskToPage();

  // controls the notes page
  displayNotes.showNotesPopup();

  // pushes notes to the relevant object
  pushNotesToTaskArray.pushNotes();

  // delete-button functionality
  deleteButtonFunctionality.deleteButtonFunction();
})();
