import throttle from 'lodash.throttle';
import refs from './refs';

const { elButtonUp } = refs;

showButtonUp();

window.addEventListener(
  'scroll',
  throttle(() => showButtonUp(), 500),
);

function showButtonUp() {
  pageYOffset < document.documentElement.clientHeight
    ? elButtonUp.classList.add('visually-hidden')
    : elButtonUp.classList.remove('visually-hidden');
}

elButtonUp.addEventListener('click', onButtonUpClick);

function onButtonUpClick() {
  window.scrollTo({ top: 0 });
}
