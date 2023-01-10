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
    const mainSection = document.querySelector("main");
    const task = document.createElement("div");
    task.style.height = "200px";
    task.style.width = "100%";

    const title = document.createElement("p");
    title.innerText = storingData.taskArray[0].title;
    const dueDate = document.createElement("input");
    dueDate.value = storingData.taskArray[0].dueDate;
    dueDate.type = "date";
    dueDate.id = "date";
    dueDate.name = "date";
    mainSection.appendChild(task);
    task.appendChild(title);
    task.appendChild(dueDate);
  },
};

export { createTaskDisplay, createTaskOnPage };
