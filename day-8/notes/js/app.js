// calling w/ querySelector
// const form1 = document.querySelector('form')
// console.log(form1);

// grabs first form on document
// const form2 = document.forms[0];
// console.log(form2);

// calling by name
// const form3 = document.forms['login'];
// console.log(form3);

// calling by name, another way
const loginForm = document.forms.login;
// console.log(loginForm);

function validateInputs(userInput, min) {
  if (userInput.value.length < min) {
    userInput.setCustomValidity(`Must be at least ${min} characters.`);
    userInput.style.borderColor = 'Red';
  } else {
    userInput.setCustomValidity('');
    userInput.style.borderColor = 'Black';
  }
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // POST request
    // realtime chat applications, sending info to data base
    // fetch('https://b034-2600-1700-6a80-b010-bd50-93e5-a5fe-ac6d.ngrok.io', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username: loginForm.username.value,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));

  validateInputs(loginForm.username, 6);
  validateInputs(loginForm.password, 8);
  console.log('username', loginForm.username.value);
  console.log('password', loginForm.password.value);
});

loginForm.username.addEventListener('focusout', (e) => {
  validateInputs(loginForm.username, 6);
});
loginForm.password.addEventListener('focusout', (e) => {
  validateInputs(loginForm.password, 8);
});
