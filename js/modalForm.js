const elForm = document.querySelector('[data-modal-form]');

const refs = {
  elName: elForm.querySelector('input[type=text]'),
  elPhone: elForm.querySelector('input[type=tel]'),
  elEmail: elForm.querySelector('input[type=email]'),
  elComment: elForm.querySelector('textarea[name=comment]'),
};

const { elName, elPhone, elEmail, elComment } = refs;

function UsersInfo(name, phone, email, comment) {
  this.name = name;
  this.phone = phone;
  this.email = email;
  this.comment = comment;
}

function modalForm(event) {
  event.preventDefault();
  if (
    elName.value !== '' &&
    elPhone.value !== '' &&
    elEmail.value !== '' &&
    elComment.value !== ''
  ) {
    const userInfo = new UsersInfo(
      elName.value.trim(),
      elPhone.value.trim(),
      elEmail.value,
      elComment.value.trim(),
    );
    console.log(userInfo);
  }
  elForm.reset();
}

elForm.addEventListener('submit', modalForm);
