const status = document.getElementById("status");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const now = new Date();
  status.textContent = `Clicked at ${now.toLocaleTimeString()}.`;
});
