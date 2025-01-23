// JavaScript for Theme Toggle
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const body = document.body;

  // Check and apply saved theme from localStorage
  const savedTheme = localStorage.getItem("theme") || "light-mode";
  body.classList.add(savedTheme);

  // Set the correct icon based on saved theme
  themeIcon.textContent = savedTheme === "dark-mode" ? "dark_mode" : "light_mode";

  // Toggle theme on button click
  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("light-mode")) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark-mode");
      themeIcon.textContent = "dark_mode"; // Change icon to moon
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      localStorage.setItem("theme", "light-mode");
      themeIcon.textContent = "light_mode"; // Change icon to sun
    }
  });
});