const tasks = document.querySelectorAll(".task"),
  todoContainer = document.getElementById("todo-tasks"),
  completedContainer = document.getElementById("completed-tasks"),
  completedButton = document.getElementById("completed-button"),
  completedIcon = completedButton.querySelector("i");

function mark_task(checkbox, task) {
  if (!checkbox.checked) todoContainer.appendChild(task);
  else completedContainer.appendChild(task);
}

for (let i = 0; i < tasks.length; i++) {
  let checkbox = tasks[i].querySelector("input[type='checkbox']");
  checkbox.addEventListener("change", () => mark_task(checkbox, tasks[i]));
}

completedButton.onclick = (_) => {
  if (completedContainer.style.display == "none") {
    completedContainer.style.display = "block";
    completedIcon.classList.remove("fa-chevron-right");
    completedIcon.classList.add("fa-chevron-down");
  } else {
    completedContainer.style.display = "none";
    completedIcon.classList.add("fa-chevron-right");
    completedIcon.classList.remove("fa-chevron-down");
  }
};
