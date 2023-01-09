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



export default createTaskDisplay;
