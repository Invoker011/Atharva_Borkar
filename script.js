// --- Projects Modal Functionality ---

// Grab overlay elements
const overlayBandai = document.getElementById('overlayBandai');
const overlayInfosys = document.getElementById('overlayInfosys');
const overlayCox = document.getElementById('overlayCox');

// Grab modal elements
const modalBandai = document.getElementById('modalBandai');
const modalInfosys = document.getElementById('modalInfosys');
const modalCox = document.getElementById('modalCox');

// Grab close elements
const closeModalBandai = document.getElementById('closeModalBandai');
const closeModalInfosys = document.getElementById('closeModalInfosys');
const closeModalCox = document.getElementById('closeModalCox');

// Open modals on overlay click
overlayBandai.addEventListener('click', () => {
  modalBandai.style.display = 'block';
});
overlayInfosys.addEventListener('click', () => {
  modalInfosys.style.display = 'block';
});
overlayCox.addEventListener('click', () => {
  modalCox.style.display = 'block';
});

// Close modals on X click
closeModalBandai.addEventListener('click', () => {
  modalBandai.style.display = 'none';
});
closeModalInfosys.addEventListener('click', () => {
  modalInfosys.style.display = 'none';
});
closeModalCox.addEventListener('click', () => {
  modalCox.style.display = 'none';
});

// Close modals if clicking outside modal content
window.addEventListener('click', (event) => {
  if (event.target === modalBandai) {
    modalBandai.style.display = 'none';
  }
  if (event.target === modalInfosys) {
    modalInfosys.style.display = 'none';
  }
  if (event.target === modalCox) {
    modalCox.style.display = 'none';
  }
});
