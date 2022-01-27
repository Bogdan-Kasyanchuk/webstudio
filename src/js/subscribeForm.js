import refs from './refs';

const { elSubscribeForm } = refs;

elSubscribeForm.addEventListener('submit', getSubscribeInfoForm);

const elEmail = elSubscribeForm.querySelector('input[type=email]');

const users = [];

function User(email) {
  this.email = email;
}

function getSubscribeInfoForm(event) {
  event.preventDefault();
  const user = new User(elEmail.value);
  elSubscribeForm.reset();
  return users.push(user);
}
