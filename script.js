const themeToggle = document.getElementById("theme-toggle");
const themeLabel = document.getElementById("theme-label");

themeToggle.addEventListener("change", function () {
  const darkModeEnabled = themeToggle.checked;

  document.body.classList.toggle("dark-mode", darkModeEnabled);

  themeLabel.textContent = darkModeEnabled
    ? "Light mode"
    : "Dark mode";
});