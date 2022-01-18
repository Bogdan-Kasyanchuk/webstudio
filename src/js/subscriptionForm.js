const elForm = document.querySelector('[data-footer-form]');
const elEmail = elForm.querySelector('input[type=email]');

function EmailInfo(email) {
  this.email = email;
}

function subscriptionForm(event) {
  event.preventDefault();
  if (elEmail.value !== '') {
    const emailInfo = new EmailInfo(elEmail.value);
    console.log(emailInfo);
  }
  elForm.reset();
}

elForm.addEventListener('submit', subscriptionForm);
