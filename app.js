const timer = document.querySelector("#timer");
const selector = document.querySelector("#selector");
const progressBar = document.querySelector("#progressBar");

timer.oninput = function() {
  selector.style.left = this.value + "%";
  progressBar.style.width = this.value + "%";
};
