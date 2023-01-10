import { storingData } from "./index.js";

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
