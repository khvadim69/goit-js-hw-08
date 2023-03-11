const form = document.querySelector(".feedback-form");

form.addEventListener("input", handleInput);
function handleInput(event) {
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
};

  



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