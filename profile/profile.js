// profile.js
document.addEventListener("DOMContentLoaded", () => {
  // Baca tiap field terpisah
  document.getElementById("name").value     = localStorage.getItem("username") || "";
  document.getElementById("password").value = localStorage.getItem("password") || "";
  document.getElementById("location").value = localStorage.getItem("address")  || "";
  document.getElementById("email").value    = localStorage.getItem("email")    || "";
});
