const form = document.querySelector(".feedback-form");
import throttle from 'lodash.throttle'
form.addEventListener("input", handleInput);
throttle(function handleInput(event) {
  event.preventDefault();
  localStorage.setItem('feedback-form-state', JSON.stringify(email,message));
  const {
    elements: { email, message }
  } = event.currentTarget;

  if (email.value === "" || message.value === "") {
  localStorage.getItem('feedback-form-state');
  }

  console.log(`email: ${email.value}, message: ${message.value}`);
  event.currentTarget.reset();
},500);

  
// output.textContent = event.currentTarget.value;



// const form = document.querySelector(".form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password }
//   } = event.currentTarget;

//   if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();