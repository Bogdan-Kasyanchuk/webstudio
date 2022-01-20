import refs from './refs.js';

const { elFilter, elCard } = refs;

elFilter.addEventListener('click', filter);

const array = [...elCard.children];

function filter(event) {
  if (!event.target.classList.contains('button-filter')) return;
  if (event.target.textContent !== 'Все') {
    elCard.innerHTML = '';
    elCard.insertAdjacentHTML(
      'beforeend',
      array
        .filter(
          element =>
            element.lastElementChild.lastElementChild.lastElementChild.textContent.slice(
              0,
              length - 1,
            ) === event.target.textContent.slice(0, length - 1) ||
            element.lastElementChild.lastElementChild.lastElementChild.textContent ===
              event.target.textContent.slice(0, length - 1),
        )
        .map(element => element.outerHTML)
        .join(' '),
    );
  } else {
    elCard.innerHTML = '';
    elCard.insertAdjacentHTML('beforeend', array.map(element => element.outerHTML).join(' '));
  }
}
