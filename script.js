const toggleButton = document.getElementById("toggle-theme");
const body = document.body;

// Se o modo escuro já estiver salvo no localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleButton.textContent = "☀️ Modo Claro";
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");

  toggleButton.textContent = isDark ? "☀️ Modo Claro" : "🌙 Modo Escuro";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
