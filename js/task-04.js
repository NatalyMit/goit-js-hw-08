'use strict';

const userForm = document.querySelector('.login-form');
console.log(userForm);

userForm.addEventListener('submit', e => {
  e.preventDefault();
  const elems = e.target.elements;

  if (elems.email.value === '' || elems.password.value === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(data);
    userForm.reset();
  }

  const data = {
    email: elems.email.value.trim(),
    password: elems.password.value.trim(),
  };
  console.log(data);
  userForm.reset();
});
