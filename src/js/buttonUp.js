import throttle from 'lodash.throttle';
import refs from './refs.js';

const { elButtonUp } = refs;

showButtonUp();

window.addEventListener(
  'scroll',
  throttle(() => showButtonUp(), 500),
);

elButtonUp.addEventListener('click', onButtonUpClick);

function showButtonUp() {
  pageYOffset < document.documentElement.clientHeight
    ? elButtonUp.classList.add('visually-hidden')
    : elButtonUp.classList.remove('visually-hidden');
}

function onButtonUpClick() {
  window.scrollTo({ top: 0 });
}
