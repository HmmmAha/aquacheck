// home-after.js
document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("username") || "Pengguna";
  const titleEl  = document.querySelector(".hero-1-title");
  if (!titleEl) return;

  titleEl.textContent = `Halo, ${username}!`;
});
