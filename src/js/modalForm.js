import refs from './refs';

const { elModalForm } = refs;

const elName = elModalForm.querySelector('input[type=text]');
const elPhone = elModalForm.querySelector('input[type=tel]');
const elEmail = elModalForm.querySelector('input[type=email]');
const elComment = elModalForm.querySelector('textarea[name=comment]');

const users = [];

function User(name, phone, email, comment) {
  this.name = name;
  this.phone = phone;
  this.email = email;
  this.comment = comment;
}

export function getModalInfoForm(event) {
  event.preventDefault();
  const user = new User(
    elName.value.trim(),
    elPhone.value.trim(),
    elEmail.value,
    elComment.value.trim(),
  );
  elModalForm.reset();
  return users.push(user);
}
