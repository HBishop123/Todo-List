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
    const cancelButtonTopRight = document.querySelector("#delete-button-task");

    hideTaskDisplayButtonWithSubmit.addEventListener("click", () => {
      form.style.display = "none";
      addTask.style.display = "block";
    });

    hideTaskDisplayButton.addEventListener("click", () => {
      form.style.display = "none";
      addTask.style.display = "block";
    });

    cancelButtonTopRight.addEventListener("click", () => {
      form.style.display = "none";
      addTask.style.display = "block";
    });
  },
};

const createTaskOnPage = {
  createTask: function () {
    const mainSection = document.querySelector(".main-area");
    const task = document.createElement("div");
    task.className = "taskContainer";
    task.style.width = "50%";
    task.style.height = "100px";
    task.style.backgroundColor = "white";
    task.style.borderBottom = "1px solid black"
    task.style.display = "flex";
    task.style.flexDirection = "column";

    // Creating the container for the title
    const titleContainer = document.createElement("div");
    titleContainer.style.display = "flex";
    titleContainer.style.flexDirection = "row-reverse";
    titleContainer.style.justifyContent = "center";
    task.appendChild(titleContainer);

    // Creating the container for the date
    const dateContainer = document.createElement("div");
    dateContainer.style.height = "100%";
    dateContainer.style.display = "flex";
    dateContainer.style.alignItems = "center";
    dateContainer.style.justifyContent = "space-around";
    dateContainer.className = "button-date-container";
    dateContainer.style.flexDirection = "row-reverse";
    task.appendChild(dateContainer);

    // creating title of task
    const title = document.createElement("p");
    title.innerText = storingData.taskArray[storingData.taskArrayCounter].title;
    title.style.position = "absolute";
    titleContainer.appendChild(title);

    // creating the date to be completed by
    const dueDate = document.createElement("input");
    dueDate.value = storingData.taskArray[storingData.taskArrayCounter].dueDate;
    dueDate.type = "date";
    dueDate.className = "date";
    dueDate.name = "date";
    dateContainer.appendChild(dueDate);

    // creating the pop-up text box
    const notesButton = document.createElement("button");
    notesButton.innerText = "Notes";
    notesButton.id = "notes-button";
    dateContainer.appendChild(notesButton);

    // create notes section
    const notesSection = document.createElement("textarea");
    notesSection.style.height = "100%";
    notesSection.style.width = "100%";
    notesSection.style.wordBreak = "break-all";
    notesSection.style.padding = "3px";
    notesSection.style.resize = "none";
    notesSection.style.display = "none";
    notesSection.value =
      storingData.taskArray[storingData.taskArrayCounter].notes;
    if (notesSection.value === "undefined") {
      notesSection.value = "";
    }
    notesSection.id = `${storingData.taskArrayCounter}`;
    task.appendChild(notesSection);

    // create delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.id = `${storingData.deleteButtonCounter}`;
    deleteButton.style.width = "15px";
    deleteButton.style.height = "15px";
    deleteButton.style.marginLeft = "auto";
    deleteButton.textContent = "X";
    deleteButton.style.display = "flex";
    deleteButton.style.alignItems = "center";
    deleteButton.style.justifyContent = "center";
    deleteButton.style.backgroundColor = "red";
    titleContainer.appendChild(deleteButton);

    mainSection.appendChild(task);
  },

  pushTaskToPage: function () {
    document.addEventListener("DOMContentLoaded", () => {
      document.getElementById("submit").addEventListener("click", () => {
        createTaskOnPage.createTask();
        storingData.taskArrayCounter++;
        storingData.deleteButtonCounter++;
      });
    });
  },
};

const displayNotes = {
  showNotesPopup: function () {
    document.addEventListener("DOMContentLoaded", () => {
      document.addEventListener("click", (e) => {
        const target = e.target;
        if (
          target.id === "notes-button" &&
          target.parentNode.nextSibling.style.display === "none"
        ) {
          target.innerText = "Click to Save Notes";
          target.parentNode.nextSibling.style.display = "block";
        } else if (
          target.id === "notes-button" &&
          target.parentNode.nextSibling.style.display === "block"
        ) {
          target.innerText = "Notes";
          target.parentNode.nextSibling.style.display = "none";
        }
      });
    });
  },
};

const projects = {
  projectLink: function() {
    const projects = document.getElementById('projects')
    document.addEventListener('DOMContentLoaded', () => {
      projects.addEventListener('click', () => {
        
      })
    })
  }
}

export { createTaskDisplay, createTaskOnPage, displayNotes };
