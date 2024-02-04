const aside = document.getElementById("side"),
  sideToggleButton = document.getElementById("side-toggle"),
  tasksContainer = document.getElementById("tasks-container"),
  sideButtons = document.querySelectorAll(".buttons-container div");

sideToggleButton.onclick = (_) => aside.classList.toggle("hid-xe");
tasksContainer.onclick = (_) => aside.classList.add("hid-xe");

function activeSideButton() {
  for (let i = 0; i < sideButtons.length; i++) {
    sideButtons[i].classList.remove("active");
  }
  this.classList.add("active");
}

for (let i = 0; i < sideButtons.length; i++) {
  sideButtons[i].addEventListener("click", activeSideButton);
}
