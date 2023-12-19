'use strict';

const userName = document.querySelector('#name-input');

const spanName = document.querySelector('#name-output');

userName.addEventListener('input', e => {
  const nameForm = e.target.value.trim();
  if (nameForm !== '') {
    spanName.textContent = nameForm;
  } else {
    spanName.textContent = 'Anonymous';
  }
});
