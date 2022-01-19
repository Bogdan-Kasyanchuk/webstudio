const refs = {
  elFilter: document.querySelector('[data-filter]'),
  elCard: document.querySelector('[data-card]'),
};

const { elFilter, elCard } = refs;

const array = [...elCard.children];

elFilter.addEventListener('click', filter);

function filter(event) {
  elCard.innerHTML = '';
  if (event.target.textContent !== 'Все') {
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
    elCard.insertAdjacentHTML('beforeend', array.map(element => element.outerHTML).join(' '));
  }
}
