const createTaskDisplay = {
  appendDisplay: function () {
    const addTask = document.getElementById("add-task");
    addTask.addEventListener("click", () => {
      const form = document.querySelector("#addTaskForm");
      form.style.display = "block";
    });
  },
  hideDisplay: function () {
    const hideTaskDisplayButton = document.querySelector("#cancel");
    hideTaskDisplayButton.addEventListener("click", () => {
      const form = document.querySelector("#addTaskForm");
      form.style.display = "none";
    });
  },
};

export default createTaskDisplay;
