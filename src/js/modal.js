import refs from './refs';
import { getModalInfoForm } from './modalForm';

const { elBackdrop, elBtnModalOpen, elBtnModalClose, elModalForm } = refs;

elBtnModalOpen.addEventListener('click', openModal);

function openModal() {
  document.body.classList.toggle('scroll');
  elBackdrop.classList.toggle('is-hidden');
  elBtnModalClose.addEventListener('click', closeModal);
  window.addEventListener('keydown', setKeyListener);
  elBackdrop.addEventListener('click', setBackdropListener);
  elModalForm.addEventListener('submit', getModalInfoForm);
}

function closeModal() {
  document.body.classList.toggle('scroll');
  elBackdrop.classList.toggle('is-hidden');
  window.removeEventListener('keydown', setKeyListener);
  elBackdrop.removeEventListener('click', setBackdropListener);
  elModalForm.removeEventListener('submit', getModalInfoForm);
}

function setKeyListener(event) {
  if (event.key === 'Escape') closeModal();
}

function setBackdropListener(event) {
  if (!event.target.classList.contains('backdrop')) return;
  closeModal();
}
