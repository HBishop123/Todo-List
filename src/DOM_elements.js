import { storingData } from "./index.js";

const createTaskDisplay = {
  appendDisplay: function () {
    const addTask = document.getElementById("add-task");
    const form = document.querySelector("#addTaskForm");
    addTask.addEventListener("click", () => {
      form.style.display = "flex";
      addTask.style.display = "none";
    });
  },
  hideDisplay: function () {
    const addTask = document.getElementById("add-task");
    const form = document.querySelector("#addTaskForm");
    const hideTaskDisplayButton = document.querySelector("#cancel");
    const hideTaskDisplayButtonWithSubmit = document.querySelector("#submit");

    hideTaskDisplayButtonWithSubmit.addEventListener("click", () => {
      form.style.display = "none";
      addTask.style.display = "block";
    });

    hideTaskDisplayButton.addEventListener("click", () => {
      form.style.display = "none";
      addTask.style.display = "block";
    });
  },
};

const createTaskOnPage = {
  createTask: function () {
    const mainSection = document.querySelector(".main-area");
    const task = document.createElement("div");
    task.style.width = "50%";
    task.style.height = "100px";
    task.style.backgroundColor = "grey";
    task.style.display = "flex";
    task.style.flexDirection = "column";

    // Creating the container for the title
    const titleContainer = document.createElement("div");
    titleContainer.style.display = "flex";
    titleContainer.style.alignItems = "top";
    titleContainer.style.justifyContent = "center";
    task.appendChild(titleContainer);

    // Creating the container for the date
    const dateContainer = document.createElement("div");
    dateContainer.style.height = "100%";
    dateContainer.style.display = "flex";
    dateContainer.style.alignItems = "center";
    dateContainer.style.justifyContent = "space-around";
    task.appendChild(dateContainer);

    // creating title of task
    const title = document.createElement("p");
    title.innerText = storingData.taskArray[storingData.taskArrayCounter].title;

    // creating the date to be completed by
    const dueDate = document.createElement("input");
    dueDate.value = storingData.taskArray[storingData.taskArrayCounter].dueDate;
    dueDate.type = "date";
    dueDate.id = "date";
    dueDate.name = "date";

    // creating the pop-up text box
    const notesButton = document.createElement("button");
    notesButton.innerText = "Notes";
    notesButton.id = "notesButton";
    dateContainer.appendChild(notesButton);

    // create notes section
    const notesSection = document.createElement("textarea");
    notesSection.style.height = "100%";
    notesSection.style.width = "100%";
    notesSection.style.wordBreak = "break-all";
    notesSection.style.padding = "3px";
    notesSection.style.resize = "none";

    task.appendChild(notesSection);

    mainSection.appendChild(task);
    titleContainer.appendChild(title);
    dateContainer.appendChild(dueDate);
  },

  pushTaskToPage: function () {
    document.addEventListener("DOMContentLoaded", () => {
      document.getElementById("submit").addEventListener("click", () => {
        this.createTask();
        storingData.taskArrayCounter++;
      });
    });
  },
};

const DisplayNotes = {
  showNotesPopup: function () {
    document.addEventListener("DOMContentLoaded", () => {
      document
        .getElementById("notesButton")
        .addEventListener("click", () => {});
    });
  },
};

export { createTaskDisplay, createTaskOnPage, DisplayNotes };
