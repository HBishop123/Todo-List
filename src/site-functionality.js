import { storingData } from "./index.js";
import { createTaskOnPage } from "./DOM_elements.js";

export const pushNotesToTaskArray = {
  pushNotes: function () {
    document.addEventListener("DOMContentLoaded", () => {
      document.addEventListener("click", (e) => {
        const target = e.target;
        if (target.id === "notes-button") {
          storingData.taskArray[target.parentNode.nextSibling.id].notes =
            target.parentNode.nextSibling.value;
        }
      });
    });
  },
};

export const deleteButtonFunctionality = {
  deleteButtonFunction: function () {
    document.addEventListener("DOMContentLoaded", () => {
      document.addEventListener("click", (e) => {
        const target = e.target;
        if (target.matches(".delete-button")) {
          const allTaskCards = document.querySelectorAll(".taskContainer");

          allTaskCards.forEach((x) => x.remove());
          storingData.taskArray.splice(target.id, 1);
          storingData.taskArrayCounter = 0;
          storingData.deleteButtonCounter = -1;

          for (let i = 0; i < storingData.taskArray.length; i++) {
            createTaskOnPage.createTask()
            createTaskOnPage.pushTaskToPage();
          }
        }
      });
    });
  },
};
