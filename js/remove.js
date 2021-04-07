
const removeButton1 = document.querySelector('.delete-button1');
const removeButton2 = document.querySelector('.delete-button2');
const removeButton3 = document.querySelector('.delete-button3');
const removeButton4 = document.querySelector('.delete-button4');
const removeButton5 = document.querySelector('.delete-button5');
const removeButton6 = document.querySelector('.delete-button6');

const $polaroid1 = document.querySelector('.polaroid1');
const $polaroid2 = document.querySelector('.polaroid2');
const $polaroid3 = document.querySelector('.polaroid3');
const $polaroid4 = document.querySelector('.polaroid4');
const $polaroid5 = document.querySelector('.polaroid5');
const $polaroid6 = document.querySelector('.polaroid6');
const $pols = document.querySelector('.polaroids');

document.addEventListener('DOMContentLoaded', function () {
  $pols.style.transform = "translateY(-50%)";
});

removeButton1.onclick = () => {
  console.log('remove');
  localStorage.removeItem('recentImage1');
  $polaroid1.classList.toggle('active');
  // $pol.style.transform = "translateY(100%)";
  // $pol.style.transition = "0.5s ease-out";
};

removeButton2.onclick = () => {
  console.log('remove');
  localStorage.removeItem('recentImage2');
  $polaroid2.classList.toggle('active');
};

removeButton3.onclick = () => {
  console.log('remove');
  localStorage.removeItem('recentImage3');
  $polaroid3.classList.toggle('active');
};

removeButton4.onclick = () => {
  console.log('remove');
  localStorage.removeItem('recentImage4');
  $polaroid4.classList.toggle('active');
};

removeButton5.onclick = () => {
  console.log('remove');
  localStorage.removeItem('recentImage5');
  $polaroid5.classList.toggle('active');
};

removeButton6.onclick = () => {
  console.log(remove);
  localStorage.removeItem('recentImage6');
  $polaroid6.classList.toggle('active');
};

