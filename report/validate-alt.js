document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('helpForm');
  if (!form) return; 

  form.addEventListener('submit', function (event) {
    const locationTextarea = document.getElementById('location');
    if (locationTextarea && !locationTextarea.value.trim()) {
      event.preventDefault();
      alert('Mohon isi kolom lokasi terlebih dahulu.');
      locationTextarea.focus();
      return;
    }

    const kendalaTextarea = document.getElementById('kendala');
    if (kendalaTextarea && !kendalaTextarea.value.trim()) {
      event.preventDefault();
      alert('Mohon isi kolom kendala terlebih dahulu.');
      kendalaTextarea.focus();
      return;
    }
  });
});
