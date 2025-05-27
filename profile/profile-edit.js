// profile-edit.js
document.addEventListener("DOMContentLoaded", () => {
  // Fields yang dapat diedit
  const fields = ["name", "password", "location", "email"];

  // Inisialisasi nilai input dari localStorage
  document.getElementById("name").value     = localStorage.getItem("username") || "";
  document.getElementById("password").value = localStorage.getItem("password") || "";
  document.getElementById("location").value = localStorage.getItem("address")  || "";
  document.getElementById("email").value    = localStorage.getItem("email")    || "";

  // Simpan kembali saat Confirm diklik
  document.getElementById("saveBtn").addEventListener("click", (e) => {
    e.preventDefault();

    // Ambil nilai baru
    const newName     = document.getElementById("name").value.trim();
    const newPass     = document.getElementById("password").value;
    const newLocation = document.getElementById("location").value.trim();
    const newEmail    = document.getElementById("email").value.trim();

    // Validasi minimal (opsional)
    if (!newName) {
      alert("Username cannot be empty");
      return;
    }

    // Simpan field terpisah
    localStorage.setItem("username", newName);
    localStorage.setItem("password", newPass);
    localStorage.setItem("address",  newLocation);
    localStorage.setItem("email",    newEmail);

    alert("Profile updated!");
    // Kembali ke halaman view profile
    window.location.href = "profile.html";
  });
});
