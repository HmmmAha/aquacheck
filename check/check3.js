const frame    = document.querySelector('.map-container');
const mapInner = frame.querySelector('.map-inner');
const img      = mapInner.querySelector('.map-bg');

// Ukuran container & gambar
const fw = frame.clientWidth,  fh = frame.clientHeight;
const iw = img.clientWidth,  ih = img.clientHeight;

// Batas pergeseran (clamp)
const minX = fw - iw, maxX = 0;
const minY = fh - ih, maxY = 0;

// Koordinat
const pinX = 608, pinY = 460;  // initial center
const oriX = 605, oriY = 670;  // center on button

// Fungsi clamp
const clamp = (v, min, max) => Math.max(min, Math.min(v, max));

// 1) Inisialisasi: center ke pinX,pinY
let currentX = clamp((fw/2) - pinX, minX, maxX);
let currentY = clamp((fh/2) - pinY, minY, maxY);
mapInner.style.left = `${currentX}px`;
mapInner.style.top  = `${currentY}px`;

// 2) Fungsi animate-center: ke (x,y)
function animateCenter(x, y) {
    mapInner.style.transition = 'left 0.4s ease-in-out, top 0.4s ease-in-out';
    currentX = clamp((fw/2) - x, minX, maxX);
    currentY = clamp((fh/2) - y, minY, maxY);
    mapInner.style.left = `${currentX}px`;
    mapInner.style.top  = `${currentY}px`;

    mapInner.addEventListener('transitionend', function handler() {
    mapInner.style.transition = 'none';
    mapInner.removeEventListener('transitionend', handler);
    });
}

// 3) Drag & pan logic
let isDragging = false, startX = 0, startY = 0;
frame.addEventListener('mousedown', e => {
    isDragging = true;
    frame.style.cursor = 'grabbing';
    startX = e.clientX; startY = e.clientY;
    mapInner.style.transition = 'none';
});
document.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const dx = e.clientX - startX,
        dy = e.clientY - startY;
    const nx = clamp(currentX + dx, minX, maxX),
        ny = clamp(currentY + dy, minY, maxY);
    mapInner.style.left = `${nx}px`;
    mapInner.style.top  = `${ny}px`;
});
document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    frame.style.cursor = 'grab';
    currentX = parseInt(mapInner.style.left, 10);
    currentY = parseInt(mapInner.style.top,  10);
});
img.addEventListener('dragstart', e => e.preventDefault());

// 4) Hook tombol: tekan → center ke oriX, oriY
document.getElementById('center-btn')
    .addEventListener('click', () => animateCenter(oriX, oriY));