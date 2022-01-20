import refs from './refs.js';

const { elBackdrop, elBtnModalOpen, elBtnModalClose } = refs;

elBtnModalOpen.addEventListener('click', openModal);

function openModal() {
  document.body.classList.toggle('scroll');
  elBackdrop.classList.toggle('is-hidden');
  elBtnModalClose.addEventListener('click', closeModal);
  window.addEventListener('keydown', setKeyListener);
  elBackdrop.addEventListener('click', setBackdropListener);
}

function closeModal() {
  document.body.classList.toggle('scroll');
  elBackdrop.classList.toggle('is-hidden');
  window.removeEventListener('keydown', setKeyListener);
  elBackdrop.removeEventListener('click', setBackdropListener);
}

function setKeyListener(event) {
  if (event.key === 'Escape') closeModal();
}

function setBackdropListener(event) {
  if (!event.target.classList.contains('backdrop')) return;
  closeModal();
}
