const themeToggle = document.getElementById("theme-toggle");
const themeLabel = document.getElementById("theme-label");

function applyTheme(darkModeEnabled) {
  document.body.classList.toggle("dark-mode", darkModeEnabled);
  themeToggle.checked = darkModeEnabled;
  themeLabel.textContent = darkModeEnabled
    ? "Light mode"
    : "Dark mode";
}

let savedTheme = null;

try {
  savedTheme = localStorage.getItem("gpop-theme");
} catch (error) {
  // The switch still works if browser storage is unavailable.
}

applyTheme(savedTheme === "dark");

themeToggle.addEventListener("change", function () {
  const darkModeEnabled = themeToggle.checked;

  applyTheme(darkModeEnabled);

  try {
    localStorage.setItem(
      "gpop-theme",
      darkModeEnabled ? "dark" : "light"
    );
  } catch (error) {
    // The selected theme still applies without being saved.
  }
});

const feedbackButtons = document.querySelectorAll(".feedback-button");
const feedbackMessage = document.getElementById("feedback-message");

feedbackButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    feedbackMessage.textContent =
      "Thank you! This is a demo, so your feedback has not been sent.";
  });
});

