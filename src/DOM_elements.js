const createTaskDisplay = {
  appendDisplay: function () {
    const addTask = document.getElementById("add-task");
    addTask.addEventListener("click", () => {
      const form = document.querySelector("#addTaskForm");
      form.style.display = "flex";
      addTask.style.display = "none";
    });
  },
  hideDisplay: function () {
    const hideTaskDisplayButton = document.querySelector("#cancel");
    const addTask = document.getElementById("add-task");
    hideTaskDisplayButton.addEventListener("click", () => {
      const form = document.querySelector("#addTaskForm");
      form.style.display = "none";
      addTask.style.display = "block";
    });
  },
};

export default createTaskDisplay;
