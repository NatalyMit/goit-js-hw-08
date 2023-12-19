'use strict';

const counterCategories = document.querySelectorAll('.item');

const listTitle = document.querySelectorAll('h2');

console.log(`Numbers of categories: ${counterCategories.length}`);

counterCategories.forEach(function callback(el) {
  console.log(`Categories: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.childElementCount}`);
});
