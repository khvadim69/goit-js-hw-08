

const form = document.querySelector('.feedback-form');
import throttle from 'lodash.throttle';
const STORAGE_KEY= 'feedback-form-state'
form.addEventListener(
  'input',
  throttle(event => {
    event.preventDefault();
    // const { email, message } = event.target;
    const { email, message } = event.currentTarget;
    const formData = {};
    formData.email = email.value.trim();
    formData.message = message.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();
  // event.target.reset();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
});
saveForm();
function saveForm() {
  const complectedForm = JSON.parse(
    localStorage.getItem(STORAGE_KEY)
  );
  if (complectedForm) {
    form.email.value = complectedForm.email;
    form.message.value = complectedForm.message;
  }
}




// const form = document.querySelector('.feedback-form');
// import throttle from 'lodash.throttle';
// const STORAGE_KEY= 'feedback-form-state'
// form.addEventListener(
//   'input',
//   throttle(event => {
//     event.preventDefault();
//     const { email, message } = event.currentTarget;
//     const formData = {};
//     formData.email = email.value.trim();
//     formData.message = message.value.trim();
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
//   }, 500)
// );

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   event.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// });
// saveForm();
// function saveForm() {
//   const complectedForm = JSON.parse(
//     localStorage.getItem(STORAGE_KEY)
//   );
//   if (complectedForm) {
//     form.email.value = complectedForm.email;
//     form.message.value = complectedForm.message;
//   }
// }