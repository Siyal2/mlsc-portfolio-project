const home = document.getElementById("home");
home.classList.add("active");
function changeColor(button) {
  // Remove 'active' class from all buttons
  const buttons = document.querySelectorAll("li a");
  buttons.forEach((btn) => btn.classList.remove("active"));

  // Add 'active' class to the clicked button
  button.classList.add("active");
}
