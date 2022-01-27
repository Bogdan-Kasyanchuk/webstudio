import refs from './refs';

const {
  elMobileMenu,
  elBtnMobileMenuOpen,
  elBtnMobileMenuClose,
  elFilterMobile,
  elContactMobile,
} = refs;

elBtnMobileMenuOpen.addEventListener('click', mobileMenuOpen);

function mobileMenuOpen() {
  document.body.classList.toggle('scroll');
  elMobileMenu.classList.toggle('is-open');
  elBtnMobileMenuClose.addEventListener('click', mobileMenuClose);
  elFilterMobile.addEventListener('click', mobileMenuClose);
  elContactMobile.addEventListener('click', mobileMenuClose);
}

function mobileMenuClose() {
  document.body.classList.toggle('scroll');
  elMobileMenu.classList.toggle('is-open');
  elBtnMobileMenuClose.removeEventListener('click', mobileMenuClose);
  elFilterMobile.removeEventListener('click', mobileMenuClose);
  elContactMobile.removeEventListener('click', mobileMenuClose);
}
