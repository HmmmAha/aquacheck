document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('helpForm');
  const textarea = document.getElementById('kendala');

    if (!form) return; 
  form.addEventListener('submit', function (event) {
    if (!textarea.value.trim()) {
      event.preventDefault(); 
      alert('Mohon isi kolom kendala terlebih dahulu.');
      textarea.focus();
      return;
    }
  });
});
