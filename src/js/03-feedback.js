const form = document.querySelector('.feedback-form');
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
let formData = {};
form.addEventListener(
  'input',
  throttle(event => {
    formData[event.target.name] = event.target.value;
    onInputFormValue();
  }, 500)
);
function onInputFormValue() {
  const inputValue = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, inputValue);
}
saveForm();
function saveForm() {
  const complectedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (complectedForm) {
    form.email.value = complectedForm.email;
    form.message.value = complectedForm.message;
  }
}
form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  Object.keys(formData).forEach(el => delete formData[el]);
});
